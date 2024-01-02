goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__4251__auto__ = c;
if(cljs.core.truth_(and__4251__auto__)){
return ident;
} else {
return and__4251__auto__;
}
})())){
var map__56494 = app__$1;
var map__56494__$1 = cljs.core.__destructure_map(map__56494);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56494__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__4253__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__56495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__56496 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__56495,G__56496) : com.fulcrologic.fulcro.components.computed.call(null,G__56495,G__56496));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,2026067679,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__56497 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__56497) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__56497));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,1327286634,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__56498 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__56499 = null;
var count__56500 = (0);
var i__56501 = (0);
while(true){
if((i__56501 < count__56500)){
var c = chunk__56499.cljs$core$IIndexed$_nth$arity$2(null,i__56501);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__56586 = seq__56498;
var G__56587 = chunk__56499;
var G__56588 = count__56500;
var G__56589 = (i__56501 + (1));
seq__56498 = G__56586;
chunk__56499 = G__56587;
count__56500 = G__56588;
i__56501 = G__56589;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56498);
if(temp__5753__auto__){
var seq__56498__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56498__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56498__$1);
var G__56590 = cljs.core.chunk_rest(seq__56498__$1);
var G__56591 = c__4679__auto__;
var G__56592 = cljs.core.count(c__4679__auto__);
var G__56593 = (0);
seq__56498 = G__56590;
chunk__56499 = G__56591;
count__56500 = G__56592;
i__56501 = G__56593;
continue;
} else {
var c = cljs.core.first(seq__56498__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__56595 = cljs.core.next(seq__56498__$1);
var G__56596 = null;
var G__56597 = (0);
var G__56598 = (0);
seq__56498 = G__56595;
chunk__56499 = G__56596;
count__56500 = G__56597;
i__56501 = G__56598;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__56502 = app__$1;
var map__56502__$1 = cljs.core.__destructure_map(map__56502);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56502__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56503 = cljs.core.deref(runtime_atom);
var map__56503__$1 = cljs.core.__destructure_map(map__56503);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56503__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56504 = indexes;
var map__56504__$1 = cljs.core.__destructure_map(map__56504);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56504__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__56505 = cljs.core.seq(classes);
var chunk__56506 = null;
var count__56507 = (0);
var i__56508 = (0);
while(true){
if((i__56508 < count__56507)){
var class$ = chunk__56506.cljs$core$IIndexed$_nth$arity$2(null,i__56508);
var seq__56521_56602 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56523_56603 = null;
var count__56524_56604 = (0);
var i__56525_56605 = (0);
while(true){
if((i__56525_56605 < count__56524_56604)){
var component_56606 = chunk__56523_56603.cljs$core$IIndexed$_nth$arity$2(null,i__56525_56605);
var component_ident_56607 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56606) : com.fulcrologic.fulcro.components.get_ident.call(null,component_56606));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_56607,component_56606);


var G__56609 = seq__56521_56602;
var G__56610 = chunk__56523_56603;
var G__56611 = count__56524_56604;
var G__56612 = (i__56525_56605 + (1));
seq__56521_56602 = G__56609;
chunk__56523_56603 = G__56610;
count__56524_56604 = G__56611;
i__56525_56605 = G__56612;
continue;
} else {
var temp__5753__auto___56613 = cljs.core.seq(seq__56521_56602);
if(temp__5753__auto___56613){
var seq__56521_56615__$1 = temp__5753__auto___56613;
if(cljs.core.chunked_seq_QMARK_(seq__56521_56615__$1)){
var c__4679__auto___56617 = cljs.core.chunk_first(seq__56521_56615__$1);
var G__56618 = cljs.core.chunk_rest(seq__56521_56615__$1);
var G__56619 = c__4679__auto___56617;
var G__56620 = cljs.core.count(c__4679__auto___56617);
var G__56621 = (0);
seq__56521_56602 = G__56618;
chunk__56523_56603 = G__56619;
count__56524_56604 = G__56620;
i__56525_56605 = G__56621;
continue;
} else {
var component_56622 = cljs.core.first(seq__56521_56615__$1);
var component_ident_56624 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56622) : com.fulcrologic.fulcro.components.get_ident.call(null,component_56622));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_56624,component_56622);


var G__56625 = cljs.core.next(seq__56521_56615__$1);
var G__56626 = null;
var G__56627 = (0);
var G__56628 = (0);
seq__56521_56602 = G__56625;
chunk__56523_56603 = G__56626;
count__56524_56604 = G__56627;
i__56525_56605 = G__56628;
continue;
}
} else {
}
}
break;
}


