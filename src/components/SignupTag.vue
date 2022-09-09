<template>
  <button class="col d-flex p-2 mb-4 justify-content-center align-items-center">
    <!-- <i v-show="clickTag" class="bi bi-check-lg"></i> -->
    <span @click="tagSelectBtn" style="width: 100%; height: 100%">{{
      favTag
    }}</span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.backgrondBox
  background-color: #EEF6FF
  border: none
  padding: 60px 90px

.col
    border: none
    background-color: lightgrey
    height: 120px
    border-radius: 15px
    font-size: 22px
</style>
