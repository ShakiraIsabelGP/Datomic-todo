goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53610 = arguments.length;
var i__4865__auto___53611 = (0);
while(true){
if((i__4865__auto___53611 < len__4864__auto___53610)){
args__4870__auto__.push((arguments[i__4865__auto___53611]));

var G__53612 = (i__4865__auto___53611 + (1));
i__4865__auto___53611 = G__53612;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53477){
var G__53478 = cljs.core.first(seq53477);
var seq53477__$1 = cljs.core.next(seq53477);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53478,seq53477__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53479 = cljs.core.seq(sources);
var chunk__53480 = null;
var count__53481 = (0);
var i__53482 = (0);
while(true){
if((i__53482 < count__53481)){
var map__53487 = chunk__53480.cljs$core$IIndexed$_nth$arity$2(null,i__53482);
var map__53487__$1 = cljs.core.__destructure_map(map__53487);
var src = map__53487__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53487__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53487__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53487__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53488){var e_53613 = e53488;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53613);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53613.message)].join('')));
}

var G__53614 = seq__53479;
var G__53615 = chunk__53480;
var G__53616 = count__53481;
var G__53617 = (i__53482 + (1));
seq__53479 = G__53614;
chunk__53480 = G__53615;
count__53481 = G__53616;
i__53482 = G__53617;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53479);
if(temp__5753__auto__){
var seq__53479__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53479__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53479__$1);
var G__53618 = cljs.core.chunk_rest(seq__53479__$1);
var G__53619 = c__4679__auto__;
var G__53620 = cljs.core.count(c__4679__auto__);
var G__53621 = (0);
seq__53479 = G__53618;
chunk__53480 = G__53619;
count__53481 = G__53620;
i__53482 = G__53621;
continue;
} else {
var map__53489 = cljs.core.first(seq__53479__$1);
var map__53489__$1 = cljs.core.__destructure_map(map__53489);
var src = map__53489__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53489__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53489__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53489__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53489__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53490){var e_53622 = e53490;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53622);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53622.message)].join('')));
}

var G__53623 = cljs.core.next(seq__53479__$1);
var G__53624 = null;
var G__53625 = (0);
var G__53626 = (0);
seq__53479 = G__53623;
chunk__53480 = G__53624;
count__53481 = G__53625;
i__53482 = G__53626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53491 = cljs.core.seq(js_requires);
var chunk__53492 = null;
var count__53493 = (0);
var i__53494 = (0);
while(true){
if((i__53494 < count__53493)){
var js_ns = chunk__53492.cljs$core$IIndexed$_nth$arity$2(null,i__53494);
var require_str_53627 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53627);


var G__53628 = seq__53491;
var G__53629 = chunk__53492;
var G__53630 = count__53493;
var G__53631 = (i__53494 + (1));
seq__53491 = G__53628;
chunk__53492 = G__53629;
count__53493 = G__53630;
i__53494 = G__53631;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53491);
if(temp__5753__auto__){
var seq__53491__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53491__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53491__$1);
var G__53632 = cljs.core.chunk_rest(seq__53491__$1);
var G__53633 = c__4679__auto__;
var G__53634 = cljs.core.count(c__4679__auto__);
var G__53635 = (0);
seq__53491 = G__53632;
chunk__53492 = G__53633;
count__53493 = G__53634;
i__53494 = G__53635;
continue;
} else {
var js_ns = cljs.core.first(seq__53491__$1);
var require_str_53636 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53636);


