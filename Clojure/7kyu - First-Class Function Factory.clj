(ns first-class-function-factory)

(defn factory [x]
  (fn [arr] (map #(* x %) arr))
  )
