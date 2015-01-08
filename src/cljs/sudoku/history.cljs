(ns sudoku.history
  (:require [sudoku.appstate :refer [app-state]]))

;lists all the actions that you should add to undo
(def add-to-undo #{:number :clear})
(def new-state #{:easy :medium :hard :random :blank})

(defn do-new-board! [new-board type]
  (swap! app-state #(assoc % :future []))
  (swap! app-state #(assoc % :history [(assoc new-board :type type)])))

(defn undo-is-possible []
  (> (count (:history @app-state)) 1))

(defn redo-is-possible [] ;rename redo
  (> (count (:future @app-state)) 0))

(defn push-onto-undo-stack! [new-state]
  (let [old-board (:board (last (:history @app-state)))
        new-board (:board new-state)]
    (when-not (= old-board new-board)
      (swap! app-state #(assoc % :history (conj (:history %) new-state))))))

(defn do-undo! []
  (when (undo-is-possible)
    (swap! app-state #(assoc % :future (conj (:future %)(last (:history %)))))
    (swap! app-state #(assoc % :history (pop (:history %))))
    (swap! app-state #(assoc % :main (last (:history %))))))

(defn do-redo! []
  (when (redo-is-possible)
    (push-onto-undo-stack! (last (:future @app-state)))
    (swap! app-state #(assoc % :main (last (:future %))))
    (swap! app-state #(assoc % :future (pop (:future %))))))

(defn handle-transaction [tx-data root-cursor]
  (let [tag (:tag tx-data)]
    (if (contains? new-state tag)
      (do-new-board! (:new-value tx-data) tag)
      (if (contains? add-to-undo tag)
        (do (swap! app-state assoc :future [])
          (let [new-state (get-in tx-data [:new-state :main])]
            (push-onto-undo-stack! (assoc new-state :type tag))))))))
  
