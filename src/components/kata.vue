<template>
    <div>
        <router-link :to="{ name: 'kataList', query: {levelIndex: levelIndex}}">Katas list</router-link>
        <span v-if="nextKata">
            <button @click="goNextKata">Next Kata</button>
        </span>
        <span v-if="nextLevel">
            <button @click="goNextLevel">Next Level</button>
        </span>
        <span v-if="!isInCurrentKata">
            <button @click="goCurrentKata">Keep on tack, go to your current Kata</button>
        </span>
        <h1>Kata {{kataIndex + 1}}/{{kataTotal}} for {{level.name}}</h1>
        <div id="kataBoard" style="width: 400px"></div>
        <historyTable :status="status" :description="currentKata.description" :showUndoMove="false"></historyTable>
    </div>
</template>

<script>
    import chessTainerHelper from 'core/chessTainerHelper';
    import historyTable from 'components/historyTable';
    import katas from 'data/katas';
    import ChessBoard from 'chessboardjs';
    import chess from 'chess.js';
    
    export default {
        components: {
            historyTable
        },
        data() {
            return {
                currentKata: {},
                status: '',
                levelIndex: 0,
                level: {},
                kataIndex: 0,
                kataTotal: 0,
                nextKata: false,
                nextLevel: false,
                squareToHighlight: ''
            }
        },
        methods: {
            onDragStart(source, piece, position, orientation) {
                // do not pick up pieces if the game is over
                // only pick up pieces for the side to move
                if (this.getCurrentGame.game_over() === true ||
                    (this.getCurrentGame.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (this.getCurrentGame.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
            },
            makeComputerMove() {
                if(this.currentKata.userMoves.length === (this.currentKata.currentMove + 1)) {
                    if(this.kataIndex + 1 < this.kataTotal){
                        this.nextKata = true;
                    }
                    else {
                        this.nextLevel = true;
                    }
                }

                // game over
                if (!this.currentKata.computerMoves[this.currentKata.currentMove]) return;

                var move = this.getCurrentGame.move(this.currentKata.computerMoves[this.currentKata.currentMove]);
                this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen());
                this.currentKata.currentMove++;
                
                if(this.getConfigurations.highlightPiece) {
                    // highlight black's move
                    this.removeHighlights('black');
                    this.getCurrentBoard.boardElement.find('.square-' + move.from).addClass('highlight-black');
                    this.squareToHighlight = move.to;
                }

                this.updateStatus();
            },
            onDrop(source, target) {
                if(this.getConfigurations.highlightLegalMoves) chessTainerHelper.removeGreySquares(this.getCurrentBoard.boardId);

                // see if the move is legal
                var move = this.getCurrentGame.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                });

                // illegal move
                if (move === null) return 'snapback';
                
                if(move.san !== this.currentKata.userMoves[this.currentKata.currentMove]){
                    this.getCurrentGame.undo();
                    return 'snapback';
                }

                this.updateStatus();

                if(this.getConfigurations.highlightPiece) {
                    // highlight white's move
                    this.removeHighlights('white');
                    this.getCurrentBoard.boardElement.find('.square-' + source).addClass('highlight-white');
                    this.getCurrentBoard.boardElement.find('.square-' + target).addClass('highlight-white');
                }

                // make random legal move for black
                window.setTimeout(this.makeComputerMove, 250);
            },
            updateStatus() {
                var status = '';

                var moveColor = 'White';
                if (this.getCurrentGame.turn() === 'b') {
                    moveColor = 'Black';
                }

                // checkmate?
                if (this.getCurrentGame.in_checkmate() === true) {
                    status = 'Game over, ' + moveColor + ' is in checkmate.';
                }

                // draw?
                else if (this.getCurrentGame.in_draw() === true) {
                    status = 'Game over, drawn position';
                }

                // game still on
                else {
                    status = moveColor + ' to move';

                    // check?
                    if (this.getCurrentGame.in_check() === true) {
                        status += ', ' + moveColor + ' is in check';
                    }
                }

                this.status = status;
            },
            loadBoard() {
                this.level = katas.levels[this.levelIndex];
                this.currentKata = this.level.katas[this.kataIndex];
                this.kataTotal = this.level.katas.length;

                var cfg = {
                    draggable: true,
                    position: this.currentKata.fen,
                    onDragStart: this.onDragStart,
                    onDrop: this.onDrop,
                    onSnapEnd: chessTainerHelper.onSnapEnd.bind(this)
                };

                if(this.getConfigurations.highlightLegalMoves) {
                    cfg.onMouseoutSquare = chessTainerHelper.onMouseoutSquare.bind(this);
                    cfg.onMouseoverSquare = chessTainerHelper.onMouseoverSquare.bind(this);
                }

                if(this.getConfigurations.highlightPiece) {
                    cfg.onMoveEnd = this.onMoveEnd;
                }

                const currentBoard = {
                    boardObject: ChessBoard('kataBoard', cfg),
                    boardElement: $('#kataBoard'),
                    boardId: 'kataBoard'
                }

                this.$store.dispatch('updateCurrentBoard', currentBoard);
                this.getCurrentGame.load(this.currentKata.fen);
                this.updateStatus();
            },
            goNextKata() {
                this.nextKata = false;
                this.kataIndex++;
                this.$store.dispatch('updateKata', this.kataIndex);
                this.loadBoard();
            },
            goCurrentKata() {
                this.levelIndex = this.getCurrentLevel;
                this.kataIndex = this.getCurrentKata;
                this.loadBoard();
            },
            goNextLevel() {
                this.nextLevel = false;
                this.kataIndex = 0;
                this.levelIndex++;
                this.$store.dispatch('updateLevel', this.levelIndex);
                this.loadBoard();
            },
            clearValues() {
                this.levelIndex = this.$route.params.levelIndex >= 0 ? parseInt(this.$route.params.levelIndex) : this.getCurrentLevel;
                this.kataIndex = this.$route.params.kataIndex >= 0 ? parseInt(this.$route.params.kataIndex) : this.getCurrentKata;
                this.$store.dispatch('updateCurrentGame', new chess());
                this.currentKata = {};
                this.status = '';
                this.level = {};
                this.kataTotal = 0;
                this.nextKata = false;
                this.nextLevel = false;
            },
            onMoveEnd() {
                this.getCurrentBoard.boardElement.find('.square-' + this.squareToHighlight)
                    .addClass('highlight-black');
            },
            removeHighlights(color) {
                this.getCurrentBoard.boardElement.find('.square-55d63')
                    .removeClass('highlight-' + color);
            }
        },
        computed: {
            isInCurrentKata() {
                return this.levelIndex === this.getCurrentLevel && this.kataIndex === this.getCurrentKata;
            },
            getCurrentLevel(){
                return this.$store.getters.getCurrentLevel;
            },
            getCurrentKata(){
                return this.$store.getters.getCurrentKata;
            },
            getCurrentBoard() {
                return this.$store.getters.getCurrentBoard;
            },
            getCurrentGame() {
                return this.$store.getters.getCurrentGame;
            },
            getConfigurations() {
                return this.$store.getters.getConfigurations;
            }
        },
        created() {
            this.clearValues();
        },
        mounted() {
            this.loadBoard();
        }
    }

</script>