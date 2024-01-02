goog.provide('com.fulcrologic.fulcro.rendering.multiple_roots_renderer');
goog.scope(function(){
  com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Register a mounted react component as a new root that should be managed. The
 *   options map can contain:
 * 
 *   - `:initialize?`: Should the initial state be pushed into the app state (if not already present)? Defaults
 *   to true, which causes it to happen once (on initial mount).
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$register_root_BANG_(var_args){
var G__56910 = arguments.length;
switch (G__56910) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118),true], null));
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__56911){
var map__56912 = p__56911;
var map__56912__$1 = cljs.core.__destructure_map(map__56912);
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var initialize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"initialize?","initialize?",-1238334118));
var app__$2 = (function (){var or__4253__auto__ = app__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
var initialize_state_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"initialize-state!","initialize-state!",-1114074844));
var schedule_render_BANG_ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$2,new cljs.core.Keyword(null,"schedule-render!","schedule-render!",2095050350));
var known_roots = (function (){var G__56913 = app__$2;
var G__56913__$1 = (((G__56913 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__56913));
var G__56913__$2 = (((G__56913__$1 == null))?null:cljs.core.deref(G__56913__$1));
if((G__56913__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__56913__$2);
}
})();
var initialized_QMARK_ = cljs.core.contains_QMARK_(known_roots,k);
if(cljs.core.truth_((function (){var and__4251__auto__ = initialize_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return (!(initialized_QMARK_));
} else {
return and__4251__auto__;
}
})())){
(initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? initialize_state_BANG_.cljs$core$IFn$_invoke$arity$2(app__$2,class$) : initialize_state_BANG_.call(null,app__$2,class$));

var G__56914_56977 = app__$2;
var G__56915_56978 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683),true], null);
(schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2 ? schedule_render_BANG_.cljs$core$IFn$_invoke$arity$2(G__56914_56977,G__56915_56978) : schedule_render_BANG_.call(null,G__56914_56977,G__56915_56978));
} else {
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,1842194991,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Register-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-reg-root-no-app"], null);
}),null)),null,491571979,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.register_root_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Deregister a mounted root that should no longer be managed.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$deregister_root_BANG_(var_args){
var G__56917 = arguments.length;
switch (G__56917) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (react_instance){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2(react_instance,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (react_instance,p__56918){
var map__56919 = p__56918;
var map__56919__$1 = cljs.core.__destructure_map(map__56919);
var options = map__56919__$1;
var app__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app__$2 = (function (){var or__4253__auto__ = app__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = com.fulcrologic.fulcro.components.any__GT_app(react_instance);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return com.fulcrologic.fulcro.components._STAR_app_STAR_;
}
}
})();
if(cljs.core.map_QMARK_(app__$2)){
var class$ = com.fulcrologic.fulcro.components.react_type(react_instance);
var k = (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(class$) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,class$));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,103,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding root of type ",k], null);
}),null)),null,-730960974,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$2),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853),k], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([react_instance], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,105,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deregister-root cannot find app. Pass your Fulcro app via options. See https://book.fulcrologic.com/#err-mrr-dereg-root-no-app"], null);
}),null)),null,-1007294002,null);
}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.deregister_root_BANG_.cljs$lang$maxFixedArity = 2);

