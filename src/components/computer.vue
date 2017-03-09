<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <div id="board" style="width: 400px"></div>
        <historyTable :status="status" :pgn="pgn"></historyTable>
    </div>
</template>

<script>
    import chessTainerService from 'core/chessTainerService';
    import historyTable from 'components/historyTable';
    import ChessBoard from 'chessboardjs';
    import chess from 'chess.js';
    
    export default {
        components: {
            historyTable
        },
        data() {
            return {
                game: new chess(),
                status: '',
                pgn: ''
            }
        },
        methods: {
            onDragStart(source, piece, position, orientation) {
                // do not pick up pieces if the game is over
                // only pick up pieces for White
                if (this.game.in_checkmate() === true || this.game.in_draw() === true ||
                    piece.search(/^b/) !== -1) {
                    return false;
                }
            },
            makeRandomMove() {
                var possibleMoves = this.game.moves();

                // game over
                if (possibleMoves.length === 0) return;

                var randomIndex = Math.floor(Math.random() * possibleMoves.length);
                this.game.move(possibleMoves[randomIndex]);
                this.board.position(this.game.fen());
                chessTainerService.updateStatus.call(this);
            },
            onDrop(source, target) {
                // see if the move is legal
                var move = this.game.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                });

                // illegal move
                if (move === null) return 'snapback';
                chessTainerService.updateStatus.call(this);

                // make random legal move for black
                window.setTimeout(this.makeRandomMove, 250);
            }
        },            
        mounted(){
            var cfg = {
                draggable: true,
                position: 'start',
                onDragStart: this.onDragStart,
                onDrop: this.onDrop,
                onSnapEnd: chessTainerService.onSnapEnd.bind(this)
            };

            this.board = ChessBoard('board', cfg);
            chessTainerService.updateStatus.call(this);
        }
    }

</script>