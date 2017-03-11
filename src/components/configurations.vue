<template>
    <div>
        <h1 class="text-primary">Settings</h1>
        <form class="form-horizontal">
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                        <input type="checkbox" v-model="configurations.validateLegalMoves" @click="updateConfigurations"> Validate legal moves (on sandbox)
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                        <input type="checkbox" v-model="configurations.trashPiece" :disabled="configurations.validateLegalMoves" @click="updateConfigurations">Remove pieces when they are dropped outside the board (on sandbox)
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                        <input type="checkbox" v-model="configurations.highlightLegalMoves" :disabled="!configurations.validateLegalMoves" @click="updateConfigurations">Highlight legal moves
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                        <input type="checkbox"v-model="configurations.highlightPiece" :disabled="!configurations.validateLegalMoves" @click="updateConfigurations">Piece highlighting
                        </label>
                    </div>
                </div>
            </div>
        </form>
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