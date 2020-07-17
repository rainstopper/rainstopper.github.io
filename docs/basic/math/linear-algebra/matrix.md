---
tags:
  - 线性代数
  - 矩阵
---

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
\quad
\text{②}
\begin{cases}
  x - y = 0 , \\
  x + y = 1 , \\
  x + y = 2 ;
\end{cases}
\quad
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

::: danger 问题
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

#### 同型矩阵

两个矩阵的行数相等、列数也相等时, 就称它们是 `同型矩阵`.

#### 矩阵相等

如果 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 与 $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$ 是同型矩阵, 并且它们的对应元素相等, 即

$$
a_{ij} = b_{ij} \quad (i = 1, 2, \cdots, m; j = 1, 2, \cdots, n) ,
$$

那么就称矩阵 $\boldsymbol{A}$ 与矩阵 $\boldsymbol{B}$ `相等`, 记作

$$
\boldsymbol{A} = \boldsymbol{B} .
$$

#### 零矩阵

元素都是零的矩阵称为 `零矩阵`, 记作 $\boldsymbol{O}$.

::: warning 注意
不同型的零矩阵是不同的.
:::

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
        b_{11} \quad & b_{12} \\
        b_{21} \quad & b_{22} \\
        b_{31} \quad & b_{32} \\
        b_{41} \quad & b_{42}
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

#### 对角矩阵

例如线性变换

$$
\begin{cases}
  y_1 = \lambda_1 x_1 , \\
  y_2 = \lambda_2 x_2 , \\
  \cdots \cdots \cdots \cdots \\
  y_n = \lambda_n x_n
\end{cases}
$$

对应 $n$ 阶方阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  \lambda_1 &     0     & \cdots &     0     \\
      0     & \lambda_2 & \cdots &     0     \\
   \vdots   &  \vdots   &        &  \vdots   \\
      0     &     0     & \cdots & \lambda_n
\end{pmatrix}
.
$$

这个方阵的特点是: 从左上角到右下角的直线（对角线）以外的元素都是 $0$. 这种方阵称为 `对角矩阵`, 简称 `对角阵`. 对角阵也记作

$$
\boldsymbol{A} = diag(\lambda_1, \lambda_2, \cdots, \lambda_n) ;
$$

#### 单位矩阵

特别当 $\lambda_1$=$\lambda_2$=⋯=$\lambda_n$=$1$ 时的线性变换叫做恒等变换, 它对应的 $n$ 阶方阵

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
\quad
(i, j = 1 , 2 , \cdots , n) .
$$

::: tip 提示
由于矩阵和线性变换之间存在一一对应的关系, 因此可以利用矩阵来研究线性变换, 也可以利用线性变换来解释矩阵的含义.
:::

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
  x_1 & = r (\cos\varphi \cos\theta - \sin\varphi \sin\theta) = r \cos(\varphi + \theta) , \\
  y_1 & = r (\sin\varphi \cos\theta + \cos\varphi \sin\theta) = r \sin(\varphi + \theta) ,
\end{aligned}
$$

表明 $\overrightarrow{OP_1}$ 的长度为 $r$ 而辐角为 $\varphi$+$\theta$. 因此, 这是把向量 $\overrightarrow{OP}$（依逆时针方向）旋转 $\varphi$ 角（即把点 $P$ 以原点为中心逆时针旋转 $\varphi$ 角）的旋转变换.
:::

## 矩阵的运算

### 矩阵的加法

#### 定义 2

设有两个 $m$×$n$ 矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 和 $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$, 那么 `矩阵 A 与 B 的和` 记作 $\boldsymbol{A}$+$\boldsymbol{B}$, 规定为

$$
\boldsymbol{A} + \boldsymbol{B} =
\begin{pmatrix}
  a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\
  a_{21} + b_{21} & a_{22} + b_{22} & \cdots & a_{2n} + b_{2n} \\
      \vdots      &     \vdots      &        &     \vdots      \\
  a_{n1} + b_{n1} & a_{n2} + b_{n2} & \cdots & a_{nn} + b_{nn}
\end{pmatrix}
.
$$

