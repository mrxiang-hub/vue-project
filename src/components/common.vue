<template>
  <div>
    老子是公共组件
    <button @click="showAlert" v-drag>点击</button>
    {{ str | upperCase }}
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: "common",
  data() {
    return {
      str: 'abc'
    }
  },
  methods: {
    showAlert() {
      Vue.commonMethods();
    }
  }
}
</script>

<style scoped>

</style>