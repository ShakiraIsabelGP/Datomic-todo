(ns app.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]
    [com.fulcrologic.fulcro.data-fetch :as df]
    [app.mutations :as api]
    [com.fulcrologic.fulcro.dom :as dom :refer [div input p button ul li h1 i]]))


(defsc TodoItem
  [this {:todo-item/keys [id value]}]
  {:query [:todo-item/id :todo-item/value]
   :ident :todo-item/id
   :initLocalState (fn [this {:todo-item/keys [id value]}]
                    {
                     :id id
                     :edit-value value
                     :editing? false
                     :on-edit-change (fn [e]
                                       (comp/set-state! this (assoc (comp/get-state this) :edit-value (.. e -target -value))))
                     :on-edit-ok     (fn [_]
                                       (let [new-value (comp/get-state this :edit-value)]
                                         (m/set-value! this :todo-item/value new-value)
                                         (comp/transact! this `[(api/edit-todo {:todo-item/id ~id :todo-item/value ~new-value})]))
                                       (comp/set-state! this (assoc (comp/get-state this) :editing? false)))
                     :on-edit-click #(comp/set-state! this (assoc (comp/get-state this) :editing? true))
                     :on-edit-cancel (fn [_]
                                       (comp/set-state! this (assoc (comp/get-state this) :editing? false
                                                                                          :edit-value value)))
                     :on-delete     #(comp/transact! this `[(api/delete-todo {:todo-list/id 1, :todo-item/id ~id})])
                     })
  }
  (let [{:keys [editing? on-edit-click edit-value on-edit-change on-edit-ok on-edit-cancel on-delete]} (comp/get-state this)]
    (if editing?
      (ul  :.list-group.list-group-flush
           (li :.list-group-item(input {:type     "text"
                                        :value    edit-value
                                        :onChange on-edit-change})
               (button :.btn.btn-primary {:style {:margin "5px"} :type "button" :onClick on-edit-ok} (i :.bi.bi-check-circle))

               (button :.btn.btn-primary {:style {:margin "5px"} :type "button" :onClick on-edit-cancel} (i :.bi.bi-x-circle))))
      (ul :.list-group.list-group-flush
          (li :.list-group-item {}
              value
              (button :.btn.btn-primary {:style {:margin "5px"} :type "button" :onClick on-edit-click} (i :.bi.bi-pencil-square))
              (button :.btn.btn-primary {:style {:margin "5px"} :type "button" :onClick on-delete} (i :.bi.bi-trash) )))))
  )

(def ui-todo-item (comp/factory TodoItem {:keyfn :todo-item/id}))


(defsc TodoInput
  [this {:todo-input/keys [value]}]
  {:query [:todo-input/value]
   :initial-state {:todo-input/value ""}
   :initLocalState (fn [this {:todo-input/keys [value]}]
                     {:input-value value
                      :on-change (fn [e]
                                   (comp/set-state! this (assoc (comp/get-state this) :input-value (.. e -target -value))))
                      :on-add (fn [e]
                                (comp/transact! this `[(api/add-todo {:todo-list/id 1 :todo-item/value ~(comp/get-state this :input-value)})])
                                (comp/set-state! this (assoc (comp/get-state this) :input-value "")))
                      })
   }
  (let [{:keys [on-change on-add input-value]} (comp/get-state this)]
    (div
      (h1 "To do list") (input :.form-control
               {:type "text"
                         :value input-value
                         :onChange on-change
                         :onKeyDown (fn [e]
                                      (when (= (.-keyCode e) 13)
                                        (on-add e)
                                        ))
                         :placeholder "Add a new todo item"}))))

(def ui-todo-input (comp/factory TodoInput))

(defsc TodoList
  [this {:todo-list/keys [items]}]
  {:query [:todo-list/id
           :todo-list/item-count
           {:todo-list/items (comp/get-query TodoItem)}]
   :initial-state {}
  }

  (when (not-empty items)
   (dom/ul (map ui-todo-item items))
  ))

(def ui-todo-list (comp/factory TodoList))

(defsc Root
  [this {:root/keys [todo-list]}]
  {:query [{:root/todo-list (comp/get-query TodoList)}]
   :initial-state {}
   :componentDidMount (fn [this]
                        (df/load! this :root/todo-list TodoList))
  }
  (div (ui-todo-input)
       (ui-todo-list todo-list)))