# 矩阵

## 线性方程组

设有 $n$ 个未知数 $m$ 个方程的线性方程组

$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 , \\
  a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 , \\
  \cdots \cdots \cdots \cdots \\
  a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m ,
\end{cases}
\tag{1}
$$

其中 $a_{ij}$ 是第 $i$ 个方程的第 $j$ 个未知数的系数, $b_i$ 是第 $i$ 个方程的常数项, $i$ = $1$, $2$, ⋯, $m$; $j$ = $1$, $2$, ⋯, $n$, 当常数项 $b_1$, $b_2$, ⋯, $b_m$ 不全为零时, 线性方程组 (1) 叫做 `n 元非齐次线性方程组`, 当常数项 $b_1$, $b_2$, ⋯, $b_m$ 全为零时, (1) 式成为

$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = 0 , \\
  a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = 0 , \\
  \cdots \cdots \cdots \cdots \\
  a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = 0 ,
\end{cases}
\tag{2}
$$

叫做 `n 元齐次线性方程组`.

$n$ 元线性方程组往往简称为 `线性方程组` 或 `方程组`.

对于 $n$ 元齐次线性方程组 (2), $x_1$=$x_2$=⋯=$x_n$=$0$ 一定是它的解, 这个解叫做 `齐次线性方程组 (2) 的零解`. 如果一组不全为零的数是 (2) 的解, 则它叫做齐次线性方程组 (2) 的非零解. 齐次线性方程组 (2) 一定有零解, 但不一定有非零解.

::: details 例如
$$
\text{①}
\begin{cases}
  x - y = 0 , \\
  x + y = 2 ;
\end{cases}
\qquad
\text{②}
\begin{cases}
  x - y = 0 , \\
  x + y = 1 , \\
  x + y = 2 ;
\end{cases}
\qquad
\text{③}
\begin{cases}
  x_1 - x_2 = 0 , \\
  2x_1 - 2x_2 = 0 , \\
  3x_1 - 3x_2 = 0
\end{cases}
$$

就是三个二元线性方程组, 并且 ③ 是齐次方程组.

方程组 ①: 因其系数行列式 $D = \begin{vmatrix} 1 & -1 \\ 1 & 1 \end{vmatrix} \neq 0$, 知其有唯一解 $x$=$y$=$1$; 方程组 ②: 显然不存在数 $x$ 和数 $y$ 使 $x$+$y$=$1$ 和 $x$+$y$=$2$ 同时成立, 故方程组 ② 无解; 方程组 ③: 设 $s$ 为任一数, 那么 $x_1$=$x_2$=$s$ 是 ③ 的解, 从而方程组 ③ 有无限多个解.
:::

::: warning 问题
对于线性方程组需要讨论以下问题:（1）它是否有解?（2）在有解是它的解是否唯一?（3）如果有多个解, 如何求出它的所有解?
:::

对于线性方程组 (1) 上述诸问题的答案完全取决于它的 $m$×$n$ 个系数 $a_{ij}$ ($i$ = $1$, $2$, ⋯, $m$, $j$ = $1$, $2$, ⋯, $n$) 和右端的常数项 $b_1$, $b_2$, ⋯, $b_m$ 所构成的 $m$ 行 $n$+$1$ 列的矩形数表:

$$
\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n} &  b_1   \\
  a_{21} & a_{22} & \cdots & a_{2n} &  b_2   \\
  \vdots & \vdots &        & \vdots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn} &  b_m
\end{matrix}
,
$$

这里横排称为行, 竖排称为列; 而对于齐次线性方程组 (2) 的相应问题的答案也完全取决于它的 $m$×$n$ 个系数 $a_{ij}$ ($i$ = $1$, $2$, ⋯, $m$, $j$ = $1$, $2$, ⋯, $n$) 所构成的 $m$ 行 $n$ 列的矩形数表:

$$
\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &        & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{matrix}
.
$$

## 矩阵的定义

#### 定义 1

由 $m$×$n$ 个数 $a_{ij}$ ($i$ = $1$, $2$, ⋯, $n$) 排成的 $m$ 行 $n$ 列的数表

$$
\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &        & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{matrix}
$$

称为 `m 行 n 列矩阵`, 简称 `m×n 矩阵`. 为表示它是一个整体, 总是加一个括弧, 并用大写黑体字母表示它, 记作

