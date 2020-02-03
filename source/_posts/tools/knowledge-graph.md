---
title: 龙珠雷达
date: 2020-02-01 11:14:48
categories:
- [万能胶囊]
tags: [知识, 图谱, 联系]
summary: 知识图谱
img: http://q4kbn37nl.bkt.clouddn.com/long-zhu-lei-da.gif?e=1580245265&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:oneRra2rduP85ExzRj0Fvxkfd4Y
top: true
toc: false
---

<div id="graph" style="height: 520px;"></div>

<script type="text/javascript" src="/libs/echarts/echarts.min.js"></script>  <!-- 引入 ECharts 库 -->

<script type="text/javascript">
var myChart = echarts.init(document.getElementById('graph'));

function loadData(callback) { // 数据加载方法，接收一个回调函数
  $.ajax({
    url: '/data/knowledge-base.json',
    dataType: 'json',
    success: callback
  });
}

myChart.showLoading();

loadData(function(response) {
  var nodes = response.nodes || [], // 节点信息
      lines = response.lines || []; // 连线信息

  // 生成分类信息
  var categories = nodes.filter(function(item, index) { // 过滤重复的分类
    for (var i = 0; i < index; i++) if (item.category === nodes.category) return false; // 前面出现过相同的名称
    return true;
  }).map(function(item) {
    return { name: item.category };
  });
  categories.push({ name: '其它' }); // 无分类的节点被归类为“其它”

  // 生成图例信息
  var legends = categories.map(function(item) {
    return item.name;
  });

  // 生成节点信息
  var data = nodes.filter(function(item, index) { // 过滤名称重复的节点
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
      symbolSize: 10 + (value - 1) * 2, // 节点大小
      label: { // 标签
        show: value >= 1 // 数值 ≥5 时展示
      },
      tooltip: {
        formatter: function(params) {
          if (params.dataType === 'node') {
            return params.data.name + '：' + params.data.value;
          } else if (params.dataType === 'edge') {
            return params.data.value;
          } else {
            return;
          }
        }
      },
      link: item.link, // 链接，点击事件时获取
      date: item.date
    };
  });
console.log(data)
  // 生成连线信息
  links = lines.map(function(item) {
    return {
      source: item.subject,
      target: item.object,
      value: item.predicate,
      date: item.date
    };
  });

  myChart.setOption({
    title: {
      text: '知识图谱'
    },
    legend: {
      data: legends
    },
    tooltip: {},
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        edgeLength: 50,
        repulsion: 80,
        gravity: 0.1
      },
      draggable: true,
      focusNodeAdjacency: true,
      edgeSymbol: ['none', 'arrow'],
      itemStyle: { // 图形样式
        borderColor: '#fff',
        borderWidth: 1,
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
      },
      label: { // 图形上的文本标签
        position: 'right',
        formatter: '{b}'
      },
      edgeLabel: { // 关系边上的文本标签
        formatter: '{c}'
      },
      emphasis: {
        lineStyle: {
          width: 3
        }
      },
      categories: categories,
      data: data,
      links: links,
      animation: false
    }]
  });

  myChart.hideLoading();

  myChart.on('click', function(event) { // 绑定点击事件，打开新的标签页跳转至节点 link 指向的地址
    var data = event.data || {};
    var link = data.link;
    if (link) {
      window.open(link, '\_blank');
    }
  });
});
</script>
