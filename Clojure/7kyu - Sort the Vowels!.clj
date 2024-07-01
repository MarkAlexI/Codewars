(ns vowel-sort)
  (defn sort-vowels [s]
    (if (string? s)
      (let [vowels #{"a" "e" "i" "o" "u" "A" "E" "I" "O" "U"}
            left-side (atom [])
            right-side (atom [])]
        (doseq [char s]
          (if (contains? vowels (str char))
            (do
              (swap! right-side conj char)
              (swap! left-side conj ""))
            (do
              (swap! right-side conj "")
              (swap! left-side conj char))))
        (apply str (interpose "\n" (map #(str %1 "|" %2) @left-side @right-side))))
     ""))
