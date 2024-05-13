<template>
  <div class="home">
    <div class="home-container">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="records-o" :to="{ name: page.TEXT_RECORD }"></van-tabbar-item>
      <van-tabbar-item icon="wap-home-o" :to="{ name: page.DATE_RECORD }"></van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name: page.SETTING }"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import page from '@/router/page'

const active = ref(1)
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  background-image: linear-gradient(to top, #fed6e3 0%, #a8edea 100%);
  &-container {
    height: calc(100% - 50px);
    overflow: auto;
  }
}
</style>
