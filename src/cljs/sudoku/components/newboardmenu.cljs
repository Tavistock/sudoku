(ns sudoku.components.newboardmenu
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn newboardmenu-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div nil nil))))