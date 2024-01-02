goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__53246,p__53247){
var map__53248 = p__53246;
var map__53248__$1 = cljs.core.__destructure_map(map__53248);
var svc = map__53248__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53249 = p__53247;
var map__53249__$1 = cljs.core.__destructure_map(map__53249);
var msg = map__53249__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53249__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__53250,p__53251){
var map__53252 = p__53250;
var map__53252__$1 = cljs.core.__destructure_map(map__53252);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__53253 = p__53251;
var map__53253__$1 = cljs.core.__destructure_map(map__53253);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53253__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__53254,p__53255){
var map__53256 = p__53254;
var map__53256__$1 = cljs.core.__destructure_map(map__53256);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53256__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53256__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53257 = p__53255;
var map__53257__$1 = cljs.core.__destructure_map(map__53257);
var msg = map__53257__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53257__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__53258,tid){
var map__53259 = p__53258;
var map__53259__$1 = cljs.core.__destructure_map(map__53259);
var svc = map__53259__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53259__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__53264 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__53265 = null;
var count__53266 = (0);
var i__53267 = (0);
while(true){
if((i__53267 < count__53266)){
var vec__53274 = chunk__53265.cljs$core$IIndexed$_nth$arity$2(null,i__53267);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53274,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53274,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53282 = seq__53264;
var G__53283 = chunk__53265;
var G__53284 = count__53266;
var G__53285 = (i__53267 + (1));
seq__53264 = G__53282;
chunk__53265 = G__53283;
count__53266 = G__53284;
i__53267 = G__53285;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53264);
if(temp__5753__auto__){
var seq__53264__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53264__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53264__$1);
var G__53286 = cljs.core.chunk_rest(seq__53264__$1);
var G__53287 = c__4679__auto__;
var G__53288 = cljs.core.count(c__4679__auto__);
var G__53289 = (0);
seq__53264 = G__53286;
chunk__53265 = G__53287;
count__53266 = G__53288;
i__53267 = G__53289;
continue;
} else {
var vec__53277 = cljs.core.first(seq__53264__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53277,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53277,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53290 = cljs.core.next(seq__53264__$1);
var G__53291 = null;
var G__53292 = (0);
var G__53293 = (0);
seq__53264 = G__53290;
chunk__53265 = G__53291;
count__53266 = G__53292;
i__53267 = G__53293;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__53260_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__53260_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__53261_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__53261_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__53262_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__53262_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__53263_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__53263_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__53280){
var map__53281 = p__53280;
var map__53281__$1 = cljs.core.__destructure_map(map__53281);
var svc = map__53281__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53281__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53281__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
