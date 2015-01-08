(ns sudoku.components.historymenu
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.history :refer [do-undo! do-redo! undo-is-possible redo-is-possible]]))

(defn historymenu-list-view [history owner]
  (reify
    om/IRender
    (render
      [_]
      (let [elems (->> history (map #(:type %)) reverse (map str))]
        (apply dom/ul #js {:className "historymenu__list"}
               (map #(dom/li #js {:className "historymenu__elem"} %) elems))))))

(defn historymenu-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div
        #js {:className "historymenu"}
        (dom/div #js {:className "historymenu__header"}
                 (dom/div #js {:className "historymenu__title"} "History")
                 (dom/div
                   #js {:className "historymenu__actions"}
                   (dom/div
                     #js {:className (if (undo-is-possible)
                                       "historymenu__undo"
                                       "historymenu__undo--disabled")
                          :onMouseDown #(do-undo!)}
                     "undo")
                   (dom/div
                     #js {:className (if (redo-is-possible)
                                       "historymenu__redo"
                                       "historymenu__redo--disabled")
                          :onMouseDown #(do-redo!)}
                     "redo")))
        (om/build historymenu-list-view (:history app))))))