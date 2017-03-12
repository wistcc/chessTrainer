<template>
    <div class="row">
        <div class="col-md-12">
            <h1 class="text-primary">Settings</h1>
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="name" class="col-sm-2 control-label">Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" placeholder="Name" v-model="configurations.name" @blur="updateConfigurations">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="configurations.validateLegalMoves" @click="updateConfigurations">Validate legal moves (on sandbox)
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
        <div class="col-md-12">
            <div class="alert alert-warning text-center clickableDiv">
                <i class="glyphicon glyphicon-info-sign"></i> All data of this site is currently being saved on your browser. If the cache is deleted, the data would be deleted too.
            </div>
        </div>
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