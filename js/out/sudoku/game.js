// Compiled by ClojureScript 0.0-2371
goog.provide('sudoku.game');
goog.require('cljs.core');
sudoku.game.digits = cljs.core.set.call(null,cljs.core.range.call(null,(1),(10)));
sudoku.game.rows = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"i","i",-1386841315)], null);
sudoku.game.cols = cljs.core.range.call(null,(1),(10));
sudoku.game.squares = (function (){var iter__9832__auto__ = (function iter__21645(s__21646){return (new cljs.core.LazySeq(null,(function (){var s__21646__$1 = s__21646;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21646__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var r = cljs.core.first.call(null,xs__4624__auto__);var iterys__9828__auto__ = ((function (s__21646__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function iter__21647(s__21648){return (new cljs.core.LazySeq(null,((function (s__21646__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21648__$1 = s__21648;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21648__$1);if(temp__4126__auto____$1)
{var s__21648__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21648__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21648__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21650 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21649 = (0);while(true){
if((i__21649 < size__9831__auto__))
{var c = cljs.core._nth.call(null,c__9830__auto__,i__21649);cljs.core.chunk_append.call(null,b__21650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21651 = (i__21649 + (1));
i__21649 = G__21651;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21650),iter__21647.call(null,cljs.core.chunk_rest.call(null,s__21648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21650),null);
}
} else
{var c = cljs.core.first.call(null,s__21648__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21647.call(null,cljs.core.rest.call(null,s__21648__$2)));
}
} else
{return null;
}
break;
}
});})(s__21646__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21646__$1,r,xs__4624__auto__,temp__4126__auto__))
;var fs__9829__auto__ = cljs.core.seq.call(null,iterys__9828__auto__.call(null,sudoku.game.cols));if(fs__9829__auto__)
{return cljs.core.concat.call(null,fs__9829__auto__,iter__21645.call(null,cljs.core.rest.call(null,s__21646__$1)));
} else
{{
var G__21652 = cljs.core.rest.call(null,s__21646__$1);
s__21646__$1 = G__21652;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.rows);
})();
sudoku.game.unitlist = cljs.core.concat.call(null,(function (){var iter__9832__auto__ = (function iter__21653(s__21654){return (new cljs.core.LazySeq(null,(function (){var s__21654__$1 = s__21654;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21654__$1);if(temp__4126__auto__)
{var s__21654__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21654__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21654__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21656 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21655 = (0);while(true){
if((i__21655 < size__9831__auto__))
{var c = cljs.core._nth.call(null,c__9830__auto__,i__21655);cljs.core.chunk_append.call(null,b__21656,(function (){var iter__9832__auto__ = ((function (i__21655,c,c__9830__auto__,size__9831__auto__,b__21656,s__21654__$2,temp__4126__auto__){
return (function iter__21665(s__21666){return (new cljs.core.LazySeq(null,((function (i__21655,c,c__9830__auto__,size__9831__auto__,b__21656,s__21654__$2,temp__4126__auto__){
return (function (){var s__21666__$1 = s__21666;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21666__$1);if(temp__4126__auto____$1)
{var s__21666__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21666__$2))
{var c__9830__auto____$1 = cljs.core.chunk_first.call(null,s__21666__$2);var size__9831__auto____$1 = cljs.core.count.call(null,c__9830__auto____$1);var b__21668 = cljs.core.chunk_buffer.call(null,size__9831__auto____$1);if((function (){var i__21667 = (0);while(true){
if((i__21667 < size__9831__auto____$1))
{var r = cljs.core._nth.call(null,c__9830__auto____$1,i__21667);cljs.core.chunk_append.call(null,b__21668,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21747 = (i__21667 + (1));
i__21667 = G__21747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21668),iter__21665.call(null,cljs.core.chunk_rest.call(null,s__21666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21668),null);
}
} else
{var r = cljs.core.first.call(null,s__21666__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21665.call(null,cljs.core.rest.call(null,s__21666__$2)));
}
} else
{return null;
}
break;
}
});})(i__21655,c,c__9830__auto__,size__9831__auto__,b__21656,s__21654__$2,temp__4126__auto__))
,null,null));
});})(i__21655,c,c__9830__auto__,size__9831__auto__,b__21656,s__21654__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.rows);
})());
{
var G__21748 = (i__21655 + (1));
i__21655 = G__21748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21656),iter__21653.call(null,cljs.core.chunk_rest.call(null,s__21654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21656),null);
}
} else
{var c = cljs.core.first.call(null,s__21654__$2);return cljs.core.cons.call(null,(function (){var iter__9832__auto__ = ((function (c,s__21654__$2,temp__4126__auto__){
return (function iter__21669(s__21670){return (new cljs.core.LazySeq(null,((function (c,s__21654__$2,temp__4126__auto__){
return (function (){var s__21670__$1 = s__21670;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21670__$1);if(temp__4126__auto____$1)
{var s__21670__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21670__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21670__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21672 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21671 = (0);while(true){
if((i__21671 < size__9831__auto__))
{var r = cljs.core._nth.call(null,c__9830__auto__,i__21671);cljs.core.chunk_append.call(null,b__21672,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21749 = (i__21671 + (1));
i__21671 = G__21749;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21672),iter__21669.call(null,cljs.core.chunk_rest.call(null,s__21670__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21672),null);
}
} else
{var r = cljs.core.first.call(null,s__21670__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21669.call(null,cljs.core.rest.call(null,s__21670__$2)));
}
} else
{return null;
}
break;
}
});})(c,s__21654__$2,temp__4126__auto__))
,null,null));
});})(c,s__21654__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.rows);
})(),iter__21653.call(null,cljs.core.rest.call(null,s__21654__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.cols);
})(),(function (){var iter__9832__auto__ = (function iter__21673(s__21674){return (new cljs.core.LazySeq(null,(function (){var s__21674__$1 = s__21674;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21674__$1);if(temp__4126__auto__)
{var s__21674__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21674__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21674__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21676 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21675 = (0);while(true){
if((i__21675 < size__9831__auto__))
{var r = cljs.core._nth.call(null,c__9830__auto__,i__21675);cljs.core.chunk_append.call(null,b__21676,(function (){var iter__9832__auto__ = ((function (i__21675,r,c__9830__auto__,size__9831__auto__,b__21676,s__21674__$2,temp__4126__auto__){
return (function iter__21685(s__21686){return (new cljs.core.LazySeq(null,((function (i__21675,r,c__9830__auto__,size__9831__auto__,b__21676,s__21674__$2,temp__4126__auto__){
return (function (){var s__21686__$1 = s__21686;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21686__$1);if(temp__4126__auto____$1)
{var s__21686__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21686__$2))
{var c__9830__auto____$1 = cljs.core.chunk_first.call(null,s__21686__$2);var size__9831__auto____$1 = cljs.core.count.call(null,c__9830__auto____$1);var b__21688 = cljs.core.chunk_buffer.call(null,size__9831__auto____$1);if((function (){var i__21687 = (0);while(true){
if((i__21687 < size__9831__auto____$1))
{var c = cljs.core._nth.call(null,c__9830__auto____$1,i__21687);cljs.core.chunk_append.call(null,b__21688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21750 = (i__21687 + (1));
i__21687 = G__21750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),iter__21685.call(null,cljs.core.chunk_rest.call(null,s__21686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),null);
}
} else
{var c = cljs.core.first.call(null,s__21686__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21685.call(null,cljs.core.rest.call(null,s__21686__$2)));
}
} else
{return null;
}
break;
}
});})(i__21675,r,c__9830__auto__,size__9831__auto__,b__21676,s__21674__$2,temp__4126__auto__))
,null,null));
});})(i__21675,r,c__9830__auto__,size__9831__auto__,b__21676,s__21674__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.cols);
})());
{
var G__21751 = (i__21675 + (1));
i__21675 = G__21751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21676),iter__21673.call(null,cljs.core.chunk_rest.call(null,s__21674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21676),null);
}
} else
{var r = cljs.core.first.call(null,s__21674__$2);return cljs.core.cons.call(null,(function (){var iter__9832__auto__ = ((function (r,s__21674__$2,temp__4126__auto__){
return (function iter__21689(s__21690){return (new cljs.core.LazySeq(null,((function (r,s__21674__$2,temp__4126__auto__){
return (function (){var s__21690__$1 = s__21690;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21690__$1);if(temp__4126__auto____$1)
{var s__21690__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21690__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21690__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21692 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21691 = (0);while(true){
if((i__21691 < size__9831__auto__))
{var c = cljs.core._nth.call(null,c__9830__auto__,i__21691);cljs.core.chunk_append.call(null,b__21692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21752 = (i__21691 + (1));
i__21691 = G__21752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21692),iter__21689.call(null,cljs.core.chunk_rest.call(null,s__21690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21692),null);
}
} else
{var c = cljs.core.first.call(null,s__21690__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21689.call(null,cljs.core.rest.call(null,s__21690__$2)));
}
} else
{return null;
}
break;
}
});})(r,s__21674__$2,temp__4126__auto__))
,null,null));
});})(r,s__21674__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.cols);
})(),iter__21673.call(null,cljs.core.rest.call(null,s__21674__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.rows);
})(),(function (){var iter__9832__auto__ = (function iter__21693(s__21694){return (new cljs.core.LazySeq(null,(function (){var s__21694__$1 = s__21694;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21694__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var rs = cljs.core.first.call(null,xs__4624__auto__);var iterys__9828__auto__ = ((function (s__21694__$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__21695(s__21696){return (new cljs.core.LazySeq(null,((function (s__21694__$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21696__$1 = s__21696;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21696__$1);if(temp__4126__auto____$1)
{var s__21696__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21696__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21696__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21698 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21697 = (0);while(true){
if((i__21697 < size__9831__auto__))
{var cs = cljs.core._nth.call(null,c__9830__auto__,i__21697);cljs.core.chunk_append.call(null,b__21698,(function (){var iter__9832__auto__ = ((function (i__21697,s__21694__$1,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__21735(s__21736){return (new cljs.core.LazySeq(null,((function (i__21697,s__21694__$1,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21736__$1 = s__21736;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__21736__$1);if(temp__4126__auto____$2)
{var xs__4624__auto____$1 = temp__4126__auto____$2;var r = cljs.core.first.call(null,xs__4624__auto____$1);var iterys__9828__auto__ = ((function (s__21736__$1,i__21697,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__21737(s__21738){return (new cljs.core.LazySeq(null,((function (s__21736__$1,i__21697,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21738__$1 = s__21738;while(true){
var temp__4126__auto____$3 = cljs.core.seq.call(null,s__21738__$1);if(temp__4126__auto____$3)
{var s__21738__$2 = temp__4126__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__21738__$2))
{var c__9830__auto____$1 = cljs.core.chunk_first.call(null,s__21738__$2);var size__9831__auto____$1 = cljs.core.count.call(null,c__9830__auto____$1);var b__21740 = cljs.core.chunk_buffer.call(null,size__9831__auto____$1);if((function (){var i__21739 = (0);while(true){
if((i__21739 < size__9831__auto____$1))
{var c = cljs.core._nth.call(null,c__9830__auto____$1,i__21739);cljs.core.chunk_append.call(null,b__21740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21753 = (i__21739 + (1));
i__21739 = G__21753;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21740),iter__21737.call(null,cljs.core.chunk_rest.call(null,s__21738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21740),null);
}
} else
{var c = cljs.core.first.call(null,s__21738__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21737.call(null,cljs.core.rest.call(null,s__21738__$2)));
}
} else
{return null;
}
break;
}
});})(s__21736__$1,i__21697,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21736__$1,i__21697,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
;var fs__9829__auto__ = cljs.core.seq.call(null,iterys__9828__auto__.call(null,cs));if(fs__9829__auto__)
{return cljs.core.concat.call(null,fs__9829__auto__,iter__21735.call(null,cljs.core.rest.call(null,s__21736__$1)));
} else
{{
var G__21754 = cljs.core.rest.call(null,s__21736__$1);
s__21736__$1 = G__21754;
continue;
}
}
} else
{return null;
}
break;
}
});})(i__21697,s__21694__$1,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(i__21697,s__21694__$1,cs,c__9830__auto__,size__9831__auto__,b__21698,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
;return iter__9832__auto__.call(null,rs);
})());
{
var G__21755 = (i__21697 + (1));
i__21697 = G__21755;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),iter__21695.call(null,cljs.core.chunk_rest.call(null,s__21696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),null);
}
} else
{var cs = cljs.core.first.call(null,s__21696__$2);return cljs.core.cons.call(null,(function (){var iter__9832__auto__ = ((function (s__21694__$1,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__21741(s__21742){return (new cljs.core.LazySeq(null,((function (s__21694__$1,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21742__$1 = s__21742;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__21742__$1);if(temp__4126__auto____$2)
{var xs__4624__auto____$1 = temp__4126__auto____$2;var r = cljs.core.first.call(null,xs__4624__auto____$1);var iterys__9828__auto__ = ((function (s__21742__$1,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function iter__21743(s__21744){return (new cljs.core.LazySeq(null,((function (s__21742__$1,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21744__$1 = s__21744;while(true){
var temp__4126__auto____$3 = cljs.core.seq.call(null,s__21744__$1);if(temp__4126__auto____$3)
{var s__21744__$2 = temp__4126__auto____$3;if(cljs.core.chunked_seq_QMARK_.call(null,s__21744__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21744__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21746 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21745 = (0);while(true){
if((i__21745 < size__9831__auto__))
{var c = cljs.core._nth.call(null,c__9830__auto__,i__21745);cljs.core.chunk_append.call(null,b__21746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));
{
var G__21756 = (i__21745 + (1));
i__21745 = G__21756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21746),iter__21743.call(null,cljs.core.chunk_rest.call(null,s__21744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21746),null);
}
} else
{var c = cljs.core.first.call(null,s__21744__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),iter__21743.call(null,cljs.core.rest.call(null,s__21744__$2)));
}
} else
{return null;
}
break;
}
});})(s__21742__$1,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21742__$1,s__21694__$1,r,xs__4624__auto____$1,temp__4126__auto____$2,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
;var fs__9829__auto__ = cljs.core.seq.call(null,iterys__9828__auto__.call(null,cs));if(fs__9829__auto__)
{return cljs.core.concat.call(null,fs__9829__auto__,iter__21741.call(null,cljs.core.rest.call(null,s__21742__$1)));
} else
{{
var G__21757 = cljs.core.rest.call(null,s__21742__$1);
s__21742__$1 = G__21757;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__21694__$1,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21694__$1,cs,s__21696__$2,temp__4126__auto____$1,rs,xs__4624__auto__,temp__4126__auto__))
;return iter__9832__auto__.call(null,rs);
})(),iter__21695.call(null,cljs.core.rest.call(null,s__21696__$2)));
}
} else
{return null;
}
break;
}
});})(s__21694__$1,rs,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21694__$1,rs,xs__4624__auto__,temp__4126__auto__))
;var fs__9829__auto__ = cljs.core.seq.call(null,iterys__9828__auto__.call(null,cljs.core.partition.call(null,(3),sudoku.game.cols)));if(fs__9829__auto__)
{return cljs.core.concat.call(null,fs__9829__auto__,iter__21693.call(null,cljs.core.rest.call(null,s__21694__$1)));
} else
{{
var G__21758 = cljs.core.rest.call(null,s__21694__$1);
s__21694__$1 = G__21758;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,cljs.core.partition.call(null,(3),sudoku.game.rows));
})());
sudoku.game.units = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9832__auto__ = (function iter__21759(s__21760){return (new cljs.core.LazySeq(null,(function (){var s__21760__$1 = s__21760;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21760__$1);if(temp__4126__auto__)
{var s__21760__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21760__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21760__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21762 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21761 = (0);while(true){
if((i__21761 < size__9831__auto__))
{var s = cljs.core._nth.call(null,c__9830__auto__,i__21761);cljs.core.chunk_append.call(null,b__21762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(function (){var iter__9832__auto__ = ((function (i__21761,s,c__9830__auto__,size__9831__auto__,b__21762,s__21760__$2,temp__4126__auto__){
return (function iter__21771(s__21772){return (new cljs.core.LazySeq(null,((function (i__21761,s,c__9830__auto__,size__9831__auto__,b__21762,s__21760__$2,temp__4126__auto__){
return (function (){var s__21772__$1 = s__21772;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21772__$1);if(temp__4126__auto____$1)
{var s__21772__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21772__$2))
{var c__9830__auto____$1 = cljs.core.chunk_first.call(null,s__21772__$2);var size__9831__auto____$1 = cljs.core.count.call(null,c__9830__auto____$1);var b__21774 = cljs.core.chunk_buffer.call(null,size__9831__auto____$1);if((function (){var i__21773 = (0);while(true){
if((i__21773 < size__9831__auto____$1))
{var u = cljs.core._nth.call(null,c__9830__auto____$1,i__21773);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),u)))
{cljs.core.chunk_append.call(null,b__21774,u);
{
var G__21779 = (i__21773 + (1));
i__21773 = G__21779;
continue;
}
} else
{{
var G__21780 = (i__21773 + (1));
i__21773 = G__21780;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21774),iter__21771.call(null,cljs.core.chunk_rest.call(null,s__21772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21774),null);
}
} else
{var u = cljs.core.first.call(null,s__21772__$2);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),u)))
{return cljs.core.cons.call(null,u,iter__21771.call(null,cljs.core.rest.call(null,s__21772__$2)));
} else
{{
var G__21781 = cljs.core.rest.call(null,s__21772__$2);
s__21772__$1 = G__21781;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21761,s,c__9830__auto__,size__9831__auto__,b__21762,s__21760__$2,temp__4126__auto__))
,null,null));
});})(i__21761,s,c__9830__auto__,size__9831__auto__,b__21762,s__21760__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.unitlist);
})()], null));
{
var G__21782 = (i__21761 + (1));
i__21761 = G__21782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21762),iter__21759.call(null,cljs.core.chunk_rest.call(null,s__21760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21762),null);
}
} else
{var s = cljs.core.first.call(null,s__21760__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(function (){var iter__9832__auto__ = ((function (s,s__21760__$2,temp__4126__auto__){
return (function iter__21775(s__21776){return (new cljs.core.LazySeq(null,((function (s,s__21760__$2,temp__4126__auto__){
return (function (){var s__21776__$1 = s__21776;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21776__$1);if(temp__4126__auto____$1)
{var s__21776__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21776__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21776__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21778 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21777 = (0);while(true){
if((i__21777 < size__9831__auto__))
{var u = cljs.core._nth.call(null,c__9830__auto__,i__21777);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),u)))
{cljs.core.chunk_append.call(null,b__21778,u);
{
var G__21783 = (i__21777 + (1));
i__21777 = G__21783;
continue;
}
} else
{{
var G__21784 = (i__21777 + (1));
i__21777 = G__21784;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21778),iter__21775.call(null,cljs.core.chunk_rest.call(null,s__21776__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21778),null);
}
} else
{var u = cljs.core.first.call(null,s__21776__$2);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([s], true),u)))
{return cljs.core.cons.call(null,u,iter__21775.call(null,cljs.core.rest.call(null,s__21776__$2)));
} else
{{
var G__21785 = cljs.core.rest.call(null,s__21776__$2);
s__21776__$1 = G__21785;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s,s__21760__$2,temp__4126__auto__))
,null,null));
});})(s,s__21760__$2,temp__4126__auto__))
;return iter__9832__auto__.call(null,sudoku.game.unitlist);
})()], null),iter__21759.call(null,cljs.core.rest.call(null,s__21760__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.squares);
})());
sudoku.game.peers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9832__auto__ = (function iter__21786(s__21787){return (new cljs.core.LazySeq(null,(function (){var s__21787__$1 = s__21787;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21787__$1);if(temp__4126__auto__)
{var s__21787__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21787__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21787__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21789 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21788 = (0);while(true){
if((i__21788 < size__9831__auto__))
{var s = cljs.core._nth.call(null,c__9830__auto__,i__21788);cljs.core.chunk_append.call(null,b__21789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.disj.call(null,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,sudoku.game.units.call(null,s)),s)], null));
{
var G__21790 = (i__21788 + (1));
i__21788 = G__21790;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21789),iter__21786.call(null,cljs.core.chunk_rest.call(null,s__21787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21789),null);
}
} else
{var s = cljs.core.first.call(null,s__21787__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.disj.call(null,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,sudoku.game.units.call(null,s)),s)], null),iter__21786.call(null,cljs.core.rest.call(null,s__21787__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.squares);
})());
/**
* A set of tests that must pass
*/
sudoku.game.unit_tests = (function unit_tests(){if(cljs.core._EQ_.call(null,(81),cljs.core.count.call(null,sudoku.game.squares)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(81),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"squares","squares",752273898,null))))))));
}
if(cljs.core._EQ_.call(null,(27),cljs.core.count.call(null,sudoku.game.unitlist)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(27),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"unitlist","unitlist",-1101799792,null))))))));
}
if(cljs.core.every_QMARK_.call(null,(function (p1__21791_SHARP_){return cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,sudoku.game.units.call(null,p1__21791_SHARP_)));
}),sudoku.game.squares))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21791#","p1__21791#",-1730009867,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"p1__21791#","p1__21791#",-1730009867,null))))),new cljs.core.Symbol(null,"squares","squares",752273898,null)))))));
}
if(cljs.core.every_QMARK_.call(null,(function (p1__21792_SHARP_){return cljs.core._EQ_.call(null,(20),cljs.core.count.call(null,sudoku.game.peers.call(null,p1__21792_SHARP_)));
}),sudoku.game.squares))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21792#","p1__21792#",-1566818239,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(20),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"peers","peers",-649090415,null),new cljs.core.Symbol(null,"p1__21792#","p1__21792#",-1566818239,null))))),new cljs.core.Symbol(null,"squares","squares",752273898,null)))))));
}
if(cljs.core._EQ_.call(null,sudoku.game.units.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(2)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(9)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], null)], null)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(2)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(9)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null)], null)], null)))))));
}
if(cljs.core._EQ_.call(null,sudoku.game.peers.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null)),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)], true)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"peers","peers",-649090415,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(2)], null)),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)], true)))))));
}
return new cljs.core.Keyword(null,"passed","passed",-28165278);
});
sudoku.game.grid1 = "003020600900305001001806400008102900700000008006708200002609500800203009005010300";
/**
* Convert grid into a map of {square: digit}, with nil for empties
*/
sudoku.game.grid_values = (function grid_values(grid){return cljs.core.zipmap.call(null,sudoku.game.squares,(function (){var iter__9832__auto__ = (function iter__21797(s__21798){return (new cljs.core.LazySeq(null,(function (){var s__21798__$1 = s__21798;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21798__$1);if(temp__4126__auto__)
{var s__21798__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21798__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21798__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21800 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21799 = (0);while(true){
if((i__21799 < size__9831__auto__))
{var c = cljs.core._nth.call(null,c__9830__auto__,i__21799);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.range.call(null,(10))),parseInt(c)))
{cljs.core.chunk_append.call(null,b__21800,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["0",null], null), null).call(null,c))?null:parseInt(c)));
{
var G__21801 = (i__21799 + (1));
i__21799 = G__21801;
continue;
}
} else
{{
var G__21802 = (i__21799 + (1));
i__21799 = G__21802;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21800),iter__21797.call(null,cljs.core.chunk_rest.call(null,s__21798__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21800),null);
}
} else
{var c = cljs.core.first.call(null,s__21798__$2);if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.range.call(null,(10))),parseInt(c)))
{return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["0",null], null), null).call(null,c))?null:parseInt(c)),iter__21797.call(null,cljs.core.rest.call(null,s__21798__$2)));
} else
{{
var G__21803 = cljs.core.rest.call(null,s__21798__$2);
s__21798__$1 = G__21803;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,grid);
})());
});
sudoku.game.blank_board = sudoku.game.grid_values.call(null,cljs.core.reduce.call(null,cljs.core.str,cljs.core.repeat.call(null,(81),"0")));
sudoku.game.board1 = sudoku.game.grid_values.call(null,sudoku.game.grid1);
/**
* Convert grid to a map of possible values, {square: digits}. Return false
* on contradiction
*/
sudoku.game.parse_grid = (function parse_grid(grid){return sudoku.game.reduce_true.call(null,(function (values,p__21810){var vec__21811 = p__21810;var s = cljs.core.nth.call(null,vec__21811,(0),null);var d = cljs.core.nth.call(null,vec__21811,(1),null);return sudoku.game.assign.call(null,values,s,d);
}),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9832__auto__ = (function iter__21812(s__21813){return (new cljs.core.LazySeq(null,(function (){var s__21813__$1 = s__21813;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21813__$1);if(temp__4126__auto__)
{var s__21813__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21813__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21813__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21815 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21814 = (0);while(true){
if((i__21814 < size__9831__auto__))
{var s = cljs.core._nth.call(null,c__9830__auto__,i__21814);cljs.core.chunk_append.call(null,b__21815,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,sudoku.game.digits], null));
{
var G__21816 = (i__21814 + (1));
i__21814 = G__21816;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21815),iter__21812.call(null,cljs.core.chunk_rest.call(null,s__21813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21815),null);
}
} else
{var s = cljs.core.first.call(null,s__21813__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,sudoku.game.digits], null),iter__21812.call(null,cljs.core.rest.call(null,s__21813__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9832__auto__.call(null,sudoku.game.squares);
})()),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.val),grid));
});
/**
* Whittle down the square at s to digit d by eliminating every digit
* except d from the square, and doing constraint propogation. Returns
* false if a contradiction results
*/
sudoku.game.assign = (function assign(values,s,d){return sudoku.game.reduce_true.call(null,(function (p1__21817_SHARP_,p2__21818_SHARP_){return sudoku.game.eliminate.call(null,p1__21817_SHARP_,s,p2__21818_SHARP_);
}),values,cljs.core.disj.call(null,values.call(null,s),d));
});
/**
* Eliminate digit d from square s and do any appropriate constraint
* propogation
*/
sudoku.game.eliminate = (function eliminate(values,s,d){if(cljs.core.not.call(null,values.call(null,s).call(null,d)))
{return values;
} else
{if(cljs.core._EQ_.call(null,cljs.core.PersistentHashSet.fromArray([d], true),values.call(null,s)))
{return null;
} else
{var values__$1 = cljs.core.update_in.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),cljs.core.disj,d);var values__$2 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,values__$1.call(null,s))))?sudoku.game.reduce_true.call(null,((function (values__$1){
return (function (p1__21819_SHARP_,p2__21820_SHARP_){return eliminate.call(null,p1__21819_SHARP_,p2__21820_SHARP_,cljs.core.first.call(null,p1__21819_SHARP_.call(null,s)));
});})(values__$1))
,values__$1,sudoku.game.peers.call(null,s)):values__$1);return sudoku.game.reduce_true.call(null,((function (values__$1,values__$2){
return (function (values__$3,u){var dplaces = (function (){var iter__9832__auto__ = ((function (values__$1,values__$2){
return (function iter__21825(s__21826){return (new cljs.core.LazySeq(null,((function (values__$1,values__$2){
return (function (){var s__21826__$1 = s__21826;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21826__$1);if(temp__4126__auto__)
{var s__21826__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21826__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21826__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21828 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21827 = (0);while(true){
if((i__21827 < size__9831__auto__))
{var s__$1 = cljs.core._nth.call(null,c__9830__auto__,i__21827);if(cljs.core.truth_(values__$3.call(null,s__$1).call(null,d)))
{cljs.core.chunk_append.call(null,b__21828,s__$1);
{
var G__21829 = (i__21827 + (1));
i__21827 = G__21829;
continue;
}
} else
{{
var G__21830 = (i__21827 + (1));
i__21827 = G__21830;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21828),iter__21825.call(null,cljs.core.chunk_rest.call(null,s__21826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21828),null);
}
} else
{var s__$1 = cljs.core.first.call(null,s__21826__$2);if(cljs.core.truth_(values__$3.call(null,s__$1).call(null,d)))
{return cljs.core.cons.call(null,s__$1,iter__21825.call(null,cljs.core.rest.call(null,s__21826__$2)));
} else
{{
var G__21831 = cljs.core.rest.call(null,s__21826__$2);
s__21826__$1 = G__21831;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(values__$1,values__$2))
,null,null));
});})(values__$1,values__$2))
;return iter__9832__auto__.call(null,u);
})();if((cljs.core.count.call(null,dplaces) === (0)))
{return null;
} else
{if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,dplaces)))
{return sudoku.game.assign.call(null,values__$3,cljs.core.first.call(null,dplaces),d);
} else
{return values__$3;
}
}
});})(values__$1,values__$2))
,values__$2,sudoku.game.units.call(null,s));
}
}
});
/**
* Using depth-first search and propagation, try all possible values
*/
sudoku.game.search = (function search(values){if(cljs.core.truth_(values))
{var scount = cljs.core.comp.call(null,cljs.core.count,values);if(cljs.core.every_QMARK_.call(null,((function (scount){
return (function (p1__21832_SHARP_){return cljs.core._EQ_.call(null,(1),scount.call(null,p1__21832_SHARP_));
});})(scount))
,sudoku.game.squares))
{return values;
} else
{var s = cljs.core.apply.call(null,cljs.core.min_key,scount,cljs.core.filter.call(null,((function (scount){
return (function (p1__21833_SHARP_){return ((1) < scount.call(null,p1__21833_SHARP_));
});})(scount))
,sudoku.game.squares));return cljs.core.some.call(null,cljs.core.identity,(function (){var iter__9832__auto__ = ((function (s,scount){
return (function iter__21838(s__21839){return (new cljs.core.LazySeq(null,((function (s,scount){
return (function (){var s__21839__$1 = s__21839;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21839__$1);if(temp__4126__auto__)
{var s__21839__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21839__$2))
{var c__9830__auto__ = cljs.core.chunk_first.call(null,s__21839__$2);var size__9831__auto__ = cljs.core.count.call(null,c__9830__auto__);var b__21841 = cljs.core.chunk_buffer.call(null,size__9831__auto__);if((function (){var i__21840 = (0);while(true){
if((i__21840 < size__9831__auto__))
{var d = cljs.core._nth.call(null,c__9830__auto__,i__21840);cljs.core.chunk_append.call(null,b__21841,search.call(null,sudoku.game.assign.call(null,values,s,d)));
{
var G__21842 = (i__21840 + (1));
i__21840 = G__21842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21841),iter__21838.call(null,cljs.core.chunk_rest.call(null,s__21839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21841),null);
}
} else
{var d = cljs.core.first.call(null,s__21839__$2);return cljs.core.cons.call(null,search.call(null,sudoku.game.assign.call(null,values,s,d)),iter__21838.call(null,cljs.core.rest.call(null,s__21839__$2)));
}
} else
{return null;
}
break;
}
});})(s,scount))
,null,null));
});})(s,scount))
;return iter__9832__auto__.call(null,values.call(null,s));
})());
}
} else
{return null;
}
});
sudoku.game.solve = (function solve(grid){return sudoku.game.search.call(null,sudoku.game.parse_grid.call(null,sudoku.game.grid_values.call(null,grid)));
});
/**
* Like reduce but short-circuits upon logical false
*/
sudoku.game.reduce_true = (function reduce_true(f,val,coll){if(cljs.core.truth_(val))
{var val__$1 = val;var coll__$1 = coll;while(true){
if(cljs.core.empty_QMARK_.call(null,coll__$1))
{return val__$1;
} else
{var temp__4126__auto__ = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.truth_(temp__4126__auto__))
{var val_STAR_ = temp__4126__auto__;{
var G__21843 = val_STAR_;
var G__21844 = cljs.core.rest.call(null,coll__$1);
val__$1 = G__21843;
coll__$1 = G__21844;
continue;
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
});

//# sourceMappingURL=game.js.map