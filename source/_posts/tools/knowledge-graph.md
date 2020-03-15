---
title: 龙珠雷达
date: 2020-02-01 11:14:48
categories:
- [万能胶囊]
tags: [知识图谱, 联系]
summary: 知识图谱
img: http://static.sunyt.site/long-zhu-lei-da.gif
top: true
toc: false
---

<div class="graph-container" style="height: 550px;"> <!-- 关系图容器 -->
  <div id="graph" style="height: 100%;"></div> <!-- 关系图 -->
  <table class="search-tool"> <!-- 搜索工具 -->
    <tr>
      <th>关键字：</th>
      <td>
        <input type="text" name="keyword" autocomplete="off" class="icon-right"/> <!-- 关键字输入框 -->
        <i class="fas fa-search"></i> <!-- 放大镜图标 -->
        <div class="result-list">请输入关键字...</div> <!-- 搜索结果列表 -->
        </div>
      </td>
    </tr>
    <tr>
      <th>关联数：</th>
      <td>
        <input type="number" name="min-degree" autocomplete="off"/> <!-- 关联数最小值 -->
        <span class="divider">≤ N ≤</span>
        <input type="number" name="max-degree" autocomplete="off"/> <!-- 关联数最大值 -->
      </td>
    </tr>
  </table>
</div>

<script type="text/javascript" src="/libs/echarts/echarts.min.js"></script>  <!-- 引入 ECharts 库 -->

<script type="text/javascript">
var DEGREE_TO_SHOW_NODE = 1, // 节点的度大于等于这个数值才展示
    DEGREE_TO_SHOW_LABEL = 1; // 节点的度大于等于这个数值才展示标签
var ACTIVE_COLOR = '#E88C30'; // '#E88C30'
var MIN_NODE_SIZE = 10, // 节点大小下限
    MAX_NODE_SIZE = 50, // 节点大小上限
    NODE_SIZE_INCREASE_STEP = 2; // 节点大小增长步长
var DEFAULT_MIN_OPACITY = 0.3, // 透明度下限
    DEFAULT_MAX_OPACITY = 0.96, // 透明度上限
    DEFAULT_MAX_OPACITY_VALUE = 7, // 大于等于该值能达到透明度上限
    OPACITY_INDEX = 2; // 透明度指数，该值越大，透明的节点越多
var SEARCH_DELAY = 200, // 搜索延时，单位毫秒
    MATCHED_NODE_COLOR = '#FF2A68', // 搜索结果中匹配节点的颜色
    MISMATCHED_MAX_OPACITY = 0.5; // 搜索结果中不匹配节点的透明度上限

function loadData(callback) { // 数据加载方法
  $.when($.get('/data/knowledge-base/nodes.json'), $.get('/data/knowledge-base/lines.json')).done(function(nodesResponse, linesResponse) {
    callback({ nodes: nodesResponse[0], lines: linesResponse[0] });
  });
}

function getNodeSize(value) { // 计算节点大小
  return Math.min(MIN_NODE_SIZE + (value - 1) * NODE_SIZE_INCREASE_STEP, MAX_NODE_SIZE);
}

function getNodeOpacity(value, maxOpacity, minOpacity) { // 计算节点透明度
  if (maxOpacity === undefined) maxOpacity = DEFAULT_MAX_OPACITY;
  if (minOpacity === undefined) minOpacity = DEFAULT_MIN_OPACITY;
  return Math.min(minOpacity + Math.pow(value / DEFAULT_MAX_OPACITY_VALUE, OPACITY_INDEX) * (1 - minOpacity), maxOpacity);
}

var myChart, // 图表实例
    data = [], // 存放初始数据
    option; // 图表配置信息

function search(keyword, min, max) { // 搜索
  if (!myChart || !option) return;

  if (!keyword) keyword = $('.graph-container .search-tool input[name="keyword"]').val(); // 获取关键字
  if (!min) min = $('.graph-container .search-tool input[name="min-degree"]').val(); // 获取关联数最小值
  if (!max) max = $('.graph-container .search-tool input[name="max-degree"]').val(); // 获取关联数最大值

  var resultData = JSON.parse(JSON.stringify(data)); // 深拷贝，不改变 data 中的数据

  resultData = resultData.filter(function(item) { // 筛选满足关联数的节点
    return (min === '' || item.value >= parseInt(min)) && (max === '' || item.value <= parseInt(max));
  });

  var $resultList = $('.graph-container .search-tool .result-list');
  if (keyword.length > 0) { // 关键字不为空时进行匹配
    var results = []; // 列表结果
    resultData = resultData.map(function(item) { // 重绘搜索结果数据
      if (item.name.indexOf(keyword) >= 0) { // 匹配
        results.push(item.name); // 添加结果至列表
        return $.extend(item, {
          itemStyle: {
            color: MATCHED_NODE_COLOR, // 设置节点为高亮颜色
            opacity: DEFAULT_MAX_OPACITY // 设置透明度为最大
          },
          label: {
            show: true, // 显示标签
            color: MATCHED_NODE_COLOR // 设置标签为高亮颜色
          }
        });
      } else { // 不匹配
        return $.extend(item, {
          itemStyle: {
            opacity: getNodeOpacity(item.value, MISMATCHED_MAX_OPACITY) // 透明化处理
          }
        });
      }
    });
    if (results.length) { // 如果有结果
      $resultList.text(''); // 先将提示信息清空
      for (var i = 0; i < results.length; i++) { // 生成结果列表
        $resultList.append($('<div>').addClass('item').text(results[i]));
      }
    } else { // 没有结果
      $resultList.text('很遗憾，没有找到结果...');
    }
  } else { // 关键字为空时
    $resultList.text('请输入关键字...');
  }

  option.series[0].data = resultData;
  myChart.setOption(option);
}

