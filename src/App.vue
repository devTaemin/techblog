<template>
  <div id='app'>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/algorithm">Algorithm</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './routers/Home.vue'
// import Algorithm from './routers/Algorithm.vue'

export default {
  name: 'App',
  components: {
    // Home,
    // Algorithm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
