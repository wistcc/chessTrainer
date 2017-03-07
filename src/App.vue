<template>
  <div class="container theme-showcase">
    <div class="row jumbotron customHeader">
      <h1>Chess Trainer</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  .customHeader {
    background-color: transparent !important;
  }
</style>