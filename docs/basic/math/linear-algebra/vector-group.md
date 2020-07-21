---
tags:
  - 线性代数
---

# 向量组

## 向量

#### 定义 1

$n$ 个有次序的数 $a_1$, $a_2$, ⋯, $a_n$ 所组成的数组称为 `n 维向量`, 这 $n$ 个数称为该向量的 $n$ 个分量, 第 $i$ 个数 $a_i$ 称为第 $i$ 个分量.

分量全为实数的向量称为 `实向量`, 分量为复数的向量称为 `复向量`. 这里除特别指明者外, 一般只讨论实向量.

$n$ 维向量可以写成一行, 也可以写成一列, 分别称为 `行向量` 和 `列向量`, 也就是 [行矩阵](matrix.html#定义-1) 和 [列矩阵](matrix.html#定义-1), 并规定行向量与列向量都按矩阵的运算规则进行运算. 因此, $n$ 维向量

$$
\boldsymbol{a} =
\begin{pmatrix}
   a_1   \\
   a_2   \\
  \vdots \\
   a_n
\end{pmatrix}
$$

与 $n$ 维行向量

$$
\boldsymbol{a}^T = \begin{pmatrix} a_1, a_2, \cdots, a_n \end{pmatrix}
$$

总看做是两个不同的向量（按定义 1, $\boldsymbol{a}$ 与 $\boldsymbol{a}^T$ 应是同一个向量）.

这里, 列向量用黑体小写字母 $\boldsymbol{a}$, $\boldsymbol{b}$, $\boldsymbol{\alpha}$, $\boldsymbol{\beta}$ 等表示, 行向量则用 $\boldsymbol{a}^T$, $\boldsymbol{b}^T$, $\boldsymbol{\alpha}^T$, $\boldsymbol{\beta}^T$ 等表示. 所讨论的向量在没有指明是行向量还是列向量时, 都当作列向量.

在解析几何中, 我们把“既有大小又有方向的量”叫做向量, 并把可随意平行移动的有向线段作为向量的几何形象. 在引进坐标系以后, 这种向量就有了坐标表示式 —— 三个有次序的实数, 也就是 $3$ 维向量. 因此, 当 $n$≤$3$ 时, $n$ 维向量可以把有向线段作为几何形象, 但当 $n$≥$3$ 时, $n$ 维向量就不再有这种几何形象, 只是沿用一些几何术语罢了.

几何中, “空间”通常是作为点的集合, 即构成“空间”的元素是点, 这样的空间叫做点空间. 我们把 $3$ 维向量的全体所组成的集合

$$
\mathbb{R}^3 = \left\{ \boldsymbol{r} = \begin{pmatrix} x, y, z \end{pmatrix}^T | x, y, z \in \mathbb{R} \right\}
$$

叫做 $3$ 维向量空间, 在点空间取定坐标系以后, 空间中的点 $P(x,y,z)$ 与 $3$ 维向量 $\boldsymbol{r} = \begin{pmatrix} x, y, z \end{pmatrix}^T$ 之间有一一对应的关系, 因此, 向量空间可以类比为取定了坐标系的点空间. 在讨论向量的运算时, 我们把向量看作有向线段; 在讨论向量集时, 则把向量 $\boldsymbol{r}$ 看作以 $\boldsymbol{r}$ 为向径的点 $P$, 从而把点 $P$ 的轨迹作为向量集的图形.

::: details 例如
点集

$$
\Pi = \left\{ P(x,y,z) | ax + by + cz = d \right\}
$$

是一个平面（$a$, $b$, $c$ 不全为 $0$）, 于是向量集

$$
\left\{ \boldsymbol{r} = \begin{pmatrix} x, y, z \end{pmatrix}^T | ax + by + cz = d \right\}
$$

也叫做向量空间 $\mathbb{R}^3$ 中的平面, 并把 $\Pi$ 作为它的图形.

类似地, $n$ 维向量的全体所组成的集合

$$
\mathbb{R}^n = \left\{ \boldsymbol{x} = \begin{pmatrix} x_1, x_2, \cdots, x_n \end{pmatrix}^T | x_1, x_2, \cdots, x_n \in \mathbb{R} \right\}
$$

叫做 $n$ 维向量空间. $n$ 维向量的集合

$$
\left\{ \boldsymbol{x} = \begin{pmatrix} x_1, x_2, \cdots, x_n \end{pmatrix}^T | a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b \right\}
$$

叫做 $n$ 维向量空间 $\mathbb{R}^n$ 中的 $n$-$1$ 维超平面.
:::

## 向量组

若干个同维数的列向量（或同维数的行向量）所组成的集合叫做 `向量组`.

::: details 例如
一个 $m$×$n$ 矩阵的全体列向量是一个含 $n$ 个 $m$ 维列向量的向量组, 它的全体行向量是一个含 $m$ 个 $n$ 维行向量的向量组.
:::

::: details 又如
线性方程 $\boldsymbol{A}_{m \times n} \boldsymbol{x}$=$\boldsymbol{0}$ 的全体解当 $R(\boldsymbol{A})$<$n$ 时是一个含无限多个 $n$ 维列向量的向量组.
:::

下面我们先讨论只含有限个向量的向量组, 以后再把讨论的结果推广到含无限多个向量的向量组.

矩阵的列向量组和行向量组都是只含有限个向量的向量组; 反之, 一个含有限个向量的向量组总可以构成一个矩阵.

::: details 例如
$m$ 个 $n$ 维列向量所组成的向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 构成一个 $n$×$m$ 矩阵

$$
\boldsymbol{A} = \begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix} ;
$$

