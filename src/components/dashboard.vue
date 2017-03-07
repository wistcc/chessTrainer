<template>
    <div class="container">
        <div class="row">
            <h1>Katas</h1>
            <div class="col-md-4">
                <h3>Beginner</h3>
                <router-link :to="{ name: 'kataList', query: {level: 'beginner'}}">
                    <div id="beginnerBoard" style="width: 250px"></div>
                </router-link>
            </div>
            <div class="col-md-4">
                <h3>Intermediate</h3>
                <router-link :to="{ name: 'kataList', query: {level: 'intermediate'}}">
                    <div id="intermediateBoard" style="width: 250px"></div>
                </router-link>
            </div>
            <div class="col-md-4">
                <h3>Advanced</h3>
                <router-link :to="{ name: 'kataList', query: {level: 'advanced'}}">
                    <div id="advancedBoard" style="width: 250px"></div>
                </router-link>
            </div>
        </div>
        <div class="row">
            <h1>Learning by practice</h1>
            <div class="col-md-6">
                <h3>Play vs Computer</h3>
                <router-link to="computer">
                    <div id="computerBoard" style="width: 300px"></div>
                </router-link>
            </div>
            <div class="col-md-6">
                <h3>SandBox</h3>
                <router-link to="sandbox">
                    <div id="sandboxBoard" style="width: 300px"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import ChessBoard from 'chessboardjs';
    export default {
        mounted(){
            ChessBoard('beginnerBoard', 'rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w - - 1 19'); //White to move and mate in 1.
            ChessBoard('intermediateBoard', '1r1q1rk1/p1p2pp1/2pp1n1p/8/N2bPPbB/3B4/P1P3PP/1R2QR1K w - - 2 16'); //White to move and win.
            ChessBoard('advancedBoard', '5rk1/Q4pp1/7p/3p4/bq1r1P2/3B2P1/P3R2P/4R1K1 w - - 7 30'); //White to move and win.
            ChessBoard('computerBoard', 'start');
            ChessBoard('sandboxBoard', {  d6: 'bK',  d4: 'wP',  e4: 'wK'});
        }
    }
</script>