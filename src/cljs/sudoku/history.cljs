(ns sudoku.history
  (:require [sudoku.appstate :refer [app-state]]))

(defn undo-is-possible []
  (> (count (:history @app-state)) 1))

(defn redo-is-possible [] ;rename redo
  (> (count (:future @app-state)) 0))

(defn push-onto-undo-stack! [new-state]
  (let [old-app-state (last (:history @app-state))]
    (when-not (= old-app-state new-state)
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
  (when (get-in tx-data [:tag :add-to-undo])
    (swap! app-state assoc :future [])
    (let [new-state (get-in tx-data [:new-state :main])
          type      (get-in tx-data [:tag :type])]
      (push-onto-undo-stack! (assoc new-state :type type)))))