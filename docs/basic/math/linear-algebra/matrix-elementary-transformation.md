---
tag:
  - 线性代数
---

# 矩阵的初等变换

矩阵的初等变换是矩阵的一种十分重要的运算, 它在解线性方程组、求逆矩阵及矩阵理论的探讨中都可起重要的作用. 为引进矩阵的初等变换, 先来分析用消元法解线性方程组的例子.

#### 引例

求解线性方程组

$$
\begin{cases}
           2  x_1 - \phantom{6} x_2 - \phantom{2} x_3 + \phantom{2} x_4 = 2 , & \text{①} \\
  \phantom{2} x_1 + \phantom{6} x_2 -          2  x_3 + \phantom{2} x_4 = 4 , & \text{②} \\
           4  x_1 -          6  x_2 +          2  x_3 -          2  x_4 = 4 , & \text{③} \\
           3  x_1 +          6  x_2 -          9  x_3 +          7  x_4 = 9 . & \text{④}
\end{cases}
\tag{1}
$$

解

$$
\begin{aligned}
  (1)
    & \xrightarrow[\text{③} \div 2]{\text{①} \leftrightarrow \text{②}}
      \begin{cases}
        \phantom{2} x_1 + \phantom{3} x_2 -          2  x_3 + \phantom{7} x_4 = 4 , & \text{①} \\
                 2  x_1 - \phantom{2} x_2 - \phantom{2} x_3 + \phantom{7} x_4 = 2 , & \text{②} \\
                 2  x_1 -          3  x_2 + \phantom{2} x_3 - \phantom{7} x_4 = 2 , & \text{③} \\
                 3  x_1 +          6  x_2 -          9  x_3 +          7  x_4 = 9   & \text{④}
      \end{cases}
