(ns hangman.core
  (:gen-class))

(def total-lifes 6)

(defn loose [] (print "You loose!"))

(defn run [lifes]
  (if (= lifes 0)
    (loose)
    (do
      (print lifes)
      (run (dec lifes))
    )
  )
)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
