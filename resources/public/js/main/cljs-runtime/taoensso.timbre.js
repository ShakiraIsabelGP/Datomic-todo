goog.provide('taoensso.timbre');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(126),(2)], null));
} else {
taoensso.encore.assert_min_encore_version(2.126);
}
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default (fn [data]) -> string output fn.
 *  Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__45028 = arguments.length;
switch (G__45028) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2(null,data);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__45029 = opts;
var map__45029__$1 = cljs.core.__destructure_map(map__45029);
var no_stacktrace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45029__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__45030 = data;
var map__45030__$1 = cljs.core.__destructure_map(map__45030);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45030__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [(function (){var temp__5753__auto__ = cljs.core.force(timestamp_);
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1((taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,opts) : taoensso.timbre.stacktrace.call(null,err,opts)))].join('');
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [appender-data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn      default-output-fn ; (fn [appender-data]) -> string
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),(function (){var G__45032 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__45032) : taoensso.timbre.console_appender.call(null,G__45032));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),(function (){var G__45033 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__45033) : taoensso.timbre.println_appender.call(null,G__45033));
})()], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This map controls all Timbre behaviour including:
 *  - When to log (via level and namespace filtering)
 *  - How  to log (which appenders to use)
 *  - What to log (config to control how data sent to appenders
 *                 will be formatted to output string)
 * 
 *   See `default-config` for default value (and example config).
 * 
 *   Modify this config with `binding`, `alter-var-root`, or with utils:
 *     `set-level!`,         `with-level`,
 *    `set-config!`,        `with-config`,
 *  `merge-config!`, `with-merged-config`.
 * 
 *   MAIN OPTIONS
 * 
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set the min-level based on the namespace
 *    by providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [appender-data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [appender-data]) -> string, see `default-output-fn`
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop after exceeding given maximum number
 *                       ; of calls within given rolling window/s.
 *                       ; e.g. [[100 (encore/ms :mins 1)] [1000 (encore/ms :hours 1)]]
 *                       ; will limit noop after:
 *                       ;   - >100  calls in 1 rolling minute, or
 *                       ;   - >1000 calls in 1 rolling hour
 * 
 *      :output-fn       ; Optional override for inherited (fn [appender-data]) -> string
 *      :timestamp-opts  ; Optional override for inherited config map
 *      :fn              ; (fn [appender-data]) -> side-effects, with keys described below
 * 
 *   APPENDER DATA
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire active config map
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :spying?         ; Is call occuring via the `spy` macro?
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as edn)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as edn)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as edn)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as edn)
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
var G__45034 = (function (_old){
return m;
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__45034) : taoensso.timbre.swap_config_BANG_.call(null,G__45034));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
var G__45039 = (function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,m], 0));
});
return (taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$1(G__45039) : taoensso.timbre.swap_config_BANG_.call(null,G__45039));
});
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45154 = arguments.length;
var i__4865__auto___45155 = (0);
while(true){
if((i__4865__auto___45155 < len__4864__auto___45154)){
args__4870__auto__.push((arguments[i__4865__auto___45155]));

var G__45156 = (i__4865__auto___45155 + (1));
i__4865__auto___45155 = G__45156;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq45040){
var G__45042 = cljs.core.first(seq45040);
var seq45040__$1 = cljs.core.next(seq45040);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45042,seq45040__$1);
}));

taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});
var err_45158 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_45159 = (function (p1__45050_SHARP_){
var G__45051 = p1__45050_SHARP_;
var G__45051__$1 = (((G__45051 instanceof cljs.core.Keyword))?G__45051.fqn:null);
switch (G__45051__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_45159(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_45159(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_45158,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4253__auto__ = level__GT_int_45159(x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_45158,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
});
var valid_level__GT_int_45179 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_45179.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_45179.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_45179.call(null,x)) >= (valid_level__GT_int_45179.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_45179.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_45179.call(null,y)));
});
var fn_QMARK__45180 = cljs.core.fn_QMARK_;
var compile_45181 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__45182 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__45052 = compile_45181(x);
return (fexpr__45052.cljs$core$IFn$_invoke$arity$1 ? fexpr__45052.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__45052.call(null,ns));
}));
var conform_QMARK__45183 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__45180.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__45180.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__45180.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return conform_QMARK__STAR__45182(ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__45183(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome((function (p__45055){
var vec__45056 = p__45055;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45056,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45056,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__45182(ns_pattern,ns))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_45184 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_45185 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__45059 = (function (){var or__4253__auto__ = ((cljs.core.vector_QMARK_(x))?ns__GT__QMARK_min_level_45185(x,ns):x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
})();
return (valid_level_45184.cljs$core$IFn$_invoke$arity$1 ? valid_level_45184.cljs$core$IFn$_invoke$arity$1(G__45059) : valid_level_45184.call(null,G__45059));
});
var leglist_45186 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__45060 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__45060.cljs$core$IFn$_invoke$arity$1 ? fexpr__45060.cljs$core$IFn$_invoke$arity$1(x) : fexpr__45060.call(null,x));
})())){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_45186(ns_whitelist);
var ns_blacklist__$1 = leglist_45186(ns_blacklist);
if(cljs.core.truth_((function (){var or__4253__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__45187 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__45188 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_45189 = taoensso.timbre.get_min_level;
var legacy_ns_filter_45190 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__45062 = arguments.length;
switch (G__45062) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__4253__auto__ = _QMARK_config;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = (function (){var G__45063 = default_min_level;
var G__45064 = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})();
var G__45065 = _QMARK_ns_str;
return (get_min_level_45189.cljs$core$IFn$_invoke$arity$3 ? get_min_level_45189.cljs$core$IFn$_invoke$arity$3(G__45063,G__45064,G__45065) : get_min_level_45189.call(null,G__45063,G__45064,G__45065));
})();
if(cljs.core.truth_((level_GT__EQ__45187.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__45187.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__45187.call(null,level,min_level)))){
var temp__5751__auto__ = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__45066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774));
var G__45067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142));
return (legacy_ns_filter_45190.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_45190.cljs$core$IFn$_invoke$arity$2(G__45066,G__45067) : legacy_ns_filter_45190.call(null,G__45066,G__45067));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ns_filter = temp__5751__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__45188.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__45188.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__45188.call(null,ns_filter,_QMARK_ns_str)))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var x__$1 = taoensso.encore.nil__GT_str(x);
if(cljs.core.record_QMARK_(x__$1)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1], 0));
} else {
return x__$1;

}
})),xs);
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize((function (appender_id,specs){
return taoensso.encore.limiter(specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)) : taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492)));
var fmt_msg_QMARK_ = (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)) : taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552)));
var vec__45069 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45069,(0),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__4251__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__45072 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.map_QMARK_(v0);
if(and__4251__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0));
} else {
return and__4251__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__45075 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__45081 = timestamp_opts;
var map__45081__$1 = cljs.core.__destructure_map(map__45081);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45081__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650)) : taoensso.encore.kw_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650))))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__45083 = arguments.length;
switch (G__45083) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"report","report",1394055010),level,_QMARK_ns_str,config)){
var instant_45204 = (new Date());
var context_45205 = taoensso.timbre._STAR_context_STAR_;
var vargs_45206 = cljs.core.deref(vargs_);
var vec__45085_45207 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_45206);
var _QMARK_err_45208__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085_45207,(0),null);
var _QMARK_meta_45209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085_45207,(1),null);
var _QMARK_msg_fmt_45210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085_45207,(2),null);
var vargs_45211__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45085_45207,(3),null);
var data_45212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4253__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_45204,spying_QMARK_,config,vargs_45211__$1,_QMARK_file,(function (){var fexpr__45090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__45090.cljs$core$IFn$_invoke$arity$1 ? fexpr__45090.cljs$core$IFn$_invoke$arity$1(level) : fexpr__45090.call(null,level));
})(),_QMARK_ns_str,level,_QMARK_err_45208__$1,context_45205,_QMARK_line,(new cljs.core.Delay((function (){
return _QMARK_err_45208__$1;
}),null)),_QMARK_meta_45209,_QMARK_msg_fmt_45210]));
var _QMARK_data_45213 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_45212,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__5753__auto___45214 = _QMARK_data_45213;
if(cljs.core.truth_(temp__5753__auto___45214)){
var data_45215__$1 = temp__5753__auto___45214;
var map__45091_45216 = data_45215__$1;
var map__45091_45217__$1 = cljs.core.__destructure_map(map__45091_45216);
var vargs_45218__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45091_45217__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_45219__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_45215__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay((function (){
return vargs_45218__$2;
}),null)));
var data_45220__$3 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_45219__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
var G__45092 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__45092)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),G__45092)){
return taoensso.timbre.str_join(vargs_45218__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),G__45092)){
if(typeof _QMARK_msg_fmt_45210 === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_(_QMARK_msg_fmt_45210,vargs_45218__$2);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45092)].join('')));

}
}
}
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_45210,cljs.core.get.cljs$core$IFn$_invoke$arity$3(_QMARK_meta_45209,new cljs.core.Keyword(null,"hash","hash",-13781596),vargs_45218__$2)], null));
}),null))], 0));
var output_fn1_45221 = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
var timestamp_opts1_45222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var get_timestamp__45223 = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_45220__$3,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
cljs.core.reduce_kv((function (_,id,appender){
if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__4251__auto__)){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__4251__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__4253__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter(id,rate_limit_specs);
return cljs.core.not((function (){var G__45095 = cljs.core.force(new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_45220__$3));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__45095) : rl_fn.call(null,G__45095));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__45096 = appender;
var map__45096__$1 = cljs.core.__destructure_map(map__45096);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4253__auto__ = (f == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())){
return output_fn1_45221;
} else {
return f;
}
})();
var timestamp_ = (function (){var opts = new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__4253__auto__ = (opts == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)) : taoensso.encore.kw_identical_QMARK_.call(null,opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)));
}
})())){
return get_timestamp__45223(timestamp_opts1_45222);
} else {
return get_timestamp__45223(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timestamp_opts1_45222,opts));
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__45097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_45220__$3,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__45097) : output_fn.call(null,G__45097));
}),null));
var data__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_45220__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5751__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5751__auto__)){
var mfn = temp__5751__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$4) : mfn.call(null,data__$4));
} else {
return data__$4;
}
})();
var temp__5753__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5753__auto____$1)){
var data__$5 = temp__5753__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$5) : apfn.call(null,data__$5));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__45111 = arguments.length;
switch (G__45111) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
var or__4253__auto__ = err.stack;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45229 = arguments.length;
var i__4865__auto___45230 = (0);
while(true){
if((i__4865__auto___45230 < len__4864__auto___45229)){
args__4870__auto__.push((arguments[i__4865__auto___45230]));

var G__45231 = (i__4865__auto___45230 + (1));
i__4865__auto___45230 = G__45231;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join(xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq45112){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45112));
}));