var G__56629 = seq__56505;
var G__56630 = chunk__56506;
var G__56631 = count__56507;
var G__56632 = (i__56508 + (1));
seq__56505 = G__56629;
chunk__56506 = G__56630;
count__56507 = G__56631;
i__56508 = G__56632;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56505);
if(temp__5753__auto__){
var seq__56505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56505__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56505__$1);
var G__56633 = cljs.core.chunk_rest(seq__56505__$1);
var G__56634 = c__4679__auto__;
var G__56635 = cljs.core.count(c__4679__auto__);
var G__56636 = (0);
seq__56505 = G__56633;
chunk__56506 = G__56634;
count__56507 = G__56635;
i__56508 = G__56636;
continue;
} else {
var class$ = cljs.core.first(seq__56505__$1);
var seq__56527_56637 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__56529_56638 = null;
var count__56530_56639 = (0);
var i__56531_56640 = (0);
while(true){
if((i__56531_56640 < count__56530_56639)){
var component_56641 = chunk__56529_56638.cljs$core$IIndexed$_nth$arity$2(null,i__56531_56640);
var component_ident_56642 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56641) : com.fulcrologic.fulcro.components.get_ident.call(null,component_56641));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_56642,component_56641);


var G__56643 = seq__56527_56637;
var G__56644 = chunk__56529_56638;
var G__56645 = count__56530_56639;
var G__56646 = (i__56531_56640 + (1));
seq__56527_56637 = G__56643;
chunk__56529_56638 = G__56644;
count__56530_56639 = G__56645;
i__56531_56640 = G__56646;
continue;
} else {
var temp__5753__auto___56647__$1 = cljs.core.seq(seq__56527_56637);
if(temp__5753__auto___56647__$1){
var seq__56527_56649__$1 = temp__5753__auto___56647__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56527_56649__$1)){
var c__4679__auto___56651 = cljs.core.chunk_first(seq__56527_56649__$1);
var G__56652 = cljs.core.chunk_rest(seq__56527_56649__$1);
var G__56653 = c__4679__auto___56651;
var G__56654 = cljs.core.count(c__4679__auto___56651);
var G__56655 = (0);
seq__56527_56637 = G__56652;
chunk__56529_56638 = G__56653;
count__56530_56639 = G__56654;
i__56531_56640 = G__56655;
continue;
} else {
var component_56656 = cljs.core.first(seq__56527_56649__$1);
var component_ident_56657 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_56656) : com.fulcrologic.fulcro.components.get_ident.call(null,component_56656));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_56657,component_56656);


var G__56658 = cljs.core.next(seq__56527_56649__$1);
var G__56659 = null;
var G__56660 = (0);
var G__56661 = (0);
seq__56527_56637 = G__56658;
chunk__56529_56638 = G__56659;
count__56530_56639 = G__56660;
i__56531_56640 = G__56661;
continue;
}
} else {
}
}
break;
}


