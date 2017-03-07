<template>
  <div class="container theme-showcase">
    <div class="row jumbotron customHeader">
      <h1>Chess Trainer</h1>
      Accumulated points: {{points}}
    </div>
    <router-view @incrementPoints="incrementPoints"></router-view>
  </div>
</template>

<script>
  import localStorageService from 'core/localStorageService';

  export default {
    data() {
      return {
        points: localStorageService.get().points
      }
    },
    methods:{
      incrementPoints(points){
        this.points = points;
      }
    }
  }

</script>