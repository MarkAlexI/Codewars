(ns descending-order)

(defn desc-order [n]
  (Integer. (apply str (reverse (sort (str n)))))
  )