\end{aligned}
\tag{$B_1$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[\text{④} - 3\text{①} \atop]{\text{②} - \text{③} \atop \text{③} - 2\text{①}}
      \begin{cases}
                 x_1  + \phantom{2} x_2 - 2 x_3 + \phantom{2} x_4 = \phantom{-} 4 , & \text{①} \\
        \phantom{x_1  +}         2  x_2 - 2 x_3 +          2  x_4 = \phantom{-} 0 , & \text{②} \\
        \phantom{x_1} -          5  x_2 + 5 x_3 -          3  x_4 =          -  6 , & \text{③} \\
        \phantom{x_1  +}         3  x_2 - 3 x_3 +          4  x_4 =          -  3   & \text{④}
      \end{cases}
\end{aligned}
\tag{$B_2$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[\text{③} + 5\text{②} \atop \text{④} - 3\text{②}]{\atop \text{②} \div 2}
      \begin{cases}
                 x_1 +  x_2 -          2  x_3 + \phantom{2} x_4 = \phantom{-} 4 , & \text{①} \\
        \phantom{x_1 +} x_2 - \phantom{2} x_3 + \phantom{2} x_4 = \phantom{-} 0 , & \text{②} \\
        \phantom{x_1 +  x_2 -          2  x_3 +}         2  x_4 =          -  6 , & \text{③} \\
        \phantom{x_1 +  x_2 -          2  x_3 +          2} x_4 =          -  3   & \text{④}
      \end{cases}
\end{aligned}
\tag{$B_3$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[\text{④} - 2\text{③}]{\text{③} \leftrightarrow \text{④}}
      \begin{cases}
                 x_1 +  x_2 -          2  x_3 +  x_4 = \phantom{-} 4 , & \text{①} \\
        \phantom{x_1 +} x_2 - \phantom{2} x_3 +  x_4 = \phantom{-} 0 , & \text{②} \\
        \phantom{x_1 +  x_2 -          2  x_3 +} x_4 =          -  3 , & \text{③} \\
        \phantom{x_1 +  x_2 -          2  x_3 + 0} 0 = \phantom{-} 0 . & \text{④}
      \end{cases}
\end{aligned}
\tag{$B_4$}
$$

这里, (1) → ($B_1$) 是为消 $x_1$ 作准备. ($B_1$) → ($B_2$) 是保留 ① 中的 $x_1$, 消去 ②、③、④ 中的 $x_1$. ($B_2$) → ($B_3$) 是保留 ② 中的 $x_2$ 并把它的系数变为 $1$, 然后消去 ③、④ 中的 $x_2$, 在此同时恰好把 $x_3$ 也消去了. ($B_3$) → ($B_4$) 是消去 $x_4$, 在此同时恰好把常数也消去了, 得到恒等式 $0$=$0$（若常数项不能消去, 就将得到矛盾方程 $0$=$1$, 则说明方程组无解）. 至此消元完毕.

($B_4$) 是 $4$ 个未知数 $3$ 个有效方程的方程组, 应有一个 `自由未知数`, 由于方程组 ($B_4$) 呈现阶梯形, 可把每个台阶的第一个未知数（即 $x_1$, $x_2$, $x_4$）选为 `非自由未知数`, 剩下的 $x_3$ 选为自由未知数. 这样, 就只需用“回代”的方法便能求出解: 由 ③ 得 $x_4$=-$3$; 将 $x_4$=-$3$ 代入 ②, 得 $x_2$=$x_3$+$3$; 以 $x_4$=-$3$, $x_2$=$x_3$+$3$ 代入 ①, 得 $x_1$=$x_3$+$4$. 于是解得

$$
\begin{cases}
  x_1 =          x_3  + 4 , \\
  x_2 =          x_3  + 3 , \\
  x_4 = \phantom{x_3} - 3 ,
\end{cases}
$$

其中 $x_3$ 可任意取值. 或令 $x_3$=$c$, 方程组的解可记作

$$
\boldsymbol{x} =
\begin{pmatrix}
  x_1 \\
  x_2 \\
  x_3 \\
  x_4
\end{pmatrix}
=
\begin{pmatrix}
  c + 4 \\
  c + 3 \\
    c   \\
   -3
\end{pmatrix}
,
$$

即

$$
\boldsymbol{x} = c
\begin{pmatrix}
  1 \\
  1 \\
  1 \\
  0
\end{pmatrix}
+
\begin{pmatrix}
  \phantom{-} 4 \\
  \phantom{-} 3 \\
  \phantom{-} 0 \\
           -  3
\end{pmatrix}
\tag{2}
,
$$

其中 $c$ 为任意常数.

在上述消元的过程中, 始终把方程组看作一个整体, 即不是着眼于某一个方面的变形, 而是着眼于整个方程组变成另一个方程组. 其中用到三种变换, 即: (i) 交换方程次序（$\text{\textcircled{i}}$ 与 $\text{\textcircled{j}}$ 相互替换）; (ii) 以不等于 $0$ 的数乘某个方程（以 $\text{\textcircled{i}}$×$k$ 替换 $\text{\textcircled{i}}$）; (iii) 一个方程加上另一个方程的 $k$ 倍（以 $\text{\textcircled{i}}$+$k \text{\textcircled{j}}$ 替换 $\text{\textcircled{i}}$）. 由于这三种变换都是可逆的, 即

$$
\begin{array}{ll}
  \text{若} (A) \xrightarrow[]{\text{\textcircled{i}} \leftrightarrow \text{\textcircled{j}}} (B) , & \text{则} (B) \xrightarrow[]{\text{\textcircled{i}} \leftrightarrow \text{\textcircled{j}}} (A) ; \\
  \text{若} (A) \xrightarrow[]{\text{\textcircled{i}} \times k} (B) ,                               & \text{则} (B) \xrightarrow[]{\text{\textcircled{i}} \div k} (A) ; \\
  \text{若} (A) \xrightarrow[]{\text{\textcircled{i}} + k \text{\textcircled{j}}} (B) ,             & \text{则} (B) \xrightarrow[]{\text{\textcircled{i}} - k \text{\textcircled{j}}} (A) .
\end{array}
$$

因此变换前的方程组与变换后的方程组是同解的, 这三种变换都是方程组的同解变换, 所以最后求得的解 (2) 是方程组 (1) 的全部解.

在上述变换过程中, 实际上只对方程组的系数和常数进行运算, 未知数并未参与运算. 因此, 如果记方程组 (1) 的增广矩阵为

$$
\boldsymbol{B} = \begin{pmatrix} \boldsymbol{A}, \boldsymbol{b} \end{pmatrix} =
\begin{pmatrix}
  2 &          -  1 &          -  1 & \phantom{-} 1 & 2 \\
  1 & \phantom{-} 1 &          -  2 & \phantom{-} 1 & 4 \\
  4 &          -  6 & \phantom{-} 2 &          -  2 & 4 \\
  3 & \phantom{-} 6 &          -  9 & \phantom{-} 7 & 9
\end{pmatrix}
,
$$

那么上述对方程组的变换完全可以转换为对矩阵 $\boldsymbol{B}$ 的变换. 把方程组的上述三种同解变换移植到矩阵上, 就得到矩阵的三种初等变换.

#### 定义 1

下面三种变换称为矩阵的 `初等行变换`:

(i) 对换两行（对换 $i$, $j$ 两行, 记作 $r_i$↔$r_j$）;

(ii) 以数 $k$≠$0$ 乘某一行中的所有元（第 $i$ 行乘 $k$, 记作 $r_i$×$k$）;

(iii) 把某一行所有元的 $k$ 倍加到另一行对应的元上去（第 $j$ 行的 $k$ 倍加到第 $i$ 行上, 记作 $r_i$+$k r_j$）.

把定义中的“行”换成“列”, 即得矩阵的 `初等列变换` 的定义（所用记号是把 “$r$” 换成 “$c$”）.

矩阵的初等行变换与初等列变换, 统称 `初等变换`.

显然, 三种初等变换都是可逆的, 且其逆变换是同一类型的初等变换; 变换 $r_i$↔$r_j$ 的逆变换就是其本身; 变换 $r_i$×$k$ 的逆变换为 $r_i$×$(\frac{1}{k})$（或记作 $r_i$÷$k$）; 变换 $r_i$+$k r_j$ 的逆变换为 $r_i$+$(-k) r_j$（或记作 $r_i$-$k r_j$）.

#### 等价

如果矩阵 $\boldsymbol{A}$ 经有限次初等行变换变成矩阵 $\boldsymbol{B}$, 就称 `矩阵 A 与 B 行等价`, 记作 $\boldsymbol{A} \stackrel{r}{\sim} \boldsymbol{B}$; 如果矩阵 $\boldsymbol{A}$ 经有限次初等列变换变成矩阵 $\boldsymbol{B}$, 就称 `矩阵 A 与 B 列等价`, 记作 $\boldsymbol{A} \stackrel{c}{\sim} \boldsymbol{B}$; 如果矩阵 $\boldsymbol{A}$ 经有限次初等变换变成矩阵 $\boldsymbol{B}$, 就称 `矩阵 A 与 B 等价`, 记作 $\boldsymbol{A}$∼$\boldsymbol{B}$.

矩阵之间的等价关系有下列性质:

(i) **反身性** $\boldsymbol{A}$∼$\boldsymbol{A}$;

(ii) **对称性** 若 $\boldsymbol{A}$∼$\boldsymbol{B}$, 则 $\boldsymbol{B}$∼$\boldsymbol{A}$;

(iii) **传递性** 若 $\boldsymbol{A}$∼$\boldsymbol{B}$, $\boldsymbol{B}$∼$\boldsymbol{C}$, 则 $\boldsymbol{A}$∼$\boldsymbol{C}$.

下面用矩阵的初等行变换来解 [方程组 (1)](#引例), 其过程可与方程组 (1) 的消元过程一一对照:

$$
\begin{aligned}
  \boldsymbol{B}
    & =
      \begin{pmatrix}
        2 &          -  1 &          -  1 & \phantom{-} 1 & 2 \\
        1 & \phantom{-} 1 &          -  2 & \phantom{-} 1 & 4 \\
        4 &          -  6 & \phantom{-} 2 &          -  2 & 4 \\
        3 & \phantom{-} 6 &          -  9 & \phantom{-} 7 & 9
      \end{pmatrix} \\
    & \mathop{\sim}\limits_{r_3 \div 2}^{r_1 \leftrightarrow r_2}
      \begin{pmatrix}
        1 & \phantom{-} 1 &          -  2 & \phantom{-} 1 & 4 \\
        2 &          -  1 &          -  1 & \phantom{-} 1 & 2 \\
        2 &          -  3 & \phantom{-} 1 &          -  1 & 2 \\
        3 & \phantom{-} 6 &          -  9 & \phantom{-} 7 & 9
      \end{pmatrix}
      = \boldsymbol{B}_1 \\
    & \mathop{\sim}\limits_{r_4 - 3r_1 \atop}^{r_2 - r_3 \atop r_3 - 2r_1}
      \begin{pmatrix}
        1 & \phantom{-} 1 &          -  2 & \phantom{-} 1 & \phantom{-} 4 \\
        0 & \phantom{-} 2 &          -  2 & \phantom{-} 2 & \phantom{-} 0 \\
        0 &          -  5 & \phantom{-} 5 &          -  3 &          -  6 \\
        3 & \phantom{-} 6 &          -  9 & \phantom{-} 7 & \phantom{-} 9
      \end{pmatrix}
      = \boldsymbol{B}_2 \\
    & \mathop{\sim}\limits_{r_4 - 3r_2 \atop}^{r_2 \div 2 \atop r_3 + 5r_2}
      \begin{pmatrix}
        1 & 1 &          -  2 & 1 & \phantom{-} 4 \\
        0 & 1 &          -  1 & 1 & \phantom{-} 0 \\
        0 & 0 & \phantom{-} 0 & 2 &          -  6 \\
        0 & 0 & \phantom{-} 0 & 1 &          -  3
      \end{pmatrix}
      = \boldsymbol{B}_3 \\
    & \mathop{\sim}\limits_{r_4 - 2r_3}^{r_3 \leftrightarrow r_4}
      \begin{pmatrix}
        1 & 1 &          -  2 & 1 & \phantom{-} 4 \\
        0 & 1 &          -  1 & 1 & \phantom{-} 0 \\
        0 & 0 & \phantom{-} 0 & 1 &          -  3 \\
        0 & 0 & \phantom{-} 0 & 0 & \phantom{-} 0
      \end{pmatrix}
      = \boldsymbol{B}_4 .
\end{aligned}
$$

由方程组 ($B_4$) 得到解 (2) 的回代过程, 也可用矩阵的初等行变换来完成, 即

$$
\boldsymbol{B}_4 \mathop{\sim}\limits_{r_2 - r_3}^{r_1 - r_2}
\begin{pmatrix}
  1 & 0 &          -  1 & 0 & \phantom{-} 4 \\
  0 & 1 &          -  1 & 0 & \phantom{-} 3 \\
  0 & 0 & \phantom{-} 0 & 1 &          -  3 \\
  0 & 0 & \phantom{-} 0 & 0 & \phantom{-} 0
\end{pmatrix}
= \boldsymbol{B}_5 ,
$$

$\boldsymbol{B}_5$ 对应方程组

$$
\begin{cases}
  x_1          - x_3  = \phantom{-} 4 , \\
  x_2          - x_3  = \phantom{-} 3 , \\
  x_4 \phantom{- x_3} =          -  3 ,
\end{cases}
$$

取 $x_3$ 为自由未知数, 并令 $x_3$=$c$, 即得

$$
\boldsymbol{x} =
\begin{pmatrix}
  x_1 \\
  x_2 \\
  x_3 \\
  x_4
\end{pmatrix}
=
\begin{pmatrix}
  c + 4 \\
  c + 3 \\
    c   \\
   -3
\end{pmatrix}
= c
\begin{pmatrix}
  1 \\
  1 \\
  1 \\
  0
\end{pmatrix}
+
\begin{pmatrix}
  \phantom{-} 4 \\
  \phantom{-} 3 \\
  \phantom{-} 0 \\
           -  3
\end{pmatrix}
\tag{2}
,
$$

其中 $c$ 为任意常数.

矩阵 $\boldsymbol{B}_4$ 和 $\boldsymbol{B}_5$ 的特点是: 都可画出一条从第一行某元左方的竖线开始到最后一列某元下方的横线结束的阶梯线, 它的左下方的元素全为 $0$; 每段竖线的高度为一行, 竖线的右方的第一个元为非零元, 称为该非零行的 `首非零元`. 具有这样特点的矩阵称为 `行阶梯形矩阵`.

#### 定义 2

（1）非零矩阵若满足 (i) 非零行在零行的上面; (ii) 非零行的首非零元所在列在上一行（如果存在的话）的首非零元所在列的右面, 则称此矩阵为 `行阶梯形矩阵`;

（2）进一步, 若 $\boldsymbol{A}$ 是行阶梯矩阵, 并且还满足: (i) 非零行的首非零元为 $1$; (ii) 首非零元所在的列的其他元均为 $0$, 则称 $\boldsymbol{A}$ 为 `行最简形矩阵`.

于是 $\boldsymbol{B}_4$ 和 $\boldsymbol{B}_5$ 都是行阶梯矩阵, 且 $\boldsymbol{B}_5$ 还是行最简形矩阵.

用归纳法不难证明（这里不证）: 对于任何非零矩阵 $\boldsymbol{A}_{m \times n}$, 总可经有限次初等行变换把它变为行阶梯形矩阵和行最简形矩阵.

利用初等行变换, 把一个矩阵化为行阶梯形矩阵和行最简形矩阵, 是一种很重要的运算. 由 [引例](#引例) 可知, 要解线性方程组只需把增广矩阵化为行最简形矩阵.

由行最简形矩阵 $\boldsymbol{B}_5$, 即可写出方程组的解 (2); 反之, 由方程组的解 (2) 也可写出矩阵 $\boldsymbol{B}_5$. 由此可猜想到一个矩阵的行最简形矩阵是惟一确定的（行阶梯形矩阵中非零行的行数也是惟一确定的）.

#### 标准形

对行最简形矩阵再施以初等列变换, 可编程一种形状更简单的矩阵, 称为 `标准形`.

::: details 例如
$$
\boldsymbol{B}_5 =
\begin{pmatrix}
  1 & 0 &          -  1 & 0 & \phantom{-} 4 \\
  0 & 1 &          -  1 & 0 &             3 \\
  0 & 0 & \phantom{-} 0 & 1 &          -  3 \\
  0 & 0 &             0 & 0 &             0
\end{pmatrix}
\mathop{\sim}\limits_{c_5 - 4c_1 - 3c_2 + 3c_3 \atop}^{c_3 \leftrightarrow c_4 \atop c_4 + c_1 + c_2}
\begin{pmatrix}
  1 & 0 & 0 & 0 & 0 \\
  0 & 1 & 0 & 0 & 0 \\
  0 & 0 & 1 & 0 & 0 \\
  0 & 0 & 0 & 0 & 0
\end{pmatrix}
= \boldsymbol{F} ,
$$

矩阵 $\boldsymbol{F}$ 称为矩阵 $\boldsymbol{B}$ 的标准形, 其特点是: $\boldsymbol{F}$ 的左上角是一个单位矩阵, 其余元全为 $0$.
:::

对于 $m$×$n$ 矩阵 $\boldsymbol{A}$, 总可经过初等变换（行变换或列变换）把它化为标准形

$$
\boldsymbol{F} =
\begin{pmatrix}
  \boldsymbol{E}_r & \boldsymbol{O} \\
   \boldsymbol{O}  & \boldsymbol{O}
\end{pmatrix}_{m \times n}
,
$$

此标准形由 $m$, $n$, $r$ 三个数完全确定, 其中 $r$ 就是行阶梯形矩阵中非零行的行数. 所有与 $\boldsymbol{A}$ 等价的矩阵组成一个集合, 标准形 $\boldsymbol{F}$ 是这个集合中形状最简单的矩阵.

#### 定理 1

**设 $\boldsymbol{A}$ 与 $\boldsymbol{B}$ 为 $m$×$n$ 矩阵, 那么**

(i) **$\boldsymbol{A} \stackrel{r}{\sim} \boldsymbol{B}$ 的充分必要条件是存在 $m$ 阶可逆矩阵 $\boldsymbol{P}$, 使 $\boldsymbol{PA}$=$\boldsymbol{B}$;**

(ii) **$\boldsymbol{A} \stackrel{c}{\sim} \boldsymbol{B}$ 的充分必要条件是存在 $n$ 阶可逆矩阵 $\boldsymbol{Q}$, 使 $\boldsymbol{AQ}$=$\boldsymbol{B}$;**

(iii) **$\boldsymbol{A}$∼$\boldsymbol{B}$ 的充分必要条件是存在 $m$ 阶可逆矩阵 $\boldsymbol{P}$ 及 $n$ 阶可逆矩阵 $\boldsymbol{Q}$, 使 $\boldsymbol{PAQ}$=$\boldsymbol{B}$.**

为证明定理 1, 我们引进初等矩阵的知识.

#### 定义 3

由单位矩阵 $\boldsymbol{E}$ 经过一次初等变换得到的矩阵称为 `初等矩阵`.

三种初等变换对应有三种初等矩阵.

(i) 把单位矩阵中第 $i$, $j$ 两行对换（或第 $i$, $j$ 两列对换）, 得初等矩阵

$$
\boldsymbol{E}(i, j) =
\begin{pmatrix}
  1 &        &   &        &   &        &   &        &   &        &   \\
    & \ddots &   &        &   &        &   &        &   &        &   \\
    &        & 1 &        &   &        &   &        &   &        &   \\
    &        &   &   0    &   & \cdots &   &   1    &   &        &   \\
    &        &   &        & 1 &        &   &        &   &        &   \\
    &        &   & \vdots &   & \ddots &   & \vdots &   &        &   \\
    &        &   &        &   &        & 1 &        &   &        &   \\
    &        &   &   1    &   & \cdots &   &   0    &   &        &   \\
    &        &   &        &   &        &   &        & 1 &        &   \\
    &        &   &        &   &        &   &        &   & \ddots &   \\
    &        &   &        &   &        &   &        &   &        & 1
\end{pmatrix}
\begin{matrix}
             \phantom{1}           \\
          \phantom{\ddots}         \\
             \phantom{1}           \\
  \leftarrow \text{第i行} \\
             \phantom{1}           \\
          \phantom{\vdots}         \\
             \phantom{1}           \\
  \leftarrow \text{第j行} \\
             \phantom{1}           \\
          \phantom{\ddots}         \\
             \phantom{1}
\end{matrix}
,
$$

用 $m$ 阶初等矩阵 $\boldsymbol{E}_m(i,j)$ 左乘矩阵 $\boldsymbol{A}$=$\begin{pmatrix} a_{ij} \end{pmatrix}_{m \times n}$, 得

$$
\boldsymbol{E}_m (i, j) \boldsymbol{A} =
\boldsymbol{E}(i, j) =
\begin{pmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  \vdots & \vdots &        & \vdots \\
  a_{j1} & a_{j2} & \cdots & a_{jn} \\
  \vdots & \vdots &        & \vdots \\
  a_{i1} & a_{i2} & \cdots & a_{in} \\
  \vdots & \vdots &        & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
\begin{matrix}
     \phantom{a_{11}}     \\
     \phantom{\vdots}     \\
  \leftarrow \text{第i行} \\
     \phantom{\vdots}     \\
  \leftarrow \text{第j行} \\
     \phantom{\vdots}     \\
     \phantom{a_{m1}}
\end{matrix}
.
$$

其结果相当于对矩阵 $\boldsymbol{A}$ 施行第一种初等行变换: 把 $\boldsymbol{A}$ 的第 $i$ 行与第 $j$ 行对换（$r_i$↔$r_j$）. 类似地, 以 $n$ 阶初等矩阵 $\boldsymbol{E}_n(i,j)$ 右乘 $\boldsymbol{A}$, 其结果相当于对矩阵 $\boldsymbol{A}$ 施行第一种初等列变换: 把 $\boldsymbol{A}$ 的第 $i$ 列与第 $j$ 列对换（$c_i$↔$c_j$）.

(ii) 以数 $k$≠$0$ 乘单位矩阵的第 $i$ 行（或第 $i$ 列）, 得初等矩阵

$$
\boldsymbol{E}(i(k)) =
\begin{pmatrix}
  1 &        &   &   &   &        &   \\
    & \ddots &   &   &   &        &   \\
    &        & 1 &   &   &        &   \\
    &        &   & k &   &        &   \\
    &        &   &   & 1 &        &   \\
    &        &   &   &   & \ddots &   \\
    &        &   &   &   &        & 1
\end{pmatrix}
\leftarrow \text{第i行} ,
$$

可以验知: 以 $\boldsymbol{E}(i(k))$ 左乘矩阵 $\boldsymbol{A}$, 其结果相当于以数 $k$ 乘 $\boldsymbol{A}$ 的第 $i$ 行（$r_i$×$k$）; 以 $\boldsymbol{E}(i(k))$ 右乘矩阵 $\boldsymbol{A}$, 其结果相当于以数 $k$ 乘 $\boldsymbol{A}$ 的第 $i$ 列（$c_i$×$k$）.

(iii) 以 $k$ 乘单位矩阵的第 $j$ 行加到第 $i$ 行上或以 $k$ 乘单位矩阵的第 $i$ 列加到第 $j$ 列上, 得初等矩阵

$$
\boldsymbol{E}(ij(k)) =
\begin{pmatrix}
  1 &        &   &        &        &        &   \\
    & \ddots &   &        &        &        &   \\
    &        & 1 & \cdots &   k    &        &   \\
    &        &   & \ddots & \vdots &        &   \\
    &        &   &        &   1    &        &   \\
    &        &   &        &        & \ddots &   \\
    &        &   &        &        &        & 1
\end{pmatrix}
\begin{matrix}
       \phantom{1}       \\
     \phantom{\ddots}    \\
  \leftarrow \text{第i行} \\
     \phantom{\vdots}    \\
  \leftarrow \text{第j行} \\
     \phantom{\ddots}    \\
       \phantom{1}
\end{matrix}
.
$$

可以验知: 以 $\boldsymbol{E}(ij(k))$ 左乘矩阵 $\boldsymbol{A}$, 其结果相当于把 $\boldsymbol{A}$ 的第 $j$ 行乘 $k$ 加到第 $i$ 行上（$r_i$+$kr_j$）; 以 $\boldsymbol{E}(ij(k))$ 右乘矩阵 $\boldsymbol{A}$, 其结果相当于把 $\boldsymbol{A}$ 的第 $i$ 列乘 $k$ 加到第 $j$ 列上（$c_j$×$kc_i$）.

归纳上面的讨论, 可得

#### 性质 1

**设 $\boldsymbol{A}$ 是一个 $m$×$n$ 矩阵, 对 $\boldsymbol{A}$ 施行一次初等行变换, 相当于在 $\boldsymbol{A}$ 的左边乘相应的 $m$ 阶初等矩阵; 对 $\boldsymbol{A}$ 施行一次初等列变换, 相当于在 $\boldsymbol{A}$ 的右边乘相应的 $n$ 阶初等矩阵.**
