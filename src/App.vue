<template>
  <div id='app'>
    <img alt="Vue logo" src="./assets/logo.png">
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './routers/Home.vue'
// import Algorithm from './routers/Algorithm.vue'
import Menubar from './components/Menubar.vue'

export default {
  name: 'App',
  components: {
    Menubar,
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
  margin-top: 30px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
