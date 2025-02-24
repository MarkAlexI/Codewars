(ns affinity)

(defn vector-affinity
  [a b]
  (cond
    (= (count a) (count b) 0) 1.0
    (> (count a) 0)
      (float
        (/
         (count (filter true? (map = a b)))
         (max (count a) (count b))))
    :else 0.0))
