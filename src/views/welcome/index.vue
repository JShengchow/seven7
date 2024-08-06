<template>
  <div class="welcome">
    <div class="welcome-wrap">
      <div class="welcome-clock">
        <h1 @click="toogleSecond">{{ currentTime }}</h1>
        <h3>{{ todayDate }}</h3>
      </div>
      <div class="welcome-search">
        <el-select
          v-model="selectedEngine"
          placeholder="选择搜索引擎"
          @change="handleEngineChange"
          style="width: 100px"
        >
          <el-option label="百度" value="baidu"></el-option>
          <el-option label="谷歌" value="google"></el-option>
          <el-option label="必应" value="bing"></el-option>
        </el-select>
        <el-input
          autofocus
          ref="inputSearchRef"
          v-model="inputSearch"
          style="width: 240px"
          placeholder="搜索"
          @keyup.enter="handleSearch"
        >
          <template #suffix> <el-button text :icon="Search" @click="handleSearch" /> </template
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElInput, ElButton } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import dayjs from 'dayjs'

const inputSearch = ref('')
const inputSearchRef = ref(null)
const selectedEngine = ref('baidu') // 默认搜索引擎为百度

const handleEngineChange = () => {
  inputSearchRef.value.focus()
}

const handleSearch = () => {
  const query = encodeURIComponent(inputSearch.value.trim())
  if (!query) return
  let url = ''
  if (selectedEngine.value === 'baidu') {
    url = `https://www.baidu.com/s?wd=${query}`
  } else if (selectedEngine.value === 'google') {
    url = `https://www.google.com/search?q=${query}`
  } else if (selectedEngine.value === 'bing') {
    url = `https://www.bing.com/search?q=${query}`
  }
  inputSearch.value = ''
  window.open(url, '_blank')
}

const isShowSecond = ref(false)
const timeFormat = computed(() => (isShowSecond.value ? 'HH:mm:ss' : 'HH:mm'))

const toogleSecond = () => {
  isShowSecond.value = !isShowSecond.value
}

// 获取当前时间
const currentTime = ref(dayjs().format(timeFormat.value))
// 获取今日日期
const todayDate = ref(dayjs().format('YYYY 年 MM 月 DD 日'))

// 启动一个定时器来更新时间
onMounted(() => {
  setInterval(() => {
    currentTime.value = dayjs().format(timeFormat.value)
    todayDate.value = dayjs().format('YYYY 年 MM 月 DD 日')
  }, 1000)
})
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;
  height: 100%;
  .welcome-clock {
    text-align: center;
  }
  .welcome-search {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
