<template>
    <div>
        <notification :message="message"></notification>
        <div id="board" style="width: 400px"></div>
        <historyTable :status="status" :pgn="pgn"></historyTable>
    </div>
</template>

<script>
    import historyTable from 'components/historyTable';
    import notification from 'components/notification';
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
                pgn: '',
                message: ''
            }
        },
        methods: {
            onDragStart(source, piece, position, orientation) {
                // do not pick up pieces if the game is over
                // only pick up pieces for White
                if (this.game.game_over() === true ||
                    (this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
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

                this.updateStatus();
            },            
            onSnapEnd() {
                // update the board position after the piece snap 
                // for castling, en passant, pawn promotion
                this.board.position(this.game.fen());
            },
            updateStatus() {
                var status = '';

                var moveColor = 'White';
                if (this.game.turn() === 'b') {
                    moveColor = 'Black';
                }

                // checkmate?
                if (this.game.in_checkmate() === true) {
                    status = 'Game over, ' + moveColor + ' is in checkmate.';
                    this.message = status;
                }

                // draw?
                else if (this.game.in_draw() === true) {
                    status = 'Game over, drawn position';
                    this.message = status;
                }

                // game still on
                else {
                    status = moveColor + ' to move';

                    // check?
                    if (this.game.in_check() === true) {
                        var msg = ', ' + moveColor + ' is in check';
                        this.message = msg;
                        status += msg;
                    }
                }

                //statusEl.html(status);
                this.status = status;
                this.pgn = this.game.pgn();
            }
        },
        mounted(){
            var cfg = {
                draggable: true,
                position: 'start',
                onDragStart: this.onDragStart,
                onDrop: this.onDrop,
                onSnapEnd: this.onSnapEnd
            };

            this.board = ChessBoard('board', cfg);
            this.updateStatus();
        }
    }

</script>