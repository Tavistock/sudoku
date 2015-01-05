(ns sudoku.game)

(def digits (set (range 1 10)))
(def rows [:a :b :c :d :e :f :g :h :i])
(def cols (range 1 10))
(def squares (for [r rows c cols] [r c]))
(def unitlist (concat (for [c cols] (for [r rows] [r c]))
                      (for [r rows] (for [c cols] [r c]))
                      (for [rs (partition 3 rows) cs (partition 3 cols)]
                        (for [r rs c cs] [r c]))))
(def units (into {} (for [s squares]
                      [s (for [u unitlist :when (some #{s} u)] u)])))
(def peers (into {} (for [s squares]
                      [s (-> (reduce into #{} (units s)) (disj s))])))
 
(declare reduce-true assign eliminate)
 
(defn unit-tests
  "A set of tests that must pass"
  ;; NB: Tests normally go in separate files and and use clojure.test
  []
  (assert (= 81 (count squares)))
  (assert (= 27 (count unitlist)))
  (assert (every? #(= 3 (count (units %))) squares))
  (assert (every? #(= 20 (count (peers %))) squares))
  (assert (= (units [:c 2])
             [[[:a 2] [:b 2] [:c 2] [:d 2] [:e 2] [:f 2] [:g 2] [:h 2] [:i 2]]
              [[:c 1] [:c 2] [:c 3] [:c 4] [:c 5] [:c 6] [:c 7] [:c 8] [:c 9]]
              [[:a 1] [:a 2] [:a 3] [:b 1] [:b 2] [:b 3] [:c 1] [:c 2] [:c 3]]]))
  (assert (= (peers [:c 2])
             #{[:a 2] [:b 2] [:d 2] [:e 2] [:f 2] [:g 2] [:h 2] [:i 2]
               [:c 1] [:c 3] [:c 4] [:c 5] [:c 6] [:c 7] [:c 8] [:c 9]
               [:a 1] [:a 3] [:b 1] [:b 3]}))
  :passed)

(def grid1 "003020600900305001001806400008102900700000008006708200002609500800203009005010300")


(defn grid-values
  "Convert grid into a map of {square: digit}, with nil for empties"
  [grid]
  (zipmap squares (for [c grid :when (contains? (set (range 10)) (js/parseInt c))]
                    (when-not (#{"0"} c)
                      (js/parseInt c)))))

(def blank-board (grid-values (reduce str (repeat 81 "0"))))
 
(defn parse-grid
  "Convert grid to a map of possible values, {square: digits}. Return false
  on contradiction"
  [grid]
  (reduce-true
   (fn [values [s d]] (assign values s d))
   (into {} (for [s squares] [s digits])) ;to start, any square can be any digit
   (remove (comp nil? val) grid)))
 
;;; Constraint Propagation ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 
(defn assign
  "Whittle down the square at s to digit d by eliminating every digit
  except d from the square, and doing constraint propogation. Returns
  false if a contradiction results"
  [values s d]
  (reduce-true #(eliminate %1 s %2)
               values
               (disj (values s) d)))
 
(defn eliminate
  "Eliminate digit d from square s and do any appropriate constraint
  propogation"
  [values s d]
  (if-not ((values s) d)
    values ;already eliminated
    (when-not (= #{d} (values s)) ;can't remove last value
      (let [values (update-in values [s] disj d)
            values (if (= 1 (count (values s)))
                     ;; Only one digit left, eliminate it from peers
                     (reduce-true #(eliminate %1 %2 (first (%1 s)))
                                  values
                                  (peers s))
                     values)]
        (reduce-true
         (fn [values u]
           (let [dplaces (for [s u :when ((values s) d)] s)]
             (when-not (zero? (count dplaces)) ;must be a place for this value
               (if (= 1 (count dplaces))
                 ;; Only one spot remaining for d in a unit -- assign it
                 (assign values (first dplaces) d)
                 values))))
         values
         (units s))))))

(defn search
  "Using depth-first search and propagation, try all possible values"
  [values]
  (when values
    (let [scount (comp count values)] ;digits remaining
      (if (every? #(= 1 (scount %)) squares)
        values ;solved!
        (let [s (apply min-key scount (filter #(< 1 (scount %)) squares))]
          (some identity (for [d (values s)]
                           (search (assign values s d)))))))))

(defn solve [grid] (-> grid grid-values parse-grid search))

(defn- reduce-true
  "Like reduce but short-circuits upon logical false"
  [f val coll]
  (when val
    (loop [val val, coll coll]
      (if (empty? coll)
        val
        (when-let [val* (f val (first coll))]
          (recur val* (rest coll)))))))