var G__53637 = cljs.core.next(seq__53491__$1);
var G__53638 = null;
var G__53639 = (0);
var G__53640 = (0);
seq__53491 = G__53637;
chunk__53492 = G__53638;
count__53493 = G__53639;
i__53494 = G__53640;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53496){
var map__53497 = p__53496;
var map__53497__$1 = cljs.core.__destructure_map(map__53497);
var msg = map__53497__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53497__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53497__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53498(s__53499){
return (new cljs.core.LazySeq(null,(function (){
var s__53499__$1 = s__53499;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53499__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53504 = cljs.core.first(xs__6308__auto__);
var map__53504__$1 = cljs.core.__destructure_map(map__53504);
var src = map__53504__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__53499__$1,map__53504,map__53504__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53497,map__53497__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53498_$_iter__53500(s__53501){
return (new cljs.core.LazySeq(null,((function (s__53499__$1,map__53504,map__53504__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53497,map__53497__$1,msg,info,reload_info){
return (function (){
var s__53501__$1 = s__53501;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53501__$1);
if(temp__5753__auto____$1){
var s__53501__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53501__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53501__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53503 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53502 = (0);
while(true){
if((i__53502 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__53502);
cljs.core.chunk_append(b__53503,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53641 = (i__53502 + (1));
i__53502 = G__53641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53503),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53498_$_iter__53500(cljs.core.chunk_rest(s__53501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53503),null);
}
} else {
var warning = cljs.core.first(s__53501__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53498_$_iter__53500(cljs.core.rest(s__53501__$2)));
}
} else {
return null;
}
break;
}
});})(s__53499__$1,map__53504,map__53504__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53497,map__53497__$1,msg,info,reload_info))
,null,null));
});})(s__53499__$1,map__53504,map__53504__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53497,map__53497__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53498(cljs.core.rest(s__53499__$1)));
} else {
var G__53644 = cljs.core.rest(s__53499__$1);
s__53499__$1 = G__53644;
continue;
}
} else {
var G__53645 = cljs.core.rest(s__53499__$1);
s__53499__$1 = G__53645;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53505_53646 = cljs.core.seq(warnings);
var chunk__53506_53647 = null;
var count__53507_53648 = (0);
var i__53508_53649 = (0);
while(true){
if((i__53508_53649 < count__53507_53648)){
var map__53511_53650 = chunk__53506_53647.cljs$core$IIndexed$_nth$arity$2(null,i__53508_53649);
var map__53511_53651__$1 = cljs.core.__destructure_map(map__53511_53650);
var w_53652 = map__53511_53651__$1;
var msg_53653__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53511_53651__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53511_53651__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53511_53651__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53511_53651__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53656)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53654),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53655),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53653__$1)].join(''));


var G__53657 = seq__53505_53646;
var G__53658 = chunk__53506_53647;
var G__53659 = count__53507_53648;
var G__53660 = (i__53508_53649 + (1));
seq__53505_53646 = G__53657;
chunk__53506_53647 = G__53658;
count__53507_53648 = G__53659;
i__53508_53649 = G__53660;
continue;
} else {
var temp__5753__auto___53661 = cljs.core.seq(seq__53505_53646);
if(temp__5753__auto___53661){
var seq__53505_53662__$1 = temp__5753__auto___53661;
if(cljs.core.chunked_seq_QMARK_(seq__53505_53662__$1)){
var c__4679__auto___53663 = cljs.core.chunk_first(seq__53505_53662__$1);
var G__53664 = cljs.core.chunk_rest(seq__53505_53662__$1);
var G__53665 = c__4679__auto___53663;
var G__53666 = cljs.core.count(c__4679__auto___53663);
var G__53667 = (0);
seq__53505_53646 = G__53664;
chunk__53506_53647 = G__53665;
count__53507_53648 = G__53666;
i__53508_53649 = G__53667;
continue;
} else {
var map__53512_53668 = cljs.core.first(seq__53505_53662__$1);
var map__53512_53669__$1 = cljs.core.__destructure_map(map__53512_53668);
var w_53670 = map__53512_53669__$1;
var msg_53671__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512_53669__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512_53669__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512_53669__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512_53669__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53674)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53672),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53673),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53671__$1)].join(''));


