<template>
  <div class="dashboard">
    <div class="card-list">
      <router-link to="/funs/weight" class="card-item">
        <FunCard title="体重记录" bg-color="#1BBC9B" icon="icon-tizhongcheng" />
      </router-link>
      <router-link to="/funs/weight" class="card-item">
        <FunCard title="记录月经" bg-color="#19B5FE" icon="icon-tizhongcheng" />
      </router-link>
      <div class="card-item">
        <FunCard title="点滴我们" disabled icon="icon-dashijianguanli" />
      </div>
      <div class="card-item">
        <FunCard title="照片墙" disabled icon="icon-zhaopian1" />
      </div>
      <div class="card-item">
        <FunCard title="敬请期待" icon="icon-gengduo" />
      </div>
    </div>
    <router-link to="/" class="operator go-home">
      <van-icon name="wap-home-o" />
    </router-link>
    <div class="operator share" @click="handleShare">
      <van-icon name="share-o" />
    </div>
    <div class="operator exit" @click="handleLogout">
      <van-icon name="close" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Dialog, Notify } from 'vant'

import { useRouter } from 'vue-router'
import FunCard from './components/FunCard.vue'

const router = useRouter()
const handleLogout = () => {
  Dialog.confirm({
    title: '提示',
    message: '确认注销登录吗?'
  })
    .then(() => {
      localStorage.removeItem('token')
      router.replace({ name: 'home' })
    })
    .catch(() => {
      // on cancel
    })
}
const handleShare = () => {
  Notify({ type: 'success', message: '链接已复制，快去分享给ta吧！' })
}
</script>

<style lang="scss" scoped>
.dashboard {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-image: linear-gradient(to top, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 1rem;
}

.card-list {
  padding-top: 20vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card-item {
    width: 48%;
    margin-bottom: 1rem;
  }
}
.operator {
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  font-size: 2rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  padding-top: 0.2rem;
  background-color: #fff;
}
.go-home {
  right: 2rem;
  bottom: 2rem;
}

.exit {
  right: 2rem;
  bottom: 6rem;
}
.share {
  right: 2rem;
  bottom: 10rem;
}
</style>
