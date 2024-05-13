<template>
  <div class="date-record-calendar">
    <van-calendar
      title="日历"
      ref="calendarRef"
      type="multiple"
      color="#FF5987"
      readonly
      row-height="48px"
      :default-date="historyDate"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="maxDate"
      :style="{ height: '400px' }"
    >
      <template v-slot:title>
        <div class="calendar-title" @click="scrollToDate()">周期概览</div>
      </template>
    </van-calendar>
  </div>
  <div class="date-record">
    <div class="date-record-header">记录</div>
    <div class="date-record-function">
      <div class="function-item">
        <div class="function-item_title">新增</div>
        <div class="function-item_des">增加一条新的记录</div>
      </div>
      <div class="function-item">
        <div class="function-item_title">修改</div>
        <div class="function-item_des">修改历史记录</div>
      </div>
    </div>
  </div>
  <van-cell-group inset>
    <van-cell title="最近一次" :value="recentDate" />
    <van-cell title="预测下一次" value="内容" label="基于历史平均预估" />
  </van-cell-group>
</template>

<script setup>
const minDate = new Date('1999/11/07')
const curMonth = new Date()
curMonth.setDate(1)
const offsetMonth = 2 * (60 * 60 * 24 * 30 * 1000)
const maxDate = new Date(curMonth.getTime() + offsetMonth)

const calendarRef = ref(null)

const scrollToDate = date => {
  // 默认为当月1号
  const targetDate = date ? new Date(date) : curMonth
  calendarRef.value?.scrollToDate(targetDate)
}

onMounted(() => {
  scrollToDate()
})

// const formatDate = date => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
const mockHistoryData = [
  ['2024/5/09', '2024/5/13'],
  ['2024/4/09', '2024/4/13']
]

const historyDate = ref(
  mockHistoryData.reduce((pre, cur) => {
    const curDate = cur.map(v => new Date(v))
    pre.concat(curDate)
    return pre
  }, [])
)

const recentDate = computed(() => (historyDate.value.length ? `${historyDate.value[0]}` : ''))
</script>

<style lang="scss" scoped>
.date-record {
  padding: 20px;
  &-header {
    color: #0b0b0b;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
  }
  &-calendar {
    padding-bottom: 10px;
    border-radius: 0 0 24px 24px;
    background-color: #ffeef398;
    .van-calendar {
      background-color: transparent;
    }
    .calendar-title {
      color: #ff5987;
      border-bottom: 1px solid;
    }
  }
  &-function {
    display: flex;
    flex-wrap: wrap;
  }
  .function-item {
    user-select: none;
    background-color: #fff;
    margin: 20px 20px 20px 0;
    padding: 24px;
    width: 100px;
    border-radius: 24px;
    &:nth-child(2n) {
      margin-right: 0;
    }

    &_title {
      font-size: 16px;
      font-weight: 600;
      line-height: 26px;
    }
    &_des {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
