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

两个矩阵的行数相等、列数也相等时, 就称它们是 `同型矩阵`. 如果 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}$ 与 $\boldsymbol{B}$=$\begin{pmatrix} b_{ij} \end{pmatrix}$ 是同型矩阵, 并且它们的对应元素相等, 即

$$
a_{ij} = b_{ij} (i = 1, 2, \cdots, m; j = 1, 2, \cdots, n) ,
$$

那么就称矩阵 $\boldsymbol{A}$ 与矩阵 $\boldsymbol{B}$ `相等`, 记作

$$
\boldsymbol{A} = \boldsymbol{B} .
$$

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
        b_{11} \qquad & b_{12} \\
        b_{21} \qquad & b_{22} \\
        b_{31} \qquad & b_{32} \\
        b_{41} \qquad & b_{42}
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
\boldsymbol{A} = diag(\lambda_1, \lambda_2, cdots, \lambda_n) ;
$$

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
\qquad
(i, j = 1 , 2 , \cdots , n) .
$$
:::

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
  x_1 = & r (\cos\varphi \cos\theta - \sin\varphi \sin\theta) = r \cos(\varphi + \theta) , \\
  y_1 = & r (\sin\varphi \cos\theta + \cos\varphi \sin\theta) = r \sin(\varphi + \theta) ,
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

(ii) ($\boldsymbol{A}$+$\boldsymbol{B}$)+$\boldsymbol{C}$=$\boldsymbol{A}$+($\boldsymbol{B}$+$\boldsymbol{C}$).

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

(i) ($\lambda \mu$)$\boldsymbol{A}$=$\lambda$($\mu \boldsymbol{A}$);

(ii) ($\lambda$+$\mu$)$\boldsymbol{A}$=$\lambda \boldsymbol{A}$+$\mu \boldsymbol{A}$;

(iii) $\lambda$($\boldsymbol{A}$+$\boldsymbol{B}$)=$\lambda \boldsymbol{A}$+$\lambda \boldsymbol{B}$.

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
  a_{i1} , & a_{i2} , & \cdots , & a_{is}
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
\qquad \text{与} \qquad
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
\qquad \text{与} \qquad
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

