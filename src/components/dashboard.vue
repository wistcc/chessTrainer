<template>
    <div class="container">
        <div class="row">
            <h1>Katas</h1>
            <div class="col-md-4">
                <h3>Beginner</h3>
                <router-link :to="{ name: 'kata', params: {level: 1}}">
                    <div id="beginnerBoard" style="width: 250px"></div>
                </router-link>
            </div>
            <div class="col-md-4">
                <h3>Intermediate</h3>
                <router-link :to="{ name: 'kata', params: {level: 2}}">
                    <div id="intermediateBoard" style="width: 250px"></div>
                </router-link>
            </div>
            <div class="col-md-4">
                <h3>Advanced</h3>
                <router-link :to="{ name: 'kata', params: {level: 3}}">
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
            ChessBoard('beginnerBoard', 'rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w – – 1 19');
            ChessBoard('intermediateBoard', 'rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w – – 1 19');
            ChessBoard('advancedBoard', 'rn5k/pp1r2pp/2p1Q2B/8/8/2N3K1/PPP2PP1/R4R2 w – – 1 19');
            ChessBoard('computerBoard', 'start');
            ChessBoard('sandboxBoard', {  d6: 'bK',  d4: 'wP',  e4: 'wK'});
        }
    }
</script>