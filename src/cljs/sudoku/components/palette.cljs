(ns sudoku.components.palette
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn palette-selected-view [number owner]
  (reify
    om/IRender
    (render
      [_]
      (let [n (number 0)]
      (dom/div #js {:className "palette-selected"} (if n n "x"))))))

(defn palette-col-view [number owner]
  (reify
    om/IRender
    (render
      [_]
      (apply
        dom/div
        #js {:className "palette-col"}
        (for [n (conj (range 1 10) nil)]
          (dom/div
            #js {:className "palette-col-num"
                 :onMouseDown #(om/update! number [n])}
            (if n n "x")))))))

(defn palette-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (let [number (get-in app [:gui :number])]
        (dom/div
          #js {:className "palette"}
          (om/build palette-selected-view number)
          (om/build palette-col-view number))))))