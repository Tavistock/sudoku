(ns sudoku.components.board
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sudoku.appstate :as state]
            [sudoku.game :as game :refer [rows]]))

(defn cell-classname
  [{:keys [highlight valid hinting-on]}]
  (if highlight
    (if hinting-on
       (if valid
         "valid cell"
         "invalid cell")
      "highlighted cell")
    "cell"))

(defn cell-view [{:keys [board value number id highlighted start]} owner]
  "cell =
  {
  :id [:a 7]
  :value nil
  :board board-cursor
  :start #{...}
  :highlighted #{...}
  ...
  :canidates [...]
  :hinting-on false
  :canidates-on false
  }
  note: valid = (comtains? canidates id)
  "
  (reify
    om/IInitState
    (init-state
      [_]
      ;hover is either nil or the number of the gui palette
      {:hover nil})
    om/IRenderState
    (render-state
      [_ {:keys [hover], :as state}]
      
      (let [locked (contains? start id)
            highlight (contains? highlighted id)]
        
        (dom/div
          #js {:className
               (cell-classname {:highlight highlight})
               :onMouseDown
               #(when-not locked
                  ; when the cell is not locked and you click update
                  ; the board and remove hover
                  (do
                    (om/update! board [id] number {:add-to-undo true :type :number})
                    (om/set-state! owner [:hover] nil)))
               :onMouseEnter
               #(do
                  (when-not value (om/set-state! owner [:hover] number))
                  (when-not locked
                    (om/update! highlighted (conj (game/peers id) id))))
               :onMouseLeave
               #(do
                  ;on leave reset associated state [highlight hover]
                  (om/set-state! owner [:hover] nil)
                  (om/update! highlighted []))}
          (dom/span
            #js {:className
                 (if locked
                   "number locked"
                   "number")}
            value)
          (dom/span
            #js {:className
                 "hover"}
            hover))))))

(defn in-cells [{:keys [row-key row start number board highlighted]}]
  (for [x (range 1 10)]
    {:id [row-key x]
     :value (->> row (filter #(= x (second (key %)))) (map val) first)
     :start start
     :number number
     :board board
     :highlighted highlighted}))

(defn row-view [row owner]
  "row is something like:
  {
  :row-key :a
  :row [id val]
  :board board-cursor
  :number 1
  :start #{...}
  :highlighted ['id'...]
  ...
  :canidates {'id' 'vector of canidates'...}
  :hinting-on false
  :canidates-on false
  }"
  (reify
    om/IRender
    (render
      [_]
      (let [cells (in-cells row)]
        (apply dom/div #js {:className "row"}
               (om/build-all cell-view cells))))))

(defn filter-row [row-key board]
  ( board))

(defn in-rows [{:keys [highlighted]:as app}]
  (let [board (get-in app [:main :board])
        start (get-in app [:main :start])
        number ((get-in app [:gui :number]) 0)]
    (for [row-key rows]
      {:row-key row-key
       :row (->> board (filter #(= (first (key %)) row-key)) (into {}))
       :board board
       :number number
       :start start
       :highlighted highlighted})))

(defn board-view [app owner]
  (reify
    om/IRender
    (render
      [_]
      (let [rows (in-rows app)]
        (apply dom/div #js {:className "board"} 
               (om/build-all row-view rows))))))