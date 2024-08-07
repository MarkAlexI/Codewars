(ns is-it-a-letter)

(defn letter? [s]
  (and (= 1 (count (re-seq #"[A-Za-z]" s)))
    (= 1 (count s)))
)
