// Compiled by ClojureScript 0.0-2371
goog.provide('sudoku.components.board');
goog.require('cljs.core');
goog.require('sudoku.game');
goog.require('sudoku.game');
goog.require('sudoku.game');
goog.require('sudoku.appstate');
goog.require('sudoku.appstate');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
sudoku.components.board.cell_classname = (function cell_classname(p__26722){var map__26724 = p__26722;var map__26724__$1 = ((cljs.core.seq_QMARK_.call(null,map__26724))?cljs.core.apply.call(null,cljs.core.hash_map,map__26724):map__26724);var hinting_on = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword(null,"hinting-on","hinting-on",2006751796));var valid = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword(null,"valid","valid",155614240));var highlight = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));if(cljs.core.truth_(highlight))
{if(cljs.core.truth_(hinting_on))
{if(cljs.core.truth_(valid))
{return "valid cell";
} else
{return "invalid cell";
}
} else
{return "highlighted cell";
}
} else
{return "cell";
}
});
sudoku.components.board.cell_view = (function cell_view(p__26725,owner){var map__26732 = p__26725;var map__26732__$1 = ((cljs.core.seq_QMARK_.call(null,map__26732))?cljs.core.apply.call(null,cljs.core.hash_map,map__26732):map__26732);var start = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"start","start",-355208981));var highlighted = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var id = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var number = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"number","number",1570378438));var value = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"value","value",305978217));var board = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"board","board",-1907017633));if(typeof sudoku.components.board.t26733 !== 'undefined')
{} else
{
/**
* @constructor
*/
sudoku.components.board.t26733 = (function (p__26725,map__26732,owner,board,cell_view,number,value,start,highlighted,id,meta26734){
this.p__26725 = p__26725;
this.map__26732 = map__26732;
this.owner = owner;
this.board = board;
this.cell_view = cell_view;
this.number = number;
this.value = value;
this.start = start;
this.highlighted = highlighted;
this.id = id;
this.meta26734 = meta26734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sudoku.components.board.t26733.cljs$lang$type = true;
sudoku.components.board.t26733.cljs$lang$ctorStr = "sudoku.components.board/t26733";
sudoku.components.board.t26733.cljs$lang$ctorPrWriter = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"sudoku.components.board/t26733");
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
sudoku.components.board.t26733.prototype.om$core$IRenderState$ = true;
sudoku.components.board.t26733.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (_,p__26736){var self__ = this;
var map__26737 = p__26736;var map__26737__$1 = ((cljs.core.seq_QMARK_.call(null,map__26737))?cljs.core.apply.call(null,cljs.core.hash_map,map__26737):map__26737);var state = map__26737__$1;var hover = cljs.core.get.call(null,map__26737__$1,new cljs.core.Keyword(null,"hover","hover",-341141711));var ___$1 = this;var locked = cljs.core.contains_QMARK_.call(null,self__.start,self__.id);var highlight = cljs.core.contains_QMARK_.call(null,self__.highlighted,self__.id);return React.DOM.div({"onMouseLeave": ((function (locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (){om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null);
return om.core.update_BANG_.call(null,self__.highlighted,cljs.core.PersistentVector.EMPTY);
});})(locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board))
, "onMouseEnter": ((function (locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (){if(cljs.core.truth_(self__.value))
{} else
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711)], null),self__.number);
}
if(locked)
{return null;
} else
{return om.core.update_BANG_.call(null,self__.highlighted,cljs.core.conj.call(null,sudoku.game.peers.call(null,self__.id),self__.id));
}
});})(locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board))
, "onMouseDown": ((function (locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (){if(locked)
{return null;
} else
{om.core.update_BANG_.call(null,self__.board,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),self__.number);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null);
}
});})(locked,highlight,___$1,map__26737,map__26737__$1,state,hover,map__26732,map__26732__$1,start,highlighted,id,number,value,board))
, "className": sudoku.components.board.cell_classname.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight], null))},React.DOM.span({"className": ((locked)?"number locked":"number")},self__.value),React.DOM.span({"className": "hover"},hover));
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
sudoku.components.board.t26733.prototype.om$core$IInitState$ = true;
sudoku.components.board.t26733.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null);
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
sudoku.components.board.t26733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (_26735){var self__ = this;
var _26735__$1 = this;return self__.meta26734;
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
sudoku.components.board.t26733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function (_26735,meta26734__$1){var self__ = this;
var _26735__$1 = this;return (new sudoku.components.board.t26733(self__.p__26725,self__.map__26732,self__.owner,self__.board,self__.cell_view,self__.number,self__.value,self__.start,self__.highlighted,self__.id,meta26734__$1));
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
sudoku.components.board.__GT_t26733 = ((function (map__26732,map__26732__$1,start,highlighted,id,number,value,board){
return (function __GT_t26733(p__26725__$1,map__26732__$2,owner__$1,board__$1,cell_view__$1,number__$1,value__$1,start__$1,highlighted__$1,id__$1,meta26734){return (new sudoku.components.board.t26733(p__26725__$1,map__26732__$2,owner__$1,board__$1,cell_view__$1,number__$1,value__$1,start__$1,highlighted__$1,id__$1,meta26734));
});})(map__26732,map__26732__$1,start,highlighted,id,number,value,board))
;
}
return (new sudoku.components.board.t26733(p__26725,map__26732__$1,owner,board,cell_view,number,value,start,highlighted,id,null));
});
sudoku.components.board.in_cells = (function in_cells(p__26739){var map__26745 = p__26739;var map__26745__$1 = ((cljs.core.seq_QMARK_.call(null,map__26745))?cljs.core.apply.call(null,cljs.core.hash_map,map__26745):map__26745);var highlighted = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var board = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"board","board",-1907017633));var number = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"number","number",1570378438));var start = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"start","start",-355208981));var row = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"row","row",-570139521));var row_key = cljs.core.get.call(null,map__26745__$1,new cljs.core.Keyword(null,"row-key","row-key",-1189010712));var iter__9832__auto__ = ((function (map__26745,map__26745__$1,highlighted,board,number,start,row,row_key){
return (function iter__26746(s__26747){return (new cljs.core.LazySeq(null,((function (map__26745,map__26745__$1,highlighted,board,number,start,row,row_key){
return (function (){var s__26747__$1 = s__26747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26747__$1);if(temp__4126__auto__)
{var s__26747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26747__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__26747__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__26749 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__26748 = (0);while(true){
if((i__26748 < size__9831__auto__))
{var x = cljs.core._nth.call(null,c__9830__auto__,i__26748);cljs.core.chunk_append.call(null,b__26749,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_key,x], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.val,cljs.core.filter.call(null,((function (i__26748,x,c__9830__auto__,size__9831__auto__,b__26749,s__26747__$2,temp__4126__auto__,map__26745,map__26745__$1,highlighted,board,number,start,row,row_key){
return (function (p1__26738_SHARP_){return cljs.core._EQ_.call(null,x,cljs.core.second.call(null,cljs.core.key.call(null,p1__26738_SHARP_)));
});})(i__26748,x,c__9830__auto__,size__9831__auto__,b__26749,s__26747__$2,temp__4126__auto__,map__26745,map__26745__$1,highlighted,board,number,start,row,row_key))
,row))),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted], null));
{
var G__26750 = (i__26748 + (1));
i__26748 = G__26750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26749),iter__26746.call(null,cljs.core.chunk_rest.call(null,s__26747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26749),null);
}
} else
{var x = cljs.core.first.call(null,s__26747__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_key,x], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.val,cljs.core.filter.call(null,((function (x,s__26747__$2,temp__4126__auto__,map__26745,map__26745__$1,highlighted,board,number,start,row,row_key){
return (function (p1__26738_SHARP_){return cljs.core._EQ_.call(null,x,cljs.core.second.call(null,cljs.core.key.call(null,p1__26738_SHARP_)));
});})(x,s__26747__$2,temp__4126__auto__,map__26745,map__26745__$1,highlighted,board,number,start,row,row_key))
,row))),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted], null),iter__26746.call(null,cljs.core.rest.call(null,s__26747__$2)));
}
} else
{return null;
}
break;
}
});})(map__26745,map__26745__$1,highlighted,board,number,start,row,row_key))
,null,null));
});})(map__26745,map__26745__$1,highlighted,board,number,start,row,row_key))
;return iter__9832__auto__.call(null,cljs.core.range.call(null,(1),(10)));
});
sudoku.components.board.row_view = (function row_view(row,owner){if(typeof sudoku.components.board.t26754 !== 'undefined')
{} else
{
/**
* @constructor
*/
sudoku.components.board.t26754 = (function (owner,row,row_view,meta26755){
this.owner = owner;
this.row = row;
this.row_view = row_view;
this.meta26755 = meta26755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sudoku.components.board.t26754.cljs$lang$type = true;
sudoku.components.board.t26754.cljs$lang$ctorStr = "sudoku.components.board/t26754";
sudoku.components.board.t26754.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"sudoku.components.board/t26754");
});
sudoku.components.board.t26754.prototype.om$core$IRender$ = true;
sudoku.components.board.t26754.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var cells = sudoku.components.board.in_cells.call(null,self__.row);return cljs.core.apply.call(null,om.dom.div,{"className": "row"},om.core.build_all.call(null,sudoku.components.board.cell_view,cells));
});
sudoku.components.board.t26754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26756){var self__ = this;
var _26756__$1 = this;return self__.meta26755;
});
sudoku.components.board.t26754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26756,meta26755__$1){var self__ = this;
var _26756__$1 = this;return (new sudoku.components.board.t26754(self__.owner,self__.row,self__.row_view,meta26755__$1));
});
sudoku.components.board.__GT_t26754 = (function __GT_t26754(owner__$1,row__$1,row_view__$1,meta26755){return (new sudoku.components.board.t26754(owner__$1,row__$1,row_view__$1,meta26755));
});
}
return (new sudoku.components.board.t26754(owner,row,row_view,null));
});
sudoku.components.board.filter_row = (function filter_row(row_key,board){return board.call(null);
});
sudoku.components.board.in_rows = (function in_rows(p__26758){var map__26764 = p__26758;var map__26764__$1 = ((cljs.core.seq_QMARK_.call(null,map__26764))?cljs.core.apply.call(null,cljs.core.hash_map,map__26764):map__26764);var app = map__26764__$1;var highlighted = cljs.core.get.call(null,map__26764__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));var board = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"board","board",-1907017633)], null));var start = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"start","start",-355208981)], null));var number = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"number","number",1570378438)], null)).call(null,(0));var iter__9832__auto__ = ((function (board,start,number,map__26764,map__26764__$1,app,highlighted){
return (function iter__26765(s__26766){return (new cljs.core.LazySeq(null,((function (board,start,number,map__26764,map__26764__$1,app,highlighted){
return (function (){var s__26766__$1 = s__26766;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26766__$1);if(temp__4126__auto__)
{var s__26766__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26766__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__26766__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__26768 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__26767 = (0);while(true){
if((i__26767 < size__9831__auto__))
{var row_key = cljs.core._nth.call(null,c__9830__auto__,i__26767);cljs.core.chunk_append.call(null,b__26768,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"row-key","row-key",-1189010712),row_key,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (i__26767,row_key,c__9830__auto__,size__9831__auto__,b__26768,s__26766__$2,temp__4126__auto__,board,start,number,map__26764,map__26764__$1,app,highlighted){
return (function (p1__26757_SHARP_){return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.key.call(null,p1__26757_SHARP_)),row_key);
});})(i__26767,row_key,c__9830__auto__,size__9831__auto__,b__26768,s__26766__$2,temp__4126__auto__,board,start,number,map__26764,map__26764__$1,app,highlighted))
,board)),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted], null));
{
var G__26769 = (i__26767 + (1));
i__26767 = G__26769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26768),iter__26765.call(null,cljs.core.chunk_rest.call(null,s__26766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26768),null);
}
} else
{var row_key = cljs.core.first.call(null,s__26766__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"row-key","row-key",-1189010712),row_key,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (row_key,s__26766__$2,temp__4126__auto__,board,start,number,map__26764,map__26764__$1,app,highlighted){
return (function (p1__26757_SHARP_){return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.key.call(null,p1__26757_SHARP_)),row_key);
});})(row_key,s__26766__$2,temp__4126__auto__,board,start,number,map__26764,map__26764__$1,app,highlighted))
,board)),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"number","number",1570378438),number,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted], null),iter__26765.call(null,cljs.core.rest.call(null,s__26766__$2)));
}
} else
{return null;
}
break;
}
});})(board,start,number,map__26764,map__26764__$1,app,highlighted))
,null,null));
});})(board,start,number,map__26764,map__26764__$1,app,highlighted))
;return iter__9832__auto__.call(null,sudoku.game.rows);
});
sudoku.components.board.board_view = (function board_view(app,owner){if(typeof sudoku.components.board.t26773 !== 'undefined')
{} else
{
/**
* @constructor
*/
sudoku.components.board.t26773 = (function (owner,app,board_view,meta26774){
this.owner = owner;
this.app = app;
this.board_view = board_view;
this.meta26774 = meta26774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sudoku.components.board.t26773.cljs$lang$type = true;
sudoku.components.board.t26773.cljs$lang$ctorStr = "sudoku.components.board/t26773";
sudoku.components.board.t26773.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"sudoku.components.board/t26773");
});
sudoku.components.board.t26773.prototype.om$core$IRender$ = true;
sudoku.components.board.t26773.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var rows = sudoku.components.board.in_rows.call(null,self__.app);return cljs.core.apply.call(null,om.dom.div,{"className": "board"},om.core.build_all.call(null,sudoku.components.board.row_view,rows));
});
sudoku.components.board.t26773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26775){var self__ = this;
var _26775__$1 = this;return self__.meta26774;
});
sudoku.components.board.t26773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26775,meta26774__$1){var self__ = this;
var _26775__$1 = this;return (new sudoku.components.board.t26773(self__.owner,self__.app,self__.board_view,meta26774__$1));
});
sudoku.components.board.__GT_t26773 = (function __GT_t26773(owner__$1,app__$1,board_view__$1,meta26774){return (new sudoku.components.board.t26773(owner__$1,app__$1,board_view__$1,meta26774));
});
}
return (new sudoku.components.board.t26773(owner,app,board_view,null));
});

//# sourceMappingURL=board.js.map