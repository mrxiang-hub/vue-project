<template>
  <div id="app">
    <Common></Common>

    <Card>
      <template v-slot:header>
        <div>我是头部</div>
      </template>
      <template v-slot:center>
        <div>我是中间</div>
      </template>
      <template v-slot:footer>
        <div>我是脚部</div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/card";

export default {
  name: 'App',
  components: {
    Card
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
