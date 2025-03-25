(ns the-shell-game)

(defn find-the-ball [start swaps]
  (reduce (fn [pos [a b]]
            (cond
              (= pos a) b
              (= pos b) a
              :else pos))
            start
          swaps)
  )
