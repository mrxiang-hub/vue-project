<template>
  <div>
    <Simple v-model="val"/>
    <button @click="getData">点击</button>
  </div>
</template>

<script>
import Simple from './simple';

export default {
  name: "Dashboard",
  components: {
    Simple
  },
  data() {
    return {
      val: ''
    }
  },
  methods: {
    getData() {
      console.log(this.val);
    }
  }
}
</script>

<style scoped>

</style>