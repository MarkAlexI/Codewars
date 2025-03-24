(ns kata.range-parser
  (:require [clojure.string :as str]))

(defn parse-range [s]
  (let [[_ start end step] (re-matches #"(\d+)-(\d+)(?::(\d+))?" s)
        start (Integer/parseInt start)
        end (Integer/parseInt end)
        step (if step (Integer/parseInt step) 1)]
    (range start (inc end) step))
  )

(defn range-parser [s]
  (->> (str/split s #",")
       (map str/trim)
       (mapcat #(if (re-find #"-" %) (parse-range %) [(Integer/parseInt %)]))
       vec)
  )
