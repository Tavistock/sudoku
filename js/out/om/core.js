// Compiled by ClojureScript 0.0-2371
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj17001 = {};return obj17001;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.display_name[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.display_name["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj17003 = {};return obj17003;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.init_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.init_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj17005 = {};return obj17005;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.should_update[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.should_update["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj17007 = {};return obj17007;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.will_mount[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.will_mount["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj17009 = {};return obj17009;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.did_mount[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.did_mount["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj17011 = {};return obj17011;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.will_unmount[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.will_unmount["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj17013 = {};return obj17013;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.will_update[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.will_update["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj17015 = {};return obj17015;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.did_update[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.did_update["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj17017 = {};return obj17017;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.will_receive_props[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.will_receive_props["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj17019 = {};return obj17019;
})();
om.core.render = (function render(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.render[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.render["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj17021 = {};return obj17021;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.render_props[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.render_props["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj17023 = {};return obj17023;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core.render_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core.render_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj17025 = {};return obj17025;
})();
om.core.IOmSwap = (function (){var obj17027 = {};return obj17027;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj17029 = {};return obj17029;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj17031 = {};return obj17031;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_render_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_render_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_render_state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_render_state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj17033 = {};return obj17033;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj17035 = {};return obj17035;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_queue[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_queue["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj17037 = {};return obj17037;
})();
om.core._value = (function _value(x){if((function (){var and__9081__auto__ = x;if(and__9081__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__9081__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__9730__auto__ = (((x == null))?null:x);return (function (){var or__9093__auto__ = (om.core._value[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._value["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj17039 = {};return obj17039;
})();
om.core._path = (function _path(cursor){if((function (){var and__9081__auto__ = cursor;if(and__9081__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__9081__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__9730__auto__ = (((cursor == null))?null:cursor);return (function (){var or__9093__auto__ = (om.core._path[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._path["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__9081__auto__ = cursor;if(and__9081__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__9081__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__9730__auto__ = (((cursor == null))?null:cursor);return (function (){var or__9093__auto__ = (om.core._state[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._state["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj17041 = {};return obj17041;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__9081__auto__ = value;if(and__9081__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__9081__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__9730__auto__ = (((value == null))?null:value);return (function (){var or__9093__auto__ = (om.core._to_cursor[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._to_cursor["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__9081__auto__ = value;if(and__9081__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__9081__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__9730__auto__ = (((value == null))?null:value);return (function (){var or__9093__auto__ = (om.core._to_cursor[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._to_cursor["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj17043 = {};return obj17043;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__9081__auto__ = cursor;if(and__9081__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__9081__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__9730__auto__ = (((cursor == null))?null:cursor);return (function (){var or__9093__auto__ = (om.core._derive[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._derive["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj17045 = {};return obj17045;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__9081__auto__ = cursor;if(and__9081__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__9730__auto__ = (((cursor == null))?null:cursor);return (function (){var or__9093__auto__ = (om.core._transact_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._transact_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj17047 = {};return obj17047;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__9081__auto__ = x;if(and__9081__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__9730__auto__ = (((x == null))?null:x);return (function (){var or__9093__auto__ = (om.core._listen_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._listen_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__9081__auto__ = x;if(and__9081__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__9730__auto__ = (((x == null))?null:x);return (function (){var or__9093__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__9081__auto__ = x;if(and__9081__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__9730__auto__ = (((x == null))?null:x);return (function (){var or__9093__auto__ = (om.core._notify_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._notify_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj17049 = {};return obj17049;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_property[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_property["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj17051 = {};return obj17051;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__9081__auto__ = cursor;if(and__9081__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__9081__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__9730__auto__ = (((cursor == null))?null:cursor);return (function (){var or__9093__auto__ = (om.core._root_key[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._root_key["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj17053 = {};return obj17053;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._adapt[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._adapt["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj17055 = {};return obj17055;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (om.core._get_deps[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (om.core._get_deps["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__17057 = state;if(G__17057)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17057.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__17057.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__17057);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__17057);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__17059 = x;if(G__17059)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17059.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__17059.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17059);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17059);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){return (x["isOmComponent"]);
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.ifn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){if(cljs.core.truth_(om.core.component_QMARK_.call(null,x)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))));
}
return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__17061 = state;(G__17061["__om_prev_state"] = (state["__om_state"]));
(G__17061["__om_state"] = pending_state);
(G__17061["__om_pending_state"] = null);
return G__17061;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__9093__auto__ = props;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__9093__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__17063 = c;if(G__17063)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17063.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__17063.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17063);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17063);
}
})())
{var state_17084 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__9093__auto__ = (state_17084["__om_prev_state"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return (state_17084["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),true,(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__17064 = c;if(G__17064)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17064.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__17064.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17064);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17064);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__17065 = cljs.core.seq.call(null,refs);var chunk__17066 = null;var count__17067 = (0);var i__17068 = (0);while(true){
if((i__17068 < count__17067))
{var ref = cljs.core._nth.call(null,chunk__17066,i__17068);om.core.unobserve.call(null,this$,ref);
{
var G__17085 = seq__17065;
var G__17086 = chunk__17066;
var G__17087 = count__17067;
var G__17088 = (i__17068 + (1));
seq__17065 = G__17085;
chunk__17066 = G__17086;
count__17067 = G__17087;
i__17068 = G__17088;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__17065);if(temp__4126__auto____$1)
{var seq__17065__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17065__$1))
{var c__9863__auto__ = cljs.core.chunk_first.call(null,seq__17065__$1);{
var G__17089 = cljs.core.chunk_rest.call(null,seq__17065__$1);
var G__17090 = c__9863__auto__;
var G__17091 = cljs.core.count.call(null,c__9863__auto__);
var G__17092 = (0);
seq__17065 = G__17089;
chunk__17066 = G__17090;
count__17067 = G__17091;
i__17068 = G__17092;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__17065__$1);om.core.unobserve.call(null,this$,ref);
{
var G__17093 = cljs.core.next.call(null,seq__17065__$1);
var G__17094 = null;
var G__17095 = (0);
var G__17096 = (0);
seq__17065 = G__17093;
chunk__17066 = G__17094;
count__17067 = G__17095;
i__17068 = G__17096;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__17069 = c;if(G__17069)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17069.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__17069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__17069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__17069);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__17070 = c;if(G__17070)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17070.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__17070.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__17070);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__17070);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__9081__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));if(and__9081__auto__)
{return cljs.core.some.call(null,((function (and__9081__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__17062_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__17062_SHARP_);
});})(and__9081__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__9081__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_17071 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_17072 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_17073 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_17074 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_17075 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__17076 = c;if(G__17076)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17076.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__17076.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17076);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__17077 = c;if(G__17077)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17077.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__17077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17077);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__17078 = c;if(G__17078)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17078.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__17078.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17078);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17078);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17075;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17074;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17073;
om.core._STAR_state_STAR_ = _STAR_state_STAR_17072;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_17071;
}}),(function (next_props,next_state){var this$ = this;var c_17097 = om.core.children.call(null,this$);if((function (){var G__17079 = c_17097;if(G__17079)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17079.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__17079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17079);
}
})())
{var state_17098 = this$.state;om.core.will_update.call(null,c_17097,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__9093__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__17080 = c;if(G__17080)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17080.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__17080.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17080);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__9093__auto__ = id;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__17081 = c;if(G__17081)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17081.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__17081.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__17081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__17081);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__17082 = c;if(G__17082)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17082.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__17082.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__17082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__17082);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_17099 = om.core.children.call(null,this$);if((function (){var G__17083 = c_17099;if(G__17083)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17083.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__17083.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17083);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17083);
}
})())
{om.core.will_mount.call(null,c_17099);
} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x17101 = obj;x17101.om$core$IGetState$ = true;
x17101.om$core$IGetState$_get_state$arity$1 = ((function (x17101){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__9093__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return (state["__om_state"]);
}
});})(x17101))
;
x17101.om$core$IGetState$_get_state$arity$2 = ((function (x17101){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x17101))
;
x17101.om$core$IGetRenderState$ = true;
x17101.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17101){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x17101))
;
x17101.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17101){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x17101))
;
x17101.om$core$ISetState$ = true;
x17101.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17101){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__9081__auto__ = !((app_state == null));if(and__9081__auto__)
{return render;
} else
{return and__9081__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x17101))
;
x17101.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17101){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__9081__auto__ = !((app_state == null));if(and__9081__auto__)
{return render;
} else
{return and__9081__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x17101))
;
return x17101;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__9093__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__9093__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__17102 = c;if(G__17102)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17102.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__17102.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__17102);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_17111 = om.core.children.call(null,this$);if((function (){var G__17103 = c_17111;if(G__17103)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17103.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__17103.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__17103);
}
})())
{om.core.will_mount.call(null,c_17111);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__17104 = c;if(G__17104)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17104.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__17104.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__17104);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__17105 = cljs.core.seq.call(null,refs);var chunk__17106 = null;var count__17107 = (0);var i__17108 = (0);while(true){
if((i__17108 < count__17107))
{var ref = cljs.core._nth.call(null,chunk__17106,i__17108);om.core.unobserve.call(null,this$,ref);
{
var G__17112 = seq__17105;
var G__17113 = chunk__17106;
var G__17114 = count__17107;
var G__17115 = (i__17108 + (1));
seq__17105 = G__17112;
chunk__17106 = G__17113;
count__17107 = G__17114;
i__17108 = G__17115;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__17105);if(temp__4126__auto____$1)
{var seq__17105__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17105__$1))
{var c__9863__auto__ = cljs.core.chunk_first.call(null,seq__17105__$1);{
var G__17116 = cljs.core.chunk_rest.call(null,seq__17105__$1);
var G__17117 = c__9863__auto__;
var G__17118 = cljs.core.count.call(null,c__9863__auto__);
var G__17119 = (0);
seq__17105 = G__17116;
chunk__17106 = G__17117;
count__17107 = G__17118;
i__17108 = G__17119;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__17105__$1);om.core.unobserve.call(null,this$,ref);
{
var G__17120 = cljs.core.next.call(null,seq__17105__$1);
var G__17121 = null;
var G__17122 = (0);
var G__17123 = (0);
seq__17105 = G__17120;
chunk__17106 = G__17121;
count__17107 = G__17122;
i__17108 = G__17123;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){var this$ = this;var props_17124 = this$.props;var c_17125 = om.core.children.call(null,this$);if((function (){var G__17109 = c_17125;if(G__17109)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17109.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__17109.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17109);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__17109);
}
})())
{var state_17126 = this$.state;om.core.will_update.call(null,c_17125,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__17110 = c;if(G__17110)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17110.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__17110.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17110);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__17110);
}
})())
{var state_17127 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__9093__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x17129 = cljs.core.clj__GT_js.call(null,methods$);x17129.om$core$IGetState$ = true;
x17129.om$core$IGetState$_get_state$arity$1 = ((function (x17129){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__9093__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x17129))
;
x17129.om$core$IGetState$_get_state$arity$2 = ((function (x17129){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x17129))
;
x17129.om$core$IGetRenderState$ = true;
x17129.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x17129){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x17129))
;
x17129.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x17129){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x17129))
;
x17129.om$core$ISetState$ = true;
x17129.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x17129){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__9081__auto__ = !((gstate == null));if(and__9081__auto__)
{return render;
} else
{return and__9081__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});})(x17129))
;
x17129.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x17129){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x17129))
;
return x17129;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__17131 = x;if(G__17131)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17131.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__17131.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17131);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core._kv_reduce.call(null,self__.value,f,init);
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__17133){var vec__17134 = p__17133;var k = cljs.core.nth.call(null,vec__17134,(0),null);var v = cljs.core.nth.call(null,vec__17134,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__17135 = null;
var G__17135__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17135__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17135 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17135__2.call(this,self__,k);
case 3:
return G__17135__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17135.cljs$core$IFn$_invoke$arity$2 = G__17135__2;
G__17135.cljs$core$IFn$_invoke$arity$3 = G__17135__3;
return G__17135;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args17132){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17132)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core._kv_reduce.call(null,self__.value,f,init);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__17137 = null;
var G__17137__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__17137__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__17137 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__17137__2.call(this,self__,k);
case 3:
return G__17137__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17137.cljs$core$IFn$_invoke$arity$2 = G__17137__2;
G__17137.cljs$core$IFn$_invoke$arity$3 = G__17137__3;
return G__17137;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args17136){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17136)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x17139 = cljs.core.clone.call(null,val);x17139.cljs$core$IEquiv$ = true;
x17139.cljs$core$IEquiv$_equiv$arity$2 = ((function (x17139){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});})(x17139))
;
x17139.om$core$ITransact$ = true;
x17139.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17139){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x17139))
;
x17139.om$core$ICursor$ = true;
x17139.om$core$ICursor$_path$arity$1 = ((function (x17139){
return (function (_){var ___$1 = this;return path;
});})(x17139))
;
x17139.om$core$ICursor$_state$arity$1 = ((function (x17139){
return (function (_){var ___$1 = this;return state;
});})(x17139))
;
x17139.cljs$core$IDeref$ = true;
x17139.cljs$core$IDeref$_deref$arity$1 = ((function (x17139){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x17139))
;
return x17139;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__17142 = val;if(G__17142)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17142.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__17142.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__17142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__17142);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__17143 = val;if(G__17143)
{var bit__9757__auto__ = (G__17143.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__9757__auto__) || (G__17143.cljs$core$ICloneable$))
{return true;
} else
{if((!G__17143.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__17143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__17143);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){if((function (){var G__17145 = atom;if(G__17145)
{var bit__9757__auto__ = (G__17145.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__9757__auto__) || (G__17145.cljs$core$IDeref$))
{return true;
} else
{if((!G__17145.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17145);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__17145);
}
})())
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null)))))));
}
return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x17147 = cljs.core.clone.call(null,x);x17147.om$core$ITransact$ = true;
x17147.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17147){
return (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});})(x17147))
;
x17147.om$core$ICursorDerive$ = true;
x17147.om$core$ICursorDerive$_derive$arity$4 = ((function (x17147){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x17147))
;
x17147.om$core$IAdapt$ = true;
x17147.om$core$IAdapt$_adapt$arity$2 = ((function (x17147){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x17147))
;
x17147.cljs$core$ICloneable$ = true;
x17147.cljs$core$ICloneable$_clone$arity$1 = ((function (x17147){
return (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x17147))
;
return x17147;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
if((function (){var G__17154 = cursor;if(G__17154)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17154.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__17154.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__17154);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__17154);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x17155 = cljs.core.clone.call(null,cursor);x17155.om$core$ITransact$ = true;
x17155.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x17155,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x17155,path,storage))
;
x17155.om$core$IOmRef$ = true;
x17155.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x17155,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x17155,path,storage))
;
x17155.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x17155,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === (0)))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x17155,path,storage))
;
x17155.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x17155,path,storage){
return (function (_){var ___$1 = this;var seq__17156 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__17157 = null;var count__17158 = (0);var i__17159 = (0);while(true){
if((i__17159 < count__17158))
{var c = cljs.core._nth.call(null,chunk__17157,i__17159);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__17160 = seq__17156;
var G__17161 = chunk__17157;
var G__17162 = count__17158;
var G__17163 = (i__17159 + (1));
seq__17156 = G__17160;
chunk__17157 = G__17161;
count__17158 = G__17162;
i__17159 = G__17163;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17156);if(temp__4126__auto__)
{var seq__17156__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17156__$1))
{var c__9863__auto__ = cljs.core.chunk_first.call(null,seq__17156__$1);{
var G__17164 = cljs.core.chunk_rest.call(null,seq__17156__$1);
var G__17165 = c__9863__auto__;
var G__17166 = cljs.core.count.call(null,c__9863__auto__);
var G__17167 = (0);
seq__17156 = G__17164;
chunk__17157 = G__17165;
count__17158 = G__17166;
i__17159 = G__17167;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__17156__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__17168 = cljs.core.next.call(null,seq__17156__$1);
var G__17169 = null;
var G__17170 = (0);
var G__17171 = (0);
seq__17156 = G__17168;
chunk__17157 = G__17169;
count__17158 = G__17170;
i__17159 = G__17171;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x17155,path,storage))
;
x17155.om$core$IOmRef$_get_deps$arity$1 = ((function (x17155,path,storage){
return (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});})(x17155,path,storage))
;
x17155.om$core$ICursorDerive$ = true;
x17155.om$core$ICursorDerive$_derive$arity$4 = ((function (x17155,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x17155,path,storage))
;
return x17155;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__9093__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){if(cljs.core.truth_(om.core.component_QMARK_.call(null,c)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))))));
}
if(om.core.cursor_QMARK_.call(null,ref))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))))));
}
om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__9093__auto__ = state.om$render$T;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){return render_all.call(null,null);
});
var render_all__1 = (function (state){om.core.refresh_queued = false;
var seq__17176_17180 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__17177_17181 = null;var count__17178_17182 = (0);var i__17179_17183 = (0);while(true){
if((i__17179_17183 < count__17178_17182))
{var f_17184 = cljs.core._nth.call(null,chunk__17177_17181,i__17179_17183);f_17184.call(null);
{
var G__17185 = seq__17176_17180;
var G__17186 = chunk__17177_17181;
var G__17187 = count__17178_17182;
var G__17188 = (i__17179_17183 + (1));
seq__17176_17180 = G__17185;
chunk__17177_17181 = G__17186;
count__17178_17182 = G__17187;
i__17179_17183 = G__17188;
continue;
}
} else
{var temp__4126__auto___17189 = cljs.core.seq.call(null,seq__17176_17180);if(temp__4126__auto___17189)
{var seq__17176_17190__$1 = temp__4126__auto___17189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17176_17190__$1))
{var c__9863__auto___17191 = cljs.core.chunk_first.call(null,seq__17176_17190__$1);{
var G__17192 = cljs.core.chunk_rest.call(null,seq__17176_17190__$1);
var G__17193 = c__9863__auto___17191;
var G__17194 = cljs.core.count.call(null,c__9863__auto___17191);
var G__17195 = (0);
seq__17176_17180 = G__17192;
chunk__17177_17181 = G__17193;
count__17178_17182 = G__17194;
i__17179_17183 = G__17195;
continue;
}
} else
{var f_17196 = cljs.core.first.call(null,seq__17176_17190__$1);f_17196.call(null);
{
var G__17197 = cljs.core.next.call(null,seq__17176_17190__$1);
var G__17198 = null;
var G__17199 = (0);
var G__17200 = (0);
seq__17176_17180 = G__17197;
chunk__17177_17181 = G__17198;
count__17178_17182 = G__17199;
i__17179_17183 = G__17200;
continue;
}
}
} else
{}
}
break;
}
if((state == null))
{return null;
} else
{return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__9093__auto__ = (function (){var G__17207 = x;if(G__17207)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17207.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__17207.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__17207);
}
})();if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (function (){var G__17209 = x;if(G__17209)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto____$1 = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto____$1))
{return or__9093__auto____$1;
} else
{return G__17209.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__17209.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__17209);
}
})();if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{var G__17210 = x;if(G__17210)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto____$2 = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto____$2))
{return or__9093__auto____$2;
} else
{return G__17210.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__17210.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17210);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__17210);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__9093__auto__ = descriptor;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__9093__auto____$1))
{return or__9093__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})())));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){if((f instanceof cljs.core.MultiFn))
{var dv = f.dispatch_fn.call(null,cursor,null);return cljs.core.get_method.call(null,f,dv);
} else
{return f;
}
});
var getf__3 = (function (f,cursor,opts){if((f instanceof cljs.core.MultiFn))
{var dv = f.dispatch_fn.call(null,cursor,null,opts);return cljs.core.get_method.call(null,f,dv);
} else
{return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))))));
}
if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{var map__17212 = m;var map__17212__$1 = ((cljs.core.seq_QMARK_.call(null,map__17212))?cljs.core.apply.call(null,cljs.core.hash_map,map__17212):map__17212);var opts = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key_fn = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));var key = cljs.core.get.call(null,map__17212__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));var shared = (function (){var or__9093__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__17212,map__17212__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__17212,map__17212__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__17212,map__17212__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__17212,map__17212__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__9093__auto__ = rkey;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))))));
}
if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))))));
}
return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__17221 = state;if(G__17221)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17221.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__17221.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__17221);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__17221);
}
})())
{} else
{var properties_17229 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_17230 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_17231 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x17222_17232 = state;x17222_17232.om$core$IRenderQueue$ = true;
x17222_17232.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_17231);
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_17231),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_17231,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_17231,cljs.core.empty);
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$INotify$ = true;
x17222_17232.om$core$INotify$_listen_BANG_$arity$3 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_17230,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_17230,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$INotify$_notify_BANG_$arity$3 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__17223_17233 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_17230));var chunk__17224_17234 = null;var count__17225_17235 = (0);var i__17226_17236 = (0);while(true){
if((i__17226_17236 < count__17225_17235))
{var vec__17227_17237 = cljs.core._nth.call(null,chunk__17224_17234,i__17226_17236);var __17238 = cljs.core.nth.call(null,vec__17227_17237,(0),null);var f_17239 = cljs.core.nth.call(null,vec__17227_17237,(1),null);f_17239.call(null,tx_data,root_cursor);
{
var G__17240 = seq__17223_17233;
var G__17241 = chunk__17224_17234;
var G__17242 = count__17225_17235;
var G__17243 = (i__17226_17236 + (1));
seq__17223_17233 = G__17240;
chunk__17224_17234 = G__17241;
count__17225_17235 = G__17242;
i__17226_17236 = G__17243;
continue;
}
} else
{var temp__4126__auto___17244 = cljs.core.seq.call(null,seq__17223_17233);if(temp__4126__auto___17244)
{var seq__17223_17245__$1 = temp__4126__auto___17244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17223_17245__$1))
{var c__9863__auto___17246 = cljs.core.chunk_first.call(null,seq__17223_17245__$1);{
var G__17247 = cljs.core.chunk_rest.call(null,seq__17223_17245__$1);
var G__17248 = c__9863__auto___17246;
var G__17249 = cljs.core.count.call(null,c__9863__auto___17246);
var G__17250 = (0);
seq__17223_17233 = G__17247;
chunk__17224_17234 = G__17248;
count__17225_17235 = G__17249;
i__17226_17236 = G__17250;
continue;
}
} else
{var vec__17228_17251 = cljs.core.first.call(null,seq__17223_17245__$1);var __17252 = cljs.core.nth.call(null,vec__17228_17251,(0),null);var f_17253 = cljs.core.nth.call(null,vec__17228_17251,(1),null);f_17253.call(null,tx_data,root_cursor);
{
var G__17254 = cljs.core.next.call(null,seq__17223_17245__$1);
var G__17255 = null;
var G__17256 = (0);
var G__17257 = (0);
seq__17223_17233 = G__17254;
chunk__17224_17234 = G__17255;
count__17225_17235 = G__17256;
i__17226_17236 = G__17257;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRootProperties$ = true;
x17222_17232.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_17229,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_17229,cljs.core.dissoc,id,k);
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_17229,cljs.core.dissoc,id);
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
x17222_17232.om$core$IRootProperties$_get_property$arity$3 = ((function (x17222_17232,properties_17229,listeners_17230,render_queue_17231){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_17229),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x17222_17232,properties_17229,listeners_17230,render_queue_17231))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x17259 = cljs.core.clone.call(null,cursor);x17259.om$core$IRootKey$ = true;
x17259.om$core$IRootKey$_root_key$arity$1 = ((function (x17259){
return (function (this$){var this$__$1 = this;return root_key;
});})(x17259))
;
x17259.om$core$IAdapt$ = true;
x17259.om$core$IAdapt$_adapt$arity$2 = ((function (x17259){
return (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x17259))
;
x17259.cljs$core$ICloneable$ = true;
x17259.cljs$core$ICloneable$_clone$arity$1 = ((function (x17259){
return (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x17259))
;
return x17259;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__17260){var map__17323 = p__17260;var map__17323__$1 = ((cljs.core.seq_QMARK_.call(null,map__17323))?cljs.core.apply.call(null,cljs.core.hash_map,map__17323):map__17323);var options = map__17323__$1;var raf = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));var adapt = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var descriptor = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));var instrument = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__17323__$1,new cljs.core.Keyword(null,"target","target",253001721));if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: First argument must be a function\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__17385 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__17385,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__17385,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__17324 = value;if(G__17324)
{var bit__9757__auto__ = (G__17324.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__9757__auto__) || (G__17324.cljs$core$IAtom$))
{return true;
} else
{if((!G__17324.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__17324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__17324);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__9093__auto__ = adapt;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))))
{} else
{var c_17386 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_17355 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_17356 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_17357 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_17358 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_17358;
om.core._STAR_state_STAR_ = _STAR_state_STAR_17357;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_17356;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_17355;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_17386);
} else
{}
}
var queue_17387 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_17387))
{} else
{var seq__17359_17388 = cljs.core.seq.call(null,queue_17387);var chunk__17360_17389 = null;var count__17361_17390 = (0);var i__17362_17391 = (0);while(true){
if((i__17362_17391 < count__17361_17390))
{var c_17392 = cljs.core._nth.call(null,chunk__17360_17389,i__17362_17391);if(cljs.core.truth_(c_17392.isMounted()))
{var temp__4126__auto___17393 = (c_17392.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___17393))
{var next_props_17394 = temp__4126__auto___17393;(c_17392.props["__om_cursor"] = next_props_17394);
(c_17392.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__9093__auto__ = !((function (){var G__17364 = om.core.children.call(null,c_17392);if(G__17364)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17364.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__17364.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__17364);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__17364);
}
})());if(or__9093__auto__)
{return or__9093__auto__;
} else
{return c_17392.shouldComponentUpdate(c_17392.props,c_17392.state);
}
})()))
{c_17392.forceUpdate();
} else
{}
} else
{}
{
var G__17395 = seq__17359_17388;
var G__17396 = chunk__17360_17389;
var G__17397 = count__17361_17390;
var G__17398 = (i__17362_17391 + (1));
seq__17359_17388 = G__17395;
chunk__17360_17389 = G__17396;
count__17361_17390 = G__17397;
i__17362_17391 = G__17398;
continue;
}
} else
{var temp__4126__auto___17399 = cljs.core.seq.call(null,seq__17359_17388);if(temp__4126__auto___17399)
{var seq__17359_17400__$1 = temp__4126__auto___17399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17359_17400__$1))
{var c__9863__auto___17401 = cljs.core.chunk_first.call(null,seq__17359_17400__$1);{
var G__17402 = cljs.core.chunk_rest.call(null,seq__17359_17400__$1);
var G__17403 = c__9863__auto___17401;
var G__17404 = cljs.core.count.call(null,c__9863__auto___17401);
var G__17405 = (0);
seq__17359_17388 = G__17402;
chunk__17360_17389 = G__17403;
count__17361_17390 = G__17404;
i__17362_17391 = G__17405;
continue;
}
} else
{var c_17406 = cljs.core.first.call(null,seq__17359_17400__$1);if(cljs.core.truth_(c_17406.isMounted()))
{var temp__4126__auto___17407__$1 = (c_17406.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___17407__$1))
{var next_props_17408 = temp__4126__auto___17407__$1;(c_17406.props["__om_cursor"] = next_props_17408);
(c_17406.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__9093__auto__ = !((function (){var G__17366 = om.core.children.call(null,c_17406);if(G__17366)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17366.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__17366.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__17366);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__17366);
}
})());if(or__9093__auto__)
{return or__9093__auto__;
} else
{return c_17406.shouldComponentUpdate(c_17406.props,c_17406.state);
}
})()))
{c_17406.forceUpdate();
} else
{}
} else
{}
{
var G__17409 = cljs.core.next.call(null,seq__17359_17400__$1);
var G__17410 = null;
var G__17411 = (0);
var G__17412 = (0);
seq__17359_17388 = G__17409;
chunk__17360_17389 = G__17410;
count__17361_17390 = G__17411;
i__17362_17391 = G__17412;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_17413 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_17413))
{} else
{var seq__17367_17414 = cljs.core.seq.call(null,_refs_17413);var chunk__17368_17415 = null;var count__17369_17416 = (0);var i__17370_17417 = (0);while(true){
if((i__17370_17417 < count__17369_17416))
{var vec__17371_17418 = cljs.core._nth.call(null,chunk__17368_17415,i__17370_17417);var path_17419__$1 = cljs.core.nth.call(null,vec__17371_17418,(0),null);var cs_17420 = cljs.core.nth.call(null,vec__17371_17418,(1),null);var cs_17421__$1 = cljs.core.deref.call(null,cs_17420);var seq__17372_17422 = cljs.core.seq.call(null,cs_17421__$1);var chunk__17373_17423 = null;var count__17374_17424 = (0);var i__17375_17425 = (0);while(true){
if((i__17375_17425 < count__17374_17424))
{var vec__17376_17426 = cljs.core._nth.call(null,chunk__17373_17423,i__17375_17425);var id_17427 = cljs.core.nth.call(null,vec__17376_17426,(0),null);var c_17428 = cljs.core.nth.call(null,vec__17376_17426,(1),null);if(cljs.core.truth_(c_17428.shouldComponentUpdate(c_17428.props,c_17428.state)))
{c_17428.forceUpdate();
} else
{}
{
var G__17429 = seq__17372_17422;
var G__17430 = chunk__17373_17423;
var G__17431 = count__17374_17424;
var G__17432 = (i__17375_17425 + (1));
seq__17372_17422 = G__17429;
chunk__17373_17423 = G__17430;
count__17374_17424 = G__17431;
i__17375_17425 = G__17432;
continue;
}
} else
{var temp__4126__auto___17433 = cljs.core.seq.call(null,seq__17372_17422);if(temp__4126__auto___17433)
{var seq__17372_17434__$1 = temp__4126__auto___17433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17372_17434__$1))
{var c__9863__auto___17435 = cljs.core.chunk_first.call(null,seq__17372_17434__$1);{
var G__17436 = cljs.core.chunk_rest.call(null,seq__17372_17434__$1);
var G__17437 = c__9863__auto___17435;
var G__17438 = cljs.core.count.call(null,c__9863__auto___17435);
var G__17439 = (0);
seq__17372_17422 = G__17436;
chunk__17373_17423 = G__17437;
count__17374_17424 = G__17438;
i__17375_17425 = G__17439;
continue;
}
} else
{var vec__17377_17440 = cljs.core.first.call(null,seq__17372_17434__$1);var id_17441 = cljs.core.nth.call(null,vec__17377_17440,(0),null);var c_17442 = cljs.core.nth.call(null,vec__17377_17440,(1),null);if(cljs.core.truth_(c_17442.shouldComponentUpdate(c_17442.props,c_17442.state)))
{c_17442.forceUpdate();
} else
{}
{
var G__17443 = cljs.core.next.call(null,seq__17372_17434__$1);
var G__17444 = null;
var G__17445 = (0);
var G__17446 = (0);
seq__17372_17422 = G__17443;
chunk__17373_17423 = G__17444;
count__17374_17424 = G__17445;
i__17375_17425 = G__17446;
continue;
}
}
} else
{}
}
break;
}
{
var G__17447 = seq__17367_17414;
var G__17448 = chunk__17368_17415;
var G__17449 = count__17369_17416;
var G__17450 = (i__17370_17417 + (1));
seq__17367_17414 = G__17447;
chunk__17368_17415 = G__17448;
count__17369_17416 = G__17449;
i__17370_17417 = G__17450;
continue;
}
} else
{var temp__4126__auto___17451 = cljs.core.seq.call(null,seq__17367_17414);if(temp__4126__auto___17451)
{var seq__17367_17452__$1 = temp__4126__auto___17451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17367_17452__$1))
{var c__9863__auto___17453 = cljs.core.chunk_first.call(null,seq__17367_17452__$1);{
var G__17454 = cljs.core.chunk_rest.call(null,seq__17367_17452__$1);
var G__17455 = c__9863__auto___17453;
var G__17456 = cljs.core.count.call(null,c__9863__auto___17453);
var G__17457 = (0);
seq__17367_17414 = G__17454;
chunk__17368_17415 = G__17455;
count__17369_17416 = G__17456;
i__17370_17417 = G__17457;
continue;
}
} else
{var vec__17378_17458 = cljs.core.first.call(null,seq__17367_17452__$1);var path_17459__$1 = cljs.core.nth.call(null,vec__17378_17458,(0),null);var cs_17460 = cljs.core.nth.call(null,vec__17378_17458,(1),null);var cs_17461__$1 = cljs.core.deref.call(null,cs_17460);var seq__17379_17462 = cljs.core.seq.call(null,cs_17461__$1);var chunk__17380_17463 = null;var count__17381_17464 = (0);var i__17382_17465 = (0);while(true){
if((i__17382_17465 < count__17381_17464))
{var vec__17383_17466 = cljs.core._nth.call(null,chunk__17380_17463,i__17382_17465);var id_17467 = cljs.core.nth.call(null,vec__17383_17466,(0),null);var c_17468 = cljs.core.nth.call(null,vec__17383_17466,(1),null);if(cljs.core.truth_(c_17468.shouldComponentUpdate(c_17468.props,c_17468.state)))
{c_17468.forceUpdate();
} else
{}
{
var G__17469 = seq__17379_17462;
var G__17470 = chunk__17380_17463;
var G__17471 = count__17381_17464;
var G__17472 = (i__17382_17465 + (1));
seq__17379_17462 = G__17469;
chunk__17380_17463 = G__17470;
count__17381_17464 = G__17471;
i__17382_17465 = G__17472;
continue;
}
} else
{var temp__4126__auto___17473__$1 = cljs.core.seq.call(null,seq__17379_17462);if(temp__4126__auto___17473__$1)
{var seq__17379_17474__$1 = temp__4126__auto___17473__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17379_17474__$1))
{var c__9863__auto___17475 = cljs.core.chunk_first.call(null,seq__17379_17474__$1);{
var G__17476 = cljs.core.chunk_rest.call(null,seq__17379_17474__$1);
var G__17477 = c__9863__auto___17475;
var G__17478 = cljs.core.count.call(null,c__9863__auto___17475);
var G__17479 = (0);
seq__17379_17462 = G__17476;
chunk__17380_17463 = G__17477;
count__17381_17464 = G__17478;
i__17382_17465 = G__17479;
continue;
}
} else
{var vec__17384_17480 = cljs.core.first.call(null,seq__17379_17474__$1);var id_17481 = cljs.core.nth.call(null,vec__17384_17480,(0),null);var c_17482 = cljs.core.nth.call(null,vec__17384_17480,(1),null);if(cljs.core.truth_(c_17482.shouldComponentUpdate(c_17482.props,c_17482.state)))
{c_17482.forceUpdate();
} else
{}
{
var G__17483 = cljs.core.next.call(null,seq__17379_17474__$1);
var G__17484 = null;
var G__17485 = (0);
var G__17486 = (0);
seq__17379_17462 = G__17483;
chunk__17380_17463 = G__17484;
count__17381_17464 = G__17485;
i__17382_17465 = G__17486;
continue;
}
}
} else
{}
}
break;
}
{
var G__17487 = cljs.core.next.call(null,seq__17367_17452__$1);
var G__17488 = null;
var G__17489 = (0);
var G__17490 = (0);
seq__17367_17414 = G__17487;
chunk__17368_17415 = G__17488;
count__17369_17416 = G__17489;
i__17370_17417 = G__17490;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined')))
{return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else
{if(cljs.core.fn_QMARK_.call(null,raf))
{return raf.call(null);
} else
{return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__17323,map__17323__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){if(cljs.core.truth_(goog.dom.isElement(target)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))));
}
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null);
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
var key = (((function (){var G__17492 = cursor;if(G__17492)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17492.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__17492.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__17492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__17492);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){if(typeof name === 'string')
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null)))))));
}
var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
if(cljs.core.ifn_QMARK_.call(null,f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null)))))));
}
return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)))))));
}
var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map