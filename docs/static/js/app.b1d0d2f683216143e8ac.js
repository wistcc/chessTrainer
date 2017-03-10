webpackJsonp([1,2],[,,,,,function(t,e,r){"use strict";(function(t){var r=function(){this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen())},n=function(){var t="",e="White";"b"===this.getCurrentGame.turn()&&(e="Black"),this.getCurrentGame.in_checkmate()===!0?t="Game over, "+e+" is in checkmate.":this.getCurrentGame.in_draw()===!0?t="Game over, drawn position":(t=e+" to move",this.getCurrentGame.in_check()===!0&&(t+=", "+e+" is in check")),this.status=t,this.pgn=this.getCurrentGame.pgn()},a=function(t,e){var r=this.getCurrentGame.moves({square:t,verbose:!0});if(0!==r.length){s(t,this.getCurrentBoard.boardId);for(var n=0;n<r.length;n++)s(r[n].to,this.getCurrentBoard.boardId)}},i=function(t,e){o(this.getCurrentBoard.boardId)},o=function(e){t("#"+e+" .square-55d63").css("background","")},s=function(e,r){var n=t("#"+r+" .square-"+e),a="#a9a9a9";n.hasClass("black-3c85d")===!0&&(a="#696969"),n.css("background",a)};e.a={onSnapEnd:r,updateStatus:n,onMouseoutSquare:i,onMouseoverSquare:a,removeGreySquares:o}}).call(e,r(2))},,,,,,function(t,e,r){var n=r(0)(r(25),r(67),null,null);t.exports=n.exports},function(t,e){t.exports={levels:[{name:"Beginner",katas:[{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]}]},{name:"Intermediate",katas:[{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]}]},{name:"Advanced",katas:[{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]},{description:"Black mates in 4",fen:"6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1",currentMove:0,userMoves:["Qe5","Rh2+","Qxg3#"],computerMoves:["g3","Kg1"]}]}]}},,,,function(t,e,r){"use strict";var n=r(4),a=r(74),i=r(62),o=r.n(i),s=r(64),u=r.n(s),c=r(63),h=r.n(c),l=r(60),d=r.n(l),g=r(65),v=r.n(g),p=r(61),f=r.n(p);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"dashboard",component:o.a},{path:"/kataList",name:"kataList",component:u.a},{path:"/kata",name:"kata",component:h.a},{path:"/computer",name:"computer",component:d.a},{path:"/sandbox",name:"sandbox",component:v.a},{path:"/configurations",name:"configurations",component:f.a}]})},function(t,e,r){"use strict";var n=r(4),a=r(76),i=r(29),o=i.a.get();n.a.use(a.a);var s=function(){i.a.set(u.chessTrainer)},u={chessTrainer:{points:o.points,currentLevel:o.currentLevel,currentKata:o.currentKata,configurations:{validateLegalMoves:o.configurations.validateLegalMoves,trashPiece:o.configurations.trashPiece,highlightLegalMoves:o.configurations.highlightLegalMoves,highlightPiece:o.configurations.highlightPiece}},currentGame:{},currentBoard:{boardObject:{},boardElement:{},boardId:""}},c={UPDATE_KATA:function(t,e){t.chessTrainer.currentKata=e,t.chessTrainer.points+=10,s()},UPDATE_LEVEL:function(t,e){t.chessTrainer.currentLevel=e,t.chessTrainer.points+=60,t.chessTrainer.currentKata=0,s()},UPDATE_CONFIGURATIONS:function(t,e){e.validateLegalMoves?(t.chessTrainer.configurations.trashPiece=!1,t.chessTrainer.configurations=e):(t.chessTrainer.configurations.highlightLegalMoves=!1,t.chessTrainer.configurations.highlightPiece=!1),s()},UPDATE_CURRENT_GAME:function(t,e){t.currentGame=e},UPDATE_CURRENT_BOARD:function(t,e){t.currentBoard=e},UNDO_MOVE:function(t,e){t.currentGame.undo(),t.currentBoard.boardObject.position(t.currentGame.fen()),e&&(t.currentGame.undo(),t.currentBoard.boardObject.position(t.currentGame.fen()))}},h={updateKata:function(t,e){(0,t.commit)("UPDATE_KATA",e)},updateLevel:function(t,e){(0,t.commit)("UPDATE_LEVEL",e)},updateConfigurations:function(t,e){(0,t.commit)("UPDATE_CONFIGURATIONS",e)},updateCurrentGame:function(t,e){(0,t.commit)("UPDATE_CURRENT_GAME",e)},updateCurrentBoard:function(t,e){(0,t.commit)("UPDATE_CURRENT_BOARD",e)},undoMove:function(t,e){(0,t.commit)("UNDO_MOVE",e)}},l={getPoints:function(t){return t.chessTrainer.points},getCurrentLevel:function(t){return t.chessTrainer.currentLevel},getCurrentKata:function(t){return t.chessTrainer.currentKata},getConfigurations:function(t){return t.chessTrainer.configurations},getCurrentGame:function(t){return t.currentGame},getCurrentBoard:function(t){return t.currentBoard},getCurrentBoardElement:function(t){return t.currentBoardElement},getCurrentBoardId:function(t){return t.currentBoardId}};e.a=new a.a.Store({state:u,mutations:c,actions:h,getters:l})},function(t,e){},function(t,e){},function(t,e,r){r(59);var n=r(0)(r(21),r(66),null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{getPoints:function(){return this.$store.getters.getPoints}}}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=r(11),i=r.n(a),o=r(1),s=r.n(o),u=r(6),c=r.n(u);e.default={components:{historyTable:i.a},data:function(){return{status:"",pgn:"",squareToHighlight:""}},computed:{getCurrentBoard:function(){return this.$store.getters.getCurrentBoard},getCurrentGame:function(){return this.$store.getters.getCurrentGame},getConfigurations:function(){return this.$store.getters.getConfigurations}},methods:{onDragStart:function(t,e,r,n){if(this.getCurrentGame.in_checkmate()===!0||this.getCurrentGame.in_draw()===!0||e.search(/^b/)!==-1)return!1},makeRandomMove:function(){var t=this.getCurrentGame.moves({verbose:!0});if(0!==t.length){var e=Math.floor(Math.random()*t.length),r=t[e];this.getCurrentGame.move(r.san),this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen()),this.getConfigurations.highlightPiece&&(this.removeHighlights("black"),this.getCurrentBoard.boardElement.find(".square-"+r.from).addClass("highlight-black"),this.squareToHighlight=r.to),n.a.updateStatus.call(this)}},onDrop:function(t,e){if(this.getConfigurations.highlightLegalMoves&&n.a.removeGreySquares(this.getCurrentBoard.boardId),null===this.getCurrentGame.move({from:t,to:e,promotion:"q"}))return"snapback";n.a.updateStatus.call(this),this.getConfigurations.highlightPiece&&(this.removeHighlights("white"),this.getCurrentBoard.boardElement.find(".square-"+t).addClass("highlight-white"),this.getCurrentBoard.boardElement.find(".square-"+e).addClass("highlight-white")),window.setTimeout(this.makeRandomMove,250)},onMoveEnd:function(){this.getCurrentBoard.boardElement.find(".square-"+this.squareToHighlight).addClass("highlight-black")},removeHighlights:function(t){this.getCurrentBoard.boardElement.find(".square-55d63").removeClass("highlight-"+t)}},created:function(){this.$store.dispatch("updateCurrentGame",new c.a)},mounted:function(){var e={draggable:!0,position:"start",onDragStart:this.onDragStart,onDrop:this.onDrop,onSnapEnd:n.a.onSnapEnd.bind(this)};this.getConfigurations.highlightLegalMoves&&(e.onMouseoutSquare=n.a.onMouseoutSquare.bind(this),e.onMouseoverSquare=n.a.onMouseoverSquare.bind(this)),this.getConfigurations.highlightPiece&&(e.onMoveEnd=this.onMoveEnd);var r={boardObject:s()("computerBoard",e),boardElement:t("#computerBoard"),boardId:"computerBoard"};this.$store.dispatch("updateCurrentBoard",r),n.a.updateStatus.call(this)}}}).call(e,r(2))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{configurations:function(){return this.$store.getters.getConfigurations}},methods:{updateConfigurations:function(){this.$store.dispatch("updateConfigurations",this.configurations)}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12),a=r.n(n),i=r(1),o=r.n(i);e.default={data:function(){return{levels:a.a.levels}},computed:{getCurrentLevel:function(){return this.$store.getters.getCurrentLevel}},mounted:function(){for(var t=0;t<this.levels.length;t++){var e=this.levels[t];o()("board"+e.name,e.katas[0].fen)}o()("computerBoard","start"),o()("sandboxBoard",{d6:"bK",d4:"wP",e4:"wK"})}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["status","pgn","description","playingWithComputer","showUndoMove"],data:function(){return{showUndoMoveButton:this.showUndoMove||!0}},methods:{undoMove:function(){this.$store.dispatch("undoMove",this.playingWithComputer||!1)}}}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=r(11),i=r.n(a),o=r(12),s=r.n(o),u=r(1),c=r.n(u),h=r(6),l=r.n(h);e.default={components:{historyTable:i.a},data:function(){return{currentKata:{},status:"",levelIndex:0,level:{},kataIndex:0,kataTotal:0,nextKata:!1,nextLevel:!1,squareToHighlight:""}},methods:{onDragStart:function(t,e,r,n){if(this.getCurrentGame.game_over()===!0||"w"===this.getCurrentGame.turn()&&e.search(/^b/)!==-1||"b"===this.getCurrentGame.turn()&&e.search(/^w/)!==-1)return!1},makeComputerMove:function(){if(this.currentKata.userMoves.length===this.currentKata.currentMove+1&&(this.kataIndex+1<this.kataTotal?this.nextKata=!0:this.nextLevel=!0),this.currentKata.computerMoves[this.currentKata.currentMove]){var t=this.getCurrentGame.move(this.currentKata.computerMoves[this.currentKata.currentMove]);this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen()),this.currentKata.currentMove++,this.getConfigurations.highlightPiece&&(this.removeHighlights("black"),this.getCurrentBoard.boardElement.find(".square-"+t.from).addClass("highlight-black"),this.squareToHighlight=t.to),this.updateStatus()}},onDrop:function(t,e){this.getConfigurations.highlightLegalMoves&&n.a.removeGreySquares(this.getCurrentBoard.boardId);var r=this.getCurrentGame.move({from:t,to:e,promotion:"q"});return null===r?"snapback":r.san!==this.currentKata.userMoves[this.currentKata.currentMove]?(this.getCurrentGame.undo(),"snapback"):(this.updateStatus(),this.getConfigurations.highlightPiece&&(this.removeHighlights("white"),this.getCurrentBoard.boardElement.find(".square-"+t).addClass("highlight-white"),this.getCurrentBoard.boardElement.find(".square-"+e).addClass("highlight-white")),void window.setTimeout(this.makeComputerMove,250))},updateStatus:function(){var t="",e="White";"b"===this.getCurrentGame.turn()&&(e="Black"),this.getCurrentGame.in_checkmate()===!0?t="Game over, "+e+" is in checkmate.":this.getCurrentGame.in_draw()===!0?t="Game over, drawn position":(t=e+" to move",this.getCurrentGame.in_check()===!0&&(t+=", "+e+" is in check")),this.status=t},loadBoard:function(){this.level=s.a.levels[this.levelIndex],this.currentKata=this.level.katas[this.kataIndex],this.kataTotal=this.level.katas.length;var e={draggable:!0,position:this.currentKata.fen,onDragStart:this.onDragStart,onDrop:this.onDrop,onSnapEnd:n.a.onSnapEnd.bind(this)};this.getConfigurations.highlightLegalMoves&&(e.onMouseoutSquare=n.a.onMouseoutSquare.bind(this),e.onMouseoverSquare=n.a.onMouseoverSquare.bind(this)),this.getConfigurations.highlightPiece&&(e.onMoveEnd=this.onMoveEnd);var r={boardObject:c()("kataBoard",e),boardElement:t("#kataBoard"),boardId:"kataBoard"};this.$store.dispatch("updateCurrentBoard",r),this.getCurrentGame.load(this.currentKata.fen),this.updateStatus()},goNextKata:function(){this.nextKata=!1,this.kataIndex++,this.$store.dispatch("updateKata",this.kataIndex),this.loadBoard()},goCurrentKata:function(){this.levelIndex=this.getCurrentLevel,this.kataIndex=this.getCurrentKata,this.loadBoard()},goNextLevel:function(){this.nextLevel=!1,this.kataIndex=0,this.levelIndex++,this.$store.dispatch("updateLevel",this.levelIndex),this.loadBoard()},clearValues:function(){this.levelIndex=this.$route.params.levelIndex>=0?parseInt(this.$route.params.levelIndex):this.getCurrentLevel,this.kataIndex=this.$route.params.kataIndex>=0?parseInt(this.$route.params.kataIndex):this.getCurrentKata,this.$store.dispatch("updateCurrentGame",new l.a),this.currentKata={},this.status="",this.level={},this.kataTotal=0,this.nextKata=!1,this.nextLevel=!1},onMoveEnd:function(){this.getCurrentBoard.boardElement.find(".square-"+this.squareToHighlight).addClass("highlight-black")},removeHighlights:function(t){this.getCurrentBoard.boardElement.find(".square-55d63").removeClass("highlight-"+t)}},computed:{isInCurrentKata:function(){return this.levelIndex===this.getCurrentLevel&&this.kataIndex===this.getCurrentKata},getCurrentLevel:function(){return this.$store.getters.getCurrentLevel},getCurrentKata:function(){return this.$store.getters.getCurrentKata},getCurrentBoard:function(){return this.$store.getters.getCurrentBoard},getCurrentGame:function(){return this.$store.getters.getCurrentGame},getConfigurations:function(){return this.$store.getters.getConfigurations}},created:function(){this.clearValues()},mounted:function(){this.loadBoard()}}}).call(e,r(2))},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12),a=r.n(n),i=r(1),o=r.n(i);e.default={data:function(){return{levelIndex:this.$route.query.levelIndex,kataList:{}}},computed:{getCurrentLevel:function(){return this.$store.getters.getCurrentLevel},getCurrentKata:function(){return this.$store.getters.getCurrentKata}},created:function(){this.kataList=a.a.levels[this.levelIndex].katas},mounted:function(){for(var t=0;t<this.kataList.length;t++)o()("board"+t,this.kataList[t].fen)}}},function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=r(11),i=r.n(a),o=r(1),s=r.n(o),u=r(6),c=r.n(u);e.default={components:{historyTable:i.a},data:function(){return{status:"",pgn:"",squareToHighlight:""}},computed:{getCurrentBoard:function(){return this.$store.getters.getCurrentBoard},getCurrentGame:function(){return this.$store.getters.getCurrentGame},getConfigurations:function(){return this.$store.getters.getConfigurations}},methods:{onDragStart:function(t,e,r,n){if(this.getCurrentGame.game_over()===!0||"w"===this.getCurrentGame.turn()&&e.search(/^b/)!==-1||"b"===this.getCurrentGame.turn()&&e.search(/^w/)!==-1)return!1},onDrop:function(t,e){if(this.getConfigurations.highlightLegalMoves&&n.a.removeGreySquares(this.getCurrentBoard.boardId),null===this.getCurrentGame.move({from:t,to:e,promotion:"q"}))return"snapback";n.a.updateStatus.call(this),this.getConfigurations.highlightPiece&&("w"===this.getCurrentGame.turn()?(this.removeHighlights("black"),this.getCurrentBoard.boardElement.find(".square-"+t).addClass("highlight-black"),this.getCurrentBoard.boardElement.find(".square-"+e).addClass("highlight-black")):(this.removeHighlights("white"),this.getCurrentBoard.boardElement.find(".square-"+t).addClass("highlight-white"),this.getCurrentBoard.boardElement.find(".square-"+e).addClass("highlight-white")))},removeHighlights:function(t){this.getCurrentBoard.boardElement.find(".square-55d63").removeClass("highlight-"+t)}},created:function(){this.$store.dispatch("updateCurrentGame",new c.a)},mounted:function(){var e={draggable:!0,position:"start"};this.getConfigurations.validateLegalMoves&&(e.onDragStart=this.onDragStart,e.onDrop=this.onDrop),this.getConfigurations.trashPiece&&(e.dropOffBoard="trash"),this.getConfigurations.highlightLegalMoves&&(e.onMouseoutSquare=n.a.onMouseoutSquare.bind(this),e.onMouseoverSquare=n.a.onMouseoverSquare.bind(this));var r={boardObject:s()("sandboxBoard",e),boardElement:t("#sandboxBoard"),boardId:"sandboxBoard"};this.$store.dispatch("updateCurrentBoard",r),n.a.updateStatus.call(this)}}}).call(e,r(2))},function(t,e,r){"use strict";var n=r(30),a=r.n(n),i=r(31),o=r.n(i),s="chessTrainer",u={points:0,currentLevel:0,currentKata:0,configurations:{validateLegalMoves:!0,trashPiece:!0,highlightLegalMoves:!0,highlightPiece:!0}},c=function(t){var e=o()(JSON.parse(t)).sort(),r=o()(u).sort();return a()(e)===a()(r)},h=function(){var t=localStorage.getItem(s);return null!==t&&c(t)?JSON.parse(t):l()},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return localStorage.setItem(s,a()(t)),t};e.a={get:h,set:l}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e,r){var n=r(0)(r(22),r(71),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(23),r(68),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(24),r(70),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(26),r(73),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(27),r(72),null,null);t.exports=n.exports},function(t,e,r){var n=r(0)(r(28),r(69),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container theme-showcase"},[r("div",{staticClass:"row jumbotron customHeader"},[r("h1",[t._v("Chess Trainer")]),t._v("\n    Accumulated points: "+t._s(t.getPoints)+"\n  ")]),t._v(" "),r("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.description?r("div",{staticClass:"row"},[r("h1",[t._v(t._s(t.description))])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("h1",[t._v("Status: "+t._s(t.status))])]),t._v(" "),t.showUndoMoveButton?r("div",{staticClass:"row"},[r("button",{on:{click:t.undoMove}},[t._v("Undo move")])]):t._e(),t._v(" "),t.pgn?r("div",{staticClass:"row"},[r("h1",[t._v("PGN")]),t._v(" "),r("span",[t._v(t._s(t.pgn))])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("h1",[t._v("Settings")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.configurations.validateLegalMoves,expression:"configurations.validateLegalMoves"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.configurations.validateLegalMoves)?t._i(t.configurations.validateLegalMoves,null)>-1:t.configurations.validateLegalMoves},on:{click:t.updateConfigurations,__c:function(e){var r=t.configurations.validateLegalMoves,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a?o<0&&(t.configurations.validateLegalMoves=r.concat(i)):o>-1&&(t.configurations.validateLegalMoves=r.slice(0,o).concat(r.slice(o+1)))}else t.configurations.validateLegalMoves=a}}}),t._v("Validate legal moves (on sandbox)"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.configurations.trashPiece,expression:"configurations.trashPiece"}],attrs:{type:"checkbox",disabled:t.configurations.validateLegalMoves},domProps:{checked:Array.isArray(t.configurations.trashPiece)?t._i(t.configurations.trashPiece,null)>-1:t.configurations.trashPiece},on:{click:t.updateConfigurations,__c:function(e){var r=t.configurations.trashPiece,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a?o<0&&(t.configurations.trashPiece=r.concat(i)):o>-1&&(t.configurations.trashPiece=r.slice(0,o).concat(r.slice(o+1)))}else t.configurations.trashPiece=a}}}),t._v("Remove pieces when they are dropped outside the board (on sandbox)"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.configurations.highlightLegalMoves,expression:"configurations.highlightLegalMoves"}],attrs:{type:"checkbox",disabled:!t.configurations.validateLegalMoves},domProps:{checked:Array.isArray(t.configurations.highlightLegalMoves)?t._i(t.configurations.highlightLegalMoves,null)>-1:t.configurations.highlightLegalMoves},on:{click:t.updateConfigurations,__c:function(e){var r=t.configurations.highlightLegalMoves,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a?o<0&&(t.configurations.highlightLegalMoves=r.concat(i)):o>-1&&(t.configurations.highlightLegalMoves=r.slice(0,o).concat(r.slice(o+1)))}else t.configurations.highlightLegalMoves=a}}}),t._v("Highlight legal moves"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.configurations.highlightPiece,expression:"configurations.highlightPiece"}],attrs:{type:"checkbox",disabled:!t.configurations.validateLegalMoves},domProps:{checked:Array.isArray(t.configurations.highlightPiece)?t._i(t.configurations.highlightPiece,null)>-1:t.configurations.highlightPiece},on:{click:t.updateConfigurations,__c:function(e){var r=t.configurations.highlightPiece,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a?o<0&&(t.configurations.highlightPiece=r.concat(i)):o>-1&&(t.configurations.highlightPiece=r.slice(0,o).concat(r.slice(o+1)))}else t.configurations.highlightPiece=a}}}),t._v("Piece highlighting")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("div",{staticStyle:{width:"400px"},attrs:{id:"sandboxBoard"}}),t._v(" "),r("historyTable",{attrs:{status:t.status,pgn:t.pgn}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("router-link",{attrs:{to:"configurations"}},[t._v("\n            Settings\n        ")])],1),t._v(" "),r("div",{staticClass:"row"},[r("h1",[t._v("Katas")]),t._v(" "),t._l(t.levels,function(e,n){return r("div",{staticClass:"col-md-4"},[t.getCurrentLevel>=n?r("div",[r("h3",[t._v(t._s(e.name))]),t._v(" "),r("router-link",{attrs:{to:{name:"kataList",query:{levelIndex:n}}}},[r("div",{staticStyle:{width:"250px"},attrs:{id:"board"+e.name}})])],1):r("div",[r("h3",[t._v(t._s(e.name)+" (BLOCKED)")]),t._v(" "),r("div",{staticStyle:{width:"250px"},attrs:{id:"board"+e.name}})])])})],2),t._v(" "),r("div",{staticClass:"row"},[r("h1",[t._v("Learning by practice")]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("h3",[t._v("Play vs Computer")]),t._v(" "),r("router-link",{attrs:{to:"computer"}},[r("div",{staticStyle:{width:"300px"},attrs:{id:"computerBoard"}})])],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("h3",[t._v("SandBox")]),t._v(" "),r("router-link",{attrs:{to:"sandbox"}},[r("div",{staticStyle:{width:"300px"},attrs:{id:"sandboxBoard"}})])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),r("div",{staticStyle:{width:"400px"},attrs:{id:"computerBoard"}}),t._v(" "),r("historyTable",{attrs:{status:t.status,pgn:t.pgn,playingWithComputer:!0}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),t._l(t.kataList,function(e,n){return r("div",{staticClass:"col-md-4"},[t.getCurrentLevel>t.levelIndex||t.getCurrentKata>=n?r("span",[r("h3",[t._v(t._s(e.description))]),t._v(" "),r("router-link",{attrs:{to:{name:"kata",params:{levelIndex:t.levelIndex,kataIndex:n}}}},[r("div",{staticStyle:{width:"250px"},attrs:{id:"board"+n}})])],1):r("span",[r("h3",[t._v(t._s(e.description)+" (BLOCKED)")]),t._v(" "),r("div",{staticStyle:{width:"250px"},attrs:{id:"board"+n}})])])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:{name:"kataList",query:{levelIndex:t.levelIndex}}}},[t._v("Katas list")]),t._v(" "),t.nextKata?r("span",[r("button",{on:{click:t.goNextKata}},[t._v("Next Kata")])]):t._e(),t._v(" "),t.nextLevel?r("span",[r("button",{on:{click:t.goNextLevel}},[t._v("Next Level")])]):t._e(),t._v(" "),t.isInCurrentKata?t._e():r("span",[r("button",{on:{click:t.goCurrentKata}},[t._v("Keep on tack, go to your current Kata")])]),t._v(" "),r("h1",[t._v("Kata "+t._s(t.kataIndex+1)+"/"+t._s(t.kataTotal)+" for "+t._s(t.level.name))]),t._v(" "),r("div",{staticStyle:{width:"400px"},attrs:{id:"kataBoard"}}),t._v(" "),r("historyTable",{attrs:{status:t.status,description:t.currentKata.description,showUndoMove:!1}})],1)},staticRenderFns:[]}},,,,,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),a=r(20),i=r.n(a),o=r(17),s=r(16),u=r(18),c=(r.n(u),r(19));r.n(c);new n.a({store:o.a,el:"#app",router:s.a,render:function(t){return t(i.a)}})}],[78]);
//# sourceMappingURL=app.b1d0d2f683216143e8ac.js.map