var ret__4913__auto___45232 = (function (){
taoensso.timbre.with_log_level = (function taoensso$timbre$with_log_level(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45233 = arguments.length;
var i__4865__auto___45234 = (0);
while(true){
if((i__4865__auto___45234 < len__4864__auto___45233)){
args__4870__auto__.push((arguments[i__4865__auto___45234]));

var G__45235 = (i__4865__auto___45234 + (1));
i__4865__auto___45234 = G__45235;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(taoensso.timbre.with_log_level.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,level,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-level","taoensso.timbre/with-level",1514604232,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_log_level.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_log_level.cljs$lang$applyTo = (function (seq45117){
var G__45118 = cljs.core.first(seq45117);
var seq45117__$1 = cljs.core.next(seq45117);
var G__45119 = cljs.core.first(seq45117__$1);
var seq45117__$2 = cljs.core.next(seq45117__$1);
var G__45120 = cljs.core.first(seq45117__$2);
var seq45117__$3 = cljs.core.next(seq45117__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45118,G__45119,G__45120,seq45117__$3);
}));

return null;
})()
;
(taoensso.timbre.with_log_level.cljs$lang$macro = true);


var ret__4913__auto___45238 = (function (){
taoensso.timbre.with_logging_config = (function taoensso$timbre$with_logging_config(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45239 = arguments.length;
var i__4865__auto___45241 = (0);
while(true){
if((i__4865__auto___45241 < len__4864__auto___45239)){
args__4870__auto__.push((arguments[i__4865__auto___45241]));

var G__45243 = (i__4865__auto___45241 + (1));
i__4865__auto___45241 = G__45243;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(taoensso.timbre.with_logging_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,config,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","with-config","taoensso.timbre/with-config",-1144239945,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(taoensso.timbre.with_logging_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(taoensso.timbre.with_logging_config.cljs$lang$applyTo = (function (seq45121){
var G__45122 = cljs.core.first(seq45121);
var seq45121__$1 = cljs.core.next(seq45121);
var G__45123 = cljs.core.first(seq45121__$1);
var seq45121__$2 = cljs.core.next(seq45121__$1);
var G__45124 = cljs.core.first(seq45121__$2);
var seq45121__$3 = cljs.core.next(seq45121__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45122,G__45123,G__45124,seq45121__$3);
}));

return null;
})()
;
(taoensso.timbre.with_logging_config.cljs$lang$macro = true);


var ret__4913__auto___45245 = (function (){
taoensso.timbre.logp = (function taoensso$timbre$logp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45246 = arguments.length;
var i__4865__auto___45248 = (0);
while(true){
if((i__4865__auto___45248 < len__4864__auto___45246)){
args__4870__auto__.push((arguments[i__4865__auto___45248]));

var G__45249 = (i__4865__auto___45248 + (1));
i__4865__auto___45248 = G__45249;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(taoensso.timbre.logp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log","taoensso.timbre/log",-1743194436,null),null,(1),null)),args)));
}));

(taoensso.timbre.logp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.timbre.logp.cljs$lang$applyTo = (function (seq45132){
var G__45133 = cljs.core.first(seq45132);
var seq45132__$1 = cljs.core.next(seq45132);
var G__45134 = cljs.core.first(seq45132__$1);
var seq45132__$2 = cljs.core.next(seq45132__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45133,G__45134,seq45132__$2);
}));

return null;
})()
;
(taoensso.timbre.logp.cljs$lang$macro = true);


var ret__4913__auto___45250 = (function (){
taoensso.timbre.log_env = (function taoensso$timbre$log_env(var_args){
var G__45152 = arguments.length;
switch (G__45152) {
case 2:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,(1),null)))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,level,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"&env",null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log-env","taoensso.timbre/log-env",-166251696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","*config*","taoensso.timbre/*config*",1821294766,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,config,level,name){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","log*","taoensso.timbre/log*",1207553629,null),null,(1),null)),(new cljs.core.List(null,config,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,level,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,"=>",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","get-env","taoensso.timbre/get-env",92671901,null),null,(1),null))))),null,(1),null))], 0))));
}));

(taoensso.timbre.log_env.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(taoensso.timbre.log_env.cljs$lang$macro = true);


//# sourceMappingURL=taoensso.timbre.js.map