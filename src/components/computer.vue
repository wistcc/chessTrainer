<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <div id="computerBoard" style="width: 400px"></div>
        <historyTable :status="status" :pgn="pgn" :playingWithComputer="true"></historyTable>
    </div>
</template>

<script>
    import chessTainerHelper from 'core/chessTainerHelper';
    import historyTable from 'components/historyTable';
    import ChessBoard from 'chessboardjs';
    import chess from 'chess.js';
    
    export default {
        components: {
            historyTable
        },
        data() {
            return {
                status: '',
                pgn: '',
                squareToHighlight: {}
            }
        },
        computed: {
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
        methods: {
            onDragStart(source, piece, position, orientation) {
                // do not pick up pieces if the game is over
                // only pick up pieces for White
                if (this.getCurrentGame.in_checkmate() === true || this.getCurrentGame.in_draw() === true ||
                    piece.search(/^b/) !== -1) {
                    return false;
                }
            },
            makeRandomMove() {
                var possibleMoves = this.getCurrentGame.moves({
                    verbose: true
                });

                // game over
                if (possibleMoves.length === 0) return;

                var randomIndex = Math.floor(Math.random() * possibleMoves.length);
                var move = possibleMoves[randomIndex];
                this.getCurrentGame.move(move.san);
                this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen());
                
                if(this.getConfigurations.highlightPiece) {
                    // highlight black's move
                    this.removeHighlights('black');
                    this.getCurrentBoard.boardElement.find('.square-' + move.from).addClass('highlight-black');
                    this.squareToHighlight = move.to;
                }                

                chessTainerHelper.updateStatus.call(this);
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
                chessTainerHelper.updateStatus.call(this);

                if(this.getConfigurations.highlightPiece) {
                    // highlight white's move
                    this.removeHighlights('white');
                    this.getCurrentBoard.boardElement.find('.square-' + source).addClass('highlight-white');
                    this.getCurrentBoard.boardElement.find('.square-' + target).addClass('highlight-white');
                }

                // make random legal move for black
                window.setTimeout(this.makeRandomMove, 250);
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
        created() {
            this.$store.dispatch('updateCurrentGame', new chess());
        },
        mounted(){
            var cfg = {
                draggable: true,
                position: 'start',
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
                boardObject: ChessBoard('computerBoard', cfg),
                boardElement: $('#computerBoard'),
                boardId: 'computerBoard'
            }

            this.$store.dispatch('updateCurrentBoard', currentBoard);
            chessTainerHelper.updateStatus.call(this);
        }
    }

</script>