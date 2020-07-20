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

## 线性组合

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
