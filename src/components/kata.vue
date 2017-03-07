<template>
    <div>
        <div id="board" style="width: 400px"></div>
    </div>
</template>

<script>
    import ChessBoard from 'chessboardjs';
    import chess from 'chess.js';
    
    export default {
        data() {
            return {
                game: new chess(),
                currentKata: {
                    fen: '6k1/pp2p2p/3b2p1/7q/3p4/1P1P3P/P1N2rP1/1Q3R1K b - - 0 1',
                    currentMove: 0,
                    userMoves: ['Qe5', 'Rh2+', 'Qxg3#'],
                    computerMoves: ['g3', 'Kg1']
                }
            }
        },
        methods: {
            onDragStart(source, piece, position, orientation) {
                // do not pick up pieces if the game is over
                // only pick up pieces for the side to move
                if (this.game.game_over() === true ||
                    (this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                    (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                    return false;
                }
            },
            makeComputerMove() {
                // game over
                if (this.currentKata.computerMoves[this.currentKata.currentMove] === null) return;

                this.game.move(this.currentKata.computerMoves[this.currentKata.currentMove]);
                this.board.position(this.game.fen());
                this.currentKata.currentMove++;
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
                
                if(move.san !== this.currentKata.userMoves[this.currentKata.currentMove]){
                    this.game.undo();
                    return 'snapback';
                }

                this.updateStatus();

                // make random legal move for black
                window.setTimeout(this.makeComputerMove, 250);
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

                console.log(status);
                /*fenEl.html(this.game.fen());
                pgnEl.html(this.game.pgn());*/
            }
        },
        mounted(){
            var cfg = {
                draggable: true,
                position: this.currentKata.fen,
                onDragStart: this.onDragStart,
                onDrop: this.onDrop,
                onSnapEnd: this.onSnapEnd
            };
            this.board = ChessBoard('board', cfg);
            this.game.load(this.currentKata.fen);

            this.updateStatus();
        }
    }

</script>