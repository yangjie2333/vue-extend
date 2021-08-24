<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="clickHandle">点击弹出内容</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    clickHandle () {
      this.$toast('天王盖地虎',5000)
    }
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
