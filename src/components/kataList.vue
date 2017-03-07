<template>
    <div class="row">
        <div class="col-md-4" v-for="(kata, index) in kataList">
            <span v-if="chessTrainer.level[kata.level] > index">
                <h3>{{kata.description}}</h3>
                <router-link :to="{ name: 'kata', params: {level: kata.level, kataNumber: index}}">
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
    import localStorageService from 'core/localStorageService';
    import katas from 'data/katas';
    import ChessBoard from 'chessboardjs';

    export default {
        data() {
            return {
                kataList: katas[this.$route.query.level],
                chessTrainer: {}
            }
        },
        created(){
            this.chessTrainer = localStorageService.get();
        },
        mounted() {
            for(let i =0; i < this.kataList.length; i++){            
                ChessBoard('board' + i, this.kataList[i].fen);
            }
        }
    }
</script>