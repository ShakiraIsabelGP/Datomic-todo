goog.provide('com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing');
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing !== 'undefined') && (typeof com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx !== 'undefined')){
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * Returns true if the current thread is running non-nested transaction processing code.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.top_level_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$top_level_QMARK_(p__56118){
var map__56119 = p__56118;
var map__56119__$1 = cljs.core.__destructure_map(map__56119);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56119__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)),(0));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_submission_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56264 = arguments.length;
var i__4865__auto___56265 = (0);
while(true){
if((i__4865__auto___56265 < len__4864__auto___56264)){
args__4870__auto__.push((arguments[i__4865__auto___56265]));

var G__56266 = (i__4865__auto___56265 + (1));
i__4865__auto___56265 = G__56266;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$lang$applyTo = (function (seq56120){
var G__56121 = cljs.core.first(seq56120);
var seq56120__$1 = cljs.core.next(seq56120);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56121,seq56120__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_submission_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submission_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_post_processing_steps_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56267 = arguments.length;
var i__4865__auto___56268 = (0);
while(true){
if((i__4865__auto___56268 < len__4864__auto___56267)){
args__4870__auto__.push((arguments[i__4865__auto___56268]));

var G__56269 = (i__4865__auto___56268 + (1));
i__4865__auto___56268 = G__56269;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$lang$applyTo = (function (seq56123){
var G__56124 = cljs.core.first(seq56123);
var seq56123__$1 = cljs.core.next(seq56123);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56124,seq56123__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_post_processing_steps_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_steps(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_active_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56270 = arguments.length;
var i__4865__auto___56271 = (0);
while(true){
if((i__4865__auto___56271 < len__4864__auto___56270)){
args__4870__auto__.push((arguments[i__4865__auto___56271]));

var G__56272 = (i__4865__auto___56271 + (1));
i__4865__auto___56271 = G__56272;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$lang$applyTo = (function (seq56129){
var G__56130 = cljs.core.first(seq56129);
var seq56129__$1 = cljs.core.next(seq56129);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56130,seq56129__$1);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_active_queue_BANG_(app__$1,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$active_queue(app__$1){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588)], null)));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$swap_send_queue_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56273 = arguments.length;
var i__4865__auto___56274 = (0);
while(true){
if((i__4865__auto___56274 < len__4864__auto___56273)){
args__4870__auto__.push((arguments[i__4865__auto___56274]));

var G__56275 = (i__4865__auto___56274 + (1));
i__4865__auto___56274 = G__56275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,remote,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),args);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$lang$applyTo = (function (seq56166){
var G__56167 = cljs.core.first(seq56166);
var seq56166__$1 = cljs.core.next(seq56166);
var G__56168 = cljs.core.first(seq56166__$1);
var seq56166__$2 = cljs.core.next(seq56166__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56167,G__56168,seq56166__$2);
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$reset_send_queue_BANG_(app__$1,remote,v){
return cljs.core.reset_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)),v);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$send_queue(app__$1,remote){
return cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),remote], null)));
});
/**
 * Add `f` as a function that will run after the current transaction has been fully processed.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_after_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_after_BANG_(app__$1,f){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_post_processing_steps_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),f], 0));
});
/**
 * Is there post processing to do?
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$post_processing_QMARK_(app__$1){
return cljs.core.boolean$(cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1)));
});
/**
 * Runs the queued post processing steps until the post-processing queue is empty.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.do_post_processing_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$do_post_processing_BANG_(app__$1){
var steps = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1);
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_post_processing_steps_BANG_(app__$1,cljs.core.PersistentVector.EMPTY);

var seq__56169_56276 = cljs.core.seq(steps);
var chunk__56170_56277 = null;
var count__56171_56278 = (0);
var i__56172_56279 = (0);
while(true){
if((i__56172_56279 < count__56171_56278)){
var f_56280 = chunk__56170_56277.cljs$core$IIndexed$_nth$arity$2(null,i__56172_56279);
try{(f_56280.cljs$core$IFn$_invoke$arity$0 ? f_56280.cljs$core$IFn$_invoke$arity$0() : f_56280.call(null));
}catch (e56175){var e_56281 = e56175;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56169_56276,chunk__56170_56277,count__56171_56278,i__56172_56279,steps,e_56281,f_56280){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56281,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__56169_56276,chunk__56170_56277,count__56171_56278,i__56172_56279,steps,e_56281,f_56280))
,null)),null,-2026534895,null);
}

var G__56282 = seq__56169_56276;
var G__56283 = chunk__56170_56277;
var G__56284 = count__56171_56278;
var G__56285 = (i__56172_56279 + (1));
seq__56169_56276 = G__56282;
chunk__56170_56277 = G__56283;
count__56171_56278 = G__56284;
i__56172_56279 = G__56285;
continue;
} else {
var temp__5753__auto___56286 = cljs.core.seq(seq__56169_56276);
if(temp__5753__auto___56286){
var seq__56169_56287__$1 = temp__5753__auto___56286;
if(cljs.core.chunked_seq_QMARK_(seq__56169_56287__$1)){
var c__4679__auto___56288 = cljs.core.chunk_first(seq__56169_56287__$1);
var G__56289 = cljs.core.chunk_rest(seq__56169_56287__$1);
var G__56290 = c__4679__auto___56288;
var G__56291 = cljs.core.count(c__4679__auto___56288);
var G__56292 = (0);
seq__56169_56276 = G__56289;
chunk__56170_56277 = G__56290;
count__56171_56278 = G__56291;
i__56172_56279 = G__56292;
continue;
} else {
var f_56293 = cljs.core.first(seq__56169_56287__$1);
try{(f_56293.cljs$core$IFn$_invoke$arity$0 ? f_56293.cljs$core$IFn$_invoke$arity$0() : f_56293.call(null));
}catch (e56176){var e_56294 = e56176;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__56169_56276,chunk__56170_56277,count__56171_56278,i__56172_56279,steps,e_56294,f_56293,seq__56169_56287__$1,temp__5753__auto___56286){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56294,"Post processing step failed. See https://book.fulcrologic.com/#err-stp-postproc-failed"], null);
});})(seq__56169_56276,chunk__56170_56277,count__56171_56278,i__56172_56279,steps,e_56294,f_56293,seq__56169_56287__$1,temp__5753__auto___56286))
,null)),null,-1224680760,null);
}

var G__56295 = cljs.core.next(seq__56169_56287__$1);
var G__56296 = null;
var G__56297 = (0);
var G__56298 = (0);
seq__56169_56276 = G__56295;
chunk__56170_56277 = G__56296;
count__56171_56278 = G__56297;
i__56172_56279 = G__56298;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto__ = cljs.core.seq(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.post_processing_steps(app__$1));
if(temp__5753__auto__){
var next_steps = temp__5753__auto__;
var G__56299 = next_steps;
steps = G__56299;
continue;
} else {
return null;
}
break;
}
});
/**
 * Returns true if the current thread is in the midst of running the optimistic actions of a new transaction.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$in_transaction_QMARK_(p__56181){
var map__56182 = p__56181;
var map__56182__$1 = cljs.core.__destructure_map(map__56182);
var app__$1 = map__56182__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56182__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx),id,(0)));
});
/**
 * Should be called after the application renders to ensure that transactions blocked until the next render become
 * unblocked. Schedules an activation.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$release_post_render_tasks_BANG_(app__$1){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (queue){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),cljs.core.dissoc,new cljs.core.Keyword(null,"after-render?","after-render?",595994030));
}),queue);
})], 0));
});
/**
 * Figure out the dispatch routine to trigger for the given network result.  If it exists, send the result
 *   to it.
 * 
 *   Returns the tx-element with the remote marked complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$dispatch_result_BANG_(app__$1,tx_node,p__56183,remote){
var map__56184 = p__56183;
var map__56184__$1 = cljs.core.__destructure_map(map__56184);
var tx_element = map__56184__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var desired_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","desired-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/desired-ast-nodes",-1718643425));
var transmitted_ast_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687));
var original_ast_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56184__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","original-ast-node","com.fulcrologic.fulcro.algorithms.tx-processing/original-ast-node",2080944477));
var result_56300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,remote);
var handler_56301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch,new cljs.core.Keyword(null,"result-action","result-action",-1254630246));
if(cljs.core.truth_(handler_56301)){
var env_56302 = com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$3(app__$1,tx_node,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"transacted-ast","transacted-ast",-442737948),original_ast_node,new cljs.core.Keyword(null,"mutation-ast","mutation-ast",1077959891),cljs.core.get.cljs$core$IFn$_invoke$arity$2(desired_ast_nodes,remote),new cljs.core.Keyword(null,"transmitted-ast","transmitted-ast",1828931690),cljs.core.get.cljs$core$IFn$_invoke$arity$2(transmitted_ast_nodes,remote),new cljs.core.Keyword(null,"result","result",1415092211),result_56300], null));
try{(handler_56301.cljs$core$IFn$_invoke$arity$1 ? handler_56301.cljs$core$IFn$_invoke$arity$1(env_56302) : handler_56301.call(null,env_56302));
}catch (e56185){var e_56303 = e56185;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_56303,"The result-action mutation handler for mutation",new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(original_ast_node),"threw an exception. See https://book.fulcrologic.com/#err-stp-res-action-exc"], null);
}),null)),null,-1522823384,null);
}} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_element,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706),cljs.core.conj,remote);
});
/**
 * Distribute results and mark the remotes for those elements as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_element_results_BANG_(app__$1,tx_node,p__56186){
var map__56187 = p__56186;
var map__56187__$1 = cljs.core.__destructure_map(map__56187);
var tx_element = map__56187__$1;
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56187__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
var complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56187__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","complete?","com.fulcrologic.fulcro.algorithms.tx-processing/complete?",-311612706));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_element,remote){
if(cljs.core.truth_((complete_QMARK_.cljs$core$IFn$_invoke$arity$1 ? complete_QMARK_.cljs$core$IFn$_invoke$arity$1(remote) : complete_QMARK_.call(null,remote)))){
return new_element;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.dispatch_result_BANG_(app__$1,tx_node,new_element,remote);
}
}),tx_element,cljs.core.keys(results));
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$node_index(queue,txn_id){
var n = cljs.core.count(queue);
var idx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (idx,p__56188){
var map__56189 = p__56188;
var map__56189__$1 = cljs.core.__destructure_map(map__56189);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56189__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,txn_id)){
return cljs.core.reduced(idx);
} else {
return (idx + (1));
}
}),(0),queue);
if((idx < n)){
return idx;
} else {
return null;
}
});
/**
 * Side-effects against the app state to distribute the result for txn-id element at ele-idx. This will call the result
 * handler and mark that remote as complete.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$distribute_results_BANG_(app__$1,txn_id,ele_idx){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var tx_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,idx);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx], null),(function (p1__56190_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_element_results_BANG_(app__$1,tx_node,p1__56190_SHARP_);
})], 0));
});
/**
 * Deal with a network result on the given txn/element.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$record_result_BANG_(var_args){
var G__56192 = arguments.length;
switch (G__56192) {
case 6:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (app__$1,txn_id,ele_idx,remote,result,result_key){
var active_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var txn_idx = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.node_index(active_queue,txn_id);
var not_found_QMARK_ = (((txn_idx >= cljs.core.count(active_queue))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_queue,txn_idx)))));
if(not_found_QMARK_){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,209,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Network result for",remote,"does not have a valid node on the active queue! See https://book.fulcrologic.com/#err-stp-res-lacks-valid-node"], null);
}),null)),null,1371034377,null);
} else {
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [txn_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,result_key,remote], null),result], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.distribute_results_BANG_(app__$1,txn_id,ele_idx);
}
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (app__$1,txn_id,ele_idx,remote,result){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,txn_id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","results","com.fulcrologic.fulcro.algorithms.tx-processing/results",-1876101852));
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$lang$maxFixedArity = 6);

/**
 * Removes the send node (if present) from the send queue on the given remote.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$remove_send_BANG_(app__$1,remote,txn_id,ele_idx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (old_queue){
return cljs.core.filterv((function (p__56193){
var map__56194 = p__56193;
var map__56194__$1 = cljs.core.__destructure_map(map__56194);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56194__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56194__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
return (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(txn_id,id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ele_idx,idx)))));
}),old_queue);
})], 0));
});
/**
 * Generate a new send node and add it to the appropriate send queue.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG_(app__$1,p__56195,ele_idx,remote){
var map__56196 = p__56195;
var map__56196__$1 = cljs.core.__destructure_map(map__56196);
var tx_node = map__56196__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var update_handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_progress_handler_STAR_(result){
var id__55920__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$6(app__$1,id,ele_idx,remote,result,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","progress","com.fulcrologic.fulcro.algorithms.tx-processing/progress",1012736442));

var G__56197 = app__$1;
var G__56198 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__56197,G__56198) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__56197,G__56198));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto__,cljs.core.dec);
}});
var ast = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tx_node,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","transmitted-ast-nodes","com.fulcrologic.fulcro.algorithms.tx-processing/transmitted-ast-nodes",1065250687),remote], null));
var handler = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$add_send_BANG__$_result_handler_STAR_(result){
var id__55920__auto__ = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto__,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.record_result_BANG_.cljs$core$IFn$_invoke$arity$5(app__$1,id,ele_idx,remote,result);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.remove_send_BANG_(app__$1,remote,id,ele_idx);

var G__56199 = app__$1;
var G__56200 = cljs.core.PersistentArrayMap.EMPTY;
return (com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.cljs$core$IFn$_invoke$arity$2(G__56199,G__56200) : com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_.call(null,G__56199,G__56200));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto__,cljs.core.dec);
}});
var send_node = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423),id,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698),ele_idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","ast","com.fulcrologic.fulcro.algorithms.tx-processing/ast",1718830373),ast,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420),options,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing/active?",966679517),false,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","result-handler","com.fulcrologic.fulcro.algorithms.tx-processing/result-handler",-114902209),handler,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","update-handler","com.fulcrologic.fulcro.algorithms.tx-processing/update-handler",-1256285755),update_handler], null);
if(cljs.core.truth_(ast)){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_send_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,remote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),send_node], 0));
} else {
com.fulcrologic.fulcro.algorithms.scheduling.defer((function (){
return handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentArrayMap.EMPTY], null));
}),(1));
}

return null;
});
/**
 * Queue all (unqueued) remote actions for the given element.  Returns the (possibly updated) node.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_element_sends_BANG_(app__$1,tx_node,p__56201){
var map__56202 = p__56201;
var map__56202__$1 = cljs.core.__destructure_map(map__56202);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","idx","com.fulcrologic.fulcro.algorithms.tx-processing/idx",-1121773698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","dispatch","com.fulcrologic.fulcro.algorithms.tx-processing/dispatch",-262239660));
var started_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56202__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366));
var remotes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(dispatch)),com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1));
var to_dispatch = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(remotes,started_QMARK_);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,remote){
if(cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.PersistentHashSet.EMPTY),remote)){
return node;
} else {
var updated_node = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx], null),(function (tx_element){
return com.fulcrologic.fulcro.algorithms.tx_processing.compute_desired_ast_node(app__$1,remote,node,tx_element);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330),idx,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","started?","com.fulcrologic.fulcro.algorithms.tx-processing/started?",1421241366)], null),cljs.core.conj,remote);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.add_send_BANG_(app__$1,updated_node,idx,remote);

return updated_node;
}
}),tx_node,to_dispatch);
});
/**
 * Finds any item(s) on the given node that are ready to be placed on the network queues and adds them. Non-optimistic
 *   multi-element nodes will only queue one remote operation at a time.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$queue_sends_BANG_(app__$1,p__56203){
var map__56204 = p__56203;
var map__56204__$1 = cljs.core.__destructure_map(map__56204);
var tx_node = map__56204__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56204__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","elements","com.fulcrologic.fulcro.algorithms.tx-processing/elements",-925101330));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (node,element){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_element_sends_BANG_(app__$1,node,element);
}),tx_node,elements);
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_tx_node_BANG_(app__$1,p__56205){
var map__56206 = p__56205;
var map__56206__$1 = cljs.core.__destructure_map(map__56206);
var tx_node = map__56206__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56206__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420));
if(com.fulcrologic.fulcro.algorithms.tx_processing.fully_complete_QMARK_(app__$1,tx_node)){
return null;
} else {
return com.fulcrologic.fulcro.algorithms.tx_processing.update_progress_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.queue_sends_BANG_(app__$1,com.fulcrologic.fulcro.algorithms.tx_processing.run_actions_BANG_(app__$1,tx_node)));
}
});
/**
 * Process the send queues against the remotes, which will cause idle remotes with queued work to issue network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_send_queues_BANG_(app__$1){
var remote_names = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var operations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__56207_56310 = cljs.core.seq(remote_names);
var chunk__56208_56311 = null;
var count__56209_56312 = (0);
var i__56210_56313 = (0);
while(true){
if((i__56210_56313 < count__56209_56312)){
var remote_56314 = chunk__56208_56311.cljs$core$IIndexed$_nth$arity$2(null,i__56210_56313);
var send_queue_56315 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_56314);
var vec__56227_56316 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_56315);
var p_56317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56227_56316,(0),null);
var serial_56318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56227_56316,(1),null);
var front_56319 = cljs.core.first(serial_56318);
var seq__56230_56320 = cljs.core.seq(p_56317);
var chunk__56231_56321 = null;
var count__56232_56322 = (0);
var i__56233_56323 = (0);
while(true){
if((i__56233_56323 < count__56232_56322)){
var item_56324 = chunk__56231_56321.cljs$core$IIndexed$_nth$arity$2(null,i__56233_56323);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56230_56320,chunk__56231_56321,count__56232_56322,i__56233_56323,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56324,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_56324,remote_56314);
});})(seq__56230_56320,chunk__56231_56321,count__56232_56322,i__56233_56323,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56324,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations))
);


var G__56325 = seq__56230_56320;
var G__56326 = chunk__56231_56321;
var G__56327 = count__56232_56322;
var G__56328 = (i__56233_56323 + (1));
seq__56230_56320 = G__56325;
chunk__56231_56321 = G__56326;
count__56232_56322 = G__56327;
i__56233_56323 = G__56328;
continue;
} else {
var temp__5753__auto___56329 = cljs.core.seq(seq__56230_56320);
if(temp__5753__auto___56329){
var seq__56230_56330__$1 = temp__5753__auto___56329;
if(cljs.core.chunked_seq_QMARK_(seq__56230_56330__$1)){
var c__4679__auto___56331 = cljs.core.chunk_first(seq__56230_56330__$1);
var G__56332 = cljs.core.chunk_rest(seq__56230_56330__$1);
var G__56333 = c__4679__auto___56331;
var G__56334 = cljs.core.count(c__4679__auto___56331);
var G__56335 = (0);
seq__56230_56320 = G__56332;
chunk__56231_56321 = G__56333;
count__56232_56322 = G__56334;
i__56233_56323 = G__56335;
continue;
} else {
var item_56336 = cljs.core.first(seq__56230_56330__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56230_56320,chunk__56231_56321,count__56232_56322,i__56233_56323,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56336,seq__56230_56330__$1,temp__5753__auto___56329,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_56336,remote_56314);
});})(seq__56230_56320,chunk__56231_56321,count__56232_56322,i__56233_56323,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56336,seq__56230_56330__$1,temp__5753__auto___56329,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations))
);


var G__56337 = cljs.core.next(seq__56230_56330__$1);
var G__56338 = null;
var G__56339 = (0);
var G__56340 = (0);
seq__56230_56320 = G__56337;
chunk__56231_56321 = G__56338;
count__56232_56322 = G__56339;
i__56233_56323 = G__56340;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_56319))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56314,serial_56318);
} else {
var map__56234_56341 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_56314,serial_56318);
var map__56234_56342__$1 = cljs.core.__destructure_map(map__56234_56341);
var send_queue_56343__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56234_56342__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_56344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56234_56342__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_56344)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,map__56234_56341,map__56234_56342__$1,send_queue_56343__$1,send_node_56344,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_56344,remote_56314);
});})(seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,map__56234_56341,map__56234_56342__$1,send_queue_56343__$1,send_node_56344,send_queue_56315,vec__56227_56316,p_56317,serial_56318,front_56319,remote_56314,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56314,send_queue_56343__$1);
}


var G__56345 = seq__56207_56310;
var G__56346 = chunk__56208_56311;
var G__56347 = count__56209_56312;
var G__56348 = (i__56210_56313 + (1));
seq__56207_56310 = G__56345;
chunk__56208_56311 = G__56346;
count__56209_56312 = G__56347;
i__56210_56313 = G__56348;
continue;
} else {
var temp__5753__auto___56349 = cljs.core.seq(seq__56207_56310);
if(temp__5753__auto___56349){
var seq__56207_56350__$1 = temp__5753__auto___56349;
if(cljs.core.chunked_seq_QMARK_(seq__56207_56350__$1)){
var c__4679__auto___56351 = cljs.core.chunk_first(seq__56207_56350__$1);
var G__56352 = cljs.core.chunk_rest(seq__56207_56350__$1);
var G__56353 = c__4679__auto___56351;
var G__56354 = cljs.core.count(c__4679__auto___56351);
var G__56355 = (0);
seq__56207_56310 = G__56352;
chunk__56208_56311 = G__56353;
count__56209_56312 = G__56354;
i__56210_56313 = G__56355;
continue;
} else {
var remote_56356 = cljs.core.first(seq__56207_56350__$1);
var send_queue_56357 = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.send_queue(app__$1,remote_56356);
var vec__56235_56358 = com.fulcrologic.fulcro.algorithms.tx_processing.extract_parallel(send_queue_56357);
var p_56359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56235_56358,(0),null);
var serial_56360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56235_56358,(1),null);
var front_56361 = cljs.core.first(serial_56360);
var seq__56238_56362 = cljs.core.seq(p_56359);
var chunk__56239_56363 = null;
var count__56240_56364 = (0);
var i__56241_56365 = (0);
while(true){
if((i__56241_56365 < count__56240_56364)){
var item_56381 = chunk__56239_56363.cljs$core$IIndexed$_nth$arity$2(null,i__56241_56365);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56238_56362,chunk__56239_56363,count__56240_56364,i__56241_56365,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56381,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_56381,remote_56356);
});})(seq__56238_56362,chunk__56239_56363,count__56240_56364,i__56241_56365,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56381,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations))
);


var G__56382 = seq__56238_56362;
var G__56383 = chunk__56239_56363;
var G__56384 = count__56240_56364;
var G__56385 = (i__56241_56365 + (1));
seq__56238_56362 = G__56382;
chunk__56239_56363 = G__56383;
count__56240_56364 = G__56384;
i__56241_56365 = G__56385;
continue;
} else {
var temp__5753__auto___56386__$1 = cljs.core.seq(seq__56238_56362);
if(temp__5753__auto___56386__$1){
var seq__56238_56387__$1 = temp__5753__auto___56386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56238_56387__$1)){
var c__4679__auto___56388 = cljs.core.chunk_first(seq__56238_56387__$1);
var G__56389 = cljs.core.chunk_rest(seq__56238_56387__$1);
var G__56390 = c__4679__auto___56388;
var G__56391 = cljs.core.count(c__4679__auto___56388);
var G__56392 = (0);
seq__56238_56362 = G__56389;
chunk__56239_56363 = G__56390;
count__56240_56364 = G__56391;
i__56241_56365 = G__56392;
continue;
} else {
var item_56393 = cljs.core.first(seq__56238_56387__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56238_56362,chunk__56239_56363,count__56240_56364,i__56241_56365,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56393,seq__56238_56387__$1,temp__5753__auto___56386__$1,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,item_56393,remote_56356);
});})(seq__56238_56362,chunk__56239_56363,count__56240_56364,i__56241_56365,seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,item_56393,seq__56238_56387__$1,temp__5753__auto___56386__$1,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations))
);


var G__56394 = cljs.core.next(seq__56238_56387__$1);
var G__56395 = null;
var G__56396 = (0);
var G__56397 = (0);
seq__56238_56362 = G__56394;
chunk__56239_56363 = G__56395;
count__56240_56364 = G__56396;
i__56241_56365 = G__56397;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active?","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active?",-132674601).cljs$core$IFn$_invoke$arity$1(front_56361))){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56356,serial_56360);
} else {
var map__56242_56398 = com.fulcrologic.fulcro.algorithms.tx_processing.combine_sends(app__$1,remote_56356,serial_56360);
var map__56242_56399__$1 = cljs.core.__destructure_map(map__56242_56398);
var send_queue_56400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242_56399__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-queue","com.fulcrologic.fulcro.algorithms.tx-processing/send-queue",-1602123421));
var send_node_56401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56242_56399__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","send-node","com.fulcrologic.fulcro.algorithms.tx-processing/send-node",1624648157));
if(cljs.core.truth_(send_node_56401)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(operations,cljs.core.conj,((function (seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,map__56242_56398,map__56242_56399__$1,send_queue_56400__$1,send_node_56401,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations){
return (function (){
return com.fulcrologic.fulcro.algorithms.tx_processing.net_send_BANG_(app__$1,send_node_56401,remote_56356);
});})(seq__56207_56310,chunk__56208_56311,count__56209_56312,i__56210_56313,map__56242_56398,map__56242_56399__$1,send_queue_56400__$1,send_node_56401,send_queue_56357,vec__56235_56358,p_56359,serial_56360,front_56361,remote_56356,seq__56207_56350__$1,temp__5753__auto___56349,remote_names,operations))
);
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_send_queue_BANG_(app__$1,remote_56356,send_queue_56400__$1);
}


var G__56402 = cljs.core.next(seq__56207_56350__$1);
var G__56403 = null;
var G__56404 = (0);
var G__56405 = (0);
seq__56207_56310 = G__56402;
chunk__56208_56311 = G__56403;
count__56209_56312 = G__56404;
i__56210_56313 = G__56405;
continue;
}
} else {
}
}
break;
}

var seq__56243 = cljs.core.seq(cljs.core.deref(operations));
var chunk__56244 = null;
var count__56245 = (0);
var i__56246 = (0);
while(true){
if((i__56246 < count__56245)){
var op = chunk__56244.cljs$core$IIndexed$_nth$arity$2(null,i__56246);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__56406 = seq__56243;
var G__56407 = chunk__56244;
var G__56408 = count__56245;
var G__56409 = (i__56246 + (1));
seq__56243 = G__56406;
chunk__56244 = G__56407;
count__56245 = G__56408;
i__56246 = G__56409;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56243);
if(temp__5753__auto__){
var seq__56243__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56243__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56243__$1);
var G__56410 = cljs.core.chunk_rest(seq__56243__$1);
var G__56411 = c__4679__auto__;
var G__56412 = cljs.core.count(c__4679__auto__);
var G__56413 = (0);
seq__56243 = G__56410;
chunk__56244 = G__56411;
count__56245 = G__56412;
i__56246 = G__56413;
continue;
} else {
var op = cljs.core.first(seq__56243__$1);
(op.cljs$core$IFn$_invoke$arity$0 ? op.cljs$core$IFn$_invoke$arity$0() : op.call(null));


var G__56414 = cljs.core.next(seq__56243__$1);
var G__56415 = null;
var G__56416 = (0);
var G__56417 = (0);
seq__56243 = G__56414;
chunk__56244 = G__56415;
count__56245 = G__56416;
i__56246 = G__56417;
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
 * Run through the active queue and do a processing step.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG_(p__56247){
var map__56248 = p__56247;
var map__56248__$1 = cljs.core.__destructure_map(map__56248);
var app__$1 = map__56248__$1;
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56248__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56248__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var old_queue = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1);
var new_queue = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$process_queue_BANG__$__STAR_pstep(new_queue,n){
var temp__5751__auto__ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_tx_node_BANG_(app__$1,n);
if(cljs.core.truth_(temp__5751__auto__)){
var new_node = temp__5751__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_queue,new_node);
} else {
return new_queue;
}
}),cljs.core.PersistentVector.EMPTY,old_queue);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var remotes = com.fulcrologic.fulcro.algorithms.tx_processing.app__GT_remote_names(app__$1);
var explicit_refresh = com.fulcrologic.fulcro.algorithms.tx_processing.requested_refreshes(app__$1,new_queue);
var remotes_active_QMARK_ = com.fulcrologic.fulcro.algorithms.tx_processing.active_remotes(new_queue,remotes);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_queue,com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.active_queue(app__$1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,325,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old queue changed! See https://book.fulcrologic.com/#err-stp-old-queue-chng"], null);
}),null)),null,-1551502055,null);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","active-remotes","com.fulcrologic.fulcro.application/active-remotes",873903005),remotes_active_QMARK_);

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_active_queue_BANG_(app__$1,new_queue);

if(cljs.core.seq(explicit_refresh)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime_atom,cljs.core.update,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([explicit_refresh], 0));
} else {
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_send_queues_BANG_(app__$1);

return null;
});
/**
 * Returns true if the submission queue has work on it that can proceed without any restrictions.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$available_work_QMARK_(app__$1){
var map__56249 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__56249__$1 = cljs.core.__destructure_map(map__56249);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,false);
return cljs.core.boolean$(cljs.core.seq(ready));
});
/**
 * Activate all of the transactions that have been submitted since the last activation. After the items are activated
 *   a single processing step will run for the active queue.
 * 
 *   Activation can be blocked by the tx-node options for things like waiting for the next render frame.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$activate_submissions_BANG_(app__$1){
var map__56251 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.boolean$,new cljs.core.Keyword(null,"after-render?","after-render?",595994030),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","options","com.fulcrologic.fulcro.algorithms.tx-processing/options",2016767420)),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submission_queue(app__$1));
var map__56251__$1 = cljs.core.__destructure_map(map__56251);
var blocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56251__$1,true);
var ready = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56251__$1,false);
var _ = com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.reset_submission_queue_BANG_(app__$1,cljs.core.vec(blocked));
var dispatched_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56250_SHARP_){
return com.fulcrologic.fulcro.algorithms.tx_processing.dispatch_elements(p1__56250_SHARP_,com.fulcrologic.fulcro.algorithms.tx_processing.build_env.cljs$core$IFn$_invoke$arity$2(app__$1,p1__56250_SHARP_),com.fulcrologic.fulcro.mutations.mutate);
}),ready);
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_active_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),dispatched_nodes], 0));

return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.process_queue_BANG_(app__$1);
});
/**
 * Runs the submission queue. If the submission queue's optimistic actions submit more to the submission queue, then those
 * are processed as well until the submission queue remains empty. This can start network requests.
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_all_immediate_work_BANG_(app__$1){
try{return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.activate_submissions_BANG_(app__$1);
}catch (e56252){var e = e56252;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing",null,358,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Error processing tx queue! See https://book.fulcrologic.com/#err-stp-err-processing-tx-q"], null);
}),null)),null,-1329993462,null);
}});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$run_queue_BANG_(app__$1,p__56253){
while(true){
var map__56254 = p__56253;
var map__56254__$1 = cljs.core.__destructure_map(map__56254);
var options = map__56254__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var synchronous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56254__$1,new cljs.core.Keyword(null,"synchronous?","synchronous?",1705588391));
while(true){
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_all_immediate_work_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
continue;
} else {
}
break;
}

if(cljs.core.truth_((function (){var and__4251__auto__ = synchronous_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return component;
} else {
return and__4251__auto__;
}
})())){
com.fulcrologic.fulcro.components.refresh_component_BANG_(component);
} else {
var temp__5753__auto___56418 = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render!","render!",-1848688504));
if(cljs.core.truth_(temp__5753__auto___56418)){
var render_BANG__56423 = temp__5753__auto___56418;
(render_BANG__56423.cljs$core$IFn$_invoke$arity$2 ? render_BANG__56423.cljs$core$IFn$_invoke$arity$2(app__$1,options) : render_BANG__56423.call(null,app__$1,options));
} else {
}
}

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.release_post_render_tasks_BANG_(app__$1);

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.available_work_QMARK_(app__$1)){
var G__56424 = app__$1;
var G__56425 = cljs.core.PersistentArrayMap.EMPTY;
app__$1 = G__56424;
p__56253 = G__56425;
continue;
} else {
return null;
}
break;
}
});
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$sync_tx_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56426 = arguments.length;
var i__4865__auto___56427 = (0);
while(true){
if((i__4865__auto___56427 < len__4864__auto___56426)){
args__4870__auto__.push((arguments[i__4865__auto___56427]));

var G__56428 = (i__4865__auto___56427 + (1));
i__4865__auto___56427 = G__56428;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("BREAKING CHANGE. Please use `with-synchronous-transaction` to add sync transaction support to your Fulcro app",cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.sync_tx_BANG_.cljs$lang$applyTo = (function (seq56255){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56255));
}));

com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_ = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$submit_sync_tx_BANG_(var_args){
var G__56258 = arguments.length;
switch (G__56258) {
case 2:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,tx){
return com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3(app__$1,tx,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (p__56259,tx,options){
var map__56260 = p__56259;
var map__56260__$1 = cljs.core.__destructure_map(map__56260);
var app__$1 = map__56260__$1;
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56260__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__56261 = options;
var map__56261__$1 = cljs.core.__destructure_map(map__56261);
var options__$1 = map__56261__$1;
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"only-refresh","only-refresh",548241249));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var follow_on_reads = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56256_SHARP_){
return (((p1__56256_SHARP_ instanceof cljs.core.Keyword)) || (edn_query_language.core.ident_QMARK_(p1__56256_SHARP_)));
}),tx));
var node = com.fulcrologic.fulcro.algorithms.tx_processing.tx_node.cljs$core$IFn$_invoke$arity$2(tx,options__$1);
var accumulate = (function (r,items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(r),items);
});
var refresh__$1 = (function (){var G__56262 = cljs.core.set(refresh);
var G__56262__$1 = ((cljs.core.seq(follow_on_reads))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56262,follow_on_reads):G__56262);
if(cljs.core.truth_(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56262__$1,ref);
} else {
return G__56262__$1;
}
})();
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.swap_submission_queue_BANG_.cljs$core$IFn$_invoke$arity$variadic(app__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),node], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(runtime_atom,(function (s){
var G__56263 = s;
var G__56263__$1 = ((cljs.core.seq(refresh__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56263,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829),accumulate,refresh__$1):G__56263);
if(cljs.core.seq(only_refresh)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56263__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206),accumulate,only_refresh);
} else {
return G__56263__$1;
}
}));

if(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.in_transaction_QMARK_(app__$1)){
} else {
var id__55920__auto___56430 = new cljs.core.Keyword("com.fulcrologic.fulcro.application","id","com.fulcrologic.fulcro.application/id",-2008968625).cljs$core$IFn$_invoke$arity$1(app__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto___56430,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));

try{com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.run_queue_BANG_(app__$1,options__$1);
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.apps_in_tx,cljs.core.update,id__55920__auto___56430,cljs.core.dec);
}}

return new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing","id","com.fulcrologic.fulcro.algorithms.tx-processing/id",1199810423).cljs$core$IFn$_invoke$arity$1(node);
}));

(com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * [app abort-id]
 * 
 * Implementation of abort when using this tx processing
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_ = com.fulcrologic.fulcro.algorithms.tx_processing.abort_BANG_;
/**
 * Installs synchronous transaction processing on a fulcro application.
 * 
 *   ```
 *   (defonce app (stx/with-synchronous-transactions
 *               (app/fulcro-app {...})))
 *   ```
 * 
 *   This plug-in attempts to do as much work as possible synchronously, including the processing of "remotes" that
 *   can behave synchronously. This processing system
 *   preserves transactional ordering semantics for nested submissions, but cannot guarantee that the overall sequence of
 *   operations will exactly match what you'd see if using the standard tx processing.
 * 
 *   The options map you can pass to `transact!` supports most of the same things as the standard tx processing, with the significant exception of
 *   `:optimistic? false` (pessimistic transactions). It also *always* assumes synchronous operation, thought the
 *   `synchronous?` option (if used) does imply that only the current component should be refreshed in the UI.
 * 
 *   - `:ref` - ident. The component ident to include in the transaction env.
 *   - `:component` - React element. The instance of the component that should appear in the transaction env.
 *   - `:synchronous?` - When true, causes the rendering to only refresh the calling component (if possible), since the implication
 *   is for fast-as-possible refresh semantics, even though this tx processing is already sync.
 *   - `:refresh` - A hint. Vector containing idents (of components) and keywords (of props). Things that have changed and should be re-rendered
 *  on screen. Only necessary when the underlying rendering algorithm won't auto-detect, such as when UI is derived from the
 *  state of other components or outside of the directly queried props. Interpretation depends on the renderer selected:
 *  The ident-optimized render treats these as "extras".
 *   - `:only-refresh` - A hint. Vector of idents/keywords.  If the underlying configured rendering algorithm supports it: The
 *  components using these are the *only* things that will be refreshed in the UI, and they may be refreshed immediately on
 *  `transact!`. This can be used to avoid the overhead of looking for stale data when you know exactly what
 *  you want to refresh on screen as an extra optimization. Idents are *not* checked against queries.
 * 
 *   If the `options` include `:ref` (which comp/transact! sets), then it will be auto-included on the `:refresh` list.
 * 
 *   Returns the transaction ID of the submitted transaction.
 *   
 */
com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.with_synchronous_transactions = (function com$fulcrologic$fulcro$algorithms$tx_processing$synchronous_tx_processing$with_synchronous_transactions(app__$1){
var remotes = cljs.core.keys(new cljs.core.Keyword("com.fulcrologic.fulcro.application","remotes","com.fulcrologic.fulcro.application/remotes",1823703517).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1))));
var send_queues = cljs.core.zipmap(remotes,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
})));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(app__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","tx!","com.fulcrologic.fulcro.algorithm/tx!",1081877133),com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.submit_sync_tx_BANG_,new cljs.core.Keyword("com.fulcrologic.fulcro.algorithm","abort!","com.fulcrologic.fulcro.algorithm/abort!",1698846123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.abort_BANG_], 0)),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","config","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/config",-1878584178),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","submission-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/submission-queue",-1259886916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","post-processing-steps","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/post-processing-steps",1202501796),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","active-queue","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/active-queue",-1020610588),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword("com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing","send-queues","com.fulcrologic.fulcro.algorithms.tx-processing.synchronous-tx-processing/send-queues",-727474733),send_queues], null));
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.tx_processing.synchronous_tx_processing.js.map
