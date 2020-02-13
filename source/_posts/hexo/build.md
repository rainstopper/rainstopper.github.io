---
title: Hexo 博客搭建
date: 2020-01-24 05:54:13
categories:
- [精神时光屋]
tags: [Hexo, 博客, 个人博客, 博客搭建]
summary: 精神時光屋的诞生过程
img: http://q4kbn37nl.bkt.clouddn.com/jing-shen-shi-guang-wu.jpg?e=1580247922&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:Z8FZdNQ7yKUvPUgUIBWdd7_Sadg
---
今天是2020年的除夕。时光犹如白驹过隙，转眼又将开启崭新的一年。

过去的 25 年是美好而短暂的，美在成就了如今的我，短于日子走得太快，忘了仔细地去记录。这也是偶尔令我感到些许遗憾的。

人们常说 *“种一棵树最好的时间是十年前，其次是现在”*，经营一片自己专属的地界亦如是。于是我花了些时间搭建了自己的第一个博客，并写下此文加以记录。


<div class="anchor" id="bo-ke-xuan-xing"></div>

## 1 博客选型

现如今，市面上博客相关的工具和产品繁多，涵盖了[语雀](https://www.yuque.com/)、[简书](https://www.jianshu.com/)、[博客园](https://www.cnblogs.com/)、[掘金](https://juejin.im/)、[知乎](https://www.zhihu.com/)等在线承载文字平台，也包括了 [Gitbook](https://www.gitbook.com/)、[Hexo](https://hexo.io/)、[Jekyll](http://jekyllcn.com/)、[Vuepress](https://vuepress.vuejs.org/) 等静态独立博客工具，更有 [Ghost](http://www.ghostchina.com/) 这样支持后台的博客系统。

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

简书、博客园这些平台可以直接注册使用，写文章发表的用户交互好，SEO做得也不错，但缺点是容易受到平台的约束，还有广告。而自己租赁服务器、购买域名搭建博客，尽管自由度高，但成本昂贵，开发和维护也很耗费精力和时间。相较这两种，还有一个折中的方案，就是将生成的静态页面托管在 GitHub、Coding 等平台上。

我本是信息管理专业出身，校园里有幸拜师入门习得一知半解，毕业后去动物园做起程序猿。学信管的，本身便懂些信息存取的法门；编程又是一项很实用的技能。两者结合，既考虑信息的存取成本和展现形式，又追求技术上的前卫和开放自由。搭建博客的目的 *不是折腾技术，而是记录所见所想、多输出一些高质量的文章*。于是我选择了 Hexo —— 由 `Node.js` 支持、简单而功能强大的博客框架，以便更专注于写作。

---

## 2 Hexo 简介

依照[官网文档](https://hexo.io/zh-cn/docs/)的说明，Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

本站就是一个很好的例子。

---

## 3 安装

Hexo 的安装非常容易，有编程基础的朋友也可以参照 [Hexo 官网文档](https://hexo.io/zh-cn/docs/)完成此步骤。

### 3.1 准备工作

在安装 Hexo 前，我们需要先安装 [Git](https://git-scm.com/) 和 [Node.js](https://nodejs.org/en/)。这两样工具的安装相对简单，只需移步至其官网，下载对应操作系统的安装包，按照引导完成安装即可。此处不做赘述。

### 3.2 安装 Hexo

安装完 `Node.js` 后，就可以通过 `npm` 安装 Hexo 了。

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

其中，`_config.yml` 是博客的配置文件，`source` 目录用于存放文章的源文件，`themes` 目录用于存放主题，默认有 `landscape` 主题。

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

继续执行 `hexo server` 或 `hexo s` 命令，启动 server 服务。

![命令行启动](http://q4kbn37nl.bkt.clouddn.com/hexo-server.png?e=1579882840&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:PQe9BimqgGe37rRNvPFAzHenSGQ)

执行命令后，打开浏览器，输入 `localhost:4000`，即可访问我们的第一个博客网站。

![Hexo 默认页](http://q4kbn37nl.bkt.clouddn.com/hexo-init-page.png?e=1579883002&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:BHUuNzGjZqACRuo5pctN5FGpKGg)

---

## 6 基本用法

### 6.1 写作

执行如下命令创建一篇新文章或者新的页面。

```bash
hexo new [layout] <title>
```

可以在命令中指定文章的布局（layout）：`post`、`page` 和 `draft`，默认为 `post`。

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

### 6.2 管理资源

*资源管理的关键在于理解 Hexo 的代码生成规则。*

根据 Hexo [官方文档](https://hexo.io/zh-cn/docs/asset-folders)中的描述，在文章中管理资源文件可以有多种方式。

1. 一种方式是直接将资源文件放在 `source` 目录下，在文章中通过根目录 `/` 去访问。这种方式比较适合放置一些公共资源，比如第三方库，原因是它们可能被多篇文章同时引用。

2. 另一种方式则需要先在 `_config.yml` 配置文件中设置 `post_asset_folder: true`。这行配置的作用是，此后使用 `hexo new [layout] <title>` 命令时，会在文章所在目录下创建一个与之同名的文件夹，用来存放资源文件，然后在文章中通过当前目录 `./` 去访问。
这种方法有一个弊端，每次创建文章都会创建同名的文件夹，但大多数情况下我的文章很可能不需要引用任何的资源文件。这会使目录看起来非常臃肿，而这些文件夹都是空荡荡的。但这时我往 `_config.yml` 配置文件中设置 `post_asset_folder: false` 去关闭这个特性，在文章中就无法访问到同名文件夹下的资源文件了。
另外，我怀疑这是一个 bug —— 上述方法生成的同名文件夹下，如果包含 `.js` 文件，会像 `.md` 文件一样，被解析成新的一篇文章。这也是我不提倡这种方法的一个重要理由。

3. 还有一种方式是使用主题下的资源目录，也就是 `themes/matery/source`，来存放资源文件。但这显然是一种不好的做法，原因是这些资源文件不应该和主题耦合。
这个特性还让人联想到一个问题 —— 如果 `source` 目录下的资源和 `themes/matery/source` 中的重名了，会怎么样？实际上，如果是目录重名，例如 `source/libs` 和 `themes/matery/source/libs`，Hexo 会将两个 `libs` 目录下的内容进行合并。如果是文件重名，例如 `source/libs/echarts` 和 `themes/matery/source/libs/echarts` 下各自都有一个 `echarts.min.js` 文件，`source` 目录下的文件会覆盖 `themes/matery/source` 目录下的同名文件。


关于 Hexo 的更多用法，可以参照[官方文档](https://hexo.io/zh-cn/docs/)自行尝试。

---

<div class="anchor" id="geng-huan-zhu-ti"></div>

## 7 更换主题

Hexo 有丰富的[主题](https://hexo.io/themes/)，默认的是 `landscape`，可以根据自己的喜好挑选和更换。

我选择的主题是 [Matery](https://github.com/blinkfox/hexo-theme-matery)。在其 GitHub 链接上下载该主题，解压后命名为 `matery`，存放至 `themes` 目录下。

然后编辑 `_config/yml` 文件中的配置信息，将 `theme` 修改为themes目录下的主题目录名。

```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: matery
```

这样便完成了更换主题的操作。

Matery主题提供了相对美观的菜单、封面、主页、视频和音乐等组件。我们可以在主题配置文件 `themes/matery/_config.yml` 里更改相关的配置，来更改这些组件的配置和个人信息的配置。

此外，我们还需对 `标签`、`分类`、`关于`、`留言板` 和 `友情链接` 菜单，创建相应的界面文件。

执行 `hexo new page categories` 命令创建分类页，会在 `source` 目录下生成 `categories/index.md` 文件，并使其包含如下内容。

```
---
title: categories
date: 2020-01-23 15:40:00
type: categories
layout: categories
---
```

同样地，创建标签页 `tags/index.md`，使其包含如下内容。

```
---
title: tags
date: 2020-01-23 15:40:26
type: tags
layout: tags
---
```

以此类推，继续创建 `about`、`contact` 和 `friends` 页面。这样一来，博客的菜单都可以点击了。

文档还告诉我们，如果要设置 `友情链接` 页面中的数据，需要创建 `source/_data/friends.json` 文件，并向其中添加数据。

至此，项目的目录结构会像下面这样。

```
.
├── public
├── scaffolds
├── source
|   ├── _data
|   |   └── friends.json # 友情链接数据
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

该主题的更多用法，还可以参照 [Matery](https://github.com/blinkfox/hexo-theme-matery) 文档继续体验。

---

<div class="anchor" id="bu-shu-zhi-github"></div>

## 8 部署至 GitHub

经过前面的努力，我们的博客已经可以在本地运行了。

但如果想让其他人人访问我们的博客，我们还需要找一台服务器，将博客部署上去。[GitHub Pages](https://pages.github.com/) 就可以免费充当这样的服务器。

接下来，我们将博客部署至 GitHub，让朋友们都能访问。

### 8.1 创建 GitHub 个人仓库

登录 [GitHub](https://github.com/)，点击 `New repository` 创建一个名为 `<username>.github.io` 的仓库。其中 `username` 是用户名，比如我的GitHub用户名是 `rainstopper`，我创建的仓库名称就是 `rainstopper.github.io`。

### 8.2 添加 GitHub SSH 配置

为 GitHub 添加 SSH 配置，可以在后续 Git 代码进行 `push` 操作时，跳过用户名和密码的输入，更加便利。不介意每次提交都输密码，或者有安全及其他方面考虑的，也可以跳过此步骤。

打开 `Git Bash`，执行如下命令设置 Git 的用户名和邮箱信息。

```bash
git config --global user.name <username>
git config --global user.email <email>
```

可以使用以下命令检查配置是否生效。

```bash
git config user.name
git config user.email
```

执行以下命令创建 SSH 秘钥文件。

```bash
ssh-keygen -t rsa -C <email>
```

这个过程中会提示输入文件名，也可以不设置，一路回车。

![命令行生成 SSH Key](http://q4kbn37nl.bkt.clouddn.com/generate-ssh-key.png?e=1579891710&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:JZD8R9_SaZxT5rxAEDAlwVE2iMk)

最后会提示在用户目录下生成了 `.ssh` 文件夹，里面包含了 `id_rsa` 私钥文件和 `id_rsa.pub` 公钥文件。

在 GitHub 的 `Settings` 中找到 `SSH and GPG keys` 的配置页面，点击 `New SSH key` 按钮，在 `title` 中输入自定义的名称，将 `id_rsa.pub` 文件中的内容拷贝至 `Key`，完成SSH秘钥的创建。

![在 GitHub 中添加 SSH Key](http://q4kbn37nl.bkt.clouddn.com/github-ssh.png?e=1579891366&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:duNvV4Ij1lXBPpJHiVfB2OR42Y8)

使用以下命令验证 SSH 的配置是否生效。

```bash
ssh -T git@github.com
```

出现以下提示信息时，即为配置成功。

![测试 SSH](http://q4kbn37nl.bkt.clouddn.com/test-github-ssh.png?e=1579891976&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:v38GguGs12J7jfuwfowPInGShZc)

### 8.3 将 Hexo 生成的静态页面托管至 GitHub

有了 GitHub 仓库，我们就能将 Hexo 生成的静态页面托管至 GitHub。

如下修改项目的配置文件 `_config.yml`。

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:<username>/<username>.github.io.git # GitHub仓库的ssh链接
  branch: master
```

接下来执行以下命令安装 Hexo 的 Git 发布插件 `hexo-deployer-git`。

```bash
npm install hexo-deployer-git --save
```

然后执行以下命令，将项目部署至 GitHub。

```bash
hexo clean
hexo generate
hexo deploy
```

其中 `hexo clean` 或 `hexo cl` 命令会清理之前生成的文件； `hexo deploy` 或 `hexo d` 命令进行部署。

部署完成后，我们的项目目录中会出现一个 `.deploy_git` 目录，其中的代码就是 `push` 至 GitHub 仓库中的静态文件。

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

经过上面的操作，我们已经完成了 GitHub 的部署，让朋友们都能访问我们的博客了。

可仔细看 GitHub 仓库中的文化，发现都是编译够生成的代码，而没有我们编写博客时的源文件。假如我们需要重装操作系统或者更换电脑，就可能会丢失这些源文件。

这时，我们可以利用 GitHub 分支来实现源代码的管理，以便在多个终端下都能进行写作。

### 9.1 创建 GitHub 分支

进入我们之前创建好的 GitHub 仓库，在 `Code` 菜单下点击 `Branch:master` 按钮，新建一个名为 `hexo-source` 的分支，并将其设置为默认分支。

![创建 GitHub 分支](http://q4kbn37nl.bkt.clouddn.com/github-branch-hexo-source.png?e=1579894028&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:p8fSwlsoS5MJA2UTKOVNUg5tJco)

### 9.2 上传源代码

执行以下命令将仓库 `clone` 到本地（会自动命名为 `<username>.github.io`），其中的链接就是 GitHub 仓库的 https 链接。

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

执行 `push` 命令时可能需要输入 GitHub 的用户名和密码。

`push` 完成后，便可以在仓库的 `hexo-source` 分支下看到我们项目中的源代码，而 `master` 分支下依然是由 Hexo 生成的静态文件。

建议每次完成写作时，都依次执行上述命令，将自己的源文件 `push` 至 GitHub 仓库中，以防丢失。

### 9.3 更换终端

当我们需要更换终端时，依次安装 `Git` 和 `Node.js`，执行 `npm install -g hexo-cli` 命令安装 Hexo，设置 GitHub 的 SSH Key，再将 GitHub 仓库 `clone` 到本地，即可继续博客的写作。

至此，我们已经可以投入到博客的写作中去了。

---

## 10 设置个人域名

我觉得 `<username>.github.io` 这个地址不够逼格，想要一个自己专属的域名，用它来访问我们的博客。

### 10.1 购买域名

我们可以在[阿里云](https://wanwang.aliyun.com/)上查询和购买域名。

最常用的域名是 `.com`，价格比较昂贵；其次是 `.com.cn`、`.cn` 和 `.net`。然而这些常用的域名大多都已经被注册了。

剩下的还有 `.site`、`.top`、`.vip` 等域名，只要能备案就行。我买的是 `sunyt.site`（以我中文名的缩写命名）。

### 10.2 域名备案

国家要求，即使是个人非商业用途的网站，也需要将域名进行备案。

我们在阿里云上购买域名后，应该尽快进行[备案](https://beian.aliyun.com/)。备案前需要购买先服务器，我买的是相对便宜的云虚拟主机。

当然，未备案的域名也可以继续下面的步骤，但回头记得去[备案](https://beian.aliyun.com/)。

*在完成备案前，应当尽可能减少域名的解析。*

### 10.3 域名解析

购买完成后，需要先进行实名认证，再进入[阿里云控制台](https://dns.console.aliyun.com/)的域名解析设置菜单，做域名解析的配置。

可以直接使用 `新手引导` 按钮，它会自动添加主机记录为 `@` 和 `www`、解析线路为 `默认` 的两条配置。

![在阿里云配置域名解析](http://q4kbn37nl.bkt.clouddn.com/aliyun-dns-guide.png?e=1579896004&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:IwzoBZ4z-sE66szbZ6VwSiJaXNo)

其中的记录值，我们可以先在命令行中通过 `ping <username>.github.io` 获取到项目在 GitHub 服务器上所在的 IP 地址，将其填入。

### 10.4 修改 GitHub 仓库配置

在 GitHub 仓库的 `Settings` 菜单下找到 `Custom domain`，设置域名并保存。

![在 GitHub 仓库中配置域名](http://q4kbn37nl.bkt.clouddn.com/github-settings-custom-domain.png?e=1579896418&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:xBGBLkVCOB_Xqruz4Wvz7iOezqo)

### 10.5 修改项目配置并重新部署

在项目 `source` 目录下新建一个名为 `CNAME` 的文件（注意没有后缀名），在文件内写上自己的域名，比如 `sunyt.site`。

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

过不了多久，在浏览器中输入我的域名 `sunyt.site`，就能访问我在 GitHub 托管的博客了。

---

<div class="anchor" id="bu-shu-zhi-coding-shi-xian-guo-nei-wai-fen-liu"></div>

## 11 部署至 Coding 实现国内外分流

我们已经将 Hexo 博客部署在 GitHub 上了，但 GitHub 是国外的，而且百度的蜘蛛不能爬取 GitHub。如果希望我们的博客被百度收录，而且能更快地访问，可以同时在国内的 [Coding](https://coding.net/) 平台做托管。这么一来，在国内访问的是 Coding，国外就走 GitHub。

### 11.1 创建 Coding 项目

申请一个 Coding 账户，然后创建一个项目，项目的名称可以是任意的，我创建的项目名称与此前在 GitHub 上的用户名相同。

### 11.2 添加 SSH 配置

这一步也和 GitHub 一样。添加完成后，验证一下是否生效。

```bash
ssh -T git@e.coding.net
```

### 11.3 修改项目配置实现多平台部署

修改项目 `_config.yml` 文件中的配置。其中 `github` 和 `coding` 分别填写 GitHub 仓库和 Coding 项目的 ssh 链接。

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

部署的过程中，我们会看到先往GitHub仓库执行了一次 `push` 操作，紧接着又往 Coding 项目上也 `push` 了一次。

部署完成后，打开 Coding 项目代码，我们会看到与 GitHub 相同的 Hexo 静态文件。

随即在 Coding 上部署项目，并设置自定义域名为自己的域名 `sunyt.site`。

![在 Coding 部署静态页面](http://q4kbn37nl.bkt.clouddn.com/coding-deploy-setting.png?e=1579899019&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:OyAp31x2qJBjjqs52UNHOhts1H4)

### 11.4 修改域名解析配置

回到[阿里云控制台](https://dns.console.aliyun.com/)，将原来指向 GitHub 配置的解析路线改为 `境外`，再分别添加主机记录为 `@` 和 `www` 的两条记录，记录类型选择 `默认`，记录值填写 Coding 项目的静态网站域名。

![阿里云控制台域名解析](http://q4kbn37nl.bkt.clouddn.com/aliyun-dns-setting-github-and-coding.png?e=1579899444&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:MqbSUQGDtVH4Uw6vY1sI9PDC0c0)

不一会儿，我们在国内访问域名 `sunyt.site` 就会访问到托管至 Coding 的页面了。

我们可以通过在国内 `ping sunyt.site` 和 `ping ssd38z.coding-pages.com`，观察解析到的 IP 地址是不是相同的，来验证域名解析的正确性。

至此，我们的博客已经在 GitHub 和 Coding 双向部署，并通过域名解析，对国内外进行分流。

---

## 更多

<div class="anchor" id="shi-yong-qi-niu-yun-cun-chu-tu-pian"></div>

### 使用七牛云存储图片 2020.1.24

Hexo 支持使用 `hexo-asset-image` 插件内联图片，该插件会在创建文章的同时，在同一目录下创建与其同名的目录，用来存放图片文件，使用非常方便，但缺点也显而易见：`source` 目录会很庞大，且内联图片会影响页面的渲染速度。

更好的做法是使用第三方平台来存储图片，我使用的是[七牛云](https://portal.qiniu.com/)。

创建七牛云账号后，需要先进行实名认证，再在控制台打开 `对象存储` 下的 `空间管理` 菜单，去新建空间，否则会报 `403：没有权限`。

写作时如果遇到图片，只需将其上传至七牛云，再在需要插入图片的位置添加Markdown标记 `![](<url>)` 即可。

---

### 代码块样式优化 2020.1.24

默认的代码块生成会编译出 `<table>` 元素，使用左右两个 `<td>` 分别展示行号和代码内容，与 Matery 主题的样式有冲突，非常不美观。

解决方法是安装 `hexo-prism-plugin` 插件。

```bash
npm install hexo-prism-plugin --save
```

紧接着，按照该插件的[文档](https://github.com/ele828/hexo-prism-plugin)描述，修改项目配置文件 `_config.yml`。

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


<div class="anchor" id="kai-qi-gitalk-ping-lun"></div>

### 开启 Gitalk 评论 2020.1.28

Matery 主题支持 [Gitalk](https://gitalk.github.io/)、[Gitment](https://imsun.github.io/gitment/)、[Valine](https://valine.js.org/) 和 [Disqus](https://disqus.com/) 评论模块，官方推荐的是 Gitalk。

开启 Gitalk 评论，首先需要创建一个 GitHub 的 OAuth App。

登陆 GitHub，在 `Settings` > `Developer settings` 下，找到 `OAuth Apps` 菜单。

![GitHub OAuth Apps](http://q4kbn37nl.bkt.clouddn.com/github-oauth-apps.png?e=1580182303&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:fK9xiyWAbfpRy7JyvjuLncuLqBg)

点击 `New OAuth App` 创建一个 OAuth App。其中 `Application Name` 自定义，`Homepage URL` 和 `Authorization callback URL` 填写博客的地址。

![OAuth App 的详细配置](http://q4kbn37nl.bkt.clouddn.com/github-new-oauth-app.png?e=1580182303&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:SExXN6tiR7fGxUY9CMzLUJWid7s)

创建完成后，可以点击刚创建的 OAuth App，查看 `Client ID` 和 `Client Secret`。

![OAuth App 的秘钥信息](http://q4kbn37nl.bkt.clouddn.com/github-oauth-app-client-id.png?e=1580185161&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:cv2mSXRTnZUytxZug4M5bkc5QtQ)

然后打开博客仓库的 `Settings` 菜单，确保 `Issues` 特性已经被勾选。

![在 GitHub 仓库中配置特性](http://q4kbn37nl.bkt.clouddn.com/github-repository-settings-issues.png?e=1580183579&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:lGSlq18Y_LMUNSgwoJfNJiDTxf8)

接着修改 `theme/matery/_config.yml` 主题配置文件，开启 gitalk，并填写 GitHub 仓库和 OAuth App 相关信息。

```yaml
# the Gitalk config，default disabled
# Gitalk 评论模块的配置，默认为不激活
gitalk:
  enable: true
  owner: rainstopper # GitHub用户名
  repo: rainstopper.github.io # 仓库名
  oauth:
    clientId: 7884f**********fd16b # OAuth App 的 Client ID
    clientSecret: 1530e******************************1ef5b # OAuth App 的 Client Secret
  admin: rainstopper # GitHub用户名
```

重新部署后，滚动至文章底部就能看到久违的评论框了。

![文章评论区](http://q4kbn37nl.bkt.clouddn.com/article-comments.png?e=1580185433&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:I1g1rc1WLuGJDNjEQWwvUPZ49P8)

编辑评论前需要登录自己的 GitHub 账户。

此时，打开 GitHub 仓库的 `Issues` 菜单，会发现 Gitalk 对博客的每篇文章都创建了一个独立的 Issue。这给了我们一个线索。如果小伙伴们对评论的实现方式充满好奇，可以自行研究。


<div class="anchor" id="tian-jia-long-zhu-su-cai"></div>

### 添加《龙珠》素材 2020.1.29

在内容管理上添加《龙珠》[素材](/tools/map/)，用动漫中的概念类比博客的文章和分类，使内容更有趣。

修改 `themes/matery/source/css/matery.css` 文件，使主题样式的色调为橙色系，更贴近“龙珠”主题。

后来还自制了[博客 LOGO](/design/zi-zhi-svg-tu-biao/)，使用圆、五角星和简单的曲线组合在一起，绘制了一个“龙珠”的 `.svg` 图标。

![LOGO 效果](http://q4kbn37nl.bkt.clouddn.com/my-logo.png?e=1580266436&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:3A5J3iBLHvQAcWutZT5f6OwfULk)

### 添加音乐 2020.2.13

Matery 主题无默认音乐，需要我们人为添加。[Matery 官方文档](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md#%E9%85%8D%E7%BD%AE%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8%E5%8F%AF%E9%80%89%E7%9A%84)对此有详细的描述。

#### 1 使用 Matery 主题添加音乐

先在 `source/_data` 目录下创建一个名为 `musics.json` 的文件，项目的目录结构会像下面这样：

```
.
├── .deploy_git
├── public
├── scaffolds
├── source
|   ├── _data
|   |   └── musics.json # 音乐配置信息
|   ├── _drafts
|   ├── _posts
|   ...
|   └── CNAME
├── themes
├── _config.yml
└── package.json
```

向该文件中添加如下的音乐配置信息：

```json
[{
  "name": "我的名字",
  "artist": "焦迈奇",
  "url": "http://q4kbn37nl.bkt.clouddn.com/music_wo-de-ming-zi_jiao-mai-qi.m4a?e=1581608810&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:PTZv1m1seTGo-N0ctdJB3Di1ifQ",
  "cover": "http://q4kbn37nl.bkt.clouddn.com/music-cover_wo-de-ming-zi_jiao-mai-qi.jpg?e=1581608810&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:AKnA5__0hbn7QkvzmW4jrQt0H2M"
}]
```

其中 `name` 表示歌曲名称，`artist` 表示歌手/作者，`url` 表示音乐的 url，`cover` 表示音乐的封面，`lrc` 表示歌词。我把音乐文件和封面图片文件都[上传至七牛云](#shi-yong-qi-niu-yun-cun-chu-tu-pian)，这里的 url 使用的就是七牛云的 url。

如上的配置信息允许传入一个数组，这意味着我们还可以继续添加更多的音乐。

接着，在主题配置文件 `themes/matery/_config.yml` 加入以下修改：

```yaml
# Whether to display the musics.
# 是否在首页显示音乐.
music:
  enable: true
  showTitle: true
  title: 听听音乐
  fixed: false # 开启吸底模式
  autoplay: true # 是否自动播放
  theme: '#E88C30'
  loop: 'all' # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'list' # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto' # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7 # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: false # 列表默认折叠
  listMaxHeight: #列表最大高度
```

配置完成后，重新进入首页即可播放音乐。另外，移动端或者某些浏览器（如Chrome）会禁止自动播放。

#### 2 添加歌词

实际上，Matery 主题使用 [APlayer](https://aplayer.js.org/#/zh-Hans/) 插件来播放音乐。

如果想要添加歌词，需要根据 [APlayer 官方文档](https://aplayer.js.org/#/zh-Hans/)的描述，如下修改 `themes/matery/layout/_widget/music.ejs` 主题源文件底部 js 中的内容：

```html
<script>
$(function () {
    new APlayer({
        container: document.getElementById('aplayer'),
        fixed: '<%- theme.music.fixed %>' === 'true',
        autoplay: '<%- theme.music.autoplay %>' === 'true',
        theme: '<%- theme.music.theme %>',
        loop: '<%- theme.music.loop %>',
        order: '<%- theme.music.order %>',
        preload: '<%- theme.music.preload %>',
        volume: Number('<%- theme.music.volume %>'),
        listFolded: '<%- theme.music.listFolded %>' === 'true',
        listMaxHeight: '<%- theme.music.listMaxHeight %>',
        lrcType: 3, // 1 表示 JS 字符串，2 表示 HTML 标签，3 表示 LRC 文件
        audio: eval(<%- audiosJson %>)
    });
});
</script>
```

紧接着修改音乐配置文件 `source/_data/musics.json` 中的内容：

```json
[{
  "name": "我的名字",
  "artist": "焦迈奇",
  "url": "http://q4kbn37nl.bkt.clouddn.com/music_wo-de-ming-zi_jiao-mai-qi.m4a?e=1581608810&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:PTZv1m1seTGo-N0ctdJB3Di1ifQ",
  "cover": "http://q4kbn37nl.bkt.clouddn.com/music-cover_wo-de-ming-zi_jiao-mai-qi.jpg?e=1581608810&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:AKnA5__0hbn7QkvzmW4jrQt0H2M",
  "lrc": "http://q4kbn37nl.bkt.clouddn.com/music-lyric_wo-de-ming-zi_jiao-mai-qi.lrc?e=1581612081&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:Jiine8cwEBR_vnNo1MMGdMWy2eE"
}]
```

其中，新添加的 `lrc` 表示歌词文件，它也同样[使用七牛云存储](#shi-yong-qi-niu-yun-cun-chu-tu-pian)。

于是便能在首页播放具有歌词的音乐啦~

![首页播放音乐](http://q4kbn37nl.bkt.clouddn.com/index-music.png?e=1581613359&token=0QXSKIUWEaWqa_m3RP0dA04KO2cPXzgzVsWCBGHf:zYnnEyUqMHom1qkq6tqpnw8IJjo)

更多用法可以参考 [APlayer 官方文档](https://aplayer.js.org/#/zh-Hans/)。
