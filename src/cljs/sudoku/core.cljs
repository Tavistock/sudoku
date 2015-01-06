(ns sudoku.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ankha.core :as ankha]
            [sudoku.game :as game]
            [sudoku.appstate :refer [app-state]]
            [sudoku.components.palette :refer [palette-view]]
            [sudoku.components.board :refer [board-view]]))

(defn sudoku-app-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div
        nil 
        (dom/div nil "App")
        (om/build palette-view app)
        (om/build board-view app)))))

(defn main []
  (om/root sudoku-app-view app-state
           {:target (. js/document (getElementById "app"))})
  ; (om/root ankha/inspector app-state
  ;          {:target (. js/document (getElementById "ankha"))})
  )