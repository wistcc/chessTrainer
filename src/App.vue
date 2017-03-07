<template>
  <div class="container theme-showcase">
    <div class="row jumbotron customHeader">
      <h1>Chess Trainer</h1>
      Accumulated points: 0
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>