var G__53675 = cljs.core.next(seq__53505_53662__$1);
var G__53676 = null;
var G__53677 = (0);
var G__53678 = (0);
seq__53505_53646 = G__53675;
chunk__53506_53647 = G__53676;
count__53507_53648 = G__53677;
i__53508_53649 = G__53678;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53495_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53495_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53513){
var map__53514 = p__53513;
var map__53514__$1 = cljs.core.__destructure_map(map__53514);
var msg = map__53514__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53514__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53515 = cljs.core.seq(updates);
var chunk__53517 = null;
var count__53518 = (0);
var i__53519 = (0);
while(true){
if((i__53519 < count__53518)){
var path = chunk__53517.cljs$core$IIndexed$_nth$arity$2(null,i__53519);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53549_53679 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53553_53680 = null;
var count__53554_53681 = (0);
var i__53555_53682 = (0);
while(true){
if((i__53555_53682 < count__53554_53681)){
var node_53683 = chunk__53553_53680.cljs$core$IIndexed$_nth$arity$2(null,i__53555_53682);
if(cljs.core.not(node_53683.shadow$old)){
var path_match_53684 = shadow.cljs.devtools.client.browser.match_paths(node_53683.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53684)){
var new_link_53685 = (function (){var G__53561 = node_53683.cloneNode(true);
G__53561.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53684),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53561;
})();
(node_53683.shadow$old = true);

(new_link_53685.onload = ((function (seq__53549_53679,chunk__53553_53680,count__53554_53681,i__53555_53682,seq__53515,chunk__53517,count__53518,i__53519,new_link_53685,path_match_53684,node_53683,path,map__53514,map__53514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53683);
});})(seq__53549_53679,chunk__53553_53680,count__53554_53681,i__53555_53682,seq__53515,chunk__53517,count__53518,i__53519,new_link_53685,path_match_53684,node_53683,path,map__53514,map__53514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53684], 0));

goog.dom.insertSiblingAfter(new_link_53685,node_53683);


var G__53686 = seq__53549_53679;
var G__53687 = chunk__53553_53680;
var G__53688 = count__53554_53681;
var G__53689 = (i__53555_53682 + (1));
seq__53549_53679 = G__53686;
chunk__53553_53680 = G__53687;
count__53554_53681 = G__53688;
i__53555_53682 = G__53689;
continue;
} else {
var G__53690 = seq__53549_53679;
var G__53691 = chunk__53553_53680;
var G__53692 = count__53554_53681;
var G__53693 = (i__53555_53682 + (1));
seq__53549_53679 = G__53690;
chunk__53553_53680 = G__53691;
count__53554_53681 = G__53692;
i__53555_53682 = G__53693;
continue;
}
} else {
var G__53694 = seq__53549_53679;
var G__53695 = chunk__53553_53680;
var G__53696 = count__53554_53681;
var G__53697 = (i__53555_53682 + (1));
seq__53549_53679 = G__53694;
chunk__53553_53680 = G__53695;
count__53554_53681 = G__53696;
i__53555_53682 = G__53697;
continue;
}
} else {
var temp__5753__auto___53698 = cljs.core.seq(seq__53549_53679);
if(temp__5753__auto___53698){
var seq__53549_53699__$1 = temp__5753__auto___53698;
if(cljs.core.chunked_seq_QMARK_(seq__53549_53699__$1)){
var c__4679__auto___53700 = cljs.core.chunk_first(seq__53549_53699__$1);
var G__53701 = cljs.core.chunk_rest(seq__53549_53699__$1);
var G__53702 = c__4679__auto___53700;
var G__53703 = cljs.core.count(c__4679__auto___53700);
var G__53704 = (0);
seq__53549_53679 = G__53701;
chunk__53553_53680 = G__53702;
count__53554_53681 = G__53703;
i__53555_53682 = G__53704;
continue;
} else {
var node_53705 = cljs.core.first(seq__53549_53699__$1);
if(cljs.core.not(node_53705.shadow$old)){
var path_match_53706 = shadow.cljs.devtools.client.browser.match_paths(node_53705.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53706)){
var new_link_53707 = (function (){var G__53562 = node_53705.cloneNode(true);
G__53562.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53706),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53562;
})();
(node_53705.shadow$old = true);

(new_link_53707.onload = ((function (seq__53549_53679,chunk__53553_53680,count__53554_53681,i__53555_53682,seq__53515,chunk__53517,count__53518,i__53519,new_link_53707,path_match_53706,node_53705,seq__53549_53699__$1,temp__5753__auto___53698,path,map__53514,map__53514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53705);
});})(seq__53549_53679,chunk__53553_53680,count__53554_53681,i__53555_53682,seq__53515,chunk__53517,count__53518,i__53519,new_link_53707,path_match_53706,node_53705,seq__53549_53699__$1,temp__5753__auto___53698,path,map__53514,map__53514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53706], 0));

goog.dom.insertSiblingAfter(new_link_53707,node_53705);


var G__53708 = cljs.core.next(seq__53549_53699__$1);
var G__53709 = null;
var G__53710 = (0);
var G__53711 = (0);
seq__53549_53679 = G__53708;
chunk__53553_53680 = G__53709;
count__53554_53681 = G__53710;
i__53555_53682 = G__53711;
continue;
} else {
var G__53712 = cljs.core.next(seq__53549_53699__$1);
var G__53713 = null;
var G__53714 = (0);
var G__53715 = (0);
seq__53549_53679 = G__53712;
chunk__53553_53680 = G__53713;
count__53554_53681 = G__53714;
i__53555_53682 = G__53715;
continue;
}
} else {
var G__53716 = cljs.core.next(seq__53549_53699__$1);
var G__53717 = null;
var G__53718 = (0);
var G__53719 = (0);
seq__53549_53679 = G__53716;
chunk__53553_53680 = G__53717;
count__53554_53681 = G__53718;
i__53555_53682 = G__53719;
continue;
}
}
} else {
}
}
break;
}