com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_roots_BANG_(app__$1,options){
var state_map = (function (){var G__56920 = app__$1;
var G__56920__$1 = (((G__56920 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56920));
if((G__56920__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56920__$1);
}
})();
var known_roots = (function (){var G__56921 = app__$1;
var G__56921__$1 = (((G__56921 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(G__56921));
var G__56921__$2 = (((G__56921__$1 == null))?null:cljs.core.deref(G__56921__$1));
if((G__56921__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","known-roots","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/known-roots",1422774853).cljs$core$IFn$_invoke$arity$1(G__56921__$2);
}
})();
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);

var seq__56922 = cljs.core.seq(cljs.core.keys(known_roots));
var chunk__56924 = null;
var count__56925 = (0);
var i__56926 = (0);
while(true){
if((i__56926 < count__56925)){
var k = chunk__56924.cljs$core$IIndexed$_nth$arity$2(null,i__56926);
var cls_56990 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_56991 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_56990,state_map);
var root_props_56992 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_56991,state_map,state_map);
var seq__56936_56995 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__56937_56996 = null;
var count__56938_56997 = (0);
var i__56939_56998 = (0);
while(true){
if((i__56939_56998 < count__56938_56997)){
var root_56999 = chunk__56937_56996.cljs$core$IIndexed$_nth$arity$2(null,i__56939_56998);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_56999,root_props_56992);


var G__57000 = seq__56936_56995;
var G__57001 = chunk__56937_56996;
var G__57002 = count__56938_56997;
var G__57003 = (i__56939_56998 + (1));
seq__56936_56995 = G__57000;
chunk__56937_56996 = G__57001;
count__56938_56997 = G__57002;
i__56939_56998 = G__57003;
continue;
} else {
var temp__5753__auto___57004 = cljs.core.seq(seq__56936_56995);
if(temp__5753__auto___57004){
var seq__56936_57005__$1 = temp__5753__auto___57004;
if(cljs.core.chunked_seq_QMARK_(seq__56936_57005__$1)){
var c__4679__auto___57006 = cljs.core.chunk_first(seq__56936_57005__$1);
var G__57007 = cljs.core.chunk_rest(seq__56936_57005__$1);
var G__57008 = c__4679__auto___57006;
var G__57009 = cljs.core.count(c__4679__auto___57006);
var G__57010 = (0);
seq__56936_56995 = G__57007;
chunk__56937_56996 = G__57008;
count__56938_56997 = G__57009;
i__56939_56998 = G__57010;
continue;
} else {
var root_57011 = cljs.core.first(seq__56936_57005__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_57011,root_props_56992);


var G__57012 = cljs.core.next(seq__56936_57005__$1);
var G__57013 = null;
var G__57014 = (0);
var G__57015 = (0);
seq__56936_56995 = G__57012;
chunk__56937_56996 = G__57013;
count__56938_56997 = G__57014;
i__56939_56998 = G__57015;
continue;
}
} else {
}
}
break;
}


var G__57016 = seq__56922;
var G__57017 = chunk__56924;
var G__57018 = count__56925;
var G__57019 = (i__56926 + (1));
seq__56922 = G__57016;
chunk__56924 = G__57017;
count__56925 = G__57018;
i__56926 = G__57019;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56922);
if(temp__5753__auto__){
var seq__56922__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56922__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56922__$1);
var G__57020 = cljs.core.chunk_rest(seq__56922__$1);
var G__57021 = c__4679__auto__;
var G__57022 = cljs.core.count(c__4679__auto__);
var G__57023 = (0);
seq__56922 = G__57020;
chunk__56924 = G__57021;
count__56925 = G__57022;
i__56926 = G__57023;
continue;
} else {
var k = cljs.core.first(seq__56922__$1);
var cls_57024 = (com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.registry_key__GT_class.cljs$core$IFn$_invoke$arity$1(k) : com.fulcrologic.fulcro.components.registry_key__GT_class.call(null,k));
var query_57025 = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(cls_57024,state_map);
var root_props_57026 = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query_57025,state_map,state_map);
var seq__56940_57027 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_roots,k));
var chunk__56941_57028 = null;
var count__56942_57029 = (0);
var i__56943_57030 = (0);
while(true){
if((i__56943_57030 < count__56942_57029)){
var root_57031 = chunk__56941_57028.cljs$core$IIndexed$_nth$arity$2(null,i__56943_57030);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_57031,root_props_57026);


var G__57032 = seq__56940_57027;
var G__57033 = chunk__56941_57028;
var G__57034 = count__56942_57029;
var G__57035 = (i__56943_57030 + (1));
seq__56940_57027 = G__57032;
chunk__56941_57028 = G__57033;
count__56942_57029 = G__57034;
i__56943_57030 = G__57035;
continue;
} else {
var temp__5753__auto___57036__$1 = cljs.core.seq(seq__56940_57027);
if(temp__5753__auto___57036__$1){
var seq__56940_57037__$1 = temp__5753__auto___57036__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56940_57037__$1)){
var c__4679__auto___57038 = cljs.core.chunk_first(seq__56940_57037__$1);
var G__57039 = cljs.core.chunk_rest(seq__56940_57037__$1);
var G__57040 = c__4679__auto___57038;
var G__57041 = cljs.core.count(c__4679__auto___57038);
var G__57042 = (0);
seq__56940_57027 = G__57039;
chunk__56941_57028 = G__57040;
count__56942_57029 = G__57041;
i__56943_57030 = G__57042;
continue;
} else {
var root_57043 = cljs.core.first(seq__56940_57037__$1);
com.fulcrologic.fulcro.components.tunnel_props_BANG_(root_57043,root_props_57026);


var G__57044 = cljs.core.next(seq__56940_57037__$1);
var G__57045 = null;
var G__57046 = (0);
var G__57047 = (0);
seq__56940_57027 = G__57044;
chunk__56941_57028 = G__57045;
count__56942_57029 = G__57046;
i__56943_57030 = G__57047;
continue;
}
} else {
}
}
break;
}


