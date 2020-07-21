---
tags:
  - 线性代数
  - 行列式
---

# 行列式

## 初识行列式

### 二元线性方程组

用“消元法”解二元线性方程组

<!-- 式 (1) -->
$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 = b_1 , \\ \\
  a_{21} x_1 + a_{22} x_2 = b_2 .
\end{cases}
\tag{1}
$$

为消去未知数 $x_2$, 以 $a_{22}$ 与 $a_{12}$ 分别乘上列两方程的两端, 然后两个方程相减, 得

$$
(a_{11} a_{22} - a_{12} a_{21}) x_1 = b_1 a_{22} - a_{12} b_2 ;
$$

类似地, 消去 $x_1$, 得

$$
(a_{11} a_{22} - a_{12} a_{21}) x_2 = a_{11} b_2 - b_1 a_{21} .
$$

当 $a_{11} a_{22} - a_{12} a_{21} \neq 0$ 时, 求得方程组的解为

<!-- 式 (2) -->
$$
x_1 = \frac{b_1 a_{22} - a_{12} b_2}{a_{11} a_{22} - a_{12} a_{21}} , \quad x_2 = \frac{a_{11} b_2 - b_1 a_{21}}{a_{11} a_{22} - a_{12} a_{21}} .
\tag{2}
$$

### 二阶行列式

(2) 式中的分子、分母都是四个数分别两对相乘再相减而得, 其中分母 $a_{11} a_{22}$-$a_{12} a_{21}$ 是由方程组 (1) 的四个系数确定的, 把这四个数按它们在方程组 (1) 中的位置, 排成二行二列（横排称 `行`,  竖排称 `列`）的数表

