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
  2 x_1 -   x_2 -   x_3 +   x_4 = 2 , & \ding{172} \\
    x_1 +   x_2 - 2 x_3 +   x_4 = 4 , & ② \\
  4 x_1 - 6 x_2 + 2 x_3 - 2 x_4 = 4 , & ③ \\
  3 x_1 + 6 x_2 - 9 x_3 + 7 x_4 = 9 . & ④
\end{cases}
\tag{1}
$$

::: details 解
$$
\begin{aligned}
  (1)
    & \xrightarrow[③ \div 2]{① \leftrightarrow ②}
      \begin{cases}
          x_1 +   x_2 - 2 x_3 +   x_4 = 4 , & ① \\
        2 x_1 -   x_2 -   x_3 +   x_4 = 2 , & ② \\
        2 x_1 - 3 x_2 +   x_3 -   x_4 = 2 , & ③ \\
        3 x_1 + 6 x_2 - 9 x_3 + 7 x_4 = 9   & ④
      \end{cases}
\end{aligned}
\tag{$B_1$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[④ - 3①]{\stackrel{② - ③}{③ - 2①}}
      \begin{cases}
        x_1 +   x_2 - 2 x_3 +   x_4 =  4 , & ① \\
              2 x_2 - 2 x_3 + 2 x_4 =  0 , & ② \\
            - 5 x_2 + 5 x_3 - 3 x_4 = -6 , & ③ \\
              3 x_2 - 3 x_3 + 4 x_4 = -3   & ④
      \end{cases}
\end{aligned}
\tag{$B_2$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[\stackrel{③ + 5②}{④ - 3②}]{② \div 2}
      \begin{cases}
        x_1 + x_2 - 2 x_3 +   x_4 =  4 , & ① \\
              x_2 -   x_3 +   x_4 =  0 , & ② \\
                            2 x_4 = -6 , & ③ \\
                              x_4 = -3   & ④
      \end{cases}
\end{aligned}
\tag{$B_3$}
$$

$$
\begin{aligned}
  \phantom{(1)}
    & \xrightarrow[④ - 2③]{③ \leftrightarrow ④}
      \begin{cases}
        x_1 + x_2 - 2 x_3 + x_4 =  4 , & ① \\
              x_2 -   x_3 + x_4 =  0 , & ② \\
                            x_4 = -3 , & ③ \\
                              0 =  0 . & ④
      \end{cases}
\end{aligned}
\tag{$B_4$}
$$
:::
