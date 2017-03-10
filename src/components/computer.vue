<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <div id="board" style="width: 400px"></div>
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
                pgn: ''
            }
        },
        computed: {
            getCurrentBoard() {
                return this.$store.getters.getCurrentBoard;
            },
            getCurrentGame() {
                return this.$store.getters.getCurrentGame;
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
                var possibleMoves = this.getCurrentGame.moves();

                // game over
                if (possibleMoves.length === 0) return;

                var randomIndex = Math.floor(Math.random() * possibleMoves.length);
                this.getCurrentGame.move(possibleMoves[randomIndex]);
                this.getCurrentBoard.position(this.getCurrentGame.fen());
                chessTainerHelper.updateStatus.call(this);
            },
            onDrop(source, target) {
                // see if the move is legal
                var move = this.getCurrentGame.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                });

                // illegal move
                if (move === null) return 'snapback';
                chessTainerHelper.updateStatus.call(this);

                // make random legal move for black
                window.setTimeout(this.makeRandomMove, 250);
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

            this.$store.dispatch('updateCurrentBoard', ChessBoard('board', cfg));
            chessTainerHelper.updateStatus.call(this);
        }
    }

</script>