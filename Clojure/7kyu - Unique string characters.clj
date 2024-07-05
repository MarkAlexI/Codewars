(ns kata)
(require '[clojure.set :refer [intersection]])

(defn solve [a b]
  (def inter (intersection (set a) (set b)))
  (apply str (concat (filter #(not (contains? inter %)) a)
                     (filter #(not (contains? inter %)) b)))
  )