$n$ 个 $m$ 维行向量所组成的向量组 $B$: $\boldsymbol{\beta}_1^T$, $\boldsymbol{\beta}_2^T$, ⋯, $\boldsymbol{\beta}_m^T$ 构成一个 $m$×$n$ 矩阵

$$
\boldsymbol{B} =
\begin{pmatrix}
  \boldsymbol{\beta}_1^T \\
  \boldsymbol{\beta}_2^T \\
          \vdots         \\
  \boldsymbol{\beta}_m^T
\end{pmatrix}
.
$$
:::

总之, 含有限个向量的有序向量组可以与矩阵一一对应.

### 线性组合

#### 定义 2

给定向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$, 对于任何一组实数 $k_1$, $k_2$, ⋯, $k_m$, 表达式

$$
k_1 \boldsymbol{a}_1 + k_2 \boldsymbol{a}_2 + \cdots + k_m \boldsymbol{a}_m
$$

称为向量组 $A$ 的一个 `线性组合`, $k_1$, $k_2$, ⋯, $k_m$ 称为这个线性组合的系数.

给定向量组: $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 和向量 $\boldsymbol{b}$, 如果存在一组数 $\lambda_1$, $\lambda_2$, ⋯, $\lambda_m$, 使

$$
\boldsymbol{b} = \lambda_1 \boldsymbol{a}_1 + \lambda_2 \boldsymbol{a}_2 + \cdots + \lambda_m \boldsymbol{a}_m ,
$$

则向量 $\boldsymbol{b}$ 是向量组 $A$ 的线性组合, 这时称向量 $\boldsymbol{b}$ 能由向量组 $A$ `线性表示`.

向量 $\boldsymbol{b}$ 能由向量组 $A$ 线性表示, 也就是方程组

$$
x_1 \boldsymbol{a}_1 + x_2 \boldsymbol{a}_2 + \cdots + x_m \boldsymbol{a}_m = \boldsymbol{b}
$$