$(function() {
  myChart = echarts.init(document.getElementById('graph'));

  myChart.showLoading();

  loadData(function(response) {
    var nodes = response.nodes || []; // 节点信息
    var lines = response.lines || []; // 连线信息

    // 生成分类信息
    var categories = nodes.filter(function(item, index) { // 过滤重复的分类
      for (var i = 0; i < index; i++) if (item.category === nodes.category) return false; // 前面出现过相同的名称
      return true;
    }).map(function(item) {
      return { name: item.category };
    }).sort(function(a, b) { // 按名称排序
      return a.name.localeCompare(b.name);
    });
    categories.push({ name: '其它' }); // 无分类的节点被归类为“其它”

    // 生成图例信息
    var legends = categories.map(function(item) {
      return item.name;
    });

    // 生成节点信息
    data = nodes.filter(function(item, index) { // 过滤名称重复的节点
      for (var i = 0; i < index; i++) if (item.name === nodes[i].name) return false; // 前面出现过相同的名称
      return true;
    }).map(function(item) {
      var name = item.name;

      var value = 0; // 节点的数值
      lines.forEach(function(line) { // 节点的出度、入度之和
        if (name === line.subject || name === line.object) value++;
      });
      if (value === 0) value = 1; // 至少是 1

      var categoryIndex = legends.length - 1; // 分类下标，默认最大值，对应“其它”
      for (var i = 0; i < legends.length; i++) {
        if (item.category === legends[i]) {
          categoryIndex = i;
          break;
        }
      }

      return {
        name: name, // 节点名称
        value: value, // 节点数值
        category: categoryIndex, // 节点分类
        symbolSize: getNodeSize(value), // 节点大小
        itemStyle: { // 图形样式
          opacity: getNodeOpacity(value) // 透明度
        },
        label: { // 标签
          show: value >= DEGREE_TO_SHOW_LABEL // 数值足够大时展示
        },
        link: item.link, // 链接，点击事件时获取
        date: item.date
      };
    }).filter(function(item) {
      return item.value >= DEGREE_TO_SHOW_NODE;
    });

    // 生成连线信息
    var links = lines.map(function(item) {
      return {
        source: item.subject,
        target: item.object,
        value: item.predicate,
        lineStyle: {
          color: item.link ? ACTIVE_COLOR : null
        },
        link: item.link,
        date: item.date
      };
    });

    option = {
      title: {
        text: '知识图谱'
      },
      legend: {
        type: 'scroll',
        top: 30,
        left: 0,
        orient: 'vertical',
        data: legends
      },
      tooltip: {
        position: [100, 0],
        formatter: function(params) {
          var str = '';
          if (params.dataType === 'node') {
            str = params.data.name + '<br/>关联 ' + params.data.value + ' 个节点';
          } else if (params.dataType === 'edge') {
            str = params.data.source + ' ' + params.data.value + ' ' + params.data.target;
          }
          if (params.data.link) {
            if (str.length > 0) str += '<br/>';
            str += '点击查看详情';
          }
          return str;
        }
      },
      series: [{
        type: 'graph',
        layout: 'force',
        force: {
          edgeLength: 30,
          repulsion: 50,
          gravity: .56
        },
        roam: true,
        draggable: true,
        focusNodeAdjacency: true,
        // edgeSymbol: ['none', 'arrow'],
        itemStyle: { // 图形样式
          borderColor: '#fff',
          borderWidth: 1,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)'
        },
        label: { // 图形上的文本标签
          position: 'right',
          distance: 2,
          formatter: '{b}'
        },
        edgeLabel: { // 关系边上的文本标签
          formatter: '{c}'
        },
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        categories: categories,
        data: data,
        links: links
        // animation: false
      }]
    };

    myChart.setOption(option);

    myChart.hideLoading();

    myChart.on('click', function(event) { // 绑定点击事件，打开新的标签页跳转至节点 link 指向的地址
      var data = event.data || {};
      var link = data.link;
      if (link) {
        window.open(link, '\_blank');
      }
    });
  });

  // 页面自动滚动至合适位置
  $('html, body').animate({
    scrollTop: 240
  }, 2000);

  // 按关键字搜索
  var timer = null;
  $('.graph-container .search-tool input[name="keyword"]').on('keydown', function(event) {
    $('.graph-container .search-tool .result-list').text('拼命搜索中ing...');
    if (timer) window.clearTimeout(timer); // 清空延时器
    timer = window.setTimeout(function() {
      search(event.target.value);
    }, SEARCH_DELAY); // 延时搜索，防止输入过程卡顿
  });

  // 展示搜索结果列表
  $('.graph-container .search-tool input[name="keyword"]').on('click', function() {
    var $this = $(this);
    var $resultList = $('.graph-container .search-tool .result-list');
    $resultList.show(); // 展示结果列表
    $(document).on('click', function(event) { // 给 document 绑定点击事件
      var $target = $(event.target);
      if ($target.closest($resultList).length || $target.is($this)) { // 如果点击的元素是结果列表或者关键字输入框
        event.stopPropagation(); // 阻止事件冒泡
      } else {
        $resultList.hide(); // 隐藏结果列表
        $(document).unbind('click'); // 解除点击事件
      }
    });
  });

  // 查询结果列表项关联关键字
  $('.graph-container .search-tool .result-list').on('click', '.item', function() {
    var keyword = $(this).text(); // 获取关键字
    $('.graph-container .search-tool input[name="keyword"]').val(keyword); // 将关键字输入框中的内容设置为该关键字
    search(keyword); // 按关键字搜索
    $(this).hide(); // 隐藏结果列表
  });

  // 按关联数筛选
  $('.graph-container .search-tool input[name="min-degree"]').on('keyup', function(event) { // 最小值
    search(undefined, event.target.value);
  });
  $('.graph-container .search-tool input[name="max-degree"]').on('keyup', function(event) { // 最大值
    search(undefined, undefined, event.target.value);
  });
});
</script>

