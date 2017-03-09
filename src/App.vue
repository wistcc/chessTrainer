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