<template>
  <AllArticle />
</template>

<script>
import AllArticle from './components/AllArticle.vue'

export default {
  name: 'App',
  components: {
    AllArticle,
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
