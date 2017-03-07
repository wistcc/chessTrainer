<template>
    <div>
        <span v-for="(kata, index) in kataList">
            <router-link :to="{ name: 'kata', query: {level: 'beginner', kataNumber: index}}">
                <h3>{{kata.description}}</h3>
                <div :id="'board' + index" style="width: 250px"></div>
            </router-link>
        </span>
    </div>
</template>

<script>
    import katas from 'data/katas';
    import ChessBoard from 'chessboardjs';

    export default {
        data() {
            return {
                kataList: katas[this.$route.query.level]
            }
        },
        mounted() {
            for(let i =0; i < this.kataList.length; i++){            
                ChessBoard('board' + i, this.kataList[i].fen);
            }
        }
    }
</script>