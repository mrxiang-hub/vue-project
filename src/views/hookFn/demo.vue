<template>
  <div></div>
</template>

<script>
export default {
  name: "demo",
  beforeCreate() {
    console.log('beforeCreate， 子');
  },
  created() {
    console.log('created， 子');
  },
  beforeMount() {
    console.log('beforeMount， 子');
  },
  mounted() {
    console.log('mounted， 子');
  }
}
</script>

<style scoped>

</style>