<style type="text/css">
.graph-container {
  position: relative;
}

#articleContent .graph-container table.search-tool,
#articleContent .graph-container table.search-tool tr,
#articleContent .graph-container table.search-tool tr th,
#articleContent .graph-container table.search-tool tr td { /*覆盖 matery.css 中的样式*/
  border: 0 !important;
  background-color: rgba(0, 0, 0, 0);
}

#articleContent .graph-container table.search-tool {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
}

#articleContent .graph-container table.search-tool th,
#articleContent .graph-container table.search-tool td {
  padding: 3px 0;
  font-size: 14px;
}

#articleContent .graph-container table.search-tool th {
  width: 80px;
  text-align: right;
  font-weight: normal;
}

#articleContent .graph-container table.search-tool tr td input {
  width: 120px;
  height: 20px;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 3px;
  background-color: #fff;
  padding: 3px;
  font-size: 12px;
}
#articleContent .graph-container table.search-tool tr td input:focus { /*覆盖 materialize.min.css 样式*/
  border: 1px solid #aaa;
  box-shadow: 0 0;
}

#articleContent .graph-container table.search-tool tr td input.icon-right {
  padding-right: 18px;
}

#articleContent .graph-container table.search-tool tr td input[type="number"] {
  width: 36px;
  text-align: center;
}

#articleContent .graph-container table.search-tool tr td input[type="number"]::-webkit-inner-spin-button,
#articleContent .graph-container table.search-tool tr td input[type="number"]::-webkit-outer-spin-button { /*覆盖原生样式*/
  -webkit-appearance: none;
  margin: 0;
}

#articleContent .graph-container table.search-tool tr td span.divider {
  width: 40px;
  display: inline-table;
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  font-size: 12px;
}

#articleContent .graph-container table.search-tool tr td .fas {
  position: absolute;
  top: 9px;
  right: 7px;
  font-size: 12px;
  color: #aaa;
}

#articleContent .graph-container table.search-tool tr td .result-list {
  position: absolute;
  top: 30px;
  right: 0;
  min-width: 200px;
  max-height: 240px;
  display: none;
  overflow-y: auto;
  border-radius: 6px;
  box-shadow: 0 0 5px #aaa;
  background-color: #fff;
  padding: 10px 0;
  color: #888;
  line-height: 24px;
  text-indent: 10px;
}

#articleContent .graph-container table.search-tool tr td .result-list .item {
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
}
#articleContent .graph-container table.search-tool tr td .result-list .item:hover {
  background-color: #fefede;
}
</style>
