(ns app.mutations
  (:require
    [app.db :as db]
    [datomic.api :as d]
    [com.wsscode.pathom.connect :as pc]))

(pc/defmutation add-todo [env {list-id :todo-list/id todo-value :todo-item/value}]
                {::pc/sym `add-todo}
                (let [db (d/db @db/conn)
                      query-result (d/q '[:find ?e ?item-count
                                          :where
                                          [?e :todo-list/item-count ?item-count]
                                          [?e :todo-list/id ?id]]
                                        db 1)
                      todo-list-eid (first (first query-result))
                      item-count (second (first query-result))

                      result @(d/transact @db/conn [{:db/id (d/tempid :db.part/user)
                                                     :todo-item/id (inc item-count)
                                                     :todo-item/value todo-value}])
                      tempids (:tempids result)
                      tempid (first (keys tempids))
                      todo-item-eid (get tempids tempid)]

                  (d/transact @db/conn [[:db/add todo-list-eid :todo-list/items todo-item-eid]])
                  (d/transact @db/conn [{:db/id todo-list-eid
                                         :todo-list/item-count (inc item-count)}])))


(pc/defmutation edit-todo [env {todo-id :todo-item/id new-value :todo-item/value}]
                {::pc/sym `edit-todo}
                (let [todo-id-parsed (Integer. todo-id)
                      db (d/db @db/conn)
                      query-result (d/q '[:find ?e
                                          :in $ ?id
                                          :where
                                          [?e :todo-item/id ?id]]
                                        db todo-id-parsed)
                      todo-eid (ffirst query-result)]

                  (d/transact @db/conn [{:db/id todo-eid :todo-item/value new-value}])))


(pc/defmutation delete-todo [env {list-id :todo-list/id todo-id :todo-item/id}]
                {::pc/sym `delete-todo}
                (let [todo-id-parsed (Integer. todo-id)
                      db (d/db @db/conn)
                      query-result (d/q '[:find ?e ?item-count
                                          :where
                                          [?e :todo-list/item-count ?item-count]
                                          [?e :todo-list/id ?id]]
                                           db 1)
                      todo-list-eid (first (first query-result))
                      item-count (second (first query-result))
                      query-todo-result (d/q '[:find ?e
                                          :in $ ?id
                                          :where
                                          [?e :todo-item/id ?id]]
                                           db todo-id-parsed)
                      todo-eid (ffirst query-todo-result)]

                  (d/transact @db/conn [[:db/retract todo-list-eid :todo-list/items todo-eid]])
                  (d/transact @db/conn [[:db/retractEntity todo-eid]])
                  (d/transact @db/conn [{:db/id todo-list-eid
                                         :todo-list/item-count (dec item-count)}])))



(def mutations [add-todo edit-todo delete-todo])