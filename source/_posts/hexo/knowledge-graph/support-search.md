---
title: 知识图谱支持搜索
date: 2020-02-07 18:41:13
categories:
- [精神时光屋]
tags: [知识, 图谱, 优化]
summary: 知识图谱优化 —— 支持搜索
img: http://q4kbn37nl.bkt.clouddn.com/magnifier_20200207185342.jpg?e=1581076491&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:Zjw9UhZIMlMD-UmjaQeP1EBLGVI
---

## 1 背景

这些天对博客进行整体地梳理，发现文章里涉及的知识概念和联系竟意外的多。仅仅十余篇文章，却在知识图谱中产生了 300 余个节点、400 余条连线 —— 这已经是一个具有相当体量的知识体系。

![《龙珠雷达》2020.2.7](http://q4kbn37nl.bkt.clouddn.com/knowledge-graph_20200207190230.png?e=1581076982&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:fsfA_8RGVNzuzJ_W44wf2B61jW4)

在为数众多的节点中，想要凭借肉眼寻找到自己关注的节点实属不易。而且关系紧密的节点可能发生重叠，更为我们的寻找带来困难。

这时就需要知识图谱具备搜索的功能，以提高图谱的使用效率。

## 2 功能描述

知识图谱搜索的具体功能如下：

> 1. 在知识图谱的展示区域附近，提供一个搜索框，供用户输入关键字进行模糊搜索。
>
> 2. 用户在搜索框中输入关键字时，使用一个下拉列表展示包含该关键字的节点名称列表，可以点击列表项改变搜索框中的内容；若没有匹配任何节点，则显示“无结果”。
>
> 3. 同时，系统将包含搜索内容的节点高亮显示，其余节点做一定程度的透明化处理。
>
> 4. 此外，用户还能通过节点的关联数（出、入度之和）对节点总量进行筛选。

## 3 技术设计

我在 ECharts 的[官方文档](https://www.echartsjs.com/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)进行了一番搜索，并没有找到它有自带相关的搜素工具或者插件 —— 通常图表中的数据是通过查询服务端而返回的，未提供客户端的搜素功能也合理 —— 这也是我专门写下这篇文章的原因，如果简单的调用插件就能实现，我也没必要再花一章的工夫来记录。

这里只有自己来实现上述的搜素功能了。

### 3.1 搜索工具栏布局

根据我们的构想，需要在关系图的附近提供搜索工具栏。

具体做法是，在原关系图 `<div>` 标签外包一层容器，再在容器中放置我们的搜索工具。如此一来，DOM 结构大概会变成下面这样：

```html
<div class="graph-container" style="height: 520px;"> <!-- 关系图容器 -->
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
        <span class="divider">≤ N <</span>
        <input type="number" name="max-degree" autocomplete="off"/> <!-- 关联数最大值 -->
      </td>
    </tr>
  </table>
</div>
```

搜索工具之所以使用 `<table>` 标签，是因为它的对齐方式比较方便，用类似“田”字格的方式就能组织两个搜索条件的摆放。

接下来，我们只需要给 `.graph-container table.search-tool` 设置绝对定位，便能使其位于容器的右上角。

```css
.graph-container {
  position: relative;
}

.graph-container table.search-tool {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
}
```

以及给结果列表 `.graph-container table.search-tool .result-list` 设置绝对定位，使其位于关键字输入框下方。

```css
.graph-container table.search-tool .result-list {
  position: absolute;
  top: 30px;
  right: 0;
  min-width: 200px;
  max-height: 240px;
}
```

如此便能实现 DOM 元素在页面上的布局。

### 3.2 搜索过程

页面首次加载时，会在内存中保存一份生成的节点数据。大概会是下面这样：

```javascript
var data = []; // 存放数据

$(function() { // 页面加载完成
  var myChart = echarts.init(document.getElementById('graph')); // 初始化图表

  loadData(function(response) {
    var nodes = response.nodes;

    ...

    // 生成节点信息
    data = nodes.filter(...).map(...);

    ...
  });
});

function search() {
  // 使用 data 作为数据集
}
```

用户可以输入关键字、关联数最小值和关联数最大值进行搜索。此时，被搜索的数据集就是这份数据 `data`。

在 `search()` 方法的内部，为了防止对 `data` 造成更改，而引起不必要的麻烦，需要先对其做一份深拷贝。接着对这份拷贝数据，使用 `Array.filter()` 方法过滤“关联数”不满足要求的数据；然后使用 `Array.map()` 方法，匹配其中包含“关键字”的节点高亮展示，其余节点则做一定程度的透明化处理。

最后我们将搜索结果整合进新的 `option` 中，再通过 ECharts API 提供的 `echartsInstance.setOption()` 方法重绘图表，以达到更新搜索结果的目的。

同时，关键字输入的过程中会弹出下拉列表，展示匹配到的节点名称，可供用户选择。

### 3.3 事件监听

为了追求高实时性的用户体验，搜索工具栏不设置“搜索”按钮，而通过对输入框的事件监听触发 `search()` 搜索方法。

jQuery 提供的 `on()` 方法就足以实现了，对于关键字和关联数的输入，我们可以通过 `$(...).on('keyup')` 的方式为其绑定监听事件。这里不监听 `change` 事件，而监听 `keyup` 事件，是因为 `change` 事件在输入框失去焦点的时候才会触发，体验上不如监听 `keyup` 流畅。

但监听 `keyup` 的同时也会带来新的问题。例如在关键字输入的次数会很多，尤其是当我们需要输入中文时，`keyup` 会先监听到一部分的拼音字母。这个过程会引起频繁地搜索，这些搜索很可能是没有意义的，且在节点数量较多的情况下，可能引起卡顿。

这里使用了事件延迟处理的小技巧。以关键字输入框 `<input name="keyword">` 的监听为例：

```javascript
$(function() {

  ...

  var timer = null;
  $('.graph-container .search-tool input[name="keyword"]').on('keyup', function() {
    if (timer) window.clearTimeout(timer); // 清除延时
    timer = window.setTimeout(function() { // 延时处理
      // search()
    }, 200); // 延时 200 毫秒
  });
});
```

上面的例子中，用户在持续输入时，如果停顿的时间不超过 200 毫秒，则不会触发搜索。尽管有 200 毫秒的短暂延时才会进行搜索，但这在很大程度上减少了无意义搜索的占比。

### 3.4 下拉列表

当关键字输入框被点击而获得焦点时，会展示一个下拉列表；而点击其余空白处时（除了关键字输入框和下拉列表），会再次将这个下拉列表隐藏。这也是个很典型的事件处理的例子 ——

```javascript
$(function() {
  ...

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

  ...
});
```

实现这个功能时，需要判断事件的来源，并合理地阻止事件继续冒泡。

## 4 代码实现

设计固然是可行的，但在实现的过程中总会遇到更多的阻力，比如框架本身带来的限制、样式的干扰，还有一些细节上的处理，需要谨慎思考、反复雕琢。

这些过程很难一点一点全都细说，得自己动手做一遍才能体会。

以下是完整的源代码和相关注释：

```html
<div class="graph-container" style="height: 520px;"> <!-- 关系图容器 -->
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
        <span class="divider">≤ N <</span>
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
  var $resultList = $('.graph-container .search-tool .result-list');
  if (keyword.length > 0) { // 关键字不为空时进行匹配
    var results = []; // 列表结果
    resultData = resultData.filter(function(item) { // 筛选满足关联数的节点
      return (min === '' || item.value >= parseInt(min)) && (max === '' || item.value < parseInt(max));
    }).map(function(item) { // 重绘搜索结果数据
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
        $resultList.append($("<div>").addClass('item').text(results[i]));
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
      legend: {
        type: 'scroll',
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
          gravity: 0.5
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
        links: links,
        animation: false
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
    scrollTop: 250
  }, 2000);

  // 按关键字搜索
  var timer = null;
  $('.graph-container .search-tool input[name="keyword"]').on('keyup', function(event) {
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
}

#articleContent .graph-container table.search-tool th {
  width: 80px;
  text-align: right;
  font-weight: normal;
}

#articleContent .graph-container table.search-tool tr td input {
  width: 120px;
  height: 22px;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 3px;
  background-color: #fff;
  padding: 3px;
  font-size: 14px;
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
  font-size: 14px;
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
  line-height: 30px;
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
```

相较于[最初版本](/hexo/knowledge-graph/build/)，代码量确实多出不少。这里边也做了些重构，将一些公共方法抽离出来，同时将一些配置信息单独定义和管理，在逻辑性和可读性上是不输给上个版本的，但难度也不会减。

来看看具体的效果：

![关键字搜索效果](http://q4kbn37nl.bkt.clouddn.com/knowledge-graph_20200208040546.png?e=1581109587&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:xmduc8ClE_8Nu3aOH-UTGjxlLLg)

支持按关键字进行搜索，并且匹配的节点会被高亮显示，其余节点则更加透明。

另外，按关联数的搜索过滤了一部分不符合要求的节点，节点的总数也会随之减少：

![关联数搜索效果](http://q4kbn37nl.bkt.clouddn.com/knowledge-graph_20200208040834.png?e=1581109779&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:Hv6nNDcFovNjLk1SEE_OzMo5unI)

这样一来，对知识图谱的日常管理会更加方便。

新版支持搜索的知识图谱已上线，速速前去体验吧~

## 相关链接

知识图谱[传送门](/tools/knowledge-graph/)

上一篇：[《构建知识图谱》](/hexo/knowledge-graph/build/)
