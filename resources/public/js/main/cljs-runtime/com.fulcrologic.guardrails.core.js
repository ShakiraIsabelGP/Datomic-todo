goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__47319__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47320__auto__ = (function (){var switch__47283__auto__ = (function (state_49717){
var state_val_49718 = (state_49717[(1)]);
if((state_val_49718 === (7))){
var inst_49713 = (state_49717[(2)]);
var state_49717__$1 = state_49717;
var statearr_49719_49760 = state_49717__$1;
(statearr_49719_49760[(2)] = inst_49713);

(statearr_49719_49760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (1))){
var state_49717__$1 = state_49717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49717__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49718 === (4))){
var inst_49715 = (state_49717[(2)]);
var state_49717__$1 = state_49717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49717__$1,inst_49715);
} else {
if((state_val_49718 === (6))){
var inst_49711 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_49717__$1 = state_49717;
var statearr_49720_49761 = state_49717__$1;
(statearr_49720_49761[(2)] = inst_49711);

(statearr_49720_49761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (3))){
var inst_49694 = (state_49717[(7)]);
var state_49717__$1 = state_49717;
if(cljs.core.truth_(inst_49694)){
var statearr_49721_49762 = state_49717__$1;
(statearr_49721_49762[(1)] = (5));

} else {
var statearr_49722_49763 = state_49717__$1;
(statearr_49722_49763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (12))){
var inst_49708 = (state_49717[(2)]);
var inst_49694 = inst_49708;
var state_49717__$1 = (function (){var statearr_49724 = state_49717;
(statearr_49724[(7)] = inst_49694);

return statearr_49724;
})();
var statearr_49725_49764 = state_49717__$1;
(statearr_49725_49764[(2)] = null);

(statearr_49725_49764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (2))){
var inst_49693 = (state_49717[(2)]);
var inst_49694 = inst_49693;
var state_49717__$1 = (function (){var statearr_49726 = state_49717;
(statearr_49726[(7)] = inst_49694);

return statearr_49726;
})();
var statearr_49727_49765 = state_49717__$1;
(statearr_49727_49765[(2)] = null);

(statearr_49727_49765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (11))){
var _ = (function (){var statearr_49728 = state_49717;
(statearr_49728[(4)] = cljs.core.rest((state_49717[(4)])));

return statearr_49728;
})();
var state_49717__$1 = state_49717;
var ex49723 = (state_49717__$1[(2)]);
var statearr_49729_49766 = state_49717__$1;
(statearr_49729_49766[(5)] = ex49723);


var statearr_49730_49767 = state_49717__$1;
(statearr_49730_49767[(1)] = (10));

(statearr_49730_49767[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (9))){
var inst_49706 = (state_49717[(2)]);
var state_49717__$1 = (function (){var statearr_49731 = state_49717;
(statearr_49731[(8)] = inst_49706);

return statearr_49731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49717__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_49718 === (5))){
var state_49717__$1 = state_49717;
var statearr_49732_49769 = state_49717__$1;
(statearr_49732_49769[(2)] = null);

(statearr_49732_49769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (10))){
var inst_49697 = (state_49717[(2)]);
var state_49717__$1 = (function (){var statearr_49733 = state_49717;
(statearr_49733[(9)] = inst_49697);

return statearr_49733;
})();
var statearr_49734_49771 = state_49717__$1;
(statearr_49734_49771[(2)] = null);

(statearr_49734_49771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49718 === (8))){
var inst_49694 = (state_49717[(7)]);
var _ = (function (){var statearr_49735 = state_49717;
(statearr_49735[(4)] = cljs.core.cons((11),(state_49717[(4)])));

return statearr_49735;
})();
var inst_49703 = (inst_49694.cljs$core$IFn$_invoke$arity$0 ? inst_49694.cljs$core$IFn$_invoke$arity$0() : inst_49694.call(null));
var ___$1 = (function (){var statearr_49736 = state_49717;
(statearr_49736[(4)] = cljs.core.rest((state_49717[(4)])));

return statearr_49736;
})();
var state_49717__$1 = state_49717;
var statearr_49737_49772 = state_49717__$1;
(statearr_49737_49772[(2)] = inst_49703);

(statearr_49737_49772[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__47284__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__47284__auto____0 = (function (){
var statearr_49738 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49738[(0)] = com$fulcrologic$guardrails$core$state_machine__47284__auto__);

(statearr_49738[(1)] = (1));

return statearr_49738;
});
var com$fulcrologic$guardrails$core$state_machine__47284__auto____1 = (function (state_49717){
while(true){
var ret_value__47285__auto__ = (function (){try{while(true){
var result__47286__auto__ = switch__47283__auto__(state_49717);
if(cljs.core.keyword_identical_QMARK_(result__47286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47286__auto__;
}
break;
}
}catch (e49739){var ex__47287__auto__ = e49739;
var statearr_49740_49773 = state_49717;
(statearr_49740_49773[(2)] = ex__47287__auto__);


if(cljs.core.seq((state_49717[(4)]))){
var statearr_49741_49774 = state_49717;
(statearr_49741_49774[(1)] = cljs.core.first((state_49717[(4)])));

} else {
throw ex__47287__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49775 = state_49717;
state_49717 = G__49775;
continue;
} else {
return ret_value__47285__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__47284__auto__ = function(state_49717){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__47284__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__47284__auto____1.call(this,state_49717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__47284__auto____0;
com$fulcrologic$guardrails$core$state_machine__47284__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__47284__auto____1;
return com$fulcrologic$guardrails$core$state_machine__47284__auto__;
})()
})();
var state__47321__auto__ = (function (){var statearr_49742 = f__47320__auto__();
(statearr_49742[(6)] = c__47319__auto__);

return statearr_49742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47321__auto__);
}));

return c__47319__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__49743 = data;
var map__49743__$1 = cljs.core.__destructure_map(map__49743);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49743__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__49744,spec,value){
var map__49745 = p__49744;
var map__49745__$1 = cljs.core.__destructure_map(map__49745);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_49776 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__49777 = (function (){var and__4251__auto__ = args_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return vararg_QMARK_;
} else {
return and__4251__auto__;
}
})();
var varg_49778 = (cljs.core.truth_(vargs_QMARK__49777)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_49779 = (cljs.core.truth_(vargs_QMARK__49777)?((cljs.core.map_QMARK_(varg_49778))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_49778))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_49778))):value);
var valid_exception_49780 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_49779)){
} else {
var problem_49785 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_49779,expound_opts);
var description_49786 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_49785)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_49780,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_49786,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_49779], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_49786,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = callsite;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e49746){var e_49787 = e49746;
com.fulcrologic.guardrails.utils.report_exception(e_49787,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_49788 = (com.fulcrologic.guardrails.core.now_ms() - start_49776);
if((duration_49788 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_49788),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_49780))){
throw cljs.core.deref(valid_exception_49780);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
