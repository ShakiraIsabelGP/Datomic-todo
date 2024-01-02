goog.provide('app.mutations');
/**
 * 
 */
app.mutations.add_todo = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","add-todo","app.mutations/add-todo",-1054923229,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","add-todo","app.mutations/add-todo",-1054923229,null),(function (fulcro_mutation_env_symbol){
var map__43477 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__43477__$1 = cljs.core.__destructure_map(map__43477);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43477__$1,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$mutations$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$mutations$action(p__43478){
var map__43479 = p__43478;
var map__43479__$1 = cljs.core.__destructure_map(map__43479);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43479__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__43480_43495 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__43481_43496 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__43481_43496);

try{var new_id_43497 = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557)], null)) + (1));
var new_item_43498 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new_id_43497,new cljs.core.Keyword("todo-item","value","todo-item/value",-1226085449),value], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_id_43497,new_item_43498], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.Keyword("todo-list","items","todo-list/items",35585877)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802),new_id_43497], null)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557)], null),cljs.core.inc);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__43480_43495);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__43482 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__43483 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__43483);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__43482);
}})], null);
}));
/**
 * 
 */
app.mutations.edit_todo = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","edit-todo","app.mutations/edit-todo",358657570,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","edit-todo","app.mutations/edit-todo",358657570,null),(function (fulcro_mutation_env_symbol){
var map__43484 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__43484__$1 = cljs.core.__destructure_map(map__43484);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43484__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$mutations$remote(env){
return true;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__43485 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__43486 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__43486);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__43485);
}})], null);
}));
/**
 * 
 */
app.mutations.delete_todo = com.fulcrologic.fulcro.mutations.__GT_Mutation(new cljs.core.Symbol("app.mutations","delete-todo","app.mutations/delete-todo",1609791111,null));

com.fulcrologic.fulcro.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("app.mutations","delete-todo","app.mutations/delete-todo",1609791111,null),(function (fulcro_mutation_env_symbol){
var map__43488 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(fulcro_mutation_env_symbol));
var map__43488__$1 = cljs.core.__destructure_map(map__43488);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43488__$1,new cljs.core.Keyword("todo-item","id","todo-item/id",116791802));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"remote","remote",-1593576576),(function app$mutations$remote(env){
return true;
}),new cljs.core.Keyword(null,"action","action",-811238024),(function app$mutations$action(p__43489){
var map__43490 = p__43489;
var map__43490__$1 = cljs.core.__destructure_map(map__43490);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var _STAR_after_render_STAR__orig_val__43491_43501 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__43492_43502 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__43492_43502);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.Keyword("todo-list","items","todo-list/items",35585877)], null),(function (items){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43487_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__43487_SHARP_),id);
}),items));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo-item","id","todo-item/id",116791802)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("root","todo-list","root/todo-list",664379024),new cljs.core.Keyword("todo-list","item-count","todo-list/item-count",1683585557)], null),cljs.core.dec);
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__43491_43501);
}
return null;
}),new cljs.core.Keyword(null,"result-action","result-action",-1254630246),(function (env){
var _STAR_after_render_STAR__orig_val__43493 = com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_;
var _STAR_after_render_STAR__temp_val__43494 = true;
(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__temp_val__43494);

try{var temp__5753__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"default-result-action!","default-result-action!",-622954374));
if(cljs.core.truth_(temp__5753__auto__)){
var default_action = temp__5753__auto__;
return (default_action.cljs$core$IFn$_invoke$arity$1 ? default_action.cljs$core$IFn$_invoke$arity$1(env) : default_action.call(null,env));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.raw.components._STAR_after_render_STAR_ = _STAR_after_render_STAR__orig_val__43493);
}})], null);
}));

//# sourceMappingURL=app.mutations.js.map
