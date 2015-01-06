// Compiled by ClojureScript 0.0-2371
goog.provide('sudoku.core');
goog.require('cljs.core');
goog.require('sudoku.appstate');
goog.require('sudoku.components.palette');
goog.require('sudoku.components.board');
goog.require('om.dom');
goog.require('sudoku.components.palette');
goog.require('sudoku.appstate');
goog.require('sudoku.components.board');
goog.require('ankha.core');
goog.require('om.dom');
goog.require('ankha.core');
goog.require('sudoku.game');
goog.require('om.core');
goog.require('om.core');
goog.require('sudoku.game');
sudoku.core.sudoku_app_view = (function sudoku_app_view(app,owner){if(typeof sudoku.core.t25147 !== 'undefined')
{} else
{
/**
* @constructor
*/
sudoku.core.t25147 = (function (owner,app,sudoku_app_view,meta25148){
this.owner = owner;
this.app = app;
this.sudoku_app_view = sudoku_app_view;
this.meta25148 = meta25148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sudoku.core.t25147.cljs$lang$type = true;
sudoku.core.t25147.cljs$lang$ctorStr = "sudoku.core/t25147";
sudoku.core.t25147.cljs$lang$ctorPrWriter = (function (this__9670__auto__,writer__9671__auto__,opt__9672__auto__){return cljs.core._write.call(null,writer__9671__auto__,"sudoku.core/t25147");
});
sudoku.core.t25147.prototype.om$core$IRender$ = true;
sudoku.core.t25147.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,"App"),om.core.build.call(null,sudoku.components.palette.palette_view,self__.app),om.core.build.call(null,sudoku.components.board.board_view,self__.app));
});
sudoku.core.t25147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25149){var self__ = this;
var _25149__$1 = this;return self__.meta25148;
});
sudoku.core.t25147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25149,meta25148__$1){var self__ = this;
var _25149__$1 = this;return (new sudoku.core.t25147(self__.owner,self__.app,self__.sudoku_app_view,meta25148__$1));
});
sudoku.core.__GT_t25147 = (function __GT_t25147(owner__$1,app__$1,sudoku_app_view__$1,meta25148){return (new sudoku.core.t25147(owner__$1,app__$1,sudoku_app_view__$1,meta25148));
});
}
return (new sudoku.core.t25147(owner,app,sudoku_app_view,null));
});
sudoku.core.main = (function main(){return om.core.root.call(null,sudoku.core.sudoku_app_view,sudoku.appstate.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map