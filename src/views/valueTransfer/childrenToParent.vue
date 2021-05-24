<template>
  <div class="childrenToParent">
    <Child @changeVal="handleChange"></Child>
    <div class="val">
      {{ txt }}
    </div>
  </div>
</template>

<script>
import Child from './child';

export default {
  name: "childrenToParent",
  components: {
    Child
  },
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    handleChange(str) {
      this.txt = str;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>