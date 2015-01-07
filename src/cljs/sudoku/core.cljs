(ns sudoku.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.game :as game]
            [sudoku.history :refer [handle-transaction]]
            [sudoku.appstate :refer [app-state]]
            [sudoku.components.palette :refer [palette-view]]
            [sudoku.components.board :refer [board-view]]
            [sudoku.components.historymenu :refer [historymenu-view]]
            [sudoku.components.newboardmenu :refer [newboardmenu-view]]
            ))

(defn sudoku-app-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div
        nil 
        (dom/div #js {:className "app"} "App")
        (om/build palette-view app)
        (om/build board-view app)
        (om/build historymenu-view app)
        (om/build newboardmenu-view app)))))

(defn main []
  (om/root sudoku-app-view app-state
           {:target (. js/document (getElementById "app"))
            :tx-listen handle-transaction})
  )