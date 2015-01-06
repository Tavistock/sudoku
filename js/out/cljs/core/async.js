// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17778 = (function (f,fn_handler,meta17779){
this.f = f;
this.fn_handler = fn_handler;
this.meta17779 = meta17779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17778.cljs$lang$type = true;
cljs.core.async.t17778.cljs$lang$ctorStr = "cljs.core.async/t17778";
cljs.core.async.t17778.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17778");
});
cljs.core.async.t17778.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17780){var self__ = this;
var _17780__$1 = this;return self__.meta17779;
});
cljs.core.async.t17778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17780,meta17779__$1){var self__ = this;
var _17780__$1 = this;return (new cljs.core.async.t17778(self__.f,self__.fn_handler,meta17779__$1));
});
cljs.core.async.__GT_t17778 = (function __GT_t17778(f__$1,fn_handler__$1,meta17779){return (new cljs.core.async.t17778(f__$1,fn_handler__$1,meta17779));
});
}
return (new cljs.core.async.t17778(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17782 = buff;if(G__17782)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17782.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17782.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17782);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17782);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17783 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17783);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_17783,ret){
return (function (){return fn1.call(null,val_17783);
});})(val_17783,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9963__auto___17784 = n;var x_17785 = (0);while(true){
if((x_17785 < n__9963__auto___17784))
{(a[x_17785] = (0));
{
var G__17786 = (x_17785 + (1));
x_17785 = G__17786;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17787 = (i + (1));
i = G__17787;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17791 = (function (flag,alt_flag,meta17792){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17792 = meta17792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17791.cljs$lang$type = true;
cljs.core.async.t17791.cljs$lang$ctorStr = "cljs.core.async/t17791";
cljs.core.async.t17791.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17791");
});})(flag))
;
cljs.core.async.t17791.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t17791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t17791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17793){var self__ = this;
var _17793__$1 = this;return self__.meta17792;
});})(flag))
;
cljs.core.async.t17791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17793,meta17792__$1){var self__ = this;
var _17793__$1 = this;return (new cljs.core.async.t17791(self__.flag,self__.alt_flag,meta17792__$1));
});})(flag))
;
cljs.core.async.__GT_t17791 = ((function (flag){
return (function __GT_t17791(flag__$1,alt_flag__$1,meta17792){return (new cljs.core.async.t17791(flag__$1,alt_flag__$1,meta17792));
});})(flag))
;
}
return (new cljs.core.async.t17791(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17797 = (function (cb,flag,alt_handler,meta17798){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17798 = meta17798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17797.cljs$lang$type = true;
cljs.core.async.t17797.cljs$lang$ctorStr = "cljs.core.async/t17797";
cljs.core.async.t17797.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17797");
});
cljs.core.async.t17797.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17797.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17797.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17799){var self__ = this;
var _17799__$1 = this;return self__.meta17798;
});
cljs.core.async.t17797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17799,meta17798__$1){var self__ = this;
var _17799__$1 = this;return (new cljs.core.async.t17797(self__.cb,self__.flag,self__.alt_handler,meta17798__$1));
});
cljs.core.async.__GT_t17797 = (function __GT_t17797(cb__$1,flag__$1,alt_handler__$1,meta17798){return (new cljs.core.async.t17797(cb__$1,flag__$1,alt_handler__$1,meta17798));
});
}
return (new cljs.core.async.t17797(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17800_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17800_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17801_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17801_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9093__auto__ = wport;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17802 = (i + (1));
i = G__17802;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9093__auto__ = ret;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__9081__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9081__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9081__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17803){var map__17805 = p__17803;var map__17805__$1 = ((cljs.core.seq_QMARK_.call(null,map__17805))?cljs.core.apply.call(null,cljs.core.hash_map,map__17805):map__17805);var opts = map__17805__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__17803 = null;if (arguments.length > 1) {
  p__17803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17803);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17806){
var ports = cljs.core.first(arglist__17806);
var p__17803 = cljs.core.rest(arglist__17806);
return alts_BANG___delegate(ports,p__17803);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17814 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17814 = (function (ch,f,map_LT_,meta17815){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17815 = meta17815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17814.cljs$lang$type = true;
cljs.core.async.t17814.cljs$lang$ctorStr = "cljs.core.async/t17814";
cljs.core.async.t17814.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17814");
});
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17817 = (function (fn1,_,meta17815,ch,f,map_LT_,meta17818){
this.fn1 = fn1;
this._ = _;
this.meta17815 = meta17815;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17818 = meta17818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17817.cljs$lang$type = true;
cljs.core.async.t17817.cljs$lang$ctorStr = "cljs.core.async/t17817";
cljs.core.async.t17817.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17817");
});})(___$1))
;
cljs.core.async.t17817.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17817.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t17817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__17807_SHARP_){return f1.call(null,(((p1__17807_SHARP_ == null))?null:self__.f.call(null,p1__17807_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t17817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17819){var self__ = this;
var _17819__$1 = this;return self__.meta17818;
});})(___$1))
;
cljs.core.async.t17817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17819,meta17818__$1){var self__ = this;
var _17819__$1 = this;return (new cljs.core.async.t17817(self__.fn1,self__._,self__.meta17815,self__.ch,self__.f,self__.map_LT_,meta17818__$1));
});})(___$1))
;
cljs.core.async.__GT_t17817 = ((function (___$1){
return (function __GT_t17817(fn1__$1,___$2,meta17815__$1,ch__$2,f__$2,map_LT___$2,meta17818){return (new cljs.core.async.t17817(fn1__$1,___$2,meta17815__$1,ch__$2,f__$2,map_LT___$2,meta17818));
});})(___$1))
;
}
return (new cljs.core.async.t17817(fn1,___$1,self__.meta17815,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9081__auto__ = ret;if(cljs.core.truth_(and__9081__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9081__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17816){var self__ = this;
var _17816__$1 = this;return self__.meta17815;
});
cljs.core.async.t17814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17816,meta17815__$1){var self__ = this;
var _17816__$1 = this;return (new cljs.core.async.t17814(self__.ch,self__.f,self__.map_LT_,meta17815__$1));
});
cljs.core.async.__GT_t17814 = (function __GT_t17814(ch__$1,f__$1,map_LT___$1,meta17815){return (new cljs.core.async.t17814(ch__$1,f__$1,map_LT___$1,meta17815));
});
}
return (new cljs.core.async.t17814(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17823 = (function (ch,f,map_GT_,meta17824){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17824 = meta17824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17823.cljs$lang$type = true;
cljs.core.async.t17823.cljs$lang$ctorStr = "cljs.core.async/t17823";
cljs.core.async.t17823.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17823");
});
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17825){var self__ = this;
var _17825__$1 = this;return self__.meta17824;
});
cljs.core.async.t17823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17825,meta17824__$1){var self__ = this;
var _17825__$1 = this;return (new cljs.core.async.t17823(self__.ch,self__.f,self__.map_GT_,meta17824__$1));
});
cljs.core.async.__GT_t17823 = (function __GT_t17823(ch__$1,f__$1,map_GT___$1,meta17824){return (new cljs.core.async.t17823(ch__$1,f__$1,map_GT___$1,meta17824));
});
}
return (new cljs.core.async.t17823(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17829 = (function (ch,p,filter_GT_,meta17830){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17830 = meta17830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17829.cljs$lang$type = true;
cljs.core.async.t17829.cljs$lang$ctorStr = "cljs.core.async/t17829";
cljs.core.async.t17829.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t17829");
});
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17831){var self__ = this;
var _17831__$1 = this;return self__.meta17830;
});
cljs.core.async.t17829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17831,meta17830__$1){var self__ = this;
var _17831__$1 = this;return (new cljs.core.async.t17829(self__.ch,self__.p,self__.filter_GT_,meta17830__$1));
});
cljs.core.async.__GT_t17829 = (function __GT_t17829(ch__$1,p__$1,filter_GT___$1,meta17830){return (new cljs.core.async.t17829(ch__$1,p__$1,filter_GT___$1,meta17830));
});
}
return (new cljs.core.async.t17829(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___17914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___17914,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___17914,out){
return (function (state_17893){var state_val_17894 = (state_17893[(1)]);if((state_val_17894 === (7)))
{var inst_17889 = (state_17893[(2)]);var state_17893__$1 = state_17893;var statearr_17895_17915 = state_17893__$1;(statearr_17895_17915[(2)] = inst_17889);
(statearr_17895_17915[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (1)))
{var state_17893__$1 = state_17893;var statearr_17896_17916 = state_17893__$1;(statearr_17896_17916[(2)] = null);
(statearr_17896_17916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (4)))
{var inst_17875 = (state_17893[(7)]);var inst_17875__$1 = (state_17893[(2)]);var inst_17876 = (inst_17875__$1 == null);var state_17893__$1 = (function (){var statearr_17897 = state_17893;(statearr_17897[(7)] = inst_17875__$1);
return statearr_17897;
})();if(cljs.core.truth_(inst_17876))
{var statearr_17898_17917 = state_17893__$1;(statearr_17898_17917[(1)] = (5));
} else
{var statearr_17899_17918 = state_17893__$1;(statearr_17899_17918[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (6)))
{var inst_17875 = (state_17893[(7)]);var inst_17880 = p.call(null,inst_17875);var state_17893__$1 = state_17893;if(cljs.core.truth_(inst_17880))
{var statearr_17900_17919 = state_17893__$1;(statearr_17900_17919[(1)] = (8));
} else
{var statearr_17901_17920 = state_17893__$1;(statearr_17901_17920[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (3)))
{var inst_17891 = (state_17893[(2)]);var state_17893__$1 = state_17893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17893__$1,inst_17891);
} else
{if((state_val_17894 === (2)))
{var state_17893__$1 = state_17893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17893__$1,(4),ch);
} else
{if((state_val_17894 === (11)))
{var inst_17883 = (state_17893[(2)]);var state_17893__$1 = state_17893;var statearr_17902_17921 = state_17893__$1;(statearr_17902_17921[(2)] = inst_17883);
(statearr_17902_17921[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (9)))
{var state_17893__$1 = state_17893;var statearr_17903_17922 = state_17893__$1;(statearr_17903_17922[(2)] = null);
(statearr_17903_17922[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (5)))
{var inst_17878 = cljs.core.async.close_BANG_.call(null,out);var state_17893__$1 = state_17893;var statearr_17904_17923 = state_17893__$1;(statearr_17904_17923[(2)] = inst_17878);
(statearr_17904_17923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (10)))
{var inst_17886 = (state_17893[(2)]);var state_17893__$1 = (function (){var statearr_17905 = state_17893;(statearr_17905[(8)] = inst_17886);
return statearr_17905;
})();var statearr_17906_17924 = state_17893__$1;(statearr_17906_17924[(2)] = null);
(statearr_17906_17924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17894 === (8)))
{var inst_17875 = (state_17893[(7)]);var state_17893__$1 = state_17893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17893__$1,(11),out,inst_17875);
} else
{return null;
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
});})(c__13092__auto___17914,out))
;return ((function (switch__13027__auto__,c__13092__auto___17914,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_17910 = [null,null,null,null,null,null,null,null,null];(statearr_17910[(0)] = state_machine__13028__auto__);
(statearr_17910[(1)] = (1));
return statearr_17910;
});
var state_machine__13028__auto____1 = (function (state_17893){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_17893);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e17911){if((e17911 instanceof Object))
{var ex__13031__auto__ = e17911;var statearr_17912_17925 = state_17893;(statearr_17912_17925[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17926 = state_17893;
state_17893 = G__17926;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_17893){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_17893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___17914,out))
})();var state__13094__auto__ = (function (){var statearr_17913 = f__13093__auto__.call(null);(statearr_17913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___17914);
return statearr_17913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___17914,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__){
return (function (state_18092){var state_val_18093 = (state_18092[(1)]);if((state_val_18093 === (7)))
{var inst_18088 = (state_18092[(2)]);var state_18092__$1 = state_18092;var statearr_18094_18135 = state_18092__$1;(statearr_18094_18135[(2)] = inst_18088);
(statearr_18094_18135[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (20)))
{var inst_18058 = (state_18092[(7)]);var inst_18069 = (state_18092[(2)]);var inst_18070 = cljs.core.next.call(null,inst_18058);var inst_18044 = inst_18070;var inst_18045 = null;var inst_18046 = (0);var inst_18047 = (0);var state_18092__$1 = (function (){var statearr_18095 = state_18092;(statearr_18095[(8)] = inst_18047);
(statearr_18095[(9)] = inst_18045);
(statearr_18095[(10)] = inst_18044);
(statearr_18095[(11)] = inst_18069);
(statearr_18095[(12)] = inst_18046);
return statearr_18095;
})();var statearr_18096_18136 = state_18092__$1;(statearr_18096_18136[(2)] = null);
(statearr_18096_18136[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (1)))
{var state_18092__$1 = state_18092;var statearr_18097_18137 = state_18092__$1;(statearr_18097_18137[(2)] = null);
(statearr_18097_18137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (4)))
{var inst_18033 = (state_18092[(13)]);var inst_18033__$1 = (state_18092[(2)]);var inst_18034 = (inst_18033__$1 == null);var state_18092__$1 = (function (){var statearr_18098 = state_18092;(statearr_18098[(13)] = inst_18033__$1);
return statearr_18098;
})();if(cljs.core.truth_(inst_18034))
{var statearr_18099_18138 = state_18092__$1;(statearr_18099_18138[(1)] = (5));
} else
{var statearr_18100_18139 = state_18092__$1;(statearr_18100_18139[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (15)))
{var state_18092__$1 = state_18092;var statearr_18104_18140 = state_18092__$1;(statearr_18104_18140[(2)] = null);
(statearr_18104_18140[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (21)))
{var state_18092__$1 = state_18092;var statearr_18105_18141 = state_18092__$1;(statearr_18105_18141[(2)] = null);
(statearr_18105_18141[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (13)))
{var inst_18047 = (state_18092[(8)]);var inst_18045 = (state_18092[(9)]);var inst_18044 = (state_18092[(10)]);var inst_18046 = (state_18092[(12)]);var inst_18054 = (state_18092[(2)]);var inst_18055 = (inst_18047 + (1));var tmp18101 = inst_18045;var tmp18102 = inst_18044;var tmp18103 = inst_18046;var inst_18044__$1 = tmp18102;var inst_18045__$1 = tmp18101;var inst_18046__$1 = tmp18103;var inst_18047__$1 = inst_18055;var state_18092__$1 = (function (){var statearr_18106 = state_18092;(statearr_18106[(8)] = inst_18047__$1);
(statearr_18106[(14)] = inst_18054);
(statearr_18106[(9)] = inst_18045__$1);
(statearr_18106[(10)] = inst_18044__$1);
(statearr_18106[(12)] = inst_18046__$1);
return statearr_18106;
})();var statearr_18107_18142 = state_18092__$1;(statearr_18107_18142[(2)] = null);
(statearr_18107_18142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (22)))
{var state_18092__$1 = state_18092;var statearr_18108_18143 = state_18092__$1;(statearr_18108_18143[(2)] = null);
(statearr_18108_18143[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (6)))
{var inst_18033 = (state_18092[(13)]);var inst_18042 = f.call(null,inst_18033);var inst_18043 = cljs.core.seq.call(null,inst_18042);var inst_18044 = inst_18043;var inst_18045 = null;var inst_18046 = (0);var inst_18047 = (0);var state_18092__$1 = (function (){var statearr_18109 = state_18092;(statearr_18109[(8)] = inst_18047);
(statearr_18109[(9)] = inst_18045);
(statearr_18109[(10)] = inst_18044);
(statearr_18109[(12)] = inst_18046);
return statearr_18109;
})();var statearr_18110_18144 = state_18092__$1;(statearr_18110_18144[(2)] = null);
(statearr_18110_18144[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (17)))
{var inst_18058 = (state_18092[(7)]);var inst_18062 = cljs.core.chunk_first.call(null,inst_18058);var inst_18063 = cljs.core.chunk_rest.call(null,inst_18058);var inst_18064 = cljs.core.count.call(null,inst_18062);var inst_18044 = inst_18063;var inst_18045 = inst_18062;var inst_18046 = inst_18064;var inst_18047 = (0);var state_18092__$1 = (function (){var statearr_18111 = state_18092;(statearr_18111[(8)] = inst_18047);
(statearr_18111[(9)] = inst_18045);
(statearr_18111[(10)] = inst_18044);
(statearr_18111[(12)] = inst_18046);
return statearr_18111;
})();var statearr_18112_18145 = state_18092__$1;(statearr_18112_18145[(2)] = null);
(statearr_18112_18145[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (3)))
{var inst_18090 = (state_18092[(2)]);var state_18092__$1 = state_18092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18092__$1,inst_18090);
} else
{if((state_val_18093 === (12)))
{var inst_18078 = (state_18092[(2)]);var state_18092__$1 = state_18092;var statearr_18113_18146 = state_18092__$1;(statearr_18113_18146[(2)] = inst_18078);
(statearr_18113_18146[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (2)))
{var state_18092__$1 = state_18092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18092__$1,(4),in$);
} else
{if((state_val_18093 === (23)))
{var inst_18086 = (state_18092[(2)]);var state_18092__$1 = state_18092;var statearr_18114_18147 = state_18092__$1;(statearr_18114_18147[(2)] = inst_18086);
(statearr_18114_18147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (19)))
{var inst_18073 = (state_18092[(2)]);var state_18092__$1 = state_18092;var statearr_18115_18148 = state_18092__$1;(statearr_18115_18148[(2)] = inst_18073);
(statearr_18115_18148[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (11)))
{var inst_18058 = (state_18092[(7)]);var inst_18044 = (state_18092[(10)]);var inst_18058__$1 = cljs.core.seq.call(null,inst_18044);var state_18092__$1 = (function (){var statearr_18116 = state_18092;(statearr_18116[(7)] = inst_18058__$1);
return statearr_18116;
})();if(inst_18058__$1)
{var statearr_18117_18149 = state_18092__$1;(statearr_18117_18149[(1)] = (14));
} else
{var statearr_18118_18150 = state_18092__$1;(statearr_18118_18150[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (9)))
{var inst_18080 = (state_18092[(2)]);var inst_18081 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18092__$1 = (function (){var statearr_18119 = state_18092;(statearr_18119[(15)] = inst_18080);
return statearr_18119;
})();if(cljs.core.truth_(inst_18081))
{var statearr_18120_18151 = state_18092__$1;(statearr_18120_18151[(1)] = (21));
} else
{var statearr_18121_18152 = state_18092__$1;(statearr_18121_18152[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (5)))
{var inst_18036 = cljs.core.async.close_BANG_.call(null,out);var state_18092__$1 = state_18092;var statearr_18122_18153 = state_18092__$1;(statearr_18122_18153[(2)] = inst_18036);
(statearr_18122_18153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (14)))
{var inst_18058 = (state_18092[(7)]);var inst_18060 = cljs.core.chunked_seq_QMARK_.call(null,inst_18058);var state_18092__$1 = state_18092;if(inst_18060)
{var statearr_18123_18154 = state_18092__$1;(statearr_18123_18154[(1)] = (17));
} else
{var statearr_18124_18155 = state_18092__$1;(statearr_18124_18155[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (16)))
{var inst_18076 = (state_18092[(2)]);var state_18092__$1 = state_18092;var statearr_18125_18156 = state_18092__$1;(statearr_18125_18156[(2)] = inst_18076);
(statearr_18125_18156[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18093 === (10)))
{var inst_18047 = (state_18092[(8)]);var inst_18045 = (state_18092[(9)]);var inst_18052 = cljs.core._nth.call(null,inst_18045,inst_18047);var state_18092__$1 = state_18092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18092__$1,(13),out,inst_18052);
} else
{if((state_val_18093 === (18)))
{var inst_18058 = (state_18092[(7)]);var inst_18067 = cljs.core.first.call(null,inst_18058);var state_18092__$1 = state_18092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18092__$1,(20),out,inst_18067);
} else
{if((state_val_18093 === (8)))
{var inst_18047 = (state_18092[(8)]);var inst_18046 = (state_18092[(12)]);var inst_18049 = (inst_18047 < inst_18046);var inst_18050 = inst_18049;var state_18092__$1 = state_18092;if(cljs.core.truth_(inst_18050))
{var statearr_18126_18157 = state_18092__$1;(statearr_18126_18157[(1)] = (10));
} else
{var statearr_18127_18158 = state_18092__$1;(statearr_18127_18158[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto__))
;return ((function (switch__13027__auto__,c__13092__auto__){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_18131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18131[(0)] = state_machine__13028__auto__);
(statearr_18131[(1)] = (1));
return statearr_18131;
});
var state_machine__13028__auto____1 = (function (state_18092){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18092);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e18132){if((e18132 instanceof Object))
{var ex__13031__auto__ = e18132;var statearr_18133_18159 = state_18092;(statearr_18133_18159[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18132;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18160 = state_18092;
state_18092 = G__18160;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18092){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__))
})();var state__13094__auto__ = (function (){var statearr_18134 = f__13093__auto__.call(null);(statearr_18134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_18134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__))
);
return c__13092__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13092__auto___18255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___18255){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___18255){
return (function (state_18231){var state_val_18232 = (state_18231[(1)]);if((state_val_18232 === (7)))
{var inst_18227 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18233_18256 = state_18231__$1;(statearr_18233_18256[(2)] = inst_18227);
(statearr_18233_18256[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (1)))
{var state_18231__$1 = state_18231;var statearr_18234_18257 = state_18231__$1;(statearr_18234_18257[(2)] = null);
(statearr_18234_18257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (4)))
{var inst_18210 = (state_18231[(7)]);var inst_18210__$1 = (state_18231[(2)]);var inst_18211 = (inst_18210__$1 == null);var state_18231__$1 = (function (){var statearr_18235 = state_18231;(statearr_18235[(7)] = inst_18210__$1);
return statearr_18235;
})();if(cljs.core.truth_(inst_18211))
{var statearr_18236_18258 = state_18231__$1;(statearr_18236_18258[(1)] = (5));
} else
{var statearr_18237_18259 = state_18231__$1;(statearr_18237_18259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (13)))
{var state_18231__$1 = state_18231;var statearr_18238_18260 = state_18231__$1;(statearr_18238_18260[(2)] = null);
(statearr_18238_18260[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (6)))
{var inst_18210 = (state_18231[(7)]);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18231__$1,(11),to,inst_18210);
} else
{if((state_val_18232 === (3)))
{var inst_18229 = (state_18231[(2)]);var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18231__$1,inst_18229);
} else
{if((state_val_18232 === (12)))
{var state_18231__$1 = state_18231;var statearr_18239_18261 = state_18231__$1;(statearr_18239_18261[(2)] = null);
(statearr_18239_18261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (2)))
{var state_18231__$1 = state_18231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18231__$1,(4),from);
} else
{if((state_val_18232 === (11)))
{var inst_18220 = (state_18231[(2)]);var state_18231__$1 = state_18231;if(cljs.core.truth_(inst_18220))
{var statearr_18240_18262 = state_18231__$1;(statearr_18240_18262[(1)] = (12));
} else
{var statearr_18241_18263 = state_18231__$1;(statearr_18241_18263[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (9)))
{var state_18231__$1 = state_18231;var statearr_18242_18264 = state_18231__$1;(statearr_18242_18264[(2)] = null);
(statearr_18242_18264[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (5)))
{var state_18231__$1 = state_18231;if(cljs.core.truth_(close_QMARK_))
{var statearr_18243_18265 = state_18231__$1;(statearr_18243_18265[(1)] = (8));
} else
{var statearr_18244_18266 = state_18231__$1;(statearr_18244_18266[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (14)))
{var inst_18225 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18245_18267 = state_18231__$1;(statearr_18245_18267[(2)] = inst_18225);
(statearr_18245_18267[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (10)))
{var inst_18217 = (state_18231[(2)]);var state_18231__$1 = state_18231;var statearr_18246_18268 = state_18231__$1;(statearr_18246_18268[(2)] = inst_18217);
(statearr_18246_18268[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18232 === (8)))
{var inst_18214 = cljs.core.async.close_BANG_.call(null,to);var state_18231__$1 = state_18231;var statearr_18247_18269 = state_18231__$1;(statearr_18247_18269[(2)] = inst_18214);
(statearr_18247_18269[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___18255))
;return ((function (switch__13027__auto__,c__13092__auto___18255){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_18251 = [null,null,null,null,null,null,null,null];(statearr_18251[(0)] = state_machine__13028__auto__);
(statearr_18251[(1)] = (1));
return statearr_18251;
});
var state_machine__13028__auto____1 = (function (state_18231){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18231);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e18252){if((e18252 instanceof Object))
{var ex__13031__auto__ = e18252;var statearr_18253_18270 = state_18231;(statearr_18253_18270[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18271 = state_18231;
state_18231 = G__18271;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18231){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___18255))
})();var state__13094__auto__ = (function (){var statearr_18254 = f__13093__auto__.call(null);(statearr_18254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___18255);
return statearr_18254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___18255))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13092__auto___18372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___18372,tc,fc){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___18372,tc,fc){
return (function (state_18347){var state_val_18348 = (state_18347[(1)]);if((state_val_18348 === (7)))
{var inst_18343 = (state_18347[(2)]);var state_18347__$1 = state_18347;var statearr_18349_18373 = state_18347__$1;(statearr_18349_18373[(2)] = inst_18343);
(statearr_18349_18373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (1)))
{var state_18347__$1 = state_18347;var statearr_18350_18374 = state_18347__$1;(statearr_18350_18374[(2)] = null);
(statearr_18350_18374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (4)))
{var inst_18324 = (state_18347[(7)]);var inst_18324__$1 = (state_18347[(2)]);var inst_18325 = (inst_18324__$1 == null);var state_18347__$1 = (function (){var statearr_18351 = state_18347;(statearr_18351[(7)] = inst_18324__$1);
return statearr_18351;
})();if(cljs.core.truth_(inst_18325))
{var statearr_18352_18375 = state_18347__$1;(statearr_18352_18375[(1)] = (5));
} else
{var statearr_18353_18376 = state_18347__$1;(statearr_18353_18376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (13)))
{var state_18347__$1 = state_18347;var statearr_18354_18377 = state_18347__$1;(statearr_18354_18377[(2)] = null);
(statearr_18354_18377[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (6)))
{var inst_18324 = (state_18347[(7)]);var inst_18330 = p.call(null,inst_18324);var state_18347__$1 = state_18347;if(cljs.core.truth_(inst_18330))
{var statearr_18355_18378 = state_18347__$1;(statearr_18355_18378[(1)] = (9));
} else
{var statearr_18356_18379 = state_18347__$1;(statearr_18356_18379[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (3)))
{var inst_18345 = (state_18347[(2)]);var state_18347__$1 = state_18347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18347__$1,inst_18345);
} else
{if((state_val_18348 === (12)))
{var state_18347__$1 = state_18347;var statearr_18357_18380 = state_18347__$1;(statearr_18357_18380[(2)] = null);
(statearr_18357_18380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (2)))
{var state_18347__$1 = state_18347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18347__$1,(4),ch);
} else
{if((state_val_18348 === (11)))
{var inst_18324 = (state_18347[(7)]);var inst_18334 = (state_18347[(2)]);var state_18347__$1 = state_18347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18347__$1,(8),inst_18334,inst_18324);
} else
{if((state_val_18348 === (9)))
{var state_18347__$1 = state_18347;var statearr_18358_18381 = state_18347__$1;(statearr_18358_18381[(2)] = tc);
(statearr_18358_18381[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (5)))
{var inst_18327 = cljs.core.async.close_BANG_.call(null,tc);var inst_18328 = cljs.core.async.close_BANG_.call(null,fc);var state_18347__$1 = (function (){var statearr_18359 = state_18347;(statearr_18359[(8)] = inst_18327);
return statearr_18359;
})();var statearr_18360_18382 = state_18347__$1;(statearr_18360_18382[(2)] = inst_18328);
(statearr_18360_18382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (14)))
{var inst_18341 = (state_18347[(2)]);var state_18347__$1 = state_18347;var statearr_18361_18383 = state_18347__$1;(statearr_18361_18383[(2)] = inst_18341);
(statearr_18361_18383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (10)))
{var state_18347__$1 = state_18347;var statearr_18362_18384 = state_18347__$1;(statearr_18362_18384[(2)] = fc);
(statearr_18362_18384[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18348 === (8)))
{var inst_18336 = (state_18347[(2)]);var state_18347__$1 = state_18347;if(cljs.core.truth_(inst_18336))
{var statearr_18363_18385 = state_18347__$1;(statearr_18363_18385[(1)] = (12));
} else
{var statearr_18364_18386 = state_18347__$1;(statearr_18364_18386[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___18372,tc,fc))
;return ((function (switch__13027__auto__,c__13092__auto___18372,tc,fc){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_18368 = [null,null,null,null,null,null,null,null,null];(statearr_18368[(0)] = state_machine__13028__auto__);
(statearr_18368[(1)] = (1));
return statearr_18368;
});
var state_machine__13028__auto____1 = (function (state_18347){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18347);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e18369){if((e18369 instanceof Object))
{var ex__13031__auto__ = e18369;var statearr_18370_18387 = state_18347;(statearr_18370_18387[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18369;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18388 = state_18347;
state_18347 = G__18388;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18347){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___18372,tc,fc))
})();var state__13094__auto__ = (function (){var statearr_18371 = f__13093__auto__.call(null);(statearr_18371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___18372);
return statearr_18371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___18372,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__){
return (function (state_18435){var state_val_18436 = (state_18435[(1)]);if((state_val_18436 === (7)))
{var inst_18431 = (state_18435[(2)]);var state_18435__$1 = state_18435;var statearr_18437_18453 = state_18435__$1;(statearr_18437_18453[(2)] = inst_18431);
(statearr_18437_18453[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18436 === (6)))
{var inst_18424 = (state_18435[(7)]);var inst_18421 = (state_18435[(8)]);var inst_18428 = f.call(null,inst_18421,inst_18424);var inst_18421__$1 = inst_18428;var state_18435__$1 = (function (){var statearr_18438 = state_18435;(statearr_18438[(8)] = inst_18421__$1);
return statearr_18438;
})();var statearr_18439_18454 = state_18435__$1;(statearr_18439_18454[(2)] = null);
(statearr_18439_18454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18436 === (5)))
{var inst_18421 = (state_18435[(8)]);var state_18435__$1 = state_18435;var statearr_18440_18455 = state_18435__$1;(statearr_18440_18455[(2)] = inst_18421);
(statearr_18440_18455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18436 === (4)))
{var inst_18424 = (state_18435[(7)]);var inst_18424__$1 = (state_18435[(2)]);var inst_18425 = (inst_18424__$1 == null);var state_18435__$1 = (function (){var statearr_18441 = state_18435;(statearr_18441[(7)] = inst_18424__$1);
return statearr_18441;
})();if(cljs.core.truth_(inst_18425))
{var statearr_18442_18456 = state_18435__$1;(statearr_18442_18456[(1)] = (5));
} else
{var statearr_18443_18457 = state_18435__$1;(statearr_18443_18457[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18436 === (3)))
{var inst_18433 = (state_18435[(2)]);var state_18435__$1 = state_18435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18435__$1,inst_18433);
} else
{if((state_val_18436 === (2)))
{var state_18435__$1 = state_18435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18435__$1,(4),ch);
} else
{if((state_val_18436 === (1)))
{var inst_18421 = init;var state_18435__$1 = (function (){var statearr_18444 = state_18435;(statearr_18444[(8)] = inst_18421);
return statearr_18444;
})();var statearr_18445_18458 = state_18435__$1;(statearr_18445_18458[(2)] = null);
(statearr_18445_18458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13092__auto__))
;return ((function (switch__13027__auto__,c__13092__auto__){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_18449 = [null,null,null,null,null,null,null,null,null];(statearr_18449[(0)] = state_machine__13028__auto__);
(statearr_18449[(1)] = (1));
return statearr_18449;
});
var state_machine__13028__auto____1 = (function (state_18435){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18435);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e18450){if((e18450 instanceof Object))
{var ex__13031__auto__ = e18450;var statearr_18451_18459 = state_18435;(statearr_18451_18459[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18450;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18460 = state_18435;
state_18435 = G__18460;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18435){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__))
})();var state__13094__auto__ = (function (){var statearr_18452 = f__13093__auto__.call(null);(statearr_18452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_18452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__))
);
return c__13092__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__){
return (function (state_18534){var state_val_18535 = (state_18534[(1)]);if((state_val_18535 === (7)))
{var inst_18516 = (state_18534[(2)]);var state_18534__$1 = state_18534;var statearr_18536_18559 = state_18534__$1;(statearr_18536_18559[(2)] = inst_18516);
(statearr_18536_18559[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (1)))
{var inst_18510 = cljs.core.seq.call(null,coll);var inst_18511 = inst_18510;var state_18534__$1 = (function (){var statearr_18537 = state_18534;(statearr_18537[(7)] = inst_18511);
return statearr_18537;
})();var statearr_18538_18560 = state_18534__$1;(statearr_18538_18560[(2)] = null);
(statearr_18538_18560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (4)))
{var inst_18511 = (state_18534[(7)]);var inst_18514 = cljs.core.first.call(null,inst_18511);var state_18534__$1 = state_18534;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18534__$1,(7),ch,inst_18514);
} else
{if((state_val_18535 === (13)))
{var inst_18528 = (state_18534[(2)]);var state_18534__$1 = state_18534;var statearr_18539_18561 = state_18534__$1;(statearr_18539_18561[(2)] = inst_18528);
(statearr_18539_18561[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (6)))
{var inst_18519 = (state_18534[(2)]);var state_18534__$1 = state_18534;if(cljs.core.truth_(inst_18519))
{var statearr_18540_18562 = state_18534__$1;(statearr_18540_18562[(1)] = (8));
} else
{var statearr_18541_18563 = state_18534__$1;(statearr_18541_18563[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (3)))
{var inst_18532 = (state_18534[(2)]);var state_18534__$1 = state_18534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18534__$1,inst_18532);
} else
{if((state_val_18535 === (12)))
{var state_18534__$1 = state_18534;var statearr_18542_18564 = state_18534__$1;(statearr_18542_18564[(2)] = null);
(statearr_18542_18564[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (2)))
{var inst_18511 = (state_18534[(7)]);var state_18534__$1 = state_18534;if(cljs.core.truth_(inst_18511))
{var statearr_18543_18565 = state_18534__$1;(statearr_18543_18565[(1)] = (4));
} else
{var statearr_18544_18566 = state_18534__$1;(statearr_18544_18566[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (11)))
{var inst_18525 = cljs.core.async.close_BANG_.call(null,ch);var state_18534__$1 = state_18534;var statearr_18545_18567 = state_18534__$1;(statearr_18545_18567[(2)] = inst_18525);
(statearr_18545_18567[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (9)))
{var state_18534__$1 = state_18534;if(cljs.core.truth_(close_QMARK_))
{var statearr_18546_18568 = state_18534__$1;(statearr_18546_18568[(1)] = (11));
} else
{var statearr_18547_18569 = state_18534__$1;(statearr_18547_18569[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (5)))
{var inst_18511 = (state_18534[(7)]);var state_18534__$1 = state_18534;var statearr_18548_18570 = state_18534__$1;(statearr_18548_18570[(2)] = inst_18511);
(statearr_18548_18570[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (10)))
{var inst_18530 = (state_18534[(2)]);var state_18534__$1 = state_18534;var statearr_18549_18571 = state_18534__$1;(statearr_18549_18571[(2)] = inst_18530);
(statearr_18549_18571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18535 === (8)))
{var inst_18511 = (state_18534[(7)]);var inst_18521 = cljs.core.next.call(null,inst_18511);var inst_18511__$1 = inst_18521;var state_18534__$1 = (function (){var statearr_18550 = state_18534;(statearr_18550[(7)] = inst_18511__$1);
return statearr_18550;
})();var statearr_18551_18572 = state_18534__$1;(statearr_18551_18572[(2)] = null);
(statearr_18551_18572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto__))
;return ((function (switch__13027__auto__,c__13092__auto__){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_18555 = [null,null,null,null,null,null,null,null];(statearr_18555[(0)] = state_machine__13028__auto__);
(statearr_18555[(1)] = (1));
return statearr_18555;
});
var state_machine__13028__auto____1 = (function (state_18534){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18534);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e18556){if((e18556 instanceof Object))
{var ex__13031__auto__ = e18556;var statearr_18557_18573 = state_18534;(statearr_18557_18573[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18574 = state_18534;
state_18534 = G__18574;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18534){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__))
})();var state__13094__auto__ = (function (){var statearr_18558 = f__13093__auto__.call(null);(statearr_18558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_18558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__))
);
return c__13092__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18576 = {};return obj18576;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9081__auto__ = _;if(and__9081__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__9730__auto__ = (((_ == null))?null:_);return (function (){var or__9093__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18578 = {};return obj18578;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18800 = (function (cs,ch,mult,meta18801){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18801 = meta18801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18800.cljs$lang$type = true;
cljs.core.async.t18800.cljs$lang$ctorStr = "cljs.core.async/t18800";
cljs.core.async.t18800.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t18800");
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18800.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18802){var self__ = this;
var _18802__$1 = this;return self__.meta18801;
});})(cs))
;
cljs.core.async.t18800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18802,meta18801__$1){var self__ = this;
var _18802__$1 = this;return (new cljs.core.async.t18800(self__.cs,self__.ch,self__.mult,meta18801__$1));
});})(cs))
;
cljs.core.async.__GT_t18800 = ((function (cs){
return (function __GT_t18800(cs__$1,ch__$1,mult__$1,meta18801){return (new cljs.core.async.t18800(cs__$1,ch__$1,mult__$1,meta18801));
});})(cs))
;
}
return (new cljs.core.async.t18800(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13092__auto___19021 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19021,cs,m,dchan,dctr,done){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19021,cs,m,dchan,dctr,done){
return (function (state_18933){var state_val_18934 = (state_18933[(1)]);if((state_val_18934 === (7)))
{var inst_18929 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18935_19022 = state_18933__$1;(statearr_18935_19022[(2)] = inst_18929);
(statearr_18935_19022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (20)))
{var inst_18834 = (state_18933[(7)]);var inst_18844 = cljs.core.first.call(null,inst_18834);var inst_18845 = cljs.core.nth.call(null,inst_18844,(0),null);var inst_18846 = cljs.core.nth.call(null,inst_18844,(1),null);var state_18933__$1 = (function (){var statearr_18936 = state_18933;(statearr_18936[(8)] = inst_18845);
return statearr_18936;
})();if(cljs.core.truth_(inst_18846))
{var statearr_18937_19023 = state_18933__$1;(statearr_18937_19023[(1)] = (22));
} else
{var statearr_18938_19024 = state_18933__$1;(statearr_18938_19024[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (27)))
{var inst_18805 = (state_18933[(9)]);var inst_18874 = (state_18933[(10)]);var inst_18876 = (state_18933[(11)]);var inst_18881 = (state_18933[(12)]);var inst_18881__$1 = cljs.core._nth.call(null,inst_18874,inst_18876);var inst_18882 = cljs.core.async.put_BANG_.call(null,inst_18881__$1,inst_18805,done);var state_18933__$1 = (function (){var statearr_18939 = state_18933;(statearr_18939[(12)] = inst_18881__$1);
return statearr_18939;
})();if(cljs.core.truth_(inst_18882))
{var statearr_18940_19025 = state_18933__$1;(statearr_18940_19025[(1)] = (30));
} else
{var statearr_18941_19026 = state_18933__$1;(statearr_18941_19026[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (1)))
{var state_18933__$1 = state_18933;var statearr_18942_19027 = state_18933__$1;(statearr_18942_19027[(2)] = null);
(statearr_18942_19027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (24)))
{var inst_18834 = (state_18933[(7)]);var inst_18851 = (state_18933[(2)]);var inst_18852 = cljs.core.next.call(null,inst_18834);var inst_18814 = inst_18852;var inst_18815 = null;var inst_18816 = (0);var inst_18817 = (0);var state_18933__$1 = (function (){var statearr_18943 = state_18933;(statearr_18943[(13)] = inst_18851);
(statearr_18943[(14)] = inst_18817);
(statearr_18943[(15)] = inst_18815);
(statearr_18943[(16)] = inst_18816);
(statearr_18943[(17)] = inst_18814);
return statearr_18943;
})();var statearr_18944_19028 = state_18933__$1;(statearr_18944_19028[(2)] = null);
(statearr_18944_19028[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (39)))
{var state_18933__$1 = state_18933;var statearr_18948_19029 = state_18933__$1;(statearr_18948_19029[(2)] = null);
(statearr_18948_19029[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (4)))
{var inst_18805 = (state_18933[(9)]);var inst_18805__$1 = (state_18933[(2)]);var inst_18806 = (inst_18805__$1 == null);var state_18933__$1 = (function (){var statearr_18949 = state_18933;(statearr_18949[(9)] = inst_18805__$1);
return statearr_18949;
})();if(cljs.core.truth_(inst_18806))
{var statearr_18950_19030 = state_18933__$1;(statearr_18950_19030[(1)] = (5));
} else
{var statearr_18951_19031 = state_18933__$1;(statearr_18951_19031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (15)))
{var inst_18817 = (state_18933[(14)]);var inst_18815 = (state_18933[(15)]);var inst_18816 = (state_18933[(16)]);var inst_18814 = (state_18933[(17)]);var inst_18830 = (state_18933[(2)]);var inst_18831 = (inst_18817 + (1));var tmp18945 = inst_18815;var tmp18946 = inst_18816;var tmp18947 = inst_18814;var inst_18814__$1 = tmp18947;var inst_18815__$1 = tmp18945;var inst_18816__$1 = tmp18946;var inst_18817__$1 = inst_18831;var state_18933__$1 = (function (){var statearr_18952 = state_18933;(statearr_18952[(14)] = inst_18817__$1);
(statearr_18952[(18)] = inst_18830);
(statearr_18952[(15)] = inst_18815__$1);
(statearr_18952[(16)] = inst_18816__$1);
(statearr_18952[(17)] = inst_18814__$1);
return statearr_18952;
})();var statearr_18953_19032 = state_18933__$1;(statearr_18953_19032[(2)] = null);
(statearr_18953_19032[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (21)))
{var inst_18855 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18957_19033 = state_18933__$1;(statearr_18957_19033[(2)] = inst_18855);
(statearr_18957_19033[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (31)))
{var inst_18881 = (state_18933[(12)]);var inst_18885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18886 = cljs.core.async.untap_STAR_.call(null,m,inst_18881);var state_18933__$1 = (function (){var statearr_18958 = state_18933;(statearr_18958[(19)] = inst_18885);
return statearr_18958;
})();var statearr_18959_19034 = state_18933__$1;(statearr_18959_19034[(2)] = inst_18886);
(statearr_18959_19034[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (32)))
{var inst_18875 = (state_18933[(20)]);var inst_18874 = (state_18933[(10)]);var inst_18873 = (state_18933[(21)]);var inst_18876 = (state_18933[(11)]);var inst_18888 = (state_18933[(2)]);var inst_18889 = (inst_18876 + (1));var tmp18954 = inst_18875;var tmp18955 = inst_18874;var tmp18956 = inst_18873;var inst_18873__$1 = tmp18956;var inst_18874__$1 = tmp18955;var inst_18875__$1 = tmp18954;var inst_18876__$1 = inst_18889;var state_18933__$1 = (function (){var statearr_18960 = state_18933;(statearr_18960[(20)] = inst_18875__$1);
(statearr_18960[(10)] = inst_18874__$1);
(statearr_18960[(22)] = inst_18888);
(statearr_18960[(21)] = inst_18873__$1);
(statearr_18960[(11)] = inst_18876__$1);
return statearr_18960;
})();var statearr_18961_19035 = state_18933__$1;(statearr_18961_19035[(2)] = null);
(statearr_18961_19035[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (40)))
{var inst_18901 = (state_18933[(23)]);var inst_18905 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18906 = cljs.core.async.untap_STAR_.call(null,m,inst_18901);var state_18933__$1 = (function (){var statearr_18962 = state_18933;(statearr_18962[(24)] = inst_18905);
return statearr_18962;
})();var statearr_18963_19036 = state_18933__$1;(statearr_18963_19036[(2)] = inst_18906);
(statearr_18963_19036[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (33)))
{var inst_18892 = (state_18933[(25)]);var inst_18894 = cljs.core.chunked_seq_QMARK_.call(null,inst_18892);var state_18933__$1 = state_18933;if(inst_18894)
{var statearr_18964_19037 = state_18933__$1;(statearr_18964_19037[(1)] = (36));
} else
{var statearr_18965_19038 = state_18933__$1;(statearr_18965_19038[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (13)))
{var inst_18824 = (state_18933[(26)]);var inst_18827 = cljs.core.async.close_BANG_.call(null,inst_18824);var state_18933__$1 = state_18933;var statearr_18966_19039 = state_18933__$1;(statearr_18966_19039[(2)] = inst_18827);
(statearr_18966_19039[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (22)))
{var inst_18845 = (state_18933[(8)]);var inst_18848 = cljs.core.async.close_BANG_.call(null,inst_18845);var state_18933__$1 = state_18933;var statearr_18967_19040 = state_18933__$1;(statearr_18967_19040[(2)] = inst_18848);
(statearr_18967_19040[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (36)))
{var inst_18892 = (state_18933[(25)]);var inst_18896 = cljs.core.chunk_first.call(null,inst_18892);var inst_18897 = cljs.core.chunk_rest.call(null,inst_18892);var inst_18898 = cljs.core.count.call(null,inst_18896);var inst_18873 = inst_18897;var inst_18874 = inst_18896;var inst_18875 = inst_18898;var inst_18876 = (0);var state_18933__$1 = (function (){var statearr_18968 = state_18933;(statearr_18968[(20)] = inst_18875);
(statearr_18968[(10)] = inst_18874);
(statearr_18968[(21)] = inst_18873);
(statearr_18968[(11)] = inst_18876);
return statearr_18968;
})();var statearr_18969_19041 = state_18933__$1;(statearr_18969_19041[(2)] = null);
(statearr_18969_19041[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (41)))
{var inst_18892 = (state_18933[(25)]);var inst_18908 = (state_18933[(2)]);var inst_18909 = cljs.core.next.call(null,inst_18892);var inst_18873 = inst_18909;var inst_18874 = null;var inst_18875 = (0);var inst_18876 = (0);var state_18933__$1 = (function (){var statearr_18970 = state_18933;(statearr_18970[(20)] = inst_18875);
(statearr_18970[(10)] = inst_18874);
(statearr_18970[(21)] = inst_18873);
(statearr_18970[(11)] = inst_18876);
(statearr_18970[(27)] = inst_18908);
return statearr_18970;
})();var statearr_18971_19042 = state_18933__$1;(statearr_18971_19042[(2)] = null);
(statearr_18971_19042[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (43)))
{var state_18933__$1 = state_18933;var statearr_18972_19043 = state_18933__$1;(statearr_18972_19043[(2)] = null);
(statearr_18972_19043[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (29)))
{var inst_18917 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18973_19044 = state_18933__$1;(statearr_18973_19044[(2)] = inst_18917);
(statearr_18973_19044[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (44)))
{var inst_18926 = (state_18933[(2)]);var state_18933__$1 = (function (){var statearr_18974 = state_18933;(statearr_18974[(28)] = inst_18926);
return statearr_18974;
})();var statearr_18975_19045 = state_18933__$1;(statearr_18975_19045[(2)] = null);
(statearr_18975_19045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (6)))
{var inst_18865 = (state_18933[(29)]);var inst_18864 = cljs.core.deref.call(null,cs);var inst_18865__$1 = cljs.core.keys.call(null,inst_18864);var inst_18866 = cljs.core.count.call(null,inst_18865__$1);var inst_18867 = cljs.core.reset_BANG_.call(null,dctr,inst_18866);var inst_18872 = cljs.core.seq.call(null,inst_18865__$1);var inst_18873 = inst_18872;var inst_18874 = null;var inst_18875 = (0);var inst_18876 = (0);var state_18933__$1 = (function (){var statearr_18976 = state_18933;(statearr_18976[(29)] = inst_18865__$1);
(statearr_18976[(20)] = inst_18875);
(statearr_18976[(10)] = inst_18874);
(statearr_18976[(21)] = inst_18873);
(statearr_18976[(30)] = inst_18867);
(statearr_18976[(11)] = inst_18876);
return statearr_18976;
})();var statearr_18977_19046 = state_18933__$1;(statearr_18977_19046[(2)] = null);
(statearr_18977_19046[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (28)))
{var inst_18873 = (state_18933[(21)]);var inst_18892 = (state_18933[(25)]);var inst_18892__$1 = cljs.core.seq.call(null,inst_18873);var state_18933__$1 = (function (){var statearr_18978 = state_18933;(statearr_18978[(25)] = inst_18892__$1);
return statearr_18978;
})();if(inst_18892__$1)
{var statearr_18979_19047 = state_18933__$1;(statearr_18979_19047[(1)] = (33));
} else
{var statearr_18980_19048 = state_18933__$1;(statearr_18980_19048[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (25)))
{var inst_18875 = (state_18933[(20)]);var inst_18876 = (state_18933[(11)]);var inst_18878 = (inst_18876 < inst_18875);var inst_18879 = inst_18878;var state_18933__$1 = state_18933;if(cljs.core.truth_(inst_18879))
{var statearr_18981_19049 = state_18933__$1;(statearr_18981_19049[(1)] = (27));
} else
{var statearr_18982_19050 = state_18933__$1;(statearr_18982_19050[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (34)))
{var state_18933__$1 = state_18933;var statearr_18983_19051 = state_18933__$1;(statearr_18983_19051[(2)] = null);
(statearr_18983_19051[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (17)))
{var state_18933__$1 = state_18933;var statearr_18984_19052 = state_18933__$1;(statearr_18984_19052[(2)] = null);
(statearr_18984_19052[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (3)))
{var inst_18931 = (state_18933[(2)]);var state_18933__$1 = state_18933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18933__$1,inst_18931);
} else
{if((state_val_18934 === (12)))
{var inst_18860 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18985_19053 = state_18933__$1;(statearr_18985_19053[(2)] = inst_18860);
(statearr_18985_19053[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (2)))
{var state_18933__$1 = state_18933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18933__$1,(4),ch);
} else
{if((state_val_18934 === (23)))
{var state_18933__$1 = state_18933;var statearr_18986_19054 = state_18933__$1;(statearr_18986_19054[(2)] = null);
(statearr_18986_19054[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (35)))
{var inst_18915 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18987_19055 = state_18933__$1;(statearr_18987_19055[(2)] = inst_18915);
(statearr_18987_19055[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (19)))
{var inst_18834 = (state_18933[(7)]);var inst_18838 = cljs.core.chunk_first.call(null,inst_18834);var inst_18839 = cljs.core.chunk_rest.call(null,inst_18834);var inst_18840 = cljs.core.count.call(null,inst_18838);var inst_18814 = inst_18839;var inst_18815 = inst_18838;var inst_18816 = inst_18840;var inst_18817 = (0);var state_18933__$1 = (function (){var statearr_18988 = state_18933;(statearr_18988[(14)] = inst_18817);
(statearr_18988[(15)] = inst_18815);
(statearr_18988[(16)] = inst_18816);
(statearr_18988[(17)] = inst_18814);
return statearr_18988;
})();var statearr_18989_19056 = state_18933__$1;(statearr_18989_19056[(2)] = null);
(statearr_18989_19056[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (11)))
{var inst_18834 = (state_18933[(7)]);var inst_18814 = (state_18933[(17)]);var inst_18834__$1 = cljs.core.seq.call(null,inst_18814);var state_18933__$1 = (function (){var statearr_18990 = state_18933;(statearr_18990[(7)] = inst_18834__$1);
return statearr_18990;
})();if(inst_18834__$1)
{var statearr_18991_19057 = state_18933__$1;(statearr_18991_19057[(1)] = (16));
} else
{var statearr_18992_19058 = state_18933__$1;(statearr_18992_19058[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (9)))
{var inst_18862 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18993_19059 = state_18933__$1;(statearr_18993_19059[(2)] = inst_18862);
(statearr_18993_19059[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (5)))
{var inst_18812 = cljs.core.deref.call(null,cs);var inst_18813 = cljs.core.seq.call(null,inst_18812);var inst_18814 = inst_18813;var inst_18815 = null;var inst_18816 = (0);var inst_18817 = (0);var state_18933__$1 = (function (){var statearr_18994 = state_18933;(statearr_18994[(14)] = inst_18817);
(statearr_18994[(15)] = inst_18815);
(statearr_18994[(16)] = inst_18816);
(statearr_18994[(17)] = inst_18814);
return statearr_18994;
})();var statearr_18995_19060 = state_18933__$1;(statearr_18995_19060[(2)] = null);
(statearr_18995_19060[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (14)))
{var state_18933__$1 = state_18933;var statearr_18996_19061 = state_18933__$1;(statearr_18996_19061[(2)] = null);
(statearr_18996_19061[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (45)))
{var inst_18923 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_18997_19062 = state_18933__$1;(statearr_18997_19062[(2)] = inst_18923);
(statearr_18997_19062[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (26)))
{var inst_18865 = (state_18933[(29)]);var inst_18919 = (state_18933[(2)]);var inst_18920 = cljs.core.seq.call(null,inst_18865);var state_18933__$1 = (function (){var statearr_18998 = state_18933;(statearr_18998[(31)] = inst_18919);
return statearr_18998;
})();if(inst_18920)
{var statearr_18999_19063 = state_18933__$1;(statearr_18999_19063[(1)] = (42));
} else
{var statearr_19000_19064 = state_18933__$1;(statearr_19000_19064[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (16)))
{var inst_18834 = (state_18933[(7)]);var inst_18836 = cljs.core.chunked_seq_QMARK_.call(null,inst_18834);var state_18933__$1 = state_18933;if(inst_18836)
{var statearr_19001_19065 = state_18933__$1;(statearr_19001_19065[(1)] = (19));
} else
{var statearr_19002_19066 = state_18933__$1;(statearr_19002_19066[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (38)))
{var inst_18912 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_19003_19067 = state_18933__$1;(statearr_19003_19067[(2)] = inst_18912);
(statearr_19003_19067[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (30)))
{var state_18933__$1 = state_18933;var statearr_19004_19068 = state_18933__$1;(statearr_19004_19068[(2)] = null);
(statearr_19004_19068[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (10)))
{var inst_18817 = (state_18933[(14)]);var inst_18815 = (state_18933[(15)]);var inst_18823 = cljs.core._nth.call(null,inst_18815,inst_18817);var inst_18824 = cljs.core.nth.call(null,inst_18823,(0),null);var inst_18825 = cljs.core.nth.call(null,inst_18823,(1),null);var state_18933__$1 = (function (){var statearr_19005 = state_18933;(statearr_19005[(26)] = inst_18824);
return statearr_19005;
})();if(cljs.core.truth_(inst_18825))
{var statearr_19006_19069 = state_18933__$1;(statearr_19006_19069[(1)] = (13));
} else
{var statearr_19007_19070 = state_18933__$1;(statearr_19007_19070[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (18)))
{var inst_18858 = (state_18933[(2)]);var state_18933__$1 = state_18933;var statearr_19008_19071 = state_18933__$1;(statearr_19008_19071[(2)] = inst_18858);
(statearr_19008_19071[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (42)))
{var state_18933__$1 = state_18933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18933__$1,(45),dchan);
} else
{if((state_val_18934 === (37)))
{var inst_18805 = (state_18933[(9)]);var inst_18892 = (state_18933[(25)]);var inst_18901 = (state_18933[(23)]);var inst_18901__$1 = cljs.core.first.call(null,inst_18892);var inst_18902 = cljs.core.async.put_BANG_.call(null,inst_18901__$1,inst_18805,done);var state_18933__$1 = (function (){var statearr_19009 = state_18933;(statearr_19009[(23)] = inst_18901__$1);
return statearr_19009;
})();if(cljs.core.truth_(inst_18902))
{var statearr_19010_19072 = state_18933__$1;(statearr_19010_19072[(1)] = (39));
} else
{var statearr_19011_19073 = state_18933__$1;(statearr_19011_19073[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18934 === (8)))
{var inst_18817 = (state_18933[(14)]);var inst_18816 = (state_18933[(16)]);var inst_18819 = (inst_18817 < inst_18816);var inst_18820 = inst_18819;var state_18933__$1 = state_18933;if(cljs.core.truth_(inst_18820))
{var statearr_19012_19074 = state_18933__$1;(statearr_19012_19074[(1)] = (10));
} else
{var statearr_19013_19075 = state_18933__$1;(statearr_19013_19075[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___19021,cs,m,dchan,dctr,done))
;return ((function (switch__13027__auto__,c__13092__auto___19021,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19017[(0)] = state_machine__13028__auto__);
(statearr_19017[(1)] = (1));
return statearr_19017;
});
var state_machine__13028__auto____1 = (function (state_18933){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_18933);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19018){if((e19018 instanceof Object))
{var ex__13031__auto__ = e19018;var statearr_19019_19076 = state_18933;(statearr_19019_19076[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19018;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19077 = state_18933;
state_18933 = G__19077;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_18933){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_18933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19021,cs,m,dchan,dctr,done))
})();var state__13094__auto__ = (function (){var statearr_19020 = f__13093__auto__.call(null);(statearr_19020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19021);
return statearr_19020;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19021,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj19079 = {};return obj19079;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9081__auto__ = m;if(and__9081__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__9730__auto__ = (((m == null))?null:m);return (function (){var or__9093__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19199 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19199 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19200){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19200 = meta19200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19199.cljs$lang$type = true;
cljs.core.async.t19199.cljs$lang$ctorStr = "cljs.core.async/t19199";
cljs.core.async.t19199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t19199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19201){var self__ = this;
var _19201__$1 = this;return self__.meta19200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19201,meta19200__$1){var self__ = this;
var _19201__$1 = this;return (new cljs.core.async.t19199(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19200){return (new cljs.core.async.t19199(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19199(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13092__auto___19318 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19271){var state_val_19272 = (state_19271[(1)]);if((state_val_19272 === (7)))
{var inst_19215 = (state_19271[(7)]);var inst_19220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19215);var state_19271__$1 = state_19271;var statearr_19273_19319 = state_19271__$1;(statearr_19273_19319[(2)] = inst_19220);
(statearr_19273_19319[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (20)))
{var inst_19230 = (state_19271[(8)]);var state_19271__$1 = state_19271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19271__$1,(23),out,inst_19230);
} else
{if((state_val_19272 === (1)))
{var inst_19205 = (state_19271[(9)]);var inst_19205__$1 = calc_state.call(null);var inst_19206 = cljs.core.seq_QMARK_.call(null,inst_19205__$1);var state_19271__$1 = (function (){var statearr_19274 = state_19271;(statearr_19274[(9)] = inst_19205__$1);
return statearr_19274;
})();if(inst_19206)
{var statearr_19275_19320 = state_19271__$1;(statearr_19275_19320[(1)] = (2));
} else
{var statearr_19276_19321 = state_19271__$1;(statearr_19276_19321[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (24)))
{var inst_19223 = (state_19271[(10)]);var inst_19215 = inst_19223;var state_19271__$1 = (function (){var statearr_19277 = state_19271;(statearr_19277[(7)] = inst_19215);
return statearr_19277;
})();var statearr_19278_19322 = state_19271__$1;(statearr_19278_19322[(2)] = null);
(statearr_19278_19322[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (4)))
{var inst_19205 = (state_19271[(9)]);var inst_19211 = (state_19271[(2)]);var inst_19212 = cljs.core.get.call(null,inst_19211,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19213 = cljs.core.get.call(null,inst_19211,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19214 = cljs.core.get.call(null,inst_19211,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19215 = inst_19205;var state_19271__$1 = (function (){var statearr_19279 = state_19271;(statearr_19279[(11)] = inst_19214);
(statearr_19279[(12)] = inst_19213);
(statearr_19279[(7)] = inst_19215);
(statearr_19279[(13)] = inst_19212);
return statearr_19279;
})();var statearr_19280_19323 = state_19271__$1;(statearr_19280_19323[(2)] = null);
(statearr_19280_19323[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (15)))
{var state_19271__$1 = state_19271;var statearr_19281_19324 = state_19271__$1;(statearr_19281_19324[(2)] = null);
(statearr_19281_19324[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (21)))
{var inst_19223 = (state_19271[(10)]);var inst_19215 = inst_19223;var state_19271__$1 = (function (){var statearr_19282 = state_19271;(statearr_19282[(7)] = inst_19215);
return statearr_19282;
})();var statearr_19283_19325 = state_19271__$1;(statearr_19283_19325[(2)] = null);
(statearr_19283_19325[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (13)))
{var inst_19267 = (state_19271[(2)]);var state_19271__$1 = state_19271;var statearr_19284_19326 = state_19271__$1;(statearr_19284_19326[(2)] = inst_19267);
(statearr_19284_19326[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (22)))
{var inst_19265 = (state_19271[(2)]);var state_19271__$1 = state_19271;var statearr_19285_19327 = state_19271__$1;(statearr_19285_19327[(2)] = inst_19265);
(statearr_19285_19327[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (6)))
{var inst_19269 = (state_19271[(2)]);var state_19271__$1 = state_19271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19271__$1,inst_19269);
} else
{if((state_val_19272 === (25)))
{var state_19271__$1 = state_19271;var statearr_19286_19328 = state_19271__$1;(statearr_19286_19328[(2)] = null);
(statearr_19286_19328[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (17)))
{var inst_19245 = (state_19271[(14)]);var state_19271__$1 = state_19271;var statearr_19287_19329 = state_19271__$1;(statearr_19287_19329[(2)] = inst_19245);
(statearr_19287_19329[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (3)))
{var inst_19205 = (state_19271[(9)]);var state_19271__$1 = state_19271;var statearr_19288_19330 = state_19271__$1;(statearr_19288_19330[(2)] = inst_19205);
(statearr_19288_19330[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (12)))
{var inst_19226 = (state_19271[(15)]);var inst_19231 = (state_19271[(16)]);var inst_19245 = (state_19271[(14)]);var inst_19245__$1 = inst_19226.call(null,inst_19231);var state_19271__$1 = (function (){var statearr_19289 = state_19271;(statearr_19289[(14)] = inst_19245__$1);
return statearr_19289;
})();if(cljs.core.truth_(inst_19245__$1))
{var statearr_19290_19331 = state_19271__$1;(statearr_19290_19331[(1)] = (17));
} else
{var statearr_19291_19332 = state_19271__$1;(statearr_19291_19332[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (2)))
{var inst_19205 = (state_19271[(9)]);var inst_19208 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19205);var state_19271__$1 = state_19271;var statearr_19292_19333 = state_19271__$1;(statearr_19292_19333[(2)] = inst_19208);
(statearr_19292_19333[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (23)))
{var inst_19256 = (state_19271[(2)]);var state_19271__$1 = state_19271;if(cljs.core.truth_(inst_19256))
{var statearr_19293_19334 = state_19271__$1;(statearr_19293_19334[(1)] = (24));
} else
{var statearr_19294_19335 = state_19271__$1;(statearr_19294_19335[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (19)))
{var inst_19253 = (state_19271[(2)]);var state_19271__$1 = state_19271;if(cljs.core.truth_(inst_19253))
{var statearr_19295_19336 = state_19271__$1;(statearr_19295_19336[(1)] = (20));
} else
{var statearr_19296_19337 = state_19271__$1;(statearr_19296_19337[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (11)))
{var inst_19230 = (state_19271[(8)]);var inst_19236 = (inst_19230 == null);var state_19271__$1 = state_19271;if(cljs.core.truth_(inst_19236))
{var statearr_19297_19338 = state_19271__$1;(statearr_19297_19338[(1)] = (14));
} else
{var statearr_19298_19339 = state_19271__$1;(statearr_19298_19339[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (9)))
{var inst_19223 = (state_19271[(10)]);var inst_19223__$1 = (state_19271[(2)]);var inst_19224 = cljs.core.get.call(null,inst_19223__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19225 = cljs.core.get.call(null,inst_19223__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19226 = cljs.core.get.call(null,inst_19223__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19271__$1 = (function (){var statearr_19299 = state_19271;(statearr_19299[(15)] = inst_19226);
(statearr_19299[(10)] = inst_19223__$1);
(statearr_19299[(17)] = inst_19225);
return statearr_19299;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19271__$1,(10),inst_19224);
} else
{if((state_val_19272 === (5)))
{var inst_19215 = (state_19271[(7)]);var inst_19218 = cljs.core.seq_QMARK_.call(null,inst_19215);var state_19271__$1 = state_19271;if(inst_19218)
{var statearr_19300_19340 = state_19271__$1;(statearr_19300_19340[(1)] = (7));
} else
{var statearr_19301_19341 = state_19271__$1;(statearr_19301_19341[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (14)))
{var inst_19231 = (state_19271[(16)]);var inst_19238 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19231);var state_19271__$1 = state_19271;var statearr_19302_19342 = state_19271__$1;(statearr_19302_19342[(2)] = inst_19238);
(statearr_19302_19342[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (26)))
{var inst_19261 = (state_19271[(2)]);var state_19271__$1 = state_19271;var statearr_19303_19343 = state_19271__$1;(statearr_19303_19343[(2)] = inst_19261);
(statearr_19303_19343[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (16)))
{var inst_19241 = (state_19271[(2)]);var inst_19242 = calc_state.call(null);var inst_19215 = inst_19242;var state_19271__$1 = (function (){var statearr_19304 = state_19271;(statearr_19304[(7)] = inst_19215);
(statearr_19304[(18)] = inst_19241);
return statearr_19304;
})();var statearr_19305_19344 = state_19271__$1;(statearr_19305_19344[(2)] = null);
(statearr_19305_19344[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (10)))
{var inst_19230 = (state_19271[(8)]);var inst_19231 = (state_19271[(16)]);var inst_19229 = (state_19271[(2)]);var inst_19230__$1 = cljs.core.nth.call(null,inst_19229,(0),null);var inst_19231__$1 = cljs.core.nth.call(null,inst_19229,(1),null);var inst_19232 = (inst_19230__$1 == null);var inst_19233 = cljs.core._EQ_.call(null,inst_19231__$1,change);var inst_19234 = (inst_19232) || (inst_19233);var state_19271__$1 = (function (){var statearr_19306 = state_19271;(statearr_19306[(8)] = inst_19230__$1);
(statearr_19306[(16)] = inst_19231__$1);
return statearr_19306;
})();if(cljs.core.truth_(inst_19234))
{var statearr_19307_19345 = state_19271__$1;(statearr_19307_19345[(1)] = (11));
} else
{var statearr_19308_19346 = state_19271__$1;(statearr_19308_19346[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (18)))
{var inst_19226 = (state_19271[(15)]);var inst_19231 = (state_19271[(16)]);var inst_19225 = (state_19271[(17)]);var inst_19248 = cljs.core.empty_QMARK_.call(null,inst_19226);var inst_19249 = inst_19225.call(null,inst_19231);var inst_19250 = cljs.core.not.call(null,inst_19249);var inst_19251 = (inst_19248) && (inst_19250);var state_19271__$1 = state_19271;var statearr_19309_19347 = state_19271__$1;(statearr_19309_19347[(2)] = inst_19251);
(statearr_19309_19347[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19272 === (8)))
{var inst_19215 = (state_19271[(7)]);var state_19271__$1 = state_19271;var statearr_19310_19348 = state_19271__$1;(statearr_19310_19348[(2)] = inst_19215);
(statearr_19310_19348[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13027__auto__,c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19314[(0)] = state_machine__13028__auto__);
(statearr_19314[(1)] = (1));
return statearr_19314;
});
var state_machine__13028__auto____1 = (function (state_19271){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_19271);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19315){if((e19315 instanceof Object))
{var ex__13031__auto__ = e19315;var statearr_19316_19349 = state_19271;(statearr_19316_19349[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19315;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19350 = state_19271;
state_19271 = G__19350;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_19271){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_19271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13094__auto__ = (function (){var statearr_19317 = f__13093__auto__.call(null);(statearr_19317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19318);
return statearr_19317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19352 = {};return obj19352;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9081__auto__ = p;if(and__9081__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9081__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__9730__auto__ = (((p == null))?null:p);return (function (){var or__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9093__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9093__auto__,mults){
return (function (p1__19353_SHARP_){if(cljs.core.truth_(p1__19353_SHARP_.call(null,topic)))
{return p1__19353_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19353_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9093__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19468 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19469){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19469 = meta19469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19468.cljs$lang$type = true;
cljs.core.async.t19468.cljs$lang$ctorStr = "cljs.core.async/t19468";
cljs.core.async.t19468.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"cljs.core.async/t19468");
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19468.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19470){var self__ = this;
var _19470__$1 = this;return self__.meta19469;
});})(mults,ensure_mult))
;
cljs.core.async.t19468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19470,meta19469__$1){var self__ = this;
var _19470__$1 = this;return (new cljs.core.async.t19468(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19469__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19468 = ((function (mults,ensure_mult){
return (function __GT_t19468(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19469){return (new cljs.core.async.t19468(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19469));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19468(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13092__auto___19582 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19582,mults,ensure_mult,p){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19582,mults,ensure_mult,p){
return (function (state_19538){var state_val_19539 = (state_19538[(1)]);if((state_val_19539 === (7)))
{var inst_19534 = (state_19538[(2)]);var state_19538__$1 = state_19538;var statearr_19540_19583 = state_19538__$1;(statearr_19540_19583[(2)] = inst_19534);
(statearr_19540_19583[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (20)))
{var state_19538__$1 = state_19538;var statearr_19541_19584 = state_19538__$1;(statearr_19541_19584[(2)] = null);
(statearr_19541_19584[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (1)))
{var state_19538__$1 = state_19538;var statearr_19542_19585 = state_19538__$1;(statearr_19542_19585[(2)] = null);
(statearr_19542_19585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (4)))
{var inst_19473 = (state_19538[(7)]);var inst_19473__$1 = (state_19538[(2)]);var inst_19474 = (inst_19473__$1 == null);var state_19538__$1 = (function (){var statearr_19543 = state_19538;(statearr_19543[(7)] = inst_19473__$1);
return statearr_19543;
})();if(cljs.core.truth_(inst_19474))
{var statearr_19544_19586 = state_19538__$1;(statearr_19544_19586[(1)] = (5));
} else
{var statearr_19545_19587 = state_19538__$1;(statearr_19545_19587[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (15)))
{var inst_19515 = (state_19538[(2)]);var state_19538__$1 = state_19538;var statearr_19546_19588 = state_19538__$1;(statearr_19546_19588[(2)] = inst_19515);
(statearr_19546_19588[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (21)))
{var inst_19521 = (state_19538[(8)]);var inst_19529 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19521);var state_19538__$1 = state_19538;var statearr_19547_19589 = state_19538__$1;(statearr_19547_19589[(2)] = inst_19529);
(statearr_19547_19589[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (13)))
{var inst_19497 = (state_19538[(9)]);var inst_19499 = cljs.core.chunked_seq_QMARK_.call(null,inst_19497);var state_19538__$1 = state_19538;if(inst_19499)
{var statearr_19548_19590 = state_19538__$1;(statearr_19548_19590[(1)] = (16));
} else
{var statearr_19549_19591 = state_19538__$1;(statearr_19549_19591[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (22)))
{var inst_19531 = (state_19538[(2)]);var state_19538__$1 = (function (){var statearr_19550 = state_19538;(statearr_19550[(10)] = inst_19531);
return statearr_19550;
})();var statearr_19551_19592 = state_19538__$1;(statearr_19551_19592[(2)] = null);
(statearr_19551_19592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (6)))
{var inst_19473 = (state_19538[(7)]);var inst_19521 = (state_19538[(8)]);var inst_19521__$1 = topic_fn.call(null,inst_19473);var inst_19522 = cljs.core.deref.call(null,mults);var inst_19523 = cljs.core.get.call(null,inst_19522,inst_19521__$1);var inst_19524 = cljs.core.async.muxch_STAR_.call(null,inst_19523);var state_19538__$1 = (function (){var statearr_19552 = state_19538;(statearr_19552[(8)] = inst_19521__$1);
return statearr_19552;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19538__$1,(19),inst_19524,inst_19473);
} else
{if((state_val_19539 === (17)))
{var inst_19497 = (state_19538[(9)]);var inst_19506 = cljs.core.first.call(null,inst_19497);var inst_19507 = cljs.core.async.muxch_STAR_.call(null,inst_19506);var inst_19508 = cljs.core.async.close_BANG_.call(null,inst_19507);var inst_19509 = cljs.core.next.call(null,inst_19497);var inst_19483 = inst_19509;var inst_19484 = null;var inst_19485 = (0);var inst_19486 = (0);var state_19538__$1 = (function (){var statearr_19553 = state_19538;(statearr_19553[(11)] = inst_19485);
(statearr_19553[(12)] = inst_19508);
(statearr_19553[(13)] = inst_19486);
(statearr_19553[(14)] = inst_19483);
(statearr_19553[(15)] = inst_19484);
return statearr_19553;
})();var statearr_19554_19593 = state_19538__$1;(statearr_19554_19593[(2)] = null);
(statearr_19554_19593[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (3)))
{var inst_19536 = (state_19538[(2)]);var state_19538__$1 = state_19538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19538__$1,inst_19536);
} else
{if((state_val_19539 === (12)))
{var inst_19517 = (state_19538[(2)]);var state_19538__$1 = state_19538;var statearr_19555_19594 = state_19538__$1;(statearr_19555_19594[(2)] = inst_19517);
(statearr_19555_19594[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (2)))
{var state_19538__$1 = state_19538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19538__$1,(4),ch);
} else
{if((state_val_19539 === (19)))
{var inst_19526 = (state_19538[(2)]);var state_19538__$1 = state_19538;if(cljs.core.truth_(inst_19526))
{var statearr_19556_19595 = state_19538__$1;(statearr_19556_19595[(1)] = (20));
} else
{var statearr_19557_19596 = state_19538__$1;(statearr_19557_19596[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (11)))
{var inst_19497 = (state_19538[(9)]);var inst_19483 = (state_19538[(14)]);var inst_19497__$1 = cljs.core.seq.call(null,inst_19483);var state_19538__$1 = (function (){var statearr_19558 = state_19538;(statearr_19558[(9)] = inst_19497__$1);
return statearr_19558;
})();if(inst_19497__$1)
{var statearr_19559_19597 = state_19538__$1;(statearr_19559_19597[(1)] = (13));
} else
{var statearr_19560_19598 = state_19538__$1;(statearr_19560_19598[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (9)))
{var inst_19519 = (state_19538[(2)]);var state_19538__$1 = state_19538;var statearr_19561_19599 = state_19538__$1;(statearr_19561_19599[(2)] = inst_19519);
(statearr_19561_19599[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (5)))
{var inst_19480 = cljs.core.deref.call(null,mults);var inst_19481 = cljs.core.vals.call(null,inst_19480);var inst_19482 = cljs.core.seq.call(null,inst_19481);var inst_19483 = inst_19482;var inst_19484 = null;var inst_19485 = (0);var inst_19486 = (0);var state_19538__$1 = (function (){var statearr_19562 = state_19538;(statearr_19562[(11)] = inst_19485);
(statearr_19562[(13)] = inst_19486);
(statearr_19562[(14)] = inst_19483);
(statearr_19562[(15)] = inst_19484);
return statearr_19562;
})();var statearr_19563_19600 = state_19538__$1;(statearr_19563_19600[(2)] = null);
(statearr_19563_19600[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (14)))
{var state_19538__$1 = state_19538;var statearr_19567_19601 = state_19538__$1;(statearr_19567_19601[(2)] = null);
(statearr_19567_19601[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (16)))
{var inst_19497 = (state_19538[(9)]);var inst_19501 = cljs.core.chunk_first.call(null,inst_19497);var inst_19502 = cljs.core.chunk_rest.call(null,inst_19497);var inst_19503 = cljs.core.count.call(null,inst_19501);var inst_19483 = inst_19502;var inst_19484 = inst_19501;var inst_19485 = inst_19503;var inst_19486 = (0);var state_19538__$1 = (function (){var statearr_19568 = state_19538;(statearr_19568[(11)] = inst_19485);
(statearr_19568[(13)] = inst_19486);
(statearr_19568[(14)] = inst_19483);
(statearr_19568[(15)] = inst_19484);
return statearr_19568;
})();var statearr_19569_19602 = state_19538__$1;(statearr_19569_19602[(2)] = null);
(statearr_19569_19602[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (10)))
{var inst_19485 = (state_19538[(11)]);var inst_19486 = (state_19538[(13)]);var inst_19483 = (state_19538[(14)]);var inst_19484 = (state_19538[(15)]);var inst_19491 = cljs.core._nth.call(null,inst_19484,inst_19486);var inst_19492 = cljs.core.async.muxch_STAR_.call(null,inst_19491);var inst_19493 = cljs.core.async.close_BANG_.call(null,inst_19492);var inst_19494 = (inst_19486 + (1));var tmp19564 = inst_19485;var tmp19565 = inst_19483;var tmp19566 = inst_19484;var inst_19483__$1 = tmp19565;var inst_19484__$1 = tmp19566;var inst_19485__$1 = tmp19564;var inst_19486__$1 = inst_19494;var state_19538__$1 = (function (){var statearr_19570 = state_19538;(statearr_19570[(11)] = inst_19485__$1);
(statearr_19570[(13)] = inst_19486__$1);
(statearr_19570[(16)] = inst_19493);
(statearr_19570[(14)] = inst_19483__$1);
(statearr_19570[(15)] = inst_19484__$1);
return statearr_19570;
})();var statearr_19571_19603 = state_19538__$1;(statearr_19571_19603[(2)] = null);
(statearr_19571_19603[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (18)))
{var inst_19512 = (state_19538[(2)]);var state_19538__$1 = state_19538;var statearr_19572_19604 = state_19538__$1;(statearr_19572_19604[(2)] = inst_19512);
(statearr_19572_19604[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19539 === (8)))
{var inst_19485 = (state_19538[(11)]);var inst_19486 = (state_19538[(13)]);var inst_19488 = (inst_19486 < inst_19485);var inst_19489 = inst_19488;var state_19538__$1 = state_19538;if(cljs.core.truth_(inst_19489))
{var statearr_19573_19605 = state_19538__$1;(statearr_19573_19605[(1)] = (10));
} else
{var statearr_19574_19606 = state_19538__$1;(statearr_19574_19606[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___19582,mults,ensure_mult,p))
;return ((function (switch__13027__auto__,c__13092__auto___19582,mults,ensure_mult,p){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19578[(0)] = state_machine__13028__auto__);
(statearr_19578[(1)] = (1));
return statearr_19578;
});
var state_machine__13028__auto____1 = (function (state_19538){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_19538);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19579){if((e19579 instanceof Object))
{var ex__13031__auto__ = e19579;var statearr_19580_19607 = state_19538;(statearr_19580_19607[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19608 = state_19538;
state_19538 = G__19608;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_19538){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_19538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19582,mults,ensure_mult,p))
})();var state__13094__auto__ = (function (){var statearr_19581 = f__13093__auto__.call(null);(statearr_19581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19582);
return statearr_19581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19582,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13092__auto___19745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19715){var state_val_19716 = (state_19715[(1)]);if((state_val_19716 === (7)))
{var state_19715__$1 = state_19715;var statearr_19717_19746 = state_19715__$1;(statearr_19717_19746[(2)] = null);
(statearr_19717_19746[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (1)))
{var state_19715__$1 = state_19715;var statearr_19718_19747 = state_19715__$1;(statearr_19718_19747[(2)] = null);
(statearr_19718_19747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (4)))
{var inst_19679 = (state_19715[(7)]);var inst_19681 = (inst_19679 < cnt);var state_19715__$1 = state_19715;if(cljs.core.truth_(inst_19681))
{var statearr_19719_19748 = state_19715__$1;(statearr_19719_19748[(1)] = (6));
} else
{var statearr_19720_19749 = state_19715__$1;(statearr_19720_19749[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (15)))
{var inst_19711 = (state_19715[(2)]);var state_19715__$1 = state_19715;var statearr_19721_19750 = state_19715__$1;(statearr_19721_19750[(2)] = inst_19711);
(statearr_19721_19750[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (13)))
{var inst_19704 = cljs.core.async.close_BANG_.call(null,out);var state_19715__$1 = state_19715;var statearr_19722_19751 = state_19715__$1;(statearr_19722_19751[(2)] = inst_19704);
(statearr_19722_19751[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (6)))
{var state_19715__$1 = state_19715;var statearr_19723_19752 = state_19715__$1;(statearr_19723_19752[(2)] = null);
(statearr_19723_19752[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (3)))
{var inst_19713 = (state_19715[(2)]);var state_19715__$1 = state_19715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19715__$1,inst_19713);
} else
{if((state_val_19716 === (12)))
{var inst_19701 = (state_19715[(8)]);var inst_19701__$1 = (state_19715[(2)]);var inst_19702 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19701__$1);var state_19715__$1 = (function (){var statearr_19724 = state_19715;(statearr_19724[(8)] = inst_19701__$1);
return statearr_19724;
})();if(cljs.core.truth_(inst_19702))
{var statearr_19725_19753 = state_19715__$1;(statearr_19725_19753[(1)] = (13));
} else
{var statearr_19726_19754 = state_19715__$1;(statearr_19726_19754[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (2)))
{var inst_19678 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19679 = (0);var state_19715__$1 = (function (){var statearr_19727 = state_19715;(statearr_19727[(7)] = inst_19679);
(statearr_19727[(9)] = inst_19678);
return statearr_19727;
})();var statearr_19728_19755 = state_19715__$1;(statearr_19728_19755[(2)] = null);
(statearr_19728_19755[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (11)))
{var inst_19679 = (state_19715[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19715,(10),Object,null,(9));var inst_19688 = chs__$1.call(null,inst_19679);var inst_19689 = done.call(null,inst_19679);var inst_19690 = cljs.core.async.take_BANG_.call(null,inst_19688,inst_19689);var state_19715__$1 = state_19715;var statearr_19729_19756 = state_19715__$1;(statearr_19729_19756[(2)] = inst_19690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19715__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (9)))
{var inst_19679 = (state_19715[(7)]);var inst_19692 = (state_19715[(2)]);var inst_19693 = (inst_19679 + (1));var inst_19679__$1 = inst_19693;var state_19715__$1 = (function (){var statearr_19730 = state_19715;(statearr_19730[(10)] = inst_19692);
(statearr_19730[(7)] = inst_19679__$1);
return statearr_19730;
})();var statearr_19731_19757 = state_19715__$1;(statearr_19731_19757[(2)] = null);
(statearr_19731_19757[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (5)))
{var inst_19699 = (state_19715[(2)]);var state_19715__$1 = (function (){var statearr_19732 = state_19715;(statearr_19732[(11)] = inst_19699);
return statearr_19732;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19715__$1,(12),dchan);
} else
{if((state_val_19716 === (14)))
{var inst_19701 = (state_19715[(8)]);var inst_19706 = cljs.core.apply.call(null,f,inst_19701);var state_19715__$1 = state_19715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19715__$1,(16),out,inst_19706);
} else
{if((state_val_19716 === (16)))
{var inst_19708 = (state_19715[(2)]);var state_19715__$1 = (function (){var statearr_19733 = state_19715;(statearr_19733[(12)] = inst_19708);
return statearr_19733;
})();var statearr_19734_19758 = state_19715__$1;(statearr_19734_19758[(2)] = null);
(statearr_19734_19758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (10)))
{var inst_19683 = (state_19715[(2)]);var inst_19684 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19715__$1 = (function (){var statearr_19735 = state_19715;(statearr_19735[(13)] = inst_19683);
return statearr_19735;
})();var statearr_19736_19759 = state_19715__$1;(statearr_19736_19759[(2)] = inst_19684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19715__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19716 === (8)))
{var inst_19697 = (state_19715[(2)]);var state_19715__$1 = state_19715;var statearr_19737_19760 = state_19715__$1;(statearr_19737_19760[(2)] = inst_19697);
(statearr_19737_19760[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13027__auto__,c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19741[(0)] = state_machine__13028__auto__);
(statearr_19741[(1)] = (1));
return statearr_19741;
});
var state_machine__13028__auto____1 = (function (state_19715){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_19715);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19742){if((e19742 instanceof Object))
{var ex__13031__auto__ = e19742;var statearr_19743_19761 = state_19715;(statearr_19743_19761[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19742;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19762 = state_19715;
state_19715 = G__19762;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_19715){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_19715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13094__auto__ = (function (){var statearr_19744 = f__13093__auto__.call(null);(statearr_19744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19745);
return statearr_19744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19745,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___19870 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19870,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19870,out){
return (function (state_19846){var state_val_19847 = (state_19846[(1)]);if((state_val_19847 === (7)))
{var inst_19826 = (state_19846[(7)]);var inst_19825 = (state_19846[(8)]);var inst_19825__$1 = (state_19846[(2)]);var inst_19826__$1 = cljs.core.nth.call(null,inst_19825__$1,(0),null);var inst_19827 = cljs.core.nth.call(null,inst_19825__$1,(1),null);var inst_19828 = (inst_19826__$1 == null);var state_19846__$1 = (function (){var statearr_19848 = state_19846;(statearr_19848[(7)] = inst_19826__$1);
(statearr_19848[(8)] = inst_19825__$1);
(statearr_19848[(9)] = inst_19827);
return statearr_19848;
})();if(cljs.core.truth_(inst_19828))
{var statearr_19849_19871 = state_19846__$1;(statearr_19849_19871[(1)] = (8));
} else
{var statearr_19850_19872 = state_19846__$1;(statearr_19850_19872[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (1)))
{var inst_19817 = cljs.core.vec.call(null,chs);var inst_19818 = inst_19817;var state_19846__$1 = (function (){var statearr_19851 = state_19846;(statearr_19851[(10)] = inst_19818);
return statearr_19851;
})();var statearr_19852_19873 = state_19846__$1;(statearr_19852_19873[(2)] = null);
(statearr_19852_19873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (4)))
{var inst_19818 = (state_19846[(10)]);var state_19846__$1 = state_19846;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19846__$1,(7),inst_19818);
} else
{if((state_val_19847 === (6)))
{var inst_19842 = (state_19846[(2)]);var state_19846__$1 = state_19846;var statearr_19853_19874 = state_19846__$1;(statearr_19853_19874[(2)] = inst_19842);
(statearr_19853_19874[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (3)))
{var inst_19844 = (state_19846[(2)]);var state_19846__$1 = state_19846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19846__$1,inst_19844);
} else
{if((state_val_19847 === (2)))
{var inst_19818 = (state_19846[(10)]);var inst_19820 = cljs.core.count.call(null,inst_19818);var inst_19821 = (inst_19820 > (0));var state_19846__$1 = state_19846;if(cljs.core.truth_(inst_19821))
{var statearr_19855_19875 = state_19846__$1;(statearr_19855_19875[(1)] = (4));
} else
{var statearr_19856_19876 = state_19846__$1;(statearr_19856_19876[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (11)))
{var inst_19818 = (state_19846[(10)]);var inst_19835 = (state_19846[(2)]);var tmp19854 = inst_19818;var inst_19818__$1 = tmp19854;var state_19846__$1 = (function (){var statearr_19857 = state_19846;(statearr_19857[(10)] = inst_19818__$1);
(statearr_19857[(11)] = inst_19835);
return statearr_19857;
})();var statearr_19858_19877 = state_19846__$1;(statearr_19858_19877[(2)] = null);
(statearr_19858_19877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (9)))
{var inst_19826 = (state_19846[(7)]);var state_19846__$1 = state_19846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19846__$1,(11),out,inst_19826);
} else
{if((state_val_19847 === (5)))
{var inst_19840 = cljs.core.async.close_BANG_.call(null,out);var state_19846__$1 = state_19846;var statearr_19859_19878 = state_19846__$1;(statearr_19859_19878[(2)] = inst_19840);
(statearr_19859_19878[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (10)))
{var inst_19838 = (state_19846[(2)]);var state_19846__$1 = state_19846;var statearr_19860_19879 = state_19846__$1;(statearr_19860_19879[(2)] = inst_19838);
(statearr_19860_19879[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19847 === (8)))
{var inst_19826 = (state_19846[(7)]);var inst_19818 = (state_19846[(10)]);var inst_19825 = (state_19846[(8)]);var inst_19827 = (state_19846[(9)]);var inst_19830 = (function (){var c = inst_19827;var v = inst_19826;var vec__19823 = inst_19825;var cs = inst_19818;return ((function (c,v,vec__19823,cs,inst_19826,inst_19818,inst_19825,inst_19827,state_val_19847,c__13092__auto___19870,out){
return (function (p1__19763_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19763_SHARP_);
});
;})(c,v,vec__19823,cs,inst_19826,inst_19818,inst_19825,inst_19827,state_val_19847,c__13092__auto___19870,out))
})();var inst_19831 = cljs.core.filterv.call(null,inst_19830,inst_19818);var inst_19818__$1 = inst_19831;var state_19846__$1 = (function (){var statearr_19861 = state_19846;(statearr_19861[(10)] = inst_19818__$1);
return statearr_19861;
})();var statearr_19862_19880 = state_19846__$1;(statearr_19862_19880[(2)] = null);
(statearr_19862_19880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___19870,out))
;return ((function (switch__13027__auto__,c__13092__auto___19870,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19866 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19866[(0)] = state_machine__13028__auto__);
(statearr_19866[(1)] = (1));
return statearr_19866;
});
var state_machine__13028__auto____1 = (function (state_19846){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_19846);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19867){if((e19867 instanceof Object))
{var ex__13031__auto__ = e19867;var statearr_19868_19881 = state_19846;(statearr_19868_19881[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19846);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19867;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19882 = state_19846;
state_19846 = G__19882;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_19846){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_19846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19870,out))
})();var state__13094__auto__ = (function (){var statearr_19869 = f__13093__auto__.call(null);(statearr_19869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19870);
return statearr_19869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19870,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___19975 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___19975,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___19975,out){
return (function (state_19952){var state_val_19953 = (state_19952[(1)]);if((state_val_19953 === (7)))
{var inst_19934 = (state_19952[(7)]);var inst_19934__$1 = (state_19952[(2)]);var inst_19935 = (inst_19934__$1 == null);var inst_19936 = cljs.core.not.call(null,inst_19935);var state_19952__$1 = (function (){var statearr_19954 = state_19952;(statearr_19954[(7)] = inst_19934__$1);
return statearr_19954;
})();if(inst_19936)
{var statearr_19955_19976 = state_19952__$1;(statearr_19955_19976[(1)] = (8));
} else
{var statearr_19956_19977 = state_19952__$1;(statearr_19956_19977[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (1)))
{var inst_19929 = (0);var state_19952__$1 = (function (){var statearr_19957 = state_19952;(statearr_19957[(8)] = inst_19929);
return statearr_19957;
})();var statearr_19958_19978 = state_19952__$1;(statearr_19958_19978[(2)] = null);
(statearr_19958_19978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (4)))
{var state_19952__$1 = state_19952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19952__$1,(7),ch);
} else
{if((state_val_19953 === (6)))
{var inst_19947 = (state_19952[(2)]);var state_19952__$1 = state_19952;var statearr_19959_19979 = state_19952__$1;(statearr_19959_19979[(2)] = inst_19947);
(statearr_19959_19979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (3)))
{var inst_19949 = (state_19952[(2)]);var inst_19950 = cljs.core.async.close_BANG_.call(null,out);var state_19952__$1 = (function (){var statearr_19960 = state_19952;(statearr_19960[(9)] = inst_19949);
return statearr_19960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19952__$1,inst_19950);
} else
{if((state_val_19953 === (2)))
{var inst_19929 = (state_19952[(8)]);var inst_19931 = (inst_19929 < n);var state_19952__$1 = state_19952;if(cljs.core.truth_(inst_19931))
{var statearr_19961_19980 = state_19952__$1;(statearr_19961_19980[(1)] = (4));
} else
{var statearr_19962_19981 = state_19952__$1;(statearr_19962_19981[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (11)))
{var inst_19929 = (state_19952[(8)]);var inst_19939 = (state_19952[(2)]);var inst_19940 = (inst_19929 + (1));var inst_19929__$1 = inst_19940;var state_19952__$1 = (function (){var statearr_19963 = state_19952;(statearr_19963[(8)] = inst_19929__$1);
(statearr_19963[(10)] = inst_19939);
return statearr_19963;
})();var statearr_19964_19982 = state_19952__$1;(statearr_19964_19982[(2)] = null);
(statearr_19964_19982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (9)))
{var state_19952__$1 = state_19952;var statearr_19965_19983 = state_19952__$1;(statearr_19965_19983[(2)] = null);
(statearr_19965_19983[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (5)))
{var state_19952__$1 = state_19952;var statearr_19966_19984 = state_19952__$1;(statearr_19966_19984[(2)] = null);
(statearr_19966_19984[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (10)))
{var inst_19944 = (state_19952[(2)]);var state_19952__$1 = state_19952;var statearr_19967_19985 = state_19952__$1;(statearr_19967_19985[(2)] = inst_19944);
(statearr_19967_19985[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19953 === (8)))
{var inst_19934 = (state_19952[(7)]);var state_19952__$1 = state_19952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(11),out,inst_19934);
} else
{return null;
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
});})(c__13092__auto___19975,out))
;return ((function (switch__13027__auto__,c__13092__auto___19975,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_19971 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19971[(0)] = state_machine__13028__auto__);
(statearr_19971[(1)] = (1));
return statearr_19971;
});
var state_machine__13028__auto____1 = (function (state_19952){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_19952);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e19972){if((e19972 instanceof Object))
{var ex__13031__auto__ = e19972;var statearr_19973_19986 = state_19952;(statearr_19973_19986[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19972;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19987 = state_19952;
state_19952 = G__19987;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_19952){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_19952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___19975,out))
})();var state__13094__auto__ = (function (){var statearr_19974 = f__13093__auto__.call(null);(statearr_19974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___19975);
return statearr_19974;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___19975,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___20084 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___20084,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___20084,out){
return (function (state_20059){var state_val_20060 = (state_20059[(1)]);if((state_val_20060 === (7)))
{var inst_20054 = (state_20059[(2)]);var state_20059__$1 = state_20059;var statearr_20061_20085 = state_20059__$1;(statearr_20061_20085[(2)] = inst_20054);
(statearr_20061_20085[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (1)))
{var inst_20036 = null;var state_20059__$1 = (function (){var statearr_20062 = state_20059;(statearr_20062[(7)] = inst_20036);
return statearr_20062;
})();var statearr_20063_20086 = state_20059__$1;(statearr_20063_20086[(2)] = null);
(statearr_20063_20086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (4)))
{var inst_20039 = (state_20059[(8)]);var inst_20039__$1 = (state_20059[(2)]);var inst_20040 = (inst_20039__$1 == null);var inst_20041 = cljs.core.not.call(null,inst_20040);var state_20059__$1 = (function (){var statearr_20064 = state_20059;(statearr_20064[(8)] = inst_20039__$1);
return statearr_20064;
})();if(inst_20041)
{var statearr_20065_20087 = state_20059__$1;(statearr_20065_20087[(1)] = (5));
} else
{var statearr_20066_20088 = state_20059__$1;(statearr_20066_20088[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (6)))
{var state_20059__$1 = state_20059;var statearr_20067_20089 = state_20059__$1;(statearr_20067_20089[(2)] = null);
(statearr_20067_20089[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (3)))
{var inst_20056 = (state_20059[(2)]);var inst_20057 = cljs.core.async.close_BANG_.call(null,out);var state_20059__$1 = (function (){var statearr_20068 = state_20059;(statearr_20068[(9)] = inst_20056);
return statearr_20068;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20059__$1,inst_20057);
} else
{if((state_val_20060 === (2)))
{var state_20059__$1 = state_20059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20059__$1,(4),ch);
} else
{if((state_val_20060 === (11)))
{var inst_20039 = (state_20059[(8)]);var inst_20048 = (state_20059[(2)]);var inst_20036 = inst_20039;var state_20059__$1 = (function (){var statearr_20069 = state_20059;(statearr_20069[(10)] = inst_20048);
(statearr_20069[(7)] = inst_20036);
return statearr_20069;
})();var statearr_20070_20090 = state_20059__$1;(statearr_20070_20090[(2)] = null);
(statearr_20070_20090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (9)))
{var inst_20039 = (state_20059[(8)]);var state_20059__$1 = state_20059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20059__$1,(11),out,inst_20039);
} else
{if((state_val_20060 === (5)))
{var inst_20039 = (state_20059[(8)]);var inst_20036 = (state_20059[(7)]);var inst_20043 = cljs.core._EQ_.call(null,inst_20039,inst_20036);var state_20059__$1 = state_20059;if(inst_20043)
{var statearr_20072_20091 = state_20059__$1;(statearr_20072_20091[(1)] = (8));
} else
{var statearr_20073_20092 = state_20059__$1;(statearr_20073_20092[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (10)))
{var inst_20051 = (state_20059[(2)]);var state_20059__$1 = state_20059;var statearr_20074_20093 = state_20059__$1;(statearr_20074_20093[(2)] = inst_20051);
(statearr_20074_20093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20060 === (8)))
{var inst_20036 = (state_20059[(7)]);var tmp20071 = inst_20036;var inst_20036__$1 = tmp20071;var state_20059__$1 = (function (){var statearr_20075 = state_20059;(statearr_20075[(7)] = inst_20036__$1);
return statearr_20075;
})();var statearr_20076_20094 = state_20059__$1;(statearr_20076_20094[(2)] = null);
(statearr_20076_20094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___20084,out))
;return ((function (switch__13027__auto__,c__13092__auto___20084,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20080 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20080[(0)] = state_machine__13028__auto__);
(statearr_20080[(1)] = (1));
return statearr_20080;
});
var state_machine__13028__auto____1 = (function (state_20059){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20059);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20081){if((e20081 instanceof Object))
{var ex__13031__auto__ = e20081;var statearr_20082_20095 = state_20059;(statearr_20082_20095[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20059);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20081;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20096 = state_20059;
state_20059 = G__20096;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20059){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___20084,out))
})();var state__13094__auto__ = (function (){var statearr_20083 = f__13093__auto__.call(null);(statearr_20083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___20084);
return statearr_20083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___20084,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___20231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___20231,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___20231,out){
return (function (state_20201){var state_val_20202 = (state_20201[(1)]);if((state_val_20202 === (7)))
{var inst_20197 = (state_20201[(2)]);var state_20201__$1 = state_20201;var statearr_20203_20232 = state_20201__$1;(statearr_20203_20232[(2)] = inst_20197);
(statearr_20203_20232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (1)))
{var inst_20164 = (new Array(n));var inst_20165 = inst_20164;var inst_20166 = (0);var state_20201__$1 = (function (){var statearr_20204 = state_20201;(statearr_20204[(7)] = inst_20165);
(statearr_20204[(8)] = inst_20166);
return statearr_20204;
})();var statearr_20205_20233 = state_20201__$1;(statearr_20205_20233[(2)] = null);
(statearr_20205_20233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (4)))
{var inst_20169 = (state_20201[(9)]);var inst_20169__$1 = (state_20201[(2)]);var inst_20170 = (inst_20169__$1 == null);var inst_20171 = cljs.core.not.call(null,inst_20170);var state_20201__$1 = (function (){var statearr_20206 = state_20201;(statearr_20206[(9)] = inst_20169__$1);
return statearr_20206;
})();if(inst_20171)
{var statearr_20207_20234 = state_20201__$1;(statearr_20207_20234[(1)] = (5));
} else
{var statearr_20208_20235 = state_20201__$1;(statearr_20208_20235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (15)))
{var inst_20191 = (state_20201[(2)]);var state_20201__$1 = state_20201;var statearr_20209_20236 = state_20201__$1;(statearr_20209_20236[(2)] = inst_20191);
(statearr_20209_20236[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (13)))
{var state_20201__$1 = state_20201;var statearr_20210_20237 = state_20201__$1;(statearr_20210_20237[(2)] = null);
(statearr_20210_20237[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (6)))
{var inst_20166 = (state_20201[(8)]);var inst_20187 = (inst_20166 > (0));var state_20201__$1 = state_20201;if(cljs.core.truth_(inst_20187))
{var statearr_20211_20238 = state_20201__$1;(statearr_20211_20238[(1)] = (12));
} else
{var statearr_20212_20239 = state_20201__$1;(statearr_20212_20239[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (3)))
{var inst_20199 = (state_20201[(2)]);var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20201__$1,inst_20199);
} else
{if((state_val_20202 === (12)))
{var inst_20165 = (state_20201[(7)]);var inst_20189 = cljs.core.vec.call(null,inst_20165);var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20201__$1,(15),out,inst_20189);
} else
{if((state_val_20202 === (2)))
{var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20201__$1,(4),ch);
} else
{if((state_val_20202 === (11)))
{var inst_20181 = (state_20201[(2)]);var inst_20182 = (new Array(n));var inst_20165 = inst_20182;var inst_20166 = (0);var state_20201__$1 = (function (){var statearr_20213 = state_20201;(statearr_20213[(10)] = inst_20181);
(statearr_20213[(7)] = inst_20165);
(statearr_20213[(8)] = inst_20166);
return statearr_20213;
})();var statearr_20214_20240 = state_20201__$1;(statearr_20214_20240[(2)] = null);
(statearr_20214_20240[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (9)))
{var inst_20165 = (state_20201[(7)]);var inst_20179 = cljs.core.vec.call(null,inst_20165);var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20201__$1,(11),out,inst_20179);
} else
{if((state_val_20202 === (5)))
{var inst_20169 = (state_20201[(9)]);var inst_20174 = (state_20201[(11)]);var inst_20165 = (state_20201[(7)]);var inst_20166 = (state_20201[(8)]);var inst_20173 = (inst_20165[inst_20166] = inst_20169);var inst_20174__$1 = (inst_20166 + (1));var inst_20175 = (inst_20174__$1 < n);var state_20201__$1 = (function (){var statearr_20215 = state_20201;(statearr_20215[(12)] = inst_20173);
(statearr_20215[(11)] = inst_20174__$1);
return statearr_20215;
})();if(cljs.core.truth_(inst_20175))
{var statearr_20216_20241 = state_20201__$1;(statearr_20216_20241[(1)] = (8));
} else
{var statearr_20217_20242 = state_20201__$1;(statearr_20217_20242[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (14)))
{var inst_20194 = (state_20201[(2)]);var inst_20195 = cljs.core.async.close_BANG_.call(null,out);var state_20201__$1 = (function (){var statearr_20219 = state_20201;(statearr_20219[(13)] = inst_20194);
return statearr_20219;
})();var statearr_20220_20243 = state_20201__$1;(statearr_20220_20243[(2)] = inst_20195);
(statearr_20220_20243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (10)))
{var inst_20185 = (state_20201[(2)]);var state_20201__$1 = state_20201;var statearr_20221_20244 = state_20201__$1;(statearr_20221_20244[(2)] = inst_20185);
(statearr_20221_20244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20202 === (8)))
{var inst_20174 = (state_20201[(11)]);var inst_20165 = (state_20201[(7)]);var tmp20218 = inst_20165;var inst_20165__$1 = tmp20218;var inst_20166 = inst_20174;var state_20201__$1 = (function (){var statearr_20222 = state_20201;(statearr_20222[(7)] = inst_20165__$1);
(statearr_20222[(8)] = inst_20166);
return statearr_20222;
})();var statearr_20223_20245 = state_20201__$1;(statearr_20223_20245[(2)] = null);
(statearr_20223_20245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___20231,out))
;return ((function (switch__13027__auto__,c__13092__auto___20231,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20227[(0)] = state_machine__13028__auto__);
(statearr_20227[(1)] = (1));
return statearr_20227;
});
var state_machine__13028__auto____1 = (function (state_20201){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20201);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20228){if((e20228 instanceof Object))
{var ex__13031__auto__ = e20228;var statearr_20229_20246 = state_20201;(statearr_20229_20246[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20201);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20247 = state_20201;
state_20201 = G__20247;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20201){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___20231,out))
})();var state__13094__auto__ = (function (){var statearr_20230 = f__13093__auto__.call(null);(statearr_20230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___20231);
return statearr_20230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___20231,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13092__auto___20390 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto___20390,out){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto___20390,out){
return (function (state_20360){var state_val_20361 = (state_20360[(1)]);if((state_val_20361 === (7)))
{var inst_20356 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20362_20391 = state_20360__$1;(statearr_20362_20391[(2)] = inst_20356);
(statearr_20362_20391[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (1)))
{var inst_20319 = [];var inst_20320 = inst_20319;var inst_20321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20360__$1 = (function (){var statearr_20363 = state_20360;(statearr_20363[(7)] = inst_20321);
(statearr_20363[(8)] = inst_20320);
return statearr_20363;
})();var statearr_20364_20392 = state_20360__$1;(statearr_20364_20392[(2)] = null);
(statearr_20364_20392[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (4)))
{var inst_20324 = (state_20360[(9)]);var inst_20324__$1 = (state_20360[(2)]);var inst_20325 = (inst_20324__$1 == null);var inst_20326 = cljs.core.not.call(null,inst_20325);var state_20360__$1 = (function (){var statearr_20365 = state_20360;(statearr_20365[(9)] = inst_20324__$1);
return statearr_20365;
})();if(inst_20326)
{var statearr_20366_20393 = state_20360__$1;(statearr_20366_20393[(1)] = (5));
} else
{var statearr_20367_20394 = state_20360__$1;(statearr_20367_20394[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (15)))
{var inst_20350 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20368_20395 = state_20360__$1;(statearr_20368_20395[(2)] = inst_20350);
(statearr_20368_20395[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (13)))
{var state_20360__$1 = state_20360;var statearr_20369_20396 = state_20360__$1;(statearr_20369_20396[(2)] = null);
(statearr_20369_20396[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (6)))
{var inst_20320 = (state_20360[(8)]);var inst_20345 = inst_20320.length;var inst_20346 = (inst_20345 > (0));var state_20360__$1 = state_20360;if(cljs.core.truth_(inst_20346))
{var statearr_20370_20397 = state_20360__$1;(statearr_20370_20397[(1)] = (12));
} else
{var statearr_20371_20398 = state_20360__$1;(statearr_20371_20398[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (3)))
{var inst_20358 = (state_20360[(2)]);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20360__$1,inst_20358);
} else
{if((state_val_20361 === (12)))
{var inst_20320 = (state_20360[(8)]);var inst_20348 = cljs.core.vec.call(null,inst_20320);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20360__$1,(15),out,inst_20348);
} else
{if((state_val_20361 === (2)))
{var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20360__$1,(4),ch);
} else
{if((state_val_20361 === (11)))
{var inst_20328 = (state_20360[(10)]);var inst_20324 = (state_20360[(9)]);var inst_20338 = (state_20360[(2)]);var inst_20339 = [];var inst_20340 = inst_20339.push(inst_20324);var inst_20320 = inst_20339;var inst_20321 = inst_20328;var state_20360__$1 = (function (){var statearr_20372 = state_20360;(statearr_20372[(7)] = inst_20321);
(statearr_20372[(8)] = inst_20320);
(statearr_20372[(11)] = inst_20338);
(statearr_20372[(12)] = inst_20340);
return statearr_20372;
})();var statearr_20373_20399 = state_20360__$1;(statearr_20373_20399[(2)] = null);
(statearr_20373_20399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (9)))
{var inst_20320 = (state_20360[(8)]);var inst_20336 = cljs.core.vec.call(null,inst_20320);var state_20360__$1 = state_20360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20360__$1,(11),out,inst_20336);
} else
{if((state_val_20361 === (5)))
{var inst_20321 = (state_20360[(7)]);var inst_20328 = (state_20360[(10)]);var inst_20324 = (state_20360[(9)]);var inst_20328__$1 = f.call(null,inst_20324);var inst_20329 = cljs.core._EQ_.call(null,inst_20328__$1,inst_20321);var inst_20330 = cljs.core.keyword_identical_QMARK_.call(null,inst_20321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20331 = (inst_20329) || (inst_20330);var state_20360__$1 = (function (){var statearr_20374 = state_20360;(statearr_20374[(10)] = inst_20328__$1);
return statearr_20374;
})();if(cljs.core.truth_(inst_20331))
{var statearr_20375_20400 = state_20360__$1;(statearr_20375_20400[(1)] = (8));
} else
{var statearr_20376_20401 = state_20360__$1;(statearr_20376_20401[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (14)))
{var inst_20353 = (state_20360[(2)]);var inst_20354 = cljs.core.async.close_BANG_.call(null,out);var state_20360__$1 = (function (){var statearr_20378 = state_20360;(statearr_20378[(13)] = inst_20353);
return statearr_20378;
})();var statearr_20379_20402 = state_20360__$1;(statearr_20379_20402[(2)] = inst_20354);
(statearr_20379_20402[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (10)))
{var inst_20343 = (state_20360[(2)]);var state_20360__$1 = state_20360;var statearr_20380_20403 = state_20360__$1;(statearr_20380_20403[(2)] = inst_20343);
(statearr_20380_20403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20361 === (8)))
{var inst_20320 = (state_20360[(8)]);var inst_20328 = (state_20360[(10)]);var inst_20324 = (state_20360[(9)]);var inst_20333 = inst_20320.push(inst_20324);var tmp20377 = inst_20320;var inst_20320__$1 = tmp20377;var inst_20321 = inst_20328;var state_20360__$1 = (function (){var statearr_20381 = state_20360;(statearr_20381[(7)] = inst_20321);
(statearr_20381[(8)] = inst_20320__$1);
(statearr_20381[(14)] = inst_20333);
return statearr_20381;
})();var statearr_20382_20404 = state_20360__$1;(statearr_20382_20404[(2)] = null);
(statearr_20382_20404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13092__auto___20390,out))
;return ((function (switch__13027__auto__,c__13092__auto___20390,out){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20386[(0)] = state_machine__13028__auto__);
(statearr_20386[(1)] = (1));
return statearr_20386;
});
var state_machine__13028__auto____1 = (function (state_20360){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20360);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20387){if((e20387 instanceof Object))
{var ex__13031__auto__ = e20387;var statearr_20388_20405 = state_20360;(statearr_20388_20405[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20406 = state_20360;
state_20360 = G__20406;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20360){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto___20390,out))
})();var state__13094__auto__ = (function (){var statearr_20389 = f__13093__auto__.call(null);(statearr_20389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto___20390);
return statearr_20389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto___20390,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map