<template>
  <div ref="chart" style="width: 600px; height: 400px"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)
let chartInstance = null

onMounted(() => {
  // 初始化 echarts 实例，并绑定到 chart 元素上
  chartInstance = echarts.init(chart.value)

  // 定义图表配置项
  const options = {
    title: {
      text: 'ECharts Demo',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
      },
    ],
  }

  // 使用 setOption 方法设置图表配置项
  chartInstance.setOption(options)
})

onBeforeUnmount(() => {
  // 在组件销毁前销毁 echarts 实例，释放资源
  if (chartInstance) {
    chartInstance.dispose()
  }
})
</script>
<style scoped>
.jspdf {
  width: 100%;
  height: 100%;
  padding: 20px 0 0 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}

.pdf-container {
  width: 600px;
  overflow: auto;
  overflow-x: hidden;
}

.chart-container {
  width: 100%;
  height: 500px;
  border: 1px dashed red;
  padding: 20px;
  box-sizing: border-box;
}

.toolbar {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}

button {
  padding: 8px 15px;
  box-sizing: border-box;
}
</style>