$$
\boldsymbol{A} =
\begin{pmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots &        & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
,
$$

这 $m$×$n$ 个数称为矩阵 $\boldsymbol{A}$ 的 `元素`, 简称为 `元`, 数 $a_{ij}$ 位于矩阵 $\boldsymbol{A}$ 的第 $i$ 行第 $j$ 列, 称为矩阵 $\boldsymbol{A}$ 的 `(i,j) 元`. 以数 $a_{ij}$ 为 $(i,j)$ 元的矩阵可简记作 $(a_{ij})$ 或 $(a_{ij})_{m \times n}$. $m$×$n$ 矩阵 $\boldsymbol{A}$ 也记作 $\boldsymbol{A}_{m \times n}$.

元素是实数的矩阵称为 `实矩阵`, 元素是复数的矩阵称为 `复矩阵`, 这里的矩阵除特殊说明外, 都指实矩阵.

行数与列数都等于 $n$ 的矩阵称为 `n 阶矩阵` 或 `n 阶方阵`. $n$ 阶矩阵 $\boldsymbol{A}$ 也记作 $\boldsymbol{A}_n$.

只有一行的矩阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  a_1 & a_2 & \cdots & a_n
\end{pmatrix}
$$

称为 `行矩阵`, 又称 `行向量`. 为避免元素间的混淆, 行矩阵也记作

$$
\boldsymbol{A} =
\begin{pmatrix}
  a_1 , & a_2 , & \cdots , & a_n
\end{pmatrix}
.
$$

只有一列的矩阵

$$
\boldsymbol{B} =
\begin{pmatrix}
  b_1  \\
  b_2  \\
\vdots \\
  b_m
\end{pmatrix}
$$

称为 `列矩阵`, 又称 `列向量`.

两个矩阵的行数相等、列数也相等时, 就称它们是 `同型矩阵`. 如果 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 与 $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$ 是同型矩阵, 并且它们的对应元素相等, 即

$$
a_{ij} = b_{ij} (i = 1, 2, \cdots, m; j = 1, 2, \cdots, n) ,
$$

那么就称矩阵 $\boldsymbol{A}$ 与矩阵 $\boldsymbol{B}$ `相等`, 记作

$$
\boldsymbol{A} = \boldsymbol{B} .
$$

元素都是零的矩阵称为 `零矩阵`, 记作 $\boldsymbol{O}$. 注意不同型的零矩阵是不同的.

#### 例 1

对于非齐次线性方程组

$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 , \\
  a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 , \\
  \cdots \cdots \cdots \cdots \\
  a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m ,
\end{cases}
\tag{1}
$$

有如下几个有用的矩阵:

$$
\boldsymbol{A} =
\begin{pmatrix}
a_{ij}
\end{pmatrix}
,
\boldsymbol{x} =
\begin{pmatrix}
  x_1  \\
  x_2  \\
\vdots \\
  x_n
\end{pmatrix}
,
\boldsymbol{b} =
\begin{pmatrix}
  b_1  \\
  b_2  \\
\vdots \\
  b_n
\end{pmatrix}
,
\boldsymbol{B} =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} &  b_1   \\
a_{21} & a_{22} & \cdots & a_{2n} &  b_2   \\
\vdots & \vdots &        & \vdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} &  b_m
\end{pmatrix}
,
$$

其中, $\boldsymbol{A}$ 称为 `系数矩阵`, $\boldsymbol{x}$ 称为 `未知数矩阵`, $\boldsymbol{b}$ 称为 `常数项矩阵`, $\boldsymbol{B}$ 称为 `增广矩阵`.

#### 例 2

某厂向三个商店（编号 $1$, $2$, $3$）发送四种产品（编号 Ⅰ, Ⅱ, Ⅲ, Ⅳ）的数量可列成矩阵

$$
\begin{array}{rc}
  \text{商店}
    &
      \begin{matrix}
        \begin{matrix}
          \text{产品}
        \end{matrix} \\
        \begin{matrix}
          \text{Ⅰ} & \text{Ⅱ} & \text{Ⅲ} & \text{Ⅳ}
        \end{matrix}
      \end{matrix} \\
  \boldsymbol{A} =
  \begin{matrix}
    1 \\
    2 \\
    3
  \end{matrix}
    &
      \begin{pmatrix}
        a_{11} & a_{12} & a_{13} & a_{14} \\
        a_{21} & a_{22} & a_{23} & a_{24} \\
        a_{31} & a_{32} & a_{33} & a_{34}
      \end{pmatrix}
      ,
\end{array}
$$

其中 $a_{ij}$ 为工厂向第 $i$ 家商店发送第 $j$ 种产品的数量.

这四种产品的单价及单件质量也可以列成矩阵

$$
\begin{array}{rc}
  \text{产品}
    &
      \begin{matrix}
        \text{单价} & \text{单件质量}
      \end{matrix} \\
  \boldsymbol{B} =
  \begin{matrix}
    \text{Ⅰ} \\
    \text{Ⅱ} \\
    \text{Ⅲ} \\
    \text{Ⅳ}
  \end{matrix}
    &
      \begin{pmatrix}
        b_{11} & b_{12} \\
        b_{21} & b_{22} \\
        b_{31} & b_{32} \\
        b_{41} & b_{42}
      \end{pmatrix}
      ,
\end{array}
$$

其中 $b_{i1}$ 为第 $i$ 种产品的单价, $b_{i2}$ 为第 $i$ 种产品的单件质量.

#### 例 3

略.

#### 例 4

$n$ 个变量 $x_1$, $x_2$, ⋯, $x_n$ 与 $m$ 个变量 $y_1$, $y_2$, ⋯, $y_nm$ 之间的关系式

