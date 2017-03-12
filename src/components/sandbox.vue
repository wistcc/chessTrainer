<template>
    <div>
        <div class="col-md-6">
            <div id="sandboxBoard" style="width: 400px"></div>
        </div>
        <div class="col-md-6">
            <historyTable :status="status" title="Sandbox" :pgn="pgn" :showUndoMove="getConfigurations.validateLegalMoves"></historyTable>
        </div>
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
                squareToHighlight: ''
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
                if (this.getCurrentGame.game_over() === true ||
                    (this.getCurrentGame.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (this.getCurrentGame.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
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

                chessTainerHelper.updateStatus.call(this, blindfoldMode);

                if(this.getConfigurations.highlightPiece) {
                    if(this.getCurrentGame.turn() === 'w'){
                        // highlight balck's move
                        this.removeHighlights('black');
                        this.getCurrentBoard.boardElement.find('.square-' + source).addClass('highlight-black');
                        this.getCurrentBoard.boardElement.find('.square-' + target).addClass('highlight-black');
                    }
                    else {
                        // highlight white's move
                        this.removeHighlights('white');
                        this.getCurrentBoard.boardElement.find('.square-' + source).addClass('highlight-white');
                        this.getCurrentBoard.boardElement.find('.square-' + target).addClass('highlight-white');
                    }
                }
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
                //onSnapEnd: chessTainerHelper.onSnapEnd.bind(this)
            };

            if(this.getConfigurations.validateLegalMoves) {
                cfg.onDragStart = this.onDragStart;
                cfg.onDrop = this.onDrop;
            }

            if(this.getConfigurations.trashPiece) {
                cfg.dropOffBoard = 'trash';
            }

            if(this.getConfigurations.highlightLegalMoves) {
                cfg.onMouseoutSquare = chessTainerHelper.onMouseoutSquare.bind(this);
                cfg.onMouseoverSquare = chessTainerHelper.onMouseoverSquare.bind(this);
            }
            
            const currentBoard = {
                boardObject: ChessBoard('sandboxBoard', cfg),
                boardElement: $('#sandboxBoard'),
                boardId: 'sandboxBoard'
            }

            this.$store.dispatch('updateCurrentBoard', currentBoard);
            chessTainerHelper.updateStatus.call(this, blindfoldMode);
        }
    }

</script>