goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_52806 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_52806(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_52810 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_52810(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_52812 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_52812(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_52813 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_52813(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_52815 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_52815(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52719){
var vec__52720 = p__52719;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52720,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52720,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4251__auto__ = delay;
if(cljs.core.truth_(and__4251__auto__)){
return (delay > (0));
} else {
return and__4251__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_52817 = (function (animator){
var x__4550__auto__ = (((animator == null))?null:animator);
var m__4551__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4551__auto__.call(null,animator));
} else {
var m__4549__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4549__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_52817(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_52818 = (function (animator){
var x__4550__auto__ = (((animator == null))?null:animator);
var m__4551__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4551__auto__.call(null,animator));
} else {
var m__4549__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4549__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_52818(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_52819 = (function (animator){
var x__4550__auto__ = (((animator == null))?null:animator);
var m__4551__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4551__auto__.call(null,animator));
} else {
var m__4549__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4549__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_52819(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_52820 = (function (animator){
var x__4550__auto__ = (((animator == null))?null:animator);
var m__4551__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4551__auto__.call(null,animator));
} else {
var m__4549__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4549__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_52820(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4741__auto__ = self__.items.length;
var i__51667__auto__ = (0);
while(true){
if((i__51667__auto__ < n__4741__auto__)){
var map__52723_52821 = (self__.items[i__51667__auto__]);
var map__52723_52822__$1 = cljs.core.__destructure_map(map__52723_52821);
var el_52823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723_52822__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_52824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723_52822__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_52823,from_52824);

var G__52825 = (i__51667__auto__ + (1));
i__51667__auto__ = G__52825;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4741__auto__ = self__.items.length;
var i__51667__auto__ = (0);
while(true){
if((i__51667__auto__ < n__4741__auto__)){
var map__52724_52826 = (self__.items[i__51667__auto__]);
var map__52724_52827__$1 = cljs.core.__destructure_map(map__52724_52826);
var el_52828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724_52827__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_52829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724_52827__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_52830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52724_52827__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_52829["transition"] = transition_52830);

goog.style.setStyle(el_52828,to_52829);

var G__52831 = (i__51667__auto__ + (1));
i__51667__auto__ = G__52831;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4741__auto__ = self__.items.length;
var i__51667__auto__ = (0);
while(true){
if((i__51667__auto__ < n__4741__auto__)){
var map__52725_52832 = (self__.items[i__51667__auto__]);
var map__52725_52833__$1 = cljs.core.__destructure_map(map__52725_52832);
var el_52834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725_52833__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_52835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725_52833__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_52835["transition"] = null);

goog.style.setStyle(el_52834,toggles_52835);

var G__52836 = (i__51667__auto__ + (1));
i__51667__auto__ = G__52836;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k52727,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__52731 = k52727;
var G__52731__$1 = (((G__52731 instanceof cljs.core.Keyword))?G__52731.fqn:null);
switch (G__52731__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52727,else__4505__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__52732){
var vec__52733 = p__52732;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52733,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52726){
var self__ = this;
var G__52726__$1 = this;
return (new cljs.core.RecordIter((0),G__52726__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52728,other52729){
var self__ = this;
var this52728__$1 = this;
return (((!((other52729 == null)))) && ((((this52728__$1.constructor === other52729.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.el,other52729.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.from,other52729.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.to,other52729.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.toggles,other52729.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.transition,other52729.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.__extmap,other52729.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k52727){
var self__ = this;
var this__4509__auto____$1 = this;
var G__52736 = k52727;
var G__52736__$1 = (((G__52736 instanceof cljs.core.Keyword))?G__52736.fqn:null);
switch (G__52736__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52727);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__52726){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__52737 = cljs.core.keyword_identical_QMARK_;
var expr__52738 = k__4511__auto__;
if(cljs.core.truth_((pred__52737.cljs$core$IFn$_invoke$arity$2 ? pred__52737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__52738) : pred__52737.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__52738)))){
return (new shadow.animate.AnimationStep(G__52726,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52737.cljs$core$IFn$_invoke$arity$2 ? pred__52737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__52738) : pred__52737.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__52738)))){
return (new shadow.animate.AnimationStep(self__.el,G__52726,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52737.cljs$core$IFn$_invoke$arity$2 ? pred__52737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__52738) : pred__52737.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__52738)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__52726,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52737.cljs$core$IFn$_invoke$arity$2 ? pred__52737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__52738) : pred__52737.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__52738)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__52726,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52737.cljs$core$IFn$_invoke$arity$2 ? pred__52737.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__52738) : pred__52737.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__52738)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__52726,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__52726),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__52726){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__52726,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__52730){
var extmap__4542__auto__ = (function (){var G__52740 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52730,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__52730)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52740);
} else {
return G__52740;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__52730),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__52730),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__52730),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__52730),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__52730),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$animate$setup_$_iter__52741(s__52742){
return (new cljs.core.LazySeq(null,(function (){
var s__52742__$1 = s__52742;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52742__$1);
if(temp__5753__auto__){
var s__52742__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52742__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52742__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52744 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52743 = (0);
while(true){
if((i__52743 < size__4651__auto__)){
var vec__52745 = cljs.core._nth(c__4650__auto__,i__52743);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52745,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52745,(1),null);
cljs.core.chunk_append(b__52744,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__52839 = (i__52743 + (1));
i__52743 = G__52839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52744),shadow$animate$setup_$_iter__52741(cljs.core.chunk_rest(s__52742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52744),null);
}
} else {
var vec__52749 = cljs.core.first(s__52742__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52749,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52749,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__52741(cljs.core.rest(s__52742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_52759){
var state_val_52760 = (state_52759[(1)]);
if((state_val_52760 === (1))){
var inst_52753 = shadow.animate.get_duration(animator);
var inst_52754 = cljs.core.async.timeout(inst_52753);
var state_52759__$1 = state_52759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52759__$1,(2),inst_52754);
} else {
if((state_val_52760 === (2))){
var inst_52756 = (state_52759[(2)]);
var inst_52757 = shadow.animate.finish_BANG_(animator);
var state_52759__$1 = (function (){var statearr_52761 = state_52759;
(statearr_52761[(7)] = inst_52756);

(statearr_52761[(8)] = inst_52757);

return statearr_52761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52759__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__47284__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__47284__auto____0 = (function (){
var statearr_52762 = [null,null,null,null,null,null,null,null,null];
(statearr_52762[(0)] = shadow$animate$continue_BANG__$_state_machine__47284__auto__);

(statearr_52762[(1)] = (1));

return statearr_52762;
});
var shadow$animate$continue_BANG__$_state_machine__47284__auto____1 = (function (state_52759){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_52759);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e52763){var ex__47287__auto__ = e52763;
var statearr_52764_52840 = state_52759;
(statearr_52764_52840[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_52759[(4)]))){
var statearr_52765_52841 = state_52759;
(statearr_52765_52841[(1)] = cljs.core.first((state_52759[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52842 = state_52759;
state_52759 = G__52842;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__47284__auto__ = function(state_52759){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__47284__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__47284__auto____1.call(this,state_52759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__47284__auto____0;
shadow$animate$continue_BANG__$_state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__47284__auto____1;
return shadow$animate$continue_BANG__$_state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_52766 = f__47320__auto__();
(statearr_52766[(6)] = c__47319__auto__);

return statearr_52766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__52768 = arguments.length;
switch (G__52768) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52769 = (function (attr,from,to,timing,delay,meta52770){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta52770 = meta52770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52771,meta52770__$1){
var self__ = this;
var _52771__$1 = this;
return (new shadow.animate.t_shadow$animate52769(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta52770__$1));
}));

(shadow.animate.t_shadow$animate52769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52771){
var self__ = this;
var _52771__$1 = this;
return self__.meta52770;
}));

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate52769.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate52769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta52770","meta52770",1457790867,null)], null);
}));

(shadow.animate.t_shadow$animate52769.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52769.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52769");

(shadow.animate.t_shadow$animate52769.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52769");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52769.
 */
shadow.animate.__GT_t_shadow$animate52769 = (function shadow$animate$__GT_t_shadow$animate52769(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta52770){
return (new shadow.animate.t_shadow$animate52769(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta52770));
});

}

return (new shadow.animate.t_shadow$animate52769(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52772 = (function (attr,from,to,meta52773){
this.attr = attr;
this.from = from;
this.to = to;
this.meta52773 = meta52773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52774,meta52773__$1){
var self__ = this;
var _52774__$1 = this;
return (new shadow.animate.t_shadow$animate52772(self__.attr,self__.from,self__.to,meta52773__$1));
}));

(shadow.animate.t_shadow$animate52772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52774){
var self__ = this;
var _52774__$1 = this;
return self__.meta52773;
}));

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52772.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52772.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta52773","meta52773",-920596885,null)], null);
}));

(shadow.animate.t_shadow$animate52772.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52772.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52772");

(shadow.animate.t_shadow$animate52772.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52772");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52772.
 */
shadow.animate.__GT_t_shadow$animate52772 = (function shadow$animate$toggle_$___GT_t_shadow$animate52772(attr__$1,from__$1,to__$1,meta52773){
return (new shadow.animate.t_shadow$animate52772(attr__$1,from__$1,to__$1,meta52773));
});

}

return (new shadow.animate.t_shadow$animate52772(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__52776 = arguments.length;
switch (G__52776) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52777 = (function (attrs,meta52778){
this.attrs = attrs;
this.meta52778 = meta52778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52779,meta52778__$1){
var self__ = this;
var _52779__$1 = this;
return (new shadow.animate.t_shadow$animate52777(self__.attrs,meta52778__$1));
}));

(shadow.animate.t_shadow$animate52777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52779){
var self__ = this;
var _52779__$1 = this;
return self__.meta52778;
}));

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52777.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52778","meta52778",1088686845,null)], null);
}));

(shadow.animate.t_shadow$animate52777.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52777.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52777");

(shadow.animate.t_shadow$animate52777.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52777");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52777.
 */
shadow.animate.__GT_t_shadow$animate52777 = (function shadow$animate$__GT_t_shadow$animate52777(attrs__$1,meta52778){
return (new shadow.animate.t_shadow$animate52777(attrs__$1,meta52778));
});

}

return (new shadow.animate.t_shadow$animate52777(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52780 = (function (attr,meta52781){
this.attr = attr;
this.meta52781 = meta52781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52782,meta52781__$1){
var self__ = this;
var _52782__$1 = this;
return (new shadow.animate.t_shadow$animate52780(self__.attr,meta52781__$1));
}));

(shadow.animate.t_shadow$animate52780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52782){
var self__ = this;
var _52782__$1 = this;
return self__.meta52781;
}));

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52780.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta52781","meta52781",-398609986,null)], null);
}));

(shadow.animate.t_shadow$animate52780.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52780.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52780");

(shadow.animate.t_shadow$animate52780.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52780");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52780.
 */
shadow.animate.__GT_t_shadow$animate52780 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate52780(attr__$1,meta52781){
return (new shadow.animate.t_shadow$animate52780(attr__$1,meta52781));
});

}

return (new shadow.animate.t_shadow$animate52780(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52845 = arguments.length;
var i__4865__auto___52846 = (0);
while(true){
if((i__4865__auto___52846 < len__4864__auto___52845)){
args__4870__auto__.push((arguments[i__4865__auto___52846]));

var G__52847 = (i__4865__auto___52846 + (1));
i__4865__auto___52846 = G__52847;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5751__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var adef = temp__5751__auto__;
var G__52848 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__52849 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__52850 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__52851 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__52852 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__52853 = cljs.core.rest(transitions__$1);
to = G__52848;
from = G__52849;
toggles = G__52850;
timings = G__52851;
delays = G__52852;
transitions__$1 = G__52853;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52787 = (function (transitions,to,from,toggles,timings,delays,temp__5751__auto__,meta52788){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5751__auto__ = temp__5751__auto__;
this.meta52788 = meta52788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_52789,meta52788__$1){
var self__ = this;
var _52789__$1 = this;
return (new shadow.animate.t_shadow$animate52787(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5751__auto__,meta52788__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_52789){
var self__ = this;
var _52789__$1 = this;
return self__.meta52788;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"meta52788","meta52788",-1080287774,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate52787.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52787.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52787");

(shadow.animate.t_shadow$animate52787.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52787");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate52787.
 */
shadow.animate.__GT_t_shadow$animate52787 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function shadow$animate$__GT_t_shadow$animate52787(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta52788){
return (new shadow.animate.t_shadow$animate52787(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta52788));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
;

}

return (new shadow.animate.t_shadow$animate52787(transitions__$1,to,from,toggles,timings,delays,temp__5751__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq52783){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52783));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__52791 = arguments.length;
switch (G__52791) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__52793 = arguments.length;
switch (G__52793) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__52795 = arguments.length;
switch (G__52795) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52796 = (function (from,to,timing,delay,meta52797){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta52797 = meta52797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52798,meta52797__$1){
var self__ = this;
var _52798__$1 = this;
return (new shadow.animate.t_shadow$animate52796(self__.from,self__.to,self__.timing,self__.delay,meta52797__$1));
}));

(shadow.animate.t_shadow$animate52796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52798){
var self__ = this;
var _52798__$1 = this;
return self__.meta52797;
}));

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52796.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate52796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta52797","meta52797",-807879079,null)], null);
}));

(shadow.animate.t_shadow$animate52796.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52796.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52796");

(shadow.animate.t_shadow$animate52796.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52796");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52796.
 */
shadow.animate.__GT_t_shadow$animate52796 = (function shadow$animate$__GT_t_shadow$animate52796(from__$1,to__$1,timing__$1,delay__$1,meta52797){
return (new shadow.animate.t_shadow$animate52796(from__$1,to__$1,timing__$1,delay__$1,meta52797));
});

}

return (new shadow.animate.t_shadow$animate52796(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__52800 = arguments.length;
switch (G__52800) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate52801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate52801 = (function (from,to,timing,delay,meta52802){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta52802 = meta52802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate52801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52803,meta52802__$1){
var self__ = this;
var _52803__$1 = this;
return (new shadow.animate.t_shadow$animate52801(self__.from,self__.to,self__.timing,self__.delay,meta52802__$1));
}));

(shadow.animate.t_shadow$animate52801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52803){
var self__ = this;
var _52803__$1 = this;
return self__.meta52802;
}));

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate52801.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate52801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta52802","meta52802",-2003368802,null)], null);
}));

(shadow.animate.t_shadow$animate52801.cljs$lang$type = true);

(shadow.animate.t_shadow$animate52801.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate52801");

(shadow.animate.t_shadow$animate52801.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.animate/t_shadow$animate52801");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate52801.
 */
shadow.animate.__GT_t_shadow$animate52801 = (function shadow$animate$__GT_t_shadow$animate52801(from__$1,to__$1,timing__$1,delay__$1,meta52802){
return (new shadow.animate.t_shadow$animate52801(from__$1,to__$1,timing__$1,delay__$1,meta52802));
});

}

return (new shadow.animate.t_shadow$animate52801(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
