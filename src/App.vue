<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <div class="app-container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
  &-container {
    width: 375px;
    margin: 0 auto;
    height: 100%;
  }
}
</style>
