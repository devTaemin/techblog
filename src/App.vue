<template>
  <div id='app'>
    <a href="https://github.com/devTaemin" target="_blank" rel="noopener">
      <img class="mainpic" alt="Vue logo" src="./assets/mainpic.jpeg">
    </a>
    <Menubar></Menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import Menubar from './components/Menubar.vue'

export default {
  name: 'App',
  components: {
    Menubar,
  }
}
</script>

<style>
:root {
  --green: #42b983;
  --width: 1024px;
}

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

.mainpic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  animation: rotate_image 10s linear infinite;
  transform-origin: 50% 50%;
  box-sizing: border-box;
}

.mainpic:hover {
  transform: scale(1, 1);
  transition: transform .5s;
  border: 1px solid var(--green);
}

@keyframes rotate_image {
  100% {
    transform: rotate(360deg);
  }
}
</style>
