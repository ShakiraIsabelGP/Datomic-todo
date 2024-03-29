goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__52862,res){
var map__52863 = p__52862;
var map__52863__$1 = cljs.core.__destructure_map(map__52863);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__52864 = res;
var G__52864__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52864,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__52864);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52864__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__52864__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__52866 = arguments.length;
switch (G__52866) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__52867,msg,handlers,timeout_after_ms){
var map__52868 = p__52867;
var map__52868__$1 = cljs.core.__destructure_map(map__52868);
var runtime = map__52868__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52952 = arguments.length;
var i__4865__auto___52953 = (0);
while(true){
if((i__4865__auto___52953 < len__4864__auto___52952)){
args__4870__auto__.push((arguments[i__4865__auto___52953]));

var G__52954 = (i__4865__auto___52953 + (1));
i__4865__auto___52953 = G__52954;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__52872,ev,args){
var map__52873 = p__52872;
var map__52873__$1 = cljs.core.__destructure_map(map__52873);
var runtime = map__52873__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__52874 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52877 = null;
var count__52878 = (0);
var i__52879 = (0);
while(true){
if((i__52879 < count__52878)){
var ext = chunk__52877.cljs$core$IIndexed$_nth$arity$2(null,i__52879);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52955 = seq__52874;
var G__52956 = chunk__52877;
var G__52957 = count__52878;
var G__52958 = (i__52879 + (1));
seq__52874 = G__52955;
chunk__52877 = G__52956;
count__52878 = G__52957;
i__52879 = G__52958;
continue;
} else {
var G__52959 = seq__52874;
var G__52960 = chunk__52877;
var G__52961 = count__52878;
var G__52962 = (i__52879 + (1));
seq__52874 = G__52959;
chunk__52877 = G__52960;
count__52878 = G__52961;
i__52879 = G__52962;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52874);
if(temp__5753__auto__){
var seq__52874__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52874__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52874__$1);
var G__52963 = cljs.core.chunk_rest(seq__52874__$1);
var G__52964 = c__4679__auto__;
var G__52965 = cljs.core.count(c__4679__auto__);
var G__52966 = (0);
seq__52874 = G__52963;
chunk__52877 = G__52964;
count__52878 = G__52965;
i__52879 = G__52966;
continue;
} else {
var ext = cljs.core.first(seq__52874__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52967 = cljs.core.next(seq__52874__$1);
var G__52968 = null;
var G__52969 = (0);
var G__52970 = (0);
seq__52874 = G__52967;
chunk__52877 = G__52968;
count__52878 = G__52969;
i__52879 = G__52970;
continue;
} else {
var G__52971 = cljs.core.next(seq__52874__$1);
var G__52972 = null;
var G__52973 = (0);
var G__52974 = (0);
seq__52874 = G__52971;
chunk__52877 = G__52972;
count__52878 = G__52973;
i__52879 = G__52974;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq52869){
var G__52870 = cljs.core.first(seq52869);
var seq52869__$1 = cljs.core.next(seq52869);
var G__52871 = cljs.core.first(seq52869__$1);
var seq52869__$2 = cljs.core.next(seq52869__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52870,G__52871,seq52869__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__52883,p__52884){
var map__52885 = p__52883;
var map__52885__$1 = cljs.core.__destructure_map(map__52885);
var runtime = map__52885__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52886 = p__52884;
var map__52886__$1 = cljs.core.__destructure_map(map__52886);
var msg = map__52886__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52886__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__52887 = cljs.core.deref(state_ref);
var map__52887__$1 = cljs.core.__destructure_map(map__52887);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__52888){
var map__52889 = p__52888;
var map__52889__$1 = cljs.core.__destructure_map(map__52889);
var runtime = map__52889__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__52890,msg){
var map__52891 = p__52890;
var map__52891__$1 = cljs.core.__destructure_map(map__52891);
var runtime = map__52891__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__52892,key,p__52893){
var map__52894 = p__52892;
var map__52894__$1 = cljs.core.__destructure_map(map__52894);
var state = map__52894__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__52895 = p__52893;
var map__52895__$1 = cljs.core.__destructure_map(map__52895);
var spec = map__52895__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__52896,key,spec){
var map__52897 = p__52896;
var map__52897__$1 = cljs.core.__destructure_map(map__52897);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__52898_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__52898_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__52899_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__52899_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__52900_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__52900_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__52901_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__52901_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__52902_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__52902_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__52903,key){
var map__52904 = p__52903;
var map__52904__$1 = cljs.core.__destructure_map(map__52904);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52904__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__52905,msg){
var map__52906 = p__52905;
var map__52906__$1 = cljs.core.__destructure_map(map__52906);
var runtime = map__52906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__52907,p__52908){
var map__52909 = p__52907;
var map__52909__$1 = cljs.core.__destructure_map(map__52909);
var runtime = map__52909__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52909__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52910 = p__52908;
var map__52910__$1 = cljs.core.__destructure_map(map__52910);
var msg = map__52910__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52910__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__52911 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52913 = null;
var count__52914 = (0);
var i__52915 = (0);
while(true){
if((i__52915 < count__52914)){
var map__52925 = chunk__52913.cljs$core$IIndexed$_nth$arity$2(null,i__52915);
var map__52925__$1 = cljs.core.__destructure_map(map__52925);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52975 = seq__52911;
var G__52976 = chunk__52913;
var G__52977 = count__52914;
var G__52978 = (i__52915 + (1));
seq__52911 = G__52975;
chunk__52913 = G__52976;
count__52914 = G__52977;
i__52915 = G__52978;
continue;
} else {
var G__52979 = seq__52911;
var G__52980 = chunk__52913;
var G__52981 = count__52914;
var G__52982 = (i__52915 + (1));
seq__52911 = G__52979;
chunk__52913 = G__52980;
count__52914 = G__52981;
i__52915 = G__52982;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52911);
if(temp__5753__auto__){
var seq__52911__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52911__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52911__$1);
var G__52983 = cljs.core.chunk_rest(seq__52911__$1);
var G__52984 = c__4679__auto__;
var G__52985 = cljs.core.count(c__4679__auto__);
var G__52986 = (0);
seq__52911 = G__52983;
chunk__52913 = G__52984;
count__52914 = G__52985;
i__52915 = G__52986;
continue;
} else {
var map__52950 = cljs.core.first(seq__52911__$1);
var map__52950__$1 = cljs.core.__destructure_map(map__52950);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52950__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52987 = cljs.core.next(seq__52911__$1);
var G__52988 = null;
var G__52989 = (0);
var G__52990 = (0);
seq__52911 = G__52987;
chunk__52913 = G__52988;
count__52914 = G__52989;
i__52915 = G__52990;
continue;
} else {
var G__52991 = cljs.core.next(seq__52911__$1);
var G__52992 = null;
var G__52993 = (0);
var G__52994 = (0);
seq__52911 = G__52991;
chunk__52913 = G__52992;
count__52914 = G__52993;
i__52915 = G__52994;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
