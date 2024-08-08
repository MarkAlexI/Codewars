(ns kata.summation)

(defn summation [n]
  (apply + (range (inc n)))
  )