var G__53720 = seq__53515;
var G__53721 = chunk__53517;
var G__53722 = count__53518;
var G__53723 = (i__53519 + (1));
seq__53515 = G__53720;
chunk__53517 = G__53721;
count__53518 = G__53722;
i__53519 = G__53723;
continue;
} else {
var G__53724 = seq__53515;
var G__53725 = chunk__53517;
var G__53726 = count__53518;
var G__53727 = (i__53519 + (1));
seq__53515 = G__53724;
chunk__53517 = G__53725;
count__53518 = G__53726;
i__53519 = G__53727;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53515);
if(temp__5753__auto__){
var seq__53515__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53515__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53515__$1);
var G__53728 = cljs.core.chunk_rest(seq__53515__$1);
var G__53729 = c__4679__auto__;
var G__53730 = cljs.core.count(c__4679__auto__);
var G__53731 = (0);
seq__53515 = G__53728;
chunk__53517 = G__53729;
count__53518 = G__53730;
i__53519 = G__53731;
continue;
} else {
var path = cljs.core.first(seq__53515__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53563_53733 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53567_53734 = null;
var count__53568_53735 = (0);
var i__53569_53736 = (0);
while(true){
if((i__53569_53736 < count__53568_53735)){
var node_53737 = chunk__53567_53734.cljs$core$IIndexed$_nth$arity$2(null,i__53569_53736);
if(cljs.core.not(node_53737.shadow$old)){
var path_match_53738 = shadow.cljs.devtools.client.browser.match_paths(node_53737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53738)){
var new_link_53739 = (function (){var G__53575 = node_53737.cloneNode(true);
G__53575.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53738),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53575;
})();
(node_53737.shadow$old = true);

(new_link_53739.onload = ((function (seq__53563_53733,chunk__53567_53734,count__53568_53735,i__53569_53736,seq__53515,chunk__53517,count__53518,i__53519,new_link_53739,path_match_53738,node_53737,path,seq__53515__$1,temp__5753__auto__,map__53514,map__53514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53737);
});})(seq__53563_53733,chunk__53567_53734,count__53568_53735,i__53569_53736,seq__53515,chunk__53517,count__53518,i__53519,new_link_53739,path_match_53738,node_53737,path,seq__53515__$1,temp__5753__auto__,map__53514,map__53514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53738], 0));

goog.dom.insertSiblingAfter(new_link_53739,node_53737);


var G__53740 = seq__53563_53733;
var G__53741 = chunk__53567_53734;
var G__53742 = count__53568_53735;
var G__53743 = (i__53569_53736 + (1));
seq__53563_53733 = G__53740;
chunk__53567_53734 = G__53741;
count__53568_53735 = G__53742;
i__53569_53736 = G__53743;
continue;
} else {
var G__53744 = seq__53563_53733;
var G__53745 = chunk__53567_53734;
var G__53746 = count__53568_53735;
var G__53747 = (i__53569_53736 + (1));
seq__53563_53733 = G__53744;
chunk__53567_53734 = G__53745;
count__53568_53735 = G__53746;
i__53569_53736 = G__53747;
continue;
}
} else {
var G__53748 = seq__53563_53733;
var G__53749 = chunk__53567_53734;
var G__53750 = count__53568_53735;
var G__53751 = (i__53569_53736 + (1));
seq__53563_53733 = G__53748;
chunk__53567_53734 = G__53749;
count__53568_53735 = G__53750;
i__53569_53736 = G__53751;
continue;
}
} else {
var temp__5753__auto___53752__$1 = cljs.core.seq(seq__53563_53733);
if(temp__5753__auto___53752__$1){
var seq__53563_53753__$1 = temp__5753__auto___53752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53563_53753__$1)){
var c__4679__auto___53754 = cljs.core.chunk_first(seq__53563_53753__$1);
var G__53755 = cljs.core.chunk_rest(seq__53563_53753__$1);
var G__53756 = c__4679__auto___53754;
var G__53757 = cljs.core.count(c__4679__auto___53754);
var G__53758 = (0);
seq__53563_53733 = G__53755;
chunk__53567_53734 = G__53756;
count__53568_53735 = G__53757;
i__53569_53736 = G__53758;
continue;
} else {
var node_53759 = cljs.core.first(seq__53563_53753__$1);
if(cljs.core.not(node_53759.shadow$old)){
var path_match_53760 = shadow.cljs.devtools.client.browser.match_paths(node_53759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53760)){
var new_link_53761 = (function (){var G__53576 = node_53759.cloneNode(true);
G__53576.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53760),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53576;
})();
(node_53759.shadow$old = true);

(new_link_53761.onload = ((function (seq__53563_53733,chunk__53567_53734,count__53568_53735,i__53569_53736,seq__53515,chunk__53517,count__53518,i__53519,new_link_53761,path_match_53760,node_53759,seq__53563_53753__$1,temp__5753__auto___53752__$1,path,seq__53515__$1,temp__5753__auto__,map__53514,map__53514__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53759);
});})(seq__53563_53733,chunk__53567_53734,count__53568_53735,i__53569_53736,seq__53515,chunk__53517,count__53518,i__53519,new_link_53761,path_match_53760,node_53759,seq__53563_53753__$1,temp__5753__auto___53752__$1,path,seq__53515__$1,temp__5753__auto__,map__53514,map__53514__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53760], 0));

