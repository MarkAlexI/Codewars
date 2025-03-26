(ns kata.how-good-are-you)
(defn better_than_average [class_points my_points]
  (let [average (/ (+ (apply + class_points) my_points) (inc (count class_points)))]
    (> my_points average)))
