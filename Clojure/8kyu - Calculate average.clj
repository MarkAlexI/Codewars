(ns calculate-average)

(defn find-average
  [numbers]
    (cond
      (= (count numbers) 0) 0.0
      :else (/ (apply + numbers) (count numbers)))
)
