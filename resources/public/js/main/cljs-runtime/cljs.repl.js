goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52919){
var map__52920 = p__52919;
var map__52920__$1 = cljs.core.__destructure_map(map__52920);
var m = map__52920__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52921_53057 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52922_53058 = null;
var count__52923_53059 = (0);
var i__52924_53060 = (0);
while(true){
if((i__52924_53060 < count__52923_53059)){
var f_53061 = chunk__52922_53058.cljs$core$IIndexed$_nth$arity$2(null,i__52924_53060);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53061], 0));


var G__53062 = seq__52921_53057;
var G__53063 = chunk__52922_53058;
var G__53064 = count__52923_53059;
var G__53065 = (i__52924_53060 + (1));
seq__52921_53057 = G__53062;
chunk__52922_53058 = G__53063;
count__52923_53059 = G__53064;
i__52924_53060 = G__53065;
continue;
} else {
var temp__5753__auto___53066 = cljs.core.seq(seq__52921_53057);
if(temp__5753__auto___53066){
var seq__52921_53067__$1 = temp__5753__auto___53066;
if(cljs.core.chunked_seq_QMARK_(seq__52921_53067__$1)){
var c__4679__auto___53068 = cljs.core.chunk_first(seq__52921_53067__$1);
var G__53069 = cljs.core.chunk_rest(seq__52921_53067__$1);
var G__53070 = c__4679__auto___53068;
var G__53071 = cljs.core.count(c__4679__auto___53068);
var G__53072 = (0);
seq__52921_53057 = G__53069;
chunk__52922_53058 = G__53070;
count__52923_53059 = G__53071;
i__52924_53060 = G__53072;
continue;
} else {
var f_53073 = cljs.core.first(seq__52921_53067__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53073], 0));


var G__53074 = cljs.core.next(seq__52921_53067__$1);
var G__53075 = null;
var G__53076 = (0);
var G__53077 = (0);
seq__52921_53057 = G__53074;
chunk__52922_53058 = G__53075;
count__52923_53059 = G__53076;
i__52924_53060 = G__53077;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53078 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53078], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53078)))?cljs.core.second(arglists_53078):arglists_53078)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52926_53079 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52927_53080 = null;
var count__52928_53081 = (0);
var i__52929_53082 = (0);
while(true){
if((i__52929_53082 < count__52928_53081)){
var vec__52938_53083 = chunk__52927_53080.cljs$core$IIndexed$_nth$arity$2(null,i__52929_53082);
var name_53084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52938_53083,(0),null);
var map__52941_53085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52938_53083,(1),null);
var map__52941_53086__$1 = cljs.core.__destructure_map(map__52941_53085);
var doc_53087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941_53086__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941_53086__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53084], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53088], 0));

if(cljs.core.truth_(doc_53087)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53087], 0));
} else {
}


var G__53089 = seq__52926_53079;
var G__53090 = chunk__52927_53080;
var G__53091 = count__52928_53081;
var G__53092 = (i__52929_53082 + (1));
seq__52926_53079 = G__53089;
chunk__52927_53080 = G__53090;
count__52928_53081 = G__53091;
i__52929_53082 = G__53092;
continue;
} else {
var temp__5753__auto___53093 = cljs.core.seq(seq__52926_53079);
if(temp__5753__auto___53093){
var seq__52926_53094__$1 = temp__5753__auto___53093;
if(cljs.core.chunked_seq_QMARK_(seq__52926_53094__$1)){
var c__4679__auto___53095 = cljs.core.chunk_first(seq__52926_53094__$1);
var G__53096 = cljs.core.chunk_rest(seq__52926_53094__$1);
var G__53097 = c__4679__auto___53095;
var G__53098 = cljs.core.count(c__4679__auto___53095);
var G__53099 = (0);
seq__52926_53079 = G__53096;
chunk__52927_53080 = G__53097;
count__52928_53081 = G__53098;
i__52929_53082 = G__53099;
continue;
} else {
var vec__52942_53100 = cljs.core.first(seq__52926_53094__$1);
var name_53101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52942_53100,(0),null);
var map__52945_53102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52942_53100,(1),null);
var map__52945_53103__$1 = cljs.core.__destructure_map(map__52945_53102);
var doc_53104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53103__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945_53103__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53101], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53105], 0));

if(cljs.core.truth_(doc_53104)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53104], 0));
} else {
}


var G__53106 = cljs.core.next(seq__52926_53094__$1);
var G__53107 = null;
var G__53108 = (0);
var G__53109 = (0);
seq__52926_53079 = G__53106;
chunk__52927_53080 = G__53107;
count__52928_53081 = G__53108;
i__52929_53082 = G__53109;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52946 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52947 = null;
var count__52948 = (0);
var i__52949 = (0);
while(true){
if((i__52949 < count__52948)){
var role = chunk__52947.cljs$core$IIndexed$_nth$arity$2(null,i__52949);
var temp__5753__auto___53110__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53110__$1)){
var spec_53111 = temp__5753__auto___53110__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53111)], 0));
} else {
}


