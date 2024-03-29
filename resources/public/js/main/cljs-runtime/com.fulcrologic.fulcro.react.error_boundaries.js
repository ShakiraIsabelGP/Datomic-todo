goog.provide('com.fulcrologic.fulcro.react.error_boundaries');
/**
 * A `(fn [react-element exception] what-to-render)`. Called in order to render an alternate for UI segments that have crashed.
 * Defaults to a simple div containing the error header and message as standard HTML elements.
 */
com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_ = (function com$fulcrologic$fulcro$react$error_boundaries$_STAR_render_error_STAR_(this$,cause){
return "There was an error.";
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.BodyContainer !== 'undefined')){
} else {
com.fulcrologic.fulcro.react.error_boundaries.BodyContainer = (function com$fulcrologic$fulcro$react$error_boundaries$BodyContainer(js_props__51132__auto__){
var render__51133__auto__ = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1((com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.component_options.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer) : com.fulcrologic.fulcro.components.component_options.call(null,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer)));
var vec__51352 = com.fulcrologic.fulcro.components.use_fulcro(js_props__51132__auto__,com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);
var this__51134__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51352,(0),null);
var props__51135__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51352,(1),null);
return (render__51133__auto__.cljs$core$IFn$_invoke$arity$2 ? render__51133__auto__.cljs$core$IFn$_invoke$arity$2(this__51134__auto__,props__51135__auto__) : render__51133__auto__.call(null,this__51134__auto__,props__51135__auto__));
});
}

com.fulcrologic.fulcro.components.add_hook_options_BANG_(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"use-hooks?","use-hooks?",-1627537900),true,new cljs.core.Keyword(null,"componentName","componentName",-2103437555),new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","BodyContainer","com.fulcrologic.fulcro.react.error-boundaries/BodyContainer",1372108272),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_BodyContainer(this$,p__51355){
var map__51356 = p__51355;
var map__51356__$1 = cljs.core.__destructure_map(map__51356);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51356__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51356__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var _STAR_app_STAR__orig_val__51357 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__51358 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51359 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__51360 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__51361 = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__51365 = this$;
var G__51366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__51365,G__51366) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__51365,G__51366));
}
})();
var _STAR_depth_STAR__temp_val__51362 = ((function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__51367 = this$;
var G__51368 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$depth"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__51367,G__51368) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__51367,G__51368));
}
})() + (1));
var _STAR_shared_STAR__temp_val__51363 = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__51369 = this$;
var G__51370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["props","fulcro$app"], null);
return (com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget_in.cljs$core$IFn$_invoke$arity$2(G__51369,G__51370) : com.fulcrologic.fulcro.components.isoget_in.call(null,G__51369,G__51370));
}
})());
var _STAR_parent_STAR__temp_val__51364 = this$;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__51361);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51362);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51363);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51364);

try{var parent__51027__auto__ = parent;
var app__51028__auto__ = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_app_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return com.fulcrologic.fulcro.components.any__GT_app(parent__51027__auto__);
}
})();
var d__51029__auto__ = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (com.fulcrologic.fulcro.components.depth(parent__51027__auto__) + (1));
}
})();
var s__51030__auto__ = com.fulcrologic.fulcro.components.shared.cljs$core$IFn$_invoke$arity$1(app__51028__auto__);
var p__51031__auto__ = (function (){var or__4253__auto__ = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return parent__51027__auto__;
}
})();
var _STAR_app_STAR__orig_val__51371 = com.fulcrologic.fulcro.components._STAR_app_STAR_;
var _STAR_depth_STAR__orig_val__51372 = com.fulcrologic.fulcro.components._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51373 = com.fulcrologic.fulcro.components._STAR_shared_STAR_;
var _STAR_parent_STAR__orig_val__51374 = com.fulcrologic.fulcro.components._STAR_parent_STAR_;
var _STAR_app_STAR__temp_val__51375 = app__51028__auto__;
var _STAR_depth_STAR__temp_val__51376 = d__51029__auto__;
var _STAR_shared_STAR__temp_val__51377 = s__51030__auto__;
var _STAR_parent_STAR__temp_val__51378 = p__51031__auto__;
(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__temp_val__51375);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51376);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51377);

