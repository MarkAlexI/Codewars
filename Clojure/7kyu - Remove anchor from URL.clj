(ns kata
  (:require [clojure.string :refer [replace]]))
(defn remove-url-anchor [url]
  (replace url #"#.*" "")
  )
