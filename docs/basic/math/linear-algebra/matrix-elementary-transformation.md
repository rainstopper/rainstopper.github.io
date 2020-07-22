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

($B_4$) 是 $4$ 个未知数 $3$ 个有效方程的方程组, 应有一个自由未知数, 由于方程组 ($B_4$) 呈现阶梯形, 可把每个台阶的第一个未知数（即 $x_1$, $x_2$, $x_4$）选为非自由未知数, 剩下的 $x_3$ 选为自由未知数. 这样, 就只需用“回代”的方法便能求出解: 由 ③ 得 $x_4$=-$3$; 将 $x_4$=-$3$ 代入 ②, 得 $x_2$=$x_3$+$3$; 以 $x_4$=-$3$, $x_2$=$x_3$+$3$ 代入 ①, 得 $x_1$=$x_3$+$4$. 于是解得

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
   4 \\
   3 \\
   0 \\
  -3
\end{pmatrix}
\tag{2}
,
$$

其中 $c$ 为任意常数.

在上述消元的过程中, 始终把方程组看作一个整体, 即不是着眼于某一个方面的变形, 而是着眼于整个方程组变成另一个方程组. 其中用到三种变换, 即: (i) 交换方程次序（$\text{\textcircled{i}}$ 与 $\text{\textcircled{j}}$ 相互替换）; (ii) 以不等于 $0$ 的数乘某个方程（以 $\text{\textcircled{i}}$×$k$ 替换 $\text{\textcircled{i}}$）; (iii) 一个方程加上另一个方程的 $k$ 倍（以 $\text{\textcircled{i}}$+$k \text{\textcircled{j}}$ 替换 $\text{\textcircled{i}}$）. 由于这三种变换都是可逆的, 即

$$
\begin{aligned}
  \text{若} (A) \xrightarrow[]{\text{\textcircled{i}} \leftrightarrow \text{\textcircled{j}}} (B) , & \text{则} (B) \xrightarrow[]{\text{\textcircled{i}} \leftrightarrow \text{\textcircled{j}}} (A) ; \\
  \text{若} (A) \xrightarrow[]{\text{\textcircled{i}} \times k} (B) ,                               & \text{则} (B) \xrightarrow[]{\text{\textcircled{i}} \div k} (A) ; \\
\end{aligned}
$$
