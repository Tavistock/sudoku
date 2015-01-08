(ns sudoku.appstate
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.game :refer [grids grid-values blank-grid]]))

(defn new-state [grid]
  {:board grid
   :start (->> grid (filter val) (map key) (into #{}))})

(defn rand-grid [] (rand-nth grids))

(defn rand-state [] (->> (rand-grid) grid-values new-state))

(def blank-state (->> blank-grid grid-values new-state))

(def start-state (rand-state))

(defonce app-state
  (atom
    {:main start-state
     
     :history [(assoc start-state :type :random)]
     
     :future []
     
     :highlighted []
     
     :canidates []
     
     :gui {:number [1]
           :canidates-on [false]
           :hinting-on [false]
           :valid [false]}
     
     :info {:title ",su'da:ku:"
            :sub-title "sudoku companion"
            :version "0.0.1-alpha"}
     }))
