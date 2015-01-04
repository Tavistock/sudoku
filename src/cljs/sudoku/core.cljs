(ns sudoku.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.game :as game]))

(defonce app-state (atom {:current-board (game/grid-values game/grid1)
                          :locked []}))

(defn in-rows
  [grid]
  (for [row-key game/rows]
    (filter #(= row-key (first (key %))) grid)))

(defn in-columns [row]
  (sort #(compare (second (key %1)) (second (key %2))) row))

(defn sudoku-cell-view [cell owner]
  (reify
    om/IRender
    (render
      [_]
      (let [id (clj->js (key cell))
            value (val cell)]
      (dom/div #js {:className "cell"} 
               (dom/span #js {:className "id"} id)
               (dom/span #js {:className "number"} value))))))

(defn sudoku-row-view [row owner]
  (reify
    om/IRender
    (render
      [_]
      (let [cells (in-columns row)]
        (apply dom/div #js {:className "row"}
               (om/build-all sudoku-cell-view cells))))))

(defn sudoku-board-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (let [rows (in-rows (:current-board app))]
        (apply dom/div #js {:className "board"}
               (om/build-all sudoku-row-view rows))))))

(defn handle-change
  [e owner]
  (om/set-state! owner :text (.. e -target -value)))

(defn str->sudoku [string]
  (reduce
    #(if (contains? (set (range 10)) (js/parseInt %2))
       (str %1 %2)
       (str %1 "0"))
    ""
    string))

(defn valid-grid?
  [grid]
  (= 81 (count grid)))

(defn transact-board! [app text]
  (let [sudoku-text (str->sudoku text)]
    (om/transact! app :current-board #(game/grid-values sudoku-text))))

(defn solve-board! [app grid]
  (om/transact! app :current-board #(->> grid
                                        game/parse-grid
                                        game/search
                                        (map (fn [x] [(first x) (first (second x))]))
                                        )))

(defn sudoku-control-view [app owner]
  (reify
    om/IInitState
    (init-state
      [_]
      {:text ""})
    om/IRenderState
    (render-state
      [this state]
      (dom/div
        nil
        (dom/input #js {:type "text"
                        :value (:text state)
                        :onChange #(handle-change % owner)})
        (dom/button (if (valid-grid? (:text state))
                      #js {:onClick #(transact-board! app (:text state))}
                      #js {:disabled true}) "Parse")
        (dom/button #js {:onClick #(solve-board! app (:current-board @app))} "Solve")))))

(defn main []
  (om/root sudoku-board-view app-state
           {:target (. js/document (getElementById "app"))})
  (om/root sudoku-control-view app-state
           {:target (. js/document (getElementById "control"))})
  )