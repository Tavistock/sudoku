(ns sudoku.appstate
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.game :as game]))

(def start-state {:board game/board1
                  :start (->> game/board1 (filter val) (map key) (into #{}))})

(defonce app-state
  (atom
    {:main start-state
     
     :history [(assoc start-state :type :new-board)]
     
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
