(ns kata)
(defn greet [name_ owner]
  (if (= name_ owner)
    "Hello boss"
    "Hello guest")
)
