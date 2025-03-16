(ns newaverage.core)

(defn new-avg [arr navg]
  (let [n (count arr)
        sum (reduce + arr)
        need (Math/ceil (- (* navg (+ n 1)) sum))]
    (if (pos? need)
      (int need)
      (throw (IllegalArgumentException. "Invalid donation."))))
  )
