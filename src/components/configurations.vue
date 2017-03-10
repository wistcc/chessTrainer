<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <h1>Settings</h1>
        <input type="checkbox" v-model="configurations.validateLegalMoves">Validate legal moves (on sandbox)</input>
        <input type="checkbox" v-model="configurations.highlightLegalMoves">Highlight legal moves</input>
        <input type="checkbox" v-model="configurations.highlightPiece">Piece highlighting</input>
    </div>
</template>

<script>
    export default {
        computed: {
            configurations() {
                return this.$store.getters.getConfigurations;
            }
        },
        methods: {
            updateConfigurations() {
                this$store.dispatch('updateConfigurations', this.configurations);
            }
        }
    }
</script>