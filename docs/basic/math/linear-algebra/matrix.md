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

其中 $a_{ij}$ 是第 $i$ 个方程的第 $j$ 个未知数的系数, $b_i$ 是第 $i$ 个方程的常数项, $i = 1, 2, \cdots, m; j = 1, 2, \cdots, n$, 当常数项 $b_1, b_2, \cdots, b_m$ 不全为零时, 线性方程组 (1) 叫做 `n 元非齐次线性方程组`, 当常数项 $b_1, b_2, \cdots, b_m$ 全为零时, (1) 式成为

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

对于 $n$ 元齐次线性方程组 (2), $x_1 = x_2 = \cdots = x_n = 0$ 一定是它的解, 这个解叫做 `齐次线性方程组 (2) 的零解`. 如果一组不全为零的数是 (2) 的解, 则它叫做齐次线性方程组 (2) 的非零解. 齐次线性方程组 (2) 一定有零解, 但不一定有非零解.

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

方程组 ①: 因其系数行列式 $D = \begin{vmatrix} 1 & -1 \\ 1 & 1 \end{vmatrix} \neq 0$, 知其有唯一解 $x = y = 1$; 方程组 ②: 显然不存在数 $x$ 和数 $y$ 使 $x + y = 1$ 和 $x + y = 2$ 同时成立, 故方程组 ② 无解; 方程组 ③: 设 $s$ 为任一数, 那么 $x_1 = x_2 = s$ 是 ③ 的解, 从而方程组 ③ 有无限多个解.
:::

::: danger 问题
对于线性方程组需要讨论以下问题:（1）它是否有解?（2）在有解是它的解是否唯一?（3）如果有多个解, 如何求出它的所有解?
:::

对于线性方程组 (1) 上述诸问题的答案完全取决于它的 $m \times n$ 个系数 $a_{ij} (i = 1, 2, \cdots, m, j = 1, 2, \cdots, n)$ 和右端的常数项 $b_1, b_2, \cdots, b_m$ 所构成的 $m$ 行 $n+1$ 列的矩形数表:

$$
\begin{matrix}
  a_{11} & a_{12} & \cdots & a_{1n} &  b_1   \\
  a_{21} & a_{22} & \cdots & a_{2n} &  b_2   \\
  \vdots & \vdots &        & \vdots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn} &  b_m
\end{matrix}
,
$$

这里横排称为行, 竖排称为列; 而对于齐次线性方程组 (2) 的相应问题的答案也完全取决于它的 $m \times n$ 个系数 $a_{ij} (i = 1, 2, \cdots, m, j = 1, 2, \cdots, n)$ 所构成的 $m$ 行 $n$ 列的矩形数表:

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

由 $m \times n$ 个数 $a_{ij} (i = 1, 2, \cdots, n)$ 排成的 $m$ 行 $n$ 列的数表

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

这 $m \times n$ 个数称为矩阵 $\boldsymbol{A}$ 的 `元素`, 简称为 `元`, 数 $a_{ij}$ 位于矩阵 $\boldsymbol{A}$ 的第 $i$ 行第 $j$ 列, 称为矩阵 $\boldsymbol{A}$ 的 `(i,j) 元`. 以数 $a_{ij}$ 为 $(i,j)$ 元的矩阵可简记作 $(a_{ij})$ 或 $(a_{ij})_{m \times n}$. $m$×$n$ 矩阵 $\boldsymbol{A}$ 也记作 $\boldsymbol{A}_{m \times n}$.

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

两个矩阵的行数相等、列数也相等时, 就称它们是 `同型矩阵`. 如果 $\boldsymbol{A} = \begin{pmatrix} a_{ij} \end{pmatrix}$ 与 $\boldsymbol{B} = \begin{pmatrix} b_{ij} \end{pmatrix}$ 是同型矩阵, 并且它们的对应元素相等, 即

$$
a_{ij} = b_{ij} (i = 1, 2, \cdots, m; j = 1, 2, \cdots, n) ,
$$

那么就称矩阵 $\boldsymbol{A}$ 与矩阵 $\boldsymbol{B}$ `相等`, 记作

$$
\boldsymbol{A} = \boldsymbol{B} .
$$

元素都是零的矩阵称为 `零矩阵`, 记作 $\boldsymbol{O}$. 注意不同型的零矩阵是不同的.
