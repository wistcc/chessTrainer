<template>
    <div class="row">
        <router-link to="/">Dashboard</router-link>
        <div class="col-md-4" v-for="(kata, index) in kataList">
            <span v-if="getCurrentLevel > levelIndex || getCurrentKata >= index">
                <h3>{{kata.description}}</h3>
                <router-link :to="{ name: 'kata', params: {levelIndex: levelIndex, kataIndex: index}}">
                    <div :id="'board' + index" style="width: 250px"></div>
                </router-link>
            </span>
            <span v-else>            
                <h3>{{kata.description}} (BLOCKED)</h3>
                <div :id="'board' + index" style="width: 250px"></div>
            </span>
        </div>
    </div>
</template>

<script>
    import katas from 'data/katas';
    import ChessBoard from 'chessboardjs';

    export default {
        data() {
            return {
                levelIndex: this.$route.query.levelIndex,
                kataList: {}
            }
        },
        computed: {
            getCurrentLevel(){
                return this.$store.getters.getCurrentLevel;
            },
            getCurrentKata(){
                return this.$store.getters.getCurrentKata;
            }
        },
        created(){
            this.kataList = katas.levels[this.levelIndex].katas;
        },
        mounted() {
            for(let i =0; i < this.kataList.length; i++){            
                ChessBoard('board' + i, this.kataList[i].fen);
            }
        }
    }
</script>