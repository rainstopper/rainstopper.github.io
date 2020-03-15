---
title: 构建知识图谱
date: 2020-02-02 11:50:48
categories:
- [精神时光屋]
tags: [知识图谱]
summary: 描述知识图谱的构建过程
img: http://static.sunyt.site/desk_20200202120008.jpg
---

## 1 背景

本博客除了分享，它的重要作用是 —— *学习*。

我们博客的名字之所以取材于日本动漫《龙珠Z》中的场景“精神时光屋”，就是因为这是一个跨时空的修炼圣地，允许人们忘我地投入进去，使修炼效率得以上百倍地提高。

![精神时光屋](http://static.sunyt.site/jing-shen-shi-guang-wu.jpg)

学习是有法可依的。《万维钢·精英日课2：正确的学习方法只有一种风格》这篇课程告诉我们，什么样的学习方法才是“[有效的学习方法](/online-course-notes/wan-wei-gang-jing-ying-ri-ke/season-2/20180607_zheng-que-de-xue-xi-fang-fa-zhi-you-yi-zhong-feng-ge/#you-xiao-de-fang-fa)”，其中提到的“把新学到的知识和以前的知识建立连接”这种做法，就是我认为最重要的。《万维钢·精英日课2：特别放松丨给高手的学习方法建议》中提到了一种高强度的读书方法，叫做“[强力研读](/tools/knowledge-handbook/#qiang-li-yan-du)”。它也提出，读书笔记中应该[包含书与书之间的联系](/online-course-notes/wan-wei-gang-jing-ying-ri-ke/season-2/20171110_te-bie-fang-song-gei-gao-shou-de-xue-xi-fang-fa-jian-yi/#fa-xian-lian-xi)，同时使用的记录工具要[便于创造](/online-course-notes/wan-wei-gang-jing-ying-ri-ke/season-2/20171110_te-bie-fang-song-gei-gao-shou-de-xue-xi-fang-fa-jian-yi/#chuang-zao)。创造，就是[想法的连接](/tools/knowledge-formula/#chuang-zao)。

所谓“连接”，就是新旧知识之间的联系。它能巩固我们对知识的认知，也能催生出具有创造性的想法。

此前我一直有一个习惯，就是在写作的过程中，利用 `超链接` 将有联系的知识点关联起来。但这只是一个跳转的途径。

我仍然迫切需要一个可视化的界面，能看到这些“连接”的全貌。这也给了我[灵感](/online-course-notes/wan-wei-gang-jing-ying-ri-ke/season-2/20180607_zheng-que-de-xue-xi-fang-fa-zhi-you-yi-zhong-feng-ge/#li-yong-bo-ke-xue-xi) —— 构建一份自己的知识图谱。

## 2 预备知识

要构建知识图谱，我们首先得知道它是什么，以及它能给我们带来什么。

### 2.1 信息与知识

如果你看过网络综艺《奇葩说》第五季第 17 期：你是否支持全人类一秒知识共享，你也许会对辩手陈铭的辩论印象深刻。他在节目中区分了信息和知识两个概念：

> 信息是指外部的客观事实。举例：这里有一瓶水，它现在是 7℃。
>
> 知识是对外部客观规律的归纳和总结。举例：水在 0℃ 及以下会结冰。

“客观规律的归纳和总结” 似乎有些难以实现。Quora 上有另一种经典的解读，区分“信息”和“知识”。

![信息和知识](http://static.sunyt.site/information-and-knowledge.jpg)

有了这样的参考，我们就很容易理解，在信息的基础上，建立实体之间的联系，就能行成 “知识”。

### 2.2 知识图谱

[知识图谱（Knowledge Graph）](/tools/knowledge-handbook/#zhi-shi-tu-pu)是显示知识发展进程与结构关系的一系列各种不同的图形，用可视化技术描述知识资源及其载体，有利于构建、绘制、显示、分析和挖掘知识及它们之间的相互联系。它的本质是揭示实体之间关系的语义网络。

这个概念最先由 Google 在 2012 年 5 月 17 日提出，最初是为了将传统的基于关键字的（keyword-based）搜索模型向基于语义的搜索升级，增强用户搜索质量和体验。

知识图谱的主要目的是用来描述知识本身以及他们之间的关联关系。


<div class="anchor" id="zhi-shi-de-biao-shi-fang-shi"></div>

### 2.3 知识的表式方式

知识图谱是由一条条知识组成，比如 ——

> 1. 姚明出生于上海
>
> 2. 姚明是中国人
>
> 3. 姚明的配偶是叶莉

![姚明的知识图谱](http://static.sunyt.site/knowledge-graph-example-of-yao-ming.webp)

而每条知识表示为一个 SPO（Subject-Predicate-Object）三元组。比如 ——

> “姚明出生于上海”可以用三元组表示为 `("Yao Ming", "born-in", "Shanghai")`。
>
> 把自然语言转化为三元组的过程，用到的技术是自然语言处理 (Natural Language Processing，简称 NLP）。

如果我们把三元素两端的实体看作是节点，把关系（包括属性、类别等）看作是一条边，那么大量的三元组就可以组成了一张庞大的知识图谱。


<div class="anchor" id="zhi-shi-ku"></div>

### 2.4 知识库

随着新知识的录入和机器的自动推理，这些结构化的知识会被存储起来，进而得到一个庞大、丰富的数据库，这个数据库就叫做“知识库（Knowledge Base）”。

从结构化的数据类型上看，知识库有两种类型 —— Curated KBs 和 Extracted KBs。

> *Curated KBs*：由标准的、结构化的三元组所表达的知识组成的知识库，每条知识的结构和刚才的例子很像，*每个关系都是标准定义好的*。以 freebase（一个创作共享类的网站）为代表，它从维基百科和 WordNet 等知识库抽取了大量的实体及实体关系，相当于实现了一种结构化的维基百科。
>
> *Extracted KBs*：直接从网页中抽取实体关系三元组所组成的知识库，它的实体和关系更多是自然语言的形式表达的。与 freebase 相比，这样得到的知识更具有多样性，但也会存在一定的噪声，其精确度低于 Curated KBs。

目前行业内使用的比较多的还是简单、易构建的 Curated KBs。


<div class="anchor" id="zhi-shi-tui-li"></div>

### 2.5 知识推理

知识推理和人类的逻辑是一样，可以分为“归纳”和“演绎”两类。所谓归纳（induction）是指从某类事物的大量实例出发，推理出关于这类事物的一般性结论。将归纳的过程调转方向，得到的就是演绎。演绎（deduction）指的是从一般性的前提出发，推导出个别结论或者具体陈述的过程。

举个例子 ——

> “阿里巴巴是一个数据驱动的公司”可以用三元组表示为 `("阿里巴巴", "is-a", 数据驱动的公司")`；
>
> “阿里巴巴是一种科技公司”可以表示为 `("阿里巴巴", "subclass", "科技公司")`。
>
> 如果以后再录入了一条这样的知识：`("Google", "is-a", "数据驱动的公司")`，
>
> 机器就可以自动推理出一个新知识： `("Google", "subclass", "科技公司")`。

归纳推理能够从已知知识中获取未知知识，是知识的增殖过程。而演绎推理可以用来解决复杂的问题，但它只是将已有事实揭示出来，而不能够产生新知识。上面例子中的推理过程用的就是演绎推理，虽然产生了新的知识记录，但是只是揭示了已有的事实，并没有推理出未知。

知识推理的背后涉及到一些算法。其中，归纳推理所使用的算法叫 *路径排序算法*（path ranking algorithm）；演绎推理则使用了 *马尔可夫逻辑网*（Markov logic network）和 *概率软逻辑*（probabilistic soft logic）。

## 3 功能描述

第一版的知识图谱功能相对简单，能纵观全貌，体现知识点之间的联系即可。

具体包含了下列功能：

> 1. 构建一个知识库，博客的编写者（我本人）可以往里录入知识点（实体、概念等）和关联关系。
>
> 2. 系统根据知识库中的内容，生成相应的知识图谱，通过一篇独立的博客文章来展示。
>
> 3. 生成的知识图谱是一张关系图，图中的节点代表知识点，连线代表知识的“连接”。
>
> 4. 默认可以看到知识图谱中的每个节点的名称。鼠标悬停在连线上时，可以看见关系的描述。点击节点或者连线，可以跳转至相关信息的详细页面。

后续会考虑添加对已录入知识进行自动的[知识推理](#zhi-shi-tui-li)。

## 4 技术设计

### 4.1 知识库

知识库用于知识点和关联关系的存储。


<div class="anchor" id="zhi-shi-ku-zai-ti"></div>

#### 4.1.1 载体

存储：由于是简单的前端项目，知识库使用 `.json` 文件存储于项目内部，暂不考虑使用外部数据源。

提取：直接加载上述 `.json` 文件中的原始数据，在展示前进行处理。


<div class="anchor" id="zhi-shi-ku-shu-ju-jie-gou"></div>

#### 4.1.2 数据结构

简介中的三元组是标准的逻辑结构，且相对简单。

但为了实现相应的功能，应该将数据的物理结构拆分成 *节点（知识点）* 和 *连线（关联关系）*。

1. 节点（知识点）的数据结构如下：

| 字段名    | 字段描述 | 数据类型 | 备注                        |
|----------|----------|---------|-----------------------------|
| name     | 节点名称  | String  | 不能重复                    |
| category | 分类      | String  | 分类名称                    |
| link     | 链接地址  | String  |                            |
| date     | 收录时间  | String  | 格式：`yyyy-MM-dd HH:mm:ss` |

2. 连线（关联关系）的数据结构如下：

| 字段名      | 字段描述 | 数据类型 | 备注                        |
|-------------|---------|---------|-----------------------------|
| subject     | 关系主体 | String  | 源节点的名称                 |
| predicate   | 关系谓语 | String  | 尽可能使用标准化的词汇        |
| object      | 关系客体 | String  | 目标节点的名称               |
| link        | 链接地址 | String  |                             |
| date        | 收录时间 | String  | 格式：`yyyy-MM-dd HH:mm:ss` |

这里的连线，相当于对三元组的扩充。


<div class="anchor" id="tu-xing-jie-mian"></div>

### 4.2 图形界面

#### 4.2.1 图表库选型

想要在页面上实现一个关系图，有很多现成的第三方库可以使用。

我发现，Matery 主题中的许多图表都使用了 [ECharts](https://www.echartsjs.com/zh/index.html)。这是一个不错的第三方图表库，功能强大、使用方便。我曾经用它实现了不少报表，对我而言早已轻车熟路。这次还是用它。

值得注意的是，尽管 Echarts 提供的关系图也是接收“节点和“连线”两组数据作为参数，但仔细查阅了[官方文档](https://www.echartsjs.com/zh/option.html#series-graph)后会发现，参数的字段定义与数据结构的设计稍有不同，需要做一些简单的格式转换。

#### 4.2.2 图表库的使用

我们知道 Markdown 中也是可以使用 HTML 语法的，当然也可以使用 JavaScript 脚本，但这总归有些不方便。

实际上，Hexo 的[官方插件](https://hexo.io/plugins/)中就提供了一款 [hexo-tag-echarts3](https://github.com/kchen0x/hexo-tag-echarts3) 插件，支持在 `.md` 文章文件中使用 `echarts-tag` 标签来绘制 ECharts 图表。

可是，在[初步尝试](chang-shi-hexo-tag-echarts3-cha-jian)后，发现这个插件存在一些缺陷，故暂停使用。

最终决定使用传统的 js 方式引入 ECharts 库，实现关系图。

## 5 代码实现

打开命令行，使用 Hexo 提供的 `hexo new [layout] <title>` 命令在 `source\_posts` 目录下创建一个 `.md` 格式的文章文件 —— 这是我们的常规操作，大家一定都很熟悉了。

然而，Hexo 在生成静态文件后，之会保留一些特定目录下的源文件。这时，我们应该如何引用我们想引用的文件呢？


<div class="anchor" id="gou-jian-zhi-shi-ku"></div>

### 5.1 构建知识库

[上面](#zhi-shi-ku-zai-ti)我们提到，目前的知识库比较简单，仅采用一个 `.json` 文件存储。

新建 `source/data/knowledge-base.json` 文件，添加如下内容：

```json
{
  "nodes": [
    { "name": "创造", "category": "思维类", "link": "/tools/knowledge-formula/#chuang-zao", "date": "2020-02-03 14:24:27" },
    { "name": "想法的连接", "date": "2020-02-03 14:24:39" }
  ],
  "lines": [
    { "subject": "创造", "predicate": "是", "object": "想法的连接", "date": "2020-02-03 14:24:55" }
  ]
}
```

依照知识库的[数据结构](#zhi-shi-ku-shu-ju-jie-gou)，其中 `nodes` 表示节点，`lines` 表示连线。正如我们录入一条知识：“创造就是想法的连接” —— 对应三元组`("创造", "是", "想法的连接")`。

然后我们的项目结构看起来会是下面这样：

```
.
├── .deploy_git
├── public
├── scaffolds
├── source
|   ├── _data
|   ├── _drafts
|   ├── _posts
|   ...
|   ├── data # 数据资源
|   |   └── knowledge-base.json # 知识库
|   ...
|   └── CNAME
├── themes
├── _config.yml
└── package.json
```

### 5.2 数据加载和处理

#### 5.2.1 数据加载

由于 Matery 主题本身引入了 `jQuery` 库，可以直接使用里边的方法，还是非常方便的。

在 `.md` 文章文件中添加以下代码：

```javascript
function loadData(callback) { // 数据加载方法
  $.ajax({
    url: '/data/knowledge-base.json',
    dataType: 'json',
    success: callback
  });
}

loadData(function(response) {
  console.log(response);
});
```

其中，`loadData` 方法是用于数据加载的方法。它接收一个回调函数作为参数，我们可以在这个回调函数内部处理返回的数据。

比如这里通过 `console.log()` 方法打印了响应的信息，这样就能在浏览器控制台上看到 `source/data/knowledge-base.json` 中保存的对象信息。

*如果今后需要更换外部数据源，或是改变数据加载的方式，我们只需要修改 `loadData()` 方法即可。*

#### 5.2.2 格式化处理

阅读 ECharts 的[配置文档](https://www.echartsjs.com/zh/option.html#series-graph)发现，配置中需要 `legend.data`、`categories`、`data`/`nodes`、`links`/`edges` 四项信息。这一步的目的就是将 `source/data/knowledge-base.json` 返回的信息转化为这四种信息，供 ECharts 渲染。

修改 `loadData()` 方法如下：

```javascript
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
        show: value >= 1 // 数值足够大时展示
      },
      link: item.link, // 链接，点击事件时获取
      date: item.date
    };
  });

  // 生成连线信息
  var links = lines.map(function(item) {
    return {
      source: item.subject,
      target: item.object,
      value: item.predicate,
      link: item.link,
      date: item.date
    };
  });
});
```

### 5.3 Echarts 关系图绘制

<div class="anchor" id="chang-shi-hexo-tag-echarts3-cha-jian"></div>

#### 5.3.1 尝试 hexo-tag-echarts3 插件

*本小节不是关键内容，可以[跳过]()。*

打开命令行，执行 `npm install hexo-tag-echarts3 --save` 安装 Hexo 的 ECharts 标签插件。

在文章中就可以使用标签的方式来绘制图表了。

```markdown
{% echarts 400 '85%' %} // 高度默认 400，宽度默认 '85%'
{ // echarts option
  series: [{
    type: 'graph',
    layout: 'force',
    label: {
      show: true
    },
    draggable: true,
    categories: [],
    data: [{ name: '孤独的测试节点' }],
    links: []
  }]
}
{% endecharts %}
```

而当我使用上述代码绘制一张关系图时，出现了一个出乎意料的报错 ——

![未加载 graph 组件](http://static.sunyt.site/hexo-tag-echart3-unsupport-graph-error.png)

排查发现，`hexo-tag-echarts3` 插件所引用的 ECharts 库地址是 `https://cdn.bootcss.com/echarts/3.8.0/echarts.common.min.js`，这个 `echarts.common.min.js` 中并未包含对 graph 关系图的支持。

我们知道 Echarts 包含了非常多样化的图表（chart）、坐标系（coordinate systems）和组件（component），在其官网的[下载页面](https://www.echartsjs.com/zh/builder.html)支持定制自己需要的部分。这样的好处是可以按需引入，以减少依赖包的大小。随之带来的问题是，可能遗漏一些依赖，比如上面的方式引入的 js 文件中就不包含我们需要的 graph 关系图组件。这时就需要更新原有的依赖了。

具体方法是，首先如下修改 `node_modules/hexo-tag-echarts3/template.html` 插件源文件中的内容：

```html
<div id="<%- id %>" style="width: <%- width %>;height: <%- height %>px;margin: 0 auto"></div>
<!-- <script src="https://cdn.bootcss.com/echarts/3.8.0/echarts.common.min.js"></script> --> <!-- 不使用该 cdn 资源 -->
<script type="text/javascript">
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('<%- id %>'));
  // 指定图表的配置项和数据
  var option = <%= option %>
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
</script>
```

然后修改文章文件中的内容：

```markdown
<script type="text/javascript" src="/libs/echarts/echarts.min.js"></script> <!-- 引用自己的 ECharts 库 -->

{% echarts 400 '85%' %} // 高度默认 400，宽度默认 '85%'
{ // echarts option
  series: [{
    type: 'graph',
    layout: 'force',
    label: {
      show: true
    },
    draggable: true,
    categories: [],
    data: [{ name: '孤独的测试节点' }],
    links: []
  }]
}
{% endecharts %}
```

在 `echarts tag` 标签之前引用自己的 ECharts 库，这个库可以去 ECharts 的[官网](https://www.echartsjs.com/zh/download.html)下载。当然直接这么引用也是没问题的，因为 Matery 主题的源文件目录 `themes/matery/source/libs` 下已经包含了 ECharts 库了，且其支持 graph。

<div class="anchor" id="hexo-tag-echarts3-cha-jian-yi-liu-wen-ti"></div>

> 这么做虽然解决了问题，但也留了个坑。我们修改的 `hexo-tag-echarts3` 插件的源文件位于 `node_modules` 目录下，假如重新执行 `npm install` 命令安装依赖（更换设备的时候一定会出现这种情况），对源文件的修改就白费了。
>
> 我又回顾了一下 `hexo-tag-ehcart3` 插件的历史版本，它们都引用了类似的 `echarts.common.min.js`，且都不包含关系图组件。换言之，回退插件的版本也没法解决问题。
>
> 这个遗留问题我已[记录在案](/tools/to-do-list/#hexo-tag-echarts3-cha-jian-yi-liu-wen-ti)。未来可能的解决方法是重写该插件，以支持 ECharts 组件的按需引入。

另外，由于是通过模板创建，这段代码并不能在数据加载后异步执行。这是个很致命的缺点。

因此，*这里先暂停使用该插件*。但不得不说，这是一个有趣的尝试。

#### 5.3.2 传统方式实现

以下是 `.md` 文章文件的完整代码：

```html
<div id="graph" style="height: 600px;"></div>

<script type="text/javascript" src="/libs/echarts/echarts.min.js"></script>  <!-- 引入 ECharts 库 -->

<script type="text/javascript">
var myChart = echarts.init(document.getElementById('graph'));

function loadData(callback) { // 数据加载方法
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
        show: value >= 1 // 数值足够大时展示
      },
      link: item.link, // 链接，点击事件时获取
      date: item.date
    };
  });

  // 生成连线信息
  var links = lines.map(function(item) {
    return {
      source: item.subject,
      target: item.object,
      value: item.predicate,
      link: item.link,
      date: item.date
    };
  });

  myChart.setOption({
    legend: {
      type: 'scroll',
      left: 0,
      orient: 'vertical',
      data: legends
    },
    tooltip: {
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
        edgeLength: 40,
        repulsion: 50,
        gravity: 0.12
      },
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
```

简简单单的百余行代码，就实现了知识图谱。

## 更多

### 知识库结构优化 2020.2.4

在构建知识库的[开发过程](gou-jian-zhi-shi-ku)中，我们将知识库的节点（nodes）数据和连线（lines）数据都存放在 `source/data/knowledge-base.json` 文件中。

随着数据量的增长，节点数据和连线数据同时存放在一个文件中的方式，不利于数据的管理和维护。

#### 1 数据存储优化

现将两块数据分开存放，具体如下：

```
.
...
├── source
|   ...
|   ├── data # 数据资源
|   |   └── knowledge-base # 知识库
|   |       ├── lines.json # 连线数据
|   |       └── nodes.json # 节点数据
|   ...
...
```

其中，`source/data/knowledge-base/nodes.json` 文件用来存放节点数据，例如：

```json
[
  { "name": "创造", "category": "思维类", "link": "/tools/knowledge-formula/#chuang-zao", "date": "2020-02-03 14:24:27" },
  { "name": "想法的连接", "date": "2020-02-03 14:24:39" }
]
```

`source/data/knowledge-base/lines.json` 则用来存放连线数据 ——

```json
[
  { "subject": "创造", "predicate": "是", "object": "想法的连接", "date": "2020-02-03 14:24:55" }
]
```

#### 2 数据加载优化

将数据分散存储至两个 `.json` 文件后，需要分开两次分别请求。我们允许这两次请求都是异步、并发的，各自独立执行，但最后共同处理它们返回的结果。jQuery 提供的 `$.when()` 方法就可以做到这点。

修改 `.md` 文章文件中的 `loadData()` 方法：

```javascript
function loadData(callback) { // 数据加载方法
  $.when($.get('/data/knowledge-base/nodes.json'), $.get('/data/knowledge-base/lines.json')).done(function(nodesResponse, linesResponse) {
    callback({ nodes: nodesResponse[0], lines: linesResponse[0] });
  });
}
```

相较之前的方式，这么做会增加一次请求资源的网络开销，但能使数据的存储更有条理，更有利于管理和维护。

### 图例排序 2020.2.7

随着节点类型的增加，图例的数量也在增多。

图例的顺序即是节点分类的顺序，这与节点录入的顺序有关。为了使其更利于查找，现按名称对分类信息进行重新排序。

这里可以利用 js 的 `Array.sort()` 方法。

如下修改调用 `loadData(callback)` 方法时传入的 `callback` 参数：

```javascript
loadData(function(response) {
  ...

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

  ...  
});
```

##### 相关链接

知识图谱[传送门](/tools/knowledge-graph/)

下一篇：[《知识图谱支持搜索》](/hexo/knowledge-graph/support-search/)
