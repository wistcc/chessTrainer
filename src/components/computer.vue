<template>
    <div>
        <div id="board" style="width: 400px"></div>
        <historyTable :turn="turn" :pgn="pgn"></historyTable>
    </div>
</template>

<script>
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
                turn: 'White',
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
                this.updateStatus();
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

                // make random legal move for black
                window.setTimeout(this.makeRandomMove, 250);
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
                }

                // draw?
                else if (this.game.in_draw() === true) {
                    status = 'Game over, drawn position';
                }

                // game still on
                else {
                    status = moveColor + ' to move';

                    // check?
                    if (this.game.in_check() === true) {
                    status += ', ' + moveColor + ' is in check';
                    }
                }

                //statusEl.html(status);
                this.turn = moveColor;
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