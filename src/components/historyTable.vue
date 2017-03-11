<template>
    <div>
        <div class="row">
            <h3>Status: {{status}}</h3>
        </div>
        <div class="row" v-if="showUndoMove">
            <button @click="undoMove">Undo move</button>
        </div>
        <div class="row" v-if="pgn">
            <h3>PGN</h3>
            <span>{{pgn}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['status', 'pgn', 'playingWithComputer', "showUndoMove"],
        methods: {
            undoMove() {
                this.$store.dispatch('undoMove', this.playingWithComputer || false);
            }
        }
    }
</script>