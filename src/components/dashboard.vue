<template>
    <div class="container">
        <div class="row">
            <h1>Tactics</h1>
            <div class="col-md-4">
                <h3>Beginner</h3>
                <div id="beginnerBoard" style="width: 250px"></div>
            </div>
            <div class="col-md-4">
                <h3>Intermediate</h3>
                <div id="intermediateBoard" style="width: 250px"></div>
            </div>
            <div class="col-md-4">
                <h3>Advanced</h3>
                <div id="advancedBoard" style="width: 250px"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
            </div>
            <div class="col-md-4">
            </div>
            <div class="col-md-4">
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
        }
    }
</script>