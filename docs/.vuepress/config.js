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
            text: '数学',
            items: [
              { text: '线性代数', link: '/basic/math/linear-algebra/' }
            ]
          },
          {
            text: '计算机科学',
            items: [
              { text: '数据结构', link: '/basic/computer-science/data-structure/' }
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
          sidebarDepth: 2,
          children: [
            ['', '介绍'],
            'determinant'
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
    [
      'vuepress-plugin-mathjax',
      {
        /**
         * 输出格式
         * 'svg' | 'chtml'，默认 'chtml'
         * @type {String}
         */
        target: 'svg',

        /**
         * 宏
         * 输入的宏将与内置的宏进行混合
         * FIXME 怎么防止冲突？
         * @type {Object}
         */
        macros: {
          '*': '\\times',
        },
      },
    ],
  ]
}
