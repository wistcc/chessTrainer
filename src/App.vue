<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Chess Trainer</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
                <router-link :to="{ name: 'kata', params: {levelIndex: getCurrentLevel, kataIndex: getCurrentKata}}">
                    Current Kata
                </router-link>
            </li>
            <li><router-link to="computer">VS Computer</router-link></li>
            <li><router-link to="sandbox">Sandbox</router-link></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kata list <span class="caret"></span></a>
              <ul class="dropdown-menu">
                  <li v-for="(level, index) in levels">
                      <router-link v-if="getCurrentLevel >= index" :to="{ name: 'kataList', query: {levelIndex: index}}">{{level.name}}</router-link>
                      <a v-else>{{level.name}} (BLOCKED)</a>
                </li>
              </ul>
            </li>
            <li><router-link to="configurations">Settings</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
              <li><a id="greetings"><i class="glyphicon glyphicon-flash"></i> {{getPoints}}</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
    import katas from 'data/katas';
    export default {
      data() {
          return {
            levels: katas.levels
          }
      },
      computed: {
          getPoints(){
              return this.$store.getters.getPoints;
          },
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
  #greetings {
    font-weight: bold;
  }
  #greetings:hover {
    color: #777;
  }
</style>