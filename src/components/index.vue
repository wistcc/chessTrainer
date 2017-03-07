<template>
    <div>
        <div id="board" style="width: 400px"></div>
    </div>
</template>

<script>
    import ChessBoard from 'chessboardjs';
    import chess from 'chess.js';
    var board;
    var game = new chess('rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w – – 1 19');
    export default {
        data() {
            return {                
            }
        },
        mounted(){
            // do not pick up pieces if the game is over
            // only pick up pieces for the side to move
            var onDragStart = function(source, piece, position, orientation) {
                if (game.game_over() === true ||
                    (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
            };

            var onDrop = function(source, target) {
                // see if the move is legal
                var move = game.move({
                    from: source,
                    to: target,
                    promotion: 'q' // NOTE: always promote to a queen for example simplicity
                });

                // illegal move
                if (move === null) return 'snapback';

                updateStatus();
            };

            // update the board position after the piece snap 
            // for castling, en passant, pawn promotion
            var onSnapEnd = function() {
                board.position(game.fen());
            };

            var updateStatus = function() {
                var status = '';

                var moveColor = 'White';
                if (game.turn() === 'b') {
                    moveColor = 'Black';
                }

                // checkmate?
                if (game.in_checkmate() === true) {
                    status = 'Game over, ' + moveColor + ' is in checkmate.';
                }

                // draw?
                else if (game.in_draw() === true) {
                    status = 'Game over, drawn position';
                }

                // game still on
                else {
                    status = moveColor + ' to move';

                    // check?
                    if (game.in_check() === true) {
                    status += ', ' + moveColor + ' is in check';
                    }
                }

                console.log(status);
                /*fenEl.html(game.fen());
                pgnEl.html(game.pgn());*/
            };

            var cfg = {
                draggable: true,
                position: 'rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w – – 1 19',
                onDragStart: onDragStart,
                onDrop: onDrop,
                onSnapEnd: onSnapEnd
            };
            board = ChessBoard('board', cfg);

            updateStatus();
        }
    }

</script>