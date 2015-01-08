(ns sudoku.components.newboardmenu
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.appstate :refer [rand-state blank-state]]))

(defn newboardmenu-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (dom/div
        #js {:className "newboardmenu"} 
        (dom/div #js {:className "newboardmenu__title"} "New Board")
        (dom/div
          #js {:className "newboardmenu__actions"}
          (dom/div
            #js {:className
                 "newboardmenu__button"
                 :onMouseDown
                 #(om/update! app [:main] (rand-state) :easy)}
            "Easy")
          (dom/div
            #js {:className
                 "newboardmenu__button"
                 :onMouseDown
                 #(om/update! app [:main] (rand-state) :medium)}
            "Medium")
          (dom/div
            #js {:className
                 "newboardmenu__button"
                 :onMouseDown
                 #(om/update! app [:main] (rand-state) :hard)}
            "Hard")
          (dom/div
            #js {:className
                 "newboardmenu__button"
                 :onMouseDown
                 #(om/update! app [:main] (rand-state) :random)}
            "Random")
          (dom/div
            #js {:className
                 "newboardmenu__button"
                 :onMouseDown
                 #(om/update! app [:main] blank-state :blank)}
            "Blank")
          (dom/div #js {:className "newboardmenu__button"} "Parse"))))))