var G__53112 = seq__52946;
var G__53113 = chunk__52947;
var G__53114 = count__52948;
var G__53115 = (i__52949 + (1));
seq__52946 = G__53112;
chunk__52947 = G__53113;
count__52948 = G__53114;
i__52949 = G__53115;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52946);
if(temp__5753__auto____$1){
var seq__52946__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52946__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52946__$1);
var G__53116 = cljs.core.chunk_rest(seq__52946__$1);
var G__53117 = c__4679__auto__;
var G__53118 = cljs.core.count(c__4679__auto__);
var G__53119 = (0);
seq__52946 = G__53116;
chunk__52947 = G__53117;
count__52948 = G__53118;
i__52949 = G__53119;
continue;
} else {
var role = cljs.core.first(seq__52946__$1);
var temp__5753__auto___53120__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53120__$2)){
var spec_53121 = temp__5753__auto___53120__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53121)], 0));
} else {
}


var G__53122 = cljs.core.next(seq__52946__$1);
var G__53123 = null;
var G__53124 = (0);
var G__53125 = (0);
seq__52946 = G__53122;
chunk__52947 = G__53123;
count__52948 = G__53124;
i__52949 = G__53125;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__53126 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53127 = cljs.core.ex_cause(t);
via = G__53126;
t = G__53127;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52997 = datafied_throwable;
var map__52997__$1 = cljs.core.__destructure_map(map__52997);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52997__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52998 = cljs.core.last(via);
var map__52998__$1 = cljs.core.__destructure_map(map__52998);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52998__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52999 = data;
var map__52999__$1 = cljs.core.__destructure_map(map__52999);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53000 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53000__$1 = cljs.core.__destructure_map(map__53000);
var top_data = map__53000__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53000__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53001 = phase;
var G__53001__$1 = (((G__53001 instanceof cljs.core.Keyword))?G__53001.fqn:null);
switch (G__53001__$1) {
case "read-source":
var map__53002 = data;
var map__53002__$1 = cljs.core.__destructure_map(map__53002);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53002__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53002__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53003 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53003__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53003,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53003);
var G__53003__$2 = (cljs.core.truth_((function (){var fexpr__53004 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53004.cljs$core$IFn$_invoke$arity$1 ? fexpr__53004.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53004.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53003__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53003__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53003__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53003__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53005 = top_data;
var G__53005__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53005,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53005);
var G__53005__$2 = (cljs.core.truth_((function (){var fexpr__53006 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53006.cljs$core$IFn$_invoke$arity$1 ? fexpr__53006.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53006.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53005__$1);
var G__53005__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53005__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53005__$2);
var G__53005__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53005__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53005__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53005__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53005__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53007 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53007,(3),null);
var G__53010 = top_data;
var G__53010__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53010,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53010);
var G__53010__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53010__$1);
var G__53010__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53010__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53010__$2);
var G__53010__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53010__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53010__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53010__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53010__$4;
}

break;
case "execution":
var vec__53011 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53011,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52996_SHARP_){
var or__4253__auto__ = (p1__52996_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__53014 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53014.cljs$core$IFn$_invoke$arity$1 ? fexpr__53014.cljs$core$IFn$_invoke$arity$1(p1__52996_SHARP_) : fexpr__53014.call(null,p1__52996_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__53015 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53015__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53015);
var G__53015__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53015__$1);
var G__53015__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53015__$2);
var G__53015__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53015__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53015__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53015__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53001__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53018){
var map__53019 = p__53018;
var map__53019__$1 = cljs.core.__destructure_map(map__53019);
var triage_data = map__53019__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53020 = phase;
var G__53020__$1 = (((G__53020 instanceof cljs.core.Keyword))?G__53020.fqn:null);
switch (G__53020__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53021 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53023 = loc;
var G__53024 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53025_53134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53026_53135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53027_53136 = true;
var _STAR_print_fn_STAR__temp_val__53028_53137 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53027_53136);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53028_53137);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53016_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53026_53135);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53025_53134);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53021,G__53022,G__53023,G__53024) : format.call(null,G__53021,G__53022,G__53023,G__53024));

break;
case "macroexpansion":
var G__53029 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53030 = cause_type;
var G__53031 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53032 = loc;
var G__53033 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53029,G__53030,G__53031,G__53032,G__53033) : format.call(null,G__53029,G__53030,G__53031,G__53032,G__53033));

break;
case "compile-syntax-check":
var G__53034 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53035 = cause_type;
var G__53036 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53037 = loc;
var G__53038 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53034,G__53035,G__53036,G__53037,G__53038) : format.call(null,G__53034,G__53035,G__53036,G__53037,G__53038));

break;
case "compilation":
var G__53039 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53040 = cause_type;
var G__53041 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53042 = loc;
var G__53043 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53039,G__53040,G__53041,G__53042,G__53043) : format.call(null,G__53039,G__53040,G__53041,G__53042,G__53043));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53044 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53045 = symbol;
var G__53046 = loc;
var G__53047 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53048_53138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53049_53139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53050_53140 = true;
var _STAR_print_fn_STAR__temp_val__53051_53141 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53050_53140);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53051_53141);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53017_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53017_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53049_53139);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53048_53138);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53044,G__53045,G__53046,G__53047) : format.call(null,G__53044,G__53045,G__53046,G__53047));
} else {
var G__53052 = "Execution error%s at %s(%s).\n%s\n";
var G__53053 = cause_type;
var G__53054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53055 = loc;
var G__53056 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53052,G__53053,G__53054,G__53055,G__53056) : format.call(null,G__53052,G__53053,G__53054,G__53055,G__53056));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53020__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
