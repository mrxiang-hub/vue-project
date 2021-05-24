<template>
  <div class="brotherToBrother">
    <Brother1></Brother1>
    <Brother2></Brother2>
  </div>
</template>

<script>
import Brother1 from './brother1';
import Brother2 from './brother2';

export default {
  name: "brotherToBrother",
  components: {
    Brother1,
    Brother2
  }
}
</script>

<style lang="scss" scoped>
.brotherToBrother {

}
</style>