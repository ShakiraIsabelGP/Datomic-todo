goog.provide('app.ui');

var options__39984__auto___43541 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449)], null);
}),new cljs.core.Keyword(null,"ident","ident",-742346),(function app$ui$ident_STAR_(_,props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new cljs.core.Keyword("todo-item","id","todo-item/id",116791802).cljs$core$IFn$_invoke$arity$1(props)], null);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,p__43499){
var map__43500 = p__43499;
var map__43500__$1 = cljs.core.__destructure_map(map__43500);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43500__$1,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43500__$1,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"edit-value","edit-value",1278465978),value,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,new cljs.core.Keyword(null,"on-edit-change","on-edit-change",940333139),(function (e){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"edit-value","edit-value",1278465978),e.target.value));
}),new cljs.core.Keyword(null,"on-edit-ok","on-edit-ok",226220156),(function (_){
var new_value_43542 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"edit-value","edit-value",1278465978));
com.fulcrologic.fulcro.mutations.set_value_BANG_(this$,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),new_value_43542);

com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("app.mutations","edit-todo","app.mutations/edit-todo",358657570,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),null,(1),null)),(new cljs.core.List(null,id,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),null,(1),null)),(new cljs.core.List(null,new_value_43542,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"editing?","editing?",1646440800),false));
}),new cljs.core.Keyword(null,"on-edit-click","on-edit-click",1632906252),(function (){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"editing?","editing?",1646440800),true));
}),new cljs.core.Keyword(null,"on-edit-cancel","on-edit-cancel",-864672331),(function (_){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"editing?","editing?",1646440800),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-value","edit-value",1278465978),value], 0)));
}),new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),(function (){
return com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("app.mutations","delete-todo","app.mutations/delete-todo",1609791111,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),null,(1),null)),(new cljs.core.List(null,id,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_TodoItem(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__43503 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__43503__$1 = cljs.core.__destructure_map(map__43503);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43503__$1,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43503__$1,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449));
var map__43504 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__43504__$1 = cljs.core.__destructure_map(map__43504);
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var on_edit_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"on-edit-click","on-edit-click",1632906252));
var edit_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"edit-value","edit-value",1278465978));
var on_edit_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"on-edit-change","on-edit-change",940333139));
var on_edit_ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"on-edit-ok","on-edit-ok",226220156));
var on_edit_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"on-edit-cancel","on-edit-cancel",-864672331));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
if(cljs.core.truth_(editing_QMARK_)){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:36"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),edit_value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),on_edit_change], null)], 0))], null),null);
var G__43505 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:36"], null),G__43505], 0));
} else {
return G__43505;
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:39"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_edit_ok], null)], 0)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"data-fulcro-source": "app.ui:39", "className": "bi bi-check-circle"})])], null),new cljs.core.Keyword(null,".btn.btn-primary",".btn.btn-primary",579489591)),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:41"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_edit_cancel], null)], 0)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"data-fulcro-source": "app.ui:41", "className": "bi bi-x-circle"})])], null),new cljs.core.Keyword(null,".btn.btn-primary",".btn.btn-primary",579489591))], null),new cljs.core.Keyword(null,".list-group-item",".list-group-item",-112138655));
var G__43506 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:35"], null),G__43506], 0));
} else {
return G__43506;
}
})()], null),new cljs.core.Keyword(null,".list-group.list-group-flush",".list-group.list-group-flush",-1958495025));
} else {
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["li",({"data-fulcro-source": "app.ui:43", "className": "list-group-item"}),com.fulcrologic.fulcro.components.force_children(value),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:45"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_edit_click], null)], 0)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"data-fulcro-source": "app.ui:45", "className": "bi bi-pencil-square"})])], null),new cljs.core.Keyword(null,".btn.btn-primary",".btn.btn-primary",579489591))),com.fulcrologic.fulcro.components.force_children(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:46"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_delete], null)], 0)),com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["i",({"data-fulcro-source": "app.ui:46", "className": "bi bi-trash"})])], null),new cljs.core.Keyword(null,".btn.btn-primary",".btn.btn-primary",579489591)))]);
var G__43507 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:42"], null),G__43507], 0));
} else {
return G__43507;
}
})()], null),new cljs.core.Keyword(null,".list-group.list-group-flush",".list-group.list-group-flush",-1958495025));
}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.TodoItem !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.TodoItem = (function app$ui$TodoItem(props__39985__auto__){
var this__39986__auto__ = this;
var temp__5751__auto___43543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__39984__auto___43541,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___43543)){
var init_state__39987__auto___43544 = temp__5751__auto___43543;
(this__39986__auto__.state = (function (){var obj43509 = ({"fulcro$state":(function (){var G__43510 = this__39986__auto__;
var G__43511 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__39985__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__39985__auto__,"fulcro$value"));
return (init_state__39987__auto___43544.cljs$core$IFn$_invoke$arity$2 ? init_state__39987__auto___43544.cljs$core$IFn$_invoke$arity$2(G__43510,G__43511) : init_state__39987__auto___43544.call(null,G__43510,G__43511));
})()});
return obj43509;
})());
} else {
(this__39986__auto__.state = (function (){var obj43513 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj43513;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.TodoItem,new cljs.core.Keyword("app.ui","TodoItem","app.ui/TodoItem",-1791488922),options__39984__auto___43541);
app.ui.ui_todo_item = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(app.ui.TodoItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("todo-item","id","todo-item/id",116791802)], null));

var options__39984__auto___43545 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306),""], null),cljs.core.PersistentArrayMap.EMPTY,params);
}),new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876),(function (this$,p__43514){
var map__43515 = p__43514;
var map__43515__$1 = cljs.core.__destructure_map(map__43515);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43515__$1,new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-value","input-value",-1719954369),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"input-value","input-value",-1719954369),e.target.value));
}),new cljs.core.Keyword(null,"on-add","on-add",-1283372042),(function (e){
com.fulcrologic.fulcro.components.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("app.mutations","add-todo","app.mutations/add-todo",-1054923229,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),null,(1),null)),(new cljs.core.List(null,com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"input-value","input-value",-1719954369)),null,(1),null))], 0))))),null,(1),null))))),null,(1),null)))))));

