(ns kata)

(defn shift-char [c]
  (char (+ 97 (mod (+ (- (int c) (int \a)) 10) 26)))
  )
(defn move-ten[st]
  (apply str (map shift-char st))
  )
