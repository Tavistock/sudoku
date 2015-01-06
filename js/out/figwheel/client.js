// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__20512,args){var map__20514 = p__20512;var map__20514__$1 = ((cljs.core.seq_QMARK_.call(null,map__20514))?cljs.core.apply.call(null,cljs.core.hash_map,map__20514):map__20514);var debug = cljs.core.get.call(null,map__20514__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__20512,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__20512,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20515){
var p__20512 = cljs.core.first(arglist__20515);
var args = cljs.core.rest(arglist__20515);
return log__delegate(p__20512,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__20516){var map__20518 = p__20516;var map__20518__$1 = ((cljs.core.seq_QMARK_.call(null,map__20518))?cljs.core.apply.call(null,cljs.core.hash_map,map__20518):map__20518);var websocket_url = cljs.core.get.call(null,map__20518__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__20519,callback){var map__20521 = p__20519;var map__20521__$1 = ((cljs.core.seq_QMARK_.call(null,map__20521))?cljs.core.apply.call(null,cljs.core.hash_map,map__20521):map__20521);var msg = map__20521__$1;var dependency_file = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__20521__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__9093__auto__ = dependency_file;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__20521,map__20521__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__20521,map__20521__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__20522,p__20523){var map__20526 = p__20522;var map__20526__$1 = ((cljs.core.seq_QMARK_.call(null,map__20526))?cljs.core.apply.call(null,cljs.core.hash_map,map__20526):map__20526);var opts = map__20526__$1;var url_rewriter = cljs.core.get.call(null,map__20526__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__20527 = p__20523;var map__20527__$1 = ((cljs.core.seq_QMARK_.call(null,map__20527))?cljs.core.apply.call(null,cljs.core.hash_map,map__20527):map__20527);var d = map__20527__$1;var file = cljs.core.get.call(null,map__20527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__20528,p__20529){var map__20571 = p__20528;var map__20571__$1 = ((cljs.core.seq_QMARK_.call(null,map__20571))?cljs.core.apply.call(null,cljs.core.hash_map,map__20571):map__20571);var opts = map__20571__$1;var on_jsload = cljs.core.get.call(null,map__20571__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__20571__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__20572 = p__20529;var map__20572__$1 = ((cljs.core.seq_QMARK_.call(null,map__20572))?cljs.core.apply.call(null,cljs.core.hash_map,map__20572):map__20572);var files = cljs.core.get.call(null,map__20572__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files){
return (function (state_20595){var state_val_20596 = (state_20595[(1)]);if((state_val_20596 === (6)))
{var inst_20577 = (state_20595[(7)]);var inst_20586 = (state_20595[(2)]);var inst_20587 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20588 = [inst_20577];var inst_20589 = (new cljs.core.PersistentVector(null,1,(5),inst_20587,inst_20588,null));var inst_20590 = cljs.core.apply.call(null,on_jsload,inst_20589);var state_20595__$1 = (function (){var statearr_20597 = state_20595;(statearr_20597[(8)] = inst_20586);
return statearr_20597;
})();var statearr_20598_20612 = state_20595__$1;(statearr_20598_20612[(2)] = inst_20590);
(statearr_20598_20612[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20596 === (5)))
{var inst_20593 = (state_20595[(2)]);var state_20595__$1 = state_20595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20595__$1,inst_20593);
} else
{if((state_val_20596 === (4)))
{var state_20595__$1 = state_20595;var statearr_20599_20613 = state_20595__$1;(statearr_20599_20613[(2)] = null);
(statearr_20599_20613[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20596 === (3)))
{var inst_20577 = (state_20595[(7)]);var inst_20580 = console.debug("Figwheel: loaded these files");var inst_20581 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20577);var inst_20582 = cljs.core.prn_str.call(null,inst_20581);var inst_20583 = console.log(inst_20582);var inst_20584 = cljs.core.async.timeout.call(null,(10));var state_20595__$1 = (function (){var statearr_20600 = state_20595;(statearr_20600[(9)] = inst_20583);
(statearr_20600[(10)] = inst_20580);
return statearr_20600;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20595__$1,(6),inst_20584);
} else
{if((state_val_20596 === (2)))
{var inst_20577 = (state_20595[(7)]);var inst_20577__$1 = (state_20595[(2)]);var inst_20578 = cljs.core.not_empty.call(null,inst_20577__$1);var state_20595__$1 = (function (){var statearr_20601 = state_20595;(statearr_20601[(7)] = inst_20577__$1);
return statearr_20601;
})();if(cljs.core.truth_(inst_20578))
{var statearr_20602_20614 = state_20595__$1;(statearr_20602_20614[(1)] = (3));
} else
{var statearr_20603_20615 = state_20595__$1;(statearr_20603_20615[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20596 === (1)))
{var inst_20573 = before_jsload.call(null,files);var inst_20574 = figwheel.client.add_request_urls.call(null,opts,files);var inst_20575 = figwheel.client.load_all_js_files.call(null,inst_20574);var state_20595__$1 = (function (){var statearr_20604 = state_20595;(statearr_20604[(11)] = inst_20573);
return statearr_20604;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20595__$1,(2),inst_20575);
} else
{return null;
}
}
}
}
}
}
});})(c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files))
;return ((function (switch__13027__auto__,c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20608 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20608[(0)] = state_machine__13028__auto__);
(statearr_20608[(1)] = (1));
return statearr_20608;
});
var state_machine__13028__auto____1 = (function (state_20595){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20595);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20609){if((e20609 instanceof Object))
{var ex__13031__auto__ = e20609;var statearr_20610_20616 = state_20595;(statearr_20610_20616[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20617 = state_20595;
state_20595 = G__20617;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20595){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files))
})();var state__13094__auto__ = (function (){var statearr_20611 = f__13093__auto__.call(null);(statearr_20611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_20611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__,map__20571,map__20571__$1,opts,on_jsload,before_jsload,map__20572,map__20572__$1,files))
);
return c__13092__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__20618,link_href){var map__20620 = p__20618;var map__20620__$1 = ((cljs.core.seq_QMARK_.call(null,map__20620))?cljs.core.apply.call(null,cljs.core.hash_map,map__20620):map__20620);var request_url = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__,parent){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__,parent){
return (function (state_20641){var state_val_20642 = (state_20641[(1)]);if((state_val_20642 === (2)))
{var inst_20638 = (state_20641[(2)]);var inst_20639 = parent.removeChild(orig_link);var state_20641__$1 = (function (){var statearr_20643 = state_20641;(statearr_20643[(7)] = inst_20638);
return statearr_20643;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20641__$1,inst_20639);
} else
{if((state_val_20642 === (1)))
{var inst_20636 = cljs.core.async.timeout.call(null,(200));var state_20641__$1 = state_20641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20641__$1,(2),inst_20636);
} else
{return null;
}
}
});})(c__13092__auto__,parent))
;return ((function (switch__13027__auto__,c__13092__auto__,parent){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20647 = [null,null,null,null,null,null,null,null];(statearr_20647[(0)] = state_machine__13028__auto__);
(statearr_20647[(1)] = (1));
return statearr_20647;
});
var state_machine__13028__auto____1 = (function (state_20641){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20641);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20648){if((e20648 instanceof Object))
{var ex__13031__auto__ = e20648;var statearr_20649_20651 = state_20641;(statearr_20649_20651[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20641);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20648;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20652 = state_20641;
state_20641 = G__20652;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20641){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__,parent))
})();var state__13094__auto__ = (function (){var statearr_20650 = f__13093__auto__.call(null);(statearr_20650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_20650;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__,parent))
);
return c__13092__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__20653){var map__20655 = p__20653;var map__20655__$1 = ((cljs.core.seq_QMARK_.call(null,map__20655))?cljs.core.apply.call(null,cljs.core.hash_map,map__20655):map__20655);var f_data = map__20655__$1;var request_url = cljs.core.get.call(null,map__20655__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__20655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__20656,files_msg){var map__20678 = p__20656;var map__20678__$1 = ((cljs.core.seq_QMARK_.call(null,map__20678))?cljs.core.apply.call(null,cljs.core.hash_map,map__20678):map__20678);var opts = map__20678__$1;var on_cssload = cljs.core.get.call(null,map__20678__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__20679_20699 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__20680_20700 = null;var count__20681_20701 = (0);var i__20682_20702 = (0);while(true){
if((i__20682_20702 < count__20681_20701))
{var f_20703 = cljs.core._nth.call(null,chunk__20680_20700,i__20682_20702);figwheel.client.reload_css_file.call(null,f_20703);
{
var G__20704 = seq__20679_20699;
var G__20705 = chunk__20680_20700;
var G__20706 = count__20681_20701;
var G__20707 = (i__20682_20702 + (1));
seq__20679_20699 = G__20704;
chunk__20680_20700 = G__20705;
count__20681_20701 = G__20706;
i__20682_20702 = G__20707;
continue;
}
} else
{var temp__4126__auto___20708 = cljs.core.seq.call(null,seq__20679_20699);if(temp__4126__auto___20708)
{var seq__20679_20709__$1 = temp__4126__auto___20708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20679_20709__$1))
{var c__9863__auto___20710 = cljs.core.chunk_first.call(null,seq__20679_20709__$1);{
var G__20711 = cljs.core.chunk_rest.call(null,seq__20679_20709__$1);
var G__20712 = c__9863__auto___20710;
var G__20713 = cljs.core.count.call(null,c__9863__auto___20710);
var G__20714 = (0);
seq__20679_20699 = G__20711;
chunk__20680_20700 = G__20712;
count__20681_20701 = G__20713;
i__20682_20702 = G__20714;
continue;
}
} else
{var f_20715 = cljs.core.first.call(null,seq__20679_20709__$1);figwheel.client.reload_css_file.call(null,f_20715);
{
var G__20716 = cljs.core.next.call(null,seq__20679_20709__$1);
var G__20717 = null;
var G__20718 = (0);
var G__20719 = (0);
seq__20679_20699 = G__20716;
chunk__20680_20700 = G__20717;
count__20681_20701 = G__20718;
i__20682_20702 = G__20719;
continue;
}
}
} else
{}
}
break;
}
var c__13092__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload){
return (function (){var f__13093__auto__ = (function (){var switch__13027__auto__ = ((function (c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload){
return (function (state_20689){var state_val_20690 = (state_20689[(1)]);if((state_val_20690 === (2)))
{var inst_20685 = (state_20689[(2)]);var inst_20686 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_20687 = on_cssload.call(null,inst_20686);var state_20689__$1 = (function (){var statearr_20691 = state_20689;(statearr_20691[(7)] = inst_20685);
return statearr_20691;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20689__$1,inst_20687);
} else
{if((state_val_20690 === (1)))
{var inst_20683 = cljs.core.async.timeout.call(null,(100));var state_20689__$1 = state_20689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20689__$1,(2),inst_20683);
} else
{return null;
}
}
});})(c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload))
;return ((function (switch__13027__auto__,c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload){
return (function() {
var state_machine__13028__auto__ = null;
var state_machine__13028__auto____0 = (function (){var statearr_20695 = [null,null,null,null,null,null,null,null];(statearr_20695[(0)] = state_machine__13028__auto__);
(statearr_20695[(1)] = (1));
return statearr_20695;
});
var state_machine__13028__auto____1 = (function (state_20689){while(true){
var ret_value__13029__auto__ = (function (){try{while(true){
var result__13030__auto__ = switch__13027__auto__.call(null,state_20689);if(cljs.core.keyword_identical_QMARK_.call(null,result__13030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13030__auto__;
}
break;
}
}catch (e20696){if((e20696 instanceof Object))
{var ex__13031__auto__ = e20696;var statearr_20697_20720 = state_20689;(statearr_20697_20720[(5)] = ex__13031__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20689);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20696;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20721 = state_20689;
state_20689 = G__20721;
continue;
}
} else
{return ret_value__13029__auto__;
}
break;
}
});
state_machine__13028__auto__ = function(state_20689){
switch(arguments.length){
case 0:
return state_machine__13028__auto____0.call(this);
case 1:
return state_machine__13028__auto____1.call(this,state_20689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13028__auto____0;
state_machine__13028__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13028__auto____1;
return state_machine__13028__auto__;
})()
;})(switch__13027__auto__,c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload))
})();var state__13094__auto__ = (function (){var statearr_20698 = f__13093__auto__.call(null);(statearr_20698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13092__auto__);
return statearr_20698;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13094__auto__);
});})(c__13092__auto__,map__20678,map__20678__$1,opts,on_cssload))
);
return c__13092__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__20722){var map__20727 = p__20722;var map__20727__$1 = ((cljs.core.seq_QMARK_.call(null,map__20727))?cljs.core.apply.call(null,cljs.core.hash_map,map__20727):map__20727);var opts = map__20727__$1;var on_compile_fail = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__20728 = cljs.core._EQ_;var expr__20729 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__20728.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__20729)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__20728.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__20729)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__20728.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20729)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__20727,map__20727__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj20734 = {"detail":url};return obj20734;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__20735){var map__20737 = p__20735;var map__20737__$1 = ((cljs.core.seq_QMARK_.call(null,map__20737))?cljs.core.apply.call(null,cljs.core.hash_map,map__20737):map__20737);var class$ = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__20737__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__20738){var map__20744 = p__20738;var map__20744__$1 = ((cljs.core.seq_QMARK_.call(null,map__20744))?cljs.core.apply.call(null,cljs.core.hash_map,map__20744):map__20744);var ed = map__20744__$1;var exception_data = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__20745_20749 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__20746_20750 = null;var count__20747_20751 = (0);var i__20748_20752 = (0);while(true){
if((i__20748_20752 < count__20747_20751))
{var msg_20753 = cljs.core._nth.call(null,chunk__20746_20750,i__20748_20752);console.log(msg_20753);
{
var G__20754 = seq__20745_20749;
var G__20755 = chunk__20746_20750;
var G__20756 = count__20747_20751;
var G__20757 = (i__20748_20752 + (1));
seq__20745_20749 = G__20754;
chunk__20746_20750 = G__20755;
count__20747_20751 = G__20756;
i__20748_20752 = G__20757;
continue;
}
} else
{var temp__4126__auto___20758 = cljs.core.seq.call(null,seq__20745_20749);if(temp__4126__auto___20758)
{var seq__20745_20759__$1 = temp__4126__auto___20758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20745_20759__$1))
{var c__9863__auto___20760 = cljs.core.chunk_first.call(null,seq__20745_20759__$1);{
var G__20761 = cljs.core.chunk_rest.call(null,seq__20745_20759__$1);
var G__20762 = c__9863__auto___20760;
var G__20763 = cljs.core.count.call(null,c__9863__auto___20760);
var G__20764 = (0);
seq__20745_20749 = G__20761;
chunk__20746_20750 = G__20762;
count__20747_20751 = G__20763;
i__20748_20752 = G__20764;
continue;
}
} else
{var msg_20765 = cljs.core.first.call(null,seq__20745_20759__$1);console.log(msg_20765);
{
var G__20766 = cljs.core.next.call(null,seq__20745_20759__$1);
var G__20767 = null;
var G__20768 = (0);
var G__20769 = (0);
seq__20745_20749 = G__20766;
chunk__20746_20750 = G__20767;
count__20747_20751 = G__20768;
i__20748_20752 = G__20769;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__9093__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__20770){var map__20772 = p__20770;var map__20772__$1 = ((cljs.core.seq_QMARK_.call(null,map__20772))?cljs.core.apply.call(null,cljs.core.hash_map,map__20772):map__20772);var opts = map__20772__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__20770 = null;if (arguments.length > 0) {
  p__20770 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__20770);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__20773){
var p__20770 = cljs.core.seq(arglist__20773);
return watch_and_reload__delegate(p__20770);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map