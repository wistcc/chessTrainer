<template>
    <div class="container">
        <div class="row">
            <h1>Katas</h1>
            <div class="col-md-4" v-for="(level, index) in levels">
                <div v-if="getCurrentLevel >= index">
                    <h3>{{level.name}}</h3>
                    <router-link :to="{ name: 'kataList', query: {levelIndex: index}}">
                        <div :id="'board' + level.name" style="width: 250px"></div>
                    </router-link>
                </div>
                <div v-else>
                    <h3>{{level.name}} (BLOCKED)</h3>
                    <div :id="'board' + level.name" style="width: 250px"></div>
                </div>
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
    import katas from 'data/katas';
    import ChessBoard from 'chessboardjs';

    export default {
        data() {
            return {
                levels: katas.levels
            }
        },
        computed: {
            getCurrentLevel(){
                return this.$store.getters.getCurrentLevel;
            }
        },
        mounted(){
            for(let i =0; i < this.levels.length; i++){
                var level = this.levels[i]; 
                ChessBoard('board' + level.name, level.katas[0].fen);
            }
            
            ChessBoard('computerBoard', 'start');
            ChessBoard('sandboxBoard', {  d6: 'bK',  d4: 'wP',  e4: 'wK'});
        }
    }
</script>