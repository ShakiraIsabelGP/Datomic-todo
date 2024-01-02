goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790 = (function (val,meta45791){
this.val = val;
this.meta45791 = meta45791;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45792,meta45791__$1){
var self__ = this;
var _45792__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790(self__.val,meta45791__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45792){
var self__ = this;
var _45792__$1 = this;
return self__.meta45791;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta45791","meta45791",430495737,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels45790");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels45790");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels45790.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels45790 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels45790(val__$1,meta45791){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790(val__$1,meta45791));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels45790(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_45809 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_45809(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_45810 = self__.puts.pop();
if((putter_45810 == null)){
} else {
var put_handler_45811 = putter_45810.handler;
var val_45812 = putter_45810.val;
if(put_handler_45811.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_45813 = put_handler_45811.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_45813,put_handler_45811,val_45812,putter_45810,this$__$1){
return (function (){
return (put_cb_45813.cljs$core$IFn$_invoke$arity$1 ? put_cb_45813.cljs$core$IFn$_invoke$arity$1(true) : put_cb_45813.call(null,true));
});})(put_cb_45813,put_handler_45811,val_45812,putter_45810,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = self__.buf;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4251__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__45814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__45814;
continue;
} else {
var G__45815 = takers;
takers = G__45815;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__45793_45816 = cljs.core.seq(take_cbs);
var chunk__45794_45817 = null;
var count__45795_45818 = (0);
var i__45796_45819 = (0);
while(true){
if((i__45796_45819 < count__45795_45818)){
var f_45820 = chunk__45794_45817.cljs$core$IIndexed$_nth$arity$2(null,i__45796_45819);
cljs.core.async.impl.dispatch.run(f_45820);


var G__45821 = seq__45793_45816;
var G__45822 = chunk__45794_45817;
var G__45823 = count__45795_45818;
var G__45824 = (i__45796_45819 + (1));
seq__45793_45816 = G__45821;
chunk__45794_45817 = G__45822;
count__45795_45818 = G__45823;
i__45796_45819 = G__45824;
continue;
} else {
var temp__5753__auto___45825 = cljs.core.seq(seq__45793_45816);
if(temp__5753__auto___45825){
var seq__45793_45826__$1 = temp__5753__auto___45825;
if(cljs.core.chunked_seq_QMARK_(seq__45793_45826__$1)){
var c__4679__auto___45827 = cljs.core.chunk_first(seq__45793_45826__$1);
var G__45828 = cljs.core.chunk_rest(seq__45793_45826__$1);
var G__45829 = c__4679__auto___45827;
var G__45830 = cljs.core.count(c__4679__auto___45827);
var G__45831 = (0);
seq__45793_45816 = G__45828;
chunk__45794_45817 = G__45829;
count__45795_45818 = G__45830;
i__45796_45819 = G__45831;
continue;
} else {
var f_45832 = cljs.core.first(seq__45793_45826__$1);
cljs.core.async.impl.dispatch.run(f_45832);


var G__45833 = cljs.core.next(seq__45793_45826__$1);
var G__45834 = null;
var G__45835 = (0);
var G__45836 = (0);
seq__45793_45816 = G__45833;
chunk__45794_45817 = G__45834;
count__45795_45818 = G__45835;
i__45796_45819 = G__45836;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5751__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5751__auto__)){
var take_cb = temp__5751__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__45797 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__4251__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__4251__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__45837 = cbs__$1;
cbs = G__45837;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45797,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__45800_45838 = cljs.core.seq(cbs);
var chunk__45801_45839 = null;
var count__45802_45840 = (0);
var i__45803_45841 = (0);
while(true){
if((i__45803_45841 < count__45802_45840)){
var cb_45842 = chunk__45801_45839.cljs$core$IIndexed$_nth$arity$2(null,i__45803_45841);
cljs.core.async.impl.dispatch.run(((function (seq__45800_45838,chunk__45801_45839,count__45802_45840,i__45803_45841,cb_45842,val,vec__45797,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_45842.cljs$core$IFn$_invoke$arity$1 ? cb_45842.cljs$core$IFn$_invoke$arity$1(true) : cb_45842.call(null,true));
});})(seq__45800_45838,chunk__45801_45839,count__45802_45840,i__45803_45841,cb_45842,val,vec__45797,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__45843 = seq__45800_45838;
var G__45844 = chunk__45801_45839;
var G__45845 = count__45802_45840;
var G__45846 = (i__45803_45841 + (1));
seq__45800_45838 = G__45843;
chunk__45801_45839 = G__45844;
count__45802_45840 = G__45845;
i__45803_45841 = G__45846;
continue;
} else {
var temp__5753__auto___45847 = cljs.core.seq(seq__45800_45838);
if(temp__5753__auto___45847){
var seq__45800_45848__$1 = temp__5753__auto___45847;
if(cljs.core.chunked_seq_QMARK_(seq__45800_45848__$1)){
var c__4679__auto___45849 = cljs.core.chunk_first(seq__45800_45848__$1);
var G__45850 = cljs.core.chunk_rest(seq__45800_45848__$1);
var G__45851 = c__4679__auto___45849;
var G__45852 = cljs.core.count(c__4679__auto___45849);
var G__45853 = (0);
seq__45800_45838 = G__45850;
chunk__45801_45839 = G__45851;
count__45802_45840 = G__45852;
i__45803_45841 = G__45853;
continue;
} else {
var cb_45854 = cljs.core.first(seq__45800_45848__$1);
cljs.core.async.impl.dispatch.run(((function (seq__45800_45838,chunk__45801_45839,count__45802_45840,i__45803_45841,cb_45854,seq__45800_45848__$1,temp__5753__auto___45847,val,vec__45797,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_45854.cljs$core$IFn$_invoke$arity$1 ? cb_45854.cljs$core$IFn$_invoke$arity$1(true) : cb_45854.call(null,true));
});})(seq__45800_45838,chunk__45801_45839,count__45802_45840,i__45803_45841,cb_45854,seq__45800_45848__$1,temp__5753__auto___45847,val,vec__45797,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__45855 = cljs.core.next(seq__45800_45848__$1);
var G__45856 = null;
var G__45857 = (0);
var G__45858 = (0);
seq__45800_45838 = G__45855;
chunk__45801_45839 = G__45856;
count__45802_45840 = G__45857;
i__45803_45841 = G__45858;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})())){
var has_val = (function (){var and__4251__auto__ = self__.buf;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4251__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4251__auto__ = self__.buf;
if(cljs.core.truth_(and__4251__auto__)){
return (self__.puts.length === (0));
} else {
return and__4251__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_45859 = self__.takes.pop();
if((taker_45859 == null)){
} else {
if(taker_45859.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_45860 = taker_45859.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_45861 = (cljs.core.truth_((function (){var and__4251__auto__ = self__.buf;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4251__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_45860,val_45861,taker_45859,this$__$1){
return (function (){
return (take_cb_45860.cljs$core$IFn$_invoke$arity$1 ? take_cb_45860.cljs$core$IFn$_invoke$arity$1(val_45861) : take_cb_45860.call(null,val_45861));
});})(take_cb_45860,val_45861,taker_45859,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__45804 = (function (){var or__4253__auto__ = exh;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__45804.cljs$core$IFn$_invoke$arity$1 ? fexpr__45804.cljs$core$IFn$_invoke$arity$1(t) : fexpr__45804.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__45806 = arguments.length;
switch (G__45806) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__45863 = null;
var G__45863__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e45807){var t = e45807;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__45863__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e45808){var t = e45808;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__45863 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__45863__1.call(this,buf__$1);
case 2:
return G__45863__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45863.cljs$core$IFn$_invoke$arity$1 = G__45863__1;
G__45863.cljs$core$IFn$_invoke$arity$2 = G__45863__2;
return G__45863;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
