<template>
  <div id="App">
    <Copy></Copy>
  </div>
</template>

<script>
import Copy from './components/copy.vue'

export default {
  name: 'App',
  components: {
    Copy
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
