// Compiled by ClojureScript 0.0-2371
goog.provide('sudoku.appstate');
goog.require('cljs.core');
goog.require('sudoku.game');
goog.require('sudoku.game');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
sudoku.appstate.start_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),sudoku.game.board1,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.key,cljs.core.filter.call(null,cljs.core.val,sudoku.game.board1)))], null);
if(typeof sudoku.appstate.app_state !== 'undefined')
{} else
{sudoku.appstate.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"main","main",-2117802661),sudoku.appstate.start_state,new cljs.core.Keyword(null,"history","history",-247395220),sudoku.appstate.start_state,new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"canidates","canidates",75829588),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"canidates-on","canidates-on",1550659112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),new cljs.core.Keyword(null,"hinting-on","hinting-on",2006751796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null)], null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),",su'da:ku:",new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),"sudoku companion",new cljs.core.Keyword(null,"version","version",425292698),"0.0.1-alpha"], null)], null));
}

//# sourceMappingURL=appstate.js.map