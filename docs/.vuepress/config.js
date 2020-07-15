module.exports = {
  /**
   * 基础路径，默认 /
   * 它的值应当总是以斜杠开始，并以斜杠结束
   * @type {String}
   */
  base: '/',

  /**
   * 网站的标题
   * 它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
   * @type {String}
   */
  title: '雨停の精神時光屋',

  /**
   * 网站的描述
   * 它将会以 <meta> 标签渲染到当前页面的 HTML 中
   * @type {String}
   */
  description: '',

  /**
   * 额外的需要被注入到当前页面的 HTML <head> 中的标签
   * 每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
   * @type {Array}
   */
  head: [
    ['link', { rel: 'icon', href: '/assets/image/logo.svg' }]
  ],

  /**
   * dev server 的主机名，默认 0.0.0.0
   * @type {String}
   */
  host: '0.0.0.0',

  /**
   * dev server 的端口，默认 8080
   * @type {String}
   */
  port: '8080',

  /**
   * 主题配置
   * @type {Object}
   */
  themeConfig: {
    /**
     * 导航栏
     * 如果开启了多语言配置，locales 内部的 nav 会覆盖这里的配置
     * @type {Array}
     */
    nav: [
      { text: '前端的山', link: '/front-end/' },
      { text: '后端的海', link: '/back-end/' },
      {
        text: '坚实的路',
        items: [
          {
            text: '计算机科学',
            items: [
              { text: '计算机组成原理', link: '/basic/computer-science/computer-organization/' },
              { text: '计算机操作系统', link: '/basic/computer-science/computer-operating-system/' },
              { text: '计算机网络', link: '/basic/computer-science/computer-networks/' },
              { text: '数据结构', link: '/basic/computer-science/data-structures/' }
            ]
          },
          {
            text: '数学',
            items: [
              { text: '高等数学', link: '/basic/math/advanced-mathematics/' },
              { text: '线性代数', link: '/basic/math/linear-algebra/' },
              { text: '概率论与数理统计', link: '/basic/math/probability-and-statistics/' },
              { text: '数论', link: '/basic/math/number-theory/' },
              { text: '奥林匹克数学', link: '/basic/math/olympic-math/' }
            ]
          }
        ]
      }
    ],

    /**
     * 侧边栏
     * @type {Object}
     */
    sidebar: {
      '/basic/math/linear-algebra/': [
        {
          title: '线性代数',
          collapsable: false,
          sidebarDepth: 2, // 0 | 1 | 2
          children: [
            ['', '介绍'],
            'determinant',
            'matrix',
            'vector-group'
          ]
        }
      ]
    },

    /**
     * 启用页面滚动效果
     * @type {Boolean}
     */
    smoothScroll: true
  },

  /**
   * 插件
   * @type {Array}
   */
  plugins: [
    /**
     * vuepress-plugin-latex 文档排版插件
     * 对数学公式支持良好
     */
    'vuepress-plugin-latex'

    /**
     * vuepress-plugin-mathjax 数学公式插件
     * XXX 不支持方程组和矩阵写法
     */
    // [
    //   'vuepress-plugin-mathjax',
    //   {
    //     /**
    //      * 输出格式
    //      * 'svg' | 'chtml'，默认 'chtml'
    //      * @type {String}
    //      */
    //     target: 'svg',
    //
    //     /**
    //      * 宏
    //      * 输入的宏将与内置的宏进行混合
    //      * FIXME 怎么防止冲突？
    //      * @type {Object}
    //      */
    //     macros: {
    //       '*': '\\times',
    //     },
    //   },
    // ]
  ],

  /**
   * Markdown 配置
   * @type {Object}
   */
  markdown: {
    /**
     * 是否在每个代码块的左侧显示行号，默认 undefined
     * @type {Boolean}
     */
    lineNumbers: true
  }
}
