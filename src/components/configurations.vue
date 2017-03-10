<template>
    <div>
        <router-link to="/">Dashboard</router-link>
        <h1>Settings</h1>
        <input type="checkbox" v-model="configurations.validateLegalMoves" @click="updateConfigurations">Validate legal moves (on sandbox)</input>
        <input type="checkbox" v-model="configurations.trashPiece" :disabled="configurations.validateLegalMoves" @click="updateConfigurations">Remove pieces when they are dropped outside the board (on sandbox)</input>
        <input type="checkbox" v-model="configurations.highlightLegalMoves" :disabled="!configurations.validateLegalMoves" @click="updateConfigurations">Highlight legal moves</input>
        <input type="checkbox" v-model="configurations.highlightPiece" :disabled="!configurations.validateLegalMoves" @click="updateConfigurations">Piece highlighting</input>
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
                this.$store.dispatch('updateConfigurations', this.configurations);
            }
        }
    }
</script>