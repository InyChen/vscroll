<template>
  <div id="app">
    <div class="scroll-zone" v-scroll>
      <div class="scroll-row" v-for="i in 100" :key="i">
        row:{{i+1}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.scroll-zone {
  height: 300px;
  width: 200px;
  border: 1px solid #ddd;
  overflow: auto;
}

.scroll-row {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 12px;
  color: #000;
  border-bottom: 1px solid #eee;
}


.scroll-beauty-content {
  position: relative;
  overflow: auto;
}

.scroll-beauty-bar {
  position: absolute;
  z-index: 19;
  top: 0;
  right: 0;
  width: 6px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity .5s;
}

.scroll-beauty-content:hover .scroll-beauty-bar {
  opacity: 1;
}

 ::-webkit-scrollbar {
  width: 0;
}

 ::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

 ::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}

 ::-webkit-scrollbar-button {
  background-color: rgba(0, 0, 0, 0);
  width: 20px;
}

 ::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}
</style>
