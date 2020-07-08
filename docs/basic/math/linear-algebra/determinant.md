# 行列式

## 初识行列式

### 二元线性方程组

用“消元法”解二元线性方程组

<!-- 式 (1) -->
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 = b_1 , \\
a_{21} x_1 + a_{22} x_2 = b_2 .
\end{cases}
\tag{1}
$$

为消去未知数 $x_2$, 以 $a_{22}$ 与 $a_{12}$ 分别乘上列两方程的两端, 然后两个方程相减, 得

$$
\left( a_{11} a_{22} - a_{12} a_{21} \right) x_1 = b_1 a_{22} - a_{12} b_2 ;
$$

类似地, 消去 $x_1$, 得

$$
\left( a_{11} a_{22} - a_{12} a_{21} \right) x_2 = a_{11} b_2 - b_1 a_{21} .
$$

当 $a_{11} a_{22} - a_{12} a_{21} \neq 0$ 时, 求得方程组的解为

<!-- 式 (2) -->
$$
x_1 = \frac{b_1 a_{22} - a_{12} b_2}{a_{11} a_{22} - a_{12} a_{21}} ,  x_2 = \frac{a_{11} b_2 - b_1 a_{21}}{a_{11} a_{22} - a_{12} a_{21}} .
\tag{2}
$$

### 二阶行列式

(2) 式中的分子、分母都是四个数分别两对相乘再相减而得, 其中分母 $a_{11} a_{22} - a_{12} a_{21}$ 是由方程组 (1) 的四个系数确定的, 把这四个数按它们在方程组 (1) 中的位置, 排成二行二列（横排称 `行`,  竖排称 `列`）的数表

<!-- 式 (3) -->
$$
\begin{array}{cc}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{array}
,
\tag{3}
$$

表达式 $a_{11} a_{22} - a_{12} a_{21}$ 称为数表 (3) 所确定的 `二阶行列式`, 并记作

<!-- 式 (4) -->
$$
\left|
\begin{array}{cc}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{array}
\right|
.
\tag{4}
$$

数 $a_{ij}$（$i=1,2$; $j=1,2$）称为行列式 (4) 的 `元素` 或 `元`, 元素 $a_{ij}$ 的第一个下标 $i$ 称为 `行标`, 表明该元素位于第 $i$ 行; 第二个下标 $j$ 称为 `列标`, 表明该元素位于第 $j$ 列. 位于第 $i$ 行第 $j$ 列的元素称为行列式 (4) 的 `(i,j) 元`.

### 对角线法则

