/**
 * 知识图谱
 */

<template lang="html">
  <div class="knowledge-graph" :style="`width: ${width}; height: ${height};`">
    <!-- 支持 Vue 响应式的 ECharts 组件 -->
    <ResponsiveEcharts :option="option"
                       :loading="loading"
                       @click="onClick"/>
  </div>
</template>

<script>
// 按需引入 ECharts 组件
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legendScroll'
import { commonUtil } from '../utils'

/**
 * 高亮颜色
 */
const ACTIVE_COLOR = '#46bd87'

const DEFAULT_FORCE = {
  edgeLength: 50,
  repulsion: 50,
  gravity: 0.2
}

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
    },

    /**
     * 加载状态
     * 透传给响应式的 ECharts 组件
     * @type {Boolean}
     */
    loading: Boolean,

    /**
     * 其它分类，无分类项目的默认分类
     * @type {Object}
     */
    categoryOther: {
      type: String,
      default: '其它'
    },

    /**
     * 节点大小下限
     * 用于计算节点大小
     * @type {Number}
     */
    minNodeSize: {
      type: Number,
      default: 10
    },

    /**
     * 节点大小上限
     * 用于计算节点大小
     * @type {Number}
     */
    maxNodeSize: {
      type: Number,
      default: 50
    },

    /**
     * 节点大小步长
     * 用于计算节点大小
     * @type {Number}
     */
    nodeSizeStep: {
      type: Number,
      default: 2
    },

    /**
     * 透明度下限
     * 用于计算节点透明度
     * @type {Number}
     */
    minNodeOpacity: {
      type: Number,
      default: 0.6
    },

    /**
     * 透明度上限
     * 用于计算节点透明度
     * @type {Number}
     */
    maxNodeOpacity: {
      type: Number,
      default: 1
    },

    /**
     * 透明度上限度数
     * 大于等于该值能达到透明度上限
     * @type {Object}
     */
    maxNodeOpacityDegree: {
      type: Number,
      default: 5
    },

    /**
     * 透明度指数
     * 该值越大，透明的节点越多
     * @type {Number}
     */
    nodeOpacityIndex: {
      type: Number,
      default: 2
    },

    /**
     * 节点的度数大于等于这个数值才展示
     * @type {Number}
     */
    nodeVisibleDegree: {
      type: Number,
      default: 1
    },

    /**
     * 节点的度数大于等于这个数值才展示标签
     * @type {Number}
     */
    nodeLabelVisibleDegree: {
      type: Number,
      default: 1
    },

    /**
     * 链接边颜色，默认使用主题高亮颜色
     * 用于指定边的样式
     * @type {Object}
     */
    linkEdgeColor: {
      type: String,
      default: ACTIVE_COLOR
    },

    /**
     * 力引导布局相关的配置项
     * 当节点数量很大时，用户可以用此配置项自行调整布局，使图形更美观
     * 会合并默认配置项
     * @type {Object}
     */
    force: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    /**
     * ECharts option
     * @return {Object} option
     */
    option () {
      const { title, legends, force, categories, _nodes, _edges } = this
      return {
        title: { // 标题
          text: title
        },
        legend: { // 图例
          type: 'scroll',
          top: commonUtil.isNotEmpty(title) && 30 || 0,
          left: 0,
          orient: 'vertical',
          data: legends
        },
        tooltip: { // 提示框
          position: ['100%', 0],
          /**
           * 格式化提示框内容
           * @param  {String} dataType  数据类型，'node' 表示节点，'edge' 表示边
           * @param  {Object} [data={}] 数据
           * @return {String}           提示框内容
           */
          formatter ({ dataType, data = {} } = {}) {
            let str = {
              node: `${data.name}<br/>关联 ${data.value} 个节点`, // 节点提示框内容
              edge: `${data.source} ${data.value} ${data.target}` // 边提示框内容
            }[dataType] || ''
            return data.link && `${str}${str.length && '<br/>' || ''}点击查看详情` || str; // 附带链接的项目追加“<br/>点击查看详情”
          }
        },
        series: [{
          type: 'graph',
          layout: 'force',
          force: Object.assign({}, DEFAULT_FORCE, force), // 力引导布局相关的配置项
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
          categories: categories,
          nodes: _nodes,
          edges: _edges
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
      const { nodes, categoryOther } = this
      if (!nodes || !nodes.length) return []
      return [
        ...new Set( // 利用 Set 去重
          nodes.map(({ category }) => category).filter(item => commonUtil.isNotEmpty(item) && item !== categoryOther) // 不为空，且不是“其它”
        ),
        categoryOther // 补充“其它”分类
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
      const { nodes, edges, legends, getNodeSize, getNodeOpacity, nodeLabelVisibleDegree, nodeVisibleDegree } = this
      const uniqueNameMap = new Map() // 用于 name 属性去重的 Map
      return nodes.filter(({ name }) => !uniqueNameMap.has(name) && uniqueNameMap.set(name, 1)).map(item => { // 组织数据结构
        const degree = Math.max( // 节点度数
          edges.reduce((sum, { source, target }) => (item.name === source || item.name === target) && sum + 1 || sum, 0), // 每条相邻边使节点的度数加 1
          1 // 不小于 1
        )
        const categoryIndex = legends.findIndex(category => category === item.category)
        return {
          ...item,
          value: degree,
          category: categoryIndex >= 0 ? categoryIndex : legends.length - 1, // 节点分类，默认最后一个，对应“其它”分类
          symbolSize: getNodeSize(degree), // 节点大小
          itemStyle: { // 图形样式
            opacity: getNodeOpacity(degree) // 透明度
          },
          label: { // 标签
            show: degree >= nodeLabelVisibleDegree // 度数足够大时展示
          }
        }
      }).filter(({ value }) => value >= nodeVisibleDegree)
    },

    /**
     * ECharts 关系图的 edges
     *
     * @return {Array} edges
     */
    _edges () {
      const { edges, linkEdgeColor } = this
      return edges.map(item => ({
        ...item,
        value: item.predicate || '-',
        lineStyle: { // 关系边的线条样式
          color: item.link && linkEdgeColor // 线的颜色
        }
      }))
    }
  },

  methods: {
    /**
     * 获取节点大小
     * @param  {Number} degree 节点度数
     * @return {Number}        节点大小
     */
    getNodeSize (degree) {
      const { minNodeSize, maxNodeSize, nodeSizeStep } = this
      return Math.min(minNodeSize + (degree - 1) * nodeSizeStep, maxNodeSize)
    },

    /**
     * 获取节点透明度
     * @param  {Number} degree 节点度数
     * @return {Number}        节点透明度
     */
    getNodeOpacity (degree) {
      const { minNodeOpacity, maxNodeOpacity, maxNodeOpacityDegree, nodeOpacityIndex } = this
      return Math.min(minNodeOpacity + Math.pow(degree / maxNodeOpacityDegree, nodeOpacityIndex) * (1 - minNodeOpacity), maxNodeOpacity)
    },

    /**
     * 点击操作
     * 如果项目附带链接，跳转至相应的地址
     * @param  {Object} [data={}] 点击事件
     */
    onClick ({ data = {} } = {}) {
      const { link } = data
      link && window.open(this.$withBase(link), '\_blank')
    }
  }
}
</script>

<style lang="stylus" scoped>
.knowledge-graph
  border: 1px solid #eee
</style>
