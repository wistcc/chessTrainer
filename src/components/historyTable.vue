<template>
    <div>
        <div class="row">
            <h3 class="text-primary">{{title}}</h3>
            <h3>{{description}}</h3>
            <h3>Status: {{status}}</h3>
        </div>
        <div class="row" v-if="showUndoMove">
            <button class="btn btn-warning" @click="undoMove"><i class="glyphicon glyphicon-menu-left"></i>Undo move</button>
        </div>
        <div class="row" v-if="pgn">
            <h3>PGN</h3>
            <span>{{pgn}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['status', 'pgn', 'title', 'description', 'playingWithComputer', "showUndoMove"],
        methods: {
            undoMove() {
                this.$store.dispatch('undoMove', this.playingWithComputer || false);
            }
        }
    }
</script>