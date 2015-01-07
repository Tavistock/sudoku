(ns sudoku.components.historymenu
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.history :refer [do-undo! do-redo!]]))

(defn historymenu-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div
        #js {:className "historymenu"}
        (dom/div #js {:className "undo" :onMouseDown #(do-undo!)} "undo")
        (dom/div #js {:className "redo" :onMouseDown #(do-redo!)} "redo")))))