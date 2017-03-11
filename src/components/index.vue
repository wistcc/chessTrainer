<template>
    <div>
        <div id="header" class="row">
            <img src="/assets/wK.png" alt="Black King">
            <h1>Chess Trainer</h1>
            <h3>Learn chess by practicing it.</h3>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h2>Katas</h2>
                <p>Try interactive katas to improve your skills in different areas of the game.</p>
                <p>
                    <router-link class="btn btn-primary" :to="{ name: 'kata', params: {levelIndex: getCurrentLevel, kataIndex: getCurrentKata}}">
                        Go to katas »
                    </router-link>
                </p>
            </div>
            <div class="col-md-4">
                <h2>VS Computer</h2>
                <p>Play versus the computer to get a sense of how to play real games.</p>
                <p>
                    <router-link class="btn btn-primary" to="computer">VS Computer »</router-link>
                </p>
            </div>
            <div class="col-md-4">
                <h2>Sandbox</h2>
                <p>Take this area as a real board where you can create whatever scenario you want.</p>
                <p>
                    <router-link class="btn btn-primary" to="sandbox">VS Sandbox »</router-link>
                </p>
            </div>
        </div>
        <div id="quote" class="row">
            <h1>“All that matters on the chess board is good moves.”</h1>
            <h1>– Bobby Fischer</h1>
        </div>
    </div>
</template>

<script>
    export default {
      computed: {
          getCurrentLevel(){
              return this.$store.getters.getCurrentLevel;
          },
          getCurrentKata(){
              return this.$store.getters.getCurrentKata;
          }
      }
    }

</script>

<style>
    #header {
        background-image: url('/assets/header.jpg');
        height: 420px;
        margin: 0px auto;
        padding-top: 118px;
        text-align: center;
        color: white;
        margin-bottom: 100px;
    }
    #quote {
        background-image: url('/assets/quote.jpg');
        height: 300px;
        margin: 0px auto;
        padding-top: 90px;
        text-align: center;
        color: white;
        margin-top: 100px;
    }
</style>