var G__56662 = cljs.core.next(seq__56505__$1);
var G__56663 = null;
var G__56664 = (0);
var G__56665 = (0);
seq__56505 = G__56662;
chunk__56506 = G__56663;
count__56507 = G__56664;
i__56508 = G__56665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__56535 = app__$1;
var map__56535__$1 = cljs.core.__destructure_map(map__56535);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56535__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56536 = cljs.core.deref(runtime_atom);
var map__56536__$1 = cljs.core.__destructure_map(map__56536);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56536__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__56537 = indexes;
var map__56537__$1 = cljs.core.__destructure_map(map__56537);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56533_SHARP_,p2__56534_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__56533_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__56534_SHARP_) : class__GT_components.call(null,p2__56534_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__56538 = app__$1;
var map__56538__$1 = cljs.core.__destructure_map(map__56538);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__56539 = cljs.core.deref(runtime_atom);
var map__56539__$1 = cljs.core.__destructure_map(map__56539);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__56540 = indexes;
var map__56540__$1 = cljs.core.__destructure_map(map__56540);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__56541 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__56541__$1 = cljs.core.__destructure_map(map__56541);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__56542_56716 = cljs.core.seq(limited_to_render);
var chunk__56544_56717 = null;
var count__56545_56718 = (0);
var i__56546_56719 = (0);
while(true){
if((i__56546_56719 < count__56545_56718)){
var c_56720 = chunk__56544_56717.cljs$core$IIndexed$_nth$arity$2(null,i__56546_56719);
var ident_56721 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_56720) : com.fulcrologic.fulcro.components.get_ident.call(null,c_56720));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_56721,c_56720);


var G__56722 = seq__56542_56716;
var G__56723 = chunk__56544_56717;
var G__56724 = count__56545_56718;
var G__56725 = (i__56546_56719 + (1));
seq__56542_56716 = G__56722;
chunk__56544_56717 = G__56723;
count__56545_56718 = G__56724;
i__56546_56719 = G__56725;
continue;
} else {
var temp__5753__auto___56726 = cljs.core.seq(seq__56542_56716);
if(temp__5753__auto___56726){
var seq__56542_56727__$1 = temp__5753__auto___56726;
if(cljs.core.chunked_seq_QMARK_(seq__56542_56727__$1)){
var c__4679__auto___56728 = cljs.core.chunk_first(seq__56542_56727__$1);
var G__56729 = cljs.core.chunk_rest(seq__56542_56727__$1);
var G__56730 = c__4679__auto___56728;
var G__56731 = cljs.core.count(c__4679__auto___56728);
var G__56732 = (0);
seq__56542_56716 = G__56729;
chunk__56544_56717 = G__56730;
count__56545_56718 = G__56731;
i__56546_56719 = G__56732;
continue;
} else {
var c_56733 = cljs.core.first(seq__56542_56727__$1);
var ident_56734 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_56733) : com.fulcrologic.fulcro.components.get_ident.call(null,c_56733));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_56734,c_56733);


var G__56735 = cljs.core.next(seq__56542_56727__$1);
var G__56736 = null;
var G__56737 = (0);
var G__56738 = (0);
seq__56542_56716 = G__56735;
chunk__56544_56717 = G__56736;
count__56545_56718 = G__56737;
i__56546_56719 = G__56738;
continue;
}
} else {
}
}
break;
}

