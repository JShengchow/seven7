<template>
  <div class="welcome">
    <div class="welcome-wrap">
      <div class="welcome-text">请输入唯一码</div>
      <div class="welcome-des">唯一码为进入系统唯一标识</div>
      <van-field
        ref="realInputRef"
        class="welcome-input"
        v-model="uniqueCode"
        :maxlength="uniqueCodeLength"
        :formatter="formatter"
        placeholder="请输入唯一码"
      />
      <div class="welcome-code" @click="handleCodeClick">
        <div
          :class="[
            'welcome-code-item',
            isFilled(index) && 'is-filled',
            isCurrent(index) && 'is-current'
          ]"
          v-for="(item, index) in uniqueCodeShow"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <van-button
        color="linear-gradient(135.00deg, rgb(198, 157, 255) 0%,rgb(79, 118, 255) 100%)"
        block
        @click="handleLogin"
      >
        <div class="welcome-button">
          立即体验
          <icon-ri-arrow-right-line />
        </div>
      </van-button>
    </div>
  </div>
</template>

<script setup>
const realInputRef = ref(null)
const handleCodeClick = () => {
  realInputRef.value.focus()
}
const uniqueCode = ref('')
const formatter = value => value.replace(/[^\w]/gi, '')
const isFilled = index => {
  return index < uniqueCode.value.length
}
const isCurrent = index => {
  return index === uniqueCode.value.length
}

const uniqueCodeLength = 4
const uniqueCodeShow = computed(() => {
  const arr = new Array(uniqueCodeLength).fill('')
  return arr.map((v, index) => {
    return uniqueCode.value[index]
  })
})

const router = useRouter()
const handleLogin = () => {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped>
.welcome {
  font-family: '思源黑体';
  color: #191c32;
  padding: 20px;
  &-text {
    font-size: 32px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0px;
    text-align: left;
  }
  &-des {
    font-size: 12px;
    color: #9395a4;
  }
  &-input {
    opacity: 0;
    height: 0;
    line-height: 0;
    padding: 0;
  }
  &-code {
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
    &-item {
      margin-right: 20px;
      width: 65px;
      height: 65px;
      line-height: 65px;
      text-align: center;
      background-color: #ebeff1;
      font-size: 32px;
      border-radius: 8px;
      font-weight: 400;
      border: 1.5px solid #ebeff1;
    }
  }
  &-button {
    display: flex;
    align-items: center;
  }
}
.is-filled {
  background-color: #fff;
}
.is-current {
  border: 1.5px solid #81d1c5;
  box-shadow: 0px 20px 40px 0px rgba(55, 62, 125, 0.1);
}
</style>