return com.fulcrologic.fulcro.components.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"input-value","input-value",-1719954369),""));
})], null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_TodoInput(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__43516 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__43516__$1 = cljs.core.__destructure_map(map__43516);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43516__$1,new cljs.core.Keyword("todo-input","value","todo-input/value",-992812306));
var map__43517 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__43517__$1 = cljs.core.__destructure_map(map__43517);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43517__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43517__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var input_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43517__$1,new cljs.core.Keyword(null,"input-value","input-value",-1719954369));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = com.fulcrologic.fulcro.dom.macro_create_element_STAR_(["h1",({"data-fulcro-source": "app.ui:67"}),"To do list"]);
var G__43518 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:66"], null),G__43518], 0));
} else {
return G__43518;
}
})(),com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:67"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),input_value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),on_change,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13))){
return (on_add.cljs$core$IFn$_invoke$arity$1 ? on_add.cljs$core$IFn$_invoke$arity$1(e) : on_add.call(null,e));
} else {
return null;
}
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add a new todo item"], null)], 0))], null),new cljs.core.Keyword(null,".form-control",".form-control",-1327453657))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.TodoInput !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.TodoInput = (function app$ui$TodoInput(props__39985__auto__){
var this__39986__auto__ = this;
var temp__5751__auto___43546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__39984__auto___43545,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___43546)){
var init_state__39987__auto___43547 = temp__5751__auto___43546;
(this__39986__auto__.state = (function (){var obj43520 = ({"fulcro$state":(function (){var G__43521 = this__39986__auto__;
var G__43522 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__39985__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__39985__auto__,"fulcro$value"));
return (init_state__39987__auto___43547.cljs$core$IFn$_invoke$arity$2 ? init_state__39987__auto___43547.cljs$core$IFn$_invoke$arity$2(G__43521,G__43522) : init_state__39987__auto___43547.call(null,G__43521,G__43522));
})()});
return obj43520;
})());
} else {
(this__39986__auto__.state = (function (){var obj43524 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj43524;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.TodoInput,new cljs.core.Keyword("app.ui","TodoInput","app.ui/TodoInput",-1807947986),options__39984__auto___43545);
app.ui.ui_todo_input = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.TodoInput);

var options__39984__auto___43548 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-list","id","todo-list/id",116741263),new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.TodoItem)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("todo-list","items","todo-list/items",35585877),app.ui.TodoItem], null),params);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_TodoList(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__43525 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__43525__$1 = cljs.core.__destructure_map(map__43525);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43525__$1,new cljs.core.Keyword("todo-list","items","todo-list/items",35585877));
if(cljs.core.truth_(cljs.core.not_empty(items))){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.ui_todo_item,items);
var G__43526 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:88"], null),G__43526], 0));
} else {
return G__43526;
}
})()], null),null);
} else {
return null;
}
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.TodoList !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.TodoList = (function app$ui$TodoList(props__39985__auto__){
var this__39986__auto__ = this;
var temp__5751__auto___43549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__39984__auto___43548,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___43549)){
var init_state__39987__auto___43550 = temp__5751__auto___43549;
(this__39986__auto__.state = (function (){var obj43528 = ({"fulcro$state":(function (){var G__43529 = this__39986__auto__;
var G__43530 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__39985__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__39985__auto__,"fulcro$value"));
return (init_state__39987__auto___43550.cljs$core$IFn$_invoke$arity$2 ? init_state__39987__auto___43550.cljs$core$IFn$_invoke$arity$2(G__43529,G__43530) : init_state__39987__auto___43550.call(null,G__43529,G__43530));
})()});
return obj43528;
})());
} else {
(this__39986__auto__.state = (function (){var obj43532 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj43532;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.TodoList,new cljs.core.Keyword("app.ui","TodoList","app.ui/TodoList",-1016120425),options__39984__auto___43548);
app.ui.ui_todo_list = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(app.ui.TodoList);

var options__39984__auto___43551 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function app$ui$query_STAR_(this$){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(app.ui.TodoList)], null)], null);
}),new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),(function app$ui$build_initial_state_STAR_(params){
return com.fulcrologic.fulcro.components.make_state_map(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),app.ui.TodoList], null),params);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (this$){
return com.fulcrologic.fulcro.data_fetch.load_BANG_.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),app.ui.TodoList);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function app$ui$render_Root(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var map__43533 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__43533__$1 = cljs.core.__destructure_map(map__43533);
var todo_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43533__$1,new cljs.core.Keyword("root","todo-list","root/todo-list",664379024));
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var a__41915__auto__ = (app.ui.ui_todo_input.cljs$core$IFn$_invoke$arity$0 ? app.ui.ui_todo_input.cljs$core$IFn$_invoke$arity$0() : app.ui.ui_todo_input.call(null));
var G__43534 = a__41915__auto__;
if(cljs.core.map_QMARK_(a__41915__auto__)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-fulcro-source","data-fulcro-source",-1585991622),"app.ui:100"], null),G__43534], 0));
} else {
return G__43534;
}
})(),(app.ui.ui_todo_list.cljs$core$IFn$_invoke$arity$1 ? app.ui.ui_todo_list.cljs$core$IFn$_invoke$arity$1(todo_list) : app.ui.ui_todo_list.call(null,todo_list))], null),null);
}));
})], null);
if((typeof app !== 'undefined') && (typeof app.ui !== 'undefined') && (typeof app.ui.Root !== 'undefined')){
} else {
/**
 * @constructor
 */
app.ui.Root = (function app$ui$Root(props__39985__auto__){
var this__39986__auto__ = this;
var temp__5751__auto___43552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__39984__auto___43551,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___43552)){
var init_state__39987__auto___43553 = temp__5751__auto___43552;
(this__39986__auto__.state = (function (){var obj43536 = ({"fulcro$state":(function (){var G__43537 = this__39986__auto__;
var G__43538 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__39985__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__39985__auto__,"fulcro$value"));
return (init_state__39987__auto___43553.cljs$core$IFn$_invoke$arity$2 ? init_state__39987__auto___43553.cljs$core$IFn$_invoke$arity$2(G__43537,G__43538) : init_state__39987__auto___43553.call(null,G__43537,G__43538));
})()});
return obj43536;
})());
} else {
(this__39986__auto__.state = (function (){var obj43540 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj43540;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(app.ui.Root,new cljs.core.Keyword("app.ui","Root","app.ui/Root",-1066384609),options__39984__auto___43551);

//# sourceMappingURL=app.ui.js.map