var seq__56548 = cljs.core.seq(limited_idents);
var chunk__56549 = null;
var count__56550 = (0);
var i__56551 = (0);
while(true){
if((i__56551 < count__56550)){
var i = chunk__56549.cljs$core$IIndexed$_nth$arity$2(null,i__56551);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__56739 = seq__56548;
var G__56740 = chunk__56549;
var G__56741 = count__56550;
var G__56742 = (i__56551 + (1));
seq__56548 = G__56739;
chunk__56549 = G__56740;
count__56550 = G__56741;
i__56551 = G__56742;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56548);
if(temp__5753__auto__){
var seq__56548__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56548__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56548__$1);
var G__56743 = cljs.core.chunk_rest(seq__56548__$1);
var G__56744 = c__4679__auto__;
var G__56745 = cljs.core.count(c__4679__auto__);
var G__56746 = (0);
seq__56548 = G__56743;
chunk__56549 = G__56744;
count__56550 = G__56745;
i__56551 = G__56746;
continue;
} else {
var i = cljs.core.first(seq__56548__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__56747 = cljs.core.next(seq__56548__$1);
var G__56748 = null;
var G__56749 = (0);
var G__56750 = (0);
seq__56548 = G__56747;
chunk__56549 = G__56748;
count__56550 = G__56749;
i__56551 = G__56750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__4253__auto__ = idents_in_joins;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__56552 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__56552__$1 = cljs.core.__destructure_map(map__56552);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56552__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__56553_56751 = cljs.core.seq(all_idents);
var chunk__56554_56752 = null;
var count__56555_56753 = (0);
var i__56556_56754 = (0);
while(true){
if((i__56556_56754 < count__56555_56753)){
var i_56755 = chunk__56554_56752.cljs$core$IIndexed$_nth$arity$2(null,i__56556_56754);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_56755);


var G__56756 = seq__56553_56751;
var G__56757 = chunk__56554_56752;
var G__56758 = count__56555_56753;
var G__56759 = (i__56556_56754 + (1));
seq__56553_56751 = G__56756;
chunk__56554_56752 = G__56757;
count__56555_56753 = G__56758;
i__56556_56754 = G__56759;
continue;
} else {
var temp__5753__auto___56760 = cljs.core.seq(seq__56553_56751);
if(temp__5753__auto___56760){
var seq__56553_56761__$1 = temp__5753__auto___56760;
if(cljs.core.chunked_seq_QMARK_(seq__56553_56761__$1)){
var c__4679__auto___56762 = cljs.core.chunk_first(seq__56553_56761__$1);
var G__56763 = cljs.core.chunk_rest(seq__56553_56761__$1);
var G__56764 = c__4679__auto___56762;
var G__56765 = cljs.core.count(c__4679__auto___56762);
var G__56766 = (0);
seq__56553_56751 = G__56763;
chunk__56554_56752 = G__56764;
count__56555_56753 = G__56765;
i__56556_56754 = G__56766;
continue;
} else {
var i_56767 = cljs.core.first(seq__56553_56761__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_56767);


var G__56768 = cljs.core.next(seq__56553_56761__$1);
var G__56769 = null;
var G__56770 = (0);
var G__56771 = (0);
seq__56553_56751 = G__56768;
chunk__56554_56752 = G__56769;
count__56555_56753 = G__56770;
i__56556_56754 = G__56771;
continue;
}
} else {
}
}
break;
}

var seq__56557 = cljs.core.seq(extra_to_force);
var chunk__56558 = null;
var count__56559 = (0);
var i__56560 = (0);
while(true){
if((i__56560 < count__56559)){
var c = chunk__56558.cljs$core$IIndexed$_nth$arity$2(null,i__56560);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__56772 = seq__56557;
var G__56773 = chunk__56558;
var G__56774 = count__56559;
var G__56775 = (i__56560 + (1));
seq__56557 = G__56772;
chunk__56558 = G__56773;
count__56559 = G__56774;
i__56560 = G__56775;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56557);
if(temp__5753__auto__){
var seq__56557__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56557__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56557__$1);
var G__56776 = cljs.core.chunk_rest(seq__56557__$1);
var G__56777 = c__4679__auto__;
var G__56778 = cljs.core.count(c__4679__auto__);
var G__56779 = (0);
seq__56557 = G__56776;
chunk__56558 = G__56777;
count__56559 = G__56778;
i__56560 = G__56779;
continue;
} else {
var c = cljs.core.first(seq__56557__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__56780 = cljs.core.next(seq__56557__$1);
var G__56781 = null;
var G__56782 = (0);
var G__56783 = (0);
seq__56557 = G__56780;
chunk__56558 = G__56781;
count__56559 = G__56782;
i__56560 = G__56783;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__56562 = arguments.length;
switch (G__56562) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__56563){
var map__56564 = p__56563;
var map__56564__$1 = cljs.core.__destructure_map(map__56564);
var options = map__56564__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56564__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__4253__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e56565){var e = e56565;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-1793008517,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
