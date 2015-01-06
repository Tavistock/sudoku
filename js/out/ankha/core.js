// Compiled by ClojureScript 0.0-2371
goog.provide('ankha.core');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.object');
goog.require('om.dom');
goog.require('om.dom');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('goog.crypt');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('goog.crypt.Md5');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
ankha.core.IInspect = (function (){var obj17494 = {};return obj17494;
})();
ankha.core._inspect = (function _inspect(this$){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.ankha$core$IInspect$_inspect$arity$1;
} else
{return and__9081__auto__;
}
})())
{return this$.ankha$core$IInspect$_inspect$arity$1(this$);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (ankha.core._inspect[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (ankha.core._inspect["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInspect.-inspect",this$);
}
}
})().call(null,this$);
}
});
ankha.core.IEditable = (function (){var obj17496 = {};return obj17496;
})();
ankha.core._edit = (function _edit(this$,value){if((function (){var and__9081__auto__ = this$;if(and__9081__auto__)
{return this$.ankha$core$IEditable$_edit$arity$2;
} else
{return and__9081__auto__;
}
})())
{return this$.ankha$core$IEditable$_edit$arity$2(this$,value);
} else
{var x__9730__auto__ = (((this$ == null))?null:this$);return (function (){var or__9093__auto__ = (ankha.core._edit[goog.typeOf(x__9730__auto__)]);if(or__9093__auto__)
{return or__9093__auto__;
} else
{var or__9093__auto____$1 = (ankha.core._edit["_"]);if(or__9093__auto____$1)
{return or__9093__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditable.-edit",this$);
}
}
})().call(null,this$,value);
}
});
ankha.core.editable_QMARK_ = (function editable_QMARK_(obj){var G__17498 = obj;if(G__17498)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17498.ankha$core$IEditable$;
}
})()))
{return true;
} else
{if((!G__17498.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IEditable,G__17498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IEditable,G__17498);
}
});
ankha.core.edit = (function edit(obj,value){if(ankha.core.editable_QMARK_.call(null,obj))
{return ankha.core._edit.call(null,obj,value);
} else
{return value;
}
});
ankha.core.atom_reader_tag = "cljs/Atom";
ankha.core.atom_reader = (function atom_reader(val){return cljs.core.atom.call(null,val);
});
cljs.reader.register_tag_parser_BANG_.call(null,ankha.core.atom_reader_tag,ankha.core.atom_reader);
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){var this$__$1 = this;return cljs.core._write.call(null,writer,("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ankha.core.atom_reader_tag)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$__$1))));
});
/**
* Return true if x is an empty js/Object or empty Clojure collection.
*/
ankha.core.empty_QMARK_ = (function empty_QMARK_(x){if(cljs.core.object_QMARK_.call(null,x))
{return goog.object.isEmpty(x);
} else
{return cljs.core.empty_QMARK_.call(null,x);
}
});
/**
* Return true if x satisfies IRecord, false otherwise.
*/
ankha.core.record_QMARK_ = (function record_QMARK_(x){var G__17500 = x;if(G__17500)
{var bit__9757__auto__ = (G__17500.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__9757__auto__) || (G__17500.cljs$core$IRecord$))
{return true;
} else
{if((!G__17500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17500);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17500);
}
});
/**
* Return the name of a Record type.
*/
ankha.core.record_name = (function record_name(r){var s = cljs.core.pr_str.call(null,r);return cljs.core.subs.call(null,s,(0),s.indexOf("{"));
});
/**
* Return an opener for a Record type.
*/
ankha.core.record_opener = (function record_opener(r){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ankha.core.record_name.call(null,r))+"{");
});
ankha.core.hash_key = (function hash_key(data){var d = (new goog.crypt.Md5());d.update(goog.crypt.stringToByteArray((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data))));
return goog.crypt.byteArrayToHex(d.digest());
});
ankha.core.get_key = (function get_key(data){if((function (){var G__17502 = data;if(G__17502)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17502.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__17502.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__17502);
}
})())
{return cljs.core.pr_str.call(null,om.core.path.call(null,data));
} else
{return null;
}
});
ankha.core.literal = (function literal(class$,x){return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.coll_view = (function coll_view(data,opener,closer,class$){var key = ankha.core.get_key.call(null,data);var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),key,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opener","opener",1027381943),opener,new cljs.core.Keyword(null,"closer","closer",10992481),closer,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)], null);if(ankha.core.editable_QMARK_.call(null,data))
{return om.core.build.call(null,ankha.core.editable_collection_view,data,opts);
} else
{return om.core.build.call(null,ankha.core.collection_view,data,opts);
}
});
ankha.core.inspect = (function inspect(x){if((function (){var G__17504 = x;if(G__17504)
{var bit__9757__auto__ = null;if(cljs.core.truth_((function (){var or__9093__auto__ = bit__9757__auto__;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return G__17504.ankha$core$IInspect$;
}
})()))
{return true;
} else
{if((!G__17504.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__17504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__17504);
}
})())
{return ankha.core._inspect.call(null,x);
} else
{if(cljs.core.fn_QMARK_.call(null,x))
{return ankha.core.literal.call(null,"function",x);
} else
{return ankha.core.literal.call(null,"literal",x);

}
}
});
ankha.core.associative__GT_dom = (function associative__GT_dom(data,p__17505){var map__17515 = p__17505;var map__17515__$1 = ((cljs.core.seq_QMARK_.call(null,map__17515))?cljs.core.apply.call(null,cljs.core.hash_map,map__17515):map__17515);var val_class = cljs.core.get.call(null,map__17515__$1,new cljs.core.Keyword(null,"val-class","val-class",-997529322));var key_class = cljs.core.get.call(null,map__17515__$1,new cljs.core.Keyword(null,"key-class","key-class",764049336));var entry_class = cljs.core.get.call(null,map__17515__$1,new cljs.core.Keyword(null,"entry-class","entry-class",144705573));return cljs.core.into_array.call(null,(function (){var iter__9832__auto__ = ((function (map__17515,map__17515__$1,val_class,key_class,entry_class){
return (function iter__17516(s__17517){return (new cljs.core.LazySeq(null,((function (map__17515,map__17515__$1,val_class,key_class,entry_class){
return (function (){var s__17517__$1 = s__17517;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17517__$1);if(temp__4126__auto__)
{var s__17517__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17517__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17517__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17519 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17518 = (0);while(true){
if((i__17518 < size__9831__auto__))
{var vec__17522 = cljs.core._nth.call(null,c__9830__auto__,i__17518);var k = cljs.core.nth.call(null,vec__17522,(0),null);var v = cljs.core.nth.call(null,vec__17522,(1),null);cljs.core.chunk_append.call(null,b__17519,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))},React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,v)))));
{
var G__17524 = (i__17518 + (1));
i__17518 = G__17524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17519),iter__17516.call(null,cljs.core.chunk_rest.call(null,s__17517__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17519),null);
}
} else
{var vec__17523 = cljs.core.first.call(null,s__17517__$2);var k = cljs.core.nth.call(null,vec__17523,(0),null);var v = cljs.core.nth.call(null,vec__17523,(1),null);return cljs.core.cons.call(null,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k))},React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,v)))),iter__17516.call(null,cljs.core.rest.call(null,s__17517__$2)));
}
} else
{return null;
}
break;
}
});})(map__17515,map__17515__$1,val_class,key_class,entry_class))
,null,null));
});})(map__17515,map__17515__$1,val_class,key_class,entry_class))
;return iter__9832__auto__.call(null,data);
})());
});
ankha.core.sequential__GT_dom = (function sequential__GT_dom(data,owner,p__17525){var map__17540 = p__17525;var map__17540__$1 = ((cljs.core.seq_QMARK_.call(null,map__17540))?cljs.core.apply.call(null,cljs.core.hash_map,map__17540):map__17540);var page_item_count = cljs.core.get.call(null,map__17540__$1,new cljs.core.Keyword(null,"page-item-count","page-item-count",1210309644),(10));if(typeof ankha.core.t17541 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17541 = (function (page_item_count,map__17540,p__17525,owner,data,sequential__GT_dom,meta17542){
this.page_item_count = page_item_count;
this.map__17540 = map__17540;
this.p__17525 = p__17525;
this.owner = owner;
this.data = data;
this.sequential__GT_dom = sequential__GT_dom;
this.meta17542 = meta17542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17541.cljs$lang$type = true;
ankha.core.t17541.cljs$lang$ctorStr = "ankha.core/t17541";
ankha.core.t17541.cljs$lang$ctorPrWriter = ((function (map__17540,map__17540__$1,page_item_count){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"ankha.core/t17541");
});})(map__17540,map__17540__$1,page_item_count))
;
ankha.core.t17541.prototype.om$core$IRenderState$ = true;
ankha.core.t17541.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17540,map__17540__$1,page_item_count){
return (function (_,p__17544){var self__ = this;
var map__17545 = p__17544;var map__17545__$1 = ((cljs.core.seq_QMARK_.call(null,map__17545))?cljs.core.apply.call(null,cljs.core.hash_map,map__17545):map__17545);var page = cljs.core.get.call(null,map__17545__$1,new cljs.core.Keyword(null,"page","page",849072397));var ___$1 = this;var button_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"top",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 1em"], null);var total = cljs.core.count.call(null,self__.data);var total_pages = Math.ceil((total / self__.page_item_count));var first_page_QMARK_ = cljs.core._EQ_.call(null,page,(1));var last_page_QMARK_ = cljs.core._EQ_.call(null,page,total_pages);return React.DOM.div(null,React.DOM.button({"style": cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,button_style,new cljs.core.Keyword(null,"opacity","opacity",397153780),((first_page_QMARK_)?"0.3":"1.0"))), "onClick": ((function (button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count){
return (function (___$2){if(first_page_QMARK_)
{return null;
} else
{return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.dec);
}
});})(button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count))
},"Prev"),React.DOM.span(null,("Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_pages)+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)+" items)")),React.DOM.button({"style": cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,button_style,new cljs.core.Keyword(null,"opacity","opacity",397153780),((last_page_QMARK_)?"0.3":"1.0"))), "onClick": ((function (button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count){
return (function (___$2){if(last_page_QMARK_)
{return null;
} else
{return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.inc);
}
});})(button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count))
},"Next"),(function (){var page_data = cljs.core.take.call(null,self__.page_item_count,cljs.core.drop.call(null,((page - (1)) * self__.page_item_count),self__.data));return cljs.core.into_array.call(null,(function (){var iter__9832__auto__ = ((function (page_data,button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count){
return (function iter__17546(s__17547){return (new cljs.core.LazySeq(null,((function (page_data,button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count){
return (function (){var s__17547__$1 = s__17547;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17547__$1);if(temp__4126__auto__)
{var s__17547__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17547__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__17547__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__17549 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__17548 = (0);while(true){
if((i__17548 < size__9831__auto__))
{var vec__17552 = cljs.core._nth.call(null,c__9830__auto__,i__17548);var i = cljs.core.nth.call(null,vec__17552,(0),null);var x = cljs.core.nth.call(null,vec__17552,(1),null);var pair = vec__17552;cljs.core.chunk_append.call(null,b__17549,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)), "className": "entry"},ankha.core.inspect.call(null,x)));
{
var G__17554 = (i__17548 + (1));
i__17548 = G__17554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17549),iter__17546.call(null,cljs.core.chunk_rest.call(null,s__17547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17549),null);
}
} else
{var vec__17553 = cljs.core.first.call(null,s__17547__$2);var i = cljs.core.nth.call(null,vec__17553,(0),null);var x = cljs.core.nth.call(null,vec__17553,(1),null);var pair = vec__17553;return cljs.core.cons.call(null,React.DOM.li({"key": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)), "className": "entry"},ankha.core.inspect.call(null,x)),iter__17546.call(null,cljs.core.rest.call(null,s__17547__$2)));
}
} else
{return null;
}
break;
}
});})(page_data,button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count))
,null,null));
});})(page_data,button_style,total,total_pages,first_page_QMARK_,last_page_QMARK_,___$1,map__17545,map__17545__$1,page,map__17540,map__17540__$1,page_item_count))
;return iter__9832__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,page_data));
})());
})());
});})(map__17540,map__17540__$1,page_item_count))
;
ankha.core.t17541.prototype.om$core$IInitState$ = true;
ankha.core.t17541.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__17540,map__17540__$1,page_item_count){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(1)], null);
});})(map__17540,map__17540__$1,page_item_count))
;
ankha.core.t17541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17540,map__17540__$1,page_item_count){
return (function (_17543){var self__ = this;
var _17543__$1 = this;return self__.meta17542;
});})(map__17540,map__17540__$1,page_item_count))
;
ankha.core.t17541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17540,map__17540__$1,page_item_count){
return (function (_17543,meta17542__$1){var self__ = this;
var _17543__$1 = this;return (new ankha.core.t17541(self__.page_item_count,self__.map__17540,self__.p__17525,self__.owner,self__.data,self__.sequential__GT_dom,meta17542__$1));
});})(map__17540,map__17540__$1,page_item_count))
;
ankha.core.__GT_t17541 = ((function (map__17540,map__17540__$1,page_item_count){
return (function __GT_t17541(page_item_count__$1,map__17540__$2,p__17525__$1,owner__$1,data__$1,sequential__GT_dom__$1,meta17542){return (new ankha.core.t17541(page_item_count__$1,map__17540__$2,p__17525__$1,owner__$1,data__$1,sequential__GT_dom__$1,meta17542));
});})(map__17540,map__17540__$1,page_item_count))
;
}
return (new ankha.core.t17541(page_item_count,map__17540__$1,p__17525,owner,data,sequential__GT_dom,null));
});
ankha.core.coll__GT_dom = (function coll__GT_dom(data){if(cljs.core.map_QMARK_.call(null,data))
{return ankha.core.associative__GT_dom.call(null,data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"map-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"map-val"], null));
} else
{if(cljs.core.object_QMARK_.call(null,data))
{var ks = goog.object.getKeys(data);var vs = goog.object.getValues(data);var m = cljs.core.map.call(null,cljs.core.vector,ks,vs);return ankha.core.associative__GT_dom.call(null,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"object-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"object-val"], null));
} else
{return om.core.build.call(null,ankha.core.sequential__GT_dom,data);

}
}
});
ankha.core.atom__GT_dom = (function atom__GT_dom(atm){return React.DOM.span({"className": "atom"},"<Atom ",ankha.core.inspect.call(null,cljs.core.deref.call(null,atm))," >");
});
ankha.core.toggle_button = (function toggle_button(owner,p__17555){var map__17557 = p__17555;var map__17557__$1 = ((cljs.core.seq_QMARK_.call(null,map__17557))?cljs.core.apply.call(null,cljs.core.hash_map,map__17557):map__17557);var disable_QMARK_ = cljs.core.get.call(null,map__17557__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__17557,map__17557__$1,disable_QMARK_){
return (function (_){return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
});})(map__17557,map__17557__$1,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125)))?"-":"+"));
});
ankha.core.edit_button = (function edit_button(owner,p__17558){var map__17560 = p__17558;var map__17560__$1 = ((cljs.core.seq_QMARK_.call(null,map__17560))?cljs.core.apply.call(null,cljs.core.hash_map,map__17560):map__17560);var open_editor = cljs.core.get.call(null,map__17560__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));var save_editor = cljs.core.get.call(null,map__17560__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));var disable_QMARK_ = cljs.core.get.call(null,map__17560__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__17560,map__17560__$1,open_editor,save_editor,disable_QMARK_){
return (function (_){if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800))))
{return save_editor.call(null);
} else
{return open_editor.call(null);
}
});})(map__17560,map__17560__$1,open_editor,save_editor,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "edit-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800)))?"Save ":"Edit "));
});
ankha.core.enter_key_QMARK_ = (function enter_key_QMARK_(e){return cljs.core._EQ_.call(null,(13),e.keyCode);
});
ankha.core.escape_key_QMARK_ = (function escape_key_QMARK_(e){return cljs.core._EQ_.call(null,(27),e.keyCode);
});
ankha.core.editor = (function editor(owner,p__17561){var map__17563 = p__17561;var map__17563__$1 = ((cljs.core.seq_QMARK_.call(null,map__17563))?cljs.core.apply.call(null,cljs.core.hash_map,map__17563):map__17563);var error_message = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"error-message","error-message",1756021561));var cancel_editor = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475));var save_editor = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));var value = cljs.core.get.call(null,map__17563__$1,new cljs.core.Keyword(null,"value","value",305978217));return React.DOM.div({"style": {"display": "inline"}},om.dom.textarea.call(null,{"onChange": ((function (map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value){
return (function (e){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),e.target.value);
});})(map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value))
, "onKeyUp": ((function (map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value){
return (function (e){if(ankha.core.enter_key_QMARK_.call(null,e))
{return save_editor.call(null);
} else
{if(ankha.core.escape_key_QMARK_.call(null,e))
{return cancel_editor.call(null);
} else
{return null;
}
}
});})(map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value))
, "onKeyPress": ((function (map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value){
return (function (e){if(ankha.core.enter_key_QMARK_.call(null,e))
{return e.preventDefault();
} else
{return null;
}
});})(map__17563,map__17563__$1,error_message,cancel_editor,save_editor,value))
, "value": value, "style": {"display": "inline-block"}, "ref": "editor", "className": "editor"}),(cljs.core.truth_(error_message)?React.DOM.span({"style": {"vertical-align": "top"}, "className": "error"},error_message):null));
});
ankha.core.open_editor_fn = (function open_editor_fn(data,owner){return (function (){return om.core.update_state_BANG_.call(null,owner,(function (s){return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968),null,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),cljs.core.pr_str.call(null,cljs.core.deref.call(null,data))], null));
}));
});
});
ankha.core.save_editor_fn = (function save_editor_fn(data,owner){return (function (){try{var edit_str = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431));var new_data = cljs.reader.read_string.call(null,edit_str);om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
if(!(cljs.core._EQ_.call(null,new_data,cljs.core.deref.call(null,data))))
{return ankha.core.edit.call(null,data,new_data);
} else
{return null;
}
}catch (e17565){if((e17565 instanceof Error))
{var e = e17565;return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968),e.message);
} else
{throw e17565;

}
}});
});
ankha.core.editable_collection_view = (function editable_collection_view(data,owner,p__17566){var map__17573 = p__17566;var map__17573__$1 = ((cljs.core.seq_QMARK_.call(null,map__17573))?cljs.core.apply.call(null,cljs.core.hash_map,map__17573):map__17573);var opts = map__17573__$1;var closer = cljs.core.get.call(null,map__17573__$1,new cljs.core.Keyword(null,"closer","closer",10992481));var opener = cljs.core.get.call(null,map__17573__$1,new cljs.core.Keyword(null,"opener","opener",1027381943));var class$ = cljs.core.get.call(null,map__17573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));if(typeof ankha.core.t17574 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17574 = (function (class$,opener,closer,opts,map__17573,p__17566,owner,data,editable_collection_view,meta17575){
this.class$ = class$;
this.opener = opener;
this.closer = closer;
this.opts = opts;
this.map__17573 = map__17573;
this.p__17566 = p__17566;
this.owner = owner;
this.data = data;
this.editable_collection_view = editable_collection_view;
this.meta17575 = meta17575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17574.cljs$lang$type = true;
ankha.core.t17574.cljs$lang$ctorStr = "ankha.core/t17574";
ankha.core.t17574.cljs$lang$ctorPrWriter = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"ankha.core/t17574");
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.t17574.prototype.om$core$IDidUpdate$ = true;
ankha.core.t17574.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800))))
{return om.core.get_node.call(null,self__.owner,"editor").focus();
} else
{return null;
}
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.t17574.prototype.om$core$IRenderState$ = true;
ankha.core.t17574.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (_,p__17577){var self__ = this;
var map__17578 = p__17577;var map__17578__$1 = ((cljs.core.seq_QMARK_.call(null,map__17578))?cljs.core.apply.call(null,cljs.core.hash_map,map__17578):map__17578);var cancel_editor = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475));var save_editor = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));var open_editor = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));var editing_error_message = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968));var edited_data = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431));var editing_QMARK_ = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));var vacant_QMARK_ = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"vacant?","vacant?",-353994651));var open_QMARK_ = cljs.core.get.call(null,map__17578__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));var ___$1 = this;return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1101284546),vacant_QMARK_], null)),(cljs.core.truth_(open_QMARK_)?ankha.core.edit_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),open_editor,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),ankha.core.save_editor_fn.call(null,self__.data,self__.owner)], null)):null),(cljs.core.truth_((function (){var and__9081__auto__ = open_QMARK_;if(cljs.core.truth_(and__9081__auto__))
{return editing_QMARK_;
} else
{return and__9081__auto__;
}
})())?ankha.core.editor.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),edited_data,new cljs.core.Keyword(null,"error-message","error-message",1756021561),editing_error_message,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),save_editor,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475),cancel_editor], null)):null),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var and__9081__auto__ = open_QMARK_;if(cljs.core.truth_(and__9081__auto__))
{return editing_QMARK_;
} else
{return and__9081__auto__;
}
})())?"inline-block":null)}, "className": "opener"},self__.opener),(cljs.core.truth_(open_QMARK_)?React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_((function (){var and__9081__auto__ = open_QMARK_;if(cljs.core.truth_(and__9081__auto__))
{return cljs.core.not.call(null,editing_QMARK_);
} else
{return and__9081__auto__;
}
})())?"block":"none")}, "className": "values"},ankha.core.coll__GT_dom.call(null,self__.data)):null),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var or__9093__auto__ = open_QMARK_;if(cljs.core.truth_(or__9093__auto__))
{return or__9093__auto__;
} else
{return vacant_QMARK_;
}
})())?"none":"inline")}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?(cljs.core.truth_(editing_QMARK_)?"none":"block"):"inline-block")}, "className": "closer"},self__.closer));
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.t17574.prototype.om$core$IInitState$ = true;
ankha.core.t17574.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),cljs.core.pr_str.call(null,self__.data),new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(self__.opts)),new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),ankha.core.open_editor_fn.call(null,self__.data,self__.owner),new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),ankha.core.save_editor_fn.call(null,self__.data,self__.owner),new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475),((function (___$1,map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(___$1,map__17573,map__17573__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"vacant?","vacant?",-353994651),ankha.core.empty_QMARK_.call(null,self__.data),new cljs.core.Keyword(null,"open?","open?",1238443125),(!(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,ankha.core.empty_QMARK_.call(null,self__.data)))], null);
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.t17574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (_17576){var self__ = this;
var _17576__$1 = this;return self__.meta17575;
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.t17574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function (_17576,meta17575__$1){var self__ = this;
var _17576__$1 = this;return (new ankha.core.t17574(self__.class$,self__.opener,self__.closer,self__.opts,self__.map__17573,self__.p__17566,self__.owner,self__.data,self__.editable_collection_view,meta17575__$1));
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
ankha.core.__GT_t17574 = ((function (map__17573,map__17573__$1,opts,closer,opener,class$){
return (function __GT_t17574(class$__$1,opener__$1,closer__$1,opts__$1,map__17573__$2,p__17566__$1,owner__$1,data__$1,editable_collection_view__$1,meta17575){return (new ankha.core.t17574(class$__$1,opener__$1,closer__$1,opts__$1,map__17573__$2,p__17566__$1,owner__$1,data__$1,editable_collection_view__$1,meta17575));
});})(map__17573,map__17573__$1,opts,closer,opener,class$))
;
}
return (new ankha.core.t17574(class$,opener,closer,opts,map__17573__$1,p__17566,owner,data,editable_collection_view,null));
});
ankha.core.collection_view = (function collection_view(data,owner,p__17579){var map__17586 = p__17579;var map__17586__$1 = ((cljs.core.seq_QMARK_.call(null,map__17586))?cljs.core.apply.call(null,cljs.core.hash_map,map__17586):map__17586);var opts = map__17586__$1;var closer = cljs.core.get.call(null,map__17586__$1,new cljs.core.Keyword(null,"closer","closer",10992481));var opener = cljs.core.get.call(null,map__17586__$1,new cljs.core.Keyword(null,"opener","opener",1027381943));var class$ = cljs.core.get.call(null,map__17586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));if(typeof ankha.core.t17587 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17587 = (function (class$,opener,closer,opts,map__17586,p__17579,owner,data,collection_view,meta17588){
this.class$ = class$;
this.opener = opener;
this.closer = closer;
this.opts = opts;
this.map__17586 = map__17586;
this.p__17579 = p__17579;
this.owner = owner;
this.data = data;
this.collection_view = collection_view;
this.meta17588 = meta17588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17587.cljs$lang$type = true;
ankha.core.t17587.cljs$lang$ctorStr = "ankha.core/t17587";
ankha.core.t17587.cljs$lang$ctorPrWriter = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"ankha.core/t17587");
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
ankha.core.t17587.prototype.om$core$IRenderState$ = true;
ankha.core.t17587.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function (_,p__17590){var self__ = this;
var map__17591 = p__17590;var map__17591__$1 = ((cljs.core.seq_QMARK_.call(null,map__17591))?cljs.core.apply.call(null,cljs.core.hash_map,map__17591):map__17591);var vacant_QMARK_ = cljs.core.get.call(null,map__17591__$1,new cljs.core.Keyword(null,"vacant?","vacant?",-353994651));var open_QMARK_ = cljs.core.get.call(null,map__17591__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));var ___$1 = this;return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1101284546),vacant_QMARK_], null)),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?"inline-block":null)}, "className": "opener"},self__.opener),(cljs.core.truth_(open_QMARK_)?React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_(open_QMARK_)?"block":"none")}, "className": "values"},ankha.core.coll__GT_dom.call(null,self__.data)):null),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?"none":"inline")}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?"block":"inline-block")}, "className": "closer"},self__.closer));
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
ankha.core.t17587.prototype.om$core$IInitState$ = true;
ankha.core.t17587.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vacant?","vacant?",-353994651),ankha.core.empty_QMARK_.call(null,self__.data),new cljs.core.Keyword(null,"open?","open?",1238443125),(!(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,ankha.core.empty_QMARK_.call(null,self__.data)))], null);
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
ankha.core.t17587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function (_17589){var self__ = this;
var _17589__$1 = this;return self__.meta17588;
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
ankha.core.t17587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function (_17589,meta17588__$1){var self__ = this;
var _17589__$1 = this;return (new ankha.core.t17587(self__.class$,self__.opener,self__.closer,self__.opts,self__.map__17586,self__.p__17579,self__.owner,self__.data,self__.collection_view,meta17588__$1));
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
ankha.core.__GT_t17587 = ((function (map__17586,map__17586__$1,opts,closer,opener,class$){
return (function __GT_t17587(class$__$1,opener__$1,closer__$1,opts__$1,map__17586__$2,p__17579__$1,owner__$1,data__$1,collection_view__$1,meta17588){return (new ankha.core.t17587(class$__$1,opener__$1,closer__$1,opts__$1,map__17586__$2,p__17579__$1,owner__$1,data__$1,collection_view__$1,meta17588));
});})(map__17586,map__17586__$1,opts,closer,opener,class$))
;
}
return (new ankha.core.t17587(class$,opener,closer,opts,map__17586__$1,p__17579,owner,data,collection_view,null));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,p__17592){var map__17597 = p__17592;var map__17597__$1 = ((cljs.core.seq_QMARK_.call(null,map__17597))?cljs.core.apply.call(null,cljs.core.hash_map,map__17597):map__17597);var opts = map__17597__$1;var class$ = cljs.core.get.call(null,map__17597__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"inspector");if(typeof ankha.core.t17598 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17598 = (function (class$,opts,map__17597,p__17592,owner,data,inspector,meta17599){
this.class$ = class$;
this.opts = opts;
this.map__17597 = map__17597;
this.p__17592 = p__17592;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta17599 = meta17599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17598.cljs$lang$type = true;
ankha.core.t17598.cljs$lang$ctorStr = "ankha.core/t17598";
ankha.core.t17598.cljs$lang$ctorPrWriter = ((function (map__17597,map__17597__$1,opts,class$){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"ankha.core/t17598");
});})(map__17597,map__17597__$1,opts,class$))
;
ankha.core.t17598.prototype.om$core$IRender$ = true;
ankha.core.t17598.prototype.om$core$IRender$render$arity$1 = ((function (map__17597,map__17597__$1,opts,class$){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": self__.class$},ankha.core.inspect.call(null,self__.data));
});})(map__17597,map__17597__$1,opts,class$))
;
ankha.core.t17598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17597,map__17597__$1,opts,class$){
return (function (_17600){var self__ = this;
var _17600__$1 = this;return self__.meta17599;
});})(map__17597,map__17597__$1,opts,class$))
;
ankha.core.t17598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17597,map__17597__$1,opts,class$){
return (function (_17600,meta17599__$1){var self__ = this;
var _17600__$1 = this;return (new ankha.core.t17598(self__.class$,self__.opts,self__.map__17597,self__.p__17592,self__.owner,self__.data,self__.inspector,meta17599__$1));
});})(map__17597,map__17597__$1,opts,class$))
;
ankha.core.__GT_t17598 = ((function (map__17597,map__17597__$1,opts,class$){
return (function __GT_t17598(class$__$1,opts__$1,map__17597__$2,p__17592__$1,owner__$1,data__$1,inspector__$1,meta17599){return (new ankha.core.t17598(class$__$1,opts__$1,map__17597__$2,p__17592__$1,owner__$1,data__$1,inspector__$1,meta17599));
});})(map__17597,map__17597__$1,opts,class$))
;
}
return (new ankha.core.t17598(class$,opts,map__17597__$1,p__17592,owner,data,inspector,null));
});
inspector = function(data,owner,p__17592){
switch(arguments.length){
case 2:
return inspector__2.call(this,data,owner);
case 3:
return inspector__3.call(this,data,owner,p__17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
inspector.cljs$core$IFn$_invoke$arity$2 = inspector__2;
inspector.cljs$core$IFn$_invoke$arity$3 = inspector__3;
return inspector;
})()
;
(ankha.core.IInspect["null"] = true);
(ankha.core._inspect["null"] = (function (this$){return ankha.core.literal.call(null,"nil",this$);
}));
cljs.core.UUID.prototype.ankha$core$IInspect$ = true;
cljs.core.UUID.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"uuid",this$__$1);
});
cljs.core.LazySeq.prototype.ankha$core$IInspect$ = true;
cljs.core.LazySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq lazy-seq");
});
RegExp.prototype.ankha$core$IInspect$ = true;
RegExp.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"regexp",this$__$1);
});
(ankha.core.IInspect["boolean"] = true);
(ankha.core._inspect["boolean"] = (function (this$){return ankha.core.literal.call(null,"boolean",this$);
}));
(ankha.core.IInspect["object"] = true);
(ankha.core._inspect["object"] = (function (this$){return ankha.core.coll_view.call(null,this$,"#js {","}","object");
}));
cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq persistent-array-map-seq");
});
cljs.core.Symbol.prototype.ankha$core$IInspect$ = true;
cljs.core.Symbol.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"symbol",this$__$1);
});
Date.prototype.ankha$core$IInspect$ = true;
Date.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"date",this$__$1);
});
cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-tree-set");
});
(ankha.core.IInspect["number"] = true);
(ankha.core._inspect["number"] = (function (this$){return ankha.core.literal.call(null,"number",this$);
}));
cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-hash-map");
});
om.core.IndexedCursor.prototype.ankha$core$IInspect$ = true;
om.core.IndexedCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"[","]","vector indexed-cursor");
});
cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-hash-set");
});
cljs.core.Atom.prototype.ankha$core$IInspect$ = true;
cljs.core.Atom.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.atom__GT_dom.call(null,this$__$1);
});
cljs.core.ValSeq.prototype.ankha$core$IInspect$ = true;
cljs.core.ValSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq val-seq");
});
cljs.core.PersistentVector.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentVector.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"[","]","vector");
});
(ankha.core.IInspect["array"] = true);
(ankha.core._inspect["array"] = (function (this$){return ankha.core.coll_view.call(null,this$,"#js [","]","array");
}));
(ankha.core.IInspect["string"] = true);
(ankha.core._inspect["string"] = (function (this$){return ankha.core.literal.call(null,"string",this$);
}));
(ankha.core.IInspect["function"] = true);
(ankha.core._inspect["function"] = (function (this$){return ankha.core.literal.call(null,"function",this$);
}));
cljs.core.Keyword.prototype.ankha$core$IInspect$ = true;
cljs.core.Keyword.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.literal.call(null,"keyword",this$__$1);
});
cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$ = true;
cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-array-map");
});
cljs.core.Range.prototype.ankha$core$IInspect$ = true;
cljs.core.Range.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq range");
});
om.core.MapCursor.prototype.ankha$core$IInspect$ = true;
om.core.MapCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;if(ankha.core.record_QMARK_.call(null,om.core.value.call(null,this$__$1)))
{return ankha.core.coll_view.call(null,this$__$1,ankha.core.record_opener.call(null,this$__$1),"}","record map-cursor");
} else
{return ankha.core.coll_view.call(null,this$__$1,"{","}","map map-cursor");
}
});
cljs.core.KeySeq.prototype.ankha$core$IInspect$ = true;
cljs.core.KeySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","seq key-seq");
});
cljs.core.List.prototype.ankha$core$IInspect$ = true;
cljs.core.List.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){var this$__$1 = this;return ankha.core.coll_view.call(null,this$__$1,"(",")","list");
});
om.core.IndexedCursor.prototype.ankha$core$IEditable$ = true;
om.core.IndexedCursor.prototype.ankha$core$IEditable$_edit$arity$2 = (function (this$,new_data){var this$__$1 = this;return om.core.update_BANG_.call(null,this$__$1,new_data);
});
om.core.MapCursor.prototype.ankha$core$IEditable$ = true;
om.core.MapCursor.prototype.ankha$core$IEditable$_edit$arity$2 = (function (this$,new_data){var this$__$1 = this;return om.core.update_BANG_.call(null,this$__$1,new_data);
});

//# sourceMappingURL=core.js.map