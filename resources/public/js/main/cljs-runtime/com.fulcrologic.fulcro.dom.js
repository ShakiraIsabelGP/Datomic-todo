goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__58564){
var vec__58565 = p__58564;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58565,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58565,(1),null);
var pair = vec__58565;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__58568){
var vec__58569 = p__58568;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58569,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58569,(1),null);
var pair = vec__58569;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__58572){
var vec__58573 = p__58572;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58573,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58573,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__58576 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58576,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__58576;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__58578 = arguments.length;
switch (G__58578) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__58579 = component.refs;
var G__58579__$1 = (((G__58579 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__58579,name));
if((G__58579__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__58579__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__58580 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__58581 = (function (){var G__58582 = r;
if((G__58582 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__58582);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__58581) : ref.call(null,G__58581));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__58580) : factory.call(null,G__58580));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__58587 = arguments.length;
switch (G__58587) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___59060 = arguments.length;
var i__4865__auto___59061 = (0);
while(true){
if((i__4865__auto___59061 < len__4864__auto___59060)){
args_arr__4885__auto__.push((arguments[i__4865__auto___59061]));

var G__59062 = (i__4865__auto___59061 + (1));
i__4865__auto___59061 = G__59062;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq58584){
var G__58585 = cljs.core.first(seq58584);
var seq58584__$1 = cljs.core.next(seq58584);
var G__58586 = cljs.core.first(seq58584__$1);
var seq58584__$2 = cljs.core.next(seq58584__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58585,G__58586,seq58584__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__4251__auto__ = tag;
if(cljs.core.truth_(and__4251__auto__)){
var G__58588 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__58588) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__58588));
} else {
return and__4251__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x58590_59081 = ctor.prototype;
(x58590_59081.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x58590_59081.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__58589_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__58589_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__4251__auto__ = state_value;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = element_value;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1419653657,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x58590_59081.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__59084__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__59084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59085__i = 0, G__59085__a = new Array(arguments.length -  0);
while (G__59085__i < G__59085__a.length) {G__59085__a[G__59085__i] = arguments[G__59085__i + 0]; ++G__59085__i;}
  args = new cljs.core.IndexedSeq(G__59085__a,0,null);
} 
return G__59084__delegate.call(this,args);};
G__59084.cljs$lang$maxFixedArity = 0;
G__59084.cljs$lang$applyTo = (function (arglist__59086){
var args = cljs.core.seq(arglist__59086);
return G__59084__delegate(args);
});
G__59084.cljs$core$IFn$_invoke$arity$variadic = G__59084__delegate;
return G__59084;
})()
;
return (function() { 
var G__59087__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__59087 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__59089__i = 0, G__59089__a = new Array(arguments.length -  1);
while (G__59089__i < G__59089__a.length) {G__59089__a[G__59089__i] = arguments[G__59089__i + 1]; ++G__59089__i;}
  children = new cljs.core.IndexedSeq(G__59089__a,0,null);
} 
return G__59087__delegate.call(this,props,children);};
G__59087.cljs$lang$maxFixedArity = 1;
G__59087.cljs$lang$applyTo = (function (arglist__59090){
var props = cljs.core.first(arglist__59090);
var children = cljs.core.rest(arglist__59090);
return G__59087__delegate(props,children);
});
G__59087.cljs$core$IFn$_invoke$arity$variadic = G__59087__delegate;
return G__59087;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__58591 = tag;
switch (G__58591) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58591)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__58593 = arguments.length;
switch (G__58593) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58594 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58595 = cljs.core.seq(vec__58594);
var first__58596 = cljs.core.first(seq__58595);
var seq__58595__$1 = cljs.core.next(seq__58595);
var head = first__58596;
var tail = seq__58595__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__58597 = (function (){var G__58598 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58598,tail);

return G__58598;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58597) : f.call(null,G__58597));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__58599 = (function (){var G__58600 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58600,args);

return G__58600;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58599) : f.call(null,G__58599));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58601 = (function (){var G__58602 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58602,tail);

return G__58602;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58601) : f.call(null,G__58601));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58603 = (function (){var G__58604 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58604,tail);

return G__58604;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58603) : f.call(null,G__58603));
} else {
var G__58605 = (function (){var G__58606 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58606,args);

return G__58606;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58605) : f.call(null,G__58605));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__58608 = arguments.length;
switch (G__58608) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__58609 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__58610 = cljs.core.seq(vec__58609);
var first__58611 = cljs.core.first(seq__58610);
var seq__58610__$1 = cljs.core.next(seq__58610);
var head = first__58611;
var tail = seq__58610__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58612 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58612,tail);

return G__58612;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58613 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58613,args);

return G__58613;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58614 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58614,tail);

return G__58614;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58615 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__58615,tail);

return G__58615;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__58616 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__58616,args);

