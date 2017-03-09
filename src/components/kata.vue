<template>
    <div>
        <router-link :to="{ name: 'kataList', query: {levelIndex: levelIndex}}">Katas list</router-link>
        <span v-if="nextKata">
            <button @click="goNextKata">Next Kata</button>
        </span>
        <span v-if="nextLevel">
            <button @click="goNextLevel">Next Level</button>
        </span>
        <span v-if="!isInCurrentKata">
            <button @click="goCurrentKata">Keep on tack, go to your current Kata</button>
        </span>
        <h1>Kata {{kataIndex + 1}}/{{kataTotal}} for {{level.name}}</h1>
        <div id="board" style="width: 400px"></div>
        <historyTable :status="status" :description="currentKata.description"></historyTable>
    </div>
</template>

<script>
    import chessTainerService from 'core/chessTainerService';
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
                levelIndex: 0,
                level: {},
                kataIndex: 0,
                kataTotal: 0,
                nextKata: false,
                nextLevel: false
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

                if(this.currentKata.userMoves.length === this.currentKata.currentMove) {
                    if(this.kataIndex + 1 < this.kataTotal){
                        this.nextKata = true;
                    }
                    else {
                        this.nextLevel = true;
                    }
                }
            },
            loadBoard() {
                this.level = katas.levels[this.levelIndex];
                this.currentKata = this.level.katas[this.kataIndex];
                this.kataTotal = this.level.katas.length;

                var cfg = {
                    draggable: true,
                    position: this.currentKata.fen,
                    onDragStart: this.onDragStart,
                    onDrop: this.onDrop,
                    onSnapEnd: chessTainerService.onSnapEnd.bind(this)
                };

                this.board = ChessBoard('board', cfg);
                this.game.load(this.currentKata.fen);
                this.updateStatus();
            },
            goNextKata() {
                this.nextKata = false;
                this.kataIndex++;
                this.$store.dispatch('updateKata', this.kataIndex);
                this.loadBoard();
            },
            goCurrentKata() {
                this.levelIndex = this.getCurrentLevel;
                this.kataIndex = this.getCurrentKata;
                this.loadBoard();
            },
            goNextLevel() {
                this.nextLevel = false;
                this.kataIndex = 0;
                this.levelIndex++;
                this.$store.dispatch('updateLevel', this.levelIndex);
                this.loadBoard();
            },
            clearValues() {
                this.levelIndex = this.$route.params.levelIndex >= 0 ? parseInt(this.$route.params.levelIndex) : this.getCurrentLevel;
                this.kataIndex = this.$route.params.kataIndex >= 0 ? parseInt(this.$route.params.kataIndex) : this.getCurrentKata;
                this.game = new chess();
                this.currentKata = {};
                this.status = '';
                this.level = {};
                this.kataTotal = 0;
                this.nextKata = false;
                this.nextLevel = false;
            }
        },
        computed: {
            isInCurrentKata() {
                return this.levelIndex === this.getCurrentLevel && this.kataIndex === this.getCurrentKata;
            },
            getCurrentLevel(){
                return this.$store.getters.getCurrentLevel;
            },
            getCurrentKata(){
                return this.$store.getters.getCurrentKata;
            }
        },
        mounted() {
            this.clearValues();
            this.loadBoard();
        }
    }

</script>