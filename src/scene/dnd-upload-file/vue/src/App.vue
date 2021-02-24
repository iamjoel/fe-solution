<template>
  <div id="app">
    <load></load>
  </div>
</template>

<script>
import load from './components/load.vue'

export default {
  name: 'App',
  components: {
    load,
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