return G__58616;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59110 = arguments.length;
var i__4865__auto___59111 = (0);
while(true){
if((i__4865__auto___59111 < len__4864__auto___59110)){
args__4870__auto__.push((arguments[i__4865__auto___59111]));

var G__59112 = (i__4865__auto___59111 + (1));
i__4865__auto___59111 = G__59112;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58618 = conformed_args__57352__auto__;
var map__58618__$1 = cljs.core.__destructure_map(map__58618);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq58617){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59113 = arguments.length;
var i__4865__auto___59114 = (0);
while(true){
if((i__4865__auto___59114 < len__4864__auto___59113)){
args__4870__auto__.push((arguments[i__4865__auto___59114]));

var G__59115 = (i__4865__auto___59114 + (1));
i__4865__auto___59114 = G__59115;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58620 = conformed_args__57352__auto__;
var map__58620__$1 = cljs.core.__destructure_map(map__58620);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq58619){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58619));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59116 = arguments.length;
var i__4865__auto___59117 = (0);
while(true){
if((i__4865__auto___59117 < len__4864__auto___59116)){
args__4870__auto__.push((arguments[i__4865__auto___59117]));

var G__59118 = (i__4865__auto___59117 + (1));
i__4865__auto___59117 = G__59118;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58622 = conformed_args__57352__auto__;
var map__58622__$1 = cljs.core.__destructure_map(map__58622);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq58621){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59119 = arguments.length;
var i__4865__auto___59120 = (0);
while(true){
if((i__4865__auto___59120 < len__4864__auto___59119)){
args__4870__auto__.push((arguments[i__4865__auto___59120]));

var G__59121 = (i__4865__auto___59120 + (1));
i__4865__auto___59120 = G__59121;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58624 = conformed_args__57352__auto__;
var map__58624__$1 = cljs.core.__destructure_map(map__58624);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq58623){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58623));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59122 = arguments.length;
var i__4865__auto___59123 = (0);
while(true){
if((i__4865__auto___59123 < len__4864__auto___59122)){
args__4870__auto__.push((arguments[i__4865__auto___59123]));

var G__59124 = (i__4865__auto___59123 + (1));
i__4865__auto___59123 = G__59124;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58626 = conformed_args__57352__auto__;
var map__58626__$1 = cljs.core.__destructure_map(map__58626);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq58625){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58625));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59125 = arguments.length;
var i__4865__auto___59126 = (0);
while(true){
if((i__4865__auto___59126 < len__4864__auto___59125)){
args__4870__auto__.push((arguments[i__4865__auto___59126]));

var G__59127 = (i__4865__auto___59126 + (1));
i__4865__auto___59126 = G__59127;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58628 = conformed_args__57352__auto__;
var map__58628__$1 = cljs.core.__destructure_map(map__58628);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq58627){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59128 = arguments.length;
var i__4865__auto___59129 = (0);
while(true){
if((i__4865__auto___59129 < len__4864__auto___59128)){
args__4870__auto__.push((arguments[i__4865__auto___59129]));

var G__59130 = (i__4865__auto___59129 + (1));
i__4865__auto___59129 = G__59130;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58630 = conformed_args__57352__auto__;
var map__58630__$1 = cljs.core.__destructure_map(map__58630);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq58629){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59131 = arguments.length;
var i__4865__auto___59132 = (0);
while(true){
if((i__4865__auto___59132 < len__4864__auto___59131)){
args__4870__auto__.push((arguments[i__4865__auto___59132]));

var G__59133 = (i__4865__auto___59132 + (1));
i__4865__auto___59132 = G__59133;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58632 = conformed_args__57352__auto__;
var map__58632__$1 = cljs.core.__destructure_map(map__58632);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58631){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58631));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59134 = arguments.length;
var i__4865__auto___59135 = (0);
while(true){
if((i__4865__auto___59135 < len__4864__auto___59134)){
args__4870__auto__.push((arguments[i__4865__auto___59135]));

var G__59136 = (i__4865__auto___59135 + (1));
i__4865__auto___59135 = G__59136;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58634 = conformed_args__57352__auto__;
var map__58634__$1 = cljs.core.__destructure_map(map__58634);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq58633){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59137 = arguments.length;
var i__4865__auto___59138 = (0);
while(true){
if((i__4865__auto___59138 < len__4864__auto___59137)){
args__4870__auto__.push((arguments[i__4865__auto___59138]));

var G__59139 = (i__4865__auto___59138 + (1));
i__4865__auto___59138 = G__59139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58636 = conformed_args__57352__auto__;
var map__58636__$1 = cljs.core.__destructure_map(map__58636);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq58635){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58635));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59140 = arguments.length;
var i__4865__auto___59141 = (0);
while(true){
if((i__4865__auto___59141 < len__4864__auto___59140)){
args__4870__auto__.push((arguments[i__4865__auto___59141]));

var G__59142 = (i__4865__auto___59141 + (1));
i__4865__auto___59141 = G__59142;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58638 = conformed_args__57352__auto__;
var map__58638__$1 = cljs.core.__destructure_map(map__58638);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq58637){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59143 = arguments.length;
var i__4865__auto___59144 = (0);
while(true){
if((i__4865__auto___59144 < len__4864__auto___59143)){
args__4870__auto__.push((arguments[i__4865__auto___59144]));

var G__59145 = (i__4865__auto___59144 + (1));
i__4865__auto___59144 = G__59145;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58640 = conformed_args__57352__auto__;
var map__58640__$1 = cljs.core.__destructure_map(map__58640);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq58639){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59146 = arguments.length;
var i__4865__auto___59147 = (0);
while(true){
if((i__4865__auto___59147 < len__4864__auto___59146)){
args__4870__auto__.push((arguments[i__4865__auto___59147]));

var G__59148 = (i__4865__auto___59147 + (1));
i__4865__auto___59147 = G__59148;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58642 = conformed_args__57352__auto__;
var map__58642__$1 = cljs.core.__destructure_map(map__58642);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq58641){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59149 = arguments.length;
var i__4865__auto___59150 = (0);
while(true){
if((i__4865__auto___59150 < len__4864__auto___59149)){
args__4870__auto__.push((arguments[i__4865__auto___59150]));

var G__59151 = (i__4865__auto___59150 + (1));
i__4865__auto___59150 = G__59151;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58644 = conformed_args__57352__auto__;
var map__58644__$1 = cljs.core.__destructure_map(map__58644);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq58643){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59152 = arguments.length;
var i__4865__auto___59153 = (0);
while(true){
if((i__4865__auto___59153 < len__4864__auto___59152)){
args__4870__auto__.push((arguments[i__4865__auto___59153]));

var G__59154 = (i__4865__auto___59153 + (1));
i__4865__auto___59153 = G__59154;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58646 = conformed_args__57352__auto__;
var map__58646__$1 = cljs.core.__destructure_map(map__58646);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq58645){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59155 = arguments.length;
var i__4865__auto___59156 = (0);
while(true){
if((i__4865__auto___59156 < len__4864__auto___59155)){
args__4870__auto__.push((arguments[i__4865__auto___59156]));

var G__59157 = (i__4865__auto___59156 + (1));
i__4865__auto___59156 = G__59157;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58648 = conformed_args__57352__auto__;
var map__58648__$1 = cljs.core.__destructure_map(map__58648);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq58647){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59158 = arguments.length;
var i__4865__auto___59159 = (0);
while(true){
if((i__4865__auto___59159 < len__4864__auto___59158)){
args__4870__auto__.push((arguments[i__4865__auto___59159]));

var G__59160 = (i__4865__auto___59159 + (1));
i__4865__auto___59159 = G__59160;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58650 = conformed_args__57352__auto__;
var map__58650__$1 = cljs.core.__destructure_map(map__58650);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq58649){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59161 = arguments.length;
var i__4865__auto___59162 = (0);
while(true){
if((i__4865__auto___59162 < len__4864__auto___59161)){
args__4870__auto__.push((arguments[i__4865__auto___59162]));

var G__59163 = (i__4865__auto___59162 + (1));
i__4865__auto___59162 = G__59163;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58652 = conformed_args__57352__auto__;
var map__58652__$1 = cljs.core.__destructure_map(map__58652);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq58651){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59164 = arguments.length;
var i__4865__auto___59165 = (0);
while(true){
if((i__4865__auto___59165 < len__4864__auto___59164)){
args__4870__auto__.push((arguments[i__4865__auto___59165]));

var G__59166 = (i__4865__auto___59165 + (1));
i__4865__auto___59165 = G__59166;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58654 = conformed_args__57352__auto__;
var map__58654__$1 = cljs.core.__destructure_map(map__58654);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq58653){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59167 = arguments.length;
var i__4865__auto___59168 = (0);
while(true){
if((i__4865__auto___59168 < len__4864__auto___59167)){
args__4870__auto__.push((arguments[i__4865__auto___59168]));

var G__59169 = (i__4865__auto___59168 + (1));
i__4865__auto___59168 = G__59169;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58656 = conformed_args__57352__auto__;
var map__58656__$1 = cljs.core.__destructure_map(map__58656);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq58655){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58655));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59170 = arguments.length;
var i__4865__auto___59171 = (0);
while(true){
if((i__4865__auto___59171 < len__4864__auto___59170)){
args__4870__auto__.push((arguments[i__4865__auto___59171]));

var G__59172 = (i__4865__auto___59171 + (1));
i__4865__auto___59171 = G__59172;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58658 = conformed_args__57352__auto__;
var map__58658__$1 = cljs.core.__destructure_map(map__58658);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq58657){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59173 = arguments.length;
var i__4865__auto___59174 = (0);
while(true){
if((i__4865__auto___59174 < len__4864__auto___59173)){
args__4870__auto__.push((arguments[i__4865__auto___59174]));

var G__59175 = (i__4865__auto___59174 + (1));
i__4865__auto___59174 = G__59175;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58660 = conformed_args__57352__auto__;
var map__58660__$1 = cljs.core.__destructure_map(map__58660);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq58659){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59176 = arguments.length;
var i__4865__auto___59177 = (0);
while(true){
if((i__4865__auto___59177 < len__4864__auto___59176)){
args__4870__auto__.push((arguments[i__4865__auto___59177]));

var G__59178 = (i__4865__auto___59177 + (1));
i__4865__auto___59177 = G__59178;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58662 = conformed_args__57352__auto__;
var map__58662__$1 = cljs.core.__destructure_map(map__58662);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq58661){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58661));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59179 = arguments.length;
var i__4865__auto___59180 = (0);
while(true){
if((i__4865__auto___59180 < len__4864__auto___59179)){
args__4870__auto__.push((arguments[i__4865__auto___59180]));

var G__59181 = (i__4865__auto___59180 + (1));
i__4865__auto___59180 = G__59181;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58664 = conformed_args__57352__auto__;
var map__58664__$1 = cljs.core.__destructure_map(map__58664);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq58663){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58663));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59182 = arguments.length;
var i__4865__auto___59183 = (0);
while(true){
if((i__4865__auto___59183 < len__4864__auto___59182)){
args__4870__auto__.push((arguments[i__4865__auto___59183]));

var G__59184 = (i__4865__auto___59183 + (1));
i__4865__auto___59183 = G__59184;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58666 = conformed_args__57352__auto__;
var map__58666__$1 = cljs.core.__destructure_map(map__58666);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq58665){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59185 = arguments.length;
var i__4865__auto___59186 = (0);
while(true){
if((i__4865__auto___59186 < len__4864__auto___59185)){
args__4870__auto__.push((arguments[i__4865__auto___59186]));

var G__59187 = (i__4865__auto___59186 + (1));
i__4865__auto___59186 = G__59187;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58668 = conformed_args__57352__auto__;
var map__58668__$1 = cljs.core.__destructure_map(map__58668);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq58667){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59188 = arguments.length;
var i__4865__auto___59189 = (0);
while(true){
if((i__4865__auto___59189 < len__4864__auto___59188)){
args__4870__auto__.push((arguments[i__4865__auto___59189]));

var G__59190 = (i__4865__auto___59189 + (1));
i__4865__auto___59189 = G__59190;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58670 = conformed_args__57352__auto__;
var map__58670__$1 = cljs.core.__destructure_map(map__58670);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq58669){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59191 = arguments.length;
var i__4865__auto___59192 = (0);
while(true){
if((i__4865__auto___59192 < len__4864__auto___59191)){
args__4870__auto__.push((arguments[i__4865__auto___59192]));

var G__59193 = (i__4865__auto___59192 + (1));
i__4865__auto___59192 = G__59193;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58672 = conformed_args__57352__auto__;
var map__58672__$1 = cljs.core.__destructure_map(map__58672);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq58671){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59194 = arguments.length;
var i__4865__auto___59195 = (0);
while(true){
if((i__4865__auto___59195 < len__4864__auto___59194)){
args__4870__auto__.push((arguments[i__4865__auto___59195]));

var G__59196 = (i__4865__auto___59195 + (1));
i__4865__auto___59195 = G__59196;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58674 = conformed_args__57352__auto__;
var map__58674__$1 = cljs.core.__destructure_map(map__58674);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq58673){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58673));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59197 = arguments.length;
var i__4865__auto___59198 = (0);
while(true){
if((i__4865__auto___59198 < len__4864__auto___59197)){
args__4870__auto__.push((arguments[i__4865__auto___59198]));

var G__59199 = (i__4865__auto___59198 + (1));
i__4865__auto___59198 = G__59199;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58676 = conformed_args__57352__auto__;
var map__58676__$1 = cljs.core.__destructure_map(map__58676);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq58675){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59200 = arguments.length;
var i__4865__auto___59201 = (0);
while(true){
if((i__4865__auto___59201 < len__4864__auto___59200)){
args__4870__auto__.push((arguments[i__4865__auto___59201]));

var G__59202 = (i__4865__auto___59201 + (1));
i__4865__auto___59201 = G__59202;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58678 = conformed_args__57352__auto__;
var map__58678__$1 = cljs.core.__destructure_map(map__58678);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq58677){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59203 = arguments.length;
var i__4865__auto___59204 = (0);
while(true){
if((i__4865__auto___59204 < len__4864__auto___59203)){
args__4870__auto__.push((arguments[i__4865__auto___59204]));

var G__59205 = (i__4865__auto___59204 + (1));
i__4865__auto___59204 = G__59205;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58680 = conformed_args__57352__auto__;
var map__58680__$1 = cljs.core.__destructure_map(map__58680);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq58679){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58679));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59206 = arguments.length;
var i__4865__auto___59207 = (0);
while(true){
if((i__4865__auto___59207 < len__4864__auto___59206)){
args__4870__auto__.push((arguments[i__4865__auto___59207]));

var G__59208 = (i__4865__auto___59207 + (1));
i__4865__auto___59207 = G__59208;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58682 = conformed_args__57352__auto__;
var map__58682__$1 = cljs.core.__destructure_map(map__58682);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq58681){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58681));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59209 = arguments.length;
var i__4865__auto___59210 = (0);
while(true){
if((i__4865__auto___59210 < len__4864__auto___59209)){
args__4870__auto__.push((arguments[i__4865__auto___59210]));

var G__59211 = (i__4865__auto___59210 + (1));
i__4865__auto___59210 = G__59211;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58684 = conformed_args__57352__auto__;
var map__58684__$1 = cljs.core.__destructure_map(map__58684);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq58683){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59212 = arguments.length;
var i__4865__auto___59213 = (0);
while(true){
if((i__4865__auto___59213 < len__4864__auto___59212)){
args__4870__auto__.push((arguments[i__4865__auto___59213]));

var G__59214 = (i__4865__auto___59213 + (1));
i__4865__auto___59213 = G__59214;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58686 = conformed_args__57352__auto__;
var map__58686__$1 = cljs.core.__destructure_map(map__58686);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq58685){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58685));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59215 = arguments.length;
var i__4865__auto___59216 = (0);
while(true){
if((i__4865__auto___59216 < len__4864__auto___59215)){
args__4870__auto__.push((arguments[i__4865__auto___59216]));

var G__59217 = (i__4865__auto___59216 + (1));
i__4865__auto___59216 = G__59217;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58688 = conformed_args__57352__auto__;
var map__58688__$1 = cljs.core.__destructure_map(map__58688);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq58687){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58687));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59218 = arguments.length;
var i__4865__auto___59219 = (0);
while(true){
if((i__4865__auto___59219 < len__4864__auto___59218)){
args__4870__auto__.push((arguments[i__4865__auto___59219]));

var G__59220 = (i__4865__auto___59219 + (1));
i__4865__auto___59219 = G__59220;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58690 = conformed_args__57352__auto__;
var map__58690__$1 = cljs.core.__destructure_map(map__58690);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq58689){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59221 = arguments.length;
var i__4865__auto___59222 = (0);
while(true){
if((i__4865__auto___59222 < len__4864__auto___59221)){
args__4870__auto__.push((arguments[i__4865__auto___59222]));

var G__59223 = (i__4865__auto___59222 + (1));
i__4865__auto___59222 = G__59223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58692 = conformed_args__57352__auto__;
var map__58692__$1 = cljs.core.__destructure_map(map__58692);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq58691){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59224 = arguments.length;
var i__4865__auto___59225 = (0);
while(true){
if((i__4865__auto___59225 < len__4864__auto___59224)){
args__4870__auto__.push((arguments[i__4865__auto___59225]));

var G__59226 = (i__4865__auto___59225 + (1));
i__4865__auto___59225 = G__59226;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58694 = conformed_args__57352__auto__;
var map__58694__$1 = cljs.core.__destructure_map(map__58694);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq58693){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59227 = arguments.length;
var i__4865__auto___59228 = (0);
while(true){
if((i__4865__auto___59228 < len__4864__auto___59227)){
args__4870__auto__.push((arguments[i__4865__auto___59228]));

var G__59229 = (i__4865__auto___59228 + (1));
i__4865__auto___59228 = G__59229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58696 = conformed_args__57352__auto__;
var map__58696__$1 = cljs.core.__destructure_map(map__58696);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq58695){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59230 = arguments.length;
var i__4865__auto___59231 = (0);
while(true){
if((i__4865__auto___59231 < len__4864__auto___59230)){
args__4870__auto__.push((arguments[i__4865__auto___59231]));

var G__59232 = (i__4865__auto___59231 + (1));
i__4865__auto___59231 = G__59232;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58698 = conformed_args__57352__auto__;
var map__58698__$1 = cljs.core.__destructure_map(map__58698);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq58697){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59233 = arguments.length;
var i__4865__auto___59234 = (0);
while(true){
if((i__4865__auto___59234 < len__4864__auto___59233)){
args__4870__auto__.push((arguments[i__4865__auto___59234]));

var G__59235 = (i__4865__auto___59234 + (1));
i__4865__auto___59234 = G__59235;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58700 = conformed_args__57352__auto__;
var map__58700__$1 = cljs.core.__destructure_map(map__58700);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq58699){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59236 = arguments.length;
var i__4865__auto___59237 = (0);
while(true){
if((i__4865__auto___59237 < len__4864__auto___59236)){
args__4870__auto__.push((arguments[i__4865__auto___59237]));

var G__59238 = (i__4865__auto___59237 + (1));
i__4865__auto___59237 = G__59238;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58702 = conformed_args__57352__auto__;
var map__58702__$1 = cljs.core.__destructure_map(map__58702);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq58701){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59239 = arguments.length;
var i__4865__auto___59240 = (0);
while(true){
if((i__4865__auto___59240 < len__4864__auto___59239)){
args__4870__auto__.push((arguments[i__4865__auto___59240]));

var G__59241 = (i__4865__auto___59240 + (1));
i__4865__auto___59240 = G__59241;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58704 = conformed_args__57352__auto__;
var map__58704__$1 = cljs.core.__destructure_map(map__58704);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq58703){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59242 = arguments.length;
var i__4865__auto___59243 = (0);
while(true){
if((i__4865__auto___59243 < len__4864__auto___59242)){
args__4870__auto__.push((arguments[i__4865__auto___59243]));

var G__59244 = (i__4865__auto___59243 + (1));
i__4865__auto___59243 = G__59244;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58706 = conformed_args__57352__auto__;
var map__58706__$1 = cljs.core.__destructure_map(map__58706);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq58705){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59245 = arguments.length;
var i__4865__auto___59246 = (0);
while(true){
if((i__4865__auto___59246 < len__4864__auto___59245)){
args__4870__auto__.push((arguments[i__4865__auto___59246]));

var G__59247 = (i__4865__auto___59246 + (1));
i__4865__auto___59246 = G__59247;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58708 = conformed_args__57352__auto__;
var map__58708__$1 = cljs.core.__destructure_map(map__58708);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq58707){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59248 = arguments.length;
var i__4865__auto___59249 = (0);
while(true){
if((i__4865__auto___59249 < len__4864__auto___59248)){
args__4870__auto__.push((arguments[i__4865__auto___59249]));

var G__59250 = (i__4865__auto___59249 + (1));
i__4865__auto___59249 = G__59250;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58710 = conformed_args__57352__auto__;
var map__58710__$1 = cljs.core.__destructure_map(map__58710);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq58709){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59251 = arguments.length;
var i__4865__auto___59252 = (0);
while(true){
if((i__4865__auto___59252 < len__4864__auto___59251)){
args__4870__auto__.push((arguments[i__4865__auto___59252]));

var G__59253 = (i__4865__auto___59252 + (1));
i__4865__auto___59252 = G__59253;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58712 = conformed_args__57352__auto__;
var map__58712__$1 = cljs.core.__destructure_map(map__58712);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq58711){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59254 = arguments.length;
var i__4865__auto___59255 = (0);
while(true){
if((i__4865__auto___59255 < len__4864__auto___59254)){
args__4870__auto__.push((arguments[i__4865__auto___59255]));

var G__59256 = (i__4865__auto___59255 + (1));
i__4865__auto___59255 = G__59256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58714 = conformed_args__57352__auto__;
var map__58714__$1 = cljs.core.__destructure_map(map__58714);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq58713){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59257 = arguments.length;
var i__4865__auto___59258 = (0);
while(true){
if((i__4865__auto___59258 < len__4864__auto___59257)){
args__4870__auto__.push((arguments[i__4865__auto___59258]));

var G__59259 = (i__4865__auto___59258 + (1));
i__4865__auto___59258 = G__59259;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58716 = conformed_args__57352__auto__;
var map__58716__$1 = cljs.core.__destructure_map(map__58716);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq58715){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59260 = arguments.length;
var i__4865__auto___59261 = (0);
while(true){
if((i__4865__auto___59261 < len__4864__auto___59260)){
args__4870__auto__.push((arguments[i__4865__auto___59261]));

var G__59262 = (i__4865__auto___59261 + (1));
i__4865__auto___59261 = G__59262;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58718 = conformed_args__57352__auto__;
var map__58718__$1 = cljs.core.__destructure_map(map__58718);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq58717){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59263 = arguments.length;
var i__4865__auto___59264 = (0);
while(true){
if((i__4865__auto___59264 < len__4864__auto___59263)){
args__4870__auto__.push((arguments[i__4865__auto___59264]));

var G__59265 = (i__4865__auto___59264 + (1));
i__4865__auto___59264 = G__59265;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58720 = conformed_args__57352__auto__;
var map__58720__$1 = cljs.core.__destructure_map(map__58720);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq58719){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59266 = arguments.length;
var i__4865__auto___59267 = (0);
while(true){
if((i__4865__auto___59267 < len__4864__auto___59266)){
args__4870__auto__.push((arguments[i__4865__auto___59267]));

var G__59268 = (i__4865__auto___59267 + (1));
i__4865__auto___59267 = G__59268;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58722 = conformed_args__57352__auto__;
var map__58722__$1 = cljs.core.__destructure_map(map__58722);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq58721){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59269 = arguments.length;
var i__4865__auto___59270 = (0);
while(true){
if((i__4865__auto___59270 < len__4864__auto___59269)){
args__4870__auto__.push((arguments[i__4865__auto___59270]));

var G__59271 = (i__4865__auto___59270 + (1));
i__4865__auto___59270 = G__59271;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58724 = conformed_args__57352__auto__;
var map__58724__$1 = cljs.core.__destructure_map(map__58724);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq58723){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59272 = arguments.length;
var i__4865__auto___59273 = (0);
while(true){
if((i__4865__auto___59273 < len__4864__auto___59272)){
args__4870__auto__.push((arguments[i__4865__auto___59273]));

var G__59274 = (i__4865__auto___59273 + (1));
i__4865__auto___59273 = G__59274;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58726 = conformed_args__57352__auto__;
var map__58726__$1 = cljs.core.__destructure_map(map__58726);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq58725){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59275 = arguments.length;
var i__4865__auto___59276 = (0);
while(true){
if((i__4865__auto___59276 < len__4864__auto___59275)){
args__4870__auto__.push((arguments[i__4865__auto___59276]));

var G__59277 = (i__4865__auto___59276 + (1));
i__4865__auto___59276 = G__59277;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58728 = conformed_args__57352__auto__;
var map__58728__$1 = cljs.core.__destructure_map(map__58728);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq58727){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59278 = arguments.length;
var i__4865__auto___59279 = (0);
while(true){
if((i__4865__auto___59279 < len__4864__auto___59278)){
args__4870__auto__.push((arguments[i__4865__auto___59279]));

var G__59280 = (i__4865__auto___59279 + (1));
i__4865__auto___59279 = G__59280;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58730 = conformed_args__57352__auto__;
var map__58730__$1 = cljs.core.__destructure_map(map__58730);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq58729){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59281 = arguments.length;
var i__4865__auto___59282 = (0);
while(true){
if((i__4865__auto___59282 < len__4864__auto___59281)){
args__4870__auto__.push((arguments[i__4865__auto___59282]));

var G__59283 = (i__4865__auto___59282 + (1));
i__4865__auto___59282 = G__59283;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58732 = conformed_args__57352__auto__;
var map__58732__$1 = cljs.core.__destructure_map(map__58732);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq58731){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59284 = arguments.length;
var i__4865__auto___59285 = (0);
while(true){
if((i__4865__auto___59285 < len__4864__auto___59284)){
args__4870__auto__.push((arguments[i__4865__auto___59285]));

var G__59286 = (i__4865__auto___59285 + (1));
i__4865__auto___59285 = G__59286;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58734 = conformed_args__57352__auto__;
var map__58734__$1 = cljs.core.__destructure_map(map__58734);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq58733){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59287 = arguments.length;
var i__4865__auto___59288 = (0);
while(true){
if((i__4865__auto___59288 < len__4864__auto___59287)){
args__4870__auto__.push((arguments[i__4865__auto___59288]));

var G__59289 = (i__4865__auto___59288 + (1));
i__4865__auto___59288 = G__59289;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58736 = conformed_args__57352__auto__;
var map__58736__$1 = cljs.core.__destructure_map(map__58736);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq58735){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59290 = arguments.length;
var i__4865__auto___59291 = (0);
while(true){
if((i__4865__auto___59291 < len__4864__auto___59290)){
args__4870__auto__.push((arguments[i__4865__auto___59291]));

var G__59292 = (i__4865__auto___59291 + (1));
i__4865__auto___59291 = G__59292;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58738 = conformed_args__57352__auto__;
var map__58738__$1 = cljs.core.__destructure_map(map__58738);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq58737){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59293 = arguments.length;
var i__4865__auto___59294 = (0);
while(true){
if((i__4865__auto___59294 < len__4864__auto___59293)){
args__4870__auto__.push((arguments[i__4865__auto___59294]));

var G__59295 = (i__4865__auto___59294 + (1));
i__4865__auto___59294 = G__59295;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58740 = conformed_args__57352__auto__;
var map__58740__$1 = cljs.core.__destructure_map(map__58740);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq58739){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59296 = arguments.length;
var i__4865__auto___59297 = (0);
while(true){
if((i__4865__auto___59297 < len__4864__auto___59296)){
args__4870__auto__.push((arguments[i__4865__auto___59297]));

var G__59298 = (i__4865__auto___59297 + (1));
i__4865__auto___59297 = G__59298;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58742 = conformed_args__57352__auto__;
var map__58742__$1 = cljs.core.__destructure_map(map__58742);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq58741){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59299 = arguments.length;
var i__4865__auto___59300 = (0);
while(true){
if((i__4865__auto___59300 < len__4864__auto___59299)){
args__4870__auto__.push((arguments[i__4865__auto___59300]));

var G__59301 = (i__4865__auto___59300 + (1));
i__4865__auto___59300 = G__59301;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58744 = conformed_args__57352__auto__;
var map__58744__$1 = cljs.core.__destructure_map(map__58744);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq58743){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59302 = arguments.length;
var i__4865__auto___59303 = (0);
while(true){
if((i__4865__auto___59303 < len__4864__auto___59302)){
args__4870__auto__.push((arguments[i__4865__auto___59303]));

var G__59304 = (i__4865__auto___59303 + (1));
i__4865__auto___59303 = G__59304;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58746 = conformed_args__57352__auto__;
var map__58746__$1 = cljs.core.__destructure_map(map__58746);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq58745){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59305 = arguments.length;
var i__4865__auto___59306 = (0);
while(true){
if((i__4865__auto___59306 < len__4864__auto___59305)){
args__4870__auto__.push((arguments[i__4865__auto___59306]));

var G__59307 = (i__4865__auto___59306 + (1));
i__4865__auto___59306 = G__59307;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58748 = conformed_args__57352__auto__;
var map__58748__$1 = cljs.core.__destructure_map(map__58748);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq58747){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59308 = arguments.length;
var i__4865__auto___59309 = (0);
while(true){
if((i__4865__auto___59309 < len__4864__auto___59308)){
args__4870__auto__.push((arguments[i__4865__auto___59309]));

var G__59310 = (i__4865__auto___59309 + (1));
i__4865__auto___59309 = G__59310;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58750 = conformed_args__57352__auto__;
var map__58750__$1 = cljs.core.__destructure_map(map__58750);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq58749){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59311 = arguments.length;
var i__4865__auto___59312 = (0);
while(true){
if((i__4865__auto___59312 < len__4864__auto___59311)){
args__4870__auto__.push((arguments[i__4865__auto___59312]));

var G__59313 = (i__4865__auto___59312 + (1));
i__4865__auto___59312 = G__59313;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58752 = conformed_args__57352__auto__;
var map__58752__$1 = cljs.core.__destructure_map(map__58752);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq58751){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59314 = arguments.length;
var i__4865__auto___59315 = (0);
while(true){
if((i__4865__auto___59315 < len__4864__auto___59314)){
args__4870__auto__.push((arguments[i__4865__auto___59315]));

var G__59316 = (i__4865__auto___59315 + (1));
i__4865__auto___59315 = G__59316;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58754 = conformed_args__57352__auto__;
var map__58754__$1 = cljs.core.__destructure_map(map__58754);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq58753){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58753));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59317 = arguments.length;
var i__4865__auto___59318 = (0);
while(true){
if((i__4865__auto___59318 < len__4864__auto___59317)){
args__4870__auto__.push((arguments[i__4865__auto___59318]));

var G__59319 = (i__4865__auto___59318 + (1));
i__4865__auto___59318 = G__59319;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58756 = conformed_args__57352__auto__;
var map__58756__$1 = cljs.core.__destructure_map(map__58756);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq58755){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59320 = arguments.length;
var i__4865__auto___59321 = (0);
while(true){
if((i__4865__auto___59321 < len__4864__auto___59320)){
args__4870__auto__.push((arguments[i__4865__auto___59321]));

var G__59322 = (i__4865__auto___59321 + (1));
i__4865__auto___59321 = G__59322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58758 = conformed_args__57352__auto__;
var map__58758__$1 = cljs.core.__destructure_map(map__58758);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq58757){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58757));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59323 = arguments.length;
var i__4865__auto___59324 = (0);
while(true){
if((i__4865__auto___59324 < len__4864__auto___59323)){
args__4870__auto__.push((arguments[i__4865__auto___59324]));

var G__59325 = (i__4865__auto___59324 + (1));
i__4865__auto___59324 = G__59325;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58760 = conformed_args__57352__auto__;
var map__58760__$1 = cljs.core.__destructure_map(map__58760);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq58759){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59326 = arguments.length;
var i__4865__auto___59327 = (0);
while(true){
if((i__4865__auto___59327 < len__4864__auto___59326)){
args__4870__auto__.push((arguments[i__4865__auto___59327]));

var G__59328 = (i__4865__auto___59327 + (1));
i__4865__auto___59327 = G__59328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58762 = conformed_args__57352__auto__;
var map__58762__$1 = cljs.core.__destructure_map(map__58762);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq58761){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59329 = arguments.length;
var i__4865__auto___59330 = (0);
while(true){
if((i__4865__auto___59330 < len__4864__auto___59329)){
args__4870__auto__.push((arguments[i__4865__auto___59330]));

var G__59331 = (i__4865__auto___59330 + (1));
i__4865__auto___59330 = G__59331;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58764 = conformed_args__57352__auto__;
var map__58764__$1 = cljs.core.__destructure_map(map__58764);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58764__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq58763){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59332 = arguments.length;
var i__4865__auto___59333 = (0);
while(true){
if((i__4865__auto___59333 < len__4864__auto___59332)){
args__4870__auto__.push((arguments[i__4865__auto___59333]));

var G__59334 = (i__4865__auto___59333 + (1));
i__4865__auto___59333 = G__59334;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58766 = conformed_args__57352__auto__;
var map__58766__$1 = cljs.core.__destructure_map(map__58766);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq58765){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58765));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59335 = arguments.length;
var i__4865__auto___59336 = (0);
while(true){
if((i__4865__auto___59336 < len__4864__auto___59335)){
args__4870__auto__.push((arguments[i__4865__auto___59336]));

var G__59337 = (i__4865__auto___59336 + (1));
i__4865__auto___59336 = G__59337;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58768 = conformed_args__57352__auto__;
var map__58768__$1 = cljs.core.__destructure_map(map__58768);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq58767){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59338 = arguments.length;
var i__4865__auto___59339 = (0);
while(true){
if((i__4865__auto___59339 < len__4864__auto___59338)){
args__4870__auto__.push((arguments[i__4865__auto___59339]));

var G__59340 = (i__4865__auto___59339 + (1));
i__4865__auto___59339 = G__59340;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58770 = conformed_args__57352__auto__;
var map__58770__$1 = cljs.core.__destructure_map(map__58770);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq58769){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59341 = arguments.length;
var i__4865__auto___59342 = (0);
while(true){
if((i__4865__auto___59342 < len__4864__auto___59341)){
args__4870__auto__.push((arguments[i__4865__auto___59342]));

var G__59343 = (i__4865__auto___59342 + (1));
i__4865__auto___59342 = G__59343;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58772 = conformed_args__57352__auto__;
var map__58772__$1 = cljs.core.__destructure_map(map__58772);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq58771){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59344 = arguments.length;
var i__4865__auto___59345 = (0);
while(true){
if((i__4865__auto___59345 < len__4864__auto___59344)){
args__4870__auto__.push((arguments[i__4865__auto___59345]));

var G__59346 = (i__4865__auto___59345 + (1));
i__4865__auto___59345 = G__59346;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58774 = conformed_args__57352__auto__;
var map__58774__$1 = cljs.core.__destructure_map(map__58774);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq58773){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59347 = arguments.length;
var i__4865__auto___59348 = (0);
while(true){
if((i__4865__auto___59348 < len__4864__auto___59347)){
args__4870__auto__.push((arguments[i__4865__auto___59348]));

var G__59349 = (i__4865__auto___59348 + (1));
i__4865__auto___59348 = G__59349;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58776 = conformed_args__57352__auto__;
var map__58776__$1 = cljs.core.__destructure_map(map__58776);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq58775){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59350 = arguments.length;
var i__4865__auto___59351 = (0);
while(true){
if((i__4865__auto___59351 < len__4864__auto___59350)){
args__4870__auto__.push((arguments[i__4865__auto___59351]));

var G__59352 = (i__4865__auto___59351 + (1));
i__4865__auto___59351 = G__59352;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58778 = conformed_args__57352__auto__;
var map__58778__$1 = cljs.core.__destructure_map(map__58778);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq58777){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59353 = arguments.length;
var i__4865__auto___59354 = (0);
while(true){
if((i__4865__auto___59354 < len__4864__auto___59353)){
args__4870__auto__.push((arguments[i__4865__auto___59354]));

var G__59355 = (i__4865__auto___59354 + (1));
i__4865__auto___59354 = G__59355;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58780 = conformed_args__57352__auto__;
var map__58780__$1 = cljs.core.__destructure_map(map__58780);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq58779){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59356 = arguments.length;
var i__4865__auto___59357 = (0);
while(true){
if((i__4865__auto___59357 < len__4864__auto___59356)){
args__4870__auto__.push((arguments[i__4865__auto___59357]));

var G__59358 = (i__4865__auto___59357 + (1));
i__4865__auto___59357 = G__59358;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58782 = conformed_args__57352__auto__;
var map__58782__$1 = cljs.core.__destructure_map(map__58782);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq58781){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59359 = arguments.length;
var i__4865__auto___59360 = (0);
while(true){
if((i__4865__auto___59360 < len__4864__auto___59359)){
args__4870__auto__.push((arguments[i__4865__auto___59360]));

var G__59361 = (i__4865__auto___59360 + (1));
i__4865__auto___59360 = G__59361;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58784 = conformed_args__57352__auto__;
var map__58784__$1 = cljs.core.__destructure_map(map__58784);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq58783){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59362 = arguments.length;
var i__4865__auto___59363 = (0);
while(true){
if((i__4865__auto___59363 < len__4864__auto___59362)){
args__4870__auto__.push((arguments[i__4865__auto___59363]));

var G__59364 = (i__4865__auto___59363 + (1));
i__4865__auto___59363 = G__59364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58786 = conformed_args__57352__auto__;
var map__58786__$1 = cljs.core.__destructure_map(map__58786);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq58785){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58785));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59365 = arguments.length;
var i__4865__auto___59366 = (0);
while(true){
if((i__4865__auto___59366 < len__4864__auto___59365)){
args__4870__auto__.push((arguments[i__4865__auto___59366]));

var G__59367 = (i__4865__auto___59366 + (1));
i__4865__auto___59366 = G__59367;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58788 = conformed_args__57352__auto__;
var map__58788__$1 = cljs.core.__destructure_map(map__58788);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq58787){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59368 = arguments.length;
var i__4865__auto___59369 = (0);
while(true){
if((i__4865__auto___59369 < len__4864__auto___59368)){
args__4870__auto__.push((arguments[i__4865__auto___59369]));

var G__59370 = (i__4865__auto___59369 + (1));
i__4865__auto___59369 = G__59370;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58790 = conformed_args__57352__auto__;
var map__58790__$1 = cljs.core.__destructure_map(map__58790);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq58789){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58789));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59371 = arguments.length;
var i__4865__auto___59372 = (0);
while(true){
if((i__4865__auto___59372 < len__4864__auto___59371)){
args__4870__auto__.push((arguments[i__4865__auto___59372]));

var G__59373 = (i__4865__auto___59372 + (1));
i__4865__auto___59372 = G__59373;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58792 = conformed_args__57352__auto__;
var map__58792__$1 = cljs.core.__destructure_map(map__58792);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq58791){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59374 = arguments.length;
var i__4865__auto___59375 = (0);
while(true){
if((i__4865__auto___59375 < len__4864__auto___59374)){
args__4870__auto__.push((arguments[i__4865__auto___59375]));

var G__59376 = (i__4865__auto___59375 + (1));
i__4865__auto___59375 = G__59376;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58794 = conformed_args__57352__auto__;
var map__58794__$1 = cljs.core.__destructure_map(map__58794);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq58793){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58793));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59377 = arguments.length;
var i__4865__auto___59378 = (0);
while(true){
if((i__4865__auto___59378 < len__4864__auto___59377)){
args__4870__auto__.push((arguments[i__4865__auto___59378]));

var G__59379 = (i__4865__auto___59378 + (1));
i__4865__auto___59378 = G__59379;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58796 = conformed_args__57352__auto__;
var map__58796__$1 = cljs.core.__destructure_map(map__58796);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq58795){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58795));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59380 = arguments.length;
var i__4865__auto___59381 = (0);
while(true){
if((i__4865__auto___59381 < len__4864__auto___59380)){
args__4870__auto__.push((arguments[i__4865__auto___59381]));

var G__59382 = (i__4865__auto___59381 + (1));
i__4865__auto___59381 = G__59382;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58798 = conformed_args__57352__auto__;
var map__58798__$1 = cljs.core.__destructure_map(map__58798);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58798__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq58797){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58797));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59383 = arguments.length;
var i__4865__auto___59384 = (0);
while(true){
if((i__4865__auto___59384 < len__4864__auto___59383)){
args__4870__auto__.push((arguments[i__4865__auto___59384]));

var G__59385 = (i__4865__auto___59384 + (1));
i__4865__auto___59384 = G__59385;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58800 = conformed_args__57352__auto__;
var map__58800__$1 = cljs.core.__destructure_map(map__58800);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq58799){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58799));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59386 = arguments.length;
var i__4865__auto___59387 = (0);
while(true){
if((i__4865__auto___59387 < len__4864__auto___59386)){
args__4870__auto__.push((arguments[i__4865__auto___59387]));

var G__59388 = (i__4865__auto___59387 + (1));
i__4865__auto___59387 = G__59388;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58802 = conformed_args__57352__auto__;
var map__58802__$1 = cljs.core.__destructure_map(map__58802);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq58801){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58801));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59389 = arguments.length;
var i__4865__auto___59390 = (0);
while(true){
if((i__4865__auto___59390 < len__4864__auto___59389)){
args__4870__auto__.push((arguments[i__4865__auto___59390]));

var G__59391 = (i__4865__auto___59390 + (1));
i__4865__auto___59390 = G__59391;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58804 = conformed_args__57352__auto__;
var map__58804__$1 = cljs.core.__destructure_map(map__58804);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq58803){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58803));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59392 = arguments.length;
var i__4865__auto___59393 = (0);
while(true){
if((i__4865__auto___59393 < len__4864__auto___59392)){
args__4870__auto__.push((arguments[i__4865__auto___59393]));

var G__59394 = (i__4865__auto___59393 + (1));
i__4865__auto___59393 = G__59394;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58806 = conformed_args__57352__auto__;
var map__58806__$1 = cljs.core.__destructure_map(map__58806);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq58805){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58805));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59395 = arguments.length;
var i__4865__auto___59396 = (0);
while(true){
if((i__4865__auto___59396 < len__4864__auto___59395)){
args__4870__auto__.push((arguments[i__4865__auto___59396]));

var G__59397 = (i__4865__auto___59396 + (1));
i__4865__auto___59396 = G__59397;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58808 = conformed_args__57352__auto__;
var map__58808__$1 = cljs.core.__destructure_map(map__58808);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq58807){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58807));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59398 = arguments.length;
var i__4865__auto___59399 = (0);
while(true){
if((i__4865__auto___59399 < len__4864__auto___59398)){
args__4870__auto__.push((arguments[i__4865__auto___59399]));

var G__59400 = (i__4865__auto___59399 + (1));
i__4865__auto___59399 = G__59400;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58810 = conformed_args__57352__auto__;
var map__58810__$1 = cljs.core.__destructure_map(map__58810);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq58809){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58809));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59401 = arguments.length;
var i__4865__auto___59402 = (0);
while(true){
if((i__4865__auto___59402 < len__4864__auto___59401)){
args__4870__auto__.push((arguments[i__4865__auto___59402]));

var G__59403 = (i__4865__auto___59402 + (1));
i__4865__auto___59402 = G__59403;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58812 = conformed_args__57352__auto__;
var map__58812__$1 = cljs.core.__destructure_map(map__58812);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58812__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58812__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq58811){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58811));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59404 = arguments.length;
var i__4865__auto___59405 = (0);
while(true){
if((i__4865__auto___59405 < len__4864__auto___59404)){
args__4870__auto__.push((arguments[i__4865__auto___59405]));

var G__59406 = (i__4865__auto___59405 + (1));
i__4865__auto___59405 = G__59406;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58814 = conformed_args__57352__auto__;
var map__58814__$1 = cljs.core.__destructure_map(map__58814);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58814__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq58813){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58813));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59407 = arguments.length;
var i__4865__auto___59408 = (0);
while(true){
if((i__4865__auto___59408 < len__4864__auto___59407)){
args__4870__auto__.push((arguments[i__4865__auto___59408]));

var G__59409 = (i__4865__auto___59408 + (1));
i__4865__auto___59408 = G__59409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58816 = conformed_args__57352__auto__;
var map__58816__$1 = cljs.core.__destructure_map(map__58816);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq58815){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58815));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59410 = arguments.length;
var i__4865__auto___59411 = (0);
while(true){
if((i__4865__auto___59411 < len__4864__auto___59410)){
args__4870__auto__.push((arguments[i__4865__auto___59411]));

var G__59412 = (i__4865__auto___59411 + (1));
i__4865__auto___59411 = G__59412;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58818 = conformed_args__57352__auto__;
var map__58818__$1 = cljs.core.__destructure_map(map__58818);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58818__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58818__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq58817){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58817));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59413 = arguments.length;
var i__4865__auto___59414 = (0);
while(true){
if((i__4865__auto___59414 < len__4864__auto___59413)){
args__4870__auto__.push((arguments[i__4865__auto___59414]));

var G__59415 = (i__4865__auto___59414 + (1));
i__4865__auto___59414 = G__59415;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58820 = conformed_args__57352__auto__;
var map__58820__$1 = cljs.core.__destructure_map(map__58820);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq58819){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58819));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59416 = arguments.length;
var i__4865__auto___59417 = (0);
while(true){
if((i__4865__auto___59417 < len__4864__auto___59416)){
args__4870__auto__.push((arguments[i__4865__auto___59417]));

var G__59418 = (i__4865__auto___59417 + (1));
i__4865__auto___59417 = G__59418;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58822 = conformed_args__57352__auto__;
var map__58822__$1 = cljs.core.__destructure_map(map__58822);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq58821){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58821));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59419 = arguments.length;
var i__4865__auto___59420 = (0);
while(true){
if((i__4865__auto___59420 < len__4864__auto___59419)){
args__4870__auto__.push((arguments[i__4865__auto___59420]));

var G__59421 = (i__4865__auto___59420 + (1));
i__4865__auto___59420 = G__59421;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58824 = conformed_args__57352__auto__;
var map__58824__$1 = cljs.core.__destructure_map(map__58824);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq58823){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58823));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59422 = arguments.length;
var i__4865__auto___59423 = (0);
while(true){
if((i__4865__auto___59423 < len__4864__auto___59422)){
args__4870__auto__.push((arguments[i__4865__auto___59423]));

var G__59424 = (i__4865__auto___59423 + (1));
i__4865__auto___59423 = G__59424;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58826 = conformed_args__57352__auto__;
var map__58826__$1 = cljs.core.__destructure_map(map__58826);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58826__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq58825){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58825));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59425 = arguments.length;
var i__4865__auto___59426 = (0);
while(true){
if((i__4865__auto___59426 < len__4864__auto___59425)){
args__4870__auto__.push((arguments[i__4865__auto___59426]));

var G__59427 = (i__4865__auto___59426 + (1));
i__4865__auto___59426 = G__59427;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58828 = conformed_args__57352__auto__;
var map__58828__$1 = cljs.core.__destructure_map(map__58828);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58828__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq58827){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58827));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59428 = arguments.length;
var i__4865__auto___59429 = (0);
while(true){
if((i__4865__auto___59429 < len__4864__auto___59428)){
args__4870__auto__.push((arguments[i__4865__auto___59429]));

var G__59430 = (i__4865__auto___59429 + (1));
i__4865__auto___59429 = G__59430;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58830 = conformed_args__57352__auto__;
var map__58830__$1 = cljs.core.__destructure_map(map__58830);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq58829){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58829));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59431 = arguments.length;
var i__4865__auto___59432 = (0);
while(true){
if((i__4865__auto___59432 < len__4864__auto___59431)){
args__4870__auto__.push((arguments[i__4865__auto___59432]));

var G__59433 = (i__4865__auto___59432 + (1));
i__4865__auto___59432 = G__59433;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58832 = conformed_args__57352__auto__;
var map__58832__$1 = cljs.core.__destructure_map(map__58832);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq58831){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58831));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59434 = arguments.length;
var i__4865__auto___59435 = (0);
while(true){
if((i__4865__auto___59435 < len__4864__auto___59434)){
args__4870__auto__.push((arguments[i__4865__auto___59435]));

var G__59436 = (i__4865__auto___59435 + (1));
i__4865__auto___59435 = G__59436;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58834 = conformed_args__57352__auto__;
var map__58834__$1 = cljs.core.__destructure_map(map__58834);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58834__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq58833){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58833));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59437 = arguments.length;
var i__4865__auto___59438 = (0);
while(true){
if((i__4865__auto___59438 < len__4864__auto___59437)){
args__4870__auto__.push((arguments[i__4865__auto___59438]));

var G__59439 = (i__4865__auto___59438 + (1));
i__4865__auto___59438 = G__59439;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58836 = conformed_args__57352__auto__;
var map__58836__$1 = cljs.core.__destructure_map(map__58836);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq58835){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58835));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59440 = arguments.length;
var i__4865__auto___59441 = (0);
while(true){
if((i__4865__auto___59441 < len__4864__auto___59440)){
args__4870__auto__.push((arguments[i__4865__auto___59441]));

var G__59442 = (i__4865__auto___59441 + (1));
i__4865__auto___59441 = G__59442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58838 = conformed_args__57352__auto__;
var map__58838__$1 = cljs.core.__destructure_map(map__58838);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq58837){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58837));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59443 = arguments.length;
var i__4865__auto___59444 = (0);
while(true){
if((i__4865__auto___59444 < len__4864__auto___59443)){
args__4870__auto__.push((arguments[i__4865__auto___59444]));

var G__59445 = (i__4865__auto___59444 + (1));
i__4865__auto___59444 = G__59445;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58840 = conformed_args__57352__auto__;
var map__58840__$1 = cljs.core.__destructure_map(map__58840);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq58839){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58839));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59446 = arguments.length;
var i__4865__auto___59447 = (0);
while(true){
if((i__4865__auto___59447 < len__4864__auto___59446)){
args__4870__auto__.push((arguments[i__4865__auto___59447]));

var G__59448 = (i__4865__auto___59447 + (1));
i__4865__auto___59447 = G__59448;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58842 = conformed_args__57352__auto__;
var map__58842__$1 = cljs.core.__destructure_map(map__58842);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58842__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58842__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58842__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq58841){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58841));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59449 = arguments.length;
var i__4865__auto___59450 = (0);
while(true){
if((i__4865__auto___59450 < len__4864__auto___59449)){
args__4870__auto__.push((arguments[i__4865__auto___59450]));

var G__59451 = (i__4865__auto___59450 + (1));
i__4865__auto___59450 = G__59451;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58844 = conformed_args__57352__auto__;
var map__58844__$1 = cljs.core.__destructure_map(map__58844);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq58843){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58843));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59452 = arguments.length;
var i__4865__auto___59453 = (0);
while(true){
if((i__4865__auto___59453 < len__4864__auto___59452)){
args__4870__auto__.push((arguments[i__4865__auto___59453]));

var G__59454 = (i__4865__auto___59453 + (1));
i__4865__auto___59453 = G__59454;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58846 = conformed_args__57352__auto__;
var map__58846__$1 = cljs.core.__destructure_map(map__58846);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq58845){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58845));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59455 = arguments.length;
var i__4865__auto___59456 = (0);
while(true){
if((i__4865__auto___59456 < len__4864__auto___59455)){
args__4870__auto__.push((arguments[i__4865__auto___59456]));

var G__59457 = (i__4865__auto___59456 + (1));
i__4865__auto___59456 = G__59457;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58848 = conformed_args__57352__auto__;
var map__58848__$1 = cljs.core.__destructure_map(map__58848);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq58847){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58847));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59458 = arguments.length;
var i__4865__auto___59459 = (0);
while(true){
if((i__4865__auto___59459 < len__4864__auto___59458)){
args__4870__auto__.push((arguments[i__4865__auto___59459]));

var G__59460 = (i__4865__auto___59459 + (1));
i__4865__auto___59459 = G__59460;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58850 = conformed_args__57352__auto__;
var map__58850__$1 = cljs.core.__destructure_map(map__58850);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq58849){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58849));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59461 = arguments.length;
var i__4865__auto___59462 = (0);
while(true){
if((i__4865__auto___59462 < len__4864__auto___59461)){
args__4870__auto__.push((arguments[i__4865__auto___59462]));

var G__59463 = (i__4865__auto___59462 + (1));
i__4865__auto___59462 = G__59463;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58852 = conformed_args__57352__auto__;
var map__58852__$1 = cljs.core.__destructure_map(map__58852);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq58851){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58851));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59464 = arguments.length;
var i__4865__auto___59465 = (0);
while(true){
if((i__4865__auto___59465 < len__4864__auto___59464)){
args__4870__auto__.push((arguments[i__4865__auto___59465]));

var G__59466 = (i__4865__auto___59465 + (1));
i__4865__auto___59465 = G__59466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58854 = conformed_args__57352__auto__;
var map__58854__$1 = cljs.core.__destructure_map(map__58854);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58854__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58854__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58854__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq58853){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58853));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59467 = arguments.length;
var i__4865__auto___59468 = (0);
while(true){
if((i__4865__auto___59468 < len__4864__auto___59467)){
args__4870__auto__.push((arguments[i__4865__auto___59468]));

var G__59469 = (i__4865__auto___59468 + (1));
i__4865__auto___59468 = G__59469;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58856 = conformed_args__57352__auto__;
var map__58856__$1 = cljs.core.__destructure_map(map__58856);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58856__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq58855){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58855));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59470 = arguments.length;
var i__4865__auto___59471 = (0);
while(true){
if((i__4865__auto___59471 < len__4864__auto___59470)){
args__4870__auto__.push((arguments[i__4865__auto___59471]));

var G__59472 = (i__4865__auto___59471 + (1));
i__4865__auto___59471 = G__59472;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58858 = conformed_args__57352__auto__;
var map__58858__$1 = cljs.core.__destructure_map(map__58858);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq58857){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58857));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59473 = arguments.length;
var i__4865__auto___59474 = (0);
while(true){
if((i__4865__auto___59474 < len__4864__auto___59473)){
args__4870__auto__.push((arguments[i__4865__auto___59474]));

var G__59475 = (i__4865__auto___59474 + (1));
i__4865__auto___59474 = G__59475;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58860 = conformed_args__57352__auto__;
var map__58860__$1 = cljs.core.__destructure_map(map__58860);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq58859){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58859));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59476 = arguments.length;
var i__4865__auto___59477 = (0);
while(true){
if((i__4865__auto___59477 < len__4864__auto___59476)){
args__4870__auto__.push((arguments[i__4865__auto___59477]));

var G__59478 = (i__4865__auto___59477 + (1));
i__4865__auto___59477 = G__59478;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58862 = conformed_args__57352__auto__;
var map__58862__$1 = cljs.core.__destructure_map(map__58862);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq58861){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58861));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59479 = arguments.length;
var i__4865__auto___59480 = (0);
while(true){
if((i__4865__auto___59480 < len__4864__auto___59479)){
args__4870__auto__.push((arguments[i__4865__auto___59480]));

var G__59481 = (i__4865__auto___59480 + (1));
i__4865__auto___59480 = G__59481;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58864 = conformed_args__57352__auto__;
var map__58864__$1 = cljs.core.__destructure_map(map__58864);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq58863){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58863));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59482 = arguments.length;
var i__4865__auto___59483 = (0);
while(true){
if((i__4865__auto___59483 < len__4864__auto___59482)){
args__4870__auto__.push((arguments[i__4865__auto___59483]));

var G__59484 = (i__4865__auto___59483 + (1));
i__4865__auto___59483 = G__59484;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58866 = conformed_args__57352__auto__;
var map__58866__$1 = cljs.core.__destructure_map(map__58866);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq58865){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58865));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59485 = arguments.length;
var i__4865__auto___59486 = (0);
while(true){
if((i__4865__auto___59486 < len__4864__auto___59485)){
args__4870__auto__.push((arguments[i__4865__auto___59486]));

var G__59487 = (i__4865__auto___59486 + (1));
i__4865__auto___59486 = G__59487;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58868 = conformed_args__57352__auto__;
var map__58868__$1 = cljs.core.__destructure_map(map__58868);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58868__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58868__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58868__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq58867){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58867));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59488 = arguments.length;
var i__4865__auto___59489 = (0);
while(true){
if((i__4865__auto___59489 < len__4864__auto___59488)){
args__4870__auto__.push((arguments[i__4865__auto___59489]));

var G__59490 = (i__4865__auto___59489 + (1));
i__4865__auto___59489 = G__59490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58870 = conformed_args__57352__auto__;
var map__58870__$1 = cljs.core.__destructure_map(map__58870);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq58869){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58869));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59491 = arguments.length;
var i__4865__auto___59492 = (0);
while(true){
if((i__4865__auto___59492 < len__4864__auto___59491)){
args__4870__auto__.push((arguments[i__4865__auto___59492]));

var G__59493 = (i__4865__auto___59492 + (1));
i__4865__auto___59492 = G__59493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58872 = conformed_args__57352__auto__;
var map__58872__$1 = cljs.core.__destructure_map(map__58872);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq58871){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58871));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59494 = arguments.length;
var i__4865__auto___59495 = (0);
while(true){
if((i__4865__auto___59495 < len__4864__auto___59494)){
args__4870__auto__.push((arguments[i__4865__auto___59495]));

var G__59496 = (i__4865__auto___59495 + (1));
i__4865__auto___59495 = G__59496;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58874 = conformed_args__57352__auto__;
var map__58874__$1 = cljs.core.__destructure_map(map__58874);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq58873){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58873));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59497 = arguments.length;
var i__4865__auto___59498 = (0);
while(true){
if((i__4865__auto___59498 < len__4864__auto___59497)){
args__4870__auto__.push((arguments[i__4865__auto___59498]));

var G__59499 = (i__4865__auto___59498 + (1));
i__4865__auto___59498 = G__59499;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58876 = conformed_args__57352__auto__;
var map__58876__$1 = cljs.core.__destructure_map(map__58876);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq58875){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58875));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59500 = arguments.length;
var i__4865__auto___59501 = (0);
while(true){
if((i__4865__auto___59501 < len__4864__auto___59500)){
args__4870__auto__.push((arguments[i__4865__auto___59501]));

var G__59502 = (i__4865__auto___59501 + (1));
i__4865__auto___59501 = G__59502;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58878 = conformed_args__57352__auto__;
var map__58878__$1 = cljs.core.__destructure_map(map__58878);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq58877){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58877));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59503 = arguments.length;
var i__4865__auto___59504 = (0);
while(true){
if((i__4865__auto___59504 < len__4864__auto___59503)){
args__4870__auto__.push((arguments[i__4865__auto___59504]));

var G__59505 = (i__4865__auto___59504 + (1));
i__4865__auto___59504 = G__59505;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58880 = conformed_args__57352__auto__;
var map__58880__$1 = cljs.core.__destructure_map(map__58880);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58880__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq58879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58879));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59506 = arguments.length;
var i__4865__auto___59507 = (0);
while(true){
if((i__4865__auto___59507 < len__4864__auto___59506)){
args__4870__auto__.push((arguments[i__4865__auto___59507]));

var G__59508 = (i__4865__auto___59507 + (1));
i__4865__auto___59507 = G__59508;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58882 = conformed_args__57352__auto__;
var map__58882__$1 = cljs.core.__destructure_map(map__58882);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq58881){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58881));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59509 = arguments.length;
var i__4865__auto___59510 = (0);
while(true){
if((i__4865__auto___59510 < len__4864__auto___59509)){
args__4870__auto__.push((arguments[i__4865__auto___59510]));

var G__59511 = (i__4865__auto___59510 + (1));
i__4865__auto___59510 = G__59511;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58884 = conformed_args__57352__auto__;
var map__58884__$1 = cljs.core.__destructure_map(map__58884);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq58883){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58883));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59512 = arguments.length;
var i__4865__auto___59513 = (0);
while(true){
if((i__4865__auto___59513 < len__4864__auto___59512)){
args__4870__auto__.push((arguments[i__4865__auto___59513]));

var G__59514 = (i__4865__auto___59513 + (1));
i__4865__auto___59513 = G__59514;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58886 = conformed_args__57352__auto__;
var map__58886__$1 = cljs.core.__destructure_map(map__58886);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58886__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58886__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq58885){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58885));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59515 = arguments.length;
var i__4865__auto___59516 = (0);
while(true){
if((i__4865__auto___59516 < len__4864__auto___59515)){
args__4870__auto__.push((arguments[i__4865__auto___59516]));

var G__59517 = (i__4865__auto___59516 + (1));
i__4865__auto___59516 = G__59517;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58888 = conformed_args__57352__auto__;
var map__58888__$1 = cljs.core.__destructure_map(map__58888);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq58887){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58887));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59518 = arguments.length;
var i__4865__auto___59519 = (0);
while(true){
if((i__4865__auto___59519 < len__4864__auto___59518)){
args__4870__auto__.push((arguments[i__4865__auto___59519]));

var G__59520 = (i__4865__auto___59519 + (1));
i__4865__auto___59519 = G__59520;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58890 = conformed_args__57352__auto__;
var map__58890__$1 = cljs.core.__destructure_map(map__58890);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58890__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58890__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58890__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq58889){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58889));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59521 = arguments.length;
var i__4865__auto___59522 = (0);
while(true){
if((i__4865__auto___59522 < len__4864__auto___59521)){
args__4870__auto__.push((arguments[i__4865__auto___59522]));

var G__59523 = (i__4865__auto___59522 + (1));
i__4865__auto___59522 = G__59523;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58892 = conformed_args__57352__auto__;
var map__58892__$1 = cljs.core.__destructure_map(map__58892);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58892__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58892__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58892__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq58891){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58891));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59524 = arguments.length;
var i__4865__auto___59525 = (0);
while(true){
if((i__4865__auto___59525 < len__4864__auto___59524)){
args__4870__auto__.push((arguments[i__4865__auto___59525]));

var G__59526 = (i__4865__auto___59525 + (1));
i__4865__auto___59525 = G__59526;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58894 = conformed_args__57352__auto__;
var map__58894__$1 = cljs.core.__destructure_map(map__58894);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58894__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq58893){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58893));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59527 = arguments.length;
var i__4865__auto___59528 = (0);
while(true){
if((i__4865__auto___59528 < len__4864__auto___59527)){
args__4870__auto__.push((arguments[i__4865__auto___59528]));

var G__59529 = (i__4865__auto___59528 + (1));
i__4865__auto___59528 = G__59529;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58896 = conformed_args__57352__auto__;
var map__58896__$1 = cljs.core.__destructure_map(map__58896);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq58895){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58895));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59530 = arguments.length;
var i__4865__auto___59531 = (0);
while(true){
if((i__4865__auto___59531 < len__4864__auto___59530)){
args__4870__auto__.push((arguments[i__4865__auto___59531]));

var G__59532 = (i__4865__auto___59531 + (1));
i__4865__auto___59531 = G__59532;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58898 = conformed_args__57352__auto__;
var map__58898__$1 = cljs.core.__destructure_map(map__58898);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq58897){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58897));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59533 = arguments.length;
var i__4865__auto___59534 = (0);
while(true){
if((i__4865__auto___59534 < len__4864__auto___59533)){
args__4870__auto__.push((arguments[i__4865__auto___59534]));

var G__59535 = (i__4865__auto___59534 + (1));
i__4865__auto___59534 = G__59535;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58900 = conformed_args__57352__auto__;
var map__58900__$1 = cljs.core.__destructure_map(map__58900);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq58899){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58899));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59536 = arguments.length;
var i__4865__auto___59537 = (0);
while(true){
if((i__4865__auto___59537 < len__4864__auto___59536)){
args__4870__auto__.push((arguments[i__4865__auto___59537]));

var G__59538 = (i__4865__auto___59537 + (1));
i__4865__auto___59537 = G__59538;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58902 = conformed_args__57352__auto__;
var map__58902__$1 = cljs.core.__destructure_map(map__58902);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq58901){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58901));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59539 = arguments.length;
var i__4865__auto___59540 = (0);
while(true){
if((i__4865__auto___59540 < len__4864__auto___59539)){
args__4870__auto__.push((arguments[i__4865__auto___59540]));

var G__59541 = (i__4865__auto___59540 + (1));
i__4865__auto___59540 = G__59541;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58904 = conformed_args__57352__auto__;
var map__58904__$1 = cljs.core.__destructure_map(map__58904);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58904__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58904__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58904__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq58903){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58903));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59542 = arguments.length;
var i__4865__auto___59543 = (0);
while(true){
if((i__4865__auto___59543 < len__4864__auto___59542)){
args__4870__auto__.push((arguments[i__4865__auto___59543]));

var G__59544 = (i__4865__auto___59543 + (1));
i__4865__auto___59543 = G__59544;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58906 = conformed_args__57352__auto__;
var map__58906__$1 = cljs.core.__destructure_map(map__58906);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58906__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58906__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58906__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq58905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58905));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59545 = arguments.length;
var i__4865__auto___59546 = (0);
while(true){
if((i__4865__auto___59546 < len__4864__auto___59545)){
args__4870__auto__.push((arguments[i__4865__auto___59546]));

var G__59547 = (i__4865__auto___59546 + (1));
i__4865__auto___59546 = G__59547;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58908 = conformed_args__57352__auto__;
var map__58908__$1 = cljs.core.__destructure_map(map__58908);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq58907){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58907));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59548 = arguments.length;
var i__4865__auto___59549 = (0);
while(true){
if((i__4865__auto___59549 < len__4864__auto___59548)){
args__4870__auto__.push((arguments[i__4865__auto___59549]));

var G__59550 = (i__4865__auto___59549 + (1));
i__4865__auto___59549 = G__59550;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58910 = conformed_args__57352__auto__;
var map__58910__$1 = cljs.core.__destructure_map(map__58910);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58910__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58910__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58910__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq58909){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58909));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59551 = arguments.length;
var i__4865__auto___59552 = (0);
while(true){
if((i__4865__auto___59552 < len__4864__auto___59551)){
args__4870__auto__.push((arguments[i__4865__auto___59552]));

var G__59553 = (i__4865__auto___59552 + (1));
i__4865__auto___59552 = G__59553;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58912 = conformed_args__57352__auto__;
var map__58912__$1 = cljs.core.__destructure_map(map__58912);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq58911){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58911));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59554 = arguments.length;
var i__4865__auto___59555 = (0);
while(true){
if((i__4865__auto___59555 < len__4864__auto___59554)){
args__4870__auto__.push((arguments[i__4865__auto___59555]));

var G__59556 = (i__4865__auto___59555 + (1));
i__4865__auto___59555 = G__59556;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58914 = conformed_args__57352__auto__;
var map__58914__$1 = cljs.core.__destructure_map(map__58914);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq58913){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58913));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59557 = arguments.length;
var i__4865__auto___59558 = (0);
while(true){
if((i__4865__auto___59558 < len__4864__auto___59557)){
args__4870__auto__.push((arguments[i__4865__auto___59558]));

var G__59559 = (i__4865__auto___59558 + (1));
i__4865__auto___59558 = G__59559;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58916 = conformed_args__57352__auto__;
var map__58916__$1 = cljs.core.__destructure_map(map__58916);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq58915){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58915));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59560 = arguments.length;
var i__4865__auto___59561 = (0);
while(true){
if((i__4865__auto___59561 < len__4864__auto___59560)){
args__4870__auto__.push((arguments[i__4865__auto___59561]));

var G__59562 = (i__4865__auto___59561 + (1));
i__4865__auto___59561 = G__59562;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58918 = conformed_args__57352__auto__;
var map__58918__$1 = cljs.core.__destructure_map(map__58918);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq58917){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58917));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59563 = arguments.length;
var i__4865__auto___59564 = (0);
while(true){
if((i__4865__auto___59564 < len__4864__auto___59563)){
args__4870__auto__.push((arguments[i__4865__auto___59564]));

var G__59565 = (i__4865__auto___59564 + (1));
i__4865__auto___59564 = G__59565;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58920 = conformed_args__57352__auto__;
var map__58920__$1 = cljs.core.__destructure_map(map__58920);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58920__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58920__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58920__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq58919){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58919));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59566 = arguments.length;
var i__4865__auto___59567 = (0);
while(true){
if((i__4865__auto___59567 < len__4864__auto___59566)){
args__4870__auto__.push((arguments[i__4865__auto___59567]));

var G__59568 = (i__4865__auto___59567 + (1));
i__4865__auto___59567 = G__59568;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58922 = conformed_args__57352__auto__;
var map__58922__$1 = cljs.core.__destructure_map(map__58922);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq58921){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58921));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59569 = arguments.length;
var i__4865__auto___59570 = (0);
while(true){
if((i__4865__auto___59570 < len__4864__auto___59569)){
args__4870__auto__.push((arguments[i__4865__auto___59570]));

var G__59571 = (i__4865__auto___59570 + (1));
i__4865__auto___59570 = G__59571;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58924 = conformed_args__57352__auto__;
var map__58924__$1 = cljs.core.__destructure_map(map__58924);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq58923){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58923));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59572 = arguments.length;
var i__4865__auto___59573 = (0);
while(true){
if((i__4865__auto___59573 < len__4864__auto___59572)){
args__4870__auto__.push((arguments[i__4865__auto___59573]));

var G__59574 = (i__4865__auto___59573 + (1));
i__4865__auto___59573 = G__59574;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58926 = conformed_args__57352__auto__;
var map__58926__$1 = cljs.core.__destructure_map(map__58926);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58926__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58926__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58926__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq58925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58925));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59575 = arguments.length;
var i__4865__auto___59576 = (0);
while(true){
if((i__4865__auto___59576 < len__4864__auto___59575)){
args__4870__auto__.push((arguments[i__4865__auto___59576]));

var G__59577 = (i__4865__auto___59576 + (1));
i__4865__auto___59576 = G__59577;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58928 = conformed_args__57352__auto__;
var map__58928__$1 = cljs.core.__destructure_map(map__58928);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58928__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq58927){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58927));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59578 = arguments.length;
var i__4865__auto___59579 = (0);
while(true){
if((i__4865__auto___59579 < len__4864__auto___59578)){
args__4870__auto__.push((arguments[i__4865__auto___59579]));

var G__59580 = (i__4865__auto___59579 + (1));
i__4865__auto___59579 = G__59580;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58930 = conformed_args__57352__auto__;
var map__58930__$1 = cljs.core.__destructure_map(map__58930);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq58929){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58929));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59581 = arguments.length;
var i__4865__auto___59582 = (0);
while(true){
if((i__4865__auto___59582 < len__4864__auto___59581)){
args__4870__auto__.push((arguments[i__4865__auto___59582]));

var G__59583 = (i__4865__auto___59582 + (1));
i__4865__auto___59582 = G__59583;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58932 = conformed_args__57352__auto__;
var map__58932__$1 = cljs.core.__destructure_map(map__58932);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq58931){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58931));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59584 = arguments.length;
var i__4865__auto___59585 = (0);
while(true){
if((i__4865__auto___59585 < len__4864__auto___59584)){
args__4870__auto__.push((arguments[i__4865__auto___59585]));

var G__59586 = (i__4865__auto___59585 + (1));
i__4865__auto___59585 = G__59586;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58934 = conformed_args__57352__auto__;
var map__58934__$1 = cljs.core.__destructure_map(map__58934);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58934__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58934__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58934__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq58933){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58933));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59587 = arguments.length;
var i__4865__auto___59588 = (0);
while(true){
if((i__4865__auto___59588 < len__4864__auto___59587)){
args__4870__auto__.push((arguments[i__4865__auto___59588]));

var G__59589 = (i__4865__auto___59588 + (1));
i__4865__auto___59588 = G__59589;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58936 = conformed_args__57352__auto__;
var map__58936__$1 = cljs.core.__destructure_map(map__58936);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq58935){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58935));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59590 = arguments.length;
var i__4865__auto___59591 = (0);
while(true){
if((i__4865__auto___59591 < len__4864__auto___59590)){
args__4870__auto__.push((arguments[i__4865__auto___59591]));

var G__59592 = (i__4865__auto___59591 + (1));
i__4865__auto___59591 = G__59592;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58938 = conformed_args__57352__auto__;
var map__58938__$1 = cljs.core.__destructure_map(map__58938);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq58937){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58937));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59593 = arguments.length;
var i__4865__auto___59594 = (0);
while(true){
if((i__4865__auto___59594 < len__4864__auto___59593)){
args__4870__auto__.push((arguments[i__4865__auto___59594]));

var G__59595 = (i__4865__auto___59594 + (1));
i__4865__auto___59594 = G__59595;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58940 = conformed_args__57352__auto__;
var map__58940__$1 = cljs.core.__destructure_map(map__58940);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58940__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58940__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58940__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq58939){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58939));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59596 = arguments.length;
var i__4865__auto___59597 = (0);
while(true){
if((i__4865__auto___59597 < len__4864__auto___59596)){
args__4870__auto__.push((arguments[i__4865__auto___59597]));

var G__59598 = (i__4865__auto___59597 + (1));
i__4865__auto___59597 = G__59598;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58942 = conformed_args__57352__auto__;
var map__58942__$1 = cljs.core.__destructure_map(map__58942);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58942__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58942__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58942__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq58941){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58941));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59599 = arguments.length;
var i__4865__auto___59600 = (0);
while(true){
if((i__4865__auto___59600 < len__4864__auto___59599)){
args__4870__auto__.push((arguments[i__4865__auto___59600]));

var G__59601 = (i__4865__auto___59600 + (1));
i__4865__auto___59600 = G__59601;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58944 = conformed_args__57352__auto__;
var map__58944__$1 = cljs.core.__destructure_map(map__58944);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq58943){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58943));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59602 = arguments.length;
var i__4865__auto___59603 = (0);
while(true){
if((i__4865__auto___59603 < len__4864__auto___59602)){
args__4870__auto__.push((arguments[i__4865__auto___59603]));

var G__59604 = (i__4865__auto___59603 + (1));
i__4865__auto___59603 = G__59604;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58946 = conformed_args__57352__auto__;
var map__58946__$1 = cljs.core.__destructure_map(map__58946);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58946__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq58945){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58945));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59605 = arguments.length;
var i__4865__auto___59606 = (0);
while(true){
if((i__4865__auto___59606 < len__4864__auto___59605)){
args__4870__auto__.push((arguments[i__4865__auto___59606]));

var G__59607 = (i__4865__auto___59606 + (1));
i__4865__auto___59606 = G__59607;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58948 = conformed_args__57352__auto__;
var map__58948__$1 = cljs.core.__destructure_map(map__58948);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq58947){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58947));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59608 = arguments.length;
var i__4865__auto___59609 = (0);
while(true){
if((i__4865__auto___59609 < len__4864__auto___59608)){
args__4870__auto__.push((arguments[i__4865__auto___59609]));

var G__59610 = (i__4865__auto___59609 + (1));
i__4865__auto___59609 = G__59610;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58950 = conformed_args__57352__auto__;
var map__58950__$1 = cljs.core.__destructure_map(map__58950);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq58949){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58949));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59611 = arguments.length;
var i__4865__auto___59612 = (0);
while(true){
if((i__4865__auto___59612 < len__4864__auto___59611)){
args__4870__auto__.push((arguments[i__4865__auto___59612]));

var G__59613 = (i__4865__auto___59612 + (1));
i__4865__auto___59612 = G__59613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58952 = conformed_args__57352__auto__;
var map__58952__$1 = cljs.core.__destructure_map(map__58952);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq58951){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58951));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59614 = arguments.length;
var i__4865__auto___59615 = (0);
while(true){
if((i__4865__auto___59615 < len__4864__auto___59614)){
args__4870__auto__.push((arguments[i__4865__auto___59615]));

var G__59616 = (i__4865__auto___59615 + (1));
i__4865__auto___59615 = G__59616;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58954 = conformed_args__57352__auto__;
var map__58954__$1 = cljs.core.__destructure_map(map__58954);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq58953){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58953));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59617 = arguments.length;
var i__4865__auto___59618 = (0);
while(true){
if((i__4865__auto___59618 < len__4864__auto___59617)){
args__4870__auto__.push((arguments[i__4865__auto___59618]));

var G__59619 = (i__4865__auto___59618 + (1));
i__4865__auto___59618 = G__59619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58956 = conformed_args__57352__auto__;
var map__58956__$1 = cljs.core.__destructure_map(map__58956);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq58955){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58955));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59620 = arguments.length;
var i__4865__auto___59621 = (0);
while(true){
if((i__4865__auto___59621 < len__4864__auto___59620)){
args__4870__auto__.push((arguments[i__4865__auto___59621]));

var G__59622 = (i__4865__auto___59621 + (1));
i__4865__auto___59621 = G__59622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58958 = conformed_args__57352__auto__;
var map__58958__$1 = cljs.core.__destructure_map(map__58958);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58958__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58958__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58958__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq58957){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58957));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59623 = arguments.length;
var i__4865__auto___59624 = (0);
while(true){
if((i__4865__auto___59624 < len__4864__auto___59623)){
args__4870__auto__.push((arguments[i__4865__auto___59624]));

var G__59625 = (i__4865__auto___59624 + (1));
i__4865__auto___59624 = G__59625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58960 = conformed_args__57352__auto__;
var map__58960__$1 = cljs.core.__destructure_map(map__58960);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq58959){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58959));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59626 = arguments.length;
var i__4865__auto___59627 = (0);
while(true){
if((i__4865__auto___59627 < len__4864__auto___59626)){
args__4870__auto__.push((arguments[i__4865__auto___59627]));

var G__59628 = (i__4865__auto___59627 + (1));
i__4865__auto___59627 = G__59628;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58962 = conformed_args__57352__auto__;
var map__58962__$1 = cljs.core.__destructure_map(map__58962);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq58961){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58961));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59629 = arguments.length;
var i__4865__auto___59630 = (0);
while(true){
if((i__4865__auto___59630 < len__4864__auto___59629)){
args__4870__auto__.push((arguments[i__4865__auto___59630]));

var G__59631 = (i__4865__auto___59630 + (1));
i__4865__auto___59630 = G__59631;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58964 = conformed_args__57352__auto__;
var map__58964__$1 = cljs.core.__destructure_map(map__58964);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58964__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58964__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58964__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq58963){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58963));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59632 = arguments.length;
var i__4865__auto___59633 = (0);
while(true){
if((i__4865__auto___59633 < len__4864__auto___59632)){
args__4870__auto__.push((arguments[i__4865__auto___59633]));

var G__59634 = (i__4865__auto___59633 + (1));
i__4865__auto___59633 = G__59634;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58966 = conformed_args__57352__auto__;
var map__58966__$1 = cljs.core.__destructure_map(map__58966);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq58965){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58965));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59635 = arguments.length;
var i__4865__auto___59636 = (0);
while(true){
if((i__4865__auto___59636 < len__4864__auto___59635)){
args__4870__auto__.push((arguments[i__4865__auto___59636]));

var G__59637 = (i__4865__auto___59636 + (1));
i__4865__auto___59636 = G__59637;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58968 = conformed_args__57352__auto__;
var map__58968__$1 = cljs.core.__destructure_map(map__58968);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58968__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58968__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58968__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq58967){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58967));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59638 = arguments.length;
var i__4865__auto___59639 = (0);
while(true){
if((i__4865__auto___59639 < len__4864__auto___59638)){
args__4870__auto__.push((arguments[i__4865__auto___59639]));

var G__59640 = (i__4865__auto___59639 + (1));
i__4865__auto___59639 = G__59640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58970 = conformed_args__57352__auto__;
var map__58970__$1 = cljs.core.__destructure_map(map__58970);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq58969){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58969));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59641 = arguments.length;
var i__4865__auto___59642 = (0);
while(true){
if((i__4865__auto___59642 < len__4864__auto___59641)){
args__4870__auto__.push((arguments[i__4865__auto___59642]));

var G__59643 = (i__4865__auto___59642 + (1));
i__4865__auto___59642 = G__59643;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58972 = conformed_args__57352__auto__;
var map__58972__$1 = cljs.core.__destructure_map(map__58972);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq58971){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58971));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59644 = arguments.length;
var i__4865__auto___59645 = (0);
while(true){
if((i__4865__auto___59645 < len__4864__auto___59644)){
args__4870__auto__.push((arguments[i__4865__auto___59645]));

var G__59646 = (i__4865__auto___59645 + (1));
i__4865__auto___59645 = G__59646;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58974 = conformed_args__57352__auto__;
var map__58974__$1 = cljs.core.__destructure_map(map__58974);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq58973){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58973));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59647 = arguments.length;
var i__4865__auto___59648 = (0);
while(true){
if((i__4865__auto___59648 < len__4864__auto___59647)){
args__4870__auto__.push((arguments[i__4865__auto___59648]));

var G__59649 = (i__4865__auto___59648 + (1));
i__4865__auto___59648 = G__59649;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58976 = conformed_args__57352__auto__;
var map__58976__$1 = cljs.core.__destructure_map(map__58976);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq58975){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58975));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59650 = arguments.length;
var i__4865__auto___59651 = (0);
while(true){
if((i__4865__auto___59651 < len__4864__auto___59650)){
args__4870__auto__.push((arguments[i__4865__auto___59651]));

var G__59652 = (i__4865__auto___59651 + (1));
i__4865__auto___59651 = G__59652;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58978 = conformed_args__57352__auto__;
var map__58978__$1 = cljs.core.__destructure_map(map__58978);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq58977){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58977));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59653 = arguments.length;
var i__4865__auto___59654 = (0);
while(true){
if((i__4865__auto___59654 < len__4864__auto___59653)){
args__4870__auto__.push((arguments[i__4865__auto___59654]));

var G__59655 = (i__4865__auto___59654 + (1));
i__4865__auto___59654 = G__59655;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58980 = conformed_args__57352__auto__;
var map__58980__$1 = cljs.core.__destructure_map(map__58980);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq58979){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58979));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59656 = arguments.length;
var i__4865__auto___59657 = (0);
while(true){
if((i__4865__auto___59657 < len__4864__auto___59656)){
args__4870__auto__.push((arguments[i__4865__auto___59657]));

var G__59658 = (i__4865__auto___59657 + (1));
i__4865__auto___59657 = G__59658;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58982 = conformed_args__57352__auto__;
var map__58982__$1 = cljs.core.__destructure_map(map__58982);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58982__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58982__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58982__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq58981){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58981));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59659 = arguments.length;
var i__4865__auto___59660 = (0);
while(true){
if((i__4865__auto___59660 < len__4864__auto___59659)){
args__4870__auto__.push((arguments[i__4865__auto___59660]));

var G__59661 = (i__4865__auto___59660 + (1));
i__4865__auto___59660 = G__59661;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58984 = conformed_args__57352__auto__;
var map__58984__$1 = cljs.core.__destructure_map(map__58984);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq58983){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58983));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59662 = arguments.length;
var i__4865__auto___59663 = (0);
while(true){
if((i__4865__auto___59663 < len__4864__auto___59662)){
args__4870__auto__.push((arguments[i__4865__auto___59663]));

var G__59664 = (i__4865__auto___59663 + (1));
i__4865__auto___59663 = G__59664;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58986 = conformed_args__57352__auto__;
var map__58986__$1 = cljs.core.__destructure_map(map__58986);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq58985){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58985));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59665 = arguments.length;
var i__4865__auto___59666 = (0);
while(true){
if((i__4865__auto___59666 < len__4864__auto___59665)){
args__4870__auto__.push((arguments[i__4865__auto___59666]));

var G__59667 = (i__4865__auto___59666 + (1));
i__4865__auto___59666 = G__59667;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58988 = conformed_args__57352__auto__;
var map__58988__$1 = cljs.core.__destructure_map(map__58988);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq58987){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58987));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59668 = arguments.length;
var i__4865__auto___59669 = (0);
while(true){
if((i__4865__auto___59669 < len__4864__auto___59668)){
args__4870__auto__.push((arguments[i__4865__auto___59669]));

var G__59670 = (i__4865__auto___59669 + (1));
i__4865__auto___59669 = G__59670;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58990 = conformed_args__57352__auto__;
var map__58990__$1 = cljs.core.__destructure_map(map__58990);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58990__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58990__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq58989){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58989));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59671 = arguments.length;
var i__4865__auto___59672 = (0);
while(true){
if((i__4865__auto___59672 < len__4864__auto___59671)){
args__4870__auto__.push((arguments[i__4865__auto___59672]));

var G__59673 = (i__4865__auto___59672 + (1));
i__4865__auto___59672 = G__59673;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58992 = conformed_args__57352__auto__;
var map__58992__$1 = cljs.core.__destructure_map(map__58992);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq58991){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58991));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59674 = arguments.length;
var i__4865__auto___59675 = (0);
while(true){
if((i__4865__auto___59675 < len__4864__auto___59674)){
args__4870__auto__.push((arguments[i__4865__auto___59675]));

var G__59676 = (i__4865__auto___59675 + (1));
i__4865__auto___59675 = G__59676;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58994 = conformed_args__57352__auto__;
var map__58994__$1 = cljs.core.__destructure_map(map__58994);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq58993){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58993));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59677 = arguments.length;
var i__4865__auto___59678 = (0);
while(true){
if((i__4865__auto___59678 < len__4864__auto___59677)){
args__4870__auto__.push((arguments[i__4865__auto___59678]));

var G__59679 = (i__4865__auto___59678 + (1));
i__4865__auto___59678 = G__59679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58996 = conformed_args__57352__auto__;
var map__58996__$1 = cljs.core.__destructure_map(map__58996);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58996__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq58995){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58995));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59680 = arguments.length;
var i__4865__auto___59681 = (0);
while(true){
if((i__4865__auto___59681 < len__4864__auto___59680)){
args__4870__auto__.push((arguments[i__4865__auto___59681]));

var G__59682 = (i__4865__auto___59681 + (1));
i__4865__auto___59681 = G__59682;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__58998 = conformed_args__57352__auto__;
var map__58998__$1 = cljs.core.__destructure_map(map__58998);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq58997){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58997));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59683 = arguments.length;
var i__4865__auto___59684 = (0);
while(true){
if((i__4865__auto___59684 < len__4864__auto___59683)){
args__4870__auto__.push((arguments[i__4865__auto___59684]));

var G__59685 = (i__4865__auto___59684 + (1));
i__4865__auto___59684 = G__59685;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59000 = conformed_args__57352__auto__;
var map__59000__$1 = cljs.core.__destructure_map(map__59000);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq58999){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58999));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59686 = arguments.length;
var i__4865__auto___59687 = (0);
while(true){
if((i__4865__auto___59687 < len__4864__auto___59686)){
args__4870__auto__.push((arguments[i__4865__auto___59687]));

var G__59688 = (i__4865__auto___59687 + (1));
i__4865__auto___59687 = G__59688;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59002 = conformed_args__57352__auto__;
var map__59002__$1 = cljs.core.__destructure_map(map__59002);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59002__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59002__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59002__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq59001){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59001));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59689 = arguments.length;
var i__4865__auto___59690 = (0);
while(true){
if((i__4865__auto___59690 < len__4864__auto___59689)){
args__4870__auto__.push((arguments[i__4865__auto___59690]));

var G__59691 = (i__4865__auto___59690 + (1));
i__4865__auto___59690 = G__59691;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59004 = conformed_args__57352__auto__;
var map__59004__$1 = cljs.core.__destructure_map(map__59004);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq59003){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59003));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59692 = arguments.length;
var i__4865__auto___59693 = (0);
while(true){
if((i__4865__auto___59693 < len__4864__auto___59692)){
args__4870__auto__.push((arguments[i__4865__auto___59693]));

var G__59694 = (i__4865__auto___59693 + (1));
i__4865__auto___59693 = G__59694;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59006 = conformed_args__57352__auto__;
var map__59006__$1 = cljs.core.__destructure_map(map__59006);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq59005){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59005));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59695 = arguments.length;
var i__4865__auto___59696 = (0);
while(true){
if((i__4865__auto___59696 < len__4864__auto___59695)){
args__4870__auto__.push((arguments[i__4865__auto___59696]));

var G__59697 = (i__4865__auto___59696 + (1));
i__4865__auto___59696 = G__59697;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59008 = conformed_args__57352__auto__;
var map__59008__$1 = cljs.core.__destructure_map(map__59008);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq59007){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59007));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59698 = arguments.length;
var i__4865__auto___59699 = (0);
while(true){
if((i__4865__auto___59699 < len__4864__auto___59698)){
args__4870__auto__.push((arguments[i__4865__auto___59699]));

var G__59700 = (i__4865__auto___59699 + (1));
i__4865__auto___59699 = G__59700;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59010 = conformed_args__57352__auto__;
var map__59010__$1 = cljs.core.__destructure_map(map__59010);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq59009){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59009));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59701 = arguments.length;
var i__4865__auto___59702 = (0);
while(true){
if((i__4865__auto___59702 < len__4864__auto___59701)){
args__4870__auto__.push((arguments[i__4865__auto___59702]));

var G__59703 = (i__4865__auto___59702 + (1));
i__4865__auto___59702 = G__59703;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__57352__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__59012 = conformed_args__57352__auto__;
var map__59012__$1 = cljs.core.__destructure_map(map__59012);
var attrs__57353__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59012__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__57354__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59012__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__57355__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59012__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__57354__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__57354__auto__);
var attrs_value__57356__auto__ = (function (){var or__4253__auto__ = cljs.core.second(attrs__57353__auto__);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__57356__auto__], null),children__57354__auto____$1),css__57355__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq59011){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59011));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
