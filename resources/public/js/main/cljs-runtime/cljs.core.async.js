goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47377 = arguments.length;
switch (G__47377) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47378 = (function (f,blockable,meta47379){
this.f = f;
this.blockable = blockable;
this.meta47379 = meta47379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47380,meta47379__$1){
var self__ = this;
var _47380__$1 = this;
return (new cljs.core.async.t_cljs$core$async47378(self__.f,self__.blockable,meta47379__$1));
}));

(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47380){
var self__ = this;
var _47380__$1 = this;
return self__.meta47379;
}));

(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47379","meta47379",-1696168122,null)], null);
}));

(cljs.core.async.t_cljs$core$async47378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47378");

(cljs.core.async.t_cljs$core$async47378.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47378.
 */
cljs.core.async.__GT_t_cljs$core$async47378 = (function cljs$core$async$__GT_t_cljs$core$async47378(f__$1,blockable__$1,meta47379){
return (new cljs.core.async.t_cljs$core$async47378(f__$1,blockable__$1,meta47379));
});

}

return (new cljs.core.async.t_cljs$core$async47378(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47383 = arguments.length;
switch (G__47383) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47385 = arguments.length;
switch (G__47385) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47387 = arguments.length;
switch (G__47387) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49077 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49077) : fn1.call(null,val_49077));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49077) : fn1.call(null,val_49077));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47389 = arguments.length;
switch (G__47389) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___49080 = n;
var x_49081 = (0);
while(true){
if((x_49081 < n__4741__auto___49080)){
(a[x_49081] = x_49081);

var G__49082 = (x_49081 + (1));
x_49081 = G__49082;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47390 = (function (flag,meta47391){
this.flag = flag;
this.meta47391 = meta47391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47392,meta47391__$1){
var self__ = this;
var _47392__$1 = this;
return (new cljs.core.async.t_cljs$core$async47390(self__.flag,meta47391__$1));
}));

(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47392){
var self__ = this;
var _47392__$1 = this;
return self__.meta47391;
}));

(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47391","meta47391",-1596838841,null)], null);
}));

(cljs.core.async.t_cljs$core$async47390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47390");

(cljs.core.async.t_cljs$core$async47390.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47390.
 */
cljs.core.async.__GT_t_cljs$core$async47390 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47390(flag__$1,meta47391){
return (new cljs.core.async.t_cljs$core$async47390(flag__$1,meta47391));
});

}

return (new cljs.core.async.t_cljs$core$async47390(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47393 = (function (flag,cb,meta47394){
this.flag = flag;
this.cb = cb;
this.meta47394 = meta47394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47395,meta47394__$1){
var self__ = this;
var _47395__$1 = this;
return (new cljs.core.async.t_cljs$core$async47393(self__.flag,self__.cb,meta47394__$1));
}));

(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47395){
var self__ = this;
var _47395__$1 = this;
return self__.meta47394;
}));

(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47394","meta47394",-1747870314,null)], null);
}));

(cljs.core.async.t_cljs$core$async47393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47393");

(cljs.core.async.t_cljs$core$async47393.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47393.
 */
cljs.core.async.__GT_t_cljs$core$async47393 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47393(flag__$1,cb__$1,meta47394){
return (new cljs.core.async.t_cljs$core$async47393(flag__$1,cb__$1,meta47394));
});

}

