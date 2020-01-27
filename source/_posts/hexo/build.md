---
title: Hexo博客搭建
date: 2020-01-24 05:54:13
categories:
- [Hexo]
tags: [Hexo, 博客, 个人博客, 博客搭建]
summary: 描述了一个博客网站诞生的过程
---
今天是2020年的除夕。时光犹如白驹过隙，转眼又将开启崭新的一年。

过去的25年是美好而短暂的，美在成就了如今的我，短于日子走得太快，忘了仔细地去记录。这也是偶尔令我感到些许遗憾的。

人们常说 *“种一棵树最好的时间是十年前，其次是现在”*，经营一片自己专属的地界亦如是。于是我花了些时间搭建了自己的第一个博客，并写下此文加以记录。

## 1 博客选型

现如今，市面上博客相关的工具和产品繁多，涵盖了[语雀](https://www.yuque.com/)、[简书](https://www.jianshu.com/)、[博客园](https://www.cnblogs.com/)、[掘金](https://juejin.im/)、[知乎](https://www.zhihu.com/)等在线承载文字平台，也包括了[Gitbook](https://www.gitbook.com/)、[Hexo](https://hexo.io/)、[Jekyll](http://jekyllcn.com/)、[Vuepress](https://vuepress.vuejs.org/)等静态独立博客工具，更有[Ghost](http://www.ghostchina.com/)这样支持后台的博客系统。

<table>
  <thead>
  <tr>
    <th style="min-width: 20px;"></th>
    <th style="min-width: 120px;">名称</th>
    <th>特点</th>
    <th style="min-width: 102px;">可独立部署</th>
    <th style="min-width: 88px;">集成后台</th>
    <th style="min-width: 102px;">技术支持</th>
    <th style="min-width: 88px;">SEO效果</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td style="min-width: 0; text-align: center;">1</td>
    <td>语雀</td>
    <td>优雅高效的在线文档编辑与协同工具</td>
    <td>否</td>
    <td>否</td>
    <td>阿里巴巴</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">2</td>
    <td>简书</td>
    <td>优质的创作社区</td>
    <td>否</td>
    <td>否</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">3</td>
    <td>博客园</td>
    <td>面向开发者的知识分享社区</td>
    <td>否</td>
    <td>否</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">4</td>
    <td>掘金</td>
    <td>帮助开发者成长的社区</td>
    <td>否</td>
    <td>否</td>
    <td></td>
    <td>有副作用</td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">5</td>
    <td>知乎</td>
    <td>中文互联网最大的知识平台</td>
    <td>否</td>
    <td>否</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">6</td>
    <td>SegmentFault</td>
    <td>中国领先的开发者技术社区</td>
    <td>否</td>
    <td>否</td>
    <td></td>
    <td>适合导流</td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">7</td>
    <td>Gitbook</td>
    <td>适合搭建技术文档、编写电子书</td>
    <td>是</td>
    <td>否</td>
    <td>Github/Git</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">8</td>
    <td>Hexo</td>
    <td>
      <ul>
        <li>产品成熟</li>
        <li>生成速度快</li>
        <li>使用简单</li>
        <li>插件丰富</li>
      </ul>
    </td>
    <td>是</td>
    <td>否</td>
    <td>Node.js</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">9</td>
    <td>Jekyll</td>
    <td>是 GitHub Pages 背后的引擎</td>
    <td>是</td>
    <td>否</td>
    <td>Ruby</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">10</td>
    <td>Vuepress</td>
    <td>
      <ul>
        <li>单页应用</li>
        <li>简洁至上</li>
      </ul>
    </td>
    <td>是</td>
    <td>否</td>
    <td>Vue</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">11</td>
    <td>Docz</td>
    <td>
      <ul>
        <li>单页应用</li>
        <li>零配置</li>
        <li>可插拔</li>
      </ul>
    </td>
    <td>是</td>
    <td>否</td>
    <td>Webpack 4</td>
    <td></td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">12</td>
    <td>Ghost</td>
    <td>
      <ul>
        <li>自带功能强大的后台</li>
        <li>支持多人协作</li>
        <li>插件丰富</li>
        <li>部署简单</li>
        <li>UI美观</li>
      </ul>
    </td>
    <td>是</td>
    <td>是</td>
    <td>Node.js</td>
    <td>较好</td>
  </tr>
  <tr>
    <td style="min-width: 0; text-align: center;">13</td>
    <td>Solo</td>
    <td>专为程序员设计的、小而美的开源博客系统</td>
    <td>是</td>
    <td>是</td>
    <td>Java</td>
    <td></td>
  </tr>
  </tbody>
</table>

这些工具大多都支持现在流行的 `Markdown` 标记语言，书写简洁高效。

简书、博客园这些平台可以直接注册使用，写文章发表的用户交互好，SEO做得也不错，但缺点是容易受到平台的约束，还有广告。而自己租赁服务器、购买域名搭建博客，尽管自由度高，但成本昂贵，开发和维护也很耗费精力和时间。相较这两种，还有一个折中的方案，就是将生成的静态页面托管在Github、Coding等平台上。

我本是信息管理专业出身，校园里有幸拜师入门习得一知半解，毕业后去动物园做起程序猿。学信管的，本身便懂些信息存取的法门；编程又是一项很实用的技能。两者结合，既考虑信息的存取成本和展现形式，又追求技术上的前卫和开放自由。搭建博客的目的 *不是折腾技术，而是记录所见所想、多输出一些高质量的文章*。于是我选择了Hexo——由 `Node.js` 支持、简单而功能强大的博客框架，以便更专注于写作。

---

## 2 Hexo简介

依照[官网文档](https://hexo.io/zh-cn/docs/)的说明，Hexo是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

本站就是一个很好的例子。

---

## 3 安装

Hexo的安装非常容易，有编程基础的朋友也可以参照[Hexo官网文档](https://hexo.io/zh-cn/docs/)完成此步骤。

### 3.1 准备工作

在安装Hexo前，我们需要先安装[Git](https://git-scm.com/)和[Node.js](https://nodejs.org/en/)。这两样工具的安装相对简单，只需移步至其官网，下载对应操作系统的安装包，按照引导完成安装即可。此处不做赘述。

### 3.2 安装Hexo

安装完 `Node.js` 后，就可以通过 `npm` 安装Hexo了。

打开命令行，执行如下命令。

```bash
npm install -g hexo-cli
```

值得一提的是，由于 `npm` 使用的是国外的源，网络不稳定且可能被墙。推荐使用更加稳定快速的[淘宝镜像](https://npm.taobao.org/)。配置淘宝镜像后，文章中的 `npm` 命令均可使用 `cnpm` 代替。

---

## 4 创建项目

安装完成后，便可以依照[文档](https://hexo.io/zh-cn/docs/setup)开始建站了。

执行下面的命令初始化我们的第一个博客项目。

```bash
hexo init <folder>
cd <folder>
npm install
```

创建完成后，项目的目录结构如下。

```
.
├── scaffolds
├── source # 源文件目录
├── themes # 主题目录
├── _config.yml # 配置文件
└── package.json
```

其中， `_config.yml` 是博客的配置文件， `source` 目录用于存放文章的源文件， `themes` 目录用于存放主题，默认有 `landscape` 主题。

---

## 5 本地运行

打开命令行，cd至项目所在目录，执行命令。

```bash
hexo generate
hexo server
```

执行 `hexo generate` 或 `hexo g` 命令会生成 `public` 目录，用于存放Hexo生成的静态页面。

```
.
├── public # 编译生成的静态文件
├── scaffolds
├── source
├── themes
├── _config.yml
└── package.json
```

继续执行 `hexo server` 或 `hexo s` 命令，启动server服务。

![](http://q4kbn37nl.bkt.clouddn.com/hexo-server.png?e=1579882840&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:PQe9BimqgGe37rRNvPFAzHenSGQ)

执行命令后，打开浏览器，输入 `localhost:4000` ，即可访问我们的第一个博客网站。

![](http://q4kbn37nl.bkt.clouddn.com/hexo-init-page.png?e=1579883002&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:BHUuNzGjZqACRuo5pctN5FGpKGg)

---

## 6 基本用法

执行如下命令创建一篇新文章或者新的页面。

```bash
hexo new [layout] <title>
```

可以在命令中指定文章的布局（layout）： `post` 、 `page` 和 `draft` ，默认为 `post`。

在创建这三种不同类型的文件时，它们将会被保存到不同的目录；而自定义的其他布局和 `post` 相同，都将储存到 `source/_posts` 目录下。

| 布局    | 存放目录          |
|---------|------------------|
| `post`  | `source/_posts`  |
| `page`  | `source`         |
| `draft` | `source/_drafts` |

执行命令后，可以在 `source` 目录下看到新建的 `.md` 文件。

```
.
├── public
├── scaffolds
├── source # page类型文件
|   ├── _drafts # draft类型文件
|   └── _posts # post类型文件
├── themes
├── _config.yml
└── package.json
```

编辑 `source` 目录下的文件，开始我们的写作。

关于Hexo的更多用法，可以参照[官方文档](https://hexo.io/zh-cn/docs/)自行尝试。

---

## 7 更换主题

Hexo有丰富的[主题](https://hexo.io/themes/)，默认的是 `landscape` ，可以根据自己的喜好挑选和更换。

我选择的主题是[Matery](https://github.com/blinkfox/hexo-theme-matery)。在其GitHub链接上下载该主题，解压后命名为 `matery` ，存放至 `themes` 目录下。

然后编辑 `_config/yml` 文件中的配置信息，将 `theme` 修改为themes目录下的主题目录名。

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: matery
```

这样便完成了更换主题的操作。

Matery主题提供了相对美观的菜单、封面、主页、视频和音乐等组件。我们可以在主题配置文件 `themes/matery/_config.yml` 里更改相关的配置，来更改这些组件的配置和个人信息的配置。

此外，我们还需对 `标签` 、 `分类` 、 `关于` 、 `留言板` 和 `友情链接` 菜单，创建相应的界面文件。

执行 `hexo new page categories` 命令创建分类页，会在 `source` 目录下生成 `categories/index.md` 文件，并使其包含如下内容。

```
---
title: categories
date: 2020-01-23 15:40:00
type: categories
layout: categories
---
```

同样地，创建标签页 `tags/index.md` ，使其包含如下内容。

```
---
title: tags
date: 2020-01-23 15:40:26
type: tags
layout: tags
---
```

以此类推，继续创建 `about` 、 `contact` 和 `friends` 页面。这样一来，博客的菜单都可以点击了。

至此，项目的目录结构会像下面这样。

```
.
├── public
├── scaffolds
├── source
|   ├── _drafts
|   ├── _posts
|   ├── about # 关于
|   |   └── index.md
|   ├── categories # 分类
|   |   └── index.md
|   ├── contact # 留言板
|   |   └── index.md
|   ├── friends # 友情链接
|   |   └── index.md
|   └── tags # 标签
|       └── index.md
├── themes
|   ├── landscape # 默认主题
|   └── matery # 我选择的 Matery 主题
├── _config.yml
└── package.json
```

该主题的更多用法，还可以参照[Matery](https://github.com/blinkfox/hexo-theme-matery)文档继续体验。

---

## 8 部署至GitHub

经过前面的努力，我们的博客已经可以在本地运行了。

但如果想让其他人人访问我们的博客，我们还需要找一台服务器，将博客部署上去。[GitHub Pages](https://pages.github.com/)就可以免费充当这样的服务器。

接下来，我们将博客部署至GitHub，让朋友们都能访问。

### 8.1 创建GitHub个人仓库

登录[GitHub](https://github.com/)，点击 `New repository` 创建一个名为 `<username>.github.io` 的仓库。其中 `username` 是用户名，比如我的GitHub用户名是 `rainstopper` ，我创建的仓库名称就是 `rainstopper.github.io` 。

### 8.2 添加GitHub SSH配置

为GitHub添加SSH配置，可以在后续Git代码进行 `push` 操作时，跳过用户名和密码的输入，更加便利。不介意每次提交都输密码，或者有安全及其他方面考虑的，也可以跳过此步骤。

打开 `Git Bash` ，执行如下命令设置Git的用户名和邮箱信息。

```bash
git config --global user.name <username>
git config --global user.email <email>
```

可以使用以下命令检查配置是否生效。

```bash
git config user.name
git config user.email
```

执行以下命令创建SSH秘钥文件。

```bash
ssh-keygen -t rsa -C <email>
```

这个过程中会提示输入文件名，也可以不设置，一路回车。

![](http://q4kbn37nl.bkt.clouddn.com/generate-ssh-key.png?e=1579891710&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:JZD8R9_SaZxT5rxAEDAlwVE2iMk)

最后会提示在用户目录下生成了 `.ssh` 文件夹，里面包含了 `id_rsa` 私钥文件和 `id_rsa.pub` 公钥文件。

在GitHub的 `Settings` 中找到 `SSH and GPG keys` 的配置页面，点击 `New SSH key` 按钮，在 `title` 中输入自定义的名称，将 `id_rsa.pub` 文件中的内容拷贝至 `Key` ，完成SSH秘钥的创建。

![](http://q4kbn37nl.bkt.clouddn.com/github-ssh.png?e=1579891366&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:duNvV4Ij1lXBPpJHiVfB2OR42Y8)

使用以下命令验证SSH的配置是否生效。

```bash
ssh -T git@github.com
```

出现以下提示信息时，即为配置成功。

![](http://q4kbn37nl.bkt.clouddn.com/test-github-ssh.png?e=1579891976&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:v38GguGs12J7jfuwfowPInGShZc)

### 8.3 将Hexo生成的静态页面托管至GitHub

有了GitHub仓库，我们就能将Hexo生成的静态页面托管至GitHub。

如下修改项目的配置文件 `_config.yml` 。

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:<username>/<username>.github.io.git # GitHub仓库的ssh链接
  branch: master
```

接下来执行以下命令安装Hexo的Git发布插件 `hexo-deployer-git` 。

```bash
npm install hexo-deployer-git --save
```

然后执行以下命令，将项目部署至GitHub。

```bash
hexo clean
hexo generate
hexo deploy
```

其中 `hexo clean` 或 `hexo cl` 命令会清理之前生成的文件； `hexo deploy` 或 `hexo d` 命令进行部署。

部署完成后，我们的项目目录中会出现一个 `.deploy_git` 目录，其中的代码就是 `push` 至GitHub仓库中的静态文件。

```
.
├── .deploy_git # 部署至GitHub的静态文件
├── public
├── scaffolds
├── source
├── themes
├── _config.yml
└── package.json
```

然后我们就能在浏览器打开 `<username>.github.io` 访问自己的博客了（可能需要稍等一会儿）。赶紧将地址奔走相告，让小伙伴们也体验一下我们自己搭建的博客吧~

至此，我们已经完成了博客的基本搭建过程。

---

## 9 多终端工作

经过上面的操作，我们已经完成了GitHub的部署，让朋友们都能访问我们的博客了。

可仔细看GitHub仓库中的文化，发现都是编译够生成的代码，而没有我们编写博客时的源文件。假如我们需要重装操作系统或者更换电脑，就可能会丢失这些源文件。

这时，我们可以利用GitHub分支来实现源代码的管理，以便在多个终端下都能进行写作。

### 9.1 创建GitHub分支

进入我们之前创建好的GitHub仓库，在 `Code` 菜单下点击 `Branch:master` 按钮，新建一个名为 `hexo-source` 的分支，并将其设置为默认分支。

![](http://q4kbn37nl.bkt.clouddn.com/github-branch-hexo-source.png?e=1579894028&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:p8fSwlsoS5MJA2UTKOVNUg5tJco)

### 9.2 上传源代码

执行以下命令将仓库 `clone` 到本地（会自动命名为 `<username>.github.io` ），其中的链接就是GitHub仓库的https链接。

```bash
git clone https://github.com/<username>/<username>.github.io.git
```

紧接着将博客项目的完整代码拷贝至其中，执行以下命令。

```bash
cd <username>.github.io
git add .
git commit -m "上传博客项目源文件"
git push
```

执行 `push` 命令时可能需要输入GitHub的用户名和密码。

`push` 完成后，便可以在仓库的 `hexo-source` 分支下看到我们项目中的源代码，而 `master` 分支下依然是由Hexo生成的静态文件。

建议每次完成写作时，都依次执行上述命令，将自己的源文件 `push` 至GitHub仓库中，以防丢失。

### 9.3 更换终端

当我们需要更换终端时，依次安装 `Git` 和 `Node.js` ，执行 `npm install -g hexo-cli` 命令安装Hexo，设置GitHub的SSH Key，再将GitHub仓库 `clone` 到本地，即可继续博客的写作。

至此，我们已经可以投入到博客的写作中去了。

---

## 10 设置个人域名

我觉得 `<username>.github.io` 这个地址不够逼格，想要一个自己专属的域名，用它来访问我们的博客。

### 10.1 购买域名

我们可以在[阿里云](https://wanwang.aliyun.com/)上查询和购买域名。

最常用的域名是 `.com` ，价格比较昂贵；其次是 `.com.cn` 、 `.cn` 和 `.net` 。然而这些常用的域名大多都已经被注册了。

剩下的还有 `.site` 、 `.top` 、 `.vip` 等域名，只要能备案就行。我买的是 `sunyt.site` （以我中文名的缩写命名）。

### 10.2 域名备案

国家要求，即使是个人非商业用途的网站，也需要将域名进行备案。

我们在阿里云上购买域名后，应该尽快进行[备案](https://beian.aliyun.com/)。备案前需要购买先服务器，我买的是相对便宜的云虚拟主机。

当然，未备案的域名也可以继续下面的步骤，但回头记得去[备案](https://beian.aliyun.com/)。

*在完成备案前，应当尽可能减少域名的解析。*

### 10.3 域名解析

购买完成后，需要先进行实名认证，再进入[阿里云控制台](https://dns.console.aliyun.com/)的域名解析设置菜单，做域名解析的配置。

可以直接使用 `新手引导` 按钮，它会自动添加主机记录为 `@` 和 `www` 、解析线路为 `默认` 的两条配置。

![](http://q4kbn37nl.bkt.clouddn.com/aliyun-dns-guide.png?e=1579896004&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:IwzoBZ4z-sE66szbZ6VwSiJaXNo)

其中的记录值，我们可以先在命令行中通过 `ping <username>.github.io` 获取到项目在GitHub服务器上所在的IP地址，将其填入。

### 10.4 修改GitHub仓库配置

在GitHub仓库的 `Settings` 菜单下找到 `Custom domain` ，设置域名并保存。

![](http://q4kbn37nl.bkt.clouddn.com/github-settings-custom-domain.png?e=1579896418&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:xBGBLkVCOB_Xqruz4Wvz7iOezqo)

### 10.5 修改项目配置并重新部署

在项目 `source` 目录下新建一个名为 `CNAME` 的文件（注意没有后缀名），在文件内写上自己的域名，比如 `sunyt.site` 。

```
.
├── .deploy_git
├── public
├── scaffolds
├── source
|   ├── _drafts
|   ├── _posts
|   ...
|   └── CNAME
├── themes
├── _config.yml
└── package.json
```

执行以下命令重新部署。

```bash
hexo clean
hexo generate
hexo deploy
```

过不了多久，在浏览器中输入我的域名 `sunyt.site` ，就能访问我在GitHub托管的博客了。

---

## 11 部署至Coding实现国内外分流

我们已经将Hexo博客部署在GitHub上了，但GitHub是国外的，而且百度的蜘蛛不能爬取GitHub。如果希望我们的博客被百度收录，而且能更快地访问，可以同时在国内的[Coding](https://coding.net/)平台做托管。这么一来，在国内访问的是Coding，国外就走GitHub。

### 11.1 创建Coding项目

申请一个Coding账户，然后创建一个项目，项目的名称可以是任意的，我创建的项目名称与此前在GitHub上的用户名相同。

### 11.2 添加SSH配置

这一步也和GitHub一样。添加完成后，验证一下是否生效。

```bash
ssh -T git@e.coding.net
```

### 11.3 修改项目配置实现多平台部署

修改项目 `_config.yml` 文件中的配置。其中 `github` 和 `coding` 分别填写GitHub仓库和Coding项目的ssh链接。

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo:
    github: git@github.com:rainstopper/rainstopper.github.io.git,master
    coding: git@e.coding.net:rainstopper/rainstopper.git,master
```

执行以下命令重新部署。

```bash
hexo clean
hexo generate
hexo deploy
```

部署的过程中，我们会看到先往GitHub仓库执行了一次 `push` 操作，紧接着又往Coding项目上也 `push` 了一次。

部署完成后，打开Coding项目代码，我们会看到与GitHub相同的Hexo静态文件。

随即在Coding上部署项目，并设置自定义域名为自己的域名 `sunyt.site` 。

![](http://q4kbn37nl.bkt.clouddn.com/coding-deploy-setting.png?e=1579899019&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:OyAp31x2qJBjjqs52UNHOhts1H4)

### 11.4 修改域名解析配置

回到[阿里云控制台](https://dns.console.aliyun.com/)，将原来指向GitHub配置的解析路线改为 `境外` ，再分别添加主机记录为 `@` 和 `www` 的两条记录，记录类型选择 `默认` ，记录值填写Coding项目的静态网站域名。

![](http://q4kbn37nl.bkt.clouddn.com/aliyun-dns-setting-github-and-coding.png?e=1579899444&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:MqbSUQGDtVH4Uw6vY1sI9PDC0c0)

不一会儿，我们在国内访问域名 `sunyt.site` 就会访问到托管至Coding的页面了。

我们可以通过在国内 `ping sunyt.site` 和 `ping ssd38z.coding-pages.com` ，观察解析到的IP地址是不是相同的，来验证域名解析的正确性。

至此，我们的博客已经在GitHub和Coding双向部署，并通过域名解析，对国内外进行分流。

---

## 更多

### 使用七牛云存储图片 2020.1.24

Hexo支持使用 `hexo-asset-image` 插件内联图片，该插件会在创建文章的同时，在同一目录下创建与其同名的目录，用来存放图片文件，使用非常方便，但缺点也显而易见： `source` 目录会很庞大，且内联图片会影响页面的渲染速度。

更好的做法是使用第三方平台来存储图片，我使用的是[七牛云](https://portal.qiniu.com/)。

创建七牛云账号后，需要先进行实名认证，再在控制台打开 `对象存储` 下的 `空间管理` 菜单，去新建空间，否则会报 `403：没有权限` 。

写作时如果遇到图片，只需将其上传至七牛云，再在需要插入图片的位置添加Markdown标记 `![](<url>)` 即可。

---

### 代码块样式优化 2020.1.24

默认的代码块生成会编译出 `<table>` 元素，使用左右两个 `<td>` 分别展示行号和代码内容，与Matery主题的样式有冲突，非常不美观。

解决方法是安装 `hexo-prism-plugin` 插件。

```bash
npm install hexo-prism-plugin --save
```

紧接着，按照该插件的[文档](https://github.com/ele828/hexo-prism-plugin)描述，修改项目配置文件 `_config.yml` 。

```yaml
highlight:
  enable: false # 关闭默认的代码高亮配置
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false

prism_plugin:
  mode: 'preprocess' # realtime/preprocess
  theme: 'tomorrow'
  line_number: false # default false
  custom_css:
```

最后，重新生成代码即可。

```bash
hexo cl
hexo g
hexo s
```

### 文章字数统计 2020.1.27

为了在文章开头处展示文章字数、阅读时长信息，需要安装 `hexo-wordcount` 插件。

```bash
npm install hexo-wordcount --save
```

然后修改主题配置文件 `themes/matery/_config.yml` 中的信息。

```yaml
# Post word count, reading duration, site total word count.
# Before you activate, please confirm that you have installed the hexo-wordcount plugin,
# install the plugin command: `npm i --save hexo-wordcount`.
# 文章字数统计、阅读时长、总字数统计等
# 文章信息--若要开启文章字数统计，需要安装 hexo-wordcount 插件，安装命令: `npm i --save hexo-wordcount`
postInfo:
  date: true # 发布日期
  update: false # 更新日期
  wordCount: true # 文章字数统计
  totalCount: false # 站点总文章字数
  min2read: true # 文章阅读时长
  readCount: true # 文章阅读次数
```
