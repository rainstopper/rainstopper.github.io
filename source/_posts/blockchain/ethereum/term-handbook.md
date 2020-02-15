---
title: 以太坊术语手册
date: 2020-02-09 21:49:29
categories:
- [猜猜拳]
tags: [以太坊, 术语, 手册, 概念]
summary: 以太坊概念手册
img: http://static.sunyt.site/ethereum_20200209215359.jpg
mathjax: true
---

##### 以太坊概念手册

## A

<div class="anchor" id="account"></div>

### 账户（Account）

> 账户是一个对象，它包含[地址](#address)、余额、[nonce](#nonce)，并且存储了状态和代码（皆可为空）。账户可以是[合约账户](#contract-account)或者[外部账户](#eoa)（EOA）。

相关：《精通以太坊》P.11
收录时间：2020.2.9


<div class="anchor" id="address"></div>

### 地址（Address）

> 通常来说，地址代表的是一个[合约](#smart-contract)或[外部账户](#eoa)，可以在[区块链](#blockchain)上接收（即作为目标地址）或发送（即作为源地址）[交易](#transaction)。更具体地说，地址是 [ECDSA](#ecdsa) [公钥](#public-key)的 [Keccak 哈希](#keccak-256)中最右的 160 位数。

相关：《精通以太坊》P.11
收录时间：2020.2.9

### 断言（Assert）

> [Solidity](#solidity) 语言中，`assert(false)` 断言会编译成 `oxfe` 无效操作码，耗尽所有剩余 [gas](#gas) 并回退所有变更。当一次 `assert()` 断言失败时，意味着代码出现严重错误，你需要修改代码。可以使用 `assert()` 来检查代码，避免出现意外。

相关：《精通以太坊》P.11
收录时间：2020.2.9

---

## B

### 大端字节序（Big-endian）

> 代表从最高位字节开始的位置编号。与小端字节序（little-endian）相反，后者从最低位字节开始。

相关：《精通以太坊》P.11
收录时间：2020.2.9

### BIP（Bitcoin Improvement Proposals）

> 比特币改进提案，由比特币社区提交的一系列对比特币协议进行改进的提案。比如，BIP-21（比特币改进提案第 21 号）是建议比特币协议改进统一资源标识符（URI）的提案。

相关：《精通以太坊》P.11
收录时间：2020.2.9


<div class="anchor" id="block"></div>

### 区块（Block）

> 一个关于其所包含[交易](#transaction)的所需信息（区块头）的集合，以及称为[叔块](#ommer)（ommer）的一组其他区块头。区块由以太坊网络中的[矿工](#miner)添加上链。

相关：《精通以太坊》P.11
收录时间：2020.2.9


<div class="anchor" id="blockchain"></div>

### 区块链（Blockchain）

> 以太坊网络中由[工作量证明](#pow)验证的[区块](#block)序列，每个区块与其父块相连，可一直追溯到创世块。以太坊区块链与比特币的不同之处在于，前者没有区块大小限制，而使用 [gas](#gas) 上限来调整区块大小。

相关：《精通以太坊》P.12
收录时间：2020.2.9


<div class="anchor" id="bytecode"></div>

### 字节码（Bytecode）

> 为软件解释器或[虚拟机](#evm)的高效执行而设计的抽象指令集。与人类可读的源代码不同，字节码以数字格式表示。

相关：《精通以太坊》P.12
收录时间：2020.2.9

### “拜占庭”分叉（Byzantium fork）

> 以太坊网络在“[大都会](#metropolis)”开发阶段两次[分叉](#fork)中的第一次，包含 EIP-649（以太坊改进提案第 649 号）：延迟“大都会”阶段的难度炸弹并降低[区块奖励](#reward)，使“[冰河期](#ice-age)”推迟一年，区块奖励由 5 个[以太币](#ether)将至 3 个。

相关：《精通以太坊》P.12
收录时间：2020.2.9

---

## C

### 编译（Compiling）

> 将用高级编程语言（如 [Solidity](#solidity)）编写的代码转换成较低级语言（如[以太坊虚拟机](#evm)[字节码](#bytecode)）。

相关：《精通以太坊》P.12
收录时间：2020.2.9


<div class="anchor" id="consensus"></div>

### 共识（Consensus）

> 当许多[节点](#node)（通常是全网大多数节点）都在本地经验证的[区块链](#blockchain)上存有同样[区块](#block)时，我们说[网络](#network)达成共识。要与[共识规则](#consensus-rules)区别开来。

相关：《精通以太坊》P.12
收录时间：2020.2.9


<div class="anchor" id="consensus-rules"></div>

### 共识规则（Consensus rules）

> 每个全功能[节点](#node)为了与其他节点保持一致所要遵循的[区块](#block)验证规则。要与[共识](#consensus)区别开来。

相关：《精通以太坊》P.12
收录时间：2020.2.9

### “君士坦丁堡”分叉（Constantinople fork）

> 这是“[大都会](#metropolis)”开发阶段两次[分叉](#fork)中的第二次，原计划在2018年年中执行升级，该次升级主要计划将[共识](#consensus)算法更换成[工作量证明](#pow)与[权益证明](#pos)混合的算法。

相关：《精通以太坊》P.12
收录时间：2020.2.9


<div class="anchor" id="contract-account"></div>

### 合约账户（Contract account）

> 一个包含代码的[账户](#account)，只要接收到来自其他账户（[外部账户](#eoa)或[合约](#smart-contract)）的[交易](#transaction)就会执行合约代码。

相关：《精通以太坊》P.12
收录时间：2020.2.9


<div class="anchor" id="contract-creation-transaction"></div>

### 创建合约交易（Contract creation transaction）

> 一种为了注册一个[合约](#smart-contract)并将其记录在以太坊[区块链](#blockchain)上的特殊[交易](#transaction)，其中接受者[地址](#address)“为[零](#zero-address)”。

相关：《精通以太坊》P.12
收录时间：2020.2.9

---

## D

### 去中心化自组织（DAO，Decentralized Autonomous Organization）

> 去中心化自组织是一类没有分层管理体系的公司或其他组织。“The DAO”同时也可以指代一份2016年4月30日发布的[合约](#smart-contract)，其随后在2016年6月遭到攻击，并最终引起了在[区块](#block)高度 1192000 发生的[硬分叉](#hard-fork)。该[分叉](#fork)回退了被攻击的 DAO 合约。也导致以太坊与以太坊经典分裂成两个竞争系统。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="dapp"></div>

### DApp（Decentralized application）

> 去中心化应用程序。狭义地说，DApp 可以是一个[智能合约](#smart-contract)或网页上的用户界面；广义地说，是在开放的、去中心化的、点对点的基础设施服务之上建立的[网络](#network)应用程序。此外，许多去中心化应用程序还包含去中心化存储与（或）通信协议和平台。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="deed"></div>

### 权证（Deed）

> [不可替代代币](#nft)（NFT）标准是由 ERC721 提议的。与 ERC20 代币不同。权证（所有权证书）可以证明 ERC721 代币的所有权，且该所有权不可互换，但目前为止还未有任何司法管辖区承认其为合法文件。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="difficulty"></div>

### 难度（Difficulty）

> 对全网来说，设置产生单位[工作量证明](#pow)需要消耗多少算力。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="digital-signature"></div>

### 数字签名（Digital signature）

> 数字签名算法使用户可以使用其[私钥](#private-key)生成我们称之为文件“签名”的短数据串，并使任何拥有相应[公钥](#public-key)、该文件签名与文档的人都可以验证：该文件确实由该特定私钥的所有者“签署”，且该文档在签署后未被更改。

相关：《精通以太坊》P.13
收录时间：2020.2.10

---

## E

<div class="anchor" id="ecdsa"></div>

### ECDSA（Elliptic Curve Digital Signature Algorithm）

> 椭圆曲线[数字签名](#digital-signature)算法，是以太坊使用的密码学算法，用来保证[账户](#account)资金只能被其所有者分配。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="eip"></div>

### EIP 以太坊改进提案（Ethereum Improvement Proposal）

> 以太坊改进提案，用以描述对以太坊平台提出的改进建议的文件，以特定的格式向全体以太坊社区描述一个提议的新功能、新流程或新环境。更多信息可以参考 [https://github.com/ethereum/EIPs](https://github.com/ethereum/EIPs)。（参见“[ERC](#erc)”）

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="ens"></div>

### ENS（Ethereum Name Service）

> 以太坊域名服务。更多信息可以参考 [https://github.com/ethereum/ens/](https://github.com/ethereum/ens/)。

相关：《精通以太坊》P.13
收录时间：2020.2.10

### 熵（Entropy）

> 在密码学的语境中，熵意味着不可预期性，也就是随机性高低。当我们生成一个秘密信息（如[私钥](#private-key)）时，算法通常需要依赖于一个熵非常大的信源来保证其输出的随机性。

相关：《精通以太坊》P.13
收录时间：2020.2.10


<div class="anchor" id="eoa"></div>

### EOA（External Owned Account）

> 外部账户，即以太坊网络中由人类用户创建或为人类用户使用的[账户](#account)。

相关：《精通以太坊》P.14
收录时间：2020.2.10


<div class="anchor" id="erc"></div>

### ERC（Ethereum Request for Comments）

> 以太坊请求评论。ERC 是给部分尝试定义以太坊具体使用标准的 [EIP](#eip) 贴上的标签。

相关：《精通以太坊》P.14
收录时间：2020.2.10


<div class="anchor" id="ethash"></div>

### Ethash

> 以太坊 1.0 版本中使用的[工作量证明](#pow)算法。更多信息请参考 [https://github.com/ethereum/wiki/wiki/Ethash](https://github.com/ethereum/wiki/wiki/Ethash)。

相关：《精通以太坊》P.14
收录时间：2020.2.10


<div class="anchor" id="ether"></div>

### 以太币（Ether）

> 以太坊生态系统中使用的原生加密货币，用来支付执行[智能合约](#smart-contract)时产生的 [gas](#gas) 消耗，其货币符号为 Ξ，是希腊语中大写的 Xi 字母。

相关：《精通以太坊》P.14
收录时间：2020.2.10

### 事件（Event）

> 事件使[以太坊虚拟机](#evm)中的日志记录工具可用，而日志记录工具可在 [DApp](#dapp) 的用户界面中触发 JavaScript 回调，后者又能监听这些事件。更多信息请参考 [http://solidity.readthedocs.io/en/develop/contracts.html#events](http://solidity.readthedocs.io/en/develop/contracts.html#events)。

相关：《精通以太坊》P.14
收录时间：2020.2.10


<div class="anchor" id="evm"></div>

### EVM（Ethereum Virtual Machine）

> 以太坊虚拟机，是基于栈的虚拟机，用于执行[字节码](#bytecode)。在以太坊中，其执行模型指定了在给定一系列字节码指令和一小组环境数据的情况下如何改变系统状态。这是通过虚拟状态机的正式模型指定的。

相关：《精通以太坊》P.14
收录时间：2020.2.10

### EVM 汇编语言（EVM assembly language）

> 人类可读的[以太坊虚拟机](#evm)[字节码](#bytecode)的一种形式。

相关：《精通以太坊》P.14
收录时间：2020.2.10

---

## F

<div class="anchor" id="fallback-function"></div>

### 回退函数（Fallback function）

> 在缺失数据或无法匹配函数名称时的默认函数调用。

相关：《精通以太坊》P.14
收录时间：2020.2.10

### Faucet

> 免费提供测试网可用的测试[以太币](#ether)的服务。

相关：《精通以太坊》P.14
收录时间：2020.2.10

### finney

> [以太币](#ether)的货币单位。$10^{15}$ finney = 1 ether。

相关：《精通以太坊》P.14
收录时间：2020.2.10


<div class="anchor" id="fork"></div>

### 分叉（Fork）

> 在协议层面的一次改动，可能会产生一条竞争链，或造成在挖矿中对未来[区块](#block)路径的暂时性分歧。

相关：《精通以太坊》P.14
收录时间：2020.2.10

### “前沿”版本（Frontier）

> 以太坊最初开发测试阶段的版本，在2015年7月上线，知道2016年3月。

相关：《精通以太坊》P.15
收录时间：2020.2.10

---

## G

### Ganache

> 个人版以太坊[区块链](#blockchain)，用户可以在控制区块链操作的情况下用其进行代码测试、执行命令并检查状态。

相关：《精通以太坊》P.15
收录时间：2020.2.10


<div class="anchor" id="gas"></div>

### gas

> 以太坊网络中为执行[智能合约](#smart-contract)所消耗的虚拟“燃油”。[以太坊虚拟机](#evm)使用一种记账方法来衡量 gas 用量，以限制算力资源的消耗。（参见“[图灵完备](#turing-complete)”）

相关：《精通以太坊》P.15
收录时间：2020.2.10

### gas 上限（gas limit）

> 一个[交易](#transaction)或一个[区块](#block)允许消耗的最大 [gas](#gas) 量。

相关：《精通以太坊》P.15
收录时间：2020.2.10


<div class="anchor" id="gavin-wood"></div>

### Gavin Wood

> Gavin Wood 是一名英国籍程序员，以太坊联合创始人，前首席技术官。2014年8月，他提出了 [Solidity](#solidity) 这种面向[合约](#smart-contract)的编程语言，用于编写[智能合约](#smart-contract)。

相关：《精通以太坊》P.15
收录时间：2020.2.10

### 创世块（Genesis block）

> [区块链](#blockchain)上的第一个[区块](#block)，用于初始化特定的区块链及其原生加密代币。

相关：《精通以太坊》P.15
收录时间：2020.2.10

### Geth（Go Ethereum）

> 以太坊的 Go 语言实现，是以太坊协议上最著名的实现。

相关：《精通以太坊》P.15
收录时间：2020.2.10

---

## H

<div class="anchor" id="hard-fork"></div>

### 硬分叉（Hard fork）

> 硬分叉也叫硬分叉改变，是[区块链](#blockchain)上产生的永久分歧，通常发生在拒绝升级的[节点](#node)无法验证遵循新[共识](#consensus)协议的已升级节点所创建的[区块](#block)时。“硬分叉”不应与“[分叉](#fork)”、“软分叉”、“软件分叉”或“Git 分叉”混淆。

相关：《精通以太坊》P.15
收录时间：2020.2.10


<div class="anchor" id="hash"></div>

### 哈希（Hash）

> 由可变长度输入，通过哈希函数（散列函数）生成的固定长度的数字指纹。

相关：《精通以太坊》P.15
收录时间：2020.2.10


<div class="anchor" id="hd-wallet"></div>

### HD 钱包（HD Wallet）

> 分层确定性[钱包](#wallet)，即使用分层确定性（HD）[秘钥](#secret-key)创建与传输协议（BIP-32）的钱包。

相关：《精通以太坊》P.15
收录时间：2020.2.10

### HD 钱包种子（HD wallet seed）

> 用来生成 [HD 钱包](#hd-wallet)中主[私钥](#private-key)与主链码的短种子值。可以用助记词表示，以便人类复制、备份及恢复私钥。

相关：《精通以太坊》P.15
收录时间：2020.2.10

### “家园”版本（Homestead）

> 以太坊的第二个开发阶段，在2016年3月[区块](#block)高度为 1150000 时发布。

相关：《精通以太坊》P.15
收录时间：2020.2.10

---

## I

### ICAP（Inter-exchange Client Address Protocol）

> 互换客户端地址协议，是一种与国际银行账号（IBAN）编码部分兼容的以太坊[地址](#address)编码形式，为以太坊地址提供通用、经校验且可互操作的编码。ICAP 引入一个新的 IBAN 伪国家代码 XE，即“eXtended Ethereum”，类似其他非司法管辖区货币的代码（如 XBT、XRP、XCP）。

相关：《精通以太坊》P.16
收录时间：2020.2.10

<div class="anchor" id="ice-age"></div>

### 冰河期（Ice Age）

> 在以太坊[区块链](#blockchain)[区块](#block)高度为 200000 时通过[硬分叉](#hard-fork)执行的指数[难度](#difficulty)增长（又称为难度炸弹），以鼓励向[权益证明](#pos)的转变。

相关：《精通以太坊》P.16
收录时间：2020.2.9

### IDE（Integrated Development Environment）

> 综合开发环境，是一个结合了代码编辑器、编译器、运行时与调试器的用户界面。

相关：《精通以太坊》P.16
收录时间：2020.2.10

### 部署代码不可变问题（Immutable deployed code problem）

> 只要一份[合约](#smart-contract)（或[库](#library)）的代码部署上链，就无法改变。正常的软件开发需要修复可能出现的漏洞并增加新功能，因此该不可改变性对[智能合约](#smart-contract)开发而言是个挑战。

相关：《精通以太坊》P.16
收录时间：2020.2.10


<div class="anchor" id="internal-transaction"></div>

### 内部交易（也称为“消息”）（Internal transaction）

> 从一个[合约账户](#contract-account)发往另一个合约账户或[外部账户](#eoa)的[交易](#transaction)。

相关：《精通以太坊》P.16
收录时间：2020.2.10

### IPFS（InterPlanetary File System）

> 星际文件系统，是一个旨在创建开源且分布式存储和共享文件的[网络](#network)传输协议。它是一种内容可寻址的对等超媒体分发协议。

相关：《精通以太坊》P.16
收录时间：2020.2.10

---

## K

### 秘钥导出函数（KDF，Key Derivation Function）

> 也称为[秘钥](#secret-key)延伸算法，通过[秘钥库文件](#keystore-file)格式来防止暴力破解，防止攻击者预先计算派生秘钥的字典或“彩虹表”，通过重复计算密令的[哈希](#hash)来实现。

相关：《精通以太坊》P.16
收录时间：2020.2.10


<div class="anchor" id="keccak-256"></div>

### Keccak-256

以太坊协议使用的加密[哈希](#hash)函数。Keccak-256 是从 SHA-3 规范演化出来的。

相关：《精通以太坊》P.16
收录时间：2020.2.10


<div class="anchor" id="keystore-file"></div>

### 秘钥库文件（Keystore File）

> 一个包含单个（随机生成的）[私钥](#private-key)的 JSON 编码文件，用密令加密以提高安全性。

相关：《精通以太坊》P.16
收录时间：2020.2.10

---

## L

### LevelDB

> 一个轻量、开源的键值对存储库，它是单一用途的数据库，可以绑定到许多平台。

相关：《精通以太坊》P.16
收录时间：2020.2.10


<div class="anchor" id="library"></div>

### 库（Library）

> 以太坊中的库是一类特殊的[合约](#smart-contract)，它不可填值，无[回退函数](#fallback-function)，也无数据存储。因此，库无法接收或持有[以太币](#ether)，也无法存储数据。以太坊上的库是其他合约可以为只读计算调用的先前部署的代码。

相关：《精通以太坊》P.16
收录时间：2020.2.10

### 轻客户端（Lightweight client）

> 一类不在本地保存[区块链](#blockchain)副本，也无法验证[区块](#block)和[交易](#transaction)的以太坊客户端，具有[钱包](#wallet)功能，也可以用其创建并广播交易。

相关：《精通以太坊》P.17
收录时间：2020.2.10

---

## M

### 默克尔帕特里夏树（Merkle Patricia tree）

> 一条缝协议中用于高效存储键值对的数据结构。

相关：《精通以太坊》P.17
收录时间：2020.2.10


<div class="anchor" id="message"></div>

### 消息（Message）

> 一个永不串行且只能在[以太坊虚拟机](#evm)内发送的[内部交易](#internal-transaction)。

相关：《精通以太坊》P.17
收录时间：2020.2.10

### 消息调用（Message call）

> 将[消息](#message)从一个[账户](#account)传递到另一个账户的行为。如果目标账户与[以太坊虚拟机](#evm)代码相关联，则将使用该对象的状态启动虚拟机并执行该消息的操作。

相关：《精通以太坊》P.17
收录时间：2020.2.10

### ME 代币（METoken）

> 精通以太坊代币，即 ERC20 代币。

相关：《精通以太坊》P.17
收录时间：2020.2.10


<div class="anchor" id="metropolis"></div>

### “大都会”阶段

> 以太坊开发的第三阶段，在2017年10月发布。

相关：《精通以太坊》P.17
收录时间：2020.2.9


<div class="anchor" id="miner"></div>

### 矿工（Miner）

> 通过不断做[哈希](#hash)运算，找到新[区块](#block)的有效[工作量证明](#pow)的[网络](#network)[节点](#node)。

相关：《精通以太坊》P.17
收录时间：2020.2.10

### Mist

> Mist 是以太坊基金会开发的首个支持以太坊的浏览器。它包含一个浏览器内置的[钱包](#wallet)，这也是首个 ERC20 代币标准的实现（ERC20 标准的作者 Fabian Vogelsteller 同时也是 Mist 的主要开发者）。Mist 还是第一个引入 camalCase 校验和（EIP-115 提出的）钱包。Mist 浏览器运行全功能[节点](#node)，提供支持基于 [Swarm](#swarm) 协议的存储和 [ENS](#ens) 地址的完整的 [DApp](#dapp) 浏览器。

相关：《精通以太坊》P.17
收录时间：2020.2.10

---

## N

<div class="anchor" id="network"></div>

### 网络（Network）

> 以太坊网络，将[交易](#transaction)与[区块](#block)传播到每个以太坊[节点](#node)（网络参与者）的点对点网络。

相关：《精通以太坊》P.17
收录时间：2020.2.10


<div class="anchor" id="nft"></div>

### 不可替代代币（NFT）

> 也叫“所有权证书”或“[权证](#deed)”，是由 ERC721 议案提出的代币标准。不可替代代币能够被追溯也可以[交易](#transaction)，每个代币是唯一且独一无二的，不像 ERC20 代币，每个 NFT 都是无法互换的。NFT 能够代表数字或物理资产的所有权。

相关：《精通以太坊》P.17
收录时间：2020.2.10


<div class="anchor" id="node"></div>

### 节点（Node）

> 参与点对点[网络](#network)的软件客户端。

相关：《精通以太坊》P.18
收录时间：2020.2.10


<div class="anchor" id="nonce"></div>

### nonce

> 在密码学中，nonce 指的是一个在加密通信中只能使用一次的值。以太坊中有两类 nonce：账户 nonce，用于每个[账户](#account)中的[交易](#transaction)计数，防止重放攻击；工作量证明 nonce，[区块](#block)中满足[工作量证明](#pow)的随机值。

相关：《精通以太坊》P.18
收录时间：2020.2.10

---

## O

<div class="anchor" id="ommer"></div>

### Ommer

> 某一个父块的子块，且自身不是任何[区块](#block)的父块。当一个[矿工](#miner)找到有效区块时，另一个矿工可能已经发布了一个竞争区块并将其添加上链。与比特币不同，以太坊中的孤块可以被更新的区块作为 ommer 打包，并获得部分[区块奖励](#reward)。使用术语“ommer”是对同一个父块下不同子块的中性表达，但也有人称其为“叔块”（uncle）。

相关：《精通以太坊》P.18
收录时间：2020.2.10

---

## P

### Parity

> 以太坊客户端软件中最著名的可互操作实现之一。

相关：《精通以太坊》P.18
收录时间：2020.2.10


<div class="anchor" id="private-key"></div>

### 私钥（Private key）

> 参见“[秘钥](#secret-key)”。

相关：《精通以太坊》P.18
收录时间：2020.2.10


<div class="anchor" id="pos"></div>

### 权益证明（PoS）

> 权益证明是加密货币[区块链](#blockchain)协议试图达成分布式[共识](#consensus)的一类方法。权益证明要求用户先证明自己对一定量加密资产的所有权（即他们在[网络](#network)中的“权益”），才可参与到验证[交易](#transaction)的过程中。

相关：《精通以太坊》P.18
收录时间：2020.2.9


<div class="anchor" id="pow"></div>

### 工作量证明（PoW）

> 工作量证明是一份需要巨大算力才能找到的数据（即“证明”）。在以太坊网络中，[矿工](#miner)必须找到符合全网[难度](#difficulty)标准的 [Ethash](#ethash) 算法的数字解决方案。

相关：《精通以太坊》P.18
收录时间：2020.2.9


<div class="anchor" id="public-key"></div>

### 公钥（Public key）

> 通过[私钥](#private-key)的单向函数派生的数字，可以公开共享，任何人都可以使用它来验证用其对应私钥进行的[数字签名](#digital-signature)。

相关：《精通以太坊》P.18
收录时间：2020.2.10

---

## R

### 收据（Receipt）

> 收据是由以太坊客户端返回的数据，用来表示特定[交易](#transaction)的结果，数据包含交易[哈希](#hash)、打包的[区块](#block)高度、实际 [gas](#gas) 消耗量，如果该交易用来部署[合约](#smart-contract)，则还会返回该合约[地址](#address)。

相关：《精通以太坊》P.18
收录时间：2020.2.10

### 可重入攻击（Re-entrancy attack）

> 攻击者[合约](#smart-contract)调用受害者合约函数，使得在调用执行过程中受害者合约会循环调用攻击者合约。这可能导致通过跳过受害者合约的余额更新或提款金额计算的部分来盗窃资金。

相关：《精通以太坊》P.18
收录时间：2020.2.10


<div class="anchor" id="reward"></div>

### 区块奖励（Reward）

> 以太坊网络给予找到相应[工作量证明](#pow)的解的[矿工](#miner)的，包含在每个新[区块](#block)中用[以太币](#ether)计价的奖励。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### RLP（Recursive Length Prefix）

> 递归长度前缀是一种编码算法，用于编码任意嵌套结构的对象（数据结构），它是以太坊中数据序列化的主要方法。

相关：《精通以太坊》P.19
收录时间：2020.2.10

---

## S

### 中本聪（Satoshi Nakamoto）

> 中本聪是设计比特币并创建比特币原始实现的个人或团队的名字。他（们）是第一个解决数字货币双重花费问题的人（团队），他们的真实身份至今还是个谜。

相关：《精通以太坊》P.19
收录时间：2020.2.10


<div class="anchor" id="secret-key"></div>

### 秘钥（也称为私钥）（Secret key）

> 通过生成[数字签名](#digital-signature)（参见“[公钥](#public-key)”、“[地址](#address)”、“[ECDSA](#ecdsa)”），使以太坊用户能够证明[账户](#account)或[合约](#smart-contract)的所有权的密码。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### “宁静”阶段（Serenity）

> 以太坊开发进程的第四阶段，也是终极阶段，还未公布计划的发布日期。

相关：《精通以太坊》P.19
收录时间：2020.2.10


<div class="anchor" id="serpent"></div>

### Serpent

> 直译为“大蛇”，是一种语法类似 Python（直译为“大蟒”）的过程化编程语言。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### SHA（Secure Hash Algorithm）

> 安全哈希算法，是由美国国家标准与技术研究院（NIST）发布的一系列加密[哈希](#hash)函数。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### 单例模式（Singleton）

> 计算机编程术语，描述只能存在单个实例的对象。

相关：《精通以太坊》P.19
收录时间：2020.2.10


<div class="anchor" id="smart-contract"></div>

### 智能合约（Smart Contract）

> 在以太坊计算基础框架上执行的程序。

相关：《精通以太坊》P.19
收录时间：2020.2.10


<div class="anchor" id="solidity"></div>

### Solidity

> 一种语法类似 JavaScript、C++ 或 Java 的程序化（命令式）编程语言，是用于编写以太坊[智能合约](#smart-contract)的最流行也最常用的编程语言。由 [Gavin Wood](#gavin-wood) 博士发明，他同时也是《精通以太坊》的作者之一。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### Solidity 内联汇编（Solidity inline assembly）

> [Solidity](#solidity) 中包含的内联汇编使用[以太坊虚拟机](#evm)汇编，可使其为以太坊虚拟机代码的人类可读形式的代码。内联汇编使得编写某些操作变得更加容易。

相关：《精通以太坊》P.19
收录时间：2020.2.10

### Spurious Dragon 分叉

> 在[区块](#block)高度为 2675000 时发生的以太坊网络[硬分叉](#hard-fork)，解决了一些拒绝服务攻击变量，以及另一状态的清除（参见“[Tangerine Whistle 分叉](#tangerine-whistle-fork)”）。同时还增加了对重放攻击的防御机制。

相关：《精通以太坊》P.20
收录时间：2020.2.10


<div class="anchor" id="swarm"></div>

### Swarm 协议

> 一个去中心化（点对点）的存储[网络](#network)，与 [Web3](#web3) 和 [Whisper](#whisper) 协议共同使用来构建 [DApp](#dapp)。

相关：《精通以太坊》P.20
收录时间：2020.2.10

### szabo

> [以太币](#ether)的货币单位。$10^{12}$ szabo = 1 ether。

相关：《精通以太坊》P.20
收录时间：2020.2.11

---

## T

<div class="anchor" id="tangerine-whistle-fork"></div>

### Tangerine Whistle 分叉

> 在[区块](#block)高度 2463000 时发生的以太坊网络[硬分叉](#hard-fork)，改变了某些输入/输出密集型操作的 [gas](#gas) 计算方法，并清理了因一次拒绝服务攻击造成的累积状态，这一攻击正是利用了某些操作的较低 gas 成本。

相关：《精通以太坊》P.20
收录时间：2020.2.11

### 测试网（Testnet）

> 测试[网络](#network)（test network）的缩写，通常用来模拟以太坊主网的行为。

相关：《精通以太坊》P.20
收录时间：2020.2.11


<div class="anchor" id="transaction"></div>

### 交易（Transaction）

> 由一个原始[账户](#account)签署并以一个特定[地址](#address)为目标的提交到以太坊[区块链](#blockchain)上的数据。该交易包含交易 [gas](#gas) 上限等元数据。

相关：《精通以太坊》P.20
收录时间：2020.2.11

### Truffle

> 最常用的以太坊开发框架之一。

相关：《精通以太坊》P.20
收录时间：2020.2.11


<div class="anchor" id="turing-complete"></div>

### 图灵完备（Turing complete）

> 在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完备的。这个名字来源于英国数学家和计算机科学家艾伦·图灵。

相关：《精通以太坊》P.20
收录时间：2020.2.10

---

## V

<div class="anchor" id="vitalik-buterin"></div>

### Vitalik Buterin

> 一名俄裔加拿大籍程序员、作家，因联合创建以太坊和《比特币杂志》而为世人所认识。

相关：《精通以太坊》P.20
收录时间：2020.2.11

### Vyper

> 一种高级编程语言，与 [Serpent](#serpent) 相似，使用类似 Python 的语法，目的是创造一个更接近纯函数式的编程语言。由 [Vitalik Buterin](#vitalik-buterin) 发明。

相关：《精通以太坊》P.20
收录时间：2020.2.11

---

## W

<div class="anchor" id="wallet"></div>

### 钱包（Wallet）

> 保存用户[秘钥](#secret-key)的软件，可以用来访问并管理你的以太坊[账户](#account)并与[智能合约](#smart-contract)交互。秘钥不一定要存储在钱包中，为了提高安全性，可以离线存储（如写在一张记忆卡或者纸上）。尽管称其为“钱包”，但它并不存储代币本身。

相关：《精通以太坊》P.21
收录时间：2020.2.10


<div class="anchor" id="web3"></div>

### web3

> 万维网的第三个版本。由 [Gavin Wood](#gavin-wood) 博士首次提议，代表了对[网络](#network)应用的新愿景与新焦点：从中心化所有并管理的应用转移到在去中心化协议上构建的应用。

相关：《精通以太坊》P.21
收录时间：2020.2.11

### wei

> [以太币](#ether)最小货币单位。$10^{18}$ wei = 1 ether。

相关：《精通以太坊》P.21
收录时间：2020.2.11


<div class="anchor" id="whisper"></div>

### Whisper 协议

> 去中心化（P2P）的消息传输服务。与 [Web3](#web3) 和 [Swarm](#swarm) 协议共同使用来构建 [DApp](#dapp)。

相关：《精通以太坊》P.21
收录时间：2020.2.11

---

## Z

<div class="anchor" id="zero-address"></div>

### 零地址（Zero Address）

> 一个特殊的以太坊[地址](#address)，地址的所有字节都为 0，作为“[创建合约交易](#contract-creation-transaction)”的目标地址。

相关：《精通以太坊》P.21
收录时间：2020.2.9
