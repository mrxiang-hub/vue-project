<template>
  <input :value="att" @input="emitVal" type="text">
</template>

<script>
export default {
  name: "simple",
  props: {
    att: String
  },
  methods: {
    emitVal($event) {
      this.$emit('input', $event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>