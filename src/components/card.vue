<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "card"
}
</script>

<style scoped>

</style>