(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51378);

try{return (render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null));
}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51374);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51373);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51372);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__51371);
}}finally {(com.fulcrologic.fulcro.components._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51360);

(com.fulcrologic.fulcro.components._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51359);

(com.fulcrologic.fulcro.components._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51358);

(com.fulcrologic.fulcro.components._STAR_app_STAR_ = _STAR_app_STAR__orig_val__51357);
}}));
})], null));
com.fulcrologic.fulcro.react.error_boundaries.ui_body_container = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.BodyContainer);

var options__51136__auto___51387 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (_np,_ns){
return true;
}),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477),(function (error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"cause","cause",231901252),error], null);
}),new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733),(function (_this,error,_info){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.react.error-boundaries",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_message(error)], null);
}),null)),null,-94666984,null);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function com$fulcrologic$fulcro$react$error_boundaries$render_ErrorBoundary(this$){
return com.fulcrologic.fulcro.components.wrapped_render(this$,(function (){
var props = (com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.props.cljs$core$IFn$_invoke$arity$1(this$) : com.fulcrologic.fulcro.components.props.call(null,this$));
var map__51379 = com.fulcrologic.fulcro.components.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__51379__$1 = cljs.core.__destructure_map(map__51379);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51379__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51379__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
if(cljs.core.truth_(error)){
return com.fulcrologic.fulcro.react.error_boundaries._STAR_render_error_STAR_.call(null,this$,cause);
} else {
return (com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.cljs$core$IFn$_invoke$arity$1(props) : com.fulcrologic.fulcro.react.error_boundaries.ui_body_container.call(null,props));
}
}));
})], null);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.react !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries !== 'undefined') && (typeof com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary !== 'undefined')){
} else {
/**
 * @constructor
 */
com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary = (function com$fulcrologic$fulcro$react$error_boundaries$ErrorBoundary(props__51137__auto__){
var this__51138__auto__ = this;
var temp__5751__auto___51389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options__51136__auto___51387,new cljs.core.Keyword(null,"initLocalState","initLocalState",-46503876));
if(cljs.core.truth_(temp__5751__auto___51389)){
var init_state__51139__auto___51390 = temp__5751__auto___51389;
(this__51138__auto__.state = (function (){var obj51381 = ({"fulcro$state":(function (){var G__51382 = this__51138__auto__;
var G__51383 = (com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.isoget.cljs$core$IFn$_invoke$arity$2(props__51137__auto__,"fulcro$value") : com.fulcrologic.fulcro.components.isoget.call(null,props__51137__auto__,"fulcro$value"));
return (init_state__51139__auto___51390.cljs$core$IFn$_invoke$arity$2 ? init_state__51139__auto___51390.cljs$core$IFn$_invoke$arity$2(G__51382,G__51383) : init_state__51139__auto___51390.call(null,G__51382,G__51383));
})()});
return obj51381;
})());
} else {
(this__51138__auto__.state = (function (){var obj51385 = ({"fulcro$state":cljs.core.PersistentArrayMap.EMPTY});
return obj51385;
})());
}

return null;
});
}

com.fulcrologic.fulcro.components.configure_component_BANG_(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary,new cljs.core.Keyword("com.fulcrologic.fulcro.react.error-boundaries","ErrorBoundary","com.fulcrologic.fulcro.react.error-boundaries/ErrorBoundary",-892633009),options__51136__auto___51387);
com.fulcrologic.fulcro.react.error_boundaries.ui_error_boundary = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.fulcro.react.error_boundaries.ErrorBoundary);

//# sourceMappingURL=com.fulcrologic.fulcro.react.error_boundaries.js.map