(4) 式中的 [二阶行列式](#二阶行列式) 可以利用 `对角线法则` 来记忆.

主对角线上元素: $\left| \begin{array}{cc} a_{11} & \\ & a_{22} \end{array} \right|$, 副对角线上元素: $\left| \begin{array}{ccc} & a_{12} \\ a_{21} & \end{array} \right|$.

于是, 二阶行列式便是主对角线上两元素 $a_{11}$、$a_{22}$ 之积减去副对角线上两元素 $a_{12}$、$a_{21}$ 之积.

### 方程组的解

利用二阶行列式的概念, (2) 式中 $x_1$, $x_2$ 的分子也可以写成二阶行列式, 即

$$
b_1 a_{22} - a_{12} b_2 =
\left|
\begin{array}{cc}
b_1 & a_{12} \\
b_2 & a_{22}
\end{array}
\right|
,
\qquad
a_{11} b_2 - b_1 a_{21} =
\left|
\begin{array}{cc}
a_{11} & b_1 \\
a_{21} & b_2
\end{array}
\right|
.
$$

若记

$$
D =
\left|
\begin{array}{cc}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{array}
\right|
,
\qquad
D_1 =
\left|
\begin{array}{cc}
b_1 & a_{12} \\
b_2 & a_{22}
\end{array}
\right|
,
\qquad
D_2 =
\left|
\begin{array}{cc}
a_{11} & b_1 \\
a_{21} & b_2
\end{array}
\right|
,
$$

那么 (2) 式可以写成

$$
x_1 = \frac{D_1}{D} = \frac{
  \left|
  \begin{array}{cc}
  b_1 & a_{12} \\
  b_2 & a_{22}
  \end{array}
  \right|
}{
  \left|
  \begin{array}{cc}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
  \end{array}
  \right|
}
,
\qquad
x_2 = \frac{D_2}{D} = \frac{
  \left|
  \begin{array}{cc}
  a_{11} & b_1 \\
  a_{21} & b_2
  \end{array}
  \right|
}{
  \left|
  \begin{array}{cc}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
  \end{array}
  \right|
}
.
$$

注意这里的分母 $D$ 是由方程组 (1) 的系数所确定的二阶行列式（称 `系数行列式`）, $x_1$ 的分子 $D_1$ 是用常数项 $b_1$, $b_2$ 替换 $D$ 中第 $1$ 列的元素 $a_{11}$, $a_{21}$ 所得的二阶行列式, $x_2$ 的分子 $D_2$ 是用常数项 $b_1$, $b_2$ 替换 $D$ 中第 $2$ 列的元素 $a_{12}$, $a_{22}$ 所得的二阶行列式.

::: details 例 1
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
  \left|
  \begin{array}{cc}
  3 & -2 \\
  2 & 1
  \end{array}
  \right|
  = 3 - (-4) = 7 \neq 0 , \\
& D_1 =
  \left|
  \begin{array}{cc}
  12 & -2 \\
  1  & 1
  \end{array}
  \right|
  = 12 - (-2) = 14 , \\
& D_2 =
  \left|
  \begin{array}{cc}
  3 & 12 \\
  2  & 1
  \end{array}
  \right|
  = 3 - 24 = -21 ,
\end{aligned}
$$

因此

$$
x_1 = \frac{D_1}{D} = \frac{14}{7} = 2 ,
\qquad
x_2 = \frac{D_2}{D} = \frac{-21}{7} = -3 .
$$
:::

### 三阶行列式

#### 定义 1

设有 9 个数排成 3 行 3 列的数表

<!-- 式 (5) -->
$$
\begin{array}{ccc}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{array}
,
\tag{5}
$$

记

<!-- 式 (6) -->
$$
\begin{aligned}
  & \left|
    \begin{array}{ccc}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
    \end{array}
    \right| \\
= & a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} - a_{11} a_{23} a_{32} - a_{12} a_{21} a_{33} - a_{13} a_{22} a_{11} ,
\end{aligned}
\tag{6}
$$

(6) 式称为数表 (5) 所确定的三阶行列式.

三阶行列式是三条主对角线及其平行线上元素之积, 减去三条副对角线及其平行线上元素之积.

::: details 例 2
计算三阶行列式

$$
D =
\left|
\begin{array}{ccc}
1  & 2 & -4 \\
-2 & 2 & 1  \\
-3 & 4 & -2
\end{array}
\right|
.
$$

::: details 解
按对角线法则, 有

$$
\begin{aligned}
D = & 1 \times 2 \times (-2) + 2 \times 1 \times (-3) + (-4) \times (-2) \times 4 - \\
    & 1 \times 1 \times 4 - 2 \times (-2) \times (-2) - (-4) \times 2 \times (-3) \\
  = & -4 + (-6) + 32 - 4 - 8 - 24 = -14 .
\end{aligned}
$$
:::

::: details 例 3
求解方程

$$
\left|
\begin{array}{ccc}
1 & 1 & 1   \\
2 & 3 & x   \\
4 & 9 & x^2
\end{array}
\right|
= 0 .
$$

::: details 解
方程左端的三阶行列式

$$
D = 3x^2 + 4x + 18 - 9x -2x^2 - 12 = x^2 - 5x + 6 ,
$$

由 $x^2 - 5x + 6 = 0$ 解得 $x = 2$ 或 $x = 3$.
:::

