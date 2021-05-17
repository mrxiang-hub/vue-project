<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '@/components/layout';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
