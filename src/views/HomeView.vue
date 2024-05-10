<template>
  <div class="HomeView">
    <van-button type="primary" @click="handleClickMini">Mini</van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const handleClickMini = () => {
  showToast('No need to import showToast')
}
</script>

<style lang="scss" scoped></style>