<!-- 式 (3) -->
$$
\begin{matrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
\end{matrix}
,
\tag{3}
$$

表达式 $a_{11} a_{22}$-$a_{12} a_{21}$ 称为数表 (3) 所确定的 `二阶行列式`, 并记作

<!-- 式 (4) -->
$$
\begin{vmatrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
\end{vmatrix}
.
\tag{4}
$$

数 $a_{ij}$（$i$ = $1$, $2$; $j$ = $1$, $2$）称为行列式 (4) 的 `元素` 或 `元`, 元素 $a_{ij}$ 的第一个下标 $i$ 称为 `行标`, 表明该元素位于第 $i$ 行; 第二个下标 $j$ 称为 `列标`, 表明该元素位于第 $j$ 列. 位于第 $i$ 行第 $j$ 列的元素称为行列式 (4) 的 `(i,j) 元`.

### 对角线法则

(4) 式中的 [二阶行列式](#二阶行列式) 可以利用 `对角线法则` 来记忆.

`主对角线` 上元素: $\begin{vmatrix} a_{11} & \\ & a_{22} \end{vmatrix}$, `副对角线` 上元素: $\begin{vmatrix} & a_{12} \\ a_{21} & \end{vmatrix}$.

于是, 二阶行列式便是主对角线上两元素 $a_{11}$, $a_{22}$ 之积减去副对角线上两元素 $a_{12}$, $a_{21}$ 之积.

### 方程组的解

利用二阶行列式的概念, (2) 式中 $x_1$, $x_2$ 的分子也可以写成二阶行列式, 即

$$
b_1 a_{22} - a_{12} b_2 =
\begin{vmatrix}
  b_1 & a_{12} \\
  b_2 & a_{22}
\end{vmatrix}
,
\quad
a_{11} b_2 - b_1 a_{21} =
\begin{vmatrix}
  a_{11} & b_1 \\
  a_{21} & b_2
\end{vmatrix}
.
$$

若记

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
\end{vmatrix}
,
\quad
D_1 =
\begin{vmatrix}
  b_1 & a_{12} \\
  b_2 & a_{22}
\end{vmatrix}
,
\quad
D_2 =
\begin{vmatrix}
  a_{11} & b_1 \\
  a_{21} & b_2
\end{vmatrix}
,
$$

那么 (2) 式可以写成

$$
x_1 = \frac{D_1}{D} = \frac{
  \begin{vmatrix}
    b_1 & a_{12} \\
    b_2 & a_{22}
  \end{vmatrix}
}{
  \begin{vmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22}
  \end{vmatrix}
}
,
\quad
x_2 = \frac{D_2}{D} = \frac{
  \begin{vmatrix}
    a_{11} & b_1 \\
    a_{21} & b_2
  \end{vmatrix}
}{
  \begin{vmatrix}
    a_{11} & a_{12} \\
    a_{21} & a_{22}
  \end{vmatrix}
}
.
$$

注意这里的分母 $D$ 是由方程组 (1) 的系数所确定的二阶行列式（称 `系数行列式`）, $x_1$ 的分子 $D_1$ 是用常数项 $b_1$, $b_2$ 替换 $D$ 中第 $1$ 列的元素 $a_{11}$, $a_{21}$ 所得的二阶行列式, $x_2$ 的分子 $D_2$ 是用常数项 $b_1$, $b_2$ 替换 $D$ 中第 $2$ 列的元素 $a_{12}$, $a_{22}$ 所得的二阶行列式.

#### 例 1

求解二元线性方程组

$$
\begin{cases}
  3x_1 - 2x_2 = 12 , \\
  2x_1 + x_2 = 1 .
\end{cases}
$$

::: details 解
由于

<!-- 使用 aligned 实现换行对齐 -->
$$
\begin{aligned}
  & D =
    \begin{vmatrix}
    3 & -2 \\
    2 & 1
    \end{vmatrix}
    = 3 - (-4) = 7 \neq 0 , \\
  & D_1 =
    \begin{vmatrix}
    12 & -2 \\
    1  & 1
    \end{vmatrix}
    = 12 - (-2) = 14 , \\
  & D_2 =
    \begin{vmatrix}
    3 & 12 \\
    2  & 1
    \end{vmatrix}
    = 3 - 24 = -21 ,
\end{aligned}
$$

因此

$$
x_1 = \frac{D_1}{D} = \frac{14}{7} = 2 ,
\quad
x_2 = \frac{D_2}{D} = \frac{-21}{7} = -3 .
$$
:::

### 三阶行列式

#### 定义 1

设有 $9$ 个数排成 $3$ 行 $3$ 列的数表

<!-- 式 (5) -->
$$
\begin{matrix}
  a_{11} & a_{12} & a_{13} \\
  a_{21} & a_{22} & a_{23} \\
  a_{31} & a_{32} & a_{33}
\end{matrix}
,
\tag{5}
$$

记

<!-- 式 (6) -->
<!-- 可以使用 \phantom 预留空间 -->
$$
\begin{aligned}
  & \phantom{=}
    \begin{vmatrix}
      a_{11} & a_{12} & a_{13} \\
      a_{21} & a_{22} & a_{23} \\
      a_{31} & a_{32} & a_{33}
    \end{vmatrix} \\
  & =
    a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} - a_{11} a_{23} a_{32} - a_{12} a_{21} a_{33} - a_{13} a_{22} a_{11} ,
\end{aligned}
\tag{6}
$$

(6) 式称为数表 (5) 所确定的三阶行列式.

三阶行列式是三条主对角线及其平行线上元素之积, 减去三条副对角线及其平行线上元素之积.

#### 例 2

计算三阶行列式

$$
D =
\begin{vmatrix}
  1  & 2 & -4 \\
  -2 & 2 & 1  \\
  -3 & 4 & -2
\end{vmatrix}
.
$$

::: details 解
按对角线法则, 有

$$
\begin{aligned}
  D & =
      1 \times 2 \times (-2) + 2 \times 1 \times (-3) + (-4) \times (-2) \times 4 - \\
    & \phantom{=}
      1 \times 1 \times 4 - 2 \times (-2) \times (-2) - (-4) \times 2 \times (-3) \\
    & =
      -4 + (-6) + 32 - 4 - 8 - 24 = -14 .
\end{aligned}
$$
:::

#### 例 3

求解方程

$$
\begin{vmatrix}
  1 & 1 & 1   \\
  2 & 3 & x   \\
  4 & 9 & x^2
\end{vmatrix}
= 0 .
$$

::: details 解
方程左端的三阶行列式

$$
D = 3x^2 + 4x + 18 - 9x -2x^2 - 12 = x^2 - 5x + 6 ,
$$

由 $x^2$ - $5x$ + $6$ = $0$ 解得 $x$ = $2$ 或 $x$ = $3$.
:::

::: tip 提示
[对角线法则](#对角线法则) 只适用于二阶、三阶行列式的记忆. 为研究四阶及更高阶行列式, 先介绍有关 [全排列](#全排列) 的知识.
:::

## 全排列与对换 <Badge text="辅助"/>

### 全排列

把 $n$ 个不同的元素排成一列, 叫做这 $n$ 个元素的 `全排列`（也简称 `排列`）.

$n$ 个不同元素的所有排列的种数, 通常用 $P_n$ 表示, 可计算如下:

从 $n$ 个元素中任取一个放在第一个位置上, 有 $n$ 种取法;

从剩下的 $n$-$1$ 个元素中任取一个放在第二个位置上, 有 $n$-$1$ 种取法;

以此类推, 直到最后只剩下一个元素放在第 $n$ 个位置上, 只有 $1$ 种取法. 于是

$$
P_n = n \cdot (n-1) \cdot \ldots \cdot 3 \cdot 2 \cdot 1 = n! .
$$

::: details 例如
用 $1$, $2$, $3$ 三个数字作排列, 排列总数 $P_3$ = $3$ ⋅ $2$ ⋅ $1$ = $6$, 它们是 $123$, $231$, $312$, $132$, $213$, $321$.
:::

### 逆序数

对于 $n$ 个不同的元素, 先规定各元素之间有一个标准次序（例如 $n$ 个不同的自然数, 可规定由小到大为标准次序）, 于是在这 $n$ 个元素的任一排列中, 当某一对元素的先后次序与标准次序不同时, 就说它构成 $1$ 个 `逆序`. 一个排列中所有逆序的总数叫做这个 `排列的逆序数`.

逆序数为奇数的排列叫做 `奇排列`, 逆序数为偶数的排列叫做 `偶排列`.

#### 计算逆序数的方法

不妨设 $n$ 个元素为 $1$ 至 $n$ 这 $n$ 个自然数, 并规定由小到大为标准次序. 设 $p_1 p_2$⋯$p_n$ 为这 $n$ 个自然数的一个排列, 考虑元素 $p_i$ ($i$ = $1$, $2$, ⋯, $n$), 如果比 $p_i$ 大的且排在 $p_i$ 前面的元素有 $t_i$ 个, 就说 $p_i$ 这个元素的逆序数是 $t_i$. 全体元素的逆序数之总和

$$
t = t_1 + t_2 + \cdots + t_n = \sum_{n=1}^n t_i
$$

即是这个数的逆序数.

#### 例 4

求排列 $32514$ 的逆序数.

::: details 解
在排列 $32514$ 中:

$3$ 排在首位, 逆序数 $t_1$ = $0$;

$2$ 的前面比 $2$ 大的数有一个 ($3$), 故逆序数 $t_2$ = $1$;

$5$ 是最大数, 逆序数 $t_3$ = $0$;

$1$ 的前面比 $1$ 大的数有三个 ($3$、$2$、$5$), 故逆序数 $t_4$ = $3$;

$4$ 的前面比 $4$ 大的数有一个 ($5$), 故逆序数 $t_5$ = $1$, 于是这个排列的逆序数为

$$
t = \sum_{i=1}^5 t_i = 0 + 1 + 0 + 3 + 1 = 5 .
$$
:::

### 对换

在排列中, 将任意两个元素对调, 其余的元素不动, 这种做出新排列的手续叫做 `对换`. 将相邻的两个元素对换, 叫做 `相邻对换`.

#### 定理 1

**一个排列中的任意两个元素对换, 排列改变奇偶性.**

::: details 证
不妨设元素为从 $1$ 开始的自然数（从小到大为标准次序）. 先证相邻对换的情形.

设排列为 $a_1$⋯$a_l a b b_1$⋯$b_m$, 对换 $a$ 与 $b$, 变为 $a_1$⋯$a_l b a b_1$⋯$b_m$. 显然, $a_1$, ⋯, $a_l$; $b_1$, ⋯, $b_m$ 这些元素的逆序数经过对换并不改变, 而 $a$, $b$ 两元素的逆序数改变为: 当 $a$<$b$ 时, 经对换后 $a$ 的逆序数增加 $1$ 而 $b$ 的逆序数不变; 当 $a$>$b$ 时, 经对换后 $a$ 的逆序数不变而 $b$ 的逆序数减少 $1$. 所以排列 $a_1$⋯$a_l a b b_1$⋯$b_m$ 与排列 $a_1$⋯$a_l b a b_1$⋯$b_m$ 的奇偶性不同.

再证一般对换的情形.

设排列为 $a_1$⋯$a_l a b_1$⋯$b_m b c_1$⋯$c_n$, 把它做 $m$ 次相邻对换, 变成 $a_1$⋯$a_l a b b_1$⋯$b_m c_1$⋯$c_n$, 再做 $m$+$1$ 次相邻对换, 变成 $a_1$⋯$a_l b b_1$⋯$b_m a c_1$⋯$c_n$. 总之, 经 $2m$+$1$ 次相邻对换, 排列 $a_1$⋯$a_l a b_1$⋯$b_m b c_1$⋯$c_n$ 变成排列 $a_1$⋯$a_l b b_1$⋯$b_m a c_1$⋯$c_n$, 所以这两个排列的奇偶性相反.
:::

#### 推论

**奇排列对换成标准排列的对换次数为奇数, 偶排列对换成标准排列的对换次数为偶数.**

::: details 证
由 [定理 1](#定理-1) 知对换的次数就是排列奇偶性的变化次数, 而标准排列是偶排列（逆序数为 0）, 因此知推论成立.
:::

## n 阶行列式

#### 定义 2

设有 $n^2$ 个数, 排成 $n$ 行 $n$ 列的数表

$$
\begin{matrix}
  \begin{matrix}
    a_{11} & a_{12} & \cdots & a_{1n} \\
    a_{21} & a_{22} & \cdots & a_{2n}
  \end{matrix} \\
  \cdots \cdots \cdots \cdots \\
  \begin{matrix}
    a_{n1} & a_{n2} & \cdots & a_{nn}
  \end{matrix}
\end{matrix}
,
$$

作出表中位于不同行不同列的 $n$ 个数的乘积, 并冠以符号 $(-1)^t$, 得到形如

$$
(-1)^t a_{1 p_1} a_{2 p_2} \cdots a_{n p_n}
\tag{7}
$$

的项, 其中 $p_1 p_2$⋯$p_n$ 为自然数 $1$, $2$, ⋯, $n$ 的一个排列, $t$ 为这个排列的逆序数. 由于这样的排列共有 $n!$ 个, 因而形如 (7) 式的项共有 $n!$ 项. 所有这 $n!$ 项的代数和

$$
\sum (-1)^t a_{1 p_1} a_{2 p_2} \cdots a_{n p_n}
$$

称为 `n 阶行列式`, 记作

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &        & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
,
$$

简记作 $det$($a_{ij}$), 其中 $a_{ij}$ 为行列式 $D$ 的 $(i,j)$ 元.

按此定义的二阶、三阶行列式, 与用 [对角线法则](#对角线法则) 定义的 [二阶](#二阶行列式)、[三阶行列式](#三阶行列式) 显然是一致的. 当 $n$=$1$ 时, 一阶行列式 $\begin{vmatrix} a \end{vmatrix} = a$, 注意不要与绝对值记号相混淆.

主对角线以下（上）的元素都为 $0$ 的行列式叫做 `上（下）三角形行列式`; 特别, 主对角线以下和以上都为 $0$ 的行列式叫做 `对角行列式`.

#### 例 5

证明:

（1）下三角形行列式

$$
D =
\begin{vmatrix}
  a_{11} &        &        &        \\
  a_{21} & a_{22} &        &   0    \\
  \vdots & \vdots & \ddots &        \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
= a_{11} a_{22} \cdots a_{nn} ;
$$

（2）对角行列式

$$
\begin{vmatrix}
  \lambda_1 &           &        &           \\
            & \lambda_2 &        &           \\
            &           & \ddots &           \\
            &           &        & \lambda_n
\end{vmatrix}
= \lambda_1 \lambda_2 \cdots \lambda_n .
$$

::: details 证
（1）由于当 $j$>$i$ 时, $a_{ij}$=$0$, 故 $D$ 中可能不为 $0$ 的元素 $a_{i p_i}$, 其下标应有 $p_i$≤$i$, 即 $p_1$≤$1$, ⋯, $p_n$≤$n$, 而 $p_1$+⋯+$p_n$=$1$+⋯+$n$, 因此 $p_1$=$1$, ⋯, $p_n$=$n$, 所以 $D$ 中可能不为 $0$ 的项只有一项 $(-1)^t a_{11} a_{22}$⋯$a_{nn}$, 此项的符号 $(-1)^t$=$(-1)^0$=$1$, 所以

$$
D = a_{11} a_{22} \cdots a_{nn} .
$$

（2）由（1）即得.
:::

## 行列式的性质

### 转置行列式

记

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &        & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
,
\quad
D^T =
\begin{vmatrix}
  a_{11} & a_{21} & \cdots & a_{n1} \\
  a_{12} & a_{22} & \cdots & a_{n2} \\
  \vdots & \vdots &        & \vdots \\
  a_{1n} & a_{2n} & \cdots & a_{nn}
\end{vmatrix}
,
$$

行列式 $D^T$ 称为行列式 $D$ 的 `转置行列式`.

#### 性质 1

**行列式与它的转置行列式相等.**

::: details 证
记 $D$=$det$($a_{ij}$) 的转置行列式 $D^T$=$det$($b_{ij}$), 即 $D^T$ 的 $(i,j)$ 元为 $b_{ij}$, 则 $b_{ij}$=$a_{ji}$ ($i$, $j$ = $1$, $2$, ⋯, $n$), 按定义

$$
D^T = \sum (-1)^t b_{1 p_1} b_{2 p_2} \cdots b_{n p_n} = \sum (-1)^t a_{p_1 1} a_{p_2 2} \cdots a_{p_n n} .
$$

下证 $D$=$D^T$.

对于行列式 $D$ 的任一项

$$
(-1)^t a_{1 p_1} \cdots a_{i p_i} \cdots a_{j p_j} \cdots a_{n p_n} ,
$$

其中 $1$⋯$i$⋯$j$⋯$n$ 为标准排列, $t$ 为排列 $p_1$⋯$p_i$⋯$p_j$⋯$p_n$ 的逆序数, 对换元素 $a_{i p_i}$ 与 $a_{j p_j}$ 成

$$
(-1)^t a_{1 p_1} \cdots a_{j p_j} \cdots a_{i p_i} \cdots a_{n p_n} ,
$$

这时, 这一项的值不变, 而行标排列与列表排列同时做了一次相应的对换. 设新的行标排列 $1$⋯$j$⋯$i$⋯$n$ 的逆序数为 $r$, 则 $r$ 为奇数; 设新的列表排列 $p_1$⋯$p_j$⋯$p_i$⋯$p_n$ 的逆序数为 $t_1$, 则

$$
(-1)^{t_1} = - (-1)^t .
$$

故

$$
(-1)^t = - (-1)^{t_1} = (-1)^r (-1)^{t_1} = (-1)^{r + t_1} ,
$$

于是

$$
(-1)^t a_{1 p_1} \cdots a_{i p_i} \cdots a_{j p_j} \cdots a_{n p_n} = (-1)^{r + t_1} a_{1 p_1} \cdots a_{j p_j} \cdots a_{i p_i} \cdots a_{n p_n} .
$$

这就表明, 对换乘积中两元素的次序, 从而行标排列与列标排列同时作了相应的对换, 则行标排列与列标排列的逆序数之和并不改变奇偶性. 经一次对换是如此, 经多次对换当然还是如此. 于是, 经过若干次对换, 使

* 列标排列 $p_1 p_2$⋯$p_n$（逆序数为 $t$）变为标准排列（逆序数为 $0$）;
* 行标排列则相应地从标准排列变为某个新的排列, 设此新排列为 $q_1 q_2$⋯$q_n$, 其逆序数为 $s$, 则有
  $$
  (-1)^t a_{1 p_1} a_{2 p_2} \cdots a{n p_n} = (-1)^s a_{q_1 1} a_{q_2 2} \cdots a_{q_n n} .
  $$

又, 如果上式左边乘积的第 $i$ 个元素 $a_{i p_i}$ 为 $a_{ij}$, 那么它必定是上式右边乘积的第 $j$ 个元素, 即 $a_{i p_i}$=$a_{ij}$=$a_{q_j j}$. 可见排列 $q_1 q_2$⋯$q_n$ 由排列 $p_1 p_2$⋯$p_n$ 所唯一确定.

综上可知: 对于 $D$ 中任一项 $(-1)^t a_{1 p_1} a_{2 p_2}$⋯$a_{n p_n}$, 总有且仅有 $D^T$ 中的某一项 $(-1)^s a_{q_1 1} a_{q_2 2}$⋯$a_{q_n n}$ 与之对应并相等; 反之, 对于 $D^T$ 中的任一项 $(-1)^t a_{p_1 1} a_{p_2 2}$⋯$a_{p_n n}$, 也总有且仅有 $D$ 中的某一项 $(-1)^s a_{1 q_1} a_{2 q_2}$⋯$a_{n q_n}$ 与之对应并相等, 于是 $D$ 与 $D^T$ 中的项可以一一对应并相等, 从而 $D$=$D^T$.
:::

由此性质可知, 行列式中的行与列具有同等的地位, 行列式的性质凡是对行成立的对列也同样成立, 反之亦然.

### 行列式运算

#### 性质 2

**对换行列式的两行（列）, 行列式变号.**

::: details 证
设行列式

$$
D_1 =
\begin{vmatrix}
  b_{11} & b_{12} & \cdots & b_{1n} \\
  b_{21} & b_{22} & \cdots & b_{2n} \\
  \vdots & \vdots &        & \vdots \\
  b_{n1} & b_{n2} & \cdots & b_{nn}
\end{vmatrix}
$$

是由行列式 $D$=$det$($a_{ij}$) 对换 $i$, $j$ 两行得到的, 即当 $k$≠$i$,$j$ 时, $b_{kp}$=$a_{kp}$; 当 $k$=$i$,$j$ 时, $b_{ip}$=$a_{jp}$, $b_{jp}$=$a_{ip}$, 于是

$$
\begin{aligned}
  D_1
    & = \sum (-1)^t b_{1 p_1} \cdots b_{i p_i} \cdots b_{j p_j} \cdots b_{n p_n} \\
    & = \sum (-1)^t a_{1 p_1} \cdots a_{j p_i} \cdots a_{i p_j} \cdots a_{n p_n} \\
    & = \sum (-1)^t a_{1 p_1} \cdots a_{i p_j} \cdots a_{j p_i} \cdots a_{n p_n}
\end{aligned}
$$

其中 $1$⋯$i$⋯$j$⋯$n$ 为标准排列, $t$ 为排列 $p_1$⋯$p_i$⋯$p_j$⋯$p_n$ 的逆序数. 设排列 $p_1$⋯$p_j$⋯$p_i$⋯$p_n$ 的逆序数为 $t_1$, 则 $(-1)^t$=-$(-1)^{t_1}$, 故

$$
D_1 = - \sum (-1)^{t_1} a_{1 p_1} \cdots a_{i p_j} \cdots a_{j p_i} \cdots a_{n p_n} = -D .
$$
:::

以 $r_i$ 表示行列式的第 $i$ 行, 以 $c_i$ 表示行列式的第 $i$ 列. 对换 $i$, $j$ 两行记作 $r_i$↔$r_j$, 对换 $i$, $j$ 两列记作 $c_i$↔$c_j$.

#### 例 6

计算 $n$ 阶行列式

<!-- vuepress-plugin-latex 插件似乎不支持反对角省略号 \iddots 的写法 -->
<!-- 副对角线上的省略号只能用符号 ⋰ 代替 -->
（1）$D = \begin{vmatrix} & & & a_{1n} \\ 0 & & a_{2, n-1} & a_{2n} \\ & ⋰ & \vdots & \vdots \\ a_{n1} & \cdots & a_{n, n-1} & a_{nn} \end{vmatrix}$; &emsp;（2）$\begin{vmatrix} & & & \lambda_1 \\ & & \lambda_2 & \\ & ⋰ & & \\ \lambda_n & & & \end{vmatrix}|$.

::: details 解
（1）应注意 $D$ 不是上（下）三角形行列式, 但可以通过行的对换化为上三角形行列式. 先把 $D$ 的第 $n$ 行依次与第 $n$-$1$ 行 ⋯⋯ 第一行对换（共 $n$-$1$ 次对换）, 得行列式 $D_1$. 由 [性质 2](#性质-2), $D_1$=$(-1)^{n-1} D$, 或 $D$=$(-1)^{n-1} D_1$, 这里

$$
D_1 =
\begin{vmatrix}
  a_{n1} &   a_{n2}   & \cdots &  a_{n, n-1}  &   a_{nn}   \\
     0   &     0      & \cdots &      0       &   a_{1n}   \\
  \vdots &   \vdots   &        &    \vdots    &   \vdots   \\
     0   & a_{n-1, 2} & \cdots & a_{n-1, n-1} & a_{n-1, n}
\end{vmatrix}
,
$$

再把 $D_1$ 的第 $n$ 行依次与第 $n$-$1$ 行 ⋯⋯ 第二行对换（共 $n$-$2$ 次对换）, 得一新的行列式 ⋯⋯ 循此, $D$ 经过共

$$
(n-1) + (n-2) + \cdots + 1 = \frac{1}{2} n (n-1)
$$

次行的对换成为上三角形行列式

$$
\begin{vmatrix}
  a_{n1} &   a_{n2}   & \cdots &   a_{nn}   \\
         & a_{n-1, 2} & \cdots & a_{n-1, n} \\
         &            & \ddots &   \vdots   \\
         &     0      &        &   a_{1n}
\end{vmatrix}
,
$$

于是, $D$=$(-1)^{n-1} D_1$=⋯=$(-1)^{\frac{1}{2} n (n-1)} a_{1n} a_{2, n-1}$⋯$a_{n1}$;

（2）由（1）得

$$
\begin{vmatrix}
            &   &           & \lambda_1 \\
            &   & \lambda_2 &           \\
            & ⋰ &           &           \\
  \lambda_n &   &           &
\end{vmatrix}
= (-1)^{\frac{n (n-1)}{2}} \lambda_1 \lambda_2 \cdots \lambda_n
.
$$
:::

#### 推论

**如果行列式有两行（列）完全相同, 则此行列式等于零.**

::: details 证
把这两行对换, 有 $D$=-$D$, 故 $D$=$0$.
:::

#### 性质 3

**行列式的某一行（列）中所有的元素都乘同一数 $k$, 等于用数 $k$ 乘此行列式.**

第 $i$ 行（或列）乘 $k$, 记作 $r_i$×$k$（或 $c_i$×$k$）.

#### 推论

**行列式种某一行（列）的所有元素的公因子可以提到行列式记号的外面.**

第 $i$ 行（或列）提出公因子 $k$, 记作 $r_i$÷$k$（或 $c_i$÷$k$）, 有

$$
\begin{vmatrix}
   a_{11}  &  a_{12}  & \cdots &  a_{1n}  \\
   \vdots  &  \vdots  &        &  \vdots  \\
  k a_{i1} & k a_{i2} & \cdots & k a_{in} \\
   \vdots  &  \vdots  &        &  \vdots  \\
   a_{n1}  &  a_{n2}  & \cdots &  a_{nn}
\end{vmatrix}
\xlongequal[]{r_i \div k}
k
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  \vdots & \vdots &        & \vdots \\
  a_{i1} & a_{i2} & \cdots & a_{in} \\
  \vdots & \vdots &        & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
.
$$

#### 性质 4

**行列式中如果有两行（列）元素成比例, 则此行列式等于零.**

#### 性质 5

**若行列式的某一行（列）的元素都是两数之和, 例如第 $i$ 行的元素都是两数之和:**

$$
D =
\begin{vmatrix}
           a_{11}          &          a_{12}          & \cdots &          a_{1n}          \\
           \vdots          &          \vdots          &        &          \vdots          \\
  a_{i1} + a_{i1}^{\prime} & a_{i2} + a_{i2}^{\prime} & \cdots & a_{in} + a_{in}^{\prime} \\
           \vdots          &          \vdots          &        &          \vdots          \\
           a_{n1}          &          a_{n2}          & \cdots &          a_{nn}
\end{vmatrix}
,
$$

**则 $D$ 等于下列两个行列式之和:**

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  \vdots & \vdots &        & \vdots \\
  a_{i1} & a_{i2} & \cdots & a_{in} \\
  \vdots & \vdots &        & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} +
\begin{vmatrix}
       a_{11}     &     a_{12}      & \cdots &     a_{1n}      \\
       \vdots     &     \vdots      &        &     \vdots      \\
  a_{i1}^{\prime} & a_{i2}^{\prime} & \cdots & a_{in}^{\prime} \\
       \vdots     &     \vdots      &        &     \vdots      \\
       a_{n1}     &     a_{n2}      & \cdots &     a_{nn}
\end{vmatrix}
.
$$

当某一行（或列）的元素为两数之和时, 行列式关于该行（或列）可分解为两个行列式. 若 $n$ 阶行列式每个元素都表示成两数之和, 则它可分解成 $2^n$ 个行列式.

::: details 例如
二阶行列式

$$
\begin{aligned}
  \begin{vmatrix}
    a + x & b + y \\
    c + z & d + w
  \end{vmatrix}
    & =
      \begin{vmatrix}
        a & b + y \\
        c & d + w
      \end{vmatrix} +
      \begin{vmatrix}
        x & b + y \\
        z & d + w
      \end{vmatrix} \\
    & =
      \begin{vmatrix}
        a & b \\
        c & d
      \end{vmatrix} +
      \begin{vmatrix}
        a & y \\
        c & w
      \end{vmatrix} +
      \begin{vmatrix}
        x & b \\
        z & d
      \end{vmatrix} +
      \begin{vmatrix}
        x & y \\
        z & w
      \end{vmatrix}
      .
\end{aligned}
$$
:::

#### 性质 6

**把行列式的某一行（列）的各元素乘同一数然后加到另一行（列）对应的元素上去, 行列式不变.**

::: details 例如
以数 $k$ 乘第 $i$ 行加到第 $j$ 行上（记作 $r_j$+$k r_i$）, 有:

$$
\begin{vmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  \vdots & \vdots &        & \vdots \\
  a_{i1} & a_{i2} & \cdots & a_{in} \\
  \vdots & \vdots &        & \vdots \\
  a_{j1} & a_{j2} & \cdots & a_{jn} \\
  \vdots & \vdots &        & \vdots \\
  a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
\xlongequal[]{r_j + k r_i}
\begin{vmatrix}
       a_{11}       &      a_{12}       & \cdots &      a_{1n}       \\
       \vdots       &      \vdots       &        &      \vdots       \\
       a_{i1}       &      a_{i2}       & \cdots &      a_{in}       \\
       \vdots       &      \vdots       &        &      \vdots       \\
  a_{j1} + k a_{i1} & a_{j2} + k a_{i1} & \cdots & a_{jn} + k a_{in} \\
       \vdots       &      \vdots       &        &      \vdots       \\
       a_{n1}       &      a_{n2}       & \cdots &      a_{nn}
\end{vmatrix}
(i \neq j)
$$

（以数 $k$ 乘第 $i$ 列加到第 $j$ 列上, 记作 $c_j$+$kc_i$）
:::

性质 [2](#性质-2), [3](#性质-3), [6](#性质-6) 介绍了行列式关于行和关于列的三种运算, 即 $r_i$↔$r_j$, $r_i$×$k$, $r_i$+$kr_j$ 和 $c_i$↔$c_j$, $c_i$×$k$, $c_i$+$kc_j$, 利用这些运算可简化行列式的计算, 特别是利用运算 $r_i$+$kr_j$（或 $c_i$+$kc_j$）可以把行列式中许多元素化为 $0$. 计算行列式常用的一种方法就是利用运算 $r_i$+$kr_j$ 把行列式化为上三角形行列式, 从而算得行列式的值.

#### 例 7

计算

$$
D =
\begin{vmatrix}
   3 &  1 & -1 &  2 \\
  -5 &  1 &  3 & -4 \\
   2 &  0 &  1 & -1 \\
   1 & -5 &  3 & -3
\end{vmatrix}
.
$$

::: details 解
$$
\begin{aligned}
  D & \xlongequal[]{c_1 \leftrightarrow c_2}
      -
      \begin{vmatrix}
         1 &  3 & -1 &  2 \\
         1 & -5 &  3 & -4 \\
         0 &  2 &  1 & -1 \\
        -5 &  1 &  3 & -3
      \end{vmatrix}
      \xlongequal[r_4 + 5r_1]{r_2 - r_1}
      -
      \begin{vmatrix}
        1 &  3 & -1 &  2 \\
        0 & -8 &  4 & -6 \\
        0 &  2 &  1 & -1 \\
        0 & 16 & -2 &  7
      \end{vmatrix} \\
    & \xlongequal[]{r_2 \leftrightarrow r_3}
      \begin{vmatrix}
        1 &  3 & -1 &  2 \\
        0 &  2 &  1 & -1 \\
        0 & -8 &  4 & -6 \\
        0 & 16 & -2 &  7
      \end{vmatrix}
      \xlongequal[r_4 - 8r_2]{r_3 + 4r_2}
      \begin{vmatrix}
        1 & 3  & -1  & 2   \\
        0 & 2  &  1  & -1  \\
        0 & 0  &  8  & -10 \\
        0 & 0  & -10 & 15
      \end{vmatrix} \\
    & \xlongequal[r_3 \div 2]{r_4 \div 5}
      10
      \begin{vmatrix}
        1 & 3  & -1 & 2  \\
        0 & 2  & 1  & -1 \\
        0 & 0  & 4  & -5 \\
        0 & 0  & -2 & 3
      \end{vmatrix}
      \xlongequal[]{r_4 + \frac{1}{2} r_3}
      10
      \begin{vmatrix}
        1 & 3  & -1 &      2      \\
        0 & 2  & 1  &     -1      \\
        0 & 0  & 4  &     -5      \\
        0 & 0  & 0  & \frac{1}{2}
      \end{vmatrix}
      = 10 \times 4 = 40 .
\end{aligned}
$$
:::

#### 例 8

计算

$$
D =
\begin{vmatrix}
  3 & 1 & 1 & 1 \\
  1 & 3 & 1 & 1 \\
  1 & 1 & 3 & 1 \\
  1 & 1 & 1 & 3
\end{vmatrix}
.
$$

::: details 解
$$
\begin{aligned}
  D & \xlongequal[]{r_1 + r_2 + r_3 + r_4}
      \begin{vmatrix}
        6 & 6 & 6 & 6 \\
        1 & 3 & 1 & 1 \\
        1 & 1 & 3 & 1 \\
        1 & 1 & 1 & 3
      \end{vmatrix}
      \xlongequal[]{r_1 \div 6}
      6
      \begin{vmatrix}
        1 & 1 & 1 & 1 \\
        1 & 3 & 1 & 1 \\
        1 & 1 & 3 & 1 \\
        1 & 1 & 1 & 3
      \end{vmatrix} \\
    & \xlongequal[r_4 - r_1]{\stackrel{r_2 - r_1}{r_3 - r_1}}
      6
      \begin{vmatrix}
        1 & 1 & 1 & 1 \\
        0 & 2 & 0 & 0 \\
        0 & 0 & 2 & 0 \\
        0 & 0 & 0 & 2
      \end{vmatrix}
      = 6 \times 8 = 48 .
\end{aligned}
$$
:::

#### 例 9

计算

$$
D =
\begin{vmatrix}
  a &    b   &      c      &          d        \\
  a &  a + b &  a + b + c  &    a + b + c + d  \\
  a & 2a + b & 3a + 2b + c &  4a + 3b + 2c + d \\
  a & 3a + b & 6a + 3b + c & 10a + 6b + 3c + d
\end{vmatrix}
.
$$

::: details 解
$$
\begin{aligned}
  D & \xlongequal[r_2 - r_1]{\stackrel{r_4 - r_3}{r_3 - r_2}}
      \begin{vmatrix}
        a & b &    c   &      d      \\
        0 & a &  a + b &  a + b + c  \\
        0 & a & 2a + b & 3a + 2b + c \\
        0 & a & 3a + b & 6a + 3b + c
      \end{vmatrix}
      \xlongequal[r_3 - r_2]{r_4 - r_3}
      \begin{vmatrix}
        a & b &   c   &      d      \\
        0 & a & a + b &  a + b + c  \\
        0 & 0 &   a   &   2a + b    \\
        0 & 0 &   a   &   3a + b
      \end{vmatrix} \\
    & \xlongequal[]{r_4 - r_3}
      \begin{vmatrix}
        a & b &   c   &      d      \\
        0 & a & a + b &  a + b + c  \\
        0 & 0 &   a   &   2a + b    \\
        0 & 0 &   0   &      a
      \end{vmatrix}
      = a^4 .
\end{aligned}
$$
:::

::: warning 注意
各个运算的次序一般不能颠倒, 因为后一次运算是建立在前一次运算的结果之上.
:::

::: details 例如
$$
\begin{aligned}
  \begin{vmatrix}
    a & b \\
    c & d
  \end{vmatrix}
  \xlongequal[]{r_1 + r_2}
  \begin{vmatrix}
    a + c & b + d \\
      c   &   d
  \end{vmatrix}
  \xlongequal[]{r_2 - r_1}
  \begin{vmatrix}
    a + c & b + d \\
     -a   &  -b
  \end{vmatrix}
  , \\
  \begin{vmatrix}
    a & b \\
    c & d
  \end{vmatrix}
  \xlongequal[]{r_2 - r_1}
  \begin{vmatrix}
      a   &   b   \\
    c - a & d - b
  \end{vmatrix}
  \xlongequal[]{r_1 + r_2}
  \begin{vmatrix}
      c   &   d   \\
    c - a & d - b
  \end{vmatrix}
  ,
\end{aligned}
$$

可见两次运算当次序不同时运算结果不同. 忽视后一次运算是作用在前一次运算结果上, 就会出错, 例如

$$
\begin{vmatrix}
  a & b \\
  c & d
\end{vmatrix}
\xlongequal[r_2 - r_1]{r_1 + r_2}
\begin{vmatrix}
  a + c & b + d \\
  c - a & d - b
\end{vmatrix}
,
$$

这样的运算是错误的, 出错的原因在于第二次运算找错了对象.
:::

此外还要注意运算 $r_i$+$r_j$ 与 $r_j$+$r_i$ 的区别, $r_i$+$kr_j$ 是约定的行列式运算记号, 不能写作 $kr_j$+$r_i$（这里不能套用加法的交换律）.

上述诸例都是利用运算 $r_i$+$kr_j$ 把行列式化为上三角形行列式, 用归纳法不难证明（这里不证）任何 $n$ 阶行列式总能利用运算 $r_i$+$kr_j$ 化为上三角形行列式, 或化为下三角形行列式（这时要先把 $a_{in}$, ⋯, $a_{n-1}$ 化为 $0$）. 类似地, 利用列运算 $c_i$+$kc_j$, 也可把行列式化为上三角形行列式或下三角形行列式.

#### 例 10

设

$$
\begin{matrix}
  D =
  \begin{vmatrix}
    a_{11} & \cdots & a_{1k} &        &        &        \\
    \vdots &        & \vdots &        &   0    &        \\
    a_{k1} & \cdots & a_{kk} &        &        &        \\
    c_{11} & \cdots & c_{1k} & b_{11} & \cdots & b_{1n} \\
    \vdots &        & \vdots & \vdots &        & \vdots \\
    c_{n1} & \cdots & c_{nk} & b_{n1} & \cdots & b_{nn}
  \end{vmatrix}
  , \\
  D_1 = det(a_{ij}) =
  \begin{vmatrix}
    a_{11} & \cdots & a_{1k} \\
    \vdots &        & \vdots \\
    a_{k1} & \cdots & a_{kk}
  \end{vmatrix}
  , \quad
  D_2 = det(b_{ij}) =
  \begin{vmatrix}
    b_{11} & \cdots & b_{1n} \\
    \vdots &        & \vdots \\
    b_{n1} & \cdots & b_{nn}
  \end{vmatrix}
  ,
\end{matrix}
$$

证明: $D = D_1 D_2$.

::: details 证
对 $D_1$ 作运算 $r_i$+$\lambda r_j$, 把 $D$ 化为下三角形行列式, 设为

$$
D_1 =
\begin{vmatrix}
  p_{11} &        &   0    \\
  \vdots & \ddots &        \\
  p_{k1} & \cdots & p_{kk}
\end{vmatrix}
,
$$

对 $D_2$ 作运算 $c_i$+$\lambda c_j$, 把 $D_2$ 化为下三角形行列式, 设为

$$
D_2 =
\begin{vmatrix}
  q_{11} &        &   0    \\
  \vdots & \ddots &        \\
  q_{n1} & \cdots & q_{nn}
\end{vmatrix}
.
$$

于是, 对 $D$ 的前 $k$ 行作运算 $c_i$+$\lambda c_j$, 再对后 $n$ 列作运算 $c_i$+$\lambda c_j$, 把 $D$ 化为下三角形行列式

$$
\begin{vmatrix}
  p_{11} &        &        &        &        &        \\
  \vdots & \ddots &        &        &   0    &        \\
  p_{k1} & \cdots & p_{kk} &        &        &        \\
  c_{11} & \cdots & c_{1k} & q_{11} &        &        \\
  \vdots &        & \vdots & \vdots & \ddots &        \\
  c_{n1} & \cdots & c_{nk} & q_{n1} & \cdots & q_{nn}
\end{vmatrix}
,
$$

故

$$
D = p_{11} \cdots p_{kk} q_{11} \cdots q_{nn} = D_1 D_2.
$$
:::

#### 例 11

计算 $2n$ 阶行列式

<!-- 副对角线上的省略号只能用符号 ⋰ 代替 -->
<!-- 有趣的是，若将对角省略号 \ddots 改写为符号 ⋱，vuepress-plugin-latex 插件会认为两者是等价的 -->
$$
\begin{array}{r}
  D_{2n} =
  \begin{vmatrix}
    a &        &   &   &        & b \\
      & \ddots &   &   &   ⋰    &   \\
      &        & a & b &        &   \\
      &        & c & d &        &   \\
      &   ⋰    &   &   & \ddots &   \\
    c &        &   &   &        & d
  \end{vmatrix}
  , \\
  \underbrace{\phantom{\begin{vmatrix} a & \ddots & a & b & \ddots & b \end{vmatrix}}}_{2n} \phantom{,}
\end{array}
$$

其中未写出的元素为 $0$.

::: details 解
把 $D_{2n}$ 中的第 $2n$ 行依次与第 $2n$-$1$ 行 ⋯⋯ 第 $2$ 行对换（作 $2n$-$2$ 次相邻两行的对换）, 再把第 $2n$ 列依次与第 $2n$-$1$ 列 ⋯⋯ 第 $2$ 列对换, 得

$$
\begin{array}{r}
  D_{2n} = (-1)^{2(2n - 2)}
  \begin{vmatrix}
       a   &   b    & 0 &        & \cdots &   &        & 0 \\
       c   &   d    & 0 &        & \cdots &   &        & 0 \\
       0   &   0    & a &        &        &   &        & b \\
           &        &   & \ddots &        &   &   ⋰    &   \\
    \vdots & \vdots &   &        &   a    & b &        &   \\
           &        &   &        &   c    & d &        &   \\
           &        &   &   ⋰    &        &   & \ddots &   \\
       0   &   0    & c &        &        &   &        & d
  \end{vmatrix}
  . \\
  \underbrace{\phantom{\begin{vmatrix} 0 & \ddots & \ddots & b & \ddots & 0 \end{vmatrix}}}_{2(n-1)} \phantom{.}
\end{array}
$$

根据 [例 10](#例-10) 的结果, 有

$$
D_{2n} = D_2 D_{2(n-1)} = (ad - bc) D_{2(n-1)} .
$$

以此作递推公式, 即得

$$
D_{2n} = (ad - bc)^2 D_{2(n-2)} = \cdots = (ad - bc)^{n-1} D_2 = (ad - bc)^n .
$$
:::

## 行列式的展开

### 余子式与代数余子式

在 $n$ 阶行列式中, 把 $(i,j)$ 元 $n_{ij}$ 所在的第 $i$ 行和第 $j$ 列划去后, 留下来的 $n$-$1$ 阶行列式叫做 $(i,j)$ 元的 `余子式`, 记作 $M_{ij}$; 记

$$
A_{ij} = (-1)^{i+j} M_{ij} ,
$$

$A_{ij}$ 叫做 $(i,j)$ 元 $a_{ij}$ 的 `代数余子式`.

::: details 例如
四阶行列式

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} & a_{13} & a_{14} \\
  a_{21} & a_{22} & a_{23} & a_{24} \\
  a_{31} & a_{32} & a_{33} & a_{34} \\
  a_{41} & a_{42} & a_{43} & a_{44}
\end{vmatrix}
$$

中 $(3,2)$ 元 $a_{32}$ 的余子式和代数余子式分别为

$$
M_{32} =
\begin{vmatrix}
  a_{11} & a_{13} & a_{14} \\
  a_{21} & a_{23} & a_{24} \\
  a_{41} & a_{43} & a_{44}
\end{vmatrix}
,
$$

$$
A_{32} = (-1)^{3+2} M_{32} = - M_{32} .
$$
:::

#### 引理

**一个 $n$ 阶行列式, 如果其中第 $i$ 行所有元素除 $(i,j)$ 元 $a_{ij}$ 外都为零, 那么这行列式等于 $a_{ij}$ 与它的代数余子式的乘积, 即**

$$
D = a_{ij} A_{ij} .
$$

::: details 证
先证 $(i,j)$=$(1,1)$ 的情形, 此时

$$
D =
\begin{vmatrix}
  a_{11} &   0    &   0    &   0    \\
  a_{21} & a_{22} & a_{23} & a_{24} \\
  a_{31} & a_{32} & a_{33} & a_{34} \\
  a_{41} & a_{42} & a_{43} & a_{44}
\end{vmatrix}
,
$$

这是 [例 10](#例-10) 中当 $k$=$1$ 时的特殊情形, 按例 10 的结论, 即有

$$
D = a_{11} M_{11} ,
$$

又

$$
A_{11} = (-1)^{1+1} M_{11} = M_{11},
$$

从而

$$
D = a_{11} A_{11} .
$$

再证一般情形, 此时

$$
D =
\begin{vmatrix}
  a_{11} & \cdots & a_{1j} & \cdots & a_{1n} \\
  \vdots &        & \vdots &        & \vdots \\
     0   & \cdots & a_{ij} & \cdots &   0    \\
  \vdots &        & \vdots &        & \vdots \\
  a_{n1} & \cdots & a_{nj} & \cdots & a_{nn}
\end{vmatrix}
.
$$

为了利用前面的结果, 把 $D$ 的行列作如下调换: 把 $D$ 的第 $i$ 行依次与第 $i$-$1$ 行、第 $i$-$2$ 行 ⋯⋯ 第 $1$ 行对换, 这样数 $a_{ij}$ 就换成 $(i,j)$ 元, 对换的次数为 $i$-$1$. 再把第 $j$ 列依次与第 $j$-$1$ 列 ⋯⋯ 第 $1$ 列对换, 这样数 $a_{ij}$ 就换成 $(1,1)$ 元, 对换的次数为 $j$-$1$. 总之, 经 $i$+$j$-$2$ 次对换, 把数 $a_{ij}$ 换成 $(1,1)$ 元, 所得的行列式 $D_1$=$(-1)^{i+j-2} D$=$(-1)^{i+j} D$, 而 $D_1$ 中 $(1,1)$ 元的余子式就是 $D$ 中 $(i,j)$ 元的余子式 $M_{ij}$.

由于 $D_1$ 的 $(1,1)$ 元为 $a_{ij}$, 第 $1$ 行其余元素都为 $0$, 利用前面的结果, 有

$$
D_1 = a_{ij} M_{ij} ,
$$

于是

$$
D = (-1)^{i+j} D_1 = (-1)^{i+j} a_{ij} M_{ij} = a_{ij} A_{ij} .
$$
:::

> [代数余子式](#余子式与代数余子式) 的定义 $A_{ij}$=$(-1)^{i+j} M_{ij}$, 其中的系数为什么取 $(-1)^{i+j}$ 呢?
>
> 这个引理 —— 之所以称之为“引理” —— 的证明过程, 很可能是此问题的线索.

### 行列式按行（列）展开法则

#### 定理 2

**行列式等于它的任一行（列）的各元素与其对应的代数余子式乘积之和, 即**

$$
D = a_{i1} A_{i1} + a_{i2} A_{i2} + \cdots + a_{in} A_{in} \quad (i = 1, 2, \cdots, n)
$$

**或**

$$
D = a_{1j} A_{1j} + a_{2j} A_{2j} + \cdots + a_{nj} A_{nj} \quad (j = 1, 2, \cdots, n) .
$$

::: details 证
$$
\begin{aligned}
  D & =
      \begin{vmatrix}
                 a_{11}         &         a_{12}          & \cdots &         a_{1n}          \\
                 \vdots         &         \vdots          &        &         \vdots          \\
        a_{i1} + 0 + \cdots + 0 & 0 + a_{i2} + \cdots + 0 & \cdots & 0 + \cdots + 0 + a_{in} \\
                 \vdots         &         \vdots          &        &         \vdots          \\
                 a_{n1}         &         a_{n2}          & \cdots &         a_{nn}
      \end{vmatrix} \\
    & =
      \begin{vmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        \vdots & \vdots &        & \vdots \\
        a_{i1} &   0    & \cdots &   0    \\
        \vdots & \vdots &        & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
      \end{vmatrix} +
      \begin{vmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        \vdots & \vdots &        & \vdots \\
          0    & a_{i2} & \cdots &   0    \\
        \vdots & \vdots &        & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
      \end{vmatrix} + \cdots +
      \begin{vmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        \vdots & \vdots &        & \vdots \\
          0    &   0    & \cdots & a_{in} \\
        \vdots & \vdots &        & \vdots \\
        a_{n1} & a_{n2} & \cdots & a_{nn}
      \end{vmatrix}
      ,
\end{aligned}
$$

根据引理, 即得

$$
D = a_{i1} A_{i1} + a_{i2} A_{i2} + \cdots + a_{in} A_{in} \quad (i = 1, 2, \cdots, n) .
$$

类似地, 若按列证明, 可得

$$
D = a_{1j} A_{1j} + a_{2j} A_{2j} + \cdots + a_{nj} A_{nj} \quad (j = 1, 2, \cdots, n) .
$$
:::

这个定理叫做 `行列式按行（列）展开法则`. 利用这一法则并结合行列式的性质, 可以化简行列式的计算.

#### 例 7（续）

用行列式按行（列）展开法则计算 [例 7](#例-7) 中的行列式

$$
D =
\begin{vmatrix}
   3 &  1 & -1 &  2 \\
  -5 &  1 &  3 & -4 \\
   2 &  0 &  1 & -1 \\
   1 & -5 &  3 & -3
\end{vmatrix}
.
$$

::: details 解
$$
\begin{aligned}
  D & \xlongequal[c_4 + c_3]{c_1 - 2c_3}
      \begin{vmatrix}
                        5  &                 1 &                -1 &                 1 \\
                       -11 &                 1 &                 3 &                -1 \\
        \color{#3eaf7c} 0  & \color{#3eaf7c} 0 & \color{#3eaf7c} 1 & \color{#3eaf7c} 0 \\
                       -5  &                -5 &                 3 &                 0
      \end{vmatrix} \\
    & = (-1)^{3+3}
      \begin{vmatrix}
         5  &  1 &  1 \\
        -11 &  1 & -1 \\
        -5  & -5 &  0
      \end{vmatrix}
      \xlongequal[]{r_2 + r_1}
      \begin{vmatrix}
         5 &  1 & \color{#3eaf7c} 1 \\
        -6 &  2 & \color{#3eaf7c} 0 \\
        -5 & -5 & \color{#3eaf7c} 0
      \end{vmatrix} \\
    & = (-1)^{1+3}
      \begin{vmatrix}
        -6 &  2 \\
        -5 & -5
      \end{vmatrix}
      \xlongequal[]{c_1 - c_2}
      \begin{vmatrix}
        -8 &  2 \\
         0 & -5
      \end{vmatrix}
      = 40 .
\end{aligned}
$$
:::

#### 例 12

证明范德蒙德（Vandermonde）行列式

$$
D_n =
\begin{vmatrix}
      1     &    1      & \cdots &    1      \\
     x_1    &   x_2     & \cdots &   x_n     \\
    x_1^2   &  x_2^2    & \cdots &  x_n^2    \\
    \vdots  &  \vdots   &        &  \vdots   \\
  x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
\end{vmatrix}
= \prod_{n \geq i > j \geq 1} (x_i - x_j) ,
\tag{8}
$$

其中记号“∏”表示全体同类因子的乘积.

::: details 证
用数学归纳法, 因为

$$
D_2 =
\begin{vmatrix}
 1  &  1  \\
x_1 & x_2
\end{vmatrix}
= x_2 - x_1 = \prod_{2 \geq i > j \geq 1} (x_i - x_j) ,
$$

所以当 $n$=$2$ 时 (8) 式成立. 现在假设 (8) 式对于 $n$-$1$ 阶范德蒙德行列式成立, 要证 (8) 式对 $n$ 阶范德蒙德行列式也成立.

为此, 设法把 $D_n$ 降阶: 从第 $n$ 行开始, 后行减去前行的 $x_1$ 倍, 有

$$
\begin{aligned}
  D_n
    & =
      \begin{vmatrix}
        \color{#3eaf7c}    1   &           1           &           1           & \cdots &           1           \\
        \color{#3eaf7c}    0   &       x_2 - x_1       &       x_3 - x_1       & \cdots &       x_n - x_1       \\
        \color{#3eaf7c}    0   &    x_2 (x_2 - x_1)    &    x_3 (x_3 - x_1)    & \cdots &    x_n (x_n - x_1)    \\
        \color{#3eaf7c} \vdots &        \vdots         &        \vdots         &        &        \vdots         \\
        \color{#3eaf7c}    0   & x_2^{n-2} (x_2 - x_1) & x_3^{n-2} (x_3 - x_1) & \cdots & x_n^{n-2} (x_n - x_1)
      \end{vmatrix} \\
    & = (-1)^{1+1}
      \begin{vmatrix}
              x_2 - x_1       &       x_3 - x_1       & \cdots &       x_n - x_1       \\
           x_2 (x_2 - x_1)    &    x_3 (x_3 - x_1)    & \cdots &    x_n (x_n - x_1)    \\
               \vdots         &        \vdots         &        &        \vdots         \\
        x_2^{n-2} (x_2 - x_1) & x_3^{n-2} (x_3 - x_1) & \cdots & x_n^{n-2} (x_n - x_1)
      \end{vmatrix} \\
    & \xlongequal[\stackrel{\vdots}{c_{n-1} \div (x_n - x_1)}]{\stackrel{c_1 \div (x_2 - x_1)}{c_2 \div (x_3 - x_1)}}
      (x_2 - x_1) (x_3 - x_1) \cdots (x_n - x_1)
      \begin{vmatrix}
            1     &     1     & \cdots &     1     \\
           x_2    &    x_3    & \cdots &    x_n    \\
          \vdots  &  \vdots   &        &  \vdots   \\
        x_2^{n-2} & x_3^{n-2} & \cdots & x_n^{n-2}
      \end{vmatrix}
      ,
\end{aligned}
$$

最右端的行列式是 $n$-$1$ 阶范德蒙德行列式, 按归纳法假设, 它等于所有 ($x_i$-$x_j$) 因子的乘积, 其中 $n$≥$i$>$j$≥$2$. 故

$$
\begin{aligned}
  D_n
    & = (x_2 - x_1) (x_3 - x_1) \cdots (x_n - x_1) \prod_{n \geq i > j \geq 2} (x_i - x_j) \\
    & = \prod_{n \geq i > j \geq 1} (x_i - x_j) .
\end{aligned}
$$
:::

::: tip 提示
计算 $n$ 阶行列式, 常要使用数学归纳法, 不过在比较简单的情形（如 [例 11](#例-11)）, 可省略归纳法的叙述格式, 但归纳法的主要步骤是不可能省略的. 这主要步骤是: 导出递推公式（例 11 中导出 $D_{2n}$=($ad$-$bc$)$D_{2(n-1)}$）及检验 $n$=$1$ 时结论成立（例 11 中最后用到 $D_2$=$ad$-$bc$）.
:::

下面来推导行列式的另一重要性质, 并将它作为 [定理 2](#定理-2) 的推论.

设有 $n$ 阶行列式 $D$=$det$($a_{ij}$), 我们已得到它的按第 $j$ 行展开式

$$
D = a_{j1} A_{j1} + a_{j2} A_{j2} + \cdots + a_{jn} A_{jn} .
$$

因诸 $A_{jk}$ ($k$ = $1$, $2$, ⋯, $n$) 都是先划去了 $D$ 中第 $j$ 行再经计算而得, 所以当第 $j$ 行元素依次取为 $b_1$, $b_2$, ⋯, $b_n$ 时就有

$$
D_j =
\begin{vmatrix}
                 a_{11}   &                 \cdots &                a_{1n}   \\
                 \vdots   &                        &                \vdots   \\
               a_{j-1, 1} &                 \cdots &              a_{j-1, n} \\
  \color{#3eaf7c} b_1     & \color{#3eaf7c} \cdots & \color{#3eaf7c} b_n     \\
               a_{j+1, 1} &                 \cdots &              a_{j+1, n} \\
                 \vdots   &                        &                \vdots   \\
                 a_{n1}   &                 \cdots &                a_{nn}
\end{vmatrix}
= b_1 A_{j1} + b_2 A_{j2} + \cdots + b_n A_{jn} .
\tag{9}
$$

这里 $D_j$ 表示除第 $i$ 行外其余各行均与 $D$ 相同的行列式.

特别, 当 $b_1$, $b_2$, ⋯, $b_n$ 依次取为 $D$=$det$($a_{ij}$) 的第 $i$ 行 ($i$≠$j$) 各元素时, 上式仍成立. 但此时因 $D_j$ 中第 $j$ 行与第 $i$ 行两行相同, 故 $D_j$=$0$, 从而有

$$
a_{i1} A_{j1} + a_{i2} A_{j2} + \cdots + a_{in} A_{jn} = 0 \quad (i \neq j) .
$$

对列作相仿的讨论可知

$$
\begin{vmatrix}
  a_{11} & \cdots & a_{1, j-1} & \color{#3eaf7c}  b_1   & a_{1, j+1} & \cdots & a_{1n} \\
  \vdots &        &   \vdots   & \color{#3eaf7c} \vdots &   \vdots   &        & \vdots \\
  a_{n1} & \cdots & a_{n, j-1} & \color{#3eaf7c}  b_n   & a_{n, j+1} & \cdots & a_{nn}
\end{vmatrix}
= b_1 A_{1j} + b_2 A_{2j} + \cdots + b_n A_{nj} .
\tag{10}
$$

特别有

$$
a_{1i} A_{1j} + a_{2i} A_{2j} + \cdots + a_{ni} A_{nj} = 0 \quad (i \neq j) .
$$

这样得到了下述推论.

#### 推论

**行列式某一行（列）的元素与另一行（列）的对应元素的代数余子式乘积之和等于零. 即**

$$
a_{i1} A_{j1} + a_{i2} A_{j2} + \cdots + a_{in} A_{jn} = 0 , \quad i \neq j
$$

**或**

$$
a_{1i} A_{1j} + a_{2i} A_{2j} + \cdots + a_{ni} A_{nj} = 0 , \quad i \neq j .
$$

综合 [定理 2](#定理-2) 及其推论, 有关于代数余子式的重要性质:

$$
\sum_{k=1}^n a_{ki} A_{kj} =
\begin{cases}
  D, & \text{当} i = j, \\
  0, & \text{当} i \neq j
\end{cases}
$$

或

$$
\sum_{k=1}^n a_{ik} A_{jk} =
\begin{cases}
  D, & \text{当} i = j, \\
  0, & \text{当} i \neq j .
\end{cases}
$$

#### 例 13

设

$$
D =
\begin{vmatrix}
   3 & -5 &  2 &  1 \\
   1 &  1 &  0 & -5 \\
  -1 &  3 &  1 &  3 \\
   2 & -4 & -1 & -3
\end{vmatrix}
,
$$

$D$ 的 $(i,j)$ 元的余子式和代数余子式依次记作 $M_{ij}$ 和 $A_{ij}$, 求

$$
A_{11} + A_{12} + A_{13} + A_{14} \text{及} M_{11} + M_{21} + M_{31} + M_{41} .
$$

::: details 解
按 (9) 式可知 $A_{11}$+$A_{12}$+$A_{13}$+$A_{14}$ 等于用 $1$, $1$, $1$, $1$ 代替 $D$ 的第 $1$ 行所得的行列式, 即

$$
\begin{aligned}
  & \phantom{=}
    A_{11} + A_{12} + A_{13} + A_{14} \\
  & =
    \begin{vmatrix}
      \color{#3eaf7c} 1 & \color{#3eaf7c} 1 & \color{#3eaf7c} 1 & \color{#3eaf7c} 1 \\
                      1 &                 1 &                 0 &                -5 \\
                     -1 &                 3 &                 1 &                 3 \\
                      2 &                -4 &                -1 &                -3
    \end{vmatrix}
    \xlongequal[r_3 - r_1]{r_4 + r_3}
    \begin{vmatrix}
       1 &  1 & 1 &  1 \\
       1 &  1 & 0 & -5 \\
      -2 &  2 & 0 &  2 \\
       1 & -1 & 0 &  0
    \end{vmatrix} \\
  & = (-1)^{1+3}
    \begin{vmatrix}
       1 &  1 & -5 \\
      -2 &  2 &  2 \\
       1 & -1 &  0
    \end{vmatrix}
    \xlongequal[]{c_2 + c_1}
    \begin{vmatrix}
       1 & 2 & -5 \\
      -2 & 0 &  2 \\
       1 & 0 &  0
    \end{vmatrix}
    = (-1)^{3+1}
    \begin{vmatrix}
      2 & -5 \\
      0 &  2
    \end{vmatrix}
    = 4 .
\end{aligned}
$$

按 (10) 式可知

$$
\begin{aligned}
  & \phantom{=}
    M_{11} + M_{21} + M_{31} + M_{41} \\
  & = A_{11} - A_{21} + A_{31} - A_{41} \\
  & =
    \begin{vmatrix}
      \color{#3eaf7c}  1 & -5 &  2 &  1 \\
      \color{#3eaf7c} -1 &  1 &  0 & -5 \\
      \color{#3eaf7c}  1 &  3 &  1 &  3 \\
      \color{#3eaf7c} -1 & -4 & -1 & -3
    \end{vmatrix}
    \xlongequal[]{r_4 + r_3}
    \begin{vmatrix}
       1 & -5 &  2 &  1 \\
      -1 &  1 &  0 & -5 \\
       1 &  3 &  1 &  3 \\
       0 & -1 &  0 &  0
    \end{vmatrix} \\
  & = (-1)^{4+2} \times (-1)
    \begin{vmatrix}
       1 &  2 &  1 \\
      -1 &  0 & -5 \\
       1 &  1 &  3
    \end{vmatrix}
    \xlongequal[]{r_1 - 2r_3} -
    \begin{vmatrix}
      -1 &  0 & -5 \\
      -1 &  0 & -5 \\
       1 &  1 &  3
    \end{vmatrix}
    = 0 .
\end{aligned}
$$
:::