return (new cljs.core.async.t_cljs$core$async47393(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47396_SHARP_){
var G__47398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47396_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47398) : fret.call(null,G__47398));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47397_SHARP_){
var G__47399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47397_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47399) : fret.call(null,G__47399));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49083 = (i + (1));
i = G__49083;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49084 = arguments.length;
var i__4865__auto___49085 = (0);
while(true){
if((i__4865__auto___49085 < len__4864__auto___49084)){
args__4870__auto__.push((arguments[i__4865__auto___49085]));

var G__49086 = (i__4865__auto___49085 + (1));
i__4865__auto___49085 = G__49086;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47402){
var map__47403 = p__47402;
var map__47403__$1 = cljs.core.__destructure_map(map__47403);
var opts = map__47403__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47400){
var G__47401 = cljs.core.first(seq47400);
var seq47400__$1 = cljs.core.next(seq47400);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47401,seq47400__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47405 = arguments.length;
switch (G__47405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47319__auto___49095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47429){
var state_val_47430 = (state_47429[(1)]);
if((state_val_47430 === (7))){
var inst_47425 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
var statearr_47431_49097 = state_47429__$1;
(statearr_47431_49097[(2)] = inst_47425);

(statearr_47431_49097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (1))){
var state_47429__$1 = state_47429;
var statearr_47432_49098 = state_47429__$1;
(statearr_47432_49098[(2)] = null);

(statearr_47432_49098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (4))){
var inst_47408 = (state_47429[(7)]);
var inst_47408__$1 = (state_47429[(2)]);
var inst_47409 = (inst_47408__$1 == null);
var state_47429__$1 = (function (){var statearr_47433 = state_47429;
(statearr_47433[(7)] = inst_47408__$1);

return statearr_47433;
})();
if(cljs.core.truth_(inst_47409)){
var statearr_47434_49099 = state_47429__$1;
(statearr_47434_49099[(1)] = (5));

} else {
var statearr_47435_49100 = state_47429__$1;
(statearr_47435_49100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (13))){
var state_47429__$1 = state_47429;
var statearr_47446_49101 = state_47429__$1;
(statearr_47446_49101[(2)] = null);

(statearr_47446_49101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (6))){
var inst_47408 = (state_47429[(7)]);
var state_47429__$1 = state_47429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47429__$1,(11),to,inst_47408);
} else {
if((state_val_47430 === (3))){
var inst_47427 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47429__$1,inst_47427);
} else {
if((state_val_47430 === (12))){
var state_47429__$1 = state_47429;
var statearr_47447_49102 = state_47429__$1;
(statearr_47447_49102[(2)] = null);

(statearr_47447_49102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (2))){
var state_47429__$1 = state_47429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47429__$1,(4),from);
} else {
if((state_val_47430 === (11))){
var inst_47418 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
if(cljs.core.truth_(inst_47418)){
var statearr_47448_49103 = state_47429__$1;
(statearr_47448_49103[(1)] = (12));

} else {
var statearr_47449_49104 = state_47429__$1;
(statearr_47449_49104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (9))){
var state_47429__$1 = state_47429;
var statearr_47450_49105 = state_47429__$1;
(statearr_47450_49105[(2)] = null);

(statearr_47450_49105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (5))){
var state_47429__$1 = state_47429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47451_49106 = state_47429__$1;
(statearr_47451_49106[(1)] = (8));

} else {
var statearr_47452_49107 = state_47429__$1;
(statearr_47452_49107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (14))){
var inst_47423 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
var statearr_47453_49108 = state_47429__$1;
(statearr_47453_49108[(2)] = inst_47423);

(statearr_47453_49108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (10))){
var inst_47415 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
var statearr_47454_49109 = state_47429__$1;
(statearr_47454_49109[(2)] = inst_47415);

(statearr_47454_49109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (8))){
var inst_47412 = cljs.core.async.close_BANG_(to);
var state_47429__$1 = state_47429;
var statearr_47455_49110 = state_47429__$1;
(statearr_47455_49110[(2)] = inst_47412);

(statearr_47455_49110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_47456 = [null,null,null,null,null,null,null,null];
(statearr_47456[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_47456[(1)] = (1));

return statearr_47456;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_47429){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47429);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47457){var ex__47287__auto__ = e47457;
var statearr_47458_49111 = state_47429;
(statearr_47458_49111[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47429[(4)]))){
var statearr_47459_49112 = state_47429;
(statearr_47459_49112[(1)] = cljs.core.first((state_47429[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49113 = state_47429;
state_47429 = G__49113;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_47429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_47429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47464 = f__47320__auto__();
(statearr_47464[(6)] = c__47319__auto___49095);

return statearr_47464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47465){
var vec__47466 = p__47465;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47466,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47466,(1),null);
var job = vec__47466;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47319__auto___49114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47473){
var state_val_47474 = (state_47473[(1)]);
if((state_val_47474 === (1))){
var state_47473__$1 = state_47473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47473__$1,(2),res,v);
} else {
if((state_val_47474 === (2))){
var inst_47470 = (state_47473[(2)]);
var inst_47471 = cljs.core.async.close_BANG_(res);
var state_47473__$1 = (function (){var statearr_47480 = state_47473;
(statearr_47480[(7)] = inst_47470);

return statearr_47480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47473__$1,inst_47471);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_47482 = [null,null,null,null,null,null,null,null];
(statearr_47482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__);

(statearr_47482[(1)] = (1));

return statearr_47482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1 = (function (state_47473){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47473);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47483){var ex__47287__auto__ = e47483;
var statearr_47484_49115 = state_47473;
(statearr_47484_49115[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47473[(4)]))){
var statearr_47485_49116 = state_47473;
(statearr_47485_49116[(1)] = cljs.core.first((state_47473[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49117 = state_47473;
state_47473 = G__49117;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = function(state_47473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1.call(this,state_47473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47487 = f__47320__auto__();
(statearr_47487[(6)] = c__47319__auto___49114);

return statearr_47487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47488){
var vec__47490 = p__47488;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47490,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47490,(1),null);
var job = vec__47490;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___49118 = n;
var __49120 = (0);
while(true){
if((__49120 < n__4741__auto___49118)){
var G__47496_49121 = type;
var G__47496_49122__$1 = (((G__47496_49121 instanceof cljs.core.Keyword))?G__47496_49121.fqn:null);
switch (G__47496_49122__$1) {
case "compute":
var c__47319__auto___49124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49120,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = ((function (__49120,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function (state_47509){
var state_val_47510 = (state_47509[(1)]);
if((state_val_47510 === (1))){
var state_47509__$1 = state_47509;
var statearr_47511_49125 = state_47509__$1;
(statearr_47511_49125[(2)] = null);

(statearr_47511_49125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (2))){
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47509__$1,(4),jobs);
} else {
if((state_val_47510 === (3))){
var inst_47507 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47509__$1,inst_47507);
} else {
if((state_val_47510 === (4))){
var inst_47499 = (state_47509[(2)]);
var inst_47500 = process(inst_47499);
var state_47509__$1 = state_47509;
if(cljs.core.truth_(inst_47500)){
var statearr_47512_49126 = state_47509__$1;
(statearr_47512_49126[(1)] = (5));

} else {
var statearr_47513_49127 = state_47509__$1;
(statearr_47513_49127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (5))){
var state_47509__$1 = state_47509;
var statearr_47514_49128 = state_47509__$1;
(statearr_47514_49128[(2)] = null);

(statearr_47514_49128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (6))){
var state_47509__$1 = state_47509;
var statearr_47515_49129 = state_47509__$1;
(statearr_47515_49129[(2)] = null);

(statearr_47515_49129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (7))){
var inst_47505 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47516_49130 = state_47509__$1;
(statearr_47516_49130[(2)] = inst_47505);

(statearr_47516_49130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49120,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
;
return ((function (__49120,switch__47283__auto__,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_47517 = [null,null,null,null,null,null,null];
(statearr_47517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__);

(statearr_47517[(1)] = (1));

return statearr_47517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1 = (function (state_47509){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47509);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47518){var ex__47287__auto__ = e47518;
var statearr_47519_49131 = state_47509;
(statearr_47519_49131[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47509[(4)]))){
var statearr_47520_49132 = state_47509;
(statearr_47520_49132[(1)] = cljs.core.first((state_47509[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49133 = state_47509;
state_47509 = G__49133;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = function(state_47509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1.call(this,state_47509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__;
})()
;})(__49120,switch__47283__auto__,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
})();
var state__47321__auto__ = (function (){var statearr_47521 = f__47320__auto__();
(statearr_47521[(6)] = c__47319__auto___49124);

return statearr_47521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
});})(__49120,c__47319__auto___49124,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
);


break;
case "async":
var c__47319__auto___49134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49120,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = ((function (__49120,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function (state_47535){
var state_val_47536 = (state_47535[(1)]);
if((state_val_47536 === (1))){
var state_47535__$1 = state_47535;
var statearr_47540_49135 = state_47535__$1;
(statearr_47540_49135[(2)] = null);

(statearr_47540_49135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47536 === (2))){
var state_47535__$1 = state_47535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47535__$1,(4),jobs);
} else {
if((state_val_47536 === (3))){
var inst_47533 = (state_47535[(2)]);
var state_47535__$1 = state_47535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47535__$1,inst_47533);
} else {
if((state_val_47536 === (4))){
var inst_47524 = (state_47535[(2)]);
var inst_47526 = async(inst_47524);
var state_47535__$1 = state_47535;
if(cljs.core.truth_(inst_47526)){
var statearr_47542_49136 = state_47535__$1;
(statearr_47542_49136[(1)] = (5));

} else {
var statearr_47543_49137 = state_47535__$1;
(statearr_47543_49137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47536 === (5))){
var state_47535__$1 = state_47535;
var statearr_47544_49138 = state_47535__$1;
(statearr_47544_49138[(2)] = null);

(statearr_47544_49138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47536 === (6))){
var state_47535__$1 = state_47535;
var statearr_47545_49139 = state_47535__$1;
(statearr_47545_49139[(2)] = null);

(statearr_47545_49139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47536 === (7))){
var inst_47531 = (state_47535[(2)]);
var state_47535__$1 = state_47535;
var statearr_47546_49146 = state_47535__$1;
(statearr_47546_49146[(2)] = inst_47531);

(statearr_47546_49146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49120,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
;
return ((function (__49120,switch__47283__auto__,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_47547 = [null,null,null,null,null,null,null];
(statearr_47547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__);

(statearr_47547[(1)] = (1));

return statearr_47547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1 = (function (state_47535){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47535);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47548){var ex__47287__auto__ = e47548;
var statearr_47549_49147 = state_47535;
(statearr_47549_49147[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47535[(4)]))){
var statearr_47550_49148 = state_47535;
(statearr_47550_49148[(1)] = cljs.core.first((state_47535[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49149 = state_47535;
state_47535 = G__49149;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = function(state_47535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1.call(this,state_47535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__;
})()
;})(__49120,switch__47283__auto__,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
})();
var state__47321__auto__ = (function (){var statearr_47551 = f__47320__auto__();
(statearr_47551[(6)] = c__47319__auto___49134);

return statearr_47551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
});})(__49120,c__47319__auto___49134,G__47496_49121,G__47496_49122__$1,n__4741__auto___49118,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47496_49122__$1)].join('')));

}

var G__49150 = (__49120 + (1));
__49120 = G__49150;
continue;
} else {
}
break;
}

var c__47319__auto___49151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47573){
var state_val_47574 = (state_47573[(1)]);
if((state_val_47574 === (7))){
var inst_47569 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47575_49152 = state_47573__$1;
(statearr_47575_49152[(2)] = inst_47569);

(statearr_47575_49152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (1))){
var state_47573__$1 = state_47573;
var statearr_47576_49153 = state_47573__$1;
(statearr_47576_49153[(2)] = null);

(statearr_47576_49153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (4))){
var inst_47554 = (state_47573[(7)]);
var inst_47554__$1 = (state_47573[(2)]);
var inst_47555 = (inst_47554__$1 == null);
var state_47573__$1 = (function (){var statearr_47577 = state_47573;
(statearr_47577[(7)] = inst_47554__$1);

return statearr_47577;
})();
if(cljs.core.truth_(inst_47555)){
var statearr_47578_49154 = state_47573__$1;
(statearr_47578_49154[(1)] = (5));

} else {
var statearr_47579_49155 = state_47573__$1;
(statearr_47579_49155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (6))){
var inst_47554 = (state_47573[(7)]);
var inst_47559 = (state_47573[(8)]);
var inst_47559__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47560 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47561 = [inst_47554,inst_47559__$1];
var inst_47562 = (new cljs.core.PersistentVector(null,2,(5),inst_47560,inst_47561,null));
var state_47573__$1 = (function (){var statearr_47580 = state_47573;
(statearr_47580[(8)] = inst_47559__$1);

return statearr_47580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47573__$1,(8),jobs,inst_47562);
} else {
if((state_val_47574 === (3))){
var inst_47571 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47573__$1,inst_47571);
} else {
if((state_val_47574 === (2))){
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47573__$1,(4),from);
} else {
if((state_val_47574 === (9))){
var inst_47566 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47581 = state_47573;
(statearr_47581[(9)] = inst_47566);

return statearr_47581;
})();
var statearr_47582_49156 = state_47573__$1;
(statearr_47582_49156[(2)] = null);

(statearr_47582_49156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (5))){
var inst_47557 = cljs.core.async.close_BANG_(jobs);
var state_47573__$1 = state_47573;
var statearr_47583_49157 = state_47573__$1;
(statearr_47583_49157[(2)] = inst_47557);

(statearr_47583_49157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (8))){
var inst_47559 = (state_47573[(8)]);
var inst_47564 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47584 = state_47573;
(statearr_47584[(10)] = inst_47564);

return statearr_47584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47573__$1,(9),results,inst_47559);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_47585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__);

(statearr_47585[(1)] = (1));

return statearr_47585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1 = (function (state_47573){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47573);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47600){var ex__47287__auto__ = e47600;
var statearr_47601_49158 = state_47573;
(statearr_47601_49158[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47573[(4)]))){
var statearr_47602_49159 = state_47573;
(statearr_47602_49159[(1)] = cljs.core.first((state_47573[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49160 = state_47573;
state_47573 = G__49160;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = function(state_47573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1.call(this,state_47573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47603 = f__47320__auto__();
(statearr_47603[(6)] = c__47319__auto___49151);

return statearr_47603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47641){
var state_val_47642 = (state_47641[(1)]);
if((state_val_47642 === (7))){
var inst_47637 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47643_49161 = state_47641__$1;
(statearr_47643_49161[(2)] = inst_47637);

(statearr_47643_49161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (20))){
var state_47641__$1 = state_47641;
var statearr_47644_49162 = state_47641__$1;
(statearr_47644_49162[(2)] = null);

(statearr_47644_49162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (1))){
var state_47641__$1 = state_47641;
var statearr_47645_49163 = state_47641__$1;
(statearr_47645_49163[(2)] = null);

(statearr_47645_49163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (4))){
var inst_47606 = (state_47641[(7)]);
var inst_47606__$1 = (state_47641[(2)]);
var inst_47607 = (inst_47606__$1 == null);
var state_47641__$1 = (function (){var statearr_47649 = state_47641;
(statearr_47649[(7)] = inst_47606__$1);

return statearr_47649;
})();
if(cljs.core.truth_(inst_47607)){
var statearr_47650_49164 = state_47641__$1;
(statearr_47650_49164[(1)] = (5));

} else {
var statearr_47651_49167 = state_47641__$1;
(statearr_47651_49167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (15))){
var inst_47619 = (state_47641[(8)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47641__$1,(18),to,inst_47619);
} else {
if((state_val_47642 === (21))){
var inst_47632 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47652_49168 = state_47641__$1;
(statearr_47652_49168[(2)] = inst_47632);

(statearr_47652_49168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (13))){
var inst_47634 = (state_47641[(2)]);
var state_47641__$1 = (function (){var statearr_47653 = state_47641;
(statearr_47653[(9)] = inst_47634);

return statearr_47653;
})();
var statearr_47654_49170 = state_47641__$1;
(statearr_47654_49170[(2)] = null);

(statearr_47654_49170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (6))){
var inst_47606 = (state_47641[(7)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47641__$1,(11),inst_47606);
} else {
if((state_val_47642 === (17))){
var inst_47627 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
if(cljs.core.truth_(inst_47627)){
var statearr_47655_49171 = state_47641__$1;
(statearr_47655_49171[(1)] = (19));

} else {
var statearr_47656_49172 = state_47641__$1;
(statearr_47656_49172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (3))){
var inst_47639 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47641__$1,inst_47639);
} else {
if((state_val_47642 === (12))){
var inst_47616 = (state_47641[(10)]);
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47641__$1,(14),inst_47616);
} else {
if((state_val_47642 === (2))){
var state_47641__$1 = state_47641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47641__$1,(4),results);
} else {
if((state_val_47642 === (19))){
var state_47641__$1 = state_47641;
var statearr_47657_49173 = state_47641__$1;
(statearr_47657_49173[(2)] = null);

(statearr_47657_49173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (11))){
var inst_47616 = (state_47641[(2)]);
var state_47641__$1 = (function (){var statearr_47658 = state_47641;
(statearr_47658[(10)] = inst_47616);

return statearr_47658;
})();
var statearr_47659_49174 = state_47641__$1;
(statearr_47659_49174[(2)] = null);

(statearr_47659_49174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (9))){
var state_47641__$1 = state_47641;
var statearr_47681_49175 = state_47641__$1;
(statearr_47681_49175[(2)] = null);

(statearr_47681_49175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (5))){
var state_47641__$1 = state_47641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47682_49176 = state_47641__$1;
(statearr_47682_49176[(1)] = (8));

} else {
var statearr_47683_49177 = state_47641__$1;
(statearr_47683_49177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (14))){
var inst_47621 = (state_47641[(11)]);
var inst_47619 = (state_47641[(8)]);
var inst_47619__$1 = (state_47641[(2)]);
var inst_47620 = (inst_47619__$1 == null);
var inst_47621__$1 = cljs.core.not(inst_47620);
var state_47641__$1 = (function (){var statearr_47684 = state_47641;
(statearr_47684[(11)] = inst_47621__$1);

(statearr_47684[(8)] = inst_47619__$1);

return statearr_47684;
})();
if(inst_47621__$1){
var statearr_47685_49178 = state_47641__$1;
(statearr_47685_49178[(1)] = (15));

} else {
var statearr_47686_49179 = state_47641__$1;
(statearr_47686_49179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (16))){
var inst_47621 = (state_47641[(11)]);
var state_47641__$1 = state_47641;
var statearr_47687_49180 = state_47641__$1;
(statearr_47687_49180[(2)] = inst_47621);

(statearr_47687_49180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (10))){
var inst_47613 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47688_49181 = state_47641__$1;
(statearr_47688_49181[(2)] = inst_47613);

(statearr_47688_49181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (18))){
var inst_47624 = (state_47641[(2)]);
var state_47641__$1 = state_47641;
var statearr_47689_49182 = state_47641__$1;
(statearr_47689_49182[(2)] = inst_47624);

(statearr_47689_49182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47642 === (8))){
var inst_47610 = cljs.core.async.close_BANG_(to);
var state_47641__$1 = state_47641;
var statearr_47690_49183 = state_47641__$1;
(statearr_47690_49183[(2)] = inst_47610);

(statearr_47690_49183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_47691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__);

(statearr_47691[(1)] = (1));

return statearr_47691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1 = (function (state_47641){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47641);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47692){var ex__47287__auto__ = e47692;
var statearr_47693_49184 = state_47641;
(statearr_47693_49184[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47641[(4)]))){
var statearr_47694_49185 = state_47641;
(statearr_47694_49185[(1)] = cljs.core.first((state_47641[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49186 = state_47641;
state_47641 = G__49186;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__ = function(state_47641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1.call(this,state_47641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47723 = f__47320__auto__();
(statearr_47723[(6)] = c__47319__auto__);

return statearr_47723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47725 = arguments.length;
switch (G__47725) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47727 = arguments.length;
switch (G__47727) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47733 = arguments.length;
switch (G__47733) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47319__auto___49200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47759){
var state_val_47760 = (state_47759[(1)]);
if((state_val_47760 === (7))){
var inst_47755 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
var statearr_47761_49201 = state_47759__$1;
(statearr_47761_49201[(2)] = inst_47755);

(statearr_47761_49201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (1))){
var state_47759__$1 = state_47759;
var statearr_47762_49202 = state_47759__$1;
(statearr_47762_49202[(2)] = null);

(statearr_47762_49202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (4))){
var inst_47736 = (state_47759[(7)]);
var inst_47736__$1 = (state_47759[(2)]);
var inst_47737 = (inst_47736__$1 == null);
var state_47759__$1 = (function (){var statearr_47763 = state_47759;
(statearr_47763[(7)] = inst_47736__$1);

return statearr_47763;
})();
if(cljs.core.truth_(inst_47737)){
var statearr_47767_49203 = state_47759__$1;
(statearr_47767_49203[(1)] = (5));

} else {
var statearr_47768_49204 = state_47759__$1;
(statearr_47768_49204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (13))){
var state_47759__$1 = state_47759;
var statearr_47769_49205 = state_47759__$1;
(statearr_47769_49205[(2)] = null);

(statearr_47769_49205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (6))){
var inst_47736 = (state_47759[(7)]);
var inst_47742 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47736) : p.call(null,inst_47736));
var state_47759__$1 = state_47759;
if(cljs.core.truth_(inst_47742)){
var statearr_47770_49206 = state_47759__$1;
(statearr_47770_49206[(1)] = (9));

} else {
var statearr_47771_49207 = state_47759__$1;
(statearr_47771_49207[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (3))){
var inst_47757 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47759__$1,inst_47757);
} else {
if((state_val_47760 === (12))){
var state_47759__$1 = state_47759;
var statearr_47772_49208 = state_47759__$1;
(statearr_47772_49208[(2)] = null);

(statearr_47772_49208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (2))){
var state_47759__$1 = state_47759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47759__$1,(4),ch);
} else {
if((state_val_47760 === (11))){
var inst_47736 = (state_47759[(7)]);
var inst_47746 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47759__$1,(8),inst_47746,inst_47736);
} else {
if((state_val_47760 === (9))){
var state_47759__$1 = state_47759;
var statearr_47773_49209 = state_47759__$1;
(statearr_47773_49209[(2)] = tc);

(statearr_47773_49209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (5))){
var inst_47739 = cljs.core.async.close_BANG_(tc);
var inst_47740 = cljs.core.async.close_BANG_(fc);
var state_47759__$1 = (function (){var statearr_47774 = state_47759;
(statearr_47774[(8)] = inst_47739);

return statearr_47774;
})();
var statearr_47775_49210 = state_47759__$1;
(statearr_47775_49210[(2)] = inst_47740);

(statearr_47775_49210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (14))){
var inst_47753 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
var statearr_47776_49211 = state_47759__$1;
(statearr_47776_49211[(2)] = inst_47753);

(statearr_47776_49211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (10))){
var state_47759__$1 = state_47759;
var statearr_47777_49212 = state_47759__$1;
(statearr_47777_49212[(2)] = fc);

(statearr_47777_49212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47760 === (8))){
var inst_47748 = (state_47759[(2)]);
var state_47759__$1 = state_47759;
if(cljs.core.truth_(inst_47748)){
var statearr_47778_49213 = state_47759__$1;
(statearr_47778_49213[(1)] = (12));

} else {
var statearr_47779_49214 = state_47759__$1;
(statearr_47779_49214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_47780 = [null,null,null,null,null,null,null,null,null];
(statearr_47780[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_47780[(1)] = (1));

return statearr_47780;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_47759){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47759);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47781){var ex__47287__auto__ = e47781;
var statearr_47782_49215 = state_47759;
(statearr_47782_49215[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47759[(4)]))){
var statearr_47783_49216 = state_47759;
(statearr_47783_49216[(1)] = cljs.core.first((state_47759[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49217 = state_47759;
state_47759 = G__49217;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_47759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_47759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47784 = f__47320__auto__();
(statearr_47784[(6)] = c__47319__auto___49200);

return statearr_47784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47806){
var state_val_47807 = (state_47806[(1)]);
if((state_val_47807 === (7))){
var inst_47802 = (state_47806[(2)]);
var state_47806__$1 = state_47806;
var statearr_47808_49218 = state_47806__$1;
(statearr_47808_49218[(2)] = inst_47802);

(statearr_47808_49218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (1))){
var inst_47785 = init;
var inst_47786 = inst_47785;
var state_47806__$1 = (function (){var statearr_47809 = state_47806;
(statearr_47809[(7)] = inst_47786);

return statearr_47809;
})();
var statearr_47810_49219 = state_47806__$1;
(statearr_47810_49219[(2)] = null);

(statearr_47810_49219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (4))){
var inst_47789 = (state_47806[(8)]);
var inst_47789__$1 = (state_47806[(2)]);
var inst_47790 = (inst_47789__$1 == null);
var state_47806__$1 = (function (){var statearr_47819 = state_47806;
(statearr_47819[(8)] = inst_47789__$1);

return statearr_47819;
})();
if(cljs.core.truth_(inst_47790)){
var statearr_47820_49220 = state_47806__$1;
(statearr_47820_49220[(1)] = (5));

} else {
var statearr_47821_49221 = state_47806__$1;
(statearr_47821_49221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (6))){
var inst_47786 = (state_47806[(7)]);
var inst_47789 = (state_47806[(8)]);
var inst_47793 = (state_47806[(9)]);
var inst_47793__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47786,inst_47789) : f.call(null,inst_47786,inst_47789));
var inst_47794 = cljs.core.reduced_QMARK_(inst_47793__$1);
var state_47806__$1 = (function (){var statearr_47822 = state_47806;
(statearr_47822[(9)] = inst_47793__$1);

return statearr_47822;
})();
if(inst_47794){
var statearr_47823_49222 = state_47806__$1;
(statearr_47823_49222[(1)] = (8));

} else {
var statearr_47824_49223 = state_47806__$1;
(statearr_47824_49223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (3))){
var inst_47804 = (state_47806[(2)]);
var state_47806__$1 = state_47806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47806__$1,inst_47804);
} else {
if((state_val_47807 === (2))){
var state_47806__$1 = state_47806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47806__$1,(4),ch);
} else {
if((state_val_47807 === (9))){
var inst_47793 = (state_47806[(9)]);
var inst_47786 = inst_47793;
var state_47806__$1 = (function (){var statearr_47825 = state_47806;
(statearr_47825[(7)] = inst_47786);

return statearr_47825;
})();
var statearr_47826_49224 = state_47806__$1;
(statearr_47826_49224[(2)] = null);

(statearr_47826_49224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (5))){
var inst_47786 = (state_47806[(7)]);
var state_47806__$1 = state_47806;
var statearr_47827_49225 = state_47806__$1;
(statearr_47827_49225[(2)] = inst_47786);

(statearr_47827_49225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (10))){
var inst_47800 = (state_47806[(2)]);
var state_47806__$1 = state_47806;
var statearr_47828_49226 = state_47806__$1;
(statearr_47828_49226[(2)] = inst_47800);

(statearr_47828_49226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47807 === (8))){
var inst_47793 = (state_47806[(9)]);
var inst_47796 = cljs.core.deref(inst_47793);
var state_47806__$1 = state_47806;
var statearr_47829_49227 = state_47806__$1;
(statearr_47829_49227[(2)] = inst_47796);

(statearr_47829_49227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47284__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47284__auto____0 = (function (){
var statearr_47830 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47830[(0)] = cljs$core$async$reduce_$_state_machine__47284__auto__);

(statearr_47830[(1)] = (1));

return statearr_47830;
});
var cljs$core$async$reduce_$_state_machine__47284__auto____1 = (function (state_47806){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47806);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47831){var ex__47287__auto__ = e47831;
var statearr_47832_49228 = state_47806;
(statearr_47832_49228[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47806[(4)]))){
var statearr_47833_49229 = state_47806;
(statearr_47833_49229[(1)] = cljs.core.first((state_47806[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49230 = state_47806;
state_47806 = G__49230;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47284__auto__ = function(state_47806){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47284__auto____1.call(this,state_47806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47284__auto____0;
cljs$core$async$reduce_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47284__auto____1;
return cljs$core$async$reduce_$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47834 = f__47320__auto__();
(statearr_47834[(6)] = c__47319__auto__);

return statearr_47834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47840){
var state_val_47841 = (state_47840[(1)]);
if((state_val_47841 === (1))){
var inst_47835 = cljs.core.async.reduce(f__$1,init,ch);
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47840__$1,(2),inst_47835);
} else {
if((state_val_47841 === (2))){
var inst_47837 = (state_47840[(2)]);
var inst_47838 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47837) : f__$1.call(null,inst_47837));
var state_47840__$1 = state_47840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47840__$1,inst_47838);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47284__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47284__auto____0 = (function (){
var statearr_47842 = [null,null,null,null,null,null,null];
(statearr_47842[(0)] = cljs$core$async$transduce_$_state_machine__47284__auto__);

(statearr_47842[(1)] = (1));

return statearr_47842;
});
var cljs$core$async$transduce_$_state_machine__47284__auto____1 = (function (state_47840){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47840);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47843){var ex__47287__auto__ = e47843;
var statearr_47844_49252 = state_47840;
(statearr_47844_49252[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47840[(4)]))){
var statearr_47845_49253 = state_47840;
(statearr_47845_49253[(1)] = cljs.core.first((state_47840[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49254 = state_47840;
state_47840 = G__49254;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47284__auto__ = function(state_47840){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47284__auto____1.call(this,state_47840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47284__auto____0;
cljs$core$async$transduce_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47284__auto____1;
return cljs$core$async$transduce_$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47846 = f__47320__auto__();
(statearr_47846[(6)] = c__47319__auto__);

return statearr_47846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47848 = arguments.length;
switch (G__47848) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_47873){
var state_val_47874 = (state_47873[(1)]);
if((state_val_47874 === (7))){
var inst_47855 = (state_47873[(2)]);
var state_47873__$1 = state_47873;
var statearr_47875_49256 = state_47873__$1;
(statearr_47875_49256[(2)] = inst_47855);

(statearr_47875_49256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (1))){
var inst_47849 = cljs.core.seq(coll);
var inst_47850 = inst_47849;
var state_47873__$1 = (function (){var statearr_47876 = state_47873;
(statearr_47876[(7)] = inst_47850);

return statearr_47876;
})();
var statearr_47877_49257 = state_47873__$1;
(statearr_47877_49257[(2)] = null);

(statearr_47877_49257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (4))){
var inst_47850 = (state_47873[(7)]);
var inst_47853 = cljs.core.first(inst_47850);
var state_47873__$1 = state_47873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47873__$1,(7),ch,inst_47853);
} else {
if((state_val_47874 === (13))){
var inst_47867 = (state_47873[(2)]);
var state_47873__$1 = state_47873;
var statearr_47878_49260 = state_47873__$1;
(statearr_47878_49260[(2)] = inst_47867);

(statearr_47878_49260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (6))){
var inst_47858 = (state_47873[(2)]);
var state_47873__$1 = state_47873;
if(cljs.core.truth_(inst_47858)){
var statearr_47879_49261 = state_47873__$1;
(statearr_47879_49261[(1)] = (8));

} else {
var statearr_47880_49262 = state_47873__$1;
(statearr_47880_49262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (3))){
var inst_47871 = (state_47873[(2)]);
var state_47873__$1 = state_47873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47873__$1,inst_47871);
} else {
if((state_val_47874 === (12))){
var state_47873__$1 = state_47873;
var statearr_47881_49265 = state_47873__$1;
(statearr_47881_49265[(2)] = null);

(statearr_47881_49265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (2))){
var inst_47850 = (state_47873[(7)]);
var state_47873__$1 = state_47873;
if(cljs.core.truth_(inst_47850)){
var statearr_47882_49266 = state_47873__$1;
(statearr_47882_49266[(1)] = (4));

} else {
var statearr_47883_49267 = state_47873__$1;
(statearr_47883_49267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (11))){
var inst_47864 = cljs.core.async.close_BANG_(ch);
var state_47873__$1 = state_47873;
var statearr_47884_49268 = state_47873__$1;
(statearr_47884_49268[(2)] = inst_47864);

(statearr_47884_49268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (9))){
var state_47873__$1 = state_47873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47885_49269 = state_47873__$1;
(statearr_47885_49269[(1)] = (11));

} else {
var statearr_47886_49270 = state_47873__$1;
(statearr_47886_49270[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (5))){
var inst_47850 = (state_47873[(7)]);
var state_47873__$1 = state_47873;
var statearr_47887_49271 = state_47873__$1;
(statearr_47887_49271[(2)] = inst_47850);

(statearr_47887_49271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (10))){
var inst_47869 = (state_47873[(2)]);
var state_47873__$1 = state_47873;
var statearr_47888_49273 = state_47873__$1;
(statearr_47888_49273[(2)] = inst_47869);

(statearr_47888_49273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47874 === (8))){
var inst_47850 = (state_47873[(7)]);
var inst_47860 = cljs.core.next(inst_47850);
var inst_47850__$1 = inst_47860;
var state_47873__$1 = (function (){var statearr_47889 = state_47873;
(statearr_47889[(7)] = inst_47850__$1);

return statearr_47889;
})();
var statearr_47890_49274 = state_47873__$1;
(statearr_47890_49274[(2)] = null);

(statearr_47890_49274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_47891 = [null,null,null,null,null,null,null,null];
(statearr_47891[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_47891[(1)] = (1));

return statearr_47891;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_47873){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_47873);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e47892){var ex__47287__auto__ = e47892;
var statearr_47893_49275 = state_47873;
(statearr_47893_49275[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_47873[(4)]))){
var statearr_47894_49276 = state_47873;
(statearr_47894_49276[(1)] = cljs.core.first((state_47873[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49277 = state_47873;
state_47873 = G__49277;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_47873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_47873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_47895 = f__47320__auto__();
(statearr_47895[(6)] = c__47319__auto__);

return statearr_47895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47897 = arguments.length;
switch (G__47897) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_49279 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49279(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49280 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49280(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49281 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49281(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49282 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49282(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47898 = (function (ch,cs,meta47899){
this.ch = ch;
this.cs = cs;
this.meta47899 = meta47899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47900,meta47899__$1){
var self__ = this;
var _47900__$1 = this;
return (new cljs.core.async.t_cljs$core$async47898(self__.ch,self__.cs,meta47899__$1));
}));

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47900){
var self__ = this;
var _47900__$1 = this;
return self__.meta47899;
}));

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47899","meta47899",1068952001,null)], null);
}));

(cljs.core.async.t_cljs$core$async47898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47898");

(cljs.core.async.t_cljs$core$async47898.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47898.
 */
cljs.core.async.__GT_t_cljs$core$async47898 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47898(ch__$1,cs__$1,meta47899){
return (new cljs.core.async.t_cljs$core$async47898(ch__$1,cs__$1,meta47899));
});

}

return (new cljs.core.async.t_cljs$core$async47898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47319__auto___49286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48038){
var state_val_48039 = (state_48038[(1)]);
if((state_val_48039 === (7))){
var inst_48034 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48040_49287 = state_48038__$1;
(statearr_48040_49287[(2)] = inst_48034);

(statearr_48040_49287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (20))){
var inst_47939 = (state_48038[(7)]);
var inst_47951 = cljs.core.first(inst_47939);
var inst_47952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47951,(0),null);
var inst_47953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47951,(1),null);
var state_48038__$1 = (function (){var statearr_48041 = state_48038;
(statearr_48041[(8)] = inst_47952);

return statearr_48041;
})();
if(cljs.core.truth_(inst_47953)){
var statearr_48042_49288 = state_48038__$1;
(statearr_48042_49288[(1)] = (22));

} else {
var statearr_48043_49289 = state_48038__$1;
(statearr_48043_49289[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (27))){
var inst_47981 = (state_48038[(9)]);
var inst_47908 = (state_48038[(10)]);
var inst_47988 = (state_48038[(11)]);
var inst_47983 = (state_48038[(12)]);
var inst_47988__$1 = cljs.core._nth(inst_47981,inst_47983);
var inst_47989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47988__$1,inst_47908,done);
var state_48038__$1 = (function (){var statearr_48044 = state_48038;
(statearr_48044[(11)] = inst_47988__$1);

return statearr_48044;
})();
if(cljs.core.truth_(inst_47989)){
var statearr_48045_49290 = state_48038__$1;
(statearr_48045_49290[(1)] = (30));

} else {
var statearr_48046_49291 = state_48038__$1;
(statearr_48046_49291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (1))){
var state_48038__$1 = state_48038;
var statearr_48047_49292 = state_48038__$1;
(statearr_48047_49292[(2)] = null);

(statearr_48047_49292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (24))){
var inst_47939 = (state_48038[(7)]);
var inst_47958 = (state_48038[(2)]);
var inst_47959 = cljs.core.next(inst_47939);
var inst_47917 = inst_47959;
var inst_47918 = null;
var inst_47919 = (0);
var inst_47920 = (0);
var state_48038__$1 = (function (){var statearr_48048 = state_48038;
(statearr_48048[(13)] = inst_47958);

(statearr_48048[(14)] = inst_47917);

(statearr_48048[(15)] = inst_47919);

(statearr_48048[(16)] = inst_47920);

(statearr_48048[(17)] = inst_47918);

return statearr_48048;
})();
var statearr_48049_49293 = state_48038__$1;
(statearr_48049_49293[(2)] = null);

(statearr_48049_49293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (39))){
var state_48038__$1 = state_48038;
var statearr_48053_49294 = state_48038__$1;
(statearr_48053_49294[(2)] = null);

(statearr_48053_49294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (4))){
var inst_47908 = (state_48038[(10)]);
var inst_47908__$1 = (state_48038[(2)]);
var inst_47909 = (inst_47908__$1 == null);
var state_48038__$1 = (function (){var statearr_48054 = state_48038;
(statearr_48054[(10)] = inst_47908__$1);

return statearr_48054;
})();
if(cljs.core.truth_(inst_47909)){
var statearr_48055_49295 = state_48038__$1;
(statearr_48055_49295[(1)] = (5));

} else {
var statearr_48056_49296 = state_48038__$1;
(statearr_48056_49296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (15))){
var inst_47917 = (state_48038[(14)]);
var inst_47919 = (state_48038[(15)]);
var inst_47920 = (state_48038[(16)]);
var inst_47918 = (state_48038[(17)]);
var inst_47935 = (state_48038[(2)]);
var inst_47936 = (inst_47920 + (1));
var tmp48050 = inst_47917;
var tmp48051 = inst_47919;
var tmp48052 = inst_47918;
var inst_47917__$1 = tmp48050;
var inst_47918__$1 = tmp48052;
var inst_47919__$1 = tmp48051;
var inst_47920__$1 = inst_47936;
var state_48038__$1 = (function (){var statearr_48057 = state_48038;
(statearr_48057[(18)] = inst_47935);

(statearr_48057[(14)] = inst_47917__$1);

(statearr_48057[(15)] = inst_47919__$1);

(statearr_48057[(16)] = inst_47920__$1);

(statearr_48057[(17)] = inst_47918__$1);

return statearr_48057;
})();
var statearr_48058_49297 = state_48038__$1;
(statearr_48058_49297[(2)] = null);

(statearr_48058_49297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (21))){
var inst_47962 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48062_49298 = state_48038__$1;
(statearr_48062_49298[(2)] = inst_47962);

(statearr_48062_49298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (31))){
var inst_47988 = (state_48038[(11)]);
var inst_47992 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47988);
var state_48038__$1 = state_48038;
var statearr_48063_49300 = state_48038__$1;
(statearr_48063_49300[(2)] = inst_47992);

(statearr_48063_49300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (32))){
var inst_47982 = (state_48038[(19)]);
var inst_47981 = (state_48038[(9)]);
var inst_47980 = (state_48038[(20)]);
var inst_47983 = (state_48038[(12)]);
var inst_47994 = (state_48038[(2)]);
var inst_47995 = (inst_47983 + (1));
var tmp48059 = inst_47982;
var tmp48060 = inst_47981;
var tmp48061 = inst_47980;
var inst_47980__$1 = tmp48061;
var inst_47981__$1 = tmp48060;
var inst_47982__$1 = tmp48059;
var inst_47983__$1 = inst_47995;
var state_48038__$1 = (function (){var statearr_48064 = state_48038;
(statearr_48064[(19)] = inst_47982__$1);

(statearr_48064[(9)] = inst_47981__$1);

(statearr_48064[(20)] = inst_47980__$1);

(statearr_48064[(21)] = inst_47994);

(statearr_48064[(12)] = inst_47983__$1);

return statearr_48064;
})();
var statearr_48065_49301 = state_48038__$1;
(statearr_48065_49301[(2)] = null);

(statearr_48065_49301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (40))){
var inst_48007 = (state_48038[(22)]);
var inst_48011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48007);
var state_48038__$1 = state_48038;
var statearr_48066_49302 = state_48038__$1;
(statearr_48066_49302[(2)] = inst_48011);

(statearr_48066_49302[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (33))){
var inst_47998 = (state_48038[(23)]);
var inst_48000 = cljs.core.chunked_seq_QMARK_(inst_47998);
var state_48038__$1 = state_48038;
if(inst_48000){
var statearr_48067_49304 = state_48038__$1;
(statearr_48067_49304[(1)] = (36));

} else {
var statearr_48068_49306 = state_48038__$1;
(statearr_48068_49306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (13))){
var inst_47929 = (state_48038[(24)]);
var inst_47932 = cljs.core.async.close_BANG_(inst_47929);
var state_48038__$1 = state_48038;
var statearr_48069_49307 = state_48038__$1;
(statearr_48069_49307[(2)] = inst_47932);

(statearr_48069_49307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (22))){
var inst_47952 = (state_48038[(8)]);
var inst_47955 = cljs.core.async.close_BANG_(inst_47952);
var state_48038__$1 = state_48038;
var statearr_48073_49308 = state_48038__$1;
(statearr_48073_49308[(2)] = inst_47955);

(statearr_48073_49308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (36))){
var inst_47998 = (state_48038[(23)]);
var inst_48002 = cljs.core.chunk_first(inst_47998);
var inst_48003 = cljs.core.chunk_rest(inst_47998);
var inst_48004 = cljs.core.count(inst_48002);
var inst_47980 = inst_48003;
var inst_47981 = inst_48002;
var inst_47982 = inst_48004;
var inst_47983 = (0);
var state_48038__$1 = (function (){var statearr_48074 = state_48038;
(statearr_48074[(19)] = inst_47982);

(statearr_48074[(9)] = inst_47981);

(statearr_48074[(20)] = inst_47980);

(statearr_48074[(12)] = inst_47983);

return statearr_48074;
})();
var statearr_48075_49313 = state_48038__$1;
(statearr_48075_49313[(2)] = null);

(statearr_48075_49313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (41))){
var inst_47998 = (state_48038[(23)]);
var inst_48013 = (state_48038[(2)]);
var inst_48014 = cljs.core.next(inst_47998);
var inst_47980 = inst_48014;
var inst_47981 = null;
var inst_47982 = (0);
var inst_47983 = (0);
var state_48038__$1 = (function (){var statearr_48076 = state_48038;
(statearr_48076[(25)] = inst_48013);

(statearr_48076[(19)] = inst_47982);

(statearr_48076[(9)] = inst_47981);

(statearr_48076[(20)] = inst_47980);

(statearr_48076[(12)] = inst_47983);

return statearr_48076;
})();
var statearr_48077_49314 = state_48038__$1;
(statearr_48077_49314[(2)] = null);

(statearr_48077_49314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (43))){
var state_48038__$1 = state_48038;
var statearr_48078_49315 = state_48038__$1;
(statearr_48078_49315[(2)] = null);

(statearr_48078_49315[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (29))){
var inst_48022 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48079_49316 = state_48038__$1;
(statearr_48079_49316[(2)] = inst_48022);

(statearr_48079_49316[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (44))){
var inst_48031 = (state_48038[(2)]);
var state_48038__$1 = (function (){var statearr_48080 = state_48038;
(statearr_48080[(26)] = inst_48031);

return statearr_48080;
})();
var statearr_48081_49317 = state_48038__$1;
(statearr_48081_49317[(2)] = null);

(statearr_48081_49317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (6))){
var inst_47972 = (state_48038[(27)]);
var inst_47971 = cljs.core.deref(cs);
var inst_47972__$1 = cljs.core.keys(inst_47971);
var inst_47973 = cljs.core.count(inst_47972__$1);
var inst_47974 = cljs.core.reset_BANG_(dctr,inst_47973);
var inst_47979 = cljs.core.seq(inst_47972__$1);
var inst_47980 = inst_47979;
var inst_47981 = null;
var inst_47982 = (0);
var inst_47983 = (0);
var state_48038__$1 = (function (){var statearr_48082 = state_48038;
(statearr_48082[(19)] = inst_47982);

(statearr_48082[(9)] = inst_47981);

(statearr_48082[(27)] = inst_47972__$1);

(statearr_48082[(20)] = inst_47980);

(statearr_48082[(28)] = inst_47974);

(statearr_48082[(12)] = inst_47983);

return statearr_48082;
})();
var statearr_48083_49318 = state_48038__$1;
(statearr_48083_49318[(2)] = null);

(statearr_48083_49318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (28))){
var inst_47980 = (state_48038[(20)]);
var inst_47998 = (state_48038[(23)]);
var inst_47998__$1 = cljs.core.seq(inst_47980);
var state_48038__$1 = (function (){var statearr_48084 = state_48038;
(statearr_48084[(23)] = inst_47998__$1);

return statearr_48084;
})();
if(inst_47998__$1){
var statearr_48085_49319 = state_48038__$1;
(statearr_48085_49319[(1)] = (33));

} else {
var statearr_48086_49320 = state_48038__$1;
(statearr_48086_49320[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (25))){
var inst_47982 = (state_48038[(19)]);
var inst_47983 = (state_48038[(12)]);
var inst_47985 = (inst_47983 < inst_47982);
var inst_47986 = inst_47985;
var state_48038__$1 = state_48038;
if(cljs.core.truth_(inst_47986)){
var statearr_48087_49321 = state_48038__$1;
(statearr_48087_49321[(1)] = (27));

} else {
var statearr_48088_49322 = state_48038__$1;
(statearr_48088_49322[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (34))){
var state_48038__$1 = state_48038;
var statearr_48089_49323 = state_48038__$1;
(statearr_48089_49323[(2)] = null);

(statearr_48089_49323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (17))){
var state_48038__$1 = state_48038;
var statearr_48090_49324 = state_48038__$1;
(statearr_48090_49324[(2)] = null);

(statearr_48090_49324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (3))){
var inst_48036 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48038__$1,inst_48036);
} else {
if((state_val_48039 === (12))){
var inst_47967 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48091_49325 = state_48038__$1;
(statearr_48091_49325[(2)] = inst_47967);

(statearr_48091_49325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (2))){
var state_48038__$1 = state_48038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48038__$1,(4),ch);
} else {
if((state_val_48039 === (23))){
var state_48038__$1 = state_48038;
var statearr_48092_49326 = state_48038__$1;
(statearr_48092_49326[(2)] = null);

(statearr_48092_49326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (35))){
var inst_48020 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48093_49327 = state_48038__$1;
(statearr_48093_49327[(2)] = inst_48020);

(statearr_48093_49327[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (19))){
var inst_47939 = (state_48038[(7)]);
var inst_47943 = cljs.core.chunk_first(inst_47939);
var inst_47944 = cljs.core.chunk_rest(inst_47939);
var inst_47945 = cljs.core.count(inst_47943);
var inst_47917 = inst_47944;
var inst_47918 = inst_47943;
var inst_47919 = inst_47945;
var inst_47920 = (0);
var state_48038__$1 = (function (){var statearr_48094 = state_48038;
(statearr_48094[(14)] = inst_47917);

(statearr_48094[(15)] = inst_47919);

(statearr_48094[(16)] = inst_47920);

(statearr_48094[(17)] = inst_47918);

return statearr_48094;
})();
var statearr_48095_49328 = state_48038__$1;
(statearr_48095_49328[(2)] = null);

(statearr_48095_49328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (11))){
var inst_47939 = (state_48038[(7)]);
var inst_47917 = (state_48038[(14)]);
var inst_47939__$1 = cljs.core.seq(inst_47917);
var state_48038__$1 = (function (){var statearr_48096 = state_48038;
(statearr_48096[(7)] = inst_47939__$1);

return statearr_48096;
})();
if(inst_47939__$1){
var statearr_48097_49329 = state_48038__$1;
(statearr_48097_49329[(1)] = (16));

} else {
var statearr_48098_49330 = state_48038__$1;
(statearr_48098_49330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (9))){
var inst_47969 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48099_49331 = state_48038__$1;
(statearr_48099_49331[(2)] = inst_47969);

(statearr_48099_49331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (5))){
var inst_47915 = cljs.core.deref(cs);
var inst_47916 = cljs.core.seq(inst_47915);
var inst_47917 = inst_47916;
var inst_47918 = null;
var inst_47919 = (0);
var inst_47920 = (0);
var state_48038__$1 = (function (){var statearr_48100 = state_48038;
(statearr_48100[(14)] = inst_47917);

(statearr_48100[(15)] = inst_47919);

(statearr_48100[(16)] = inst_47920);

(statearr_48100[(17)] = inst_47918);

return statearr_48100;
})();
var statearr_48101_49332 = state_48038__$1;
(statearr_48101_49332[(2)] = null);

(statearr_48101_49332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (14))){
var state_48038__$1 = state_48038;
var statearr_48102_49333 = state_48038__$1;
(statearr_48102_49333[(2)] = null);

(statearr_48102_49333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (45))){
var inst_48028 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48103_49334 = state_48038__$1;
(statearr_48103_49334[(2)] = inst_48028);

(statearr_48103_49334[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (26))){
var inst_47972 = (state_48038[(27)]);
var inst_48024 = (state_48038[(2)]);
var inst_48025 = cljs.core.seq(inst_47972);
var state_48038__$1 = (function (){var statearr_48104 = state_48038;
(statearr_48104[(29)] = inst_48024);

return statearr_48104;
})();
if(inst_48025){
var statearr_48105_49335 = state_48038__$1;
(statearr_48105_49335[(1)] = (42));

} else {
var statearr_48106_49336 = state_48038__$1;
(statearr_48106_49336[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (16))){
var inst_47939 = (state_48038[(7)]);
var inst_47941 = cljs.core.chunked_seq_QMARK_(inst_47939);
var state_48038__$1 = state_48038;
if(inst_47941){
var statearr_48107_49337 = state_48038__$1;
(statearr_48107_49337[(1)] = (19));

} else {
var statearr_48108_49338 = state_48038__$1;
(statearr_48108_49338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (38))){
var inst_48017 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48109_49339 = state_48038__$1;
(statearr_48109_49339[(2)] = inst_48017);

(statearr_48109_49339[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (30))){
var state_48038__$1 = state_48038;
var statearr_48110_49340 = state_48038__$1;
(statearr_48110_49340[(2)] = null);

(statearr_48110_49340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (10))){
var inst_47920 = (state_48038[(16)]);
var inst_47918 = (state_48038[(17)]);
var inst_47928 = cljs.core._nth(inst_47918,inst_47920);
var inst_47929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47928,(0),null);
var inst_47930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47928,(1),null);
var state_48038__$1 = (function (){var statearr_48111 = state_48038;
(statearr_48111[(24)] = inst_47929);

return statearr_48111;
})();
if(cljs.core.truth_(inst_47930)){
var statearr_48112_49341 = state_48038__$1;
(statearr_48112_49341[(1)] = (13));

} else {
var statearr_48113_49342 = state_48038__$1;
(statearr_48113_49342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (18))){
var inst_47965 = (state_48038[(2)]);
var state_48038__$1 = state_48038;
var statearr_48114_49343 = state_48038__$1;
(statearr_48114_49343[(2)] = inst_47965);

(statearr_48114_49343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (42))){
var state_48038__$1 = state_48038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48038__$1,(45),dchan);
} else {
if((state_val_48039 === (37))){
var inst_47908 = (state_48038[(10)]);
var inst_47998 = (state_48038[(23)]);
var inst_48007 = (state_48038[(22)]);
var inst_48007__$1 = cljs.core.first(inst_47998);
var inst_48008 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48007__$1,inst_47908,done);
var state_48038__$1 = (function (){var statearr_48115 = state_48038;
(statearr_48115[(22)] = inst_48007__$1);

return statearr_48115;
})();
if(cljs.core.truth_(inst_48008)){
var statearr_48116_49344 = state_48038__$1;
(statearr_48116_49344[(1)] = (39));

} else {
var statearr_48117_49345 = state_48038__$1;
(statearr_48117_49345[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48039 === (8))){
var inst_47919 = (state_48038[(15)]);
var inst_47920 = (state_48038[(16)]);
var inst_47922 = (inst_47920 < inst_47919);
var inst_47923 = inst_47922;
var state_48038__$1 = state_48038;
if(cljs.core.truth_(inst_47923)){
var statearr_48118_49346 = state_48038__$1;
(statearr_48118_49346[(1)] = (10));

} else {
var statearr_48119_49347 = state_48038__$1;
(statearr_48119_49347[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__47284__auto__ = null;
var cljs$core$async$mult_$_state_machine__47284__auto____0 = (function (){
var statearr_48120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48120[(0)] = cljs$core$async$mult_$_state_machine__47284__auto__);

(statearr_48120[(1)] = (1));

return statearr_48120;
});
var cljs$core$async$mult_$_state_machine__47284__auto____1 = (function (state_48038){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48038);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48121){var ex__47287__auto__ = e48121;
var statearr_48122_49348 = state_48038;
(statearr_48122_49348[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48038[(4)]))){
var statearr_48123_49349 = state_48038;
(statearr_48123_49349[(1)] = cljs.core.first((state_48038[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49350 = state_48038;
state_48038 = G__49350;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47284__auto__ = function(state_48038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47284__auto____1.call(this,state_48038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47284__auto____0;
cljs$core$async$mult_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47284__auto____1;
return cljs$core$async$mult_$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48124 = f__47320__auto__();
(statearr_48124[(6)] = c__47319__auto___49286);

return statearr_48124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__48126 = arguments.length;
switch (G__48126) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_49352 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49352(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49353 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49353(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49354 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49354(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49355 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49355(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49356 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49356(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49357 = arguments.length;
var i__4865__auto___49358 = (0);
while(true){
if((i__4865__auto___49358 < len__4864__auto___49357)){
args__4870__auto__.push((arguments[i__4865__auto___49358]));

var G__49359 = (i__4865__auto___49358 + (1));
i__4865__auto___49358 = G__49359;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48131){
var map__48132 = p__48131;
var map__48132__$1 = cljs.core.__destructure_map(map__48132);
var opts = map__48132__$1;
var statearr_48133_49360 = state;
(statearr_48133_49360[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48134_49361 = state;
(statearr_48134_49361[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_48135_49362 = state;
(statearr_48135_49362[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48127){
var G__48128 = cljs.core.first(seq48127);
var seq48127__$1 = cljs.core.next(seq48127);
var G__48129 = cljs.core.first(seq48127__$1);
var seq48127__$2 = cljs.core.next(seq48127__$1);
var G__48130 = cljs.core.first(seq48127__$2);
var seq48127__$3 = cljs.core.next(seq48127__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48128,G__48129,G__48130,seq48127__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48137 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48138){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48138 = meta48138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48139,meta48138__$1){
var self__ = this;
var _48139__$1 = this;
return (new cljs.core.async.t_cljs$core$async48137(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48138__$1));
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48139){
var self__ = this;
var _48139__$1 = this;
return self__.meta48138;
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48138","meta48138",1158407879,null)], null);
}));

(cljs.core.async.t_cljs$core$async48137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48137");

(cljs.core.async.t_cljs$core$async48137.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48137.
 */
cljs.core.async.__GT_t_cljs$core$async48137 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48138){
return (new cljs.core.async.t_cljs$core$async48137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48138));
});

}

return (new cljs.core.async.t_cljs$core$async48137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47319__auto___49363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48211){
var state_val_48212 = (state_48211[(1)]);
if((state_val_48212 === (7))){
var inst_48171 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
if(cljs.core.truth_(inst_48171)){
var statearr_48220_49364 = state_48211__$1;
(statearr_48220_49364[(1)] = (8));

} else {
var statearr_48221_49365 = state_48211__$1;
(statearr_48221_49365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (20))){
var inst_48164 = (state_48211[(7)]);
var state_48211__$1 = state_48211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48211__$1,(23),out,inst_48164);
} else {
if((state_val_48212 === (1))){
var inst_48147 = calc_state();
var inst_48148 = cljs.core.__destructure_map(inst_48147);
var inst_48149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48148,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48148,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48148,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48152 = inst_48147;
var state_48211__$1 = (function (){var statearr_48222 = state_48211;
(statearr_48222[(8)] = inst_48150);

(statearr_48222[(9)] = inst_48152);

(statearr_48222[(10)] = inst_48151);

(statearr_48222[(11)] = inst_48149);

return statearr_48222;
})();
var statearr_48223_49369 = state_48211__$1;
(statearr_48223_49369[(2)] = null);

(statearr_48223_49369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (24))){
var inst_48155 = (state_48211[(12)]);
var inst_48152 = inst_48155;
var state_48211__$1 = (function (){var statearr_48224 = state_48211;
(statearr_48224[(9)] = inst_48152);

return statearr_48224;
})();
var statearr_48225_49372 = state_48211__$1;
(statearr_48225_49372[(2)] = null);

(statearr_48225_49372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (4))){
var inst_48164 = (state_48211[(7)]);
var inst_48166 = (state_48211[(13)]);
var inst_48163 = (state_48211[(2)]);
var inst_48164__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48163,(0),null);
var inst_48165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48163,(1),null);
var inst_48166__$1 = (inst_48164__$1 == null);
var state_48211__$1 = (function (){var statearr_48226 = state_48211;
(statearr_48226[(7)] = inst_48164__$1);

(statearr_48226[(13)] = inst_48166__$1);

(statearr_48226[(14)] = inst_48165);

return statearr_48226;
})();
if(cljs.core.truth_(inst_48166__$1)){
var statearr_48227_49375 = state_48211__$1;
(statearr_48227_49375[(1)] = (5));

} else {
var statearr_48228_49376 = state_48211__$1;
(statearr_48228_49376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (15))){
var inst_48185 = (state_48211[(15)]);
var inst_48156 = (state_48211[(16)]);
var inst_48185__$1 = cljs.core.empty_QMARK_(inst_48156);
var state_48211__$1 = (function (){var statearr_48229 = state_48211;
(statearr_48229[(15)] = inst_48185__$1);

return statearr_48229;
})();
if(inst_48185__$1){
var statearr_48230_49377 = state_48211__$1;
(statearr_48230_49377[(1)] = (17));

} else {
var statearr_48231_49378 = state_48211__$1;
(statearr_48231_49378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (21))){
var inst_48155 = (state_48211[(12)]);
var inst_48152 = inst_48155;
var state_48211__$1 = (function (){var statearr_48232 = state_48211;
(statearr_48232[(9)] = inst_48152);

return statearr_48232;
})();
var statearr_48233_49379 = state_48211__$1;
(statearr_48233_49379[(2)] = null);

(statearr_48233_49379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (13))){
var inst_48178 = (state_48211[(2)]);
var inst_48179 = calc_state();
var inst_48152 = inst_48179;
var state_48211__$1 = (function (){var statearr_48234 = state_48211;
(statearr_48234[(9)] = inst_48152);

(statearr_48234[(17)] = inst_48178);

return statearr_48234;
})();
var statearr_48235_49380 = state_48211__$1;
(statearr_48235_49380[(2)] = null);

(statearr_48235_49380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (22))){
var inst_48205 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
var statearr_48239_49381 = state_48211__$1;
(statearr_48239_49381[(2)] = inst_48205);

(statearr_48239_49381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (6))){
var inst_48165 = (state_48211[(14)]);
var inst_48169 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48165,change);
var state_48211__$1 = state_48211;
var statearr_48240_49389 = state_48211__$1;
(statearr_48240_49389[(2)] = inst_48169);

(statearr_48240_49389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (25))){
var state_48211__$1 = state_48211;
var statearr_48241_49390 = state_48211__$1;
(statearr_48241_49390[(2)] = null);

(statearr_48241_49390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (17))){
var inst_48165 = (state_48211[(14)]);
var inst_48157 = (state_48211[(18)]);
var inst_48187 = (inst_48157.cljs$core$IFn$_invoke$arity$1 ? inst_48157.cljs$core$IFn$_invoke$arity$1(inst_48165) : inst_48157.call(null,inst_48165));
var inst_48188 = cljs.core.not(inst_48187);
var state_48211__$1 = state_48211;
var statearr_48242_49391 = state_48211__$1;
(statearr_48242_49391[(2)] = inst_48188);

(statearr_48242_49391[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (3))){
var inst_48209 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48211__$1,inst_48209);
} else {
if((state_val_48212 === (12))){
var state_48211__$1 = state_48211;
var statearr_48243_49392 = state_48211__$1;
(statearr_48243_49392[(2)] = null);

(statearr_48243_49392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (2))){
var inst_48152 = (state_48211[(9)]);
var inst_48155 = (state_48211[(12)]);
var inst_48155__$1 = cljs.core.__destructure_map(inst_48152);
var inst_48156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48155__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48155__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48155__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48211__$1 = (function (){var statearr_48244 = state_48211;
(statearr_48244[(18)] = inst_48157);

(statearr_48244[(16)] = inst_48156);

(statearr_48244[(12)] = inst_48155__$1);

return statearr_48244;
})();
return cljs.core.async.ioc_alts_BANG_(state_48211__$1,(4),inst_48158);
} else {
if((state_val_48212 === (23))){
var inst_48196 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
if(cljs.core.truth_(inst_48196)){
var statearr_48245_49393 = state_48211__$1;
(statearr_48245_49393[(1)] = (24));

} else {
var statearr_48246_49394 = state_48211__$1;
(statearr_48246_49394[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (19))){
var inst_48191 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
var statearr_48247_49395 = state_48211__$1;
(statearr_48247_49395[(2)] = inst_48191);

(statearr_48247_49395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (11))){
var inst_48165 = (state_48211[(14)]);
var inst_48175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48165);
var state_48211__$1 = state_48211;
var statearr_48248_49396 = state_48211__$1;
(statearr_48248_49396[(2)] = inst_48175);

(statearr_48248_49396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (9))){
var inst_48182 = (state_48211[(19)]);
var inst_48165 = (state_48211[(14)]);
var inst_48156 = (state_48211[(16)]);
var inst_48182__$1 = (inst_48156.cljs$core$IFn$_invoke$arity$1 ? inst_48156.cljs$core$IFn$_invoke$arity$1(inst_48165) : inst_48156.call(null,inst_48165));
var state_48211__$1 = (function (){var statearr_48249 = state_48211;
(statearr_48249[(19)] = inst_48182__$1);

return statearr_48249;
})();
if(cljs.core.truth_(inst_48182__$1)){
var statearr_48250_49397 = state_48211__$1;
(statearr_48250_49397[(1)] = (14));

} else {
var statearr_48251_49398 = state_48211__$1;
(statearr_48251_49398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (5))){
var inst_48166 = (state_48211[(13)]);
var state_48211__$1 = state_48211;
var statearr_48252_49399 = state_48211__$1;
(statearr_48252_49399[(2)] = inst_48166);

(statearr_48252_49399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (14))){
var inst_48182 = (state_48211[(19)]);
var state_48211__$1 = state_48211;
var statearr_48253_49400 = state_48211__$1;
(statearr_48253_49400[(2)] = inst_48182);

(statearr_48253_49400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (26))){
var inst_48201 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
var statearr_48254_49401 = state_48211__$1;
(statearr_48254_49401[(2)] = inst_48201);

(statearr_48254_49401[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (16))){
var inst_48193 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
if(cljs.core.truth_(inst_48193)){
var statearr_48255_49402 = state_48211__$1;
(statearr_48255_49402[(1)] = (20));

} else {
var statearr_48256_49403 = state_48211__$1;
(statearr_48256_49403[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (10))){
var inst_48207 = (state_48211[(2)]);
var state_48211__$1 = state_48211;
var statearr_48257_49404 = state_48211__$1;
(statearr_48257_49404[(2)] = inst_48207);

(statearr_48257_49404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (18))){
var inst_48185 = (state_48211[(15)]);
var state_48211__$1 = state_48211;
var statearr_48258_49405 = state_48211__$1;
(statearr_48258_49405[(2)] = inst_48185);

(statearr_48258_49405[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48212 === (8))){
var inst_48164 = (state_48211[(7)]);
var inst_48173 = (inst_48164 == null);
var state_48211__$1 = state_48211;
if(cljs.core.truth_(inst_48173)){
var statearr_48259_49406 = state_48211__$1;
(statearr_48259_49406[(1)] = (11));

} else {
var statearr_48260_49407 = state_48211__$1;
(statearr_48260_49407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__47284__auto__ = null;
var cljs$core$async$mix_$_state_machine__47284__auto____0 = (function (){
var statearr_48261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48261[(0)] = cljs$core$async$mix_$_state_machine__47284__auto__);

(statearr_48261[(1)] = (1));

return statearr_48261;
});
var cljs$core$async$mix_$_state_machine__47284__auto____1 = (function (state_48211){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48211);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48262){var ex__47287__auto__ = e48262;
var statearr_48263_49408 = state_48211;
(statearr_48263_49408[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48211[(4)]))){
var statearr_48264_49409 = state_48211;
(statearr_48264_49409[(1)] = cljs.core.first((state_48211[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49410 = state_48211;
state_48211 = G__49410;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47284__auto__ = function(state_48211){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47284__auto____1.call(this,state_48211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47284__auto____0;
cljs$core$async$mix_$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47284__auto____1;
return cljs$core$async$mix_$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48265 = f__47320__auto__();
(statearr_48265[(6)] = c__47319__auto___49363);

return statearr_48265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_49415 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49415(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49416 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49416(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49417 = (function() {
var G__49418 = null;
var G__49418__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49418__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49418 = function(p,v){
switch(arguments.length){
case 1:
return G__49418__1.call(this,p);
case 2:
return G__49418__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49418.cljs$core$IFn$_invoke$arity$1 = G__49418__1;
G__49418.cljs$core$IFn$_invoke$arity$2 = G__49418__2;
return G__49418;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48267 = arguments.length;
switch (G__48267) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49417(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49417(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__48270 = arguments.length;
switch (G__48270) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48268_SHARP_){
if(cljs.core.truth_((p1__48268_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48268_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48268_SHARP_.call(null,topic)))){
return p1__48268_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48268_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48271 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48272){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48272 = meta48272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48273,meta48272__$1){
var self__ = this;
var _48273__$1 = this;
return (new cljs.core.async.t_cljs$core$async48271(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48272__$1));
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48273){
var self__ = this;
var _48273__$1 = this;
return self__.meta48272;
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48272","meta48272",557881897,null)], null);
}));

(cljs.core.async.t_cljs$core$async48271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48271");

(cljs.core.async.t_cljs$core$async48271.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48271.
 */
cljs.core.async.__GT_t_cljs$core$async48271 = (function cljs$core$async$__GT_t_cljs$core$async48271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48272){
return (new cljs.core.async.t_cljs$core$async48271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48272));
});

}

return (new cljs.core.async.t_cljs$core$async48271(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47319__auto___49424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48348){
var state_val_48349 = (state_48348[(1)]);
if((state_val_48349 === (7))){
var inst_48344 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48350_49425 = state_48348__$1;
(statearr_48350_49425[(2)] = inst_48344);

(statearr_48350_49425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (20))){
var state_48348__$1 = state_48348;
var statearr_48351_49426 = state_48348__$1;
(statearr_48351_49426[(2)] = null);

(statearr_48351_49426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (1))){
var state_48348__$1 = state_48348;
var statearr_48352_49427 = state_48348__$1;
(statearr_48352_49427[(2)] = null);

(statearr_48352_49427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (24))){
var inst_48327 = (state_48348[(7)]);
var inst_48336 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48327);
var state_48348__$1 = state_48348;
var statearr_48353_49428 = state_48348__$1;
(statearr_48353_49428[(2)] = inst_48336);

(statearr_48353_49428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (4))){
var inst_48277 = (state_48348[(8)]);
var inst_48277__$1 = (state_48348[(2)]);
var inst_48278 = (inst_48277__$1 == null);
var state_48348__$1 = (function (){var statearr_48354 = state_48348;
(statearr_48354[(8)] = inst_48277__$1);

return statearr_48354;
})();
if(cljs.core.truth_(inst_48278)){
var statearr_48355_49429 = state_48348__$1;
(statearr_48355_49429[(1)] = (5));

} else {
var statearr_48356_49430 = state_48348__$1;
(statearr_48356_49430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (15))){
var inst_48321 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48357_49431 = state_48348__$1;
(statearr_48357_49431[(2)] = inst_48321);

(statearr_48357_49431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (21))){
var inst_48341 = (state_48348[(2)]);
var state_48348__$1 = (function (){var statearr_48358 = state_48348;
(statearr_48358[(9)] = inst_48341);

return statearr_48358;
})();
var statearr_48359_49432 = state_48348__$1;
(statearr_48359_49432[(2)] = null);

(statearr_48359_49432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (13))){
var inst_48302 = (state_48348[(10)]);
var inst_48305 = cljs.core.chunked_seq_QMARK_(inst_48302);
var state_48348__$1 = state_48348;
if(inst_48305){
var statearr_48364_49433 = state_48348__$1;
(statearr_48364_49433[(1)] = (16));

} else {
var statearr_48365_49434 = state_48348__$1;
(statearr_48365_49434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (22))){
var inst_48333 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
if(cljs.core.truth_(inst_48333)){
var statearr_48370_49435 = state_48348__$1;
(statearr_48370_49435[(1)] = (23));

} else {
var statearr_48371_49436 = state_48348__$1;
(statearr_48371_49436[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (6))){
var inst_48327 = (state_48348[(7)]);
var inst_48277 = (state_48348[(8)]);
var inst_48329 = (state_48348[(11)]);
var inst_48327__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48277) : topic_fn.call(null,inst_48277));
var inst_48328 = cljs.core.deref(mults);
var inst_48329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48328,inst_48327__$1);
var state_48348__$1 = (function (){var statearr_48372 = state_48348;
(statearr_48372[(7)] = inst_48327__$1);

(statearr_48372[(11)] = inst_48329__$1);

return statearr_48372;
})();
if(cljs.core.truth_(inst_48329__$1)){
var statearr_48377_49437 = state_48348__$1;
(statearr_48377_49437[(1)] = (19));

} else {
var statearr_48378_49438 = state_48348__$1;
(statearr_48378_49438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (25))){
var inst_48338 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48383_49439 = state_48348__$1;
(statearr_48383_49439[(2)] = inst_48338);

(statearr_48383_49439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (17))){
var inst_48302 = (state_48348[(10)]);
var inst_48312 = cljs.core.first(inst_48302);
var inst_48313 = cljs.core.async.muxch_STAR_(inst_48312);
var inst_48314 = cljs.core.async.close_BANG_(inst_48313);
var inst_48315 = cljs.core.next(inst_48302);
var inst_48288 = inst_48315;
var inst_48289 = null;
var inst_48290 = (0);
var inst_48291 = (0);
var state_48348__$1 = (function (){var statearr_48384 = state_48348;
(statearr_48384[(12)] = inst_48290);

(statearr_48384[(13)] = inst_48289);

(statearr_48384[(14)] = inst_48291);

(statearr_48384[(15)] = inst_48314);

(statearr_48384[(16)] = inst_48288);

return statearr_48384;
})();
var statearr_48385_49440 = state_48348__$1;
(statearr_48385_49440[(2)] = null);

(statearr_48385_49440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (3))){
var inst_48346 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48348__$1,inst_48346);
} else {
if((state_val_48349 === (12))){
var inst_48323 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48386_49441 = state_48348__$1;
(statearr_48386_49441[(2)] = inst_48323);

(statearr_48386_49441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (2))){
var state_48348__$1 = state_48348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48348__$1,(4),ch);
} else {
if((state_val_48349 === (23))){
var state_48348__$1 = state_48348;
var statearr_48387_49442 = state_48348__$1;
(statearr_48387_49442[(2)] = null);

(statearr_48387_49442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (19))){
var inst_48277 = (state_48348[(8)]);
var inst_48329 = (state_48348[(11)]);
var inst_48331 = cljs.core.async.muxch_STAR_(inst_48329);
var state_48348__$1 = state_48348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48348__$1,(22),inst_48331,inst_48277);
} else {
if((state_val_48349 === (11))){
var inst_48302 = (state_48348[(10)]);
var inst_48288 = (state_48348[(16)]);
var inst_48302__$1 = cljs.core.seq(inst_48288);
var state_48348__$1 = (function (){var statearr_48388 = state_48348;
(statearr_48388[(10)] = inst_48302__$1);

return statearr_48388;
})();
if(inst_48302__$1){
var statearr_48389_49443 = state_48348__$1;
(statearr_48389_49443[(1)] = (13));

} else {
var statearr_48390_49444 = state_48348__$1;
(statearr_48390_49444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (9))){
var inst_48325 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48391_49445 = state_48348__$1;
(statearr_48391_49445[(2)] = inst_48325);

(statearr_48391_49445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (5))){
var inst_48285 = cljs.core.deref(mults);
var inst_48286 = cljs.core.vals(inst_48285);
var inst_48287 = cljs.core.seq(inst_48286);
var inst_48288 = inst_48287;
var inst_48289 = null;
var inst_48290 = (0);
var inst_48291 = (0);
var state_48348__$1 = (function (){var statearr_48392 = state_48348;
(statearr_48392[(12)] = inst_48290);

(statearr_48392[(13)] = inst_48289);

(statearr_48392[(14)] = inst_48291);

(statearr_48392[(16)] = inst_48288);

return statearr_48392;
})();
var statearr_48394_49446 = state_48348__$1;
(statearr_48394_49446[(2)] = null);

(statearr_48394_49446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (14))){
var state_48348__$1 = state_48348;
var statearr_48398_49451 = state_48348__$1;
(statearr_48398_49451[(2)] = null);

(statearr_48398_49451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (16))){
var inst_48302 = (state_48348[(10)]);
var inst_48307 = cljs.core.chunk_first(inst_48302);
var inst_48308 = cljs.core.chunk_rest(inst_48302);
var inst_48309 = cljs.core.count(inst_48307);
var inst_48288 = inst_48308;
var inst_48289 = inst_48307;
var inst_48290 = inst_48309;
var inst_48291 = (0);
var state_48348__$1 = (function (){var statearr_48399 = state_48348;
(statearr_48399[(12)] = inst_48290);

(statearr_48399[(13)] = inst_48289);

(statearr_48399[(14)] = inst_48291);

(statearr_48399[(16)] = inst_48288);

return statearr_48399;
})();
var statearr_48400_49452 = state_48348__$1;
(statearr_48400_49452[(2)] = null);

(statearr_48400_49452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (10))){
var inst_48290 = (state_48348[(12)]);
var inst_48289 = (state_48348[(13)]);
var inst_48291 = (state_48348[(14)]);
var inst_48288 = (state_48348[(16)]);
var inst_48296 = cljs.core._nth(inst_48289,inst_48291);
var inst_48297 = cljs.core.async.muxch_STAR_(inst_48296);
var inst_48298 = cljs.core.async.close_BANG_(inst_48297);
var inst_48299 = (inst_48291 + (1));
var tmp48395 = inst_48290;
var tmp48396 = inst_48289;
var tmp48397 = inst_48288;
var inst_48288__$1 = tmp48397;
var inst_48289__$1 = tmp48396;
var inst_48290__$1 = tmp48395;
var inst_48291__$1 = inst_48299;
var state_48348__$1 = (function (){var statearr_48401 = state_48348;
(statearr_48401[(12)] = inst_48290__$1);

(statearr_48401[(13)] = inst_48289__$1);

(statearr_48401[(14)] = inst_48291__$1);

(statearr_48401[(17)] = inst_48298);

(statearr_48401[(16)] = inst_48288__$1);

return statearr_48401;
})();
var statearr_48402_49453 = state_48348__$1;
(statearr_48402_49453[(2)] = null);

(statearr_48402_49453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (18))){
var inst_48318 = (state_48348[(2)]);
var state_48348__$1 = state_48348;
var statearr_48403_49454 = state_48348__$1;
(statearr_48403_49454[(2)] = inst_48318);

(statearr_48403_49454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48349 === (8))){
var inst_48290 = (state_48348[(12)]);
var inst_48291 = (state_48348[(14)]);
var inst_48293 = (inst_48291 < inst_48290);
var inst_48294 = inst_48293;
var state_48348__$1 = state_48348;
if(cljs.core.truth_(inst_48294)){
var statearr_48404_49455 = state_48348__$1;
(statearr_48404_49455[(1)] = (10));

} else {
var statearr_48405_49456 = state_48348__$1;
(statearr_48405_49456[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48406[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48406[(1)] = (1));

return statearr_48406;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48348){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48348);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48407){var ex__47287__auto__ = e48407;
var statearr_48408_49457 = state_48348;
(statearr_48408_49457[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48348[(4)]))){
var statearr_48409_49458 = state_48348;
(statearr_48409_49458[(1)] = cljs.core.first((state_48348[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49459 = state_48348;
state_48348 = G__49459;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48410 = f__47320__auto__();
(statearr_48410[(6)] = c__47319__auto___49424);

return statearr_48410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48416 = arguments.length;
switch (G__48416) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48419 = arguments.length;
switch (G__48419) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48426 = arguments.length;
switch (G__48426) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__47319__auto___49468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48469){
var state_val_48470 = (state_48469[(1)]);
if((state_val_48470 === (7))){
var state_48469__$1 = state_48469;
var statearr_48480_49469 = state_48469__$1;
(statearr_48480_49469[(2)] = null);

(statearr_48480_49469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (1))){
var state_48469__$1 = state_48469;
var statearr_48481_49470 = state_48469__$1;
(statearr_48481_49470[(2)] = null);

(statearr_48481_49470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (4))){
var inst_48430 = (state_48469[(7)]);
var inst_48429 = (state_48469[(8)]);
var inst_48432 = (inst_48430 < inst_48429);
var state_48469__$1 = state_48469;
if(cljs.core.truth_(inst_48432)){
var statearr_48482_49471 = state_48469__$1;
(statearr_48482_49471[(1)] = (6));

} else {
var statearr_48483_49472 = state_48469__$1;
(statearr_48483_49472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (15))){
var inst_48455 = (state_48469[(9)]);
var inst_48460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48455);
var state_48469__$1 = state_48469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48469__$1,(17),out,inst_48460);
} else {
if((state_val_48470 === (13))){
var inst_48455 = (state_48469[(9)]);
var inst_48455__$1 = (state_48469[(2)]);
var inst_48456 = cljs.core.some(cljs.core.nil_QMARK_,inst_48455__$1);
var state_48469__$1 = (function (){var statearr_48484 = state_48469;
(statearr_48484[(9)] = inst_48455__$1);

return statearr_48484;
})();
if(cljs.core.truth_(inst_48456)){
var statearr_48485_49473 = state_48469__$1;
(statearr_48485_49473[(1)] = (14));

} else {
var statearr_48486_49474 = state_48469__$1;
(statearr_48486_49474[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (6))){
var state_48469__$1 = state_48469;
var statearr_48487_49475 = state_48469__$1;
(statearr_48487_49475[(2)] = null);

(statearr_48487_49475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (17))){
var inst_48462 = (state_48469[(2)]);
var state_48469__$1 = (function (){var statearr_48489 = state_48469;
(statearr_48489[(10)] = inst_48462);

return statearr_48489;
})();
var statearr_48490_49476 = state_48469__$1;
(statearr_48490_49476[(2)] = null);

(statearr_48490_49476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (3))){
var inst_48467 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48469__$1,inst_48467);
} else {
if((state_val_48470 === (12))){
var _ = (function (){var statearr_48491 = state_48469;
(statearr_48491[(4)] = cljs.core.rest((state_48469[(4)])));

return statearr_48491;
})();
var state_48469__$1 = state_48469;
var ex48488 = (state_48469__$1[(2)]);
var statearr_48494_49477 = state_48469__$1;
(statearr_48494_49477[(5)] = ex48488);


if((ex48488 instanceof Object)){
var statearr_48495_49478 = state_48469__$1;
(statearr_48495_49478[(1)] = (11));

(statearr_48495_49478[(5)] = null);

} else {
throw ex48488;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (2))){
var inst_48428 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48429 = cnt;
var inst_48430 = (0);
var state_48469__$1 = (function (){var statearr_48496 = state_48469;
(statearr_48496[(11)] = inst_48428);

(statearr_48496[(7)] = inst_48430);

(statearr_48496[(8)] = inst_48429);

return statearr_48496;
})();
var statearr_48497_49479 = state_48469__$1;
(statearr_48497_49479[(2)] = null);

(statearr_48497_49479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (11))){
var inst_48434 = (state_48469[(2)]);
var inst_48435 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48469__$1 = (function (){var statearr_48498 = state_48469;
(statearr_48498[(12)] = inst_48434);

return statearr_48498;
})();
var statearr_48499_49480 = state_48469__$1;
(statearr_48499_49480[(2)] = inst_48435);

(statearr_48499_49480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (9))){
var inst_48430 = (state_48469[(7)]);
var _ = (function (){var statearr_48500 = state_48469;
(statearr_48500[(4)] = cljs.core.cons((12),(state_48469[(4)])));

return statearr_48500;
})();
var inst_48441 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48430) : chs__$1.call(null,inst_48430));
var inst_48442 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48430) : done.call(null,inst_48430));
var inst_48443 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48441,inst_48442);
var ___$1 = (function (){var statearr_48501 = state_48469;
(statearr_48501[(4)] = cljs.core.rest((state_48469[(4)])));

return statearr_48501;
})();
var state_48469__$1 = state_48469;
var statearr_48502_49481 = state_48469__$1;
(statearr_48502_49481[(2)] = inst_48443);

(statearr_48502_49481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (5))){
var inst_48453 = (state_48469[(2)]);
var state_48469__$1 = (function (){var statearr_48503 = state_48469;
(statearr_48503[(13)] = inst_48453);

return statearr_48503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48469__$1,(13),dchan);
} else {
if((state_val_48470 === (14))){
var inst_48458 = cljs.core.async.close_BANG_(out);
var state_48469__$1 = state_48469;
var statearr_48504_49482 = state_48469__$1;
(statearr_48504_49482[(2)] = inst_48458);

(statearr_48504_49482[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (16))){
var inst_48465 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
var statearr_48505_49483 = state_48469__$1;
(statearr_48505_49483[(2)] = inst_48465);

(statearr_48505_49483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (10))){
var inst_48430 = (state_48469[(7)]);
var inst_48446 = (state_48469[(2)]);
var inst_48447 = (inst_48430 + (1));
var inst_48430__$1 = inst_48447;
var state_48469__$1 = (function (){var statearr_48517 = state_48469;
(statearr_48517[(14)] = inst_48446);

(statearr_48517[(7)] = inst_48430__$1);

return statearr_48517;
})();
var statearr_48518_49484 = state_48469__$1;
(statearr_48518_49484[(2)] = null);

(statearr_48518_49484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48470 === (8))){
var inst_48451 = (state_48469[(2)]);
var state_48469__$1 = state_48469;
var statearr_48519_49485 = state_48469__$1;
(statearr_48519_49485[(2)] = inst_48451);

(statearr_48519_49485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48520[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48520[(1)] = (1));

return statearr_48520;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48469){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48469);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48521){var ex__47287__auto__ = e48521;
var statearr_48522_49486 = state_48469;
(statearr_48522_49486[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48469[(4)]))){
var statearr_48523_49487 = state_48469;
(statearr_48523_49487[(1)] = cljs.core.first((state_48469[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49488 = state_48469;
state_48469 = G__49488;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48524 = f__47320__auto__();
(statearr_48524[(6)] = c__47319__auto___49468);

return statearr_48524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48527 = arguments.length;
switch (G__48527) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48559){
var state_val_48560 = (state_48559[(1)]);
if((state_val_48560 === (7))){
var inst_48539 = (state_48559[(7)]);
var inst_48538 = (state_48559[(8)]);
var inst_48538__$1 = (state_48559[(2)]);
var inst_48539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48538__$1,(0),null);
var inst_48540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48538__$1,(1),null);
var inst_48541 = (inst_48539__$1 == null);
var state_48559__$1 = (function (){var statearr_48561 = state_48559;
(statearr_48561[(7)] = inst_48539__$1);

(statearr_48561[(8)] = inst_48538__$1);

(statearr_48561[(9)] = inst_48540);

return statearr_48561;
})();
if(cljs.core.truth_(inst_48541)){
var statearr_48562_49491 = state_48559__$1;
(statearr_48562_49491[(1)] = (8));

} else {
var statearr_48563_49492 = state_48559__$1;
(statearr_48563_49492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (1))){
var inst_48528 = cljs.core.vec(chs);
var inst_48529 = inst_48528;
var state_48559__$1 = (function (){var statearr_48564 = state_48559;
(statearr_48564[(10)] = inst_48529);

return statearr_48564;
})();
var statearr_48565_49493 = state_48559__$1;
(statearr_48565_49493[(2)] = null);

(statearr_48565_49493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (4))){
var inst_48529 = (state_48559[(10)]);
var state_48559__$1 = state_48559;
return cljs.core.async.ioc_alts_BANG_(state_48559__$1,(7),inst_48529);
} else {
if((state_val_48560 === (6))){
var inst_48555 = (state_48559[(2)]);
var state_48559__$1 = state_48559;
var statearr_48566_49494 = state_48559__$1;
(statearr_48566_49494[(2)] = inst_48555);

(statearr_48566_49494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (3))){
var inst_48557 = (state_48559[(2)]);
var state_48559__$1 = state_48559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48559__$1,inst_48557);
} else {
if((state_val_48560 === (2))){
var inst_48529 = (state_48559[(10)]);
var inst_48531 = cljs.core.count(inst_48529);
var inst_48532 = (inst_48531 > (0));
var state_48559__$1 = state_48559;
if(cljs.core.truth_(inst_48532)){
var statearr_48568_49495 = state_48559__$1;
(statearr_48568_49495[(1)] = (4));

} else {
var statearr_48569_49496 = state_48559__$1;
(statearr_48569_49496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (11))){
var inst_48529 = (state_48559[(10)]);
var inst_48548 = (state_48559[(2)]);
var tmp48567 = inst_48529;
var inst_48529__$1 = tmp48567;
var state_48559__$1 = (function (){var statearr_48570 = state_48559;
(statearr_48570[(10)] = inst_48529__$1);

(statearr_48570[(11)] = inst_48548);

return statearr_48570;
})();
var statearr_48571_49497 = state_48559__$1;
(statearr_48571_49497[(2)] = null);

(statearr_48571_49497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (9))){
var inst_48539 = (state_48559[(7)]);
var state_48559__$1 = state_48559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48559__$1,(11),out,inst_48539);
} else {
if((state_val_48560 === (5))){
var inst_48553 = cljs.core.async.close_BANG_(out);
var state_48559__$1 = state_48559;
var statearr_48578_49499 = state_48559__$1;
(statearr_48578_49499[(2)] = inst_48553);

(statearr_48578_49499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (10))){
var inst_48551 = (state_48559[(2)]);
var state_48559__$1 = state_48559;
var statearr_48579_49500 = state_48559__$1;
(statearr_48579_49500[(2)] = inst_48551);

(statearr_48579_49500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48560 === (8))){
var inst_48539 = (state_48559[(7)]);
var inst_48538 = (state_48559[(8)]);
var inst_48529 = (state_48559[(10)]);
var inst_48540 = (state_48559[(9)]);
var inst_48543 = (function (){var cs = inst_48529;
var vec__48534 = inst_48538;
var v = inst_48539;
var c = inst_48540;
return (function (p1__48525_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48525_SHARP_);
});
})();
var inst_48544 = cljs.core.filterv(inst_48543,inst_48529);
var inst_48529__$1 = inst_48544;
var state_48559__$1 = (function (){var statearr_48580 = state_48559;
(statearr_48580[(10)] = inst_48529__$1);

return statearr_48580;
})();
var statearr_48581_49501 = state_48559__$1;
(statearr_48581_49501[(2)] = null);

(statearr_48581_49501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48582 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48582[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48582[(1)] = (1));

return statearr_48582;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48559){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48559);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48583){var ex__47287__auto__ = e48583;
var statearr_48584_49502 = state_48559;
(statearr_48584_49502[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48559[(4)]))){
var statearr_48585_49503 = state_48559;
(statearr_48585_49503[(1)] = cljs.core.first((state_48559[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49504 = state_48559;
state_48559 = G__49504;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48586 = f__47320__auto__();
(statearr_48586[(6)] = c__47319__auto___49490);

return statearr_48586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48607 = arguments.length;
switch (G__48607) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48636){
var state_val_48637 = (state_48636[(1)]);
if((state_val_48637 === (7))){
var inst_48613 = (state_48636[(7)]);
var inst_48613__$1 = (state_48636[(2)]);
var inst_48619 = (inst_48613__$1 == null);
var inst_48620 = cljs.core.not(inst_48619);
var state_48636__$1 = (function (){var statearr_48640 = state_48636;
(statearr_48640[(7)] = inst_48613__$1);

return statearr_48640;
})();
if(inst_48620){
var statearr_48641_49507 = state_48636__$1;
(statearr_48641_49507[(1)] = (8));

} else {
var statearr_48642_49508 = state_48636__$1;
(statearr_48642_49508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (1))){
var inst_48608 = (0);
var state_48636__$1 = (function (){var statearr_48643 = state_48636;
(statearr_48643[(8)] = inst_48608);

return statearr_48643;
})();
var statearr_48644_49509 = state_48636__$1;
(statearr_48644_49509[(2)] = null);

(statearr_48644_49509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (4))){
var state_48636__$1 = state_48636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48636__$1,(7),ch);
} else {
if((state_val_48637 === (6))){
var inst_48631 = (state_48636[(2)]);
var state_48636__$1 = state_48636;
var statearr_48645_49510 = state_48636__$1;
(statearr_48645_49510[(2)] = inst_48631);

(statearr_48645_49510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (3))){
var inst_48633 = (state_48636[(2)]);
var inst_48634 = cljs.core.async.close_BANG_(out);
var state_48636__$1 = (function (){var statearr_48646 = state_48636;
(statearr_48646[(9)] = inst_48633);

return statearr_48646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48636__$1,inst_48634);
} else {
if((state_val_48637 === (2))){
var inst_48608 = (state_48636[(8)]);
var inst_48610 = (inst_48608 < n);
var state_48636__$1 = state_48636;
if(cljs.core.truth_(inst_48610)){
var statearr_48647_49511 = state_48636__$1;
(statearr_48647_49511[(1)] = (4));

} else {
var statearr_48648_49512 = state_48636__$1;
(statearr_48648_49512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (11))){
var inst_48608 = (state_48636[(8)]);
var inst_48623 = (state_48636[(2)]);
var inst_48624 = (inst_48608 + (1));
var inst_48608__$1 = inst_48624;
var state_48636__$1 = (function (){var statearr_48649 = state_48636;
(statearr_48649[(10)] = inst_48623);

(statearr_48649[(8)] = inst_48608__$1);

return statearr_48649;
})();
var statearr_48650_49513 = state_48636__$1;
(statearr_48650_49513[(2)] = null);

(statearr_48650_49513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (9))){
var state_48636__$1 = state_48636;
var statearr_48651_49514 = state_48636__$1;
(statearr_48651_49514[(2)] = null);

(statearr_48651_49514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (5))){
var state_48636__$1 = state_48636;
var statearr_48652_49515 = state_48636__$1;
(statearr_48652_49515[(2)] = null);

(statearr_48652_49515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (10))){
var inst_48628 = (state_48636[(2)]);
var state_48636__$1 = state_48636;
var statearr_48653_49523 = state_48636__$1;
(statearr_48653_49523[(2)] = inst_48628);

(statearr_48653_49523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48637 === (8))){
var inst_48613 = (state_48636[(7)]);
var state_48636__$1 = state_48636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48636__$1,(11),out,inst_48613);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48654[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48654[(1)] = (1));

return statearr_48654;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48636){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48636);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48655){var ex__47287__auto__ = e48655;
var statearr_48656_49524 = state_48636;
(statearr_48656_49524[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48636[(4)]))){
var statearr_48657_49525 = state_48636;
(statearr_48657_49525[(1)] = cljs.core.first((state_48636[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49526 = state_48636;
state_48636 = G__49526;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48658 = f__47320__auto__();
(statearr_48658[(6)] = c__47319__auto___49506);

return statearr_48658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48660 = (function (f,ch,meta48661){
this.f = f;
this.ch = ch;
this.meta48661 = meta48661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48662,meta48661__$1){
var self__ = this;
var _48662__$1 = this;
return (new cljs.core.async.t_cljs$core$async48660(self__.f,self__.ch,meta48661__$1));
}));

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48662){
var self__ = this;
var _48662__$1 = this;
return self__.meta48661;
}));

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48663 = (function (f,ch,meta48661,_,fn1,meta48664){
this.f = f;
this.ch = ch;
this.meta48661 = meta48661;
this._ = _;
this.fn1 = fn1;
this.meta48664 = meta48664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48665,meta48664__$1){
var self__ = this;
var _48665__$1 = this;
return (new cljs.core.async.t_cljs$core$async48663(self__.f,self__.ch,self__.meta48661,self__._,self__.fn1,meta48664__$1));
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48665){
var self__ = this;
var _48665__$1 = this;
return self__.meta48664;
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48659_SHARP_){
var G__48668 = (((p1__48659_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48659_SHARP_) : self__.f.call(null,p1__48659_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48668) : f1.call(null,G__48668));
});
}));

(cljs.core.async.t_cljs$core$async48663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48661","meta48661",-1200002222,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48660","cljs.core.async/t_cljs$core$async48660",-284344256,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48664","meta48664",1886517799,null)], null);
}));

(cljs.core.async.t_cljs$core$async48663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48663");

(cljs.core.async.t_cljs$core$async48663.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48663.
 */
cljs.core.async.__GT_t_cljs$core$async48663 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48663(f__$1,ch__$1,meta48661__$1,___$2,fn1__$1,meta48664){
return (new cljs.core.async.t_cljs$core$async48663(f__$1,ch__$1,meta48661__$1,___$2,fn1__$1,meta48664));
});

}

return (new cljs.core.async.t_cljs$core$async48663(self__.f,self__.ch,self__.meta48661,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48671 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48671) : self__.f.call(null,G__48671));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48661","meta48661",-1200002222,null)], null);
}));

(cljs.core.async.t_cljs$core$async48660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48660");

(cljs.core.async.t_cljs$core$async48660.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48660.
 */
cljs.core.async.__GT_t_cljs$core$async48660 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48660(f__$1,ch__$1,meta48661){
return (new cljs.core.async.t_cljs$core$async48660(f__$1,ch__$1,meta48661));
});

}

return (new cljs.core.async.t_cljs$core$async48660(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48693 = (function (f,ch,meta48694){
this.f = f;
this.ch = ch;
this.meta48694 = meta48694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48695,meta48694__$1){
var self__ = this;
var _48695__$1 = this;
return (new cljs.core.async.t_cljs$core$async48693(self__.f,self__.ch,meta48694__$1));
}));

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48695){
var self__ = this;
var _48695__$1 = this;
return self__.meta48694;
}));

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48694","meta48694",384854828,null)], null);
}));

(cljs.core.async.t_cljs$core$async48693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48693");

(cljs.core.async.t_cljs$core$async48693.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48693.
 */
cljs.core.async.__GT_t_cljs$core$async48693 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48693(f__$1,ch__$1,meta48694){
return (new cljs.core.async.t_cljs$core$async48693(f__$1,ch__$1,meta48694));
});

}

return (new cljs.core.async.t_cljs$core$async48693(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48701 = (function (p,ch,meta48702){
this.p = p;
this.ch = ch;
this.meta48702 = meta48702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48703,meta48702__$1){
var self__ = this;
var _48703__$1 = this;
return (new cljs.core.async.t_cljs$core$async48701(self__.p,self__.ch,meta48702__$1));
}));

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48703){
var self__ = this;
var _48703__$1 = this;
return self__.meta48702;
}));

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48702","meta48702",-2021603166,null)], null);
}));

(cljs.core.async.t_cljs$core$async48701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48701");

(cljs.core.async.t_cljs$core$async48701.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48701.
 */
cljs.core.async.__GT_t_cljs$core$async48701 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48701(p__$1,ch__$1,meta48702){
return (new cljs.core.async.t_cljs$core$async48701(p__$1,ch__$1,meta48702));
});

}

return (new cljs.core.async.t_cljs$core$async48701(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48710 = arguments.length;
switch (G__48710) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48731){
var state_val_48732 = (state_48731[(1)]);
if((state_val_48732 === (7))){
var inst_48727 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
var statearr_48736_49529 = state_48731__$1;
(statearr_48736_49529[(2)] = inst_48727);

(statearr_48736_49529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (1))){
var state_48731__$1 = state_48731;
var statearr_48737_49530 = state_48731__$1;
(statearr_48737_49530[(2)] = null);

(statearr_48737_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (4))){
var inst_48713 = (state_48731[(7)]);
var inst_48713__$1 = (state_48731[(2)]);
var inst_48714 = (inst_48713__$1 == null);
var state_48731__$1 = (function (){var statearr_48738 = state_48731;
(statearr_48738[(7)] = inst_48713__$1);

return statearr_48738;
})();
if(cljs.core.truth_(inst_48714)){
var statearr_48739_49531 = state_48731__$1;
(statearr_48739_49531[(1)] = (5));

} else {
var statearr_48740_49532 = state_48731__$1;
(statearr_48740_49532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (6))){
var inst_48713 = (state_48731[(7)]);
var inst_48718 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48713) : p.call(null,inst_48713));
var state_48731__$1 = state_48731;
if(cljs.core.truth_(inst_48718)){
var statearr_48741_49533 = state_48731__$1;
(statearr_48741_49533[(1)] = (8));

} else {
var statearr_48742_49534 = state_48731__$1;
(statearr_48742_49534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (3))){
var inst_48729 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48731__$1,inst_48729);
} else {
if((state_val_48732 === (2))){
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48731__$1,(4),ch);
} else {
if((state_val_48732 === (11))){
var inst_48721 = (state_48731[(2)]);
var state_48731__$1 = state_48731;
var statearr_48743_49536 = state_48731__$1;
(statearr_48743_49536[(2)] = inst_48721);

(statearr_48743_49536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (9))){
var state_48731__$1 = state_48731;
var statearr_48744_49538 = state_48731__$1;
(statearr_48744_49538[(2)] = null);

(statearr_48744_49538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (5))){
var inst_48716 = cljs.core.async.close_BANG_(out);
var state_48731__$1 = state_48731;
var statearr_48745_49539 = state_48731__$1;
(statearr_48745_49539[(2)] = inst_48716);

(statearr_48745_49539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (10))){
var inst_48724 = (state_48731[(2)]);
var state_48731__$1 = (function (){var statearr_48746 = state_48731;
(statearr_48746[(8)] = inst_48724);

return statearr_48746;
})();
var statearr_48747_49540 = state_48731__$1;
(statearr_48747_49540[(2)] = null);

(statearr_48747_49540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48732 === (8))){
var inst_48713 = (state_48731[(7)]);
var state_48731__$1 = state_48731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48731__$1,(11),out,inst_48713);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48748 = [null,null,null,null,null,null,null,null,null];
(statearr_48748[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48748[(1)] = (1));

return statearr_48748;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48731){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48731);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48749){var ex__47287__auto__ = e48749;
var statearr_48750_49541 = state_48731;
(statearr_48750_49541[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48731[(4)]))){
var statearr_48751_49542 = state_48731;
(statearr_48751_49542[(1)] = cljs.core.first((state_48731[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49543 = state_48731;
state_48731 = G__49543;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48752 = f__47320__auto__();
(statearr_48752[(6)] = c__47319__auto___49528);

return statearr_48752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48754 = arguments.length;
switch (G__48754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48816){
var state_val_48817 = (state_48816[(1)]);
if((state_val_48817 === (7))){
var inst_48812 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
var statearr_48818_49545 = state_48816__$1;
(statearr_48818_49545[(2)] = inst_48812);

(statearr_48818_49545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (20))){
var inst_48782 = (state_48816[(7)]);
var inst_48793 = (state_48816[(2)]);
var inst_48794 = cljs.core.next(inst_48782);
var inst_48768 = inst_48794;
var inst_48769 = null;
var inst_48770 = (0);
var inst_48771 = (0);
var state_48816__$1 = (function (){var statearr_48819 = state_48816;
(statearr_48819[(8)] = inst_48793);

(statearr_48819[(9)] = inst_48768);

(statearr_48819[(10)] = inst_48769);

(statearr_48819[(11)] = inst_48771);

(statearr_48819[(12)] = inst_48770);

return statearr_48819;
})();
var statearr_48820_49546 = state_48816__$1;
(statearr_48820_49546[(2)] = null);

(statearr_48820_49546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (1))){
var state_48816__$1 = state_48816;
var statearr_48821_49548 = state_48816__$1;
(statearr_48821_49548[(2)] = null);

(statearr_48821_49548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (4))){
var inst_48757 = (state_48816[(13)]);
var inst_48757__$1 = (state_48816[(2)]);
var inst_48758 = (inst_48757__$1 == null);
var state_48816__$1 = (function (){var statearr_48822 = state_48816;
(statearr_48822[(13)] = inst_48757__$1);

return statearr_48822;
})();
if(cljs.core.truth_(inst_48758)){
var statearr_48823_49550 = state_48816__$1;
(statearr_48823_49550[(1)] = (5));

} else {
var statearr_48824_49551 = state_48816__$1;
(statearr_48824_49551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (15))){
var state_48816__$1 = state_48816;
var statearr_48828_49552 = state_48816__$1;
(statearr_48828_49552[(2)] = null);

(statearr_48828_49552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (21))){
var state_48816__$1 = state_48816;
var statearr_48829_49553 = state_48816__$1;
(statearr_48829_49553[(2)] = null);

(statearr_48829_49553[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (13))){
var inst_48768 = (state_48816[(9)]);
var inst_48769 = (state_48816[(10)]);
var inst_48771 = (state_48816[(11)]);
var inst_48770 = (state_48816[(12)]);
var inst_48778 = (state_48816[(2)]);
var inst_48779 = (inst_48771 + (1));
var tmp48825 = inst_48768;
var tmp48826 = inst_48769;
var tmp48827 = inst_48770;
var inst_48768__$1 = tmp48825;
var inst_48769__$1 = tmp48826;
var inst_48770__$1 = tmp48827;
var inst_48771__$1 = inst_48779;
var state_48816__$1 = (function (){var statearr_48830 = state_48816;
(statearr_48830[(9)] = inst_48768__$1);

(statearr_48830[(14)] = inst_48778);

(statearr_48830[(10)] = inst_48769__$1);

(statearr_48830[(11)] = inst_48771__$1);

(statearr_48830[(12)] = inst_48770__$1);

return statearr_48830;
})();
var statearr_48831_49554 = state_48816__$1;
(statearr_48831_49554[(2)] = null);

(statearr_48831_49554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (22))){
var state_48816__$1 = state_48816;
var statearr_48832_49555 = state_48816__$1;
(statearr_48832_49555[(2)] = null);

(statearr_48832_49555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (6))){
var inst_48757 = (state_48816[(13)]);
var inst_48766 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48757) : f.call(null,inst_48757));
var inst_48767 = cljs.core.seq(inst_48766);
var inst_48768 = inst_48767;
var inst_48769 = null;
var inst_48770 = (0);
var inst_48771 = (0);
var state_48816__$1 = (function (){var statearr_48833 = state_48816;
(statearr_48833[(9)] = inst_48768);

(statearr_48833[(10)] = inst_48769);

(statearr_48833[(11)] = inst_48771);

(statearr_48833[(12)] = inst_48770);

return statearr_48833;
})();
var statearr_48834_49556 = state_48816__$1;
(statearr_48834_49556[(2)] = null);

(statearr_48834_49556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (17))){
var inst_48782 = (state_48816[(7)]);
var inst_48786 = cljs.core.chunk_first(inst_48782);
var inst_48787 = cljs.core.chunk_rest(inst_48782);
var inst_48788 = cljs.core.count(inst_48786);
var inst_48768 = inst_48787;
var inst_48769 = inst_48786;
var inst_48770 = inst_48788;
var inst_48771 = (0);
var state_48816__$1 = (function (){var statearr_48835 = state_48816;
(statearr_48835[(9)] = inst_48768);

(statearr_48835[(10)] = inst_48769);

(statearr_48835[(11)] = inst_48771);

(statearr_48835[(12)] = inst_48770);

return statearr_48835;
})();
var statearr_48836_49557 = state_48816__$1;
(statearr_48836_49557[(2)] = null);

(statearr_48836_49557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (3))){
var inst_48814 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48816__$1,inst_48814);
} else {
if((state_val_48817 === (12))){
var inst_48802 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
var statearr_48837_49558 = state_48816__$1;
(statearr_48837_49558[(2)] = inst_48802);

(statearr_48837_49558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (2))){
var state_48816__$1 = state_48816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48816__$1,(4),in$);
} else {
if((state_val_48817 === (23))){
var inst_48810 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
var statearr_48838_49559 = state_48816__$1;
(statearr_48838_49559[(2)] = inst_48810);

(statearr_48838_49559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (19))){
var inst_48797 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
var statearr_48839_49560 = state_48816__$1;
(statearr_48839_49560[(2)] = inst_48797);

(statearr_48839_49560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (11))){
var inst_48768 = (state_48816[(9)]);
var inst_48782 = (state_48816[(7)]);
var inst_48782__$1 = cljs.core.seq(inst_48768);
var state_48816__$1 = (function (){var statearr_48840 = state_48816;
(statearr_48840[(7)] = inst_48782__$1);

return statearr_48840;
})();
if(inst_48782__$1){
var statearr_48841_49561 = state_48816__$1;
(statearr_48841_49561[(1)] = (14));

} else {
var statearr_48842_49562 = state_48816__$1;
(statearr_48842_49562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (9))){
var inst_48804 = (state_48816[(2)]);
var inst_48805 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48816__$1 = (function (){var statearr_48843 = state_48816;
(statearr_48843[(15)] = inst_48804);

return statearr_48843;
})();
if(cljs.core.truth_(inst_48805)){
var statearr_48844_49563 = state_48816__$1;
(statearr_48844_49563[(1)] = (21));

} else {
var statearr_48845_49564 = state_48816__$1;
(statearr_48845_49564[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (5))){
var inst_48760 = cljs.core.async.close_BANG_(out);
var state_48816__$1 = state_48816;
var statearr_48846_49565 = state_48816__$1;
(statearr_48846_49565[(2)] = inst_48760);

(statearr_48846_49565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (14))){
var inst_48782 = (state_48816[(7)]);
var inst_48784 = cljs.core.chunked_seq_QMARK_(inst_48782);
var state_48816__$1 = state_48816;
if(inst_48784){
var statearr_48847_49566 = state_48816__$1;
(statearr_48847_49566[(1)] = (17));

} else {
var statearr_48848_49567 = state_48816__$1;
(statearr_48848_49567[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (16))){
var inst_48800 = (state_48816[(2)]);
var state_48816__$1 = state_48816;
var statearr_48849_49568 = state_48816__$1;
(statearr_48849_49568[(2)] = inst_48800);

(statearr_48849_49568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48817 === (10))){
var inst_48769 = (state_48816[(10)]);
var inst_48771 = (state_48816[(11)]);
var inst_48776 = cljs.core._nth(inst_48769,inst_48771);
var state_48816__$1 = state_48816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48816__$1,(13),out,inst_48776);
} else {
if((state_val_48817 === (18))){
var inst_48782 = (state_48816[(7)]);
var inst_48791 = cljs.core.first(inst_48782);
var state_48816__$1 = state_48816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48816__$1,(20),out,inst_48791);
} else {
if((state_val_48817 === (8))){
var inst_48771 = (state_48816[(11)]);
var inst_48770 = (state_48816[(12)]);
var inst_48773 = (inst_48771 < inst_48770);
var inst_48774 = inst_48773;
var state_48816__$1 = state_48816;
if(cljs.core.truth_(inst_48774)){
var statearr_48850_49569 = state_48816__$1;
(statearr_48850_49569[(1)] = (10));

} else {
var statearr_48851_49570 = state_48816__$1;
(statearr_48851_49570[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____0 = (function (){
var statearr_48852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48852[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__);

(statearr_48852[(1)] = (1));

return statearr_48852;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____1 = (function (state_48816){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48816);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48853){var ex__47287__auto__ = e48853;
var statearr_48854_49571 = state_48816;
(statearr_48854_49571[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48816[(4)]))){
var statearr_48855_49572 = state_48816;
(statearr_48855_49572[(1)] = cljs.core.first((state_48816[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49573 = state_48816;
state_48816 = G__49573;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__ = function(state_48816){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____1.call(this,state_48816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47284__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48856 = f__47320__auto__();
(statearr_48856[(6)] = c__47319__auto__);

return statearr_48856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48858 = arguments.length;
switch (G__48858) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48860 = arguments.length;
switch (G__48860) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48862 = arguments.length;
switch (G__48862) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48886){
var state_val_48887 = (state_48886[(1)]);
if((state_val_48887 === (7))){
var inst_48881 = (state_48886[(2)]);
var state_48886__$1 = state_48886;
var statearr_48888_49582 = state_48886__$1;
(statearr_48888_49582[(2)] = inst_48881);

(statearr_48888_49582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (1))){
var inst_48863 = null;
var state_48886__$1 = (function (){var statearr_48889 = state_48886;
(statearr_48889[(7)] = inst_48863);

return statearr_48889;
})();
var statearr_48890_49583 = state_48886__$1;
(statearr_48890_49583[(2)] = null);

(statearr_48890_49583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (4))){
var inst_48866 = (state_48886[(8)]);
var inst_48866__$1 = (state_48886[(2)]);
var inst_48867 = (inst_48866__$1 == null);
var inst_48868 = cljs.core.not(inst_48867);
var state_48886__$1 = (function (){var statearr_48891 = state_48886;
(statearr_48891[(8)] = inst_48866__$1);

return statearr_48891;
})();
if(inst_48868){
var statearr_48892_49584 = state_48886__$1;
(statearr_48892_49584[(1)] = (5));

} else {
var statearr_48893_49585 = state_48886__$1;
(statearr_48893_49585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (6))){
var state_48886__$1 = state_48886;
var statearr_48894_49586 = state_48886__$1;
(statearr_48894_49586[(2)] = null);

(statearr_48894_49586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (3))){
var inst_48883 = (state_48886[(2)]);
var inst_48884 = cljs.core.async.close_BANG_(out);
var state_48886__$1 = (function (){var statearr_48895 = state_48886;
(statearr_48895[(9)] = inst_48883);

return statearr_48895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48886__$1,inst_48884);
} else {
if((state_val_48887 === (2))){
var state_48886__$1 = state_48886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48886__$1,(4),ch);
} else {
if((state_val_48887 === (11))){
var inst_48866 = (state_48886[(8)]);
var inst_48875 = (state_48886[(2)]);
var inst_48863 = inst_48866;
var state_48886__$1 = (function (){var statearr_48896 = state_48886;
(statearr_48896[(7)] = inst_48863);

(statearr_48896[(10)] = inst_48875);

return statearr_48896;
})();
var statearr_48897_49588 = state_48886__$1;
(statearr_48897_49588[(2)] = null);

(statearr_48897_49588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (9))){
var inst_48866 = (state_48886[(8)]);
var state_48886__$1 = state_48886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48886__$1,(11),out,inst_48866);
} else {
if((state_val_48887 === (5))){
var inst_48863 = (state_48886[(7)]);
var inst_48866 = (state_48886[(8)]);
var inst_48870 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48866,inst_48863);
var state_48886__$1 = state_48886;
if(inst_48870){
var statearr_48899_49589 = state_48886__$1;
(statearr_48899_49589[(1)] = (8));

} else {
var statearr_48900_49590 = state_48886__$1;
(statearr_48900_49590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (10))){
var inst_48878 = (state_48886[(2)]);
var state_48886__$1 = state_48886;
var statearr_48901_49591 = state_48886__$1;
(statearr_48901_49591[(2)] = inst_48878);

(statearr_48901_49591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (8))){
var inst_48863 = (state_48886[(7)]);
var tmp48898 = inst_48863;
var inst_48863__$1 = tmp48898;
var state_48886__$1 = (function (){var statearr_48902 = state_48886;
(statearr_48902[(7)] = inst_48863__$1);

return statearr_48902;
})();
var statearr_48903_49596 = state_48886__$1;
(statearr_48903_49596[(2)] = null);

(statearr_48903_49596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48904[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48904[(1)] = (1));

return statearr_48904;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48886){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48886);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48905){var ex__47287__auto__ = e48905;
var statearr_48906_49597 = state_48886;
(statearr_48906_49597[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48886[(4)]))){
var statearr_48907_49598 = state_48886;
(statearr_48907_49598[(1)] = cljs.core.first((state_48886[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49599 = state_48886;
state_48886 = G__49599;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48908 = f__47320__auto__();
(statearr_48908[(6)] = c__47319__auto___49581);

return statearr_48908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48910 = arguments.length;
switch (G__48910) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_48948){
var state_val_48949 = (state_48948[(1)]);
if((state_val_48949 === (7))){
var inst_48944 = (state_48948[(2)]);
var state_48948__$1 = state_48948;
var statearr_48950_49602 = state_48948__$1;
(statearr_48950_49602[(2)] = inst_48944);

(statearr_48950_49602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (1))){
var inst_48911 = (new Array(n));
var inst_48912 = inst_48911;
var inst_48913 = (0);
var state_48948__$1 = (function (){var statearr_48954 = state_48948;
(statearr_48954[(7)] = inst_48913);

(statearr_48954[(8)] = inst_48912);

return statearr_48954;
})();
var statearr_48955_49603 = state_48948__$1;
(statearr_48955_49603[(2)] = null);

(statearr_48955_49603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (4))){
var inst_48916 = (state_48948[(9)]);
var inst_48916__$1 = (state_48948[(2)]);
var inst_48917 = (inst_48916__$1 == null);
var inst_48918 = cljs.core.not(inst_48917);
var state_48948__$1 = (function (){var statearr_48956 = state_48948;
(statearr_48956[(9)] = inst_48916__$1);

return statearr_48956;
})();
if(inst_48918){
var statearr_48957_49604 = state_48948__$1;
(statearr_48957_49604[(1)] = (5));

} else {
var statearr_48958_49605 = state_48948__$1;
(statearr_48958_49605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (15))){
var inst_48938 = (state_48948[(2)]);
var state_48948__$1 = state_48948;
var statearr_48959_49606 = state_48948__$1;
(statearr_48959_49606[(2)] = inst_48938);

(statearr_48959_49606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (13))){
var state_48948__$1 = state_48948;
var statearr_48960_49607 = state_48948__$1;
(statearr_48960_49607[(2)] = null);

(statearr_48960_49607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (6))){
var inst_48913 = (state_48948[(7)]);
var inst_48934 = (inst_48913 > (0));
var state_48948__$1 = state_48948;
if(cljs.core.truth_(inst_48934)){
var statearr_48961_49608 = state_48948__$1;
(statearr_48961_49608[(1)] = (12));

} else {
var statearr_48962_49609 = state_48948__$1;
(statearr_48962_49609[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (3))){
var inst_48946 = (state_48948[(2)]);
var state_48948__$1 = state_48948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48948__$1,inst_48946);
} else {
if((state_val_48949 === (12))){
var inst_48912 = (state_48948[(8)]);
var inst_48936 = cljs.core.vec(inst_48912);
var state_48948__$1 = state_48948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48948__$1,(15),out,inst_48936);
} else {
if((state_val_48949 === (2))){
var state_48948__$1 = state_48948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48948__$1,(4),ch);
} else {
if((state_val_48949 === (11))){
var inst_48928 = (state_48948[(2)]);
var inst_48929 = (new Array(n));
var inst_48912 = inst_48929;
var inst_48913 = (0);
var state_48948__$1 = (function (){var statearr_48963 = state_48948;
(statearr_48963[(7)] = inst_48913);

(statearr_48963[(10)] = inst_48928);

(statearr_48963[(8)] = inst_48912);

return statearr_48963;
})();
var statearr_48964_49611 = state_48948__$1;
(statearr_48964_49611[(2)] = null);

(statearr_48964_49611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (9))){
var inst_48912 = (state_48948[(8)]);
var inst_48926 = cljs.core.vec(inst_48912);
var state_48948__$1 = state_48948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48948__$1,(11),out,inst_48926);
} else {
if((state_val_48949 === (5))){
var inst_48921 = (state_48948[(11)]);
var inst_48913 = (state_48948[(7)]);
var inst_48916 = (state_48948[(9)]);
var inst_48912 = (state_48948[(8)]);
var inst_48920 = (inst_48912[inst_48913] = inst_48916);
var inst_48921__$1 = (inst_48913 + (1));
var inst_48922 = (inst_48921__$1 < n);
var state_48948__$1 = (function (){var statearr_48965 = state_48948;
(statearr_48965[(11)] = inst_48921__$1);

(statearr_48965[(12)] = inst_48920);

return statearr_48965;
})();
if(cljs.core.truth_(inst_48922)){
var statearr_48966_49612 = state_48948__$1;
(statearr_48966_49612[(1)] = (8));

} else {
var statearr_48967_49613 = state_48948__$1;
(statearr_48967_49613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (14))){
var inst_48941 = (state_48948[(2)]);
var inst_48942 = cljs.core.async.close_BANG_(out);
var state_48948__$1 = (function (){var statearr_48969 = state_48948;
(statearr_48969[(13)] = inst_48941);

return statearr_48969;
})();
var statearr_48970_49618 = state_48948__$1;
(statearr_48970_49618[(2)] = inst_48942);

(statearr_48970_49618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (10))){
var inst_48932 = (state_48948[(2)]);
var state_48948__$1 = state_48948;
var statearr_48971_49619 = state_48948__$1;
(statearr_48971_49619[(2)] = inst_48932);

(statearr_48971_49619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48949 === (8))){
var inst_48921 = (state_48948[(11)]);
var inst_48912 = (state_48948[(8)]);
var tmp48968 = inst_48912;
var inst_48912__$1 = tmp48968;
var inst_48913 = inst_48921;
var state_48948__$1 = (function (){var statearr_48972 = state_48948;
(statearr_48972[(7)] = inst_48913);

(statearr_48972[(8)] = inst_48912__$1);

return statearr_48972;
})();
var statearr_48973_49620 = state_48948__$1;
(statearr_48973_49620[(2)] = null);

(statearr_48973_49620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_48974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48974[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_48974[(1)] = (1));

return statearr_48974;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_48948){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_48948);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e48975){var ex__47287__auto__ = e48975;
var statearr_48976_49621 = state_48948;
(statearr_48976_49621[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_48948[(4)]))){
var statearr_48977_49622 = state_48948;
(statearr_48977_49622[(1)] = cljs.core.first((state_48948[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49623 = state_48948;
state_48948 = G__49623;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_48948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_48948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_48978 = f__47320__auto__();
(statearr_48978[(6)] = c__47319__auto___49601);

return statearr_48978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48981 = arguments.length;
switch (G__48981) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47319__auto___49625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_49028){
var state_val_49029 = (state_49028[(1)]);
if((state_val_49029 === (7))){
var inst_49024 = (state_49028[(2)]);
var state_49028__$1 = state_49028;
var statearr_49030_49626 = state_49028__$1;
(statearr_49030_49626[(2)] = inst_49024);

(statearr_49030_49626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (1))){
var inst_48983 = [];
var inst_48984 = inst_48983;
var inst_48985 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49028__$1 = (function (){var statearr_49031 = state_49028;
(statearr_49031[(7)] = inst_48984);

(statearr_49031[(8)] = inst_48985);

return statearr_49031;
})();
var statearr_49032_49627 = state_49028__$1;
(statearr_49032_49627[(2)] = null);

(statearr_49032_49627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (4))){
var inst_48988 = (state_49028[(9)]);
var inst_48988__$1 = (state_49028[(2)]);
var inst_48989 = (inst_48988__$1 == null);
var inst_48990 = cljs.core.not(inst_48989);
var state_49028__$1 = (function (){var statearr_49033 = state_49028;
(statearr_49033[(9)] = inst_48988__$1);

return statearr_49033;
})();
if(inst_48990){
var statearr_49034_49628 = state_49028__$1;
(statearr_49034_49628[(1)] = (5));

} else {
var statearr_49035_49629 = state_49028__$1;
(statearr_49035_49629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (15))){
var inst_48984 = (state_49028[(7)]);
var inst_49016 = cljs.core.vec(inst_48984);
var state_49028__$1 = state_49028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49028__$1,(18),out,inst_49016);
} else {
if((state_val_49029 === (13))){
var inst_49011 = (state_49028[(2)]);
var state_49028__$1 = state_49028;
var statearr_49036_49630 = state_49028__$1;
(statearr_49036_49630[(2)] = inst_49011);

(statearr_49036_49630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (6))){
var inst_48984 = (state_49028[(7)]);
var inst_49013 = inst_48984.length;
var inst_49014 = (inst_49013 > (0));
var state_49028__$1 = state_49028;
if(cljs.core.truth_(inst_49014)){
var statearr_49037_49631 = state_49028__$1;
(statearr_49037_49631[(1)] = (15));

} else {
var statearr_49038_49632 = state_49028__$1;
(statearr_49038_49632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (17))){
var inst_49021 = (state_49028[(2)]);
var inst_49022 = cljs.core.async.close_BANG_(out);
var state_49028__$1 = (function (){var statearr_49039 = state_49028;
(statearr_49039[(10)] = inst_49021);

return statearr_49039;
})();
var statearr_49040_49633 = state_49028__$1;
(statearr_49040_49633[(2)] = inst_49022);

(statearr_49040_49633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (3))){
var inst_49026 = (state_49028[(2)]);
var state_49028__$1 = state_49028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49028__$1,inst_49026);
} else {
if((state_val_49029 === (12))){
var inst_48984 = (state_49028[(7)]);
var inst_49004 = cljs.core.vec(inst_48984);
var state_49028__$1 = state_49028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49028__$1,(14),out,inst_49004);
} else {
if((state_val_49029 === (2))){
var state_49028__$1 = state_49028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49028__$1,(4),ch);
} else {
if((state_val_49029 === (11))){
var inst_48984 = (state_49028[(7)]);
var inst_48988 = (state_49028[(9)]);
var inst_48992 = (state_49028[(11)]);
var inst_49001 = inst_48984.push(inst_48988);
var tmp49041 = inst_48984;
var inst_48984__$1 = tmp49041;
var inst_48985 = inst_48992;
var state_49028__$1 = (function (){var statearr_49042 = state_49028;
(statearr_49042[(7)] = inst_48984__$1);

(statearr_49042[(8)] = inst_48985);

(statearr_49042[(12)] = inst_49001);

return statearr_49042;
})();
var statearr_49043_49634 = state_49028__$1;
(statearr_49043_49634[(2)] = null);

(statearr_49043_49634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (9))){
var inst_48985 = (state_49028[(8)]);
var inst_48996 = cljs.core.keyword_identical_QMARK_(inst_48985,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49028__$1 = state_49028;
var statearr_49044_49635 = state_49028__$1;
(statearr_49044_49635[(2)] = inst_48996);

(statearr_49044_49635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (5))){
var inst_48985 = (state_49028[(8)]);
var inst_48993 = (state_49028[(13)]);
var inst_48988 = (state_49028[(9)]);
var inst_48992 = (state_49028[(11)]);
var inst_48992__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48988) : f.call(null,inst_48988));
var inst_48993__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48992__$1,inst_48985);
var state_49028__$1 = (function (){var statearr_49045 = state_49028;
(statearr_49045[(13)] = inst_48993__$1);

(statearr_49045[(11)] = inst_48992__$1);

return statearr_49045;
})();
if(inst_48993__$1){
var statearr_49046_49636 = state_49028__$1;
(statearr_49046_49636[(1)] = (8));

} else {
var statearr_49047_49637 = state_49028__$1;
(statearr_49047_49637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (14))){
var inst_48988 = (state_49028[(9)]);
var inst_48992 = (state_49028[(11)]);
var inst_49006 = (state_49028[(2)]);
var inst_49007 = [];
var inst_49008 = inst_49007.push(inst_48988);
var inst_48984 = inst_49007;
var inst_48985 = inst_48992;
var state_49028__$1 = (function (){var statearr_49048 = state_49028;
(statearr_49048[(7)] = inst_48984);

(statearr_49048[(8)] = inst_48985);

(statearr_49048[(14)] = inst_49006);

(statearr_49048[(15)] = inst_49008);

return statearr_49048;
})();
var statearr_49052_49638 = state_49028__$1;
(statearr_49052_49638[(2)] = null);

(statearr_49052_49638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (16))){
var state_49028__$1 = state_49028;
var statearr_49053_49639 = state_49028__$1;
(statearr_49053_49639[(2)] = null);

(statearr_49053_49639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (10))){
var inst_48998 = (state_49028[(2)]);
var state_49028__$1 = state_49028;
if(cljs.core.truth_(inst_48998)){
var statearr_49054_49640 = state_49028__$1;
(statearr_49054_49640[(1)] = (11));

} else {
var statearr_49055_49641 = state_49028__$1;
(statearr_49055_49641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (18))){
var inst_49018 = (state_49028[(2)]);
var state_49028__$1 = state_49028;
var statearr_49056_49642 = state_49028__$1;
(statearr_49056_49642[(2)] = inst_49018);

(statearr_49056_49642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49029 === (8))){
var inst_48993 = (state_49028[(13)]);
var state_49028__$1 = state_49028;
var statearr_49057_49643 = state_49028__$1;
(statearr_49057_49643[(2)] = inst_48993);

(statearr_49057_49643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47284__auto__ = null;
var cljs$core$async$state_machine__47284__auto____0 = (function (){
var statearr_49058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49058[(0)] = cljs$core$async$state_machine__47284__auto__);

(statearr_49058[(1)] = (1));

return statearr_49058;
});
var cljs$core$async$state_machine__47284__auto____1 = (function (state_49028){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_49028);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e49059){var ex__47287__auto__ = e49059;
var statearr_49060_49644 = state_49028;
(statearr_49060_49644[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_49028[(4)]))){
var statearr_49061_49645 = state_49028;
(statearr_49061_49645[(1)] = cljs.core.first((state_49028[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49646 = state_49028;
state_49028 = G__49646;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
cljs$core$async$state_machine__47284__auto__ = function(state_49028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47284__auto____1.call(this,state_49028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47284__auto____0;
cljs$core$async$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47284__auto____1;
return cljs$core$async$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_49063 = f__47320__auto__();
(statearr_49063[(6)] = c__47319__auto___49625);

return statearr_49063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
