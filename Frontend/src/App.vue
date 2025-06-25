<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header }
}
</script>

<style>
body {
  margin: 0;
  background: #0f0f0f;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}
</style>