goog.dom.insertSiblingAfter(new_link_53761,node_53759);


var G__53762 = cljs.core.next(seq__53563_53753__$1);
var G__53763 = null;
var G__53764 = (0);
var G__53765 = (0);
seq__53563_53733 = G__53762;
chunk__53567_53734 = G__53763;
count__53568_53735 = G__53764;
i__53569_53736 = G__53765;
continue;
} else {
var G__53766 = cljs.core.next(seq__53563_53753__$1);
var G__53767 = null;
var G__53768 = (0);
var G__53769 = (0);
seq__53563_53733 = G__53766;
chunk__53567_53734 = G__53767;
count__53568_53735 = G__53768;
i__53569_53736 = G__53769;
continue;
}
} else {
var G__53770 = cljs.core.next(seq__53563_53753__$1);
var G__53771 = null;
var G__53772 = (0);
var G__53773 = (0);
seq__53563_53733 = G__53770;
chunk__53567_53734 = G__53771;
count__53568_53735 = G__53772;
i__53569_53736 = G__53773;
continue;
}
}
} else {
}
}
break;
}


var G__53774 = cljs.core.next(seq__53515__$1);
var G__53775 = null;
var G__53776 = (0);
var G__53777 = (0);
seq__53515 = G__53774;
chunk__53517 = G__53775;
count__53518 = G__53776;
i__53519 = G__53777;
continue;
} else {
var G__53778 = cljs.core.next(seq__53515__$1);
var G__53779 = null;
var G__53780 = (0);
var G__53781 = (0);
seq__53515 = G__53778;
chunk__53517 = G__53779;
count__53518 = G__53780;
i__53519 = G__53781;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53578){
var map__53579 = p__53578;
var map__53579__$1 = cljs.core.__destructure_map(map__53579);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53579__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53580){
var map__53581 = p__53580;
var map__53581__$1 = cljs.core.__destructure_map(map__53581);
var _ = map__53581__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53581__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53582,done,error){
var map__53583 = p__53582;
var map__53583__$1 = cljs.core.__destructure_map(map__53583);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53583__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53584,done,error){
var map__53585 = p__53584;
var map__53585__$1 = cljs.core.__destructure_map(map__53585);
var msg = map__53585__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53586){
var map__53587 = p__53586;
var map__53587__$1 = cljs.core.__destructure_map(map__53587);
var src = map__53587__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53587__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53588 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53588) : done.call(null,G__53588));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53589){
var map__53590 = p__53589;
var map__53590__$1 = cljs.core.__destructure_map(map__53590);
var msg__$1 = map__53590__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53591){var ex = e53591;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53592){
var map__53593 = p__53592;
var map__53593__$1 = cljs.core.__destructure_map(map__53593);
var env = map__53593__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53594){
var map__53595 = p__53594;
var map__53595__$1 = cljs.core.__destructure_map(map__53595);
var msg = map__53595__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53595__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53596){
var map__53597 = p__53596;
var map__53597__$1 = cljs.core.__destructure_map(map__53597);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53597__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53597__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53598){
var map__53599 = p__53598;
var map__53599__$1 = cljs.core.__destructure_map(map__53599);
var svc = map__53599__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53599__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
