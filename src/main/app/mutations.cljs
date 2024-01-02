(ns app.mutations
  (:require
  [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]))

(defmutation add-todo
  [{:todo-item/keys [value]}]
  (action [{:keys [state]}]
          (let [new-id (inc (get-in @state [:root/todo-list :todo-list/item-count])) new-item {:todo-item/id new-id :todo-item/value value}]
            (swap! state update-in [:todo-item/id] assoc new-id new-item)
            (swap! state update-in [:root/todo-list :todo-list/items] conj [:todo-item/id new-id])
            (swap! state update-in [:root/todo-list :todo-list/item-count] inc)
            ))
  (remote [env] true))


(defmutation edit-todo [{:keys [state]}]
  (remote [env] true))

(defmutation delete-todo [{:todo-item/keys [id]}]
             (action [{:keys [state]}]
                     (swap! state update-in [:root/todo-list :todo-list/items]
                            (fn [items] (vec (remove #(= (second %) id) items))))
                     (swap! state update-in [:todo-item/id] dissoc id)
                     (swap! state update-in [:root/todo-list :todo-list/item-count] dec))
             (remote [env] true))

