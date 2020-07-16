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
