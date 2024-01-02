(ns app.db
  (:require
    [datomic.api :as d]
    [app.schema :refer [schema]]
  ))

(def db-uri "datomic:mem://todos")

(def first-list [{:db/id (d/tempid :db.part/user)
                  :todo-list/id 1
                  :todo-list/item-count 0
                  :todo-list/items []}
])

(defn init-datomic [db-uri]
  (d/create-database db-uri)
  (d/connect db-uri))

(defonce conn (atom nil))

(defn start []
  (println "Starting database")
  (reset! conn (init-datomic db-uri))

  (d/transact @conn schema)

  (d/transact @conn first-list)
)

(defn stop []
  (println "Stopping database")
  (d/delete-database db-uri)
  (reset! conn nil))
