/**
 * 响应式的 ECharts 组件
 */

<template lang="html">
  <div class="responsive-echarts" :style="`width: ${width}; height: ${height};`"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts' // 此处不引入具体的 ECharts 组件
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'

export default {
  props: {
    /**
     * ECharts 的 option
     */
    option: {
      type: Object,
      default: () => ({})
    },

    /**
     * 宽度，默认 100%
     * @type {String}
     */
    width: {
      type: String,
      default: '100%'
    },

    /**
     * 高度，默认 100%
     * @type {String}
     */
    height: {
      type: String,
      default: '100%'
    }
  },

  data () {
    return {
      myChart: null
    }
  },

  mounted () {
    this.draw() // 首次绘制
    window.addEventListener('resize', this.myChart && this.myChart.resize) // 添加 resize 事件监听器
  },

  beforeDestroy () {
    this.myChart && this.myChart.dispose && this.myChart.dispose() // 销毁实例
    window.removeEventListener('resize', this.myChart && this.myChart.resize) // 移除 resize 事件监听器
  },

  watch: {
    /**
     * 监听 option 的变化
     */
    option: {
      handler (newVal, oldVal) {
        if (this.myChart) {
          if (newVal) { // 新值存在时使用新值
            this.myChart.setOption(newVal, true)
          } else { // 否则使用旧值
            this.myChart.setOption(oldVal, true)
          }
        } else { // 未初始化时进行绘制
          this.draw()
        }
      },
      deep: true // 深监听
    }
  },

  methods: {
    /**
     * 绘制 ECharts
     */
    draw () {
      const el = this.$el
      this.myChart = echarts.init(el, '')
      this.myChart.setOption(this.option)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
