<template>
    <div>
        <div class="row">
            <h3 class="text-primary">{{title}}</h3>
            <h4>{{description}}</h4>
            <h4>Status: {{status}}</h4>
        </div>
        <div class="row" v-if="showUndoMove">
            <button class="btn btn-warning" @click="undoMove"><i class="glyphicon glyphicon-menu-left"></i>Undo move</button>
        </div>
        <div class="row" v-if="pgn">
            <h4>PGN</h4>
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