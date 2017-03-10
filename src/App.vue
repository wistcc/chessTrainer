<template>
  <div class="container theme-showcase">
    <div class="row jumbotron customHeader">
      <h1>Chess Trainer</h1>
      Accumulated points: {{getPoints}}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      getPoints(){
        return this.$store.getters.getPoints;
      }
    }
  }

</script>

<style>
  .highlight-white {
    -webkit-box-shadow: inset 0 0 3px 3px yellow;
    -moz-box-shadow: inset 0 0 3px 3px yellow;
    box-shadow: inset 0 0 3px 3px yellow;  
  }
  .highlight-black {
    -webkit-box-shadow: inset 0 0 3px 3px blue;
    -moz-box-shadow: inset 0 0 3px 3px blue;
    box-shadow: inset 0 0 3px 3px blue;  
  }
</style>