::: warning 注意
只有当两个矩阵是 [同型矩阵](#定义-1) 时, 这两个矩阵才能进行加法运算.
:::

矩阵加法满足下列运算规律（设 $\boldsymbol{A}$, $\boldsymbol{B}$, $\boldsymbol{C}$ 都是 $m$×$n$ 矩阵）:

(i) $\boldsymbol{A}$+$\boldsymbol{B}$=$\boldsymbol{B}$+$\boldsymbol{A}$;

(ii) $(\boldsymbol{A}$+$\boldsymbol{B})$+$\boldsymbol{C}$=$\boldsymbol{A}$+$(\boldsymbol{B}$+$\boldsymbol{C})$.

#### 负矩阵

设矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$, 记

$$
- \boldsymbol{A} =
\begin{pmatrix}
  - a_{ij}
\end{pmatrix}
,
$$

-$\boldsymbol{A}$ 称为矩阵 $\boldsymbol{A}$ 的 `负矩阵`, 显然有

$$
\boldsymbol{A} + (-\boldsymbol{A}) = \boldsymbol{O} ,
$$

#### 矩阵的减法

由此规定矩阵的减法为

$$
\boldsymbol{A} - \boldsymbol{B} = \boldsymbol{A} + (-\boldsymbol{B}) .
$$

### 数与矩阵相乘

#### 定义 3

`数 λ 与矩阵的乘积` 记作 $\lambda \boldsymbol{A}$ 或 $\boldsymbol{A} \lambda$, 规定为

$$
\lambda \boldsymbol{A} = \boldsymbol{A} \lambda =
\begin{pmatrix}
  \lambda a_{11} & \lambda a_{12} & \cdots & \lambda a_{1n} \\
  \lambda a_{21} & \lambda a_{22} & \cdots & \lambda a_{2n} \\
      \vdots     &     \vdots     &        &     \vdots     \\
  \lambda a_{n1} & \lambda a_{n2} & \cdots & \lambda a_{nn}
\end{pmatrix}
.
$$

数乘矩阵满足下列运算规则（设 $\boldsymbol{A}$、$\boldsymbol{B}$ 为 $m$×$n$ 矩阵, $\lambda$、$\mu$ 为数）:

(i) $(\lambda \mu) \boldsymbol{A}$=$\lambda (\mu \boldsymbol{A})$;

(ii) $(\lambda$+$\mu) \boldsymbol{A}$=$\lambda \boldsymbol{A}$+$\mu \boldsymbol{A}$;

(iii) $\lambda (\boldsymbol{A}$+$\boldsymbol{B})$=$\lambda \boldsymbol{A}$+$\lambda \boldsymbol{B}$.

矩阵加法与数乘矩阵统称为 `矩阵的线性运算`.

### 矩阵与矩阵相乘

设有两个线性变换

$$
\begin{cases}
  y_1 = a_{11} x_1 + a_{12} x_2 + a_{13} x_3 , \\
  y_2 = a_{21} x_1 + a_{22} x_2 + a_{23} x_3 ,
\end{cases}
\tag{4}
$$

$$
\begin{cases}
  x_1 = b_{11} t_1 + b_{12} t_2 , \\
  x_2 = b_{21} t_1 + b_{22} t_2 , \\
  x_3 = b_{31} t_1 + b_{32} t_2 ,
\end{cases}
\tag{5}
$$

若想求出从 $t_1$, $t_2$ 到 $y_1$, $y_2$ 的线性变换, 可将 (5) 代入 (4), 便得

$$
\begin{cases}
  y_1 = (a_{11} b_{11} + a_{12} b_{21} + a_{13} b_{31}) t_1 + (a_{11} b_{12} + a_{12} b_{22} + a_{13} b_{32}) t_2 , \\
  y_2 = (a_{21} b_{11} + a_{22} b_{21} + a_{23} b_{31}) t_1 + (a_{21} b_{12} + a_{22} b_{22} + a_{23} b_{32}) t_2 .
\end{cases}
\tag{6}
$$

线性变换 (6) 可看成是先做线性变换 (5) 再做线性变换 (4) 的结果. 我们把线性变换 (6) 叫做 `线性变换 (4) 与 (5) 的乘积`, 相应地把 (6) 所对应的矩阵定义为 (4) 到 (5) 所对应的矩阵的乘积, 即

$$
\begin{pmatrix}
  a_{11} & a_{12} & a_{13} \\
  a_{21} & a_{22} & a_{23}
\end{pmatrix}
\begin{pmatrix}
  b_{11} & b_{12} \\
  b_{21} & b_{22} \\
  b_{31} & b_{32}
\end{pmatrix}
=
\begin{pmatrix}
  a_{11} b_{11} + a_{12} b_{21} + a_{13} b_{31} & a_{11} b_{12} + a_{12} b_{22} + a_{13} b_{32} \\
  a_{21} b_{11} + a_{22} b_{21} + a_{23} b_{31} & a_{21} b_{12} + a_{22} b_{22} + a_{23} b_{32}
\end{pmatrix}
.
$$

#### 定义 4

设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 是一个 $m$×$s$ 矩阵, $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$ 是一个 $s$×$n$ 矩阵, 那么规定 `矩阵 A 与矩阵 B 的乘积` 是一个 $m$×$n$ 矩阵 $\boldsymbol{C}$ = $\begin{pmatrix} c_{ij} \end{pmatrix}$, 其中

$$
\begin{aligned}
  c_{ij} & = a_{i1} b_{1j} + a_{i2} b_{2j} + \cdots + a_{is} b_{sj} = \sum_{k=1}^s a_{ik} b_{kj} \\
         & (i = 1, 2, \cdots, m; j = 1, 2, \cdots, n) ,
\end{aligned}
\tag{7}
$$

并把此乘积记作

$$
\boldsymbol{C} = \boldsymbol{AB} .
$$

按此定义, 一个 $1$×$s$ 行矩阵与一个 $s$×$1$ 列矩阵的乘积是一个 $1$ 阶方阵, 也就是一个数

$$
\begin{pmatrix}
  a_{i1} , a_{i2} , \cdots , a_{is}
\end{pmatrix}
\begin{pmatrix}
  b_{1j} \\
  b_{2j} \\
  \vdots \\
  b_{sj}
\end{pmatrix}
= a_{i1} b_{1j} + a_{i2} b_{2j} + \cdots + a_{is} b_{sj} = \sum_{k=1}^s a_{ik} b_{kj} = c_{ij} ,
$$

由此表明乘积矩阵 $\boldsymbol{AB}$=$\boldsymbol{C}$ 的 $(i,j)$ 元 $c_{ij}$ 就是 $\boldsymbol{A}$ 的第 $i$ 行与 $\boldsymbol{B}$ 的第 $j$ 列的乘积.

::: warning 注意
只有当第一个矩阵（左矩阵）的列数等于第二个矩阵（右矩阵）的行数时, 两个矩阵才能相乘.
:::

#### 例 5

求矩阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  4 & -1 & 2 & 1 \\
  1 &  1 & 0 & 3 \\
  0 &  3 & 1 & 4
\end{pmatrix}
\quad \text{与} \quad
\boldsymbol{B} =
\begin{pmatrix}
   1 & 2 \\
   0 & 1 \\
   3 & 0 \\
  -1 & 2
\end{pmatrix}
$$

的乘积 $\boldsymbol{AB}$.

::: details 解
因为 $\boldsymbol{A}$ 是 $3$×$4$ 矩阵, $\boldsymbol{B}$ 是 $4$×$2$ 矩阵, $\boldsymbol{A}$ 的列数等于 $\boldsymbol{B}$ 的行数, 所以矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 可以相乘, 其乘积 $\boldsymbol{AB}$=$\boldsymbol{C}$ 是一个 $3$×$2$ 矩阵. 按公式 (7) 有

$$
\begin{aligned}
  \boldsymbol{C} = \boldsymbol{AB}
    & =
      \begin{pmatrix}
        4 & -1 & 2 & 1 \\
        1 &  1 & 0 & 3 \\
        0 &  3 & 1 & 4
      \end{pmatrix}
      \begin{pmatrix}
         1 & 2 \\
         0 & 1 \\
         3 & 0 \\
        -1 & 2
      \end{pmatrix} \\
    & =
      \begin{pmatrix}
        4 \times 1 + (-1) \times 0 + 2 \times 3 + 1 \times (-1) & 4 \times 2 + (-1) \times 1 + 2 \times 0 + 1 \times 2 \\
        1 \times 1 +   1  \times 0 + 0 \times 3 + 3 \times (-1) & 1 \times 2 +   1  \times 1 + 0 \times 0 + 3 \times 2 \\
        0 \times 1 +   3  \times 0 + 1 \times 3 + 4 \times (-1) & 0 \times 2 +   3  \times 1 + 1 \times 0 + 4 \times 2
      \end{pmatrix} \\
    & =
      \begin{pmatrix}
         9 &  9 \\
        -2 &  9 \\
        -1 & 11
      \end{pmatrix}
      .
\end{aligned}
$$
:::

#### 例 6

求矩阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  -2 &  4 \\
   1 & -2
\end{pmatrix}
\quad \text{与} \quad
\boldsymbol{B} =
\begin{pmatrix}
   2 &  4 \\
  -3 & -6
\end{pmatrix}
$$

的乘积 $\boldsymbol{AB}$ 及 $\boldsymbol{BA}$.

::: details 解
按公式 (7), 有

$$
\begin{aligned}
  \boldsymbol{AB}
    & =
      \begin{pmatrix}
        -2 &  4 \\
         1 & -2
      \end{pmatrix}
      \begin{pmatrix}
         2 &  4 \\
        -3 & -6
      \end{pmatrix}
      =
      \begin{pmatrix}
        -16 & -32 \\
         8  &  16
      \end{pmatrix}
      , \\
  \boldsymbol{BA}
    & =
      \begin{pmatrix}
         2 &  4 \\
        -3 & -6
      \end{pmatrix}
      \begin{pmatrix}
        -2 &  4 \\
         1 & -2
      \end{pmatrix}
      =
      \begin{pmatrix}
        0 & 0 \\
        0 & 0
      \end{pmatrix}
      .
\end{aligned}
$$
:::

::: warning 注意
矩阵的乘法不满足交换律, 必须注意矩阵相乘的顺序.
:::

$\boldsymbol{AB}$ 是 $\boldsymbol{A}$ `左乘` $\boldsymbol{B}$（$\boldsymbol{B}$ 被$\boldsymbol{A}$ 左乘）的乘积, $\boldsymbol{BA}$ 是 $\boldsymbol{A}$ `右乘` $\boldsymbol{B}$ 的乘积. $\boldsymbol{AB}$ 有意义时, $\boldsymbol{BA}$ 可能没有意义. 又若 $\boldsymbol{A}$ 是 $m$×$n$ 矩阵, $\boldsymbol{B}$ 是 $n$×$m$ 矩阵, 则 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 都有意义, 但 $\boldsymbol{AB}$ 是 $m$ 阶方阵, $\boldsymbol{BA}$ 是 $n$ 阶方阵, 当 $m$≠$n$ 时, $\boldsymbol{AB}$≠$\boldsymbol{BA}$. 即使 $m$=$n$, 即 $\boldsymbol{A}$、$\boldsymbol{B}$ 是同阶方阵, 如 [例 6](#例-6), $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 都是 $2$ 阶方阵, 从而 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 也都是 $2$ 阶方阵, 但 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 仍然可以不相等.

#### 可交换

对于两个 $n$ 阶方阵 $\boldsymbol{A}$、$\boldsymbol{B}$, 若 $\boldsymbol{AB}$=$\boldsymbol{BA}$, 则称方阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 是 `可交换` 的.

例 6 还表明, 矩阵 $\boldsymbol{A}$≠$\boldsymbol{O}$, $\boldsymbol{B}$≠$\boldsymbol{O}$, 但却有 $\boldsymbol{BA}$=$\boldsymbol{O}$.

::: warning 特别注意
若有两个矩阵 $\boldsymbol{A}$、$\boldsymbol{B}$ 满足 $\boldsymbol{AB}$=$\boldsymbol{O}$, 不能得出 $\boldsymbol{A}$=$\boldsymbol{O}$ 或 $\boldsymbol{B}$=$\boldsymbol{O}$ 的结论;

若 $\boldsymbol{A}$≠$\boldsymbol{O}$ 而 $\boldsymbol{A} (\boldsymbol{X}$-$\boldsymbol{Y})$=$\boldsymbol{O}$, 也不能得出 $\boldsymbol{X}$=$\boldsymbol{Y}$ 的结论.
:::

矩阵的乘法虽不满足交换律, 但仍满足下列结合律和分配律（假设运算都是可行的）:

(i) $(\boldsymbol{AB}) \boldsymbol{C}$=$\boldsymbol{A} (\boldsymbol{BC})$;

(ii) $\lambda (\boldsymbol{AB})$=$(\lambda \boldsymbol{A}) \boldsymbol{B}$=$\boldsymbol{A} (\lambda \boldsymbol{B})$（其中 $\lambda$ 为数）;

(iii) $\boldsymbol{A} (\boldsymbol{B}$+$\boldsymbol{C})$=$\boldsymbol{AB}$+$\boldsymbol{AC}$, $(\boldsymbol{B}$+$\boldsymbol{C}) \boldsymbol{A}$=$\boldsymbol{BA}$+$\boldsymbol{CA}$.

对于单位矩阵 $\boldsymbol{E}$, 容易验证

$$
\boldsymbol{E}_m \boldsymbol{A}_{m \times n} = \boldsymbol{A}_{m \times n} ,
\quad
\boldsymbol{A}_{m \times n} \boldsymbol{E}_n = \boldsymbol{A}_{m \times n} ,
$$

或简写成

$$
\boldsymbol{E} \boldsymbol{A} = \boldsymbol{A} \boldsymbol{E} = \boldsymbol{A} .
$$

可见单位矩阵 $\boldsymbol{E}$ 在矩阵乘法中的作用类似于数 $1$.

#### 纯量阵

矩阵

$$
\lambda \boldsymbol{E} =
\begin{pmatrix}
  \lambda &         &        &         \\
          & \lambda &        &         \\
          &         & \ddots &         \\
          &         &        & \lambda
\end{pmatrix}
$$

称为 `纯量阵`. 由 $(\lambda \boldsymbol{E}) \boldsymbol{A}$=$\lambda \boldsymbol{A}$, $\boldsymbol{A} (\lambda \boldsymbol{E})$=$\lambda \boldsymbol{A}$, 可知纯量阵 $\lambda \boldsymbol{E}$ 与矩阵 $\boldsymbol{A}$ 的乘积等于数 $\lambda$ 与 $\boldsymbol{A}$ 的乘积. 当 $\boldsymbol{A}$ 为 $n$ 阶方阵时, 有

$$
(\lambda \boldsymbol{E}_n) \boldsymbol{A}_n = \lambda \boldsymbol{A}_n = \boldsymbol{A}_n (\lambda \boldsymbol{E}_n) ,
$$

表明纯量阵 $\lambda \boldsymbol{E}$ 与任何同阶方阵都是可交换的.

### 矩阵的幂

有了矩阵的乘法, 就可以定义 `矩阵的幂`. 设 $\boldsymbol{A}$ 是 $n$ 阶方阵, 定义

$$
\boldsymbol{A}^1 = \boldsymbol{A} , \boldsymbol{A}^2 = \boldsymbol{A}^1 \boldsymbol{A}^1 , \cdots , \boldsymbol{A}^{k+1} = \boldsymbol{A}^k \boldsymbol{A}^1 ,
$$

其中 $k$ 为正整数, 这就是说, $\boldsymbol{A}_k$ 就是 $k$ 个 $\boldsymbol{A}$ 连乘. 显然只有方阵的幂才有意义.

由于矩阵乘法适合结合律, 所以矩阵的幂满足以下运算规律:

$$
\boldsymbol{A}^k \boldsymbol{A}^l = \boldsymbol{A}^{k+l} , \quad
(\boldsymbol{A}^k)^l = \boldsymbol{A}^{kl} ,
$$

其中 $k$、$l$ 为正整数. 又因矩阵乘法一般不满足交换律, 所以对于两个 $n$ 阶矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$, 一般说来 $(\boldsymbol{AB})^k$≠$\boldsymbol{A}^k \boldsymbol{B}^k$, 只有当 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 可交换时, 才有 $(\boldsymbol{AB})^k$=$\boldsymbol{A}^k \boldsymbol{B}^k$. 类似可知, 例如 $(\boldsymbol{A}$+$\boldsymbol{B})^k$=$\boldsymbol{A}^2$+$2\boldsymbol{AB}$+$\boldsymbol{B}^2$、$(\boldsymbol{A}$-$\boldsymbol{B}) (\boldsymbol{A}$+$\boldsymbol{B})$=$\boldsymbol{A}^2$-$\boldsymbol{B}^2$ 等公示, 也只有当 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 可交换时才成立.

#### 例 2（续）

[例 2](#例-2) 已得到两个矩阵:

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
\end{array}
\quad \text{和} \quad
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
        b_{11} \quad & b_{12} \\
        b_{21} \quad & b_{22} \\
        b_{31} \quad & b_{32} \\
        b_{41} \quad & b_{42}
      \end{pmatrix}
      ,
\end{array}
$$

记 $\boldsymbol{C}$=$\boldsymbol{AB}$, 那么

$$
c_{i1} = a_{i1} b_{11} + a_{i2} b_{21} + a_{i3} b_{31} + a_{i4} b_{41}
$$

是该厂向第 $i$ 家商店所发产品的总价 ($i$=$1$,$2$,$3$);

$$
c_{i2} = a_{i1} b_{12} + a_{i2} b_{22} + a_{i3} b_{32} + a_{i4} b_{42}
$$

是该厂向第 $i$ 家商店所发产品的总质量 ($i$=$1$,$2$,$3$), 因此可形象地写为

$$
\begin{aligned}
  \boldsymbol{C}
    & = \boldsymbol{AB} =
      \begin{array}{rc}
          &
            \begin{matrix}
              \begin{matrix}
                \text{Ⅰ} & \text{Ⅱ} & \text{Ⅲ} & \text{Ⅳ}
              \end{matrix}
            \end{matrix}_{\phantom{3 \times 4}} \\
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
            \end{pmatrix}_{3 \times 4}
      \end{array}
      \begin{array}{rc}
          &
            \begin{matrix}
              \text{单价} & \text{单件质量}
            \end{matrix}_{\phantom{4 \times 2}} \\
        \begin{matrix}
          \text{Ⅰ} \\
          \text{Ⅱ} \\
          \text{Ⅲ} \\
          \text{Ⅳ}
        \end{matrix}
          &
            \begin{pmatrix}
              b_{11} \quad & b_{12} \\
              b_{21} \quad & b_{22} \\
              b_{31} \quad & b_{32} \\
              b_{41} \quad & b_{42}
            \end{pmatrix}_{4 \times 2}
      \end{array} \\
    & =
      \begin{array}{rc}
          &
            \begin{matrix}
              \text{总价} & \text{总质量}
            \end{matrix}_{\phantom{3 \times 2}} \\
        \begin{matrix}
          1 \\
          2 \\
          3
        \end{matrix}
          &
            \begin{pmatrix}
              c_{11} \quad & c_{12} \\
              c_{21} \quad & c_{22} \\
              c_{31} \quad & c_{32}
            \end{pmatrix}_{3 \times 2}
            .
      \end{array}
\end{aligned}
$$

进一步, 如果 $\boldsymbol{D}$=$\begin{pmatrix} 1 & 1 & 1 \\ 0 & -1 & 1 \end{pmatrix}$, 且

$$
\boldsymbol{H} = \boldsymbol{D} (\boldsymbol{AB}) = \boldsymbol{DC} =
\begin{pmatrix}
  1 &  1 & 1 \\
  0 & -1 & 1
\end{pmatrix}
\begin{pmatrix}
  c_{11} & c_{12} \\
  c_{21} & c_{22} \\
  c_{31} & c_{32}
\end{pmatrix}
=
\begin{pmatrix}
  h_{11} & h_{12} \\
  h_{21} & h_{22}
\end{pmatrix}
,
$$

那么 $h_{11}$ 和 $h_{12}$ 分别是该厂向三个商店发出产品的总价和总质量, $h_{21}$ 和 $h_{22}$ 分别是第 $3$ 家商店超出第 $2$ 家商店的价款和质量.

#### 例 7

::: details 例如
[例 1](#例-1) 中 $n$ 元线性方程组 (1)

$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 , \\
  a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 , \\
  \cdots \cdots \cdots \cdots \\
  a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n = b_m ,
\end{cases}
\tag{1}
$$

利用矩阵乘法可以写成矩阵形式

$$
\boldsymbol{A}_{m \times n} \boldsymbol{x}_{n \times l} = \boldsymbol{b}_{m \times l} ,
\tag{$1^\prime$}
$$

其中 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 为系数矩阵, $\boldsymbol{x}$=$\begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$ 为未知数矩阵, $\boldsymbol{b}$=$\begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}$ 为常数项矩阵. 特别当 $\boldsymbol{b}$=$\boldsymbol{O}$ 时得到 $m$ 个方程的 $n$ 元齐次线性方程组的矩阵形式

$$
\boldsymbol{A}_{m \times n} \boldsymbol{x}_{n \times l} = \boldsymbol{O}_{m \times l} .
$$
:::

::: details 又如
[例 4](#例-4) 中的线性变换

$$
\begin{cases}
  y_1 = a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n , \\
  y_2 = a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n , \\
  \cdots \cdots \cdots \cdots \\
  y_m = a_{m1} x_1 + a_{m2} x_2 + \cdots + a_{mn} x_n
\end{cases}
\tag{3}
$$

利用矩阵的乘法, 可记作

$$
\boldsymbol{y} = \boldsymbol{Ax} ,
\tag{$3^\prime$}
$$

其中

$$
\boldsymbol{A} =
\begin{pmatrix}
  a_{ij}
\end{pmatrix}
, \quad
\boldsymbol{x} =
\begin{pmatrix}
    x_1  \\
    x_2  \\
  \vdots \\
    x_n
\end{pmatrix}
, \quad
\boldsymbol{y} =
\begin{pmatrix}
    y_1  \\
    y_2  \\
  \vdots \\
    y_m
\end{pmatrix}
.
$$

这里, 列向量（列矩阵）$\boldsymbol{x}$ 表示 $n$ 个变量 $x_1$, $x_2$, ⋯, $x_n$, 列向量 $\boldsymbol{y}$ 表示 $m$ 个变量 $y_1$, $y_2$, ⋯, $y_m$. 线性变换 (3$^\prime$) 把 $\boldsymbol{x}$ 变成 $\boldsymbol{y}$, 相当于用矩阵 $\boldsymbol{A}$ 去左乘 $\boldsymbol{x}$ 得到 $\boldsymbol{y}$.
:::

::: details 又如
由前可知, 用矩阵 $\boldsymbol{A}$=$\begin{pmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{pmatrix}$ 左乘向量 $\overrightarrow{OP}$=$\begin{pmatrix} x \\ y \end{pmatrix}$, 相当于把向量 $\overrightarrow{OP}$=$ 按逆时针方向选择 $\varphi$ 角. 进一步还可推知, 用 $\boldsymbol{A}^n$=$\begin{pmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{pmatrix} ^n$ 左乘向量 $\boldsymbol{A}^n$, 相当于把向量 $\boldsymbol{A}^n$ 按逆时针方向旋转 $n$ 个 $\varphi$ 角, 即旋转 $n\varphi$ 角, 而旋转 $n\varphi$ 角的变换所对应的矩阵为 $\begin{pmatrix} \cos n\varphi & -\sin n\varphi \\ \sin n\varphi & \cos n\varphi \end{pmatrix}$, 亦即成立

$$
\begin{pmatrix}
  \cos\varphi & -\sin\varphi \\
  \sin\varphi & \cos\varphi
\end{pmatrix} ^n
=
\begin{pmatrix}
  \cos n\varphi & -\sin n\varphi \\
  \sin n\varphi & \cos n\varphi
\end{pmatrix}
.
$$

上式也可以按矩阵幂的定义来证明.
:::

### 矩阵的转置

#### 定义 5

把矩阵 $\boldsymbol{A}$ 的行缓存同序数的列得到一个新矩阵, 叫做 $\boldsymbol{A}$ 的 `转置矩阵`, 记作 $\boldsymbol{A}^T$.

::: details 例如
$$
\boldsymbol{A} =
\begin{pmatrix}
  1 &  2 & 0 \\
  3 & -1 & 1
\end{pmatrix}
$$

的转置矩阵为

$$
\boldsymbol{A} =
\begin{pmatrix}
  1 &  3 \\
  2 & -1 \\
  0 %  1
\end{pmatrix}
.
$$
:::

矩阵的转置也是一种运算, 满足下述运算规律（假设运算都是可行的）:

(i) $(\boldsymbol{A}^T)^T$=$\boldsymbol{A}^T$;

(ii) $(\boldsymbol{A}$+$\boldsymbol{B})^T$=$\boldsymbol{A}^T$+$\boldsymbol{B}^T$;

(iii) $(\lambda \boldsymbol{A})^T$=$\lambda \boldsymbol{A}^T$;

(iv) $(\boldsymbol{AB})^T$=$\boldsymbol{B}^T$$\boldsymbol{A}^T$.

::: details 证 (iv)
设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times s}$、$\boldsymbol{b}$=$\begin{pmatrix} b_{ij} \end{pmatrix}_{s \times n}$, 记 $\boldsymbol{AB}$=$\boldsymbol{C}$=$\begin{pmatrix} c_{ij} \end{pmatrix}_{m \times n}$, $\boldsymbol{B}^T \boldsymbol{A}^T$=$\boldsymbol{D}$=$\begin{pmatrix} d_{ij} \end{pmatrix}_{n \times m}$. 于是按 [公式 (7)](#定义-4), 有

$$
c_{ij} = \sum_{k=1}^s a_{jk} b_{ki} ,
$$

而 $\boldsymbol{B}^T$ 的第 $i$ 行为 $(b_{1i}$, ⋯, $b_{si})$, $\boldsymbol{A}^T$ 的第 $j$ 列为 $(a_{j1}$, ⋯, $a_{js})^T$, 因此

$$
d_{ij} = c_{ji} \quad (i = 1, 2, \cdots, n; j = 1, 2, \cdots, m) ,
$$

即 $\boldsymbol{D}$=$\boldsymbol{C}^T$, 亦即

$$
\boldsymbol{B}^T \boldsymbol{A}^T = (\boldsymbol{AB})^T .
$$
:::

#### 例 8

已知

$$
\boldsymbol{A} =
\begin{pmatrix}
  2 & 0 & -1 \\
  1 & 3 &  2
\end{pmatrix}
, \quad
\boldsymbol{B} =
\begin{pmatrix}
  1 & 7 & -1 \\
  4 & 2 &  3 \\
  2 & 0 &  1
\end{pmatrix}
,
$$

求 ($\boldsymbol{AB}$)$^T$.

::: details 解
**解法 1** 因为

$$
\boldsymbol{AB} =
\begin{pmatrix}
  2 & 0 & -1 \\
  1 & 3 &  2
\end{pmatrix}
\begin{pmatrix}
  1 & 7 & -1 \\
  4 & 2 &  3 \\
  2 & 0 &  1
\end{pmatrix}
=
\begin{pmatrix}
   0 & 14 & -3 \\
  17 & 13 & 10
\end{pmatrix}
,
$$

所以

$$
(\boldsymbol{AB})^T =
\begin{pmatrix}
   0 & 17 \\
  14 & 13 \\
  -3 & 10
\end{pmatrix}
.
$$

**解法 2**

$$
(\boldsymbol{AB})^T = \boldsymbol{B}^T \boldsymbol{A}^T =
\begin{pmatrix}
   1 & 4 & 2 \\
   7 & 2 & 0 \\
  -1 & 3 & 1
\end{pmatrix}
\begin{pmatrix}
   2 & 1 \\
   0 & 3 \\
  -1 & 2
\end{pmatrix}
=
\begin{pmatrix}
   0 & 17 \\
  14 & 13 \\
  -3 & 10
\end{pmatrix}
$$
.
:::
#### 对称矩阵

设 $\boldsymbol{A}$ 为 $n$ 阶方阵, 如果满足 $\boldsymbol{A}^T$=$\boldsymbol{A}$, 即

$$
a_{ij} = a_{ji} \quad (i = 1 , 2 , \cdots, n) ,
$$

那么 $\boldsymbol{A}$ 称为 `对称矩阵`, 简称 `对称阵`. 对称阵的特点是: 它的元素以对角线为对称阵对应相等.

#### 例 9

设列矩阵 $\boldsymbol{X}$=$(x_1$, $x_2$, ⋯, $x_n)^T$ 满足 $\boldsymbol{X}^T \boldsymbol{X}$=$1$, $\boldsymbol{E}$ 为 $n$ 阶单位矩阵, $\boldsymbol{H}$=$\boldsymbol{E} - 2\boldsymbol{X} \boldsymbol{X}^T$, 证明 $\boldsymbol{H}$ 是对称矩阵, 且 $\boldsymbol{H} \boldsymbol{H}^T$=$\boldsymbol{E}$.

::: tip 提示
$\boldsymbol{X}^T \boldsymbol{X}$=$x_1^2$+$x_2^2$+⋯+$x_n^2$ 是一阶方阵, 也就是一个数, 而 $\boldsymbol{X} \boldsymbol{X}^T$ 是 $n$ 阶方阵.
:::

::: details 证
因为

$$
\boldsymbol{H}^T = (\boldsymbol{E} - 2\boldsymbol{X} \boldsymbol{X}^T)^T = \boldsymbol{E}^T -2 (\boldsymbol{X} \boldsymbol{X}^T)^T = \boldsymbol{E} - 2 \boldsymbol{X} \boldsymbol{X}^T = \boldsymbol{H} ,
$$

所以 $\boldsymbol{H}$ 是对 [称矩阵](#对称矩阵).

$$
\begin{aligned}
  \boldsymbol{H} \boldsymbol{H}^T
    & = \boldsymbol{H}^2 = (\boldsymbol{E} - 2 \boldsymbol{X} \boldsymbol{X}^T)^2 = \boldsymbol{E} - 4 \boldsymbol{X} \boldsymbol{X}^T + 4 (\boldsymbol{X} \boldsymbol{X}^T) (\boldsymbol{X} \boldsymbol{X}^T) \\
    & = \boldsymbol{E} - 4 \boldsymbol{X} \boldsymbol{X}^T + 4 \boldsymbol{X} (\boldsymbol{X}^T \boldsymbol{X}) \boldsymbol{X}^T = \boldsymbol{E} - 4 \boldsymbol{X} \boldsymbol{X}^T + 4 \boldsymbol{X} \boldsymbol{X}^T = \boldsymbol{E} .
\end{aligned}
$$
:::

### 方阵的行列式

#### 定义 6

由 $n$ 阶方阵 $\boldsymbol{A}$ 的元素所构成的 [行列式](determinant.html#n-阶行列式)（各元素位置不变）, 称为 `方阵 A 的行列式`, 记作 $det \boldsymbol{A}$ 或 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$.

::: warning 注意
方阵与行列式是两个不同的概念, $n$ 阶方阵是 $n^2$ 个数按一定方式排成的数表, 而 $n$ 阶行列式则是这些数（也就是数表 $\boldsymbol{A}$）按一定的运算法则所确定的一个数.
:::

由 $\boldsymbol{A}$ 确定 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$ 的这个运算满足下述运算规则（设 $\boldsymbol{A}$、$\boldsymbol{B}$ 为 $n$ 阶方阵, $\lambda$ 是数）:

(i) $\begin{vmatrix} \boldsymbol{A} \end{vmatrix} ^T$=$\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$（行列式 [性质 1](determinant.html#性质-1)）;

(ii) $\lambda \begin{vmatrix} \boldsymbol{A} \end{vmatrix}$=$\lambda^n \begin{vmatrix} \boldsymbol{A} \end{vmatrix}$;

(iii) $\begin{vmatrix} \boldsymbol{AB} \end{vmatrix}$=$\begin{vmatrix} \boldsymbol{A} \end{vmatrix} \begin{vmatrix} \boldsymbol{B} \end{vmatrix}$.

::: details 证 (iii) 当 n=2
设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$, $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$. 记四阶行列式

$$
D =
\begin{vmatrix}
  a_{11} & a_{12} &   0    &   0    \\
  a_{21} & a_{22} &   0    &   0    \\
    -1   &    0   & b_{11} & b_{12} \\
     0   &   -1   & b_{21} & b_{22}
\end{vmatrix}
=
\begin{vmatrix}
   \boldsymbol{A} & \boldsymbol{O} \\
  -\boldsymbol{E} & \boldsymbol{B}
\end{vmatrix}
,
$$

由 [行列式例 10](determinant.html#例-10) 可知 $D$=$\begin{vmatrix} \boldsymbol{A} \end{vmatrix} \begin{vmatrix} \boldsymbol{B} \end{vmatrix}$. 今在 $D$ 中以 $b_{11}$ 乘第 $1$ 列, $b_{22}$ 乘第 $2$ 列都加到第 $4$ 列上, 即

$$
\begin{aligned}
D
  & \xlongequal[]{c_3 + b_{11} c_1 + b_{21} c_2}
    \begin{vmatrix}
      a_{11} & a_{12} & a_{11} b_{11} + a_{12} b_{21} &   0    \\
      a_{21} & a_{22} & a_{21} b_{11} + a_{22} b_{21} &   0    \\
        -1   &    0   &               0               & b_{12} \\
         0   &   -1   &               0               & b_{22}
    \end{vmatrix} \\
  & \xlongequal[]{c_4 + b_{12} c_1 + b_{22} c_2}
    \begin{vmatrix}
      a_{11} & a_{12} & a_{11} b_{11} + a_{12} b_{21} & a_{11} b_{12} + a_{12} b_{22} \\
      a_{21} & a_{22} & a_{21} b_{11} + a_{22} b_{21} & a_{21} b_{12} + a_{22} b_{22} \\
        -1   &    0   &               0               &               0               \\
         0   &   -1   &               0               &               0
    \end{vmatrix}
    =
    \begin{vmatrix}
       \boldsymbol{A} & \boldsymbol{X} \\
      -\boldsymbol{E} & \boldsymbol{O}
    \end{vmatrix}
    ,
\end{aligned}
$$

其中二阶矩阵 $\boldsymbol{X}$=$\begin{pmatrix} x_{ij} \end{pmatrix}$, 因 $x_{ij}$=$a_{i1} b_{1j}$+$a_{i2} b_{2j}$, 由 [公式 (7)](#定义-4) 知 $\boldsymbol{X}$=$\boldsymbol{AB}$. 再对上式最后一个行列式作两次行对换: $r_1$↔$r_3$, $r_2$↔$r_4$, 得

$$
D = (-1)^2
\begin{vmatrix}
  -\boldsymbol{E} & \boldsymbol{O} \\
   \boldsymbol{A} & \boldsymbol{X}
\end{vmatrix}
= (-1)^2 \begin{vmatrix} -\boldsymbol{E} \end{vmatrix} \begin{vmatrix} \boldsymbol{X} \end{vmatrix}
= (-1)^2 (-1)^2 \begin{vmatrix} \boldsymbol{X} \end{vmatrix}
= \begin{vmatrix} \boldsymbol{X} \end{vmatrix}
= \begin{vmatrix} \boldsymbol{AB} \end{vmatrix}
.
$$

于是

$$
\begin{vmatrix} \boldsymbol{AB} \end{vmatrix} = \begin{vmatrix} \boldsymbol{A} \end{vmatrix} \begin{vmatrix} \boldsymbol{B} \end{vmatrix}
.
$$

$n$≥$3$ 的情形类似可证.
:::

由 (iii) 可知, 对于 $n$ 阶矩阵 $\boldsymbol{A}$、$\boldsymbol{B}$, 一般来说 $\boldsymbol{AB}$≠$\boldsymbol{BA}$, 但总有

$$
\begin{vmatrix} \boldsymbol{AB} \end{vmatrix} = \begin{vmatrix} \boldsymbol{BA} \end{vmatrix} .
$$

#### 例 10

行列式 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$ 的各个元素的代数余子式 $A_{ij}$ 所构成的如下的矩阵

$$
\boldsymbol{A}^* =
\begin{pmatrix}
  A_{11} & A_{12} & \cdots & A_{n1} \\
  A_{21} & A_{22} & \cdots & A_{n2} \\
  \vdots & \vdots &        & \vdots \\
  A_{n1} & A_{n2} & \cdots & A_{nn}
\end{pmatrix}
,
$$

称为矩阵 $\boldsymbol{A}$ 的 `伴随矩阵`, 简称 `伴随阵`. 试证

$$
\boldsymbol{AA}^* = \boldsymbol{A}^* \boldsymbol{A} = \begin{vmatrix} \boldsymbol{A} \end{vmatrix} \boldsymbol{E} .
$$

::: details 证
设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$, 记 $\boldsymbol{AA}^*$=$\begin{pmatrix} b_{ij} \end{pmatrix}$, 则

$$
b_{ij} = a_{i1} A_{j1} + a_{i2} A_{j2} + \cdots + a_{in} A_{jn} =
\begin{cases}
  \begin{vmatrix} \boldsymbol{A} \end{vmatrix} , & i = j , \\
  0 ,                                            & i \neq j ,
\end{cases}
$$

故

$$
\boldsymbol{AA}^* =
\begin{pmatrix}
  \begin{vmatrix}
    \boldsymbol{A}
  \end{vmatrix}    &                  &        &                  \\
                   & \begin{vmatrix}
                       \boldsymbol{A}
                     \end{vmatrix}    &        &                  \\
                   &                  & \ddots &                  \\
                   &                  &        & \begin{vmatrix}
                                                   \boldsymbol{A}
                                                 \end{vmatrix}
\end{pmatrix}
= \begin{vmatrix} \boldsymbol{A} \end{vmatrix} \boldsymbol{E} .
$$

类似有

$$
\boldsymbol{A}^* \boldsymbol{A} = \begin{vmatrix} \boldsymbol{A} \end{vmatrix} \boldsymbol{E} .
$$
:::

## 逆矩阵

在数的乘法中, 对不等于零的数 $a$ 总存在惟一的数 $b$, 使 $ab$=$ba$=$1$, 此数 $b$ 即是 $a$ 的倒数, 即 $b$=$\frac{1}{a}$=$a^{-1}$. 利用倒数, 数的除法可转化为乘积的形式: $x$÷$a$=$x$·$\frac{1}{a}$=$x$·$a^{-1}$, 这里 $a$≠$0$. 把这一思想应用到矩阵的运算中, 并注意到 [单位矩阵](#单位矩阵) $\boldsymbol{E}$ 在矩阵的乘法中的作用与数 $1$ 类似, 由此引入逆矩阵的概念.

#### 定义 7

对于 $n$ 阶矩阵 $\boldsymbol{A}$, 如果有一个 $n$ 阶矩阵 $\boldsymbol{B}$, 使

$$
\boldsymbol{AB} = \boldsymbol{BA} = \boldsymbol{E} ,
$$

则说矩阵 $\boldsymbol{A}$ 是 `可逆` 的, 并把矩阵 $\boldsymbol{B}$ 称为 $\boldsymbol{A}$ 的 `逆矩阵`, 简称 `逆阵`.

$\boldsymbol{A}$ 的逆矩阵记作 $\boldsymbol{A}^{-1}$. 即若 $\boldsymbol{AB}$=$\boldsymbol{BA}$=$\boldsymbol{E}$, 则 $\boldsymbol{B}$=$\boldsymbol{A}^{-1}$.

::: tip 提示
如果矩阵 $\boldsymbol{A}$ 是可逆的, 那么 $\boldsymbol{A}$ 的逆矩阵是惟一的. 这是因为: 若 $\boldsymbol{B}$、$\boldsymbol{C}$ 都是 $\boldsymbol{A}$ 的逆矩阵, 则有

$$
\boldsymbol{B} = \boldsymbol{BE} = \boldsymbol{B} (\boldsymbol{AC}) = (\boldsymbol{BA}) \boldsymbol{C} = \boldsymbol{EC} = \boldsymbol{C} ,
$$
:::

#### 定理 1

**若矩阵 $\boldsymbol{A}$ 可逆, 则 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$.**

::: details 证
$\boldsymbol{A}$ 可逆, 即有 $\boldsymbol{A}^{-1}$, 使 $\boldsymbol{A} \boldsymbol{A}^{-1}$=$\boldsymbol{E}$. 故 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$·$\begin{vmatrix} \boldsymbol{A}^{-1} \end{vmatrix}$=$\begin{vmatrix} \boldsymbol{E} \end{vmatrix}$=$1$, 所以 $\boldsymbol{A}$≠$0$.
:::

#### 定理 2

**若 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$, 则矩阵 $\boldsymbol{A}$ 可逆, 且**

$$
\boldsymbol{A}^{-1} = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* ,
\tag{8}
$$

**其中 $\boldsymbol{A}^{*}$ 为矩阵 $\boldsymbol{A}$ 的 [伴随矩阵](#例-10).**

::: details 证
由 [例 10](#例-10) 知

$$
\boldsymbol{AA}^* = \boldsymbol{A}^* \boldsymbol{A} = \begin{vmatrix} \boldsymbol{A} \end{vmatrix} \boldsymbol{E} ,
$$

因 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$, 故有

$$
\boldsymbol{A} \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* \boldsymbol{A} = \boldsymbol{E} ,
$$

所以, 按逆矩阵的定义, 即知 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$ 可逆, 且有

$$
\boldsymbol{A}^{-1} = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* .
$$
:::

#### 奇异矩阵

当 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$=$0$ 时, $\boldsymbol{A}$ 称为 `奇异矩阵`, 否则称 `非奇异矩阵`. 由上面两定义可知: **$\boldsymbol{A}$ 是奇异矩阵的充分必要条件是$\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$, 即 [可逆矩阵](#定义-7) 就是非奇异矩阵**.

#### 推论

**若 $\boldsymbol{AB}$=$\boldsymbol{E}$（或 $\boldsymbol{BA}$=$\boldsymbol{E}$）, 则 $\boldsymbol{B}$=$\boldsymbol{A}^{-1}$.**

::: details 证
$\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$·$\begin{vmatrix} \boldsymbol{B} \end{vmatrix}$=$\begin{vmatrix} \boldsymbol{E} \end{vmatrix}$=$1$, 故 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$, 因而 $\boldsymbol{A}^{-1}$ 存在, 于是

$$
\boldsymbol{B} = \boldsymbol{EB} = (\boldsymbol{A}^{-1} \boldsymbol{A}) \boldsymbol{B} = \boldsymbol{A}^{-1} (\boldsymbol{A} \boldsymbol{B}) = \boldsymbol{A}^{-1} \boldsymbol{E} = \boldsymbol{A}^{-1} .
$$
:::

逆矩阵满足下述预算规律:

(i) 若 $\boldsymbol{A}$ 可逆, 则 $\boldsymbol{A}^{-1}$ 亦可逆, 且 $(\boldsymbol{A}^{-1})^{-1}$=$\boldsymbol{A}$;

(ii) 若 $\boldsymbol{A}$ 可逆, 数 $\lambda$≠$0$, 则 $\lambda \boldsymbol{A}$ 可逆, 且 $(\lambda \boldsymbol{A})^{-1}$=$\frac{1}{\lambda} \boldsymbol{A}^{-1}$;

(iii) 若 $\boldsymbol{A}$、$\boldsymbol{B}$ 为同阶矩阵且均可逆, 则 $\boldsymbol{AB}$ 亦可逆, 且

$$
(\boldsymbol{AB})^{-1} = \boldsymbol{B}^{-1} \boldsymbol{A}^{-1} .
$$

::: details 证 (iii)
$(\boldsymbol{AB}) (\boldsymbol{B}^{-1} \boldsymbol{A}^{-1})$=$\boldsymbol{A} (\boldsymbol{B} \boldsymbol{B}^{-1}) \boldsymbol{A}^{-1}$=$\boldsymbol{A} \boldsymbol{E} \boldsymbol{A}^{-1}$=$\boldsymbol{A} \boldsymbol{A}^{-1}$=$\boldsymbol{E}$, 由 [推论](#推论), 即有 $(\boldsymbol{AB})^{-1}$=$\boldsymbol{B}^{-1} \boldsymbol{A}^{-1}$.
:::

(iv) 若 $\boldsymbol{A}$ 可逆, 则 $\boldsymbol{A}^T$ 亦可逆, 且$(\boldsymbol{A}^T)^{-1}$=$(\boldsymbol{A}^{-1})^T$ .

::: details 证 (iv)
$$
\boldsymbol{A}^T (\boldsymbol{A}^{-1})^T = (\boldsymbol{A}^{-1} \boldsymbol{A})^T = \boldsymbol{E}^T = \boldsymbol{E} ,
$$

所以

$$
(\boldsymbol{A}^T)^{-1} = (\boldsymbol{A}^{-1})^T .
$$
:::

当 $\boldsymbol{A}$ 可逆时, 还可定义

$$
\boldsymbol{A}^0 = \boldsymbol{E} , \quad \boldsymbol{A}^{-k} = (\boldsymbol{A}^{-1})^k ,
$$

其中 $k$ 为正整数. 这样, 当 $\boldsymbol{A}$ 可逆, $\lambda$、$\mu$ 为整数时, 有

$$
\boldsymbol{A}^\lambda \boldsymbol{A}^\mu = \boldsymbol{A}^{\lambda + \mu}, \quad (\boldsymbol{A}^\lambda)^\mu = \boldsymbol{A}^{\lambda \mu} .
$$

#### 例 11

求二阶矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ 的逆矩阵.

::: details 解
$$
\begin{vmatrix}
  \boldsymbol{A}
\end{vmatrix}
= ad - bc, \quad \boldsymbol{A}^* =
\begin{pmatrix}
   d & -b \\
  -c &  a
\end{pmatrix}
,
$$

利用逆矩阵 [公式 (8)](#定理-2), 当 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$ 时, 有

$$
\boldsymbol{A}^{-1} = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* = \frac{1}{ad - bc}
\begin{pmatrix}
   d & -b \\
  -c &  a
\end{pmatrix}
.
$$
:::

#### 例 12

求方阵

$$
\boldsymbol{A} =
\begin{pmatrix}
  1 & 2 & 3 \\
  2 & 2 & 1 \\
  3 & 4 & 3
\end{pmatrix}
$$

的逆矩阵.

::: details 解
求得 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$=$2$≠$0$, 知 $\boldsymbol{A}^{-1}$ 存在. 再计算 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$ 的余子式

$$
\begin{aligned}
  M_{11} & =  2 , & M_{12} & =  3 , & M_{13} & =  2 , \\
  M_{21} & = -6 , & M_{22} & = -6 , & M_{23} & = -2 , \\
  M_{31} & = -4 , & M_{32} & = -5 , & M_{33} & = -2 ,
\end{aligned}
$$

得

$$
\boldsymbol{A}^* =
\begin{pmatrix}
   M_{11} & -M_{21} &  M_{31} \\
  -M_{12} &  M_{22} & -M_{32} \\
   M_{13} & -M_{23} &  M_{33}
\end{pmatrix}
=
\begin{pmatrix}
   2 &  6 & -4 \\
  -3 & -6 &  5 \\
   2 &  2 & -2
\end{pmatrix}
,
$$

所以

$$
\boldsymbol{A}^{-1} = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* =
\begin{pmatrix}
        1      &  3 &     -2      \\
  -\frac{3}{2} & -3 & \frac{5}{2} \\
        1      &  1 &     -1
\end{pmatrix}
.
$$
:::

#### 例 13

略.

#### 例 14

略.

#### 例 15

略.

## 克拉默法则

含有 $n$ 个未知数 $x_1$, $x_2$, ⋯, $x_n$ 的 $n$ 个线性方程的方程组

$$
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \cdots + a_{1n} x_n = b_1 , \\
  a_{21} x_1 + a_{22} x_2 + \cdots + a_{2n} x_n = b_2 , \\
  \cdots \cdots \cdots \cdots \\
  a_{n1} x_1 + a_{n2} x_2 + \cdots + a_{nn} x_n = b_n ,
\end{cases}
\tag{9}
$$

它的解可以用 $n$ 阶行列式表示, 即有

**如果线性方程组 (9) 的 [系数矩阵](#例-1) $\boldsymbol{A}$ 的行列式不等于零, 即**

$$
\begin{vmatrix} \boldsymbol{A} \end{vmatrix} =
\begin{vmatrix}
  a_{11} & \cdots & a_{1n} \\
  \vdots &        & \vdots \\
  a_{n1} & \cdots & a_{nn}
\end{vmatrix}
\neq 0 ,
$$

**那么, 方程组 (9) 有惟一解**

$$
x_1 = \frac{\begin{vmatrix} \boldsymbol{A}_1 \end{vmatrix}}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} , \quad
x_2 = \frac{\begin{vmatrix} \boldsymbol{A}_2 \end{vmatrix}}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} , \quad
\cdots , \quad
x_n = \frac{\begin{vmatrix} \boldsymbol{A}_n \end{vmatrix}}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} ,
$$

**其中 $\boldsymbol{A}_j$ $(j$ = $1$, $2$, ⋯, $n)$ 是把系数矩阵 $\boldsymbol{A}$ 中第 $j$ 列的元素用方程组右端的常数项代替后所得到的的 $n$ 阶矩阵, 即**

$$
\boldsymbol{A}_j =
\begin{pmatrix}
  a_{11} & \cdots & a_{1, j-1} &  b_1   & a_{1, j+1} & \cdots & a_{1n} \\
  \vdots &        &   \vdots   & \vdots &   \vdots   &        & \vdots \\
  a_{n1} & \cdots & a_{n, j-1} &  b_n   & a_{n, j+1} & \cdots & a_{nn}
\end{pmatrix}
.
$$

::: details 证
把方程组 (9) 写成矩阵方程

$$
\boldsymbol{Ax} = \boldsymbol{b} ,
$$

这里 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times n}$ 为 $n$ 阶矩阵, 因 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$≠$0$, 故 $\boldsymbol{A}^{-1}$ 存在.

令 $\boldsymbol{x}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$, 有

$$
\boldsymbol{Ax} = \boldsymbol{AA}^{-1} \boldsymbol{b} = \boldsymbol{b} ,
$$

表明 $\boldsymbol{x}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$ 是方程组 (9) 的解向量.

由 $\boldsymbol{Ax}$=$\boldsymbol{b}$, 有 $\boldsymbol{A}^{-1} \boldsymbol{Ax}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$, 即 $\boldsymbol{x}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$, 根据逆矩阵的惟一性, 知 $\boldsymbol{x}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$ 是方程组 (9) 的惟一的解向量.

由逆矩阵公式 $\boldsymbol{A}^{-1}$=$\frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^*$, 有 $\boldsymbol{x}$=$\boldsymbol{A}^{-1} \boldsymbol{b}$=$\frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \boldsymbol{A}^* \boldsymbol{b}$, 即

$$
\begin{pmatrix}
   x_1   \\
   x_2   \\
  \vdots \\
   x_n
\end{pmatrix}
= \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}}
\begin{pmatrix}
  A_{11} & A_{12} & \cdots & A_{1n} \\
  A_{21} & A_{22} & \cdots & A_{2n} \\
  \vdots & \vdots &        & \vdots \\
  A_{n1} & A_{n2} & \cdots & A_{nn}
\end{pmatrix}
\begin{pmatrix}
   b_1   \\
   b_2   \\
  \vdots \\
   b_n
\end{pmatrix}
= \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}}
\begin{pmatrix}
  b_1 A_{11} & b_2 A_{12} & \cdots & b_n A_{1n} \\
  b_1 A_{21} & b_2 A_{22} & \cdots & b_n A_{2n} \\
    \vdots   &   \vdots   &        &   \vdots   \\
  b_1 A_{n1} & b_2 A_{n2} & \cdots & b_n A_{nn}
\end{pmatrix}
,
$$

亦即

$$
x_j
= \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} (b_1 A_{1j} + b_2 A_{2j} + \cdots + b_n A_{nj})
= \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}} \begin{vmatrix} \boldsymbol{A}_j \end{vmatrix} \quad
(j = 1, 2, \cdots, n) .
$$
:::

克拉默法则可视为行列式的一个应用, 而所给出的证明又可看作逆矩阵的一个应用. 它解决的是方程个数与未知数个数相等且系数行列式不等于零的线性方程组. 所以它既是 [行列式例 1](determinant.html#方程组的解) 中用二阶行列式求解方程组的推广, 又是求解一般线性方程组的一个特殊的情形.

#### 例 16

分别用克拉默法则和逆矩阵方法求解线性方程组

$$
\begin{cases}
  x_1 - x_2 - x_3 = 2 , \\
  2x_1 - x_2 - 3x_3 = 1 , \\
  3x_1 + 2x_2 - 5x_3 = 0 .
\end{cases}
$$

::: details 解
（1）用克拉默法则

因方程组的系数矩阵的行列式 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$=$\begin{vmatrix} 1 & -1 & -1 \\ 2 & -1 & -3 \\ 3 & 2 & -5 \end{vmatrix}$=$3$≠$0$, 由克拉默法则, 它有惟一解, 并且

$$
\begin{aligned}
  x_1
    & = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}}
      \begin{vmatrix}
        2 & -1 & -1 \\
        1 & -1 & -3 \\
        0 &  2 & -5
      \end{vmatrix}
      \xlongequal[]{r_1 \leftrightarrow r_2} - \frac{1}{3}
      \begin{vmatrix}
        1 & -1 & -3 \\
        2 & -1 & -1 \\
        0 &  2 & -5
      \end{vmatrix}
      \xlongequal[r_3 - 2r_2]{r_2 - 2r_1} - \frac{1}{3}
      \begin{vmatrix}
        1 & -1 & -3  \\
        0 &  1 &  5  \\
        0 &  0 & -15
      \end{vmatrix}
      = 5 ; \\
  x_2
    & = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}}
      \begin{vmatrix}
        1 & 2 & -1 \\
        2 & 1 & -3 \\
        3 & 0 & -5
      \end{vmatrix}
      \xlongequal[r_3 - 3r_1]{r_2 - 2r_1} \frac{1}{3}
      \begin{vmatrix}
        1 &  2 & -1 \\
        0 & -3 & -1 \\
        0 & -6 & -2
      \end{vmatrix}
      = 0 ; \\
  x_3
    & = \frac{1}{\begin{vmatrix} \boldsymbol{A} \end{vmatrix}}
      \begin{vmatrix}
        1 & -1 & 2 \\
        2 & -1 & 1 \\
        3 &  2 & 0
      \end{vmatrix}
      \xlongequal[r_3 - 3r_1]{r_2 - 2r_1} \frac{1}{3}
      \begin{vmatrix}
        1 & -1 &  2 \\
        0 &  1 & -3 \\
        0 &  5 & -6
      \end{vmatrix}
      = \frac{1}{3}
      \begin{vmatrix}
        1 & -3 \\
        5 & -6
      \end{vmatrix}
      = 3 .
\end{aligned}
$$

（2）用逆矩阵方法

因 $\begin{vmatrix} \boldsymbol{A} \end{vmatrix}$=$3$≠$0$, 故 $\boldsymbol{a}$ 可逆, 于是

$$
\begin{aligned}
  x & = \boldsymbol{A}^{-1} \boldsymbol{b} \\
    & =
      \begin{pmatrix}
        1 & -1 & -1 \\
        2 & -1 & -3 \\
        3 &  2 & -5
      \end{pmatrix}^{-1}
      \begin{pmatrix}
        2 \\
        1 \\
        0
      \end{pmatrix}
      = \frac{1}{3}
      \begin{pmatrix}
        11 & -7 & 2 \\
         1 & -2 & 1 \\
         7 & -5 & 1
      \end{pmatrix}
      \begin{pmatrix}
        2 \\
        1 \\
        0
      \end{pmatrix}
      = \frac{1}{3}
      \begin{pmatrix}
        15 \\
         0 \\
         9
      \end{pmatrix}
      =
      \begin{pmatrix}
        5 \\
        0 \\
        3
      \end{pmatrix}
      ,
\end{aligned}
$$

即有

$$
\begin{cases}
  x_1 = 5 , \\
  x_2 = 0 , \\
  x_3 = 3 .
\end{cases}
$$
:::

## 矩阵分块法

对于行数和列数较多的矩阵 $\boldsymbol{A}$, 运算时常采用 `分块法`, 使大矩阵的运算化成小矩阵的运算. 将矩阵 $\boldsymbol{A}$ 用若干条纵线和横线分成许多个小矩阵, 每一个小矩阵称为 $\boldsymbol{A}$ 的 `子块`, 以子块为元素的形式上的矩阵称为 `分块矩阵`.

::: details 例如
将 $3$×$4$ 矩阵

$$
\begin{pmatrix}
  a_{11} & a_{12} & a_{13} & a_{14} \\
  a_{21} & a_{22} & a_{23} & a_{24} \\
  a_{31} & a_{32} & a_{33} & a_{34}
\end{pmatrix}
$$

分成子块的分法很多, 先举出三种分块形式:

$$
\begin{aligned}
  & (i)
    \left(
      \begin{array}{cc:cc}
        a_{11} & a_{12} & a_{13} & a_{14} \\
        a_{21} & a_{22} & a_{23} & a_{24} \\
        \hdashline
        a_{31} & a_{32} & a_{33} & a_{34}
      \end{array}
    \right)
    , \quad
    (ii)
    \left(
      \begin{array}{c:cc:c}
        a_{11} & a_{12} & a_{13} & a_{14} \\
        a_{21} & a_{22} & a_{23} & a_{24} \\
        \hdashline
        a_{31} & a_{32} & a_{33} & a_{34}
      \end{array}
    \right)
    , \\
  & (iii)
    \left(
      \begin{array}{c:c:c:c}
        a_{11} & a_{12} & a_{13} & a_{14} \\
        a_{21} & a_{22} & a_{23} & a_{24} \\
        a_{31} & a_{32} & a_{33} & a_{34}
      \end{array}
    \right)
    .
\end{aligned}
$$

分法 (i) 可记为

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{A}_{11} & \boldsymbol{A}_{12} \\
  \boldsymbol{A}_{21} & \boldsymbol{A}_{22}
\end{pmatrix}
,
$$

其中

$$
\boldsymbol{A}_{11} =
\begin{pmatrix}
  a_{11} & a_{12} \\
  a_{21} & a_{22}
\end{pmatrix}
, \quad
\boldsymbol{A}_{12} =
\begin{pmatrix}
  a_{13} & a_{14} \\
  a_{23} & a_{24}
\end{pmatrix}
, \quad
\boldsymbol{A}_{21} = \begin{pmatrix} a_{31},  & a_{32} \end{pmatrix} , \quad
\boldsymbol{A}_{22} = \begin{pmatrix} a_{33},  & a_{34} \end{pmatrix} ,
$$

即 $\boldsymbol{A}_{11}$, $\boldsymbol{A}_{12}$, $\boldsymbol{A}_{21}$, $\boldsymbol{A}_{22}$ 为 $\boldsymbol{A}$ 的子块, 而 $\boldsymbol{A}$ 形式上成为以这些子块为元的分块矩阵. 分法 (ii) 及 (iii) 类似.
:::

[方阵的行列式](#方阵的行列式) 中证明公式 $\begin{vmatrix} \boldsymbol{AB} \end{vmatrix}$=$\begin{vmatrix} \boldsymbol{A} \end{vmatrix} \begin{vmatrix} \boldsymbol{B} \end{vmatrix}$ 时出现的矩阵 $\begin{pmatrix} \boldsymbol{A} & \boldsymbol{O} \\ - \boldsymbol{E} & \boldsymbol{B} \end{pmatrix}$ 正是分块矩阵. 在那里是把四个矩阵拼成一个大矩阵, 这与把大矩阵分成多个小矩阵是同一个概念的两个方面.

分块矩阵的运算规则与普通矩阵的运算规则相类似, 分别说明如下:

(i) 设矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 的行数相同、列数相同, 采用相同的分块方法, 有

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{A}_{11} & \cdots & \boldsymbol{A}_{1r} \\
         \vdots       &        &       \vdots        \\
  \boldsymbol{A}_{s1} & \cdots & \boldsymbol{A}_{sr}
\end{pmatrix}
,
\boldsymbol{B} =
\begin{pmatrix}
  \boldsymbol{B}_{11} & \cdots & \boldsymbol{B}_{1r} \\
         \vdots       &        &       \vdots        \\
  \boldsymbol{B}_{s1} & \cdots & \boldsymbol{B}_{sr}
\end{pmatrix}
,
 $$

其中 $\boldsymbol{A}_{ij}$ 与 $\boldsymbol{B}_{ij}$ 的行数相同、列数相同, 那么

$$
\boldsymbol{A} + \boldsymbol{B} =
\begin{pmatrix}
  \boldsymbol{A}_{11} + \boldsymbol{B}_{11} & \cdots & \boldsymbol{A}_{1r} + \boldsymbol{B}_{1r} \\
                    \vdots                  &        &                  \vdots                   \\
  \boldsymbol{A}_{s1} + \boldsymbol{B}_{s1} & \cdots & \boldsymbol{A}_{sr} + \boldsymbol{B}_{sr}
\end{pmatrix}
.
$$

(ii) 设 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{A}_{11} & \cdots & \boldsymbol{A}_{1r} \\ \vdots & & \vdots \\ \boldsymbol{A}_{s1} & \cdots & \boldsymbol{A}_{sr} \end{pmatrix}$, $\lambda$ 为数, 那么

$$
\lambda \boldsymbol{A} =
\begin{pmatrix}
  \lambda \boldsymbol{A}_{11} & \cdots & \lambda \boldsymbol{A}_{1r} \\
             \vdots           &        &           \vdots            \\
  \lambda \boldsymbol{A}_{s1} & \cdots & \lambda \boldsymbol{A}_{sr}
\end{pmatrix}
.
$$

(iii) 设 $\boldsymbol{A}$ 为 $m$×$l$ 矩阵, $\boldsymbol{B}$ 为 $l$×$n$ 矩阵, 分块成

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{A}_{11} & \cdots & \boldsymbol{A}_{1t} \\
         \vdots       &        &       \vdots        \\
  \boldsymbol{A}_{s1} & \cdots & \boldsymbol{A}_{st}
\end{pmatrix}
,
\boldsymbol{B} =
\begin{pmatrix}
  \boldsymbol{B}_{11} & \cdots & \boldsymbol{B}_{1r} \\
         \vdots       &        &       \vdots        \\
  \boldsymbol{B}_{t1} & \cdots & \boldsymbol{B}_{tr}
\end{pmatrix}
,
$$

其中 $\boldsymbol{A}_{i1}$, $\boldsymbol{A}_{i2}$, ⋯, $\boldsymbol{A}_{it}$ 的列数分别等于 $\boldsymbol{B}_{1j}$, $\boldsymbol{B}_{2j}$, ⋯, $\boldsymbol{B}_{tj}$ 的行数, 那么

$$
\boldsymbol{AB} =
\begin{pmatrix}
  \boldsymbol{C}_{11} & \cdots & \boldsymbol{C}_{1r} \\
         \vdots       &        &       \vdots        \\
  \boldsymbol{C}_{s1} & \cdots & \boldsymbol{C}_{sr}
\end{pmatrix}
,
$$

其中

$$
\boldsymbol{C}_{ij} = \sum_{k=1}^t \boldsymbol{A}_{ik} \boldsymbol{B}_{kj} \quad (i = 1, \cdots, s; j = 1, \cdots, r) .
$$

#### 例 17

设

$$
\boldsymbol{A} =
\begin{pmatrix}
   1 & 0 & 0 & 0 \\
   0 & 1 & 0 & 0 \\
  -1 & 2 & 1 & 0 \\
   1 & 1 & 0 & 1
\end{pmatrix}
, \quad
\boldsymbol{B} =
\begin{pmatrix}
   1 &  0 & 1 & 0 \\
  -1 &  2 & 0 & 1 \\
   1 &  0 & 4 & 1 \\
  -1 & -1 & 2 & 0
\end{pmatrix}
,
$$

求 $\boldsymbol{AB}$.

::: details 解
把 $\boldsymbol{A}$, $\boldsymbol{B}$ 分块成

$$
\begin{aligned}
  \boldsymbol{A}
    & =
      \left(
        \begin{array}{cc:cc}
           1 & 0 & 0 & 0 \\
           0 & 1 & 0 & 0 \\
          \hdashline
          -1 & 2 & 1 & 0 \\
           1 & 1 & 0 & 1
        \end{array}
      \right)
      =
      \begin{pmatrix}
         \boldsymbol{E}  & \boldsymbol{O} \\
        \boldsymbol{A}_1 & \boldsymbol{E}
      \end{pmatrix}
      , \\
  \boldsymbol{B}
    & =
      \left(
        \begin{array}{cc:cc}
           1 &  0 & 1 & 0 \\
          -1 &  2 & 0 & 1 \\
          \hdashline
           1 &  0 & 4 & 1 \\
          -1 & -1 & 2 & 0
        \end{array}
      \right)
      =
      \begin{pmatrix}
        \boldsymbol{B}_{11} &   \boldsymbol{E}    \\
        \boldsymbol{B}_{21} & \boldsymbol{B}_{22}
      \end{pmatrix}
      ,
\end{aligned}
$$

则

$$
\boldsymbol{AB} =
\begin{pmatrix}
   \boldsymbol{E}  & \boldsymbol{O} \\
  \boldsymbol{A}_1 & \boldsymbol{E}
\end{pmatrix}
\begin{pmatrix}
  \boldsymbol{B}_{11} &   \boldsymbol{E}    \\
  \boldsymbol{B}_{21} & \boldsymbol{B}_{22}
\end{pmatrix}
=
\begin{pmatrix}
                      \boldsymbol{B}_{11}                    &             \boldsymbol{E}             \\
  \boldsymbol{A}_1 \boldsymbol{B}_{11} + \boldsymbol{B}_{21} & \boldsymbol{A}_1 + \boldsymbol{B}_{22}
\end{pmatrix}
,
$$

而

$$
\begin{aligned}
  \boldsymbol{A}_1 \boldsymbol{B}_{11} + \boldsymbol{B}_{21}
    & =
      \begin{pmatrix}
        -1 & 2 \\
         1 & 1
      \end{pmatrix}
      \begin{pmatrix}
         1 & 0 \\
        -1 & 2
      \end{pmatrix}
      +
      \begin{pmatrix}
         1 &  0 \\
        -1 & -1
      \end{pmatrix} \\
    & =
      \begin{pmatrix}
        -3 & 4 \\
         0 & 2
      \end{pmatrix}
      +
      \begin{pmatrix}
         1 &  0 \\
        -1 & -1
      \end{pmatrix}
      =
      \begin{pmatrix}
        -2 & 4 \\
        -1 & 1
      \end{pmatrix}
      , \\
  \boldsymbol{A}_1 + \boldsymbol{B}_{22}
    & =
      \begin{pmatrix}
        -1 & 2 \\
         1 & 1
      \end{pmatrix}
      +
      \begin{pmatrix}
        4 & 1 \\
        2 & 0
      \end{pmatrix}
      =
      \begin{pmatrix}
        3 & 3 \\
        3 & 1
      \end{pmatrix}
      ,
\end{aligned}
$$

于是

$$
\boldsymbol{AB} =
\left(
  \begin{array}{cc:cc}
     1 & 0 & 1 & 0 \\
    -1 & 2 & 0 & 1 \\
    \hdashline
    -2 & 4 & 3 & 3 \\
    -1 & 1 & 3 & 1
  \end{array}
\right)
.
$$
:::

(iv) 设 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{A}_{11} & \cdots & \boldsymbol{A}_{1r} \\ \vdots & & \vdots \\ \boldsymbol{A}_{s1} & \cdots & \boldsymbol{A}_{sr} \end{pmatrix}$, 则 $\boldsymbol{A}^T$=$\begin{pmatrix} \boldsymbol{A}_{11}^T & \cdots & \boldsymbol{A}_{s1}^T \\ \vdots & & \vdots \\ \boldsymbol{A}_{1r}^T & \cdots & \boldsymbol{A}_{sr}^T \end{pmatrix}$.

(v) 设 $\boldsymbol{A}$ 为 $n$ 阶方阵, 若 $\boldsymbol{A}$ 的分块矩阵只有在对角线上有非零子块, 其余子块都为 [零矩阵](#零矩阵), 且在对角线上的子块都是方阵, 即

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{A}_1 &                  &        &  \boldsymbol{O}  \\
                   & \boldsymbol{A}_2 &        &                  \\
                   &                  & \ddots &                  \\
   \boldsymbol{O}  &                  &        & \boldsymbol{A}_s
\end{pmatrix}
,
$$

其中 $\boldsymbol{A}_i$ ($i$ = $1$, $2$, ⋯, $s$) 都是方阵, 那么称 $\boldsymbol{A}$ 为 `分块对角矩阵`.

分块对角矩阵的行列式具有下述性质

$$
\begin{vmatrix} \boldsymbol{A} \end{vmatrix} =
\begin{vmatrix} \boldsymbol{A}_1 \end{vmatrix}
\begin{vmatrix} \boldsymbol{A}_2 \end{vmatrix}
\cdots
\begin{vmatrix} \boldsymbol{A}_s \end{vmatrix}
.
$$

由此性质可知, 若 $\begin{vmatrix} \boldsymbol{A}_i \end{vmatrix}$≠$0$ ($i$ = $1$, $2$, ⋯, $s$), 则 $\boldsymbol{A}$≠$0$, 并有

$$
\boldsymbol{A}^{-1} =
\begin{pmatrix}
  \boldsymbol{A}_1^{-1} &                       &        &    \boldsymbol{O}     \\
                        & \boldsymbol{A}_2^{-1} &        &                       \\
                        &                       & \ddots &                       \\
      \boldsymbol{O}    &                       &        & \boldsymbol{A}_s^{-1}
\end{pmatrix}
.
$$

#### 例 18

设 $\boldsymbol{A} = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 3 & 1 \\ 0 & 2 & 1 \end{pmatrix}$, 求 $\boldsymbol{A}^{-1}$.

::: details 解
因

$$
\boldsymbol{A} =
\left(
  \begin{array}{c:cc}
    5 & 0 & 0 \\
    \hdashline
    0 & 3 & 1 \\
    0 & 2 & 1
  \end{array}
\right)
=
\begin{pmatrix}
  \boldsymbol{A}_1 &  \boldsymbol{O}  \\
   \boldsymbol{O}  & \boldsymbol{A}_2
\end{pmatrix}
,
$$

$$
\boldsymbol{A}_1 = \begin{pmatrix} 5 \end{pmatrix} , \quad
\boldsymbol{A}_1^{-1} = \begin{pmatrix} \frac{1}{5} \end{pmatrix} ; \quad
\boldsymbol{A}_2 =
\begin{pmatrix}
  3 & 1 \\
  2 & 1
\end{pmatrix}
, \quad
\boldsymbol{A}_2^{-1} =
\begin{pmatrix}
   1 & -1 \\
  -2 &  3
\end{pmatrix}
,
$$

所以

$$
\boldsymbol{A}^{-1} =
\left(
  \begin{array}{c:cc}
    \frac{1}{5} &  0 &  0 \\
    \hdashline
         0      &  1 & -1 \\
         0      & -2 &  3
  \end{array}
\right)
.
$$
:::

对矩阵分块时, 有两种分块法应予特别重视, 这就是按列分块和按行分块.

$m$×$n$ 矩阵 $\boldsymbol{A}$ 有 $n$ 列, 称为矩阵 $\boldsymbol{A}$ 的 $n$ 个列向量, 若第 $j$ 列记作

$$
\boldsymbol{a}_j =
\begin{pmatrix}
  a_{1j} \\
  a_{2j} \\
  \vdots \\
  a_{mj}
\end{pmatrix}
,
$$

则 $\boldsymbol{A}$ 可按列分块为

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{a}_1 , & \boldsymbol{a}_2 , & \cdots , & \boldsymbol{a}_n
\end{pmatrix}
;
$$

$m$×$n$ 矩阵 $\boldsymbol{A}$ 有 $m$ 行, 称为矩阵 $\boldsymbol{A}$ 的 $m$ 个行向量, 若第 $i$ 列记作

$$
\boldsymbol{\alpha}_i^T =
\begin{pmatrix}
  a_{i1} , & a_{i2} , & \cdots , & a_{in}
\end{pmatrix}
,
$$

则 $\boldsymbol{A}$ 可按行分块为

$$
\boldsymbol{A} =
\begin{pmatrix}
  \boldsymbol{\alpha}_1^T \\
  \boldsymbol{\alpha}_2^T \\
           \vdots         \\
  \boldsymbol{\alpha}_m^T
\end{pmatrix}
.
$$

对于矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times s}$ 与矩阵 $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}_{s \times n}$ 的乘积矩阵 $\boldsymbol{AB}$=$\boldsymbol{C}$=$\begin{pmatrix} c_{ij} \end{pmatrix}_{m \times n}$, 若把 $\boldsymbol{A}$ 按行分成 $m$ 块, 把 $\boldsymbol{B}$ 按列分成 $n$ 块, 便有

$$
\boldsymbol{AB} =
\begin{pmatrix}
  \boldsymbol{\alpha}_1^T \\
  \boldsymbol{\alpha}_2^T \\
           \vdots         \\
  \boldsymbol{\alpha}_m^T
\end{pmatrix}
\begin{pmatrix}
  \boldsymbol{b}_1 , \boldsymbol{b}_2 , \cdots , \boldsymbol{b}_n
\end{pmatrix}
=
\begin{pmatrix}
  \boldsymbol{\alpha}_1^T \boldsymbol{b}_1 & \boldsymbol{\alpha}_1^T \boldsymbol{b}_2 & \cdots & \boldsymbol{\alpha}_1^T \boldsymbol{b}_n \\
  \boldsymbol{\alpha}_2^T \boldsymbol{b}_1 & \boldsymbol{\alpha}_2^T \boldsymbol{b}_2 & \cdots & \boldsymbol{\alpha}_2^T \boldsymbol{b}_n \\
                   \vdots                  &                  \vdots                  &        &                  \vdots                  \\
  \boldsymbol{\alpha}_m^T \boldsymbol{b}_1 & \boldsymbol{\alpha}_m^T \boldsymbol{b}_2 & \cdots & \boldsymbol{\alpha}_m^T \boldsymbol{b}_n
\end{pmatrix}
=
\begin{pmatrix} c_{ij} \end{pmatrix}_{m \times n}
,
$$

其中

$$
c_{ij} = \boldsymbol{\alpha}_i^T \boldsymbol{b}_j =
\begin{pmatrix}
  a_{i1} , a_{i2} , \cdots , a_{is}
\end{pmatrix}
\begin{pmatrix}
  b_{1j} \\
  b_{2j} \\
  \vdots \\
  b_{sj}
\end{pmatrix}
= \sum_{k-1}^s a_{ik} b_{kj} ,
$$

由此可进一步领会矩阵相乘的定义.

#### 例 19

证明矩阵 $\boldsymbol{A}$=$\boldsymbol{O}$ 的充分必要条件是方阵 $\boldsymbol{A}^T \boldsymbol{A}$=$\boldsymbol{O}$.

::: details 证
条件的必要性是显然的, 下面证明条件的充分性.

设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times n}$, 把 $\boldsymbol{A}$ 按列分块为 $\boldsymbol{A}$=$\begin{pmatrix} \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_n \end{pmatrix}$, 则

$$
\boldsymbol{A}^T \boldsymbol{A} =
\begin{pmatrix}
  a_1^T  \\
  a_2^T  \\
  \vdots \\
  a_n^T
\end{pmatrix}
\begin{pmatrix}
  \boldsymbol{a}_1 , \boldsymbol{a}_2 , \cdots , \boldsymbol{a}_n
\end{pmatrix}
=
\begin{pmatrix}
  \boldsymbol{a}_1^T \boldsymbol{a}_1 & \boldsymbol{a}_1^T \boldsymbol{a}_2 & \cdots & \boldsymbol{a}_1^T \boldsymbol{a}_n \\
  \boldsymbol{a}_2^T \boldsymbol{a}_1 & \boldsymbol{a}_2^T \boldsymbol{a}_2 & \cdots & \boldsymbol{a}_2^T \boldsymbol{a}_n \\
                      \vdots                    &                    \vdots                     &        &                    \vdots                     \\
  \boldsymbol{a}_n^T \boldsymbol{a}_1 & \boldsymbol{a}_n^T \boldsymbol{a}_2 & \cdots & \boldsymbol{a}_n^T \boldsymbol{a}_n
\end{pmatrix}
,
$$

即 $\boldsymbol{A}^T \boldsymbol{A}$ 的 $(i,j)$ 元为 $\boldsymbol{a}_i^T \boldsymbol{a}_j$, 因 $\boldsymbol{A}^T \boldsymbol{A}$ 的 $(i,j)$=$\boldsymbol{O}$, 故

$$
\boldsymbol{a}_i^T \boldsymbol{a}_j = 0 \quad (i, j = 1, 2, \cdots, n) ,
$$

特殊地, 有

$$
\boldsymbol{a}_j^T \boldsymbol{a}_j = 0 \quad (j = 1, 2, \cdots, n) ,
$$

而

$$
\boldsymbol{a}_j^T \boldsymbol{a}_j =
\begin{pmatrix}
  a_{1j} , a_{2j} , \cdots , a_{mj}
\end{pmatrix}
\begin{pmatrix}
  a_{1j} \\
  a_{2j} \\
  \vdots \\
  a_{mj}
\end{pmatrix}
= a_{1j}^2 + a_{2j}^2 + \cdots + a_{mj}^2 ,
$$

由 $a_{1j}^2$+$a_{2j}^2$+⋯+$a_{mj}^2$=$0$（因 $a_{ij}$ 为实数）, 得

$$
a_{1j} = a_{2j} = \cdots = a_{mj} = 0 \quad (j = 1, 2, \cdots, n) ,
$$

即

$$
\boldsymbol{A} = \boldsymbol{O} .
$$
:::
