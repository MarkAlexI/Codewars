(ns kata
  (:require [clojure.string :as str]))
(defn draw-stairs [n]
  (str/join "\n"
            (for [i (range n)]
              (str (apply str (repeat i " ")) "I")))
)