有解. 由 [矩阵初等变换定理 5](matrix-elementary-transformation.html#定理-5), 立即可得

#### 定理 1

**向量 $\boldsymbol{b}$ 能由向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性表示的充分必要条件是矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$ 的秩等于矩阵 $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m , \boldsymbol{b} \end{pmatrix}$ 的秩.**

### 等价

#### 定义 3

设有两个向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 及 $B$: $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, ⋯, $\boldsymbol{b}_m$, 若 $B$ 组中的每个向量都能由向量组 $A$ 线性表示, 则称 `向量组 B 能由向量组 A 线性表示`. 若向量组 $A$ 与向量组 $B$ 能相互线性表示, 则称这两个 `向量组等价`.

把向量组 $A$ 和 $B$ 所构成的矩阵依次记作 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$ 和 $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_l \end{pmatrix}$, 向量组 $B$ 能由向量组 $A$ 线性表示, 即对每个向量 $\boldsymbol{b}_j$ ($j$ = $1$, $2$, ⋯, $l$) 存在数 $k_{1j}$, $k_{2j}$, ⋯, $k_{mj}$, 使

$$
\boldsymbol{b}_j = k_{1j} \boldsymbol{a}_1 + k_{2j} \boldsymbol{a}_2 + \cdots + k_{mj} \boldsymbol{a}_m =
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m
\end{pmatrix}
\begin{pmatrix}
  k_{1j} \\
  k_{2j} \\
  \vdots \\
  k_{mj}
\end{pmatrix}
,
$$

从而

$$
\begin{pmatrix}
  \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_l
\end{pmatrix}
=
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m
\end{pmatrix}
\begin{pmatrix}
  k_{11} & k_{12} & \cdots & k_{1l} \\
  k_{21} & k_{22} & \cdots & k_{2l} \\
  \vdots & \vdots &        & \vdots \\
  k_{m1} & k_{m2} & \cdots & k_{ml}
\end{pmatrix}
,
$$

这里, 矩阵 $\boldsymbol{K}_{m \times l}$=$\begin{pmatrix} k_{ij} \end{pmatrix}$ 称为这一线性表示的系数矩阵.

由此可知, 若 $\boldsymbol{C}_{m \times n}$=$\boldsymbol{A}_{m \times l} \boldsymbol{B}_{l \times n}$, 则矩阵 $\boldsymbol{C}$ 的列向量组能由矩阵 $\boldsymbol{A}$ 的列向量组线性表示, $\boldsymbol{B}$ 为这一表示的系数矩阵:

$$
\begin{pmatrix}
  \boldsymbol{c}_1 , \boldsymbol{c}_2 , \cdots , \boldsymbol{c}_n
\end{pmatrix}
=
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_l
\end{pmatrix}
\begin{pmatrix}
  b_{11} & b_{12} & \cdots & b_{1n} \\
  b_{21} & b_{22} & \cdots & b_{2n} \\
  \vdots & \vdots &        & \vdots \\
  b_{l1} & b_{l2} & \cdots & b_{ln}
\end{pmatrix}
;
$$

同时, $\boldsymbol{C}$ 的行向量组能由 $\boldsymbol{B}$ 的行向量组线性表示, $\boldsymbol{A}$ 为这一表示的系数矩阵:

$$
\begin{pmatrix}
  \boldsymbol{\gamma}_1^T \\
  \boldsymbol{\gamma}_2^T \\
       \cdots      \\
  \boldsymbol{\gamma}_m^T
\end{pmatrix}
=
\begin{pmatrix}
  a_{11} & a_{12} & \cdots & a_{1l} \\
  a_{21} & a_{22} & \cdots & a_{2l} \\
  \vdots & \vdots &        & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{ml}
\end{pmatrix}
\begin{pmatrix}
  \boldsymbol{\beta}_1^T \\
  \boldsymbol{\beta}_2^T \\
          \vdots         \\
  \boldsymbol{\beta}_l^T
\end{pmatrix}
.
$$

设矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 行等价, 即矩阵 $\boldsymbol{A}$ 经初等行变换变成矩阵 $\boldsymbol{B}$, 则 $\boldsymbol{B}$ 的每个行向量都是 $\boldsymbol{A}$ 的行向量组的线性组合, 即 $\boldsymbol{B}$ 的行向量组能由 $\boldsymbol{A}$ 的行向量组线性表示. 由于初等变换可逆, 知矩阵 $\boldsymbol{B}$ 亦可经初等行变换变为 $\boldsymbol{A}$, 从而 $\boldsymbol{A}$ 的行向量组也能由 $\boldsymbol{B}$ 的行向量组线性表示. 于是 $\boldsymbol{A}$ 的行向量组与 $\boldsymbol{B}$ 的行向量组等价.

类似可知, 若矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 列等价, 则 $\boldsymbol{A}$ 的列向量组与 $\boldsymbol{B}$ 的列向量组等价.

向量组的线性组合、线性表示及等价等概念, 也可移用于线性方程组: 对方程组 $A$ 的各个方程作线性运算所得到的一个方程就称为方程组 $A$ 的一个线性组合; 若方程组 $B$ 的每个方程都是方程组 $A$ 的线性组合, 就称方程组 $B$ 能被方程组 $A$ 线性表示, 这时方程组 $A$ 的解一定是方程组 $B$ 的解; 若方程组 $A$ 与方程组 $B$ 能相互线性表示, 就称这两个方程组可互推, 可互推的线性方程组一定同解.

按 [定义 3](#定义-3), 向量组 $B$: $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, ⋯, $\boldsymbol{b}_l$ 能由向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性表示, 其含义是存在矩阵 $\boldsymbol{K}_{m \times l}$, 使 $\begin{pmatrix} \boldsymbol{b}_1 , \cdots , \boldsymbol{b}_l \end{pmatrix}$=$\begin{pmatrix} \boldsymbol{a}_1 , \cdots , \boldsymbol{a}_m \end{pmatrix} \boldsymbol{K}$, 也就是矩阵方程

$$
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m
\end{pmatrix}
\boldsymbol{X}
=
\begin{pmatrix}
  \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_l
\end{pmatrix}
$$

有解. 由 [矩阵初等变换定理 6](matrix-elementary-transformation.html#定理-6), 立即可得

#### 定理 2

**向量组 $B$: $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, ⋯, $\boldsymbol{b}_l$ 能由向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性表示的充分必要条件是矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$ 的秩等于矩阵 $\begin{pmatrix} \boldsymbol{A} , \boldsymbol{B} \end{pmatrix}$=$\begin{pmatrix} \boldsymbol{a}_1 , \cdots , \boldsymbol{a}_m , \boldsymbol{b}_1 , \cdots , \boldsymbol{b}_l \end{pmatrix}$**, 即 $R(\boldsymbol{A})$=$R(\boldsymbol{A},\boldsymbol{B})$.

#### 推论

**向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 与向量组 $B$: $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, ⋯, $\boldsymbol{b}_l$ 等价的充分必要条件是**

$$
R(\boldsymbol{A}) = R(\boldsymbol{B}) = R(\boldsymbol{A} + \boldsymbol{B}) ,
$$

**其中 $\boldsymbol{A}$ 和 $\boldsymbol{B}$ 都是向量组 $A$ 和 $B$ 所构成的矩阵.**

::: details 证
因向量组 $A$ 与向量组 $B$ 能相互线性表示, 依据 [定理 2](#定理-2), 知它们等价的充分必要条件是

$$
R(\boldsymbol{A}) = R(\boldsymbol{A} + \boldsymbol{B}) \quad
\text{且} \quad
R(\boldsymbol{B}) = R(\boldsymbol{B} + \boldsymbol{A}) ,
$$

而 $R(\boldsymbol{A}, \boldsymbol{B})$=$R(\boldsymbol{B}, \boldsymbol{A})$, 合起来即得充分必要条件为

$$
R(\boldsymbol{A}) = R(\boldsymbol{B}) = R(\boldsymbol{A} + \boldsymbol{B}) .
$$
:::

#### 例 1

设

$$
\boldsymbol{a}_1 =
\begin{pmatrix}
  1 \\
  1 \\
  2 \\
  2
\end{pmatrix}
, \quad
\boldsymbol{a}_2 =
\begin{pmatrix}
  1 \\
  2 \\
  1 \\
  3
\end{pmatrix}
, \quad
\boldsymbol{a}_3 =
\begin{pmatrix}
   1 \\
  -1 \\
   4 \\
   0
\end{pmatrix}
, \quad
\boldsymbol{b} =
\begin{pmatrix}
  1 \\
  0 \\
  3 \\
  1
\end{pmatrix}
,
$$

证明向量 $\boldsymbol{b}$ 能由向量组 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, $\boldsymbol{a}_3$ 线性表示, 并求出表示式.

::: details 解
根据 [定理 1](#定理-1), 要证矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \boldsymbol{a}_3 \end{pmatrix}$ 与 $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{A} , \boldsymbol{b} \end{pmatrix}$ 的秩相等. 为此, 把 $\boldsymbol{B}$ 化成行最简形矩阵:

$$
\boldsymbol{B} =
\begin{pmatrix}
  1 & 1 &  1 & 1 \\
  1 & 2 & -1 & 0 \\
  2 & 1 &  4 & 3 \\
  2 & 3 &  0 & 1
\end{pmatrix}
\mathop{\sim}\limits_{r_4 - 2r_1}^{\stackrel{r_2 - r_1}{r_3 - 2r_1}}
\begin{pmatrix}
  1 &  1 &  1 &  1 \\
  0 &  1 & -2 & -1 \\
  0 & -1 &  2 &  1 \\
  0 &  1 & -2 & -1
\end{pmatrix}
\stackrel{r}{\sim}
\begin{pmatrix}
  1 & 0 &  3 &  2 \\
  0 & 1 & -2 & -1 \\
  0 & 0 &  0 &  0 \\
  0 & 0 &  0 &  0
\end{pmatrix}
,
$$

可见, $R(\boldsymbol{A})$=$R(\boldsymbol{B})$, 因此, 向量 $\boldsymbol{b}$ 能由向量组 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, $\boldsymbol{a}_3$ 线性表示.

由上述行最简形矩阵, 可得方程 $\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \boldsymbol{a}_3 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$=$\boldsymbol{b}$ 的通解为

$$
\begin{pmatrix}
  x_1 \\
  x_2 \\
  x_3
\end{pmatrix}
= c
\begin{pmatrix}
  -3 \\
   2 \\
   1
\end{pmatrix}
+
\begin{pmatrix}
   2 \\
  -1 \\
   0
\end{pmatrix}
=
\begin{pmatrix}
  -3c + 2 \\
   2c - 1 \\
     c
\end{pmatrix}
,
$$

其中 $c$ 可任意取值, 从而得表达式

$$
\boldsymbol{b} =
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \boldsymbol{a}_3
\end{pmatrix}
\begin{pmatrix}
  x_1 \\
  x_2 \\
  x_3
\end{pmatrix}
= (-3c + 2) \boldsymbol{a}_1 + (2c - 1) \boldsymbol{a}_2 + c \boldsymbol{a}_3 .
$$
:::

#### 例 2

设

$$
\boldsymbol{a}_1 =
\begin{pmatrix}
   1 \\
  -1 \\
   1 \\
  -1
\end{pmatrix}
, \quad
\boldsymbol{a}_2 =
\begin{pmatrix}
  3 \\
  1 \\
  1 \\
  3
\end{pmatrix}
, \quad
\boldsymbol{b}_1 =
\begin{pmatrix}
  2 \\
  0 \\
  1 \\
  1
\end{pmatrix}
, \quad
\boldsymbol{b}_2 =
\begin{pmatrix}
  1 \\
  1 \\
  0 \\
  2
\end{pmatrix}
, \quad
\boldsymbol{b}_3 =
\begin{pmatrix}
   3 \\
  -1 \\
   2 \\
   0
\end{pmatrix}
,
$$

证明向量组 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$ 与向量组 $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, $\boldsymbol{b}_3$ 等价.

::: details 证
记 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 \end{pmatrix}$, $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{b}_1 , \boldsymbol{b}_2 , \boldsymbol{b}_3 \end{pmatrix}$. 根据 [定理 2 的推论](#推论), 只要证 $R(\boldsymbol{A})$=$R(\boldsymbol{B})$=$R(\boldsymbol{A}, \boldsymbol{B})$. 为此把矩阵 $\begin{pmatrix} \boldsymbol{A} , \boldsymbol{B} \end{pmatrix}$ 化成行阶梯形矩阵:

$$
\begin{pmatrix} \boldsymbol{A} , \boldsymbol{B} \end{pmatrix}
=
\begin{pmatrix}
   1 & 3 & 2 & 1 &  3 \\
  -1 & 1 & 0 & 1 & -1 \\
   1 & 1 & 1 & 0 &  2 \\
  -1 & 3 & 1 & 2 &  0
\end{pmatrix}
\stackrel{r}{\sim}
\begin{pmatrix}
  1 &  3 &  2 &  1 &  3 \\
  0 &  4 &  2 &  2 &  2 \\
  0 & -2 & -1 & -1 & -1 \\
  0 &  6 &  3 &  3 &  3
\end{pmatrix}
\stackrel{r}{\sim}
\begin{pmatrix}
  1 & 3 & 2 & 1 & 3 \\
  0 & 2 & 1 & 1 & 1 \\
  0 & 0 & 0 & 0 & 0 \\
  0 & 0 & 0 & 0 & 0
\end{pmatrix}
,
$$

可见, $R(\boldsymbol{A})$=$2$, $R(\boldsymbol{A}, \boldsymbol{B})$=$2$.

容易看出矩阵 $\boldsymbol{B}$ 中有不等于 $0$ 的 $2$ 阶子式, 故 $R(\boldsymbol{B})$≥$2$. 又

$$
R(\boldsymbol{B}) \leq R(\boldsymbol{A}, \boldsymbol{B}) = 2 ,
$$

于是知 $R(\boldsymbol{B})$=$2$. 因此

$$
R(\boldsymbol{A}) = R(\boldsymbol{B}) = R(\boldsymbol{A}, \boldsymbol{B}) ,
$$

故向量组 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$ 与向量组 $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, $\boldsymbol{b}_3$ 等价.
:::

#### 定理 3

**设向量组 $B$: $\boldsymbol{b}_1$, $\boldsymbol{b}_2$, ⋯, $\boldsymbol{b}_l$ 能由向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性表示, 则 $R(\boldsymbol{b}_1, \boldsymbol{b}_2, \cdots, \boldsymbol{b}_l)$≤$R(\boldsymbol{a}_1, \boldsymbol{a}_2, \cdots, \boldsymbol{a}_m)$.**

::: details 证
记 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$, $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_l \end{pmatrix}$. 按定理的条件, 根据 [定理 2](#定理-2) 有 $R(\boldsymbol{A})$=$R(\boldsymbol{A}, \boldsymbol{B})$, 而 $R(\boldsymbol{B})$≤$R(\boldsymbol{A}, \boldsymbol{B})$, 因此

$$
R(\boldsymbol{B}) \leq R(\boldsymbol{A}) .
$$
:::

前面我们把 [定理 1](#定理-1) 与 [矩阵初等变换定理 5](matrix-elementary-transformation.html#定理-5) 对应, 把 [定理 2](#定理-2) 与 [矩阵初等变换定理 6](matrix-elementary-transformation.html#定理-6) 对应, 而定理 3 可与 [矩阵初等变换定理 7](matrix-elementary-transformation.html#定理-7) 对应. 事实上, 按定理 3 的条件, 知有矩阵 $\boldsymbol{K}$, 使 $\boldsymbol{B}$=$\boldsymbol{AK}$, 从而根据矩阵初等变换定理 7, 即有 $R(\boldsymbol{B})$≤$R(\boldsymbol{A})$.

上述各定理之间的对应, 其基础是向量组与矩阵的对应, 从而有下述对应:

$$
\begin{aligned}
  & \phantom{\Leftrightarrow}
    \text{向量组} B : \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_l
    \text{能由向量组} A : \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \text{线性表示} \\
  & \Leftrightarrow
    \text{有矩阵} \boldsymbol{K} \text{, 使} \boldsymbol{B} = \boldsymbol{AK} \\
  & \Leftrightarrow
    \text{方程} \boldsymbol{AX} = \boldsymbol{B} \text{有解} .
\end{aligned}
$$

上述对应的三种叙述都可对应到充分必要条件: $R(\boldsymbol{A})$=$R(\boldsymbol{A}, \boldsymbol{B})$, 并都有必要条件: $R(\boldsymbol{A})$≥$R(\boldsymbol{A}, \boldsymbol{B})$. 这里, 第一种可称为几何语言, 后两种以及充分必要条件和必要条件则都是矩阵语言.

::: tip 提示
[矩阵初等变换](matrix-elementary-transformation.html) 中把线性方程组写成矩阵形式, 通过矩阵的运算求得它的解, 还用矩阵的语言给出了线性方程组有解、有惟一解的充分必要条件; 这里将向量组的问题表述成矩阵形式, 通过矩阵的运算得出结果, 然后把矩阵形式的结果“翻译”成几何问题的结论. 这种用矩阵来表述问题, 并通过矩阵的运算解决问题的方法, 通常叫做矩阵方法, 这正是线性代数的基本方法.
:::

#### 例 3

设 $n$ 维向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 构成 $n$×$m$ 矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$, $n$ 阶单位矩阵 $\boldsymbol{E}$=$\begin{pmatrix} \boldsymbol{e}_1 , \boldsymbol{e}_2 , \cdots , \boldsymbol{e}_n \end{pmatrix}$ 的列向量叫做 $n$ 维 `单位坐标向量`. 证明: $n$ 维单位坐标向量组 $\boldsymbol{e}_1$, $\boldsymbol{e}_2$, ⋯, $\boldsymbol{e}_n$ 能由向量组 $A$ 线性表示的充分必要条件是 $R(\boldsymbol{A})$=$n$.

::: details 证
根据 [定理 2](#定理-2), 向量组 $\boldsymbol{e}_1$, $\boldsymbol{e}_2$, ⋯, $\boldsymbol{e}_n$ 能由向量组 $A$ 线性表示的充分必要条件是 $R(\boldsymbol{A})$=$R(\boldsymbol{A}, \boldsymbol{E})$.

而 $R(\boldsymbol{A}, \boldsymbol{E})$≥$R(\boldsymbol{E})$=$n$, 又矩阵 $\begin{pmatrix} \boldsymbol{A} , \boldsymbol{E} \end{pmatrix}$ 含 $n$ 行, 知 $R(\boldsymbol{A}, \boldsymbol{E})$≤$n$, 合起来有 $R(\boldsymbol{A}, \boldsymbol{E})$=$n$. 因此条件 $R(\boldsymbol{A})$=$R(\boldsymbol{A}, \boldsymbol{E})$ 就是 $R(\boldsymbol{A})$=$n$.
:::

本利所证结论用矩阵语言可描述为: 对矩阵 $\boldsymbol{A}_{n \times m}$, 存在矩阵 $\boldsymbol{K}_{m \times n}$, 使 $\boldsymbol{AK}$=$\boldsymbol{E}$ 的充分必要条件是 $R(\boldsymbol{A})$=$n$; 也可以叙述为: 矩阵方程 $\boldsymbol{A}_{n \times m} \boldsymbol{X}$=$\boldsymbol{E}$ 有解的充分必要条件是 $R(\boldsymbol{A})$=$n$.

## 线性相关性

#### 定义 4

给定向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$, 如果存在不全为零的数 $k_1$, $k_2$, ⋯, $k_m$, 使

$$
k_1 \boldsymbol{a}_1 + k_2 \boldsymbol{a}_2 + \cdots + k_m \boldsymbol{a}_m = \boldsymbol{0} ,
$$

则称向量组 $A$ 是 `线性相关` 的, 否则称它 `线性无关`.

::: tip 提示
说向量组 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性相关, 通常是指 $m$≥$2$ 的情形, 但定义 4 也适用于 $m$=$1$ 的情形. 当 $m$=$1$ 时, 向量组只含一个向量, 对于只含一个向量 $\boldsymbol{a}$ 的向量组, 当 $\boldsymbol{a}$=$\boldsymbol{0}$ 时是线性相关的, 当 $\boldsymbol{a}$≠$\boldsymbol{0}$ 时是线性无关的. 对于含两个向量 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$ 的向量组, 它线性相关的充分必要条件是 $\boldsymbol{a}_1$, $\boldsymbol{a}_2$ 的分量对应成比例, 其几何意义是两向量共线. 三个向量线性相关的几何意义是三向量共面.
:::

向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ ($m$≥$2$) 线性相关, 也就是在向量组 $A$ 中至少有一个向量能由其余 $m$-$1$ 个向量线性表示.

::: details 因为
如果向量组 $A$ 线性相关, 则有不全为 $0$ 的数 $k_1$, $k_2$, ⋯, $k_m$ 使 $k_1 \boldsymbol{a}_1$+$k_2 \boldsymbol{a}_2$+⋯+$k_m \boldsymbol{a}_m$=$0$. 因 $k_1$, $k_2$, ⋯, $k_m$ 不全为 $0$, 不妨设 $k_1$≠$0$, 于是便有

$$
\boldsymbol{a}_1 = \frac{-1}{k_1} (k_2 \boldsymbol{a}_2 + \cdots + k_m \boldsymbol{a}_m) ,
$$

即 $\boldsymbol{a}_1$ 能由 $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性表示.

如果向量组 $A$ 中有某个向量能由其余 $m$-$1$ 个向量线性表示, 不妨设 $\boldsymbol{a}_m$ 能由 $\boldsymbol{a}_1$, ⋯, $\boldsymbol{a}_{m-1}$ 线性表示, 即有 $\lambda_1$, ⋯, $\lambda_{m-1}$ 使 $\boldsymbol{a}_m$=$\lambda_1 \boldsymbol{a}_1$+⋯+$\lambda_{m-1} \boldsymbol{a}_{m-1}$, 于是

$$
\lambda_1 \boldsymbol{a}_1 + \cdots + \lambda_{m-1} \boldsymbol{a}_{m-1} + (-1) \boldsymbol{a}_m = 0 ,
$$

因为 $\lambda_1$, ⋯, $\lambda_{m-1}$, -$1$ 这 $m$ 个数不全为 $0$（至少 -$1$≠$0$）, 所以向量组 $A$ 线性相关.
:::

向量组的线性相关与线性无关的概念也可移用于线性方程组. 当方程组中有某个方程是其余方程的线性组合时, 这个方程就是多余的, 这时称方程组（各个方程）是线性相关的; 当方程组中没有多余方程, 就称该方程组（各个方程）线性无关（或 `线性独立`）. 显然, 方程组 $\boldsymbol{Ax}$=$\boldsymbol{b}$ 线性相关的充分必要条件是矩阵 $\boldsymbol{B}$=$\begin{pmatrix} \boldsymbol{A} , \boldsymbol{b} \end{pmatrix}$ 的行向量组线性无关.

向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 构成矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$, 向量组 $A$ 线性相关, 就是齐次线性方程组

$$
x_1 \boldsymbol{a}_1 + x_2 \boldsymbol{a}_2 + \cdots + x_m \boldsymbol{a}_m = \boldsymbol{0} ,
$$

即 $\boldsymbol{Ax}$=$\boldsymbol{0}$ 有非零解. 由 [矩阵初等变换定理 4](matrix-elementary-transformation.html#定理-4), 立即可得

#### 定理 4

**向量组 $A$: $\boldsymbol{a}_1$, $\boldsymbol{a}_2$, ⋯, $\boldsymbol{a}_m$ 线性相关的充分必要条件是它所构成的矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_m \end{pmatrix}$ 的秩小于向量个数 $m$; 向量组 $A$ 线性无关的充分必要条件是 $R(\boldsymbol{A})$=$m$.**
