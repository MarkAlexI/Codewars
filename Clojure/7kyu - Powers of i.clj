(ns kata.powers-of-i)
(defn pofi [n]
  (nth ["1" "i" "-1" "-i"] (mod n 4))
)
