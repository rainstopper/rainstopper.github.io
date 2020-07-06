/**
 * 知识图谱
 */

<template lang="html">
  <div class="knowledge-graph" :style="`width: ${width}; height: ${height};`">
    <ResponsiveEcharts :option="option"/>
  </div>
</template>

<script>
import 'echarts/lib/chart/graph' // 按需引入
import { commonUtil } from './utils'

const CATEGORY_OTHER = '其它'
const MIN_NODE_SIZE = 10 // 节点大小下限
const MAX_NODE_SIZE = 50 // 节点大小上限
const NODE_SIZE_INCREASE_STEP = 2 // 节点大小增长步长
const DEFAULT_MIN_OPACITY = 0.3 // 透明度下限
const DEFAULT_MAX_OPACITY = 0.96 // 透明度上限
const DEFAULT_MAX_OPACITY_VALUE = 7 // 大于等于该值能达到透明度上限
const OPACITY_INDEX = 2 // 透明度指数，该值越大，透明的节点越多
const DEFAULT_DEGREE_TO_SHOW_NODE = 1 // 节点的度数大于等于这个数值才展示
const DEFAULT_DEGREE_TO_SHOW_LABEL = 1 // 节点的度数大于等于这个数值才展示标签

export default {
  props: {
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
    },

    /**
     * 标题
     * @type {String}
     */
    title: {
      type: String,
      default: '知识图谱'
    },

    /**
     * 节点
     * 数据格式：
     * {
     *   name: String,
     *   category: String,
     *   link: String
     * }
     * @type {Array}
     */
    nodes: {
      type: Array,
      default: () => ([])
    },

    /**
     * 边
     * @type {Array}
     */
    edges: {
      type: Array,
      default: () => ([])
    }
  },

  computed: {
    /**
     * ECharts option
     * @return {Object} option
     */
    option () {
      return {
        title: {
          text: this.title
        },
        legend: {
          type: 'scroll',
          top: commonUtil.isNotEmpty(this.title) && 30 || 0,
          left: 0,
          orient: 'vertical',
          data: this.legends
        },
        series: [{
          type: 'graph',
          layout: 'force',
          force: { // 力引导布局相关的配置项
            edgeLength: 30, // 边的两个节点之间的距离
            repulsion: 50, // 节点之间的斥力因子
            gravity: .56 // 节点受到的向中心的引力因子
          },
          roam: true, // 是否开启鼠标缩放和平移漫游
          draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用
          focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
          itemStyle: { // 图形样式
            borderColor: '#fff', // 图形的描边颜色
            borderWidth: 1, // 描边线宽
            shadowBlur: 10, // 图形阴影的模糊大小
            shadowColor: 'rgba(0, 0, 0, 0.3)' // 阴影颜色
          },
          label: { // 图形上的文本标签
            position: 'right', // 标签的位置
            distance: 3, // 距离图形元素的距离
            formatter: '{b}'
          },
          edgeLabel: { // 关系边上的文本标签
            formatter: '{c}'
          },
          emphasis: { // 高亮的图形样式
            lineStyle: {
              width: 4 // 线宽
            }
          },
          categories: this.categories,
          nodes: this._nodes,
          edges: this._edges
        }]
      }
    },

    /**
     * ECharts 图例
     * 取 nodes 中非空的 category 属性，并去重
     * 末尾补充“其它”分类，用于对没有设置分类的项目归类
     * @return {Array} 图例
     */
    legends () {
      return [
        ...new Set( // 利用 Set 去重
          this.nodes.map(({ category }) => category).filter(item => commonUtil.isNotEmpty(item) && item !== CATEGORY_OTHER) // 不为空，且不是“其它”
        ),
        CATEGORY_OTHER // 补充“其它”分类
      ]
    },

    /**
     * ECharts 关系图的分类
     * 将 nodes 中的 category 去重
     * @return {Array} 分类
     */
    categories () {
      return this.legends.map(category => ({ name: category }))
    },

    /**
     * ECharts 关系图的 nodes
     * 对 name（名称）属性重复的节点去重
     * 重新组织成 ECharts 关系图接受的数据格式
     * 按照度数过滤
     * @return {Array} nodes
     */
    _nodes () {
      const uniqueNameMap = new Map() // 用于 name 属性去重的 Map
      return this.nodes.filter(({ name }) => !uniqueNameMap.has(name) && uniqueNameMap.set(name, 1)).map(item => { // 组织数据结构
        const degree = Math.max( // 节点度数
          this.edges.reduce((sum, { source, target }) => (item.name === source || item.name === target) && sum + 1 || sum, 0), // 每条相邻边使节点的度数加 1
          1 // 不小于 1
        )
        return {
          ...item,
          value: degree,
          category: this.legends.findIndex(category => category === item.category) || this.legends.length - 1, // 节点分类，默认最后一个，对应“其它”分类
          symbolSize: this.getNodeSize(degree), // 节点大小
          itemStyle: { // 图形样式
            opacity: this.getNodeOpacity(degree) // 透明度
          },
          label: { // 标签
            show: degree >= DEFAULT_DEGREE_TO_SHOW_LABEL // 度数足够大时展示
          }
        }
      }).filter(({ value }) => value >= DEFAULT_DEGREE_TO_SHOW_NODE)
    },

    /**
     * ECharts 关系图的 edges
     *
     * @return {Array} edges
     */
    _edges () {
      return this.edges.map(item => ({
        ...item,
        value: item.predicate
      }))
    }
  },

  methods: {
    /**
     * 获取节点大小
     * @param  {[type]} degree 节点度数
     * @return {[type]}        节点大小
     */
    getNodeSize (degree) {
      return Math.min(MIN_NODE_SIZE + (degree - 1) * NODE_SIZE_INCREASE_STEP, MAX_NODE_SIZE)
    },

    /**
     * 获取节点透明度
     * @param  {Number} degree                           节点度数
     * @param  {Number} [maxOpacity=DEFAULT_MAX_OPACITY] 最大透明度
     * @param  {Number} [minOpacity=DEFAULT_MIN_OPACITY] 最小透明度
     * @return {Number}                                  节点透明度
     */
    getNodeOpacity (degree, maxOpacity = DEFAULT_MAX_OPACITY, minOpacity = DEFAULT_MIN_OPACITY) {
      return Math.min(minOpacity + Math.pow(degree / DEFAULT_MAX_OPACITY_VALUE, OPACITY_INDEX) * (1 - minOpacity), maxOpacity)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
