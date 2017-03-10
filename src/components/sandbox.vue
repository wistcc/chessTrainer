<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <div id="board" style="width: 400px"></div>
        <historyTable :status="status" :pgn="pgn"></historyTable>
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
                if (this.getCurrentGame.game_over() === true ||
                    (this.getCurrentGame.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (this.getCurrentGame.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
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