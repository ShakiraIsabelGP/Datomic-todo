goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51938 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51938(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51940 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51940(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51614 = coll;
var G__51615 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51614,G__51615) : shadow.dom.lazy_native_coll_seq.call(null,G__51614,G__51615));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__51618 = arguments.length;
switch (G__51618) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51620 = arguments.length;
switch (G__51620) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51622 = arguments.length;
switch (G__51622) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51629 = arguments.length;
switch (G__51629) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51633 = arguments.length;
switch (G__51633) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51639 = arguments.length;
switch (G__51639) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51662){if((e51662 instanceof Object)){
var e = e51662;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51662;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51678 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51679 = null;
var count__51680 = (0);
var i__51681 = (0);
while(true){
if((i__51681 < count__51680)){
var el = chunk__51679.cljs$core$IIndexed$_nth$arity$2(null,i__51681);
var handler_51971__$1 = ((function (seq__51678,chunk__51679,count__51680,i__51681,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51678,chunk__51679,count__51680,i__51681,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51971__$1);


var G__51975 = seq__51678;
var G__51976 = chunk__51679;
var G__51977 = count__51680;
var G__51978 = (i__51681 + (1));
seq__51678 = G__51975;
chunk__51679 = G__51976;
count__51680 = G__51977;
i__51681 = G__51978;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51678);
if(temp__5753__auto__){
var seq__51678__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51678__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51678__$1);
var G__51979 = cljs.core.chunk_rest(seq__51678__$1);
var G__51980 = c__4679__auto__;
var G__51981 = cljs.core.count(c__4679__auto__);
var G__51982 = (0);
seq__51678 = G__51979;
chunk__51679 = G__51980;
count__51680 = G__51981;
i__51681 = G__51982;
continue;
} else {
var el = cljs.core.first(seq__51678__$1);
var handler_51983__$1 = ((function (seq__51678,chunk__51679,count__51680,i__51681,el,seq__51678__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51678,chunk__51679,count__51680,i__51681,el,seq__51678__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51983__$1);


var G__51984 = cljs.core.next(seq__51678__$1);
var G__51985 = null;
var G__51986 = (0);
var G__51987 = (0);
seq__51678 = G__51984;
chunk__51679 = G__51985;
count__51680 = G__51986;
i__51681 = G__51987;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51697 = arguments.length;
switch (G__51697) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51698 = cljs.core.seq(events);
var chunk__51699 = null;
var count__51700 = (0);
var i__51701 = (0);
while(true){
if((i__51701 < count__51700)){
var vec__51708 = chunk__51699.cljs$core$IIndexed$_nth$arity$2(null,i__51701);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51708,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51996 = seq__51698;
var G__51997 = chunk__51699;
var G__51998 = count__51700;
var G__51999 = (i__51701 + (1));
seq__51698 = G__51996;
chunk__51699 = G__51997;
count__51700 = G__51998;
i__51701 = G__51999;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51698);
if(temp__5753__auto__){
var seq__51698__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51698__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51698__$1);
var G__52000 = cljs.core.chunk_rest(seq__51698__$1);
var G__52001 = c__4679__auto__;
var G__52002 = cljs.core.count(c__4679__auto__);
var G__52003 = (0);
seq__51698 = G__52000;
chunk__51699 = G__52001;
count__51700 = G__52002;
i__51701 = G__52003;
continue;
} else {
var vec__51717 = cljs.core.first(seq__51698__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51717,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52004 = cljs.core.next(seq__51698__$1);
var G__52005 = null;
var G__52006 = (0);
var G__52007 = (0);
seq__51698 = G__52004;
chunk__51699 = G__52005;
count__51700 = G__52006;
i__51701 = G__52007;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51720 = cljs.core.seq(styles);
var chunk__51721 = null;
var count__51722 = (0);
var i__51723 = (0);
while(true){
if((i__51723 < count__51722)){
var vec__51730 = chunk__51721.cljs$core$IIndexed$_nth$arity$2(null,i__51723);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51730,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52015 = seq__51720;
var G__52016 = chunk__51721;
var G__52017 = count__51722;
var G__52018 = (i__51723 + (1));
seq__51720 = G__52015;
chunk__51721 = G__52016;
count__51722 = G__52017;
i__51723 = G__52018;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51720);
if(temp__5753__auto__){
var seq__51720__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51720__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51720__$1);
var G__52019 = cljs.core.chunk_rest(seq__51720__$1);
var G__52020 = c__4679__auto__;
var G__52021 = cljs.core.count(c__4679__auto__);
var G__52022 = (0);
seq__51720 = G__52019;
chunk__51721 = G__52020;
count__51722 = G__52021;
i__51723 = G__52022;
continue;
} else {
var vec__51733 = cljs.core.first(seq__51720__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51733,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52023 = cljs.core.next(seq__51720__$1);
var G__52024 = null;
var G__52025 = (0);
var G__52026 = (0);
seq__51720 = G__52023;
chunk__51721 = G__52024;
count__51722 = G__52025;
i__51723 = G__52026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51736_52027 = key;
var G__51736_52028__$1 = (((G__51736_52027 instanceof cljs.core.Keyword))?G__51736_52027.fqn:null);
switch (G__51736_52028__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52033 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_52033,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_52033,"aria-");
}
})())){
el.setAttribute(ks_52033,value);
} else {
(el[ks_52033] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51737){
var map__51738 = p__51737;
var map__51738__$1 = cljs.core.__destructure_map(map__51738);
var props = map__51738__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51738__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51739 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51739,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51739,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51739,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51742 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51742,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51742;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51744 = arguments.length;
switch (G__51744) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51745){
var vec__51746 = p__51745;
var seq__51747 = cljs.core.seq(vec__51746);
var first__51748 = cljs.core.first(seq__51747);
var seq__51747__$1 = cljs.core.next(seq__51747);
var nn = first__51748;
var first__51748__$1 = cljs.core.first(seq__51747__$1);
var seq__51747__$2 = cljs.core.next(seq__51747__$1);
var np = first__51748__$1;
var nc = seq__51747__$2;
var node = vec__51746;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51749 = nn;
var G__51750 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51749,G__51750) : create_fn.call(null,G__51749,G__51750));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51751 = nn;
var G__51752 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51751,G__51752) : create_fn.call(null,G__51751,G__51752));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51753 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51753,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51753,(1),null);
var seq__51756_52050 = cljs.core.seq(node_children);
var chunk__51757_52051 = null;
var count__51758_52052 = (0);
var i__51759_52053 = (0);
while(true){
if((i__51759_52053 < count__51758_52052)){
var child_struct_52054 = chunk__51757_52051.cljs$core$IIndexed$_nth$arity$2(null,i__51759_52053);
var children_52055 = shadow.dom.dom_node(child_struct_52054);
if(cljs.core.seq_QMARK_(children_52055)){
var seq__51772_52056 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52055));
var chunk__51774_52057 = null;
var count__51775_52058 = (0);
var i__51776_52059 = (0);
while(true){
if((i__51776_52059 < count__51775_52058)){
var child_52060 = chunk__51774_52057.cljs$core$IIndexed$_nth$arity$2(null,i__51776_52059);
if(cljs.core.truth_(child_52060)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52060);


var G__52061 = seq__51772_52056;
var G__52062 = chunk__51774_52057;
var G__52063 = count__51775_52058;
var G__52064 = (i__51776_52059 + (1));
seq__51772_52056 = G__52061;
chunk__51774_52057 = G__52062;
count__51775_52058 = G__52063;
i__51776_52059 = G__52064;
continue;
} else {
var G__52065 = seq__51772_52056;
var G__52066 = chunk__51774_52057;
var G__52067 = count__51775_52058;
var G__52068 = (i__51776_52059 + (1));
seq__51772_52056 = G__52065;
chunk__51774_52057 = G__52066;
count__51775_52058 = G__52067;
i__51776_52059 = G__52068;
continue;
}
} else {
var temp__5753__auto___52070 = cljs.core.seq(seq__51772_52056);
if(temp__5753__auto___52070){
var seq__51772_52071__$1 = temp__5753__auto___52070;
if(cljs.core.chunked_seq_QMARK_(seq__51772_52071__$1)){
var c__4679__auto___52072 = cljs.core.chunk_first(seq__51772_52071__$1);
var G__52073 = cljs.core.chunk_rest(seq__51772_52071__$1);
var G__52074 = c__4679__auto___52072;
var G__52075 = cljs.core.count(c__4679__auto___52072);
var G__52076 = (0);
seq__51772_52056 = G__52073;
chunk__51774_52057 = G__52074;
count__51775_52058 = G__52075;
i__51776_52059 = G__52076;
continue;
} else {
var child_52077 = cljs.core.first(seq__51772_52071__$1);
if(cljs.core.truth_(child_52077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52077);


var G__52078 = cljs.core.next(seq__51772_52071__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__51772_52056 = G__52078;
chunk__51774_52057 = G__52079;
count__51775_52058 = G__52080;
i__51776_52059 = G__52081;
continue;
} else {
var G__52082 = cljs.core.next(seq__51772_52071__$1);
var G__52083 = null;
var G__52084 = (0);
var G__52085 = (0);
seq__51772_52056 = G__52082;
chunk__51774_52057 = G__52083;
count__51775_52058 = G__52084;
i__51776_52059 = G__52085;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52055);
}


var G__52086 = seq__51756_52050;
var G__52087 = chunk__51757_52051;
var G__52088 = count__51758_52052;
var G__52089 = (i__51759_52053 + (1));
seq__51756_52050 = G__52086;
chunk__51757_52051 = G__52087;
count__51758_52052 = G__52088;
i__51759_52053 = G__52089;
continue;
} else {
var temp__5753__auto___52090 = cljs.core.seq(seq__51756_52050);
if(temp__5753__auto___52090){
var seq__51756_52091__$1 = temp__5753__auto___52090;
if(cljs.core.chunked_seq_QMARK_(seq__51756_52091__$1)){
var c__4679__auto___52092 = cljs.core.chunk_first(seq__51756_52091__$1);
var G__52093 = cljs.core.chunk_rest(seq__51756_52091__$1);
var G__52094 = c__4679__auto___52092;
var G__52095 = cljs.core.count(c__4679__auto___52092);
var G__52096 = (0);
seq__51756_52050 = G__52093;
chunk__51757_52051 = G__52094;
count__51758_52052 = G__52095;
i__51759_52053 = G__52096;
continue;
} else {
var child_struct_52097 = cljs.core.first(seq__51756_52091__$1);
var children_52098 = shadow.dom.dom_node(child_struct_52097);
if(cljs.core.seq_QMARK_(children_52098)){
var seq__51778_52103 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52098));
var chunk__51780_52104 = null;
var count__51781_52105 = (0);
var i__51782_52106 = (0);
while(true){
if((i__51782_52106 < count__51781_52105)){
var child_52107 = chunk__51780_52104.cljs$core$IIndexed$_nth$arity$2(null,i__51782_52106);
if(cljs.core.truth_(child_52107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52107);


var G__52108 = seq__51778_52103;
var G__52109 = chunk__51780_52104;
var G__52110 = count__51781_52105;
var G__52111 = (i__51782_52106 + (1));
seq__51778_52103 = G__52108;
chunk__51780_52104 = G__52109;
count__51781_52105 = G__52110;
i__51782_52106 = G__52111;
continue;
} else {
var G__52112 = seq__51778_52103;
var G__52113 = chunk__51780_52104;
var G__52114 = count__51781_52105;
var G__52115 = (i__51782_52106 + (1));
seq__51778_52103 = G__52112;
chunk__51780_52104 = G__52113;
count__51781_52105 = G__52114;
i__51782_52106 = G__52115;
continue;
}
} else {
var temp__5753__auto___52117__$1 = cljs.core.seq(seq__51778_52103);
if(temp__5753__auto___52117__$1){
var seq__51778_52118__$1 = temp__5753__auto___52117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51778_52118__$1)){
var c__4679__auto___52119 = cljs.core.chunk_first(seq__51778_52118__$1);
var G__52120 = cljs.core.chunk_rest(seq__51778_52118__$1);
var G__52121 = c__4679__auto___52119;
var G__52122 = cljs.core.count(c__4679__auto___52119);
var G__52123 = (0);
seq__51778_52103 = G__52120;
chunk__51780_52104 = G__52121;
count__51781_52105 = G__52122;
i__51782_52106 = G__52123;
continue;
} else {
var child_52124 = cljs.core.first(seq__51778_52118__$1);
if(cljs.core.truth_(child_52124)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52124);


var G__52130 = cljs.core.next(seq__51778_52118__$1);
var G__52131 = null;
var G__52132 = (0);
var G__52133 = (0);
seq__51778_52103 = G__52130;
chunk__51780_52104 = G__52131;
count__51781_52105 = G__52132;
i__51782_52106 = G__52133;
continue;
} else {
var G__52134 = cljs.core.next(seq__51778_52118__$1);
var G__52135 = null;
var G__52136 = (0);
var G__52137 = (0);
seq__51778_52103 = G__52134;
chunk__51780_52104 = G__52135;
count__51781_52105 = G__52136;
i__51782_52106 = G__52137;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52098);
}


var G__52138 = cljs.core.next(seq__51756_52091__$1);
var G__52139 = null;
var G__52140 = (0);
var G__52141 = (0);
seq__51756_52050 = G__52138;
chunk__51757_52051 = G__52139;
count__51758_52052 = G__52140;
i__51759_52053 = G__52141;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51785 = cljs.core.seq(node);
var chunk__51786 = null;
var count__51787 = (0);
var i__51788 = (0);
while(true){
if((i__51788 < count__51787)){
var n = chunk__51786.cljs$core$IIndexed$_nth$arity$2(null,i__51788);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52142 = seq__51785;
var G__52143 = chunk__51786;
var G__52144 = count__51787;
var G__52145 = (i__51788 + (1));
seq__51785 = G__52142;
chunk__51786 = G__52143;
count__51787 = G__52144;
i__51788 = G__52145;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51785);
if(temp__5753__auto__){
var seq__51785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51785__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51785__$1);
var G__52146 = cljs.core.chunk_rest(seq__51785__$1);
var G__52147 = c__4679__auto__;
var G__52148 = cljs.core.count(c__4679__auto__);
var G__52149 = (0);
seq__51785 = G__52146;
chunk__51786 = G__52147;
count__51787 = G__52148;
i__51788 = G__52149;
continue;
} else {
var n = cljs.core.first(seq__51785__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__52150 = cljs.core.next(seq__51785__$1);
var G__52151 = null;
var G__52152 = (0);
var G__52153 = (0);
seq__51785 = G__52150;
chunk__51786 = G__52151;
count__51787 = G__52152;
i__51788 = G__52153;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51790 = arguments.length;
switch (G__51790) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51792 = arguments.length;
switch (G__51792) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51794 = arguments.length;
switch (G__51794) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52157 = arguments.length;
var i__4865__auto___52158 = (0);
while(true){
if((i__4865__auto___52158 < len__4864__auto___52157)){
args__4870__auto__.push((arguments[i__4865__auto___52158]));

var G__52159 = (i__4865__auto___52158 + (1));
i__4865__auto___52158 = G__52159;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51796_52160 = cljs.core.seq(nodes);
var chunk__51797_52161 = null;
var count__51798_52162 = (0);
var i__51799_52163 = (0);
while(true){
if((i__51799_52163 < count__51798_52162)){
var node_52165 = chunk__51797_52161.cljs$core$IIndexed$_nth$arity$2(null,i__51799_52163);
fragment.appendChild(shadow.dom._to_dom(node_52165));


var G__52166 = seq__51796_52160;
var G__52167 = chunk__51797_52161;
var G__52168 = count__51798_52162;
var G__52169 = (i__51799_52163 + (1));
seq__51796_52160 = G__52166;
chunk__51797_52161 = G__52167;
count__51798_52162 = G__52168;
i__51799_52163 = G__52169;
continue;
} else {
var temp__5753__auto___52170 = cljs.core.seq(seq__51796_52160);
if(temp__5753__auto___52170){
var seq__51796_52171__$1 = temp__5753__auto___52170;
if(cljs.core.chunked_seq_QMARK_(seq__51796_52171__$1)){
var c__4679__auto___52172 = cljs.core.chunk_first(seq__51796_52171__$1);
var G__52173 = cljs.core.chunk_rest(seq__51796_52171__$1);
var G__52174 = c__4679__auto___52172;
var G__52175 = cljs.core.count(c__4679__auto___52172);
var G__52176 = (0);
seq__51796_52160 = G__52173;
chunk__51797_52161 = G__52174;
count__51798_52162 = G__52175;
i__51799_52163 = G__52176;
continue;
} else {
var node_52177 = cljs.core.first(seq__51796_52171__$1);
fragment.appendChild(shadow.dom._to_dom(node_52177));


var G__52178 = cljs.core.next(seq__51796_52171__$1);
var G__52179 = null;
var G__52180 = (0);
var G__52181 = (0);
seq__51796_52160 = G__52178;
chunk__51797_52161 = G__52179;
count__51798_52162 = G__52180;
i__51799_52163 = G__52181;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51795){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51795));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51800_52182 = cljs.core.seq(scripts);
var chunk__51801_52183 = null;
var count__51802_52184 = (0);
var i__51803_52185 = (0);
while(true){
if((i__51803_52185 < count__51802_52184)){
var vec__51810_52186 = chunk__51801_52183.cljs$core$IIndexed$_nth$arity$2(null,i__51803_52185);
var script_tag_52187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810_52186,(0),null);
var script_body_52188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810_52186,(1),null);
eval(script_body_52188);


var G__52189 = seq__51800_52182;
var G__52190 = chunk__51801_52183;
var G__52191 = count__51802_52184;
var G__52192 = (i__51803_52185 + (1));
seq__51800_52182 = G__52189;
chunk__51801_52183 = G__52190;
count__51802_52184 = G__52191;
i__51803_52185 = G__52192;
continue;
} else {
var temp__5753__auto___52193 = cljs.core.seq(seq__51800_52182);
if(temp__5753__auto___52193){
var seq__51800_52194__$1 = temp__5753__auto___52193;
if(cljs.core.chunked_seq_QMARK_(seq__51800_52194__$1)){
var c__4679__auto___52195 = cljs.core.chunk_first(seq__51800_52194__$1);
var G__52196 = cljs.core.chunk_rest(seq__51800_52194__$1);
var G__52197 = c__4679__auto___52195;
var G__52198 = cljs.core.count(c__4679__auto___52195);
var G__52199 = (0);
seq__51800_52182 = G__52196;
chunk__51801_52183 = G__52197;
count__51802_52184 = G__52198;
i__51803_52185 = G__52199;
continue;
} else {
var vec__51813_52200 = cljs.core.first(seq__51800_52194__$1);
var script_tag_52201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51813_52200,(0),null);
var script_body_52202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51813_52200,(1),null);
eval(script_body_52202);


var G__52203 = cljs.core.next(seq__51800_52194__$1);
var G__52204 = null;
var G__52205 = (0);
var G__52206 = (0);
seq__51800_52182 = G__52203;
chunk__51801_52183 = G__52204;
count__51802_52184 = G__52205;
i__51803_52185 = G__52206;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51816){
var vec__51817 = p__51816;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51817,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51821 = arguments.length;
switch (G__51821) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51822 = cljs.core.seq(style_keys);
var chunk__51823 = null;
var count__51824 = (0);
var i__51825 = (0);
while(true){
if((i__51825 < count__51824)){
var it = chunk__51823.cljs$core$IIndexed$_nth$arity$2(null,i__51825);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52208 = seq__51822;
var G__52209 = chunk__51823;
var G__52210 = count__51824;
var G__52211 = (i__51825 + (1));
seq__51822 = G__52208;
chunk__51823 = G__52209;
count__51824 = G__52210;
i__51825 = G__52211;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51822);
if(temp__5753__auto__){
var seq__51822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51822__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51822__$1);
var G__52212 = cljs.core.chunk_rest(seq__51822__$1);
var G__52213 = c__4679__auto__;
var G__52214 = cljs.core.count(c__4679__auto__);
var G__52215 = (0);
seq__51822 = G__52212;
chunk__51823 = G__52213;
count__51824 = G__52214;
i__51825 = G__52215;
continue;
} else {
var it = cljs.core.first(seq__51822__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__52216 = cljs.core.next(seq__51822__$1);
var G__52217 = null;
var G__52218 = (0);
var G__52219 = (0);
seq__51822 = G__52216;
chunk__51823 = G__52217;
count__51824 = G__52218;
i__51825 = G__52219;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51827,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51831 = k51827;
var G__51831__$1 = (((G__51831 instanceof cljs.core.Keyword))?G__51831.fqn:null);
switch (G__51831__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51827,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51832){
var vec__51833 = p__51832;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51833,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51826){
var self__ = this;
var G__51826__$1 = this;
return (new cljs.core.RecordIter((0),G__51826__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51828,other51829){
var self__ = this;
var this51828__$1 = this;
return (((!((other51829 == null)))) && ((((this51828__$1.constructor === other51829.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51828__$1.x,other51829.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51828__$1.y,other51829.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51828__$1.__extmap,other51829.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51827){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51836 = k51827;
var G__51836__$1 = (((G__51836 instanceof cljs.core.Keyword))?G__51836.fqn:null);
switch (G__51836__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51827);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51826){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51837 = cljs.core.keyword_identical_QMARK_;
var expr__51838 = k__4511__auto__;
if(cljs.core.truth_((pred__51837.cljs$core$IFn$_invoke$arity$2 ? pred__51837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__51838) : pred__51837.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__51838)))){
return (new shadow.dom.Coordinate(G__51826,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51837.cljs$core$IFn$_invoke$arity$2 ? pred__51837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__51838) : pred__51837.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__51838)))){
return (new shadow.dom.Coordinate(self__.x,G__51826,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51826),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51826){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51826,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__51830){
var extmap__4542__auto__ = (function (){var G__51840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51830,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__51830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51840);
} else {
return G__51840;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__51830),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__51830),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51842,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51846 = k51842;
var G__51846__$1 = (((G__51846 instanceof cljs.core.Keyword))?G__51846.fqn:null);
switch (G__51846__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51842,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51847){
var vec__51848 = p__51847;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51848,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51848,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51841){
var self__ = this;
var G__51841__$1 = this;
return (new cljs.core.RecordIter((0),G__51841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51843,other51844){
var self__ = this;
var this51843__$1 = this;
return (((!((other51844 == null)))) && ((((this51843__$1.constructor === other51844.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51843__$1.w,other51844.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51843__$1.h,other51844.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51843__$1.__extmap,other51844.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51842){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51851 = k51842;
var G__51851__$1 = (((G__51851 instanceof cljs.core.Keyword))?G__51851.fqn:null);
switch (G__51851__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51842);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51841){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51852 = cljs.core.keyword_identical_QMARK_;
var expr__51853 = k__4511__auto__;
if(cljs.core.truth_((pred__51852.cljs$core$IFn$_invoke$arity$2 ? pred__51852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__51853) : pred__51852.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__51853)))){
return (new shadow.dom.Size(G__51841,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51852.cljs$core$IFn$_invoke$arity$2 ? pred__51852.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__51853) : pred__51852.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__51853)))){
return (new shadow.dom.Size(self__.w,G__51841,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51841),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51841){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__51841,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__51845){
var extmap__4542__auto__ = (function (){var G__51855 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51845,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__51845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51855);
} else {
return G__51855;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__51845),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__51845),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__52237 = (i + (1));
var G__52238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__52237;
ret = G__52238;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51860){
var vec__51861 = p__51860;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51861,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51861,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__51865 = arguments.length;
switch (G__51865) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__52240 = ps;
var G__52241 = (i + (1));
el__$1 = G__52240;
i = G__52241;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__51866 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51866,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__51869_52242 = cljs.core.seq(props);
var chunk__51870_52243 = null;
var count__51871_52244 = (0);
var i__51872_52245 = (0);
while(true){
if((i__51872_52245 < count__51871_52244)){
var vec__51879_52246 = chunk__51870_52243.cljs$core$IIndexed$_nth$arity$2(null,i__51872_52245);
var k_52247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51879_52246,(0),null);
var v_52248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51879_52246,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_52247);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52247),v_52248);


var G__52249 = seq__51869_52242;
var G__52250 = chunk__51870_52243;
var G__52251 = count__51871_52244;
var G__52252 = (i__51872_52245 + (1));
seq__51869_52242 = G__52249;
chunk__51870_52243 = G__52250;
count__51871_52244 = G__52251;
i__51872_52245 = G__52252;
continue;
} else {
var temp__5753__auto___52253 = cljs.core.seq(seq__51869_52242);
if(temp__5753__auto___52253){
var seq__51869_52254__$1 = temp__5753__auto___52253;
if(cljs.core.chunked_seq_QMARK_(seq__51869_52254__$1)){
var c__4679__auto___52255 = cljs.core.chunk_first(seq__51869_52254__$1);
var G__52256 = cljs.core.chunk_rest(seq__51869_52254__$1);
var G__52257 = c__4679__auto___52255;
var G__52258 = cljs.core.count(c__4679__auto___52255);
var G__52259 = (0);
seq__51869_52242 = G__52256;
chunk__51870_52243 = G__52257;
count__51871_52244 = G__52258;
i__51872_52245 = G__52259;
continue;
} else {
var vec__51882_52260 = cljs.core.first(seq__51869_52254__$1);
var k_52261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51882_52260,(0),null);
var v_52262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51882_52260,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_52261);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_52261),v_52262);


var G__52263 = cljs.core.next(seq__51869_52254__$1);
var G__52264 = null;
var G__52265 = (0);
var G__52266 = (0);
seq__51869_52242 = G__52263;
chunk__51870_52243 = G__52264;
count__51871_52244 = G__52265;
i__51872_52245 = G__52266;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__51886 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51886,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51886,(1),null);
var seq__51889_52267 = cljs.core.seq(node_children);
var chunk__51891_52268 = null;
var count__51892_52269 = (0);
var i__51893_52270 = (0);
while(true){
if((i__51893_52270 < count__51892_52269)){
var child_struct_52271 = chunk__51891_52268.cljs$core$IIndexed$_nth$arity$2(null,i__51893_52270);
if((!((child_struct_52271 == null)))){
if(typeof child_struct_52271 === 'string'){
var text_52272 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52272),child_struct_52271].join(''));
} else {
var children_52273 = shadow.dom.svg_node(child_struct_52271);
if(cljs.core.seq_QMARK_(children_52273)){
var seq__51907_52274 = cljs.core.seq(children_52273);
var chunk__51909_52275 = null;
var count__51910_52276 = (0);
var i__51911_52277 = (0);
while(true){
if((i__51911_52277 < count__51910_52276)){
var child_52278 = chunk__51909_52275.cljs$core$IIndexed$_nth$arity$2(null,i__51911_52277);
if(cljs.core.truth_(child_52278)){
node.appendChild(child_52278);


var G__52279 = seq__51907_52274;
var G__52280 = chunk__51909_52275;
var G__52281 = count__51910_52276;
var G__52282 = (i__51911_52277 + (1));
seq__51907_52274 = G__52279;
chunk__51909_52275 = G__52280;
count__51910_52276 = G__52281;
i__51911_52277 = G__52282;
continue;
} else {
var G__52283 = seq__51907_52274;
var G__52284 = chunk__51909_52275;
var G__52285 = count__51910_52276;
var G__52286 = (i__51911_52277 + (1));
seq__51907_52274 = G__52283;
chunk__51909_52275 = G__52284;
count__51910_52276 = G__52285;
i__51911_52277 = G__52286;
continue;
}
} else {
var temp__5753__auto___52287 = cljs.core.seq(seq__51907_52274);
if(temp__5753__auto___52287){
var seq__51907_52288__$1 = temp__5753__auto___52287;
if(cljs.core.chunked_seq_QMARK_(seq__51907_52288__$1)){
var c__4679__auto___52289 = cljs.core.chunk_first(seq__51907_52288__$1);
var G__52290 = cljs.core.chunk_rest(seq__51907_52288__$1);
var G__52291 = c__4679__auto___52289;
var G__52292 = cljs.core.count(c__4679__auto___52289);
var G__52293 = (0);
seq__51907_52274 = G__52290;
chunk__51909_52275 = G__52291;
count__51910_52276 = G__52292;
i__51911_52277 = G__52293;
continue;
} else {
var child_52294 = cljs.core.first(seq__51907_52288__$1);
if(cljs.core.truth_(child_52294)){
node.appendChild(child_52294);


var G__52295 = cljs.core.next(seq__51907_52288__$1);
var G__52296 = null;
var G__52297 = (0);
var G__52298 = (0);
seq__51907_52274 = G__52295;
chunk__51909_52275 = G__52296;
count__51910_52276 = G__52297;
i__51911_52277 = G__52298;
continue;
} else {
var G__52299 = cljs.core.next(seq__51907_52288__$1);
var G__52300 = null;
var G__52301 = (0);
var G__52302 = (0);
seq__51907_52274 = G__52299;
chunk__51909_52275 = G__52300;
count__51910_52276 = G__52301;
i__51911_52277 = G__52302;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52273);
}
}


var G__52303 = seq__51889_52267;
var G__52304 = chunk__51891_52268;
var G__52305 = count__51892_52269;
var G__52306 = (i__51893_52270 + (1));
seq__51889_52267 = G__52303;
chunk__51891_52268 = G__52304;
count__51892_52269 = G__52305;
i__51893_52270 = G__52306;
continue;
} else {
var G__52307 = seq__51889_52267;
var G__52308 = chunk__51891_52268;
var G__52309 = count__51892_52269;
var G__52310 = (i__51893_52270 + (1));
seq__51889_52267 = G__52307;
chunk__51891_52268 = G__52308;
count__51892_52269 = G__52309;
i__51893_52270 = G__52310;
continue;
}
} else {
var temp__5753__auto___52311 = cljs.core.seq(seq__51889_52267);
if(temp__5753__auto___52311){
var seq__51889_52312__$1 = temp__5753__auto___52311;
if(cljs.core.chunked_seq_QMARK_(seq__51889_52312__$1)){
var c__4679__auto___52313 = cljs.core.chunk_first(seq__51889_52312__$1);
var G__52314 = cljs.core.chunk_rest(seq__51889_52312__$1);
var G__52315 = c__4679__auto___52313;
var G__52316 = cljs.core.count(c__4679__auto___52313);
var G__52317 = (0);
seq__51889_52267 = G__52314;
chunk__51891_52268 = G__52315;
count__51892_52269 = G__52316;
i__51893_52270 = G__52317;
continue;
} else {
var child_struct_52318 = cljs.core.first(seq__51889_52312__$1);
if((!((child_struct_52318 == null)))){
if(typeof child_struct_52318 === 'string'){
var text_52319 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_52319),child_struct_52318].join(''));
} else {
var children_52320 = shadow.dom.svg_node(child_struct_52318);
if(cljs.core.seq_QMARK_(children_52320)){
var seq__51913_52321 = cljs.core.seq(children_52320);
var chunk__51915_52322 = null;
var count__51916_52323 = (0);
var i__51917_52324 = (0);
while(true){
if((i__51917_52324 < count__51916_52323)){
var child_52325 = chunk__51915_52322.cljs$core$IIndexed$_nth$arity$2(null,i__51917_52324);
if(cljs.core.truth_(child_52325)){
node.appendChild(child_52325);


var G__52326 = seq__51913_52321;
var G__52327 = chunk__51915_52322;
var G__52328 = count__51916_52323;
var G__52329 = (i__51917_52324 + (1));
seq__51913_52321 = G__52326;
chunk__51915_52322 = G__52327;
count__51916_52323 = G__52328;
i__51917_52324 = G__52329;
continue;
} else {
var G__52330 = seq__51913_52321;
var G__52331 = chunk__51915_52322;
var G__52332 = count__51916_52323;
var G__52333 = (i__51917_52324 + (1));
seq__51913_52321 = G__52330;
chunk__51915_52322 = G__52331;
count__51916_52323 = G__52332;
i__51917_52324 = G__52333;
continue;
}
} else {
var temp__5753__auto___52334__$1 = cljs.core.seq(seq__51913_52321);
if(temp__5753__auto___52334__$1){
var seq__51913_52335__$1 = temp__5753__auto___52334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51913_52335__$1)){
var c__4679__auto___52336 = cljs.core.chunk_first(seq__51913_52335__$1);
var G__52337 = cljs.core.chunk_rest(seq__51913_52335__$1);
var G__52338 = c__4679__auto___52336;
var G__52339 = cljs.core.count(c__4679__auto___52336);
var G__52340 = (0);
seq__51913_52321 = G__52337;
chunk__51915_52322 = G__52338;
count__51916_52323 = G__52339;
i__51917_52324 = G__52340;
continue;
} else {
var child_52342 = cljs.core.first(seq__51913_52335__$1);
if(cljs.core.truth_(child_52342)){
node.appendChild(child_52342);


var G__52346 = cljs.core.next(seq__51913_52335__$1);
var G__52347 = null;
var G__52348 = (0);
var G__52349 = (0);
seq__51913_52321 = G__52346;
chunk__51915_52322 = G__52347;
count__51916_52323 = G__52348;
i__51917_52324 = G__52349;
continue;
} else {
var G__52350 = cljs.core.next(seq__51913_52335__$1);
var G__52351 = null;
var G__52352 = (0);
var G__52353 = (0);
seq__51913_52321 = G__52350;
chunk__51915_52322 = G__52351;
count__51916_52323 = G__52352;
i__51917_52324 = G__52353;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_52320);
}
}


var G__52354 = cljs.core.next(seq__51889_52312__$1);
var G__52355 = null;
var G__52356 = (0);
var G__52357 = (0);
seq__51889_52267 = G__52354;
chunk__51891_52268 = G__52355;
count__51892_52269 = G__52356;
i__51893_52270 = G__52357;
continue;
} else {
var G__52358 = cljs.core.next(seq__51889_52312__$1);
var G__52359 = null;
var G__52360 = (0);
var G__52361 = (0);
seq__51889_52267 = G__52358;
chunk__51891_52268 = G__52359;
count__51892_52269 = G__52360;
i__51893_52270 = G__52361;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52362 = arguments.length;
var i__4865__auto___52363 = (0);
while(true){
if((i__4865__auto___52363 < len__4864__auto___52362)){
args__4870__auto__.push((arguments[i__4865__auto___52363]));

var G__52364 = (i__4865__auto___52363 + (1));
i__4865__auto___52363 = G__52364;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51919){
var G__51920 = cljs.core.first(seq51919);
var seq51919__$1 = cljs.core.next(seq51919);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51920,seq51919__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51922 = arguments.length;
switch (G__51922) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__47319__auto___52371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_51927){
var state_val_51928 = (state_51927[(1)]);
if((state_val_51928 === (1))){
var state_51927__$1 = state_51927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51927__$1,(2),once_or_cleanup);
} else {
if((state_val_51928 === (2))){
var inst_51924 = (state_51927[(2)]);
var inst_51925 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51927__$1 = (function (){var statearr_51929 = state_51927;
(statearr_51929[(7)] = inst_51924);

return statearr_51929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51927__$1,inst_51925);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47284__auto__ = null;
var shadow$dom$state_machine__47284__auto____0 = (function (){
var statearr_51930 = [null,null,null,null,null,null,null,null];
(statearr_51930[(0)] = shadow$dom$state_machine__47284__auto__);

(statearr_51930[(1)] = (1));

return statearr_51930;
});
var shadow$dom$state_machine__47284__auto____1 = (function (state_51927){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_51927);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e51931){var ex__47287__auto__ = e51931;
var statearr_51932_52372 = state_51927;
(statearr_51932_52372[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_51927[(4)]))){
var statearr_51933_52373 = state_51927;
(statearr_51933_52373[(1)] = cljs.core.first((state_51927[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52374 = state_51927;
state_51927 = G__52374;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
shadow$dom$state_machine__47284__auto__ = function(state_51927){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47284__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47284__auto____1.call(this,state_51927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47284__auto____0;
shadow$dom$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47284__auto____1;
return shadow$dom$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_51934 = f__47320__auto__();
(statearr_51934[(6)] = c__47319__auto___52371);

return statearr_51934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