$\boldsymbol{AB}$ 是 $\boldsymbol{A}$ `左乘` $\boldsymbol{B}$（$\boldsymbol{B}$ 被$\boldsymbol{A}$ 左乘）的乘积, $\boldsymbol{BA}$ 是 $\boldsymbol{A}$ `右乘` $\boldsymbol{B}$ 的乘积. $\boldsymbol{AB}$ 有意义时, $\boldsymbol{BA}$ 可能没有意义.又若 $\boldsymbol{A}$ 是 $m$×$n$ 矩阵, $\boldsymbol{B}$ 是 $n$×$m$ 矩阵, 则 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 都有意义, 但 $\boldsymbol{AB}$ 是 $m$ 阶方阵, $\boldsymbol{BA}$ 是 $n$ 阶方阵, 当 $m$≠$n$ 时, $\boldsymbol{AB}$≠$\boldsymbol{BA}$. 即使 $m$=$n$, 即 $\boldsymbol{A}$、$\boldsymbol{B}$ 是同阶方阵, 如 [例 6](#例-6), $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 都是 $2$ 阶方阵, 从而 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 也都是 $2$ 阶方阵, 但 $\boldsymbol{AB}$ 与 $\boldsymbol{BA}$ 仍然可以不相等.

对于两个 $n$ 阶方阵 $\boldsymbol{A}$、$\boldsymbol{B}$, 若 $\boldsymbol{AB}$=$\boldsymbol{BA}$, 则称方阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 是 `可交换` 的.

例 6 还表明, 矩阵 $\boldsymbol{A}$≠$\boldsymbol{O}$, $\boldsymbol{B}$≠$\boldsymbol{O}$, 但却有 $\boldsymbol{BA}$=$\boldsymbol{O}$.

::: warning 特别注意
若有两个矩阵 $\boldsymbol{A}$、$\boldsymbol{B}$ 满足 $\boldsymbol{AB}$=$\boldsymbol{O}$, 不能得出 $\boldsymbol{A}$=$\boldsymbol{O}$ 或 $\boldsymbol{B}$=$\boldsymbol{O}$ 的结论;

若 $\boldsymbol{A}$≠$\boldsymbol{O}$ 而 $\boldsymbol{A}$($\boldsymbol{X}$-$\boldsymbol{Y}$)=$\boldsymbol{O}$, 也不能得出 $\boldsymbol{X}$=$\boldsymbol{Y}$ 的结论.
:::

矩阵的乘法虽不满足交换律, 但仍满足下列结合律和分配律（假设运算都是可行的）:

(i) ($\boldsymbol{AB}$)$\boldsymbol{C}$=$\boldsymbol{A}$($\boldsymbol{BC}$);

(ii) λ($\boldsymbol{AB}$)=(λ$\boldsymbol{A}$)$\boldsymbol{B}$=$\boldsymbol{A}$(λ$\boldsymbol{B}$)（其中 λ 为数）;

(iii) $\boldsymbol{A}$($\boldsymbol{B}$+$\boldsymbol{C}$)=$\boldsymbol{AB}$+$\boldsymbol{AC}$, ($\boldsymbol{B}$+$\boldsymbol{C}$)$\boldsymbol{A}$=$\boldsymbol{BA}$+$\boldsymbol{CA}$.

对于单位矩阵 $\boldsymbol{E}$, 容易验证

$$
\boldsymbol{E}_m \boldsymbol{A}_{m \times n} = \boldsymbol{A}_{m \times n} ,
\qquad
\boldsymbol{A}_{m \times n} \boldsymbol{E}_n = \boldsymbol{A}_{m \times n} ,
$$

或简写成

$$
\boldsymbol{E} \boldsymbol{A} = \boldsymbol{A} \boldsymbol{E} = \boldsymbol{A} .
$$

可见单位矩阵 $\boldsymbol{E}$ 在矩阵乘法中的作用类似于数 $1$.

矩阵

$$
λ\boldsymbol{E} =
\begin{pmatrix}
  \lambda &         &        &         \\
          & \lambda &        &         \\
          &         & \ddots &         \\
          &         &        & \lambda
\end{pmatrix}
$$

称为 `纯量阵`. 由 (λ$\boldsymbol{E}$)$\boldsymbol{A}$=λ$\boldsymbol{A}$, $\boldsymbol{A}$(λ$\boldsymbol{E}$)=λ$\boldsymbol{A}$, 可知纯量阵 λ$\boldsymbol{E}$ 与矩阵 $\boldsymbol{A}$ 的乘积等于数 λ 与 $\boldsymbol{A}$ 的乘积. 当 $\boldsymbol{A}$ 为 $n$ 阶方阵时, 有

$$
(λ \boldsymbol{E}_n) \boldsymbol{A}_n = λ\boldsymbol{A}_n = \boldsymbol{A}_n (λ\boldsymbol{E}_n) ,
$$

表明纯量阵 λ$\boldsymbol{E}$ 与任何同阶方阵都是可交换的.

### 矩阵的幂

有了矩阵的乘法, 就可以定义 `矩阵的幂`. 设 $\boldsymbol{A}$ 是 $n$ 阶方阵, 定义

$$
\boldsymbol{A}^1 = \boldsymbol{A} , \boldsymbol{A}^2 = \boldsymbol{A}^1 \boldsymbol{A}^1 , \cdots , \boldsymbol{A}^{k+1} = \boldsymbol{A}^k \boldsymbol{A}^1 ,
$$

其中 $k$ 为正整数, 这就是说, $\boldsymbol{A}_k$ 就是 $k$ 个 $\boldsymbol{A}$ 连乘. 显然只有方阵的幂才有意义.

由于矩阵乘法适合结合律, 所以矩阵的幂满足以下运算规律:

$$
\boldsymbol{A}^k \boldsymbol{A}^l = \boldsymbol{A}^{k+l} , \qquad
(\boldsymbol{A}^k)^l = \boldsymbol{A}^{kl} ,
$$

其中 $k$、$l$ 为正整数. 又因矩阵乘法一般不满足交换律, 所以对于两个 $n$ 阶矩阵 $\boldsymbol{A}$ 与 $\boldsymbol{B}$, 一般说来 ($\boldsymbol{AB}$)$^k$≠$\boldsymbol{A}^k \boldsymbol{B}^k$, 只有当 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 可交换时, 才有 ($\boldsymbol{AB}$)$^k$=$\boldsymbol{A}^k \boldsymbol{B}^k$. 类似可知, 例如 ($\boldsymbol{A}$+$\boldsymbol{B}$)$^k$=$\boldsymbol{A}^2$+$2\boldsymbol{AB}$+$\boldsymbol{B}^2$、($\boldsymbol{A}$-$\boldsymbol{B}$)($\boldsymbol{A}$+$\boldsymbol{B}$)=$\boldsymbol{A}^2$-$\boldsymbol{B}^2$ 等公示, 也只有当 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 可交换时才成立.

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
\qquad \text{和} \qquad
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
        b_{11} \qquad & b_{12} \\
        b_{21} \qquad & b_{22} \\
        b_{31} \qquad & b_{32} \\
        b_{41} \qquad & b_{42}
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
              b_{11} \qquad & b_{12} \\
              b_{21} \qquad & b_{22} \\
              b_{31} \qquad & b_{32} \\
              b_{41} \qquad & b_{42}
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
              c_{11} \qquad & c_{12} \\
              c_{21} \qquad & c_{22} \\
              c_{31} \qquad & c_{32}
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
\tag{1'}
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
\tag{3'}
$$

其中

$$
\boldsymbol{A} =
\begin{pmatrix}
  a_{ij}
\end{pmatrix}
, \qquad
\boldsymbol{x} =
\begin{pmatrix}
    x_1  \\
    x_2  \\
  \vdots \\
    x_n
\end{pmatrix}
, \qquad
\boldsymbol{y} =
\begin{pmatrix}
    y_1  \\
    y_2  \\
  \vdots \\
    y_m
\end{pmatrix}
.
$$

这里, 列向量（列矩阵）$\boldsymbol{x}$ 表示 $n$ 个变量 $x_1$, $x_2$, ⋯, $x_n$, 列向量 $\boldsymbol{y}$ 表示 $m$ 个变量 $y_1$, $y_2$, ⋯, $y_m$. 线性变换 (3') 把 $\boldsymbol{x}$ 变成 $\boldsymbol{y}$, 相当于用矩阵 $\boldsymbol{A}$ 去左乘 $\boldsymbol{x}$ 得到 $\boldsymbol{y}$.
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

(i) ($\boldsymbol{A}^T$)$^T$=$\boldsymbol{A}^T$;

(ii) ($\boldsymbol{A}$+$\boldsymbol{B}$)$^T$=$\boldsymbol{A}^T$+$\boldsymbol{B}^T$;

(iii) (λ$\boldsymbol{A}$)$^T$=λ$\boldsymbol{A}^T$;

(iv) ($\boldsymbol{AB}$)$^T$=$\boldsymbol{B}^T$$\boldsymbol{A}^T$.

::: details 证明 (iv)
设 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times s}$、$\boldsymbol{b}$=$\begin{pmatrix} b_{ij} \end{pmatrix}_{s \times n}$, 记 $\boldsymbol{AB}$=$\boldsymbol{C}$=$\begin{pmatrix} c_{ij} \end{pmatrix}_{m \times n}$, $\boldsymbol{B}^T \boldsymbol{A}^T$=$\boldsymbol{D}$=$\begin{pmatrix} d_{ij} \end{pmatrix}_{n \times m}$. 于是按 [公式 (7)](#定义-4), 有

$$
c_{ij} = \sum_{k=1}^s a_{jk} b_{ki} ,
$$

而 $\boldsymbol{B}^T$ 的第 $i$ 行为 ($b_{1i}$, ⋯, $b_{si}$), $\boldsymbol{A}^T$ 的第 $j$ 列为 ($a_{j1}$, ⋯, $a_{js}$)$^T$, 因此

$$
d_{ij} = c_{ji} \qquad (i = 1, 2, \cdots, n; j = 1, 2, \cdots, m) ,
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
, \qquad
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
