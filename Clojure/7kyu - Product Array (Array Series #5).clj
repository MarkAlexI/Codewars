(ns kata)
(defn product-array [numbers]
  (let [total (apply * numbers)]
    (mapv #(quot total %) numbers))
  )