::: tip 提示
[对角线法则](#对角线法则) 只适用于二阶、三阶行列式的记忆. 为研究四阶及更高阶行列式, 先介绍有关 [全排列](#全排列) 的知识.
:::

## 全排列与对换 <Badge text="辅助"/>

### 全排列

把 $n$ 个不同的元素排成一列, 叫做这 $n$ 个元素的 `全排列`（也简称 `排列`）.

$n$ 个不同元素的所有排列的种数, 通常用 $P_n$ 表示, 可计算如下:

从 $n$ 个元素中任取一个放在第一个位置上, 有 $n$ 中取法;
从剩下的 $n-1$ 个元素中任取一个放在第二个位置上, 有 $n-1$ 种取法;
以此类推, 直到最后只剩下一个元素放在第 $n$ 个位置上, 只有 $1$ 中取法. 于是

$$
P_n = n \cdot (n-1) \cdot \ldots \cdot 3 \cdot 2 \cdot 1 = n! .
$$

例如用 $1$, $2$, $3$ 三个数字作排列, 排列总数 $P_3 = 3 \cdot 2 \cdot 1 = 6$, 它们是 $123$, $231$, $312$, $132$, $213$, $321$.

### 逆序数

对于 $n$ 个不同的元素, 先规定各元素之间有一个标准次序（例如 $n$ 个不同的自然数, 可规定由小到大为标准次序）, 于是在这 $n$ 个元素的任一排列中, 当某一对元素的先后次序与标准次序不同时, 就说它构成 $1$ 个 `逆序`. 一个排列中所有逆序的总数叫做这个 `排列的逆序数`.

逆序数为奇数的排列叫做 `奇排列`, 逆序数为偶数的排列叫做 `偶排列`.

::: details 例 4
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

#### 计算逆序数的方法

不妨设 $n$ 个元素为 $1$ 至 $n$ 这 $n$ 个自然数, 并规定由小到大为标准次序. 设 $p_1 p_2 \cdots p_n$ 为这 $n$ 个自然数的一个排列, 考虑元素 $p_i$（$i = 1, 2, \cdots, n$）, 如果比 $p_i$ 大的且排在 $p_i$ 前面的元素有 $t_i$ 个, 就说 $p_i$ 这个元素的逆序数是 $t_i$. 全体元素的逆序数之总和

$$
t = t_1 + t_2 + \cdots + t_n = \sum_{n=1}^n t_i
$$

即是这个数的逆序数.


### 对换

在排列中, 将任意两个元素对调, 其余的元素不动, 这种做出新排列的手续叫做 `对换`. 将相邻的两个元素对换, 叫做 `相邻对换`.

#### 定理 1

**一个排列中的任意两个元素对换, 排列改变奇偶性.**

::: details 证
不妨设元素为从 $1$ 开始的自然数（从小到大为标准次序）. 先证相邻对换的情形.

设排列为 $a_1 \cdots a_l a b b_1 \cdots b_m$, 对换 $a$ 与 $b$, 变为 $a_1 \cdots a_l b a b_1 \cdots b_m$. 显然, $a_1, \cdots, a_l; b_1, \cdots, b_m$ 这些元素的逆序数经过对换并不改变, 而 $a$, $b$ 两元素的逆序数改变为: 当 $a<b$ 时, 经对换后 $a$ 的逆序数增加 $1$ 而 $b$ 的逆序数不变; 当 $a>b$ 时, 经对换后 $a$ 的逆序数不变而 $b$ 的逆序数减少 $1$. 所以排列 $a_1 \cdots a_l a b b_1 \cdots b_m$ 与排列 $a_1 \cdots a_l b a b_1 \cdots b_m$ 的奇偶性不同.

再证一般对换的情形.

设排列为 $a_1 \cdots a_l a b_1 \cdots b_m b c_1 \cdots c_n$, 把它做 $m$ 次相邻对换, 变成 $a_1 \cdots a_l a b b_1 \cdots b_m c_1 \cdots c_n$, 再做 $m + 1$ 次相邻对换, 变成 $a_1 \cdots a_l b b_1 \cdots b_m a c_1 \cdots c_n$. 总之, 经 $2m + 1$ 次相邻对换, 排列 $a_1 \cdots a_l a b_1 \cdots b_m b c_1 \cdots c_n$ 变成排列 $a_1 \cdots a_l b b_1 \cdots b_m a c_1 \cdots c_n$, 所以这两个排列的奇偶性相反.
:::

#### 推论

**奇排列对换成标准排列的对换次数为奇数, 偶排列对换成标准排列的对换次数为偶数.**

::: details 证
由 [定理 1](#定理-1) 知对换的次数就是排列奇偶性的变化次数, 而标准排列是偶排列（逆序数为 0）, 因此知推论成立. 证毕.
:::

## n 阶行列式

#### 定义 2

设有 $n^2$ 个数, 排成 $n$ 行 $n$ 列的数表

$$
\begin{array}{c}
  \begin{array}{cccc}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n}
  \end{array} \\
  \cdots \cdots \cdots \cdots \\
  \begin{array}{cccc}
  a_{n1} & a_{n2} & \cdots & a_{nn}
  \end{array}
\end{array}
,
$$

作出表中位于不同行不同列的 $n$ 个数的乘积, 并冠以符号 $(-1)^t$, 得到形如

$$
(-1)^t a_{1 p_1} a_{2 p_2} \cdots a_{n p_n}
\tag{7}
$$

的项, 其中 $p_1 p_2 \cdots p_n$ 为自然数 $1, 2, \cdots, n$ 的一个排列, $t$ 为这个排列的逆序数. 由于这样的排列共有 $n!$ 个, 因而形如 (7) 式的项共有 $n!$ 项. 所有这 $n!$ 项的代数和

$$
\sum (-1)^t a_{1 p_1} a_{2 p_2} \cdots a_{n p_n}
$$

称为 `n 阶行列式`, 记作

$$
D =
\left|
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots &        & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right|
,
$$

简记作 $det(a_{ij})$, 其中 $a_{ij}$ 为行列式 $D$ 的 $(i,j)$ 元.

按此定义的二阶、三阶行列式, 与用 [对角线法则](#对角线法则) 定义的 [二阶](#二阶行列式)、[三阶行列式](#三阶行列式) 显然是一致的. 当 $n=1$ 时, 一阶行列式 $\left| \begin{array}{c} a \end{array} \right| = a$, 注意不要与绝对值记号相混淆.

主对角线以下（上）的元素都为 $0$ 的行列式叫做 `上（下）三角行列式`; 特别, 主对角线以下和以上都为 $0$ 的行列式叫做 `对角行列式`.

::: details 例 5
证明 (1) 下三角行列式

<!-- vuepress-plugin-latex 插件似乎不支持反对角省略号 \iddots 的写法 -->
<!-- 副对角线上的省略号只能用符号 ⋰ 代替 -->
<!-- 有趣的是，若将对角省略号 \ddots 改写为符号 ⋱，vuepress-plugin-latex 插件会认为两者是等价的 -->
$$
D =
\left|
\begin{array}{cccc}
a_{11} &        &        &        \\
a_{21} & a_{22} &        &        \\
\vdots & \vdots & \ddots &        \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right|
= a_{11} a_{22} \cdots a_{nn} ;
$$

(2) 对角行列式

$$
\left|
\begin{array}{cccc}
λ_1 &     &        &     \\
    & λ_2 &        &     \\
    &     & \ddots &     \\
    &     &        & λ_n
\end{array}
\right|
= λ_1 λ_2 \cdots λ_n .
$$

::: details 证
(1) 由于当 $j>i$ 时, $a_{ij}=0$, 故 $D$ 中可能不为 $0$ 的元素 $a_{i p_i}$, 其下标应有 $p_i \leq i$, 即 $p_1 \leq 1, \cdots, p_n \leq n$, 而 $p_1 + \cdots + p_n = 1 + \cdots + n$, 因此 $p_1 = 1, \cdots, p_n = n$, 所以 $D$ 中可能不为 $0$ 的项只有一项 $(-1)^t a_{11} a_{22} \cdots a_{nn}$, 此项的符号 $(-1)^t = (-1)^0 = 1$, 所以 $D = λ_1 λ_2 \cdots λ_n$.

(2) 由 (1) 即得.
:::

## 行列式的性质

### 转置行列式

记

$$
D =
\left|
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots &        & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right|
,
\qquad
D^T =
\left|
\begin{array}{cccc}
a_{11} & a_{21} & \cdots & a_{n1} \\
a_{12} & a_{22} & \cdots & a_{n2} \\
\vdots & \vdots &        & \vdots \\
a_{1n} & a_{2n} & \cdots & a_{nn}
\end{array}
\right|
,
$$

行列式 $D^T$ 称为行列式 $D$ 的 `转置行列式`.

#### 性质 1

**行列式与它的转置行列式相等.**

::: details 证
记 $D = det(a_{ij})$ 的转置行列式 $D^T = det(b_{ij})$, 即 $D^T$ 的 $(i, j)$ 元为 $b_{ij}$, 则 $b_{ij} = a_{ji}（i, j = 1, 2, \cdots, n）$, 按定义

$$
D^T = \sum (-1)^t b_{1 p_1} b_{2 p_2} \cdots b_{n p_n} = \sum (-1)^t a_{p_1 1} a_{p_2 2} \cdots a_{p_n n} .
$$

下证 $D = D^T$.

对于行列式 $D$ 的任一项

$$
(-1)^t a_{1 p_1} \cdots a_{i p_i} \cdots a_{j p_j} \cdots a_{n p_n} ,
$$

其中 $1 \cdots i \cdots j \cdots n$ 为标准排列, t 为排列 $p_1 \cdots p_i \cdots p_j \cdots p_n$ 的逆序数, 对换元素 $a_{i p_i}$ 与 $a_{j p_j}$ 成

$$
(-1)^t a_{1 p_1} \cdots a_{j p_j} \cdots a_{i p_i} \cdots a_{n p_n} ,
$$

这时, 这一项的值不变, 而行标排列与列表排列同时做了一次相应的对换. 设新的行标排列 $1 \cdots j \cdots i \cdots n$ 的逆序数为 r, 则 r 为奇数; 设新的列表排列 $p_1 \cdots p_j \cdots p_i \cdots p_n$ 的逆序数为 $t_1$, 则

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

* 列标排列 $p_1 p_2 \cdots p_n$（逆序数为 $t$）变为标准排列（逆序数为 $0$）;
* 行标排列则相应地从标准排列变为某个新的排列, 设此新排列为 $q_1 q_2 \cdots q_n$, 其逆序数为 $s$, 则有
  $$
  (-1)^t a_{1 p_1} a_{2 p_2} \cdots a{n p_n} = (-1)^s a_{q_1 1} a_{q_2 2} \cdots a_{q_n n} .
  $$

又, 如果上式左边乘积的第 $i$ 个元素 $a_{i p_i}$ 为 $a_{ij}$, 那么塔必定是上式右边乘积的第 $j$ 个元素, 即 $a_{i p_i} = a_{ij} = a_{q_j j}$. 可见排列 $q_1 q_2 \cdots q_n$ 由排列 $p_1 p_2 \cdots p_n$ 所唯一确定.

综上可知: 对于 $D$ 中任一项 $(-1)^t a_{1 p_1} a_{2 p_2} \cdots a_{n p_n}$, 总有且仅有 $D^T$ 中的某一项 $(-1)^s a_{q_1 1} a_{q_2 2} \cdots a_{q_n n}$ 与之对应并相等; 反之, 对于 $D^T$ 中的任一项 $(-1)^t a_{p_1 1} a_{p_2 2} \cdots a_{p_n n}$, 也总有且仅有 $D$ 中的某一项 $(-1)^s a_{1 q_1} a_{2 q_2} \cdots a_{n q_n}$ 与之对应并相等, 于是 $D$ 与 $D^T$ 中的项可以一一对应并相等, 从而 $D = D^T$. 证毕.
:::

由此性质可知, 行列式中的行与列具有同等的地位, 行列式的性质凡是对行成立的对列也同样成立, 反之亦然.

### 行列式运算

#### 性质 2

**对换行列式的两行（列）, 行列式变号.**

::: details 证
设行列式

$$
D_1 =
\left|
\begin{array}{cccc}
b_{11} & b_{12} & \cdots & b_{1n} \\
b_{21} & b_{22} & \cdots & b_{2n} \\
\vdots & \vdots &        & \vdots \\
b_{n1} & b_{n2} & \cdots & b_{nn}
\end{array}
\right|
$$

是由行列式 $D = det(a_{ij})$ 对换 $i, j$ 两行得到的, 即当 $k \neq i, j$ 时, $b_{kp} \neq a_{kp}$; 当 $k = i, j$ 时, $b_{ip} = a_{jp}, b_{jp} = a_{ip}$, 于是

$$
\begin{aligned}
D_1 = & \sum (-1)^t b_{1 p_1} \cdots b_{i p_i} \cdots b_{j p_j} \cdots b_{n p_n} \\
    = & \sum (-1)^t a_{1 p_1} \cdots a_{j p_i} \cdots a_{i p_j} \cdots a_{n p_n} \\
    = & \sum (-1)^t a_{1 p_1} \cdots a_{i p_j} \cdots a_{j p_i} \cdots a_{n p_n}
\end{aligned}
$$

其中 $1 \cdots i \cdots j \cdots n$ 为标准排列, $t$ 为排列 $p_1 \cdots p_i \cdots p_j \cdots p_n$ 的逆序数. 设排列 $p_1 \cdots p_j \cdots p_i \cdots p_n$ 的逆序数为 $t_1$, 则 $(-1)^t = - (-1)^{t_1}$, 故

$$
D_1 = - \sum (-1)^{t_1} a_{1 p_1} \cdots a_{i p_j} \cdots a_{j p_i} \cdots a_{n p_n} = -D .
$$

证毕.
:::

以 $r_i$ 表示行列式的第 $i$ 行, 以 $c_i$ 表示行列式的第 $i$ 列. 对换 $i, j$ 两行记作 $r_i \leftrightarrow r_j$, 对换 $i, j$ 两列记作 $c_i \leftrightarrow c_j$.

#### 推论

**如果行列式有两行（列）完全相同, 则此行列式等于零.**

::: details 证
把这两行对换, 有 $D = -D$, 故 $D = 0$.
:::

#### 性质 3

**行列式的某一行（列）中所有的元素都乘同一数 $k$, 等于用数 $k$ 乘此行列式.**

第 $i$ 行（或列）乘 $k$, 记作 $r_i \times k$（或 $c_i \times k$）.

#### 推论

**行列式种某一行（列）的所有元素的公因子可以提到行列式记号的外面.**

第 $i$ 行（或列）提出公因子 $k$, 记作 $r_i \div k$（或 $c_i \div k$）, 有

$$
\left|
\begin{array}{cccc}
 a_{11}  &  a_{12}  & \cdots &  a_{1n}  \\
 \vdots  &  \vdots  &        &  \vdots  \\
k a_{i1} & k a_{i2} & \cdots & k a_{in} \\
 \vdots  &  \vdots  &        &  \vdots  \\
 a_{n1}  &  a_{n2}  & \cdots &  a_{nn}
\end{array}
\right|
\xlongequal[]{r_i \div k}
k
\left|
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
\vdots & \vdots &        & \vdots \\
a_{i1} & a_{i2} & \cdots & a_{in} \\
\vdots & \vdots &        & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right|
.
$$

#### 性质 4

**行列式中如果有两行（列）元素成比例, 则此行列式等于零.**

#### 性质 5

**若行列式的某一行（列）的元素都是两数之和, 例如第 $i$ 行的元素都是两数之和:**

$$
D =
\left|
\begin{array}{cccc}
          a_{11}           &           a_{12}           & \cdots &           a_{1n}           \\
          \vdots           &           \vdots           &        &           \vdots           \\
a_{i1} + a_{i1}^{\text{'}} & a_{i2} + a_{i2}^{\text{'}} & \cdots & a_{in} + a_{in}^{\text{'}} \\
          \vdots           &           \vdots           &        &           \vdots           \\
          a_{n1}           &           a_{n2}           & \cdots &           a_{nn}
\end{array}
\right|
,
$$

**则 $D$ 等于下列两个行列式之和:**

$$
D =
\left|
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
\vdots & \vdots &        & \vdots \\
a_{i1} & a_{i2} & \cdots & a_{in} \\
\vdots & \vdots &        & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right| +
\left|
\begin{array}{cccc}
      a_{11}      &      a_{12}       & \cdots &      a_{1n}       \\
      \vdots      &      \vdots       &        &      \vdots       \\
a_{i1}^{\text{'}} & a_{i2}^{\text{'}} & \cdots & a_{in}^{\text{'}} \\
      \vdots      &      \vdots       &        &      \vdots       \\
      a_{n1}      &      a_{n2}       & \cdots &      a_{nn}
\end{array}
\right|
.
$$

#### 性质 6

**把行列式的某一行（列）的各元素乘同一数然后加到另一行（列）对应的元素上去, 行列式不变.**

例如以数 $k$ 乘第 $i$ 行加到第 $j$ 行上（记作 $r_j + k r_i$）, 有:

$$
\left|
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
\vdots & \vdots &        & \vdots \\
a_{i1} & a_{i2} & \cdots & a_{in} \\
\vdots & \vdots &        & \vdots \\
a_{j1} & a_{j2} & \cdots & a_{jn} \\
\vdots & \vdots &        & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{array}
\right|
\xlongequal[]{r_j + k r_i}
\left|
\begin{array}{cccc}
     a_{11}       &      a_{12}       & \cdots &      a_{1n}       \\
     \vdots       &      \vdots       &        &      \vdots       \\
     a_{i1}       &      a_{i2}       & \cdots &      a_{in}       \\
     \vdots       &      \vdots       &        &      \vdots       \\
a_{j1} + k a_{i1} & a_{j2} + k a_{i1} & \cdots & a_{jn} + k a_{in} \\
     \vdots       &      \vdots       &        &      \vdots       \\
     a_{n1}       &      a_{n2}       & \cdots &      a_{nn}
\end{array}
\right|
（i \neq j）
$$

（以数 $k$ 乘第 $i$ 列加到第 $j$ 列上, 记作 $c_j + k c_i$）