var G__57048 = cljs.core.next(seq__56922__$1);
var G__57049 = null;
var G__57050 = (0);
var G__57051 = (0);
seq__56922 = G__57048;
chunk__56924 = G__57049;
count__56925 = G__57050;
i__56926 = G__57051;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_stale_components_BANG_(app__$1,options){
var map__56944 = app__$1;
var map__56944__$1 = cljs.core.__destructure_map(map__56944);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56944__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56945 = cljs.core.deref(runtime_atom);
var map__56945__$1 = cljs.core.__destructure_map(map__56945);
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56946 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56946__$1 = cljs.core.__destructure_map(map__56946);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56946__$1,true);
var seq__56947 = cljs.core.seq(limited_idents);
var chunk__56948 = null;
var count__56949 = (0);
var i__56950 = (0);
while(true){
if((i__56950 < count__56949)){
var i = chunk__56948.cljs$core$IIndexed$_nth$arity$2(null,i__56950);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__57069 = seq__56947;
var G__57070 = chunk__56948;
var G__57071 = count__56949;
var G__57072 = (i__56950 + (1));
seq__56947 = G__57069;
chunk__56948 = G__57070;
count__56949 = G__57071;
i__56950 = G__57072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56947);
if(temp__5753__auto__){
var seq__56947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56947__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56947__$1);
var G__57073 = cljs.core.chunk_rest(seq__56947__$1);
var G__57074 = c__4679__auto__;
var G__57075 = cljs.core.count(c__4679__auto__);
var G__57076 = (0);
seq__56947 = G__57073;
chunk__56948 = G__57074;
count__56949 = G__57075;
i__56950 = G__57076;
continue;
} else {
var i = cljs.core.first(seq__56947__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,i);


var G__57077 = cljs.core.next(seq__56947__$1);
var G__57078 = null;
var G__57079 = (0);
var G__57080 = (0);
seq__56947 = G__57077;
chunk__56948 = G__57078;
count__56949 = G__57079;
i__56950 = G__57080;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render.
 * 
 *   This renderer always does a keyframe render *unless* an `:only-refresh` option is passed to the stack
 *   (usually as an option on `(transact! this [(f)] {:only-refresh [...idents...]})`. In that case the renderer
 *   will ignore *all* data diffing and will target refresh only to the on-screen components that have the listed
 *   ident(s). This allows you to get component-local state refresh rates on transactions that are responding to
 *   events that should really only affect a known set of components (like the input field).
 * 
 *   This option does *not* currently support using query keywords in the refresh set. Only idents.
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_ = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$render_BANG_(var_args){
var G__56952 = arguments.length;
switch (G__56952) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__56953){
var map__56954 = p__56953;
var map__56954__$1 = cljs.core.__destructure_map(map__56954);
var options = map__56954__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56954__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_stale_components_BANG_(app__$1,options);
}catch (e56955){var e = e56955;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.multiple-roots-renderer",null,152,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-588390697,null);

return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_roots_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.render_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Generate a plain React class that can render a Fulcro UIRoot. NOTE: The UIRoot must register/deregister itself
 *   in the component lifecycle:
 * 
 *   ```
 *   (defsc UIRoot [this props]
 *  {:componentDidMount     (fn [this] (mroot/register-root! this))
 *   :componentWillUnmount  (fn [this] (mroot/deregister-root! this))
 *   :initial-state {}
 *   :query [root-like-query]}
 *  ...)
 *   ```
 * 
 *   The `fulcro-app` is the app under which this root will be rendered. Create different factories if you have more than
 *   one mounted app.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_react_class = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_react_class(UIRoot,fulcro_app){
var cls = (function (){
return null;
});
var ui_root = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIRoot);
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.goog$module$goog$object.extend(cls.prototype,module$node_modules$react$index.Component.prototype,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this$ = this;
var js_props = this$.props;
var app__56890__auto__ = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return fulcro_app;
}
})();
var d__56891__auto__ = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var _STAR_app_STAR__orig_val__56958 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_shared_STAR__orig_val__56959 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_depth_STAR__orig_val__56960 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_app_STAR__temp_val__56961 = app__56890__auto__;
var _STAR_shared_STAR__temp_val__56962 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__56890__auto__);
var _STAR_depth_STAR__temp_val__56963 = d__56891__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__56961);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__56962);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__56963);