$$
\begin{cases}
  y_1 = a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n , \\
  y_2 = a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n , \\
  \cdots \cdots \cdots \cdots \\
  y_m = a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n
\end{cases}
\tag{3}
$$

表示一个从变量 $x_1$, $x_2$, ⋯, $x_n$ 到变量 $y_1$, $y_2$, ⋯, $y_nm$ 的 `线性变换`, 其中 $a_{ij}$ 为常数. 线性变换 (3) 的系数 $a_{ij}$ 构成矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times n}$.

给定了线性变换 (3), 它的系数所构成的矩阵（称为 `系数矩阵`）也就确定. 反之, 如果给出一个矩阵作为线性变换的系数矩阵, 则线性变换也就确定. 在这个意义上, 线性变换和矩阵之间存在着一一对应的关系.

::: details 例如
线性变换

$$
\begin{cases}
  y_1 = λ_1 x_1 , \\
  y_2 = λ_2 x_2 , \\
  \cdots \cdots \cdots \cdots \\
  y_n = λ_n x_n
\end{cases}
$$

对应 $n$ 阶方阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  λ_1  &   0    & \cdots &   0    \\
   0   &  λ_2   & \cdots &   0    \\
\vdots & \vdots &        & \vdots \\
   0   &   0    & \cdots &  λ_n
\end{pmatrix}
.
$$

这个方阵的特点是: 从左上角到右下角的直线（对角线）以外的元素都是 $0$. 这种方阵称为 `对角矩阵`, 简称 `对角阵`. 对角阵也记作

$$
\boldsymbol{A} = diag(λ_1, λ_2, cdots, λ_n) ;
$$

特别当 $λ_1$=$λ_2$=⋯=$λ_n$=$1$ 时的线性变换叫做恒等变换, 它对应的 $n$ 阶方阵

$$
\boldsymbol{E} =
\begin{pmatrix}
   1   &   0    & \cdots &   0    \\
   0   &   1    & \cdots &   0    \\
\vdots & \vdots &        & \vdots \\
   0   &   0    & \cdots &   1
\end{pmatrix}
$$

叫做 $n$ 阶 `单位矩阵`, 简称 `单位阵`. 这个方阵的特点是: 对角线上的元素都是 $1$, 其他元素都是 $0$. 即单位阵的 $\boldsymbol{E}$ 的 $(i,j)$ 元 $e_{ij}$ 为

$$
e_{ij} =
\begin{cases}
  1 , \text{当} i = j , \\
  0 , \text{当} i \neq j
\end{cases}
\qquad
(i, j = 1 , 2 , \cdots , n) .
$$
:::

由于矩阵和线性变换之间存在一一对应的关系, 因此可以利用矩阵来研究线性变换, 也可以利用线性变换来解释矩阵的含义.

::: details 例如
矩阵 $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ 所对应的线性变换

$$
\begin{cases}
  x_1 = x, \\
  y_1 = 0
\end{cases}
$$

可以看做是 $xOy$ 平面上把向量 $\overrightarrow{OP}$=$\begin{pmatrix} x \\ y \end{pmatrix}$ 变换为向量 $\overrightarrow{OP_1}$=$\begin{pmatrix} x_1 \\ y_1 \end{pmatrix}$=$\begin{pmatrix} x \\ 0 \end{pmatrix}$ 的变换（或看作把点 $P$ 变换为点 $P_1$ 的变换）, 由于向量 $\overrightarrow{OP_1}$ 是向量 $\overrightarrow{OP}$ 在 $x$ 轴上的投影向量（即点 $P_1$ 是点 $P$ 在 $x$ 轴上的投影）, 由此这是一个投影变换.
:::

::: details 又如
矩阵 $\begin{pmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{pmatrix}$ 对应的线性变换

$$
\begin{cases}
  x_1 = x \cos\varphi - y \sin\varphi , \\
  y_1 =  x\sin\varphi + y \cos\varphi
\end{cases}
$$

把 $xOy$ 平面上的向量 $\overrightarrow{OP}$=$\begin{pmatrix} x \\ y \end{pmatrix}$ 变换为向量 $\overrightarrow{OP_1}$=$\begin{pmatrix} x_1 \\ y_1 \end{pmatrix}$. 设 $\overrightarrow{OP}$ 的长度为 $r$, 辐角为 $\theta$, 即设 $x$=$r \cos\theta$, $y$=$r \sin\theta$, 那么

$$
\begin{aligned}
  x_1 = & r (\cos\varphi \cos\theta - \sin\varphi \sin\theta) = r \cos(\varphi + \theta) , \\
  y_1 = & r (\sin\varphi \cos\theta + \cos\varphi \sin\theta) = r \sin(\varphi + \theta) ,
\end{aligned}
$$

表明 $\overrightarrow{OP_1}$ 的长度为 $r$ 而辐角为 $\varphi$+$\theta$. 因此, 这是把向量 $\overrightarrow{OP}$（依逆时针方向）旋转 $\varphi$ 角（即把点 $P$ 以原点为中心逆时针旋转 $\varphi$ 角）的旋转变换.
:::
