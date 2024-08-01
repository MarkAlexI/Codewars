(ns kata)
(defn area-of-polygon-inside-circle [r n]
  "algebra"
  (Double/parseDouble (format "%.3f" (/ (* n (* r r (Math/sin (/ (* Math/PI 2) n)))) 2))))
