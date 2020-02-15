---
title: 自制 SVG 图标
date: 2020‎-01-‎29‎ 10:05:16
categories:
- [太阳拳]
tags: [设计, 制作, SVG]
summary: 自制一个 SVG 格式的专属 LOGO 图标
img: http://static.sunyt.site/desk_20200201095737.jpg
---

新博客搭建的第 N 天，大体上用着还挺顺手，唯一的缺憾就是少一个自己专属的 LOGO。之前因为没有准备，索性把 LOGO 这玩意儿给去掉了，以无 LOGO 状态“裸跑”了好一阵子。可好些天下来了，一想到这茬，还是觉也睡不好，饭也吃不香（主要是让新型冠状病毒给禁足了，在家闲得慌）。

博主从小是个“龙珠”迷，陪伴着长大的。趁着这些天，结合“龙珠”里的概念，对博客整体做了[内容建设](/tools/map/)和[改造](/hexo/build/#tian-jia-long-zhu-su-cai)。

可是思来想去，还是急需一个 LOGO。

博主不是艺术专业出身，没有什么设计和绘画方面的经验。小时候涂涂教科书、出出黑板报、拿拿儿童绘画奖的那些“光辉事迹”，我也统统都不提了。/doge/doge/doge

可 LOGO 再怎么说，也是 *一个品牌的形象、一个网站的灵魂*。今儿无论如何，都要把这事儿给办喽！~

## 1 LOGO 选型

LOGO 设计的第一原则就是要尽可能贴近主题。

我秉承着“简单、抽象、抓重点”的设计理念，在脑海中迅速绘制了一副草图 ——

> 这不“龙珠”嘛，那就画一球儿，中间加一个标准的五角星。好办！
>
> 说实话，它刚开始的样子，看上去可真像个红印章。
>
> ![红印章](http://static.sunyt.site/hong-yin-zhang.png)

可正当我打算把我的设想实现在电脑屏幕上的时候，我意识到了一个根本性问题：什么样的图片格式才适合用来承载一个 LOGO 呢？


<div class="anchor" id="tu-pian-ge-shi-xuan-xing"></div>

### 1.1 图片格式选型

常见的图片文件格式各有各的特点。

| 格式 | 文件后缀   | 伸缩后保真 | 透明色 | 动画   |
|------|-----------|-----------|--------|-------|
| JPEG | `.jpg`    | 不支持     | 不支持 | 不支持 |
| PNG  | `.png`    | 不支持     | 支持   | 不支持 |
| SVG  | `.svg`    | 支持       | 支持   | 不支持 |
| GIF  | `.gif`    | 不支持     | 支持   | 支持   |

Matery 主题的博主[闪烁之狐](https://blinkfox.github.io/)使用的 LOGO 是 PNG 格式，先入为主，这一度成为我的第一选择。而在慎重考虑了更多的因素之后，我改变了我最初的选择 ——

> 1. 我希望它在 *缩小和放大后图像能够保真*，有更好的通用性，因为我的 LOGO 可能会使用在不同的区域，有大有小。
>
> 2. 它还需要 *支持透明色*，由于“龙珠”是一个需要立体感的圆，它得是空心的，而且允许有点光源形成的光亮效果。
>
> 3. 而我对色彩种类和动画上没有特别的要求，支持白色的静态图片即可。

最后我选择了 SVG 格式。


<div class="anchor" id="svg-jian-jie"></div>

### 1.2 SVG 简介

SVG（Scalable Vector Graphics，可缩放矢量图）算是比较最火热的图像文件格式。

它基于 XML（Extensible Markup Language），由 World Wide Web Consortium（W3C）联盟进行开发。严格来说应该是一种开放标准的矢量图形语言，可让你设计激动人心的、高分辨率的Web图形页面。

用户可以直接用代码来描绘图像，可以用任何文字处理工具打开 SVG 文件，通过改变部分代码来使图像具有交互功能，并可以随时插入到 HTML 中通过浏览器进行查看。

### 1.3 作图工具选择

由于对 LOGO 的设想非常简单，工具的挑选上并没有什么特殊的要求，能画、能存、简单易用就行。

于是我在一番百度之后，选择了一款界面简洁的 [SVG 在线编辑工具](https://svg.wxeditor.com/)。

![SVG 作图工具图示](http://static.sunyt.site/svg-wxeditor-introduction.png)

## 2 LOGO 制作

### 2.1 SVG 图标设计

我使用圆、五角星和简单的曲线，绘制了一个“龙珠”的图案。

![SVG 图标制作](http://static.sunyt.site/svg-wxeditor.png)

画布的大小是 `200px × 200px`。大圆的直径要比 `200px` 稍小一些，线粗 `8px`。位于正中央的五角星最大，线粗 `5px`；周围的 3 个五角星则稍小一些。左下角添加了一段弧线，显得“龙珠”更加立体。

此外，我还在大圆左上角的位置添加了一块圆形的阴影，模拟点光源照射开来的图案，给整个“龙珠”增添了色彩和立体感。

### 2.2 使用 LOGO

将文件下载保存为 `logo.svg`，添加至 Hexo 项目中的 `themes/matery/source/medias` 目录下，并修改 `themes/matery/_config.yml` 主题配置文件。

```yaml
# Configure website favicon and LOGO
# 配置网站favicon和网站LOGO
favicon: /favicon.png # 请忽略我，网页图标不是这篇文章的主角
logo: /medias/logo.svg # 添加 LOGO，看我看我！！
```

这样便自制了一个效果还不错的 LOGO 图标（见网站左上角）。

![自制“龙珠”主题 LOGO 效果图](http://static.sunyt.site/my-logo.png)

## 3 查看源代码

在之前的 [SVG 简介](#svg-jian-jie)中，你可曾注意到，SVG 格式的文件是使用 `XML` 语言来描述的？

我们何不尝试读一读其中的代码呢？

用编辑器打开保存的 `logo.svg` 文件，可以查看它的源代码。

```svg
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
  <defs>
    <radialGradient cy="0.25" cx="0.382" spreadMethod="pad" id="svg_8"> <!-- 圆形阴影区域 -->
      <stop offset="0" stop-color="#ffffff"/> <!-- 圆心颜色 -->
      <stop offset="1" stop-color="rgba(255, 255, 255, .3)"/> <!-- 圆周颜色 -->
    </radialGradient>
  </defs>
  <g>
    <title>background</title>
    <rect x="-1" y="-1" width="202" height="202" id="canvas_background" fill="none"/>
    <g id="canvasGrid" display="none">
      <rect id="svg_6" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)"/>
    </g>
  </g>
  <g>
    <title>Layer 1</title>
    <ellipse fill-opacity="0.6" fill="url(#svg_8)" stroke-width="8" cx="100" cy="100" id="svg_1" rx="90" ry="90" stroke="#fff"/> <!-- 大圆 -->
    <path fill="#ffffff" stroke-width="5" d="m51.03751,91.14299l37.81491,0l11.6851,-35.92401l11.6851,35.92401l37.81491,0l-30.59285,22.202l11.6857,35.92401l-30.59286,-22.20261l-30.59286,22.20261l11.68571,-35.92401l-30.59286,-22.202z" id="svg_2" fill-opacity="0.3" stroke="#fff"/> <!-- 中间的大五角星 -->
    <path fill="#ffffff" stroke-width="4" stroke-opacity="null" fill-opacity="0.3" d="m38.77375,53.14875l14.36866,0l4.44003,-13.65017l4.44003,13.65017l14.36866,0l-11.62447,8.43618l4.44026,13.65017l-11.62448,-8.43641l-11.62447,8.43641l4.44026,-13.65017l-11.62448,-8.43618z" id="svg_3" stroke="#fff"/> <!-- 左上角的小五角星 -->
    <path fill="#ffffff" stroke-width="3" stroke-opacity="null" fill-opacity="0.3" d="m130.74999,42.98297l8.78624,0l2.71501,-8.3469l2.71502,8.3469l8.78624,0l-7.10821,5.1586l2.71516,8.34689l-7.10821,-5.15874l-7.10821,5.15874l2.71516,-8.34689l-7.1082,-5.1586z" id="svg_4" stroke="#fff"/> <!-- 右上角的小五角星 -->
    <path fill="#ffffff" stroke-width="3" stroke-opacity="null" fill-opacity="0.3" d="m146.24873,128.01l10.06602,0l3.11047,-9.56267l3.11048,9.56267l10.06601,0l-8.14356,5.90998l3.11064,9.56267l-8.14357,-5.91014l-8.14356,5.91014l3.11064,-9.56267l-8.14357,-5.90998z" id="svg_5" stroke="#fff"/> <!-- 右下角的小五角星 -->
    <path fill="#ffffff" stroke-width="8" stroke-opacity="null" fill-opacity="0.61" opacity="0.5" d="m32.50126,127.10812c12.33775,34.10842 46.26656,44.01087 45.49545,43.89053" id="svg_15" stroke="#fff"/> <!-- 左下角的弧线 -->
  </g>
</svg>
```

`<g>` 元素表示一个图层。

`<radialGradient>` 元素是左上角的圆形阴影，它的 `cx` 和 `cy` 属性确定了圆心的位置；内部的 `<stop>` 元素描述了阴影渐变的圆心和圆周两端。

`<ellipse>` 元素是大圆，其中 `cx`、`cy` 属性代表圆心的位置，`rx`、`ry` 属性描述了椭圆在横、竖方向上的直径。

若干个 `<path>` 元素是五角星，`d` 属性中的字符 `m` 表示 *画笔的起始位置*，字符 `z` 表示 *自动闭合*，中间的数字是一系列的点的坐标。

`<ellipse>` 和 `<path>` 元素的 `stroke-width` 属性就是上文提到的线粗。

如果你制作的图标线条是黑色的，将 `<ellipse>` 和 `<path>` 元素的 `stroke` 线条颜色属性值修改为 `#fff` 白色即可。

如此看来，SVG 格式的文件很有逻辑性可言，它告描述了渲染的规则和步骤，它比一般的“像素坐标 + 颜色”的描述方式更高级。
