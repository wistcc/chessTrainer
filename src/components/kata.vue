<template>
    <div>
        <span v-if="nextKata">
            <button @click="goNextKata">Next Kata</button>
        </span>
        <h1>Kata {{kataNumber + 1}}/{{kataTotal}} for {{level}}</h1>
        <div id="board" style="width: 400px"></div>
        <historyTable :status="status" :description="currentKata.description"></historyTable>
    </div>
</template>

<script>
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
                game: new chess(),
                currentKata: {},
                status: '',
                level: this.$route.params.level,
                kataNumber: parseInt(this.$route.params.kataNumber) || 0,
                kataTotal: 0,
                nextKata: false
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

                this.status = status;

                if((this.currentKata.userMoves.length - 1) === this.currentKata.currentMove) {
                    this.nextKata = true;
                }
            },
            loadBoard(level) {
                this.currentKata = katas[level][this.kataNumber];
                this.kataTotal = katas[level].length;

                var cfg = {
                    draggable: true,
                    position: this.currentKata.fen,
                    onDragStart: this.onDragStart,
                    onDrop: this.onDrop,
                    onSnapEnd: this.onSnapEnd
                };

                this.board = ChessBoard('board', cfg);
                this.game.load(this.currentKata.fen);
            },
            goNextKata() {
                this.kataNumber++;
                this.resetValues();
                this.loadBoard(this.level);
            },
            resetValues(){
                this.nextKata = false;
                this.status = '';
            }
        },
        mounted(){
            this.loadBoard(this.$route.params.level);
            this.updateStatus();
        }
    }

</script>