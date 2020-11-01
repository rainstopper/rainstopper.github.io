---
  title: 字节码
---

## 指令

### 算数运算

|            | **add +** | **subtract -** | **multiple \*** | **divide /** | **remainder %** | **negate -()** |
| ---------- | :-------: | :------------: | :-------------: | :----------: | :-------------: | :------------: |
| **int**    |   iadd    |      isub      |      imul       |     idiv     |      irem       |      ineg      |
| **long**   |   ladd    |      lsub      |      lmul       |     ldiv     |      lrem       |      lneg      |
| **float**  |   fadd    |      fsub      |      fmul       |     fdiv     |      frem       |      fneg      |
| **double** |   dadd    |      dsub      |      dmul       |     ddiv     |      drem       |      dneg      |

在字节码中，算数运算只涉及上述四种类型；除此之外的 boolean、byte、char、short 等数据类型会使用 int 进行运算。

### 类型转换

|            | **int** | **long** | **float** | **double** | **byte** | **char** | **short** |
| ---------- | :-----: | :------: | :-------: | :--------: | :------: | :------: | :-------: |
| **int**    |    -    |   i2l    |    i2f    |    i2d     |   i2b    |   i2c    |    i2s    |
| **long**   |   l2i   |    -     |    l2f    |    l2d     |    -     |    -     |     -     |
| **float**  |   f2i   |   f2l    |     -     |    f2d     |    -     |    -     |     -     |
| **double** |   d2i   |   d2l    |    d2f    |     -      |    -     |    -     |     -     |