try{var _STAR_denormalize_time_STAR__orig_val__56964 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__56965 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(fulcro_app)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__56965);

try{var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$1(UIRoot);
var state_map = (function (){var G__56966 = fulcro_app;
var G__56966__$1 = (((G__56966 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56966));
if((G__56966__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56966__$1);
}
})();
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__56967 = props;
var G__56968 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-props","js-props",1900369280),js_props], null);
return (ui_root.cljs$core$IFn$_invoke$arity$2 ? ui_root.cljs$core$IFn$_invoke$arity$2(G__56967,G__56968) : ui_root.call(null,G__56967,G__56968));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__56964);
}}finally {(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__56960);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__56959);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__56958);
}})], null)));

return cls;
});
/**
 * Create a factory that renders a floating root in a normal Fulcro context (body of a Fulcro component). This factory
 * has the same sync constraints as normal `component/factory` functions. See `components/with-parent-context`.
 * 
 *   `UIClass`: A class that will behave as a floating root. NOTE: that class MUST have a mount/unmount hook
 *   to regsiter/deregister itself as a root.
 * 
 *   `options`: An options map. Same as for `component/factory`. Note, however, that this factory will *not* receive
 *   props, so a `:keyfn` would have to be based on something else.
 * 
 *   You normally do not pass any props to this factory because it is controlling the component and feeding props from
 *   the database. Props sent to this factory are only used by the wrapper, however, `:react-key` is useful if you
 *   have a bunch of sibling roots and need to set the react key for each.
 *   
 */
com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory = (function com$fulcrologic$fulcro$rendering$multiple_roots_renderer$floating_root_factory(var_args){
var G__56970 = arguments.length;
switch (G__56970) {
case 1:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$1 = (function (UIClass){
return com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2(UIClass,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$core$IFn$_invoke$arity$2 = (function (UIClass,options){
var constructor$ = (function (){
return null;
});
var ui_factory = com.fulcrologic.fulcro.components.computed_factory.cljs$core$IFn$_invoke$arity$1(UIClass);
var render = (function (this$){
var _STAR_denormalize_time_STAR__orig_val__56971 = com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_;
var _STAR_denormalize_time_STAR__temp_val__56972 = new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","basis-t","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/basis-t",1789052925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.components._STAR_app_STAR_)));
(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__temp_val__56972);

try{var state_map = (function (){var G__56973 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var G__56973__$1 = (((G__56973 == null))?null:new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366).cljs$core$IFn$_invoke$arity$1(G__56973));
if((G__56973__$1 == null)){
return null;
} else {
return cljs.core.deref(G__56973__$1);
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(UIClass,state_map);
var props = com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map);
var G__56974 = (function (){var or__4253__auto__ = props;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__56975 = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
return (ui_factory.cljs$core$IFn$_invoke$arity$2 ? ui_factory.cljs$core$IFn$_invoke$arity$2(G__56974,G__56975) : ui_factory.call(null,G__56974,G__56975));
}finally {(com.fulcrologic.fulcro.algorithms.denormalize._STAR_denormalize_time_STAR_ = _STAR_denormalize_time_STAR__orig_val__56971);
}});
var wrapper_class = com.fulcrologic.fulcro.components.configure_component_BANG_(constructor$,new cljs.core.Keyword("com.fulcrologic.fulcro.rendering.multiple-roots-renderer","wrapper","com.fulcrologic.fulcro.rendering.multiple-roots-renderer/wrapper",-2035797237),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_,___$1,___$2){
return false;
}),new cljs.core.Keyword(null,"render","render",-1408033454),render], null));
var wrapper_factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(wrapper_class,options);
return wrapper_factory;
}));

(com.fulcrologic.fulcro.rendering.multiple_roots_renderer.floating_root_factory.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.multiple_roots_renderer.js.map
