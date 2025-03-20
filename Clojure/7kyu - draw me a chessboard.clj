(ns chessboard.core)

(defn chess-board [rows columns]
  (vec (map-indexed
         (fn [r _]
           (vec (map-indexed
                  (fn [c _]
                    (if (even? (+ r c)) "O" "X"))
                  (range columns))))
         (range rows))))
