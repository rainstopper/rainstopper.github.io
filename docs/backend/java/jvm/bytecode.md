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

### 方法调用

* **invokestatic**：用来调用某个类的静态方法，这是方法调用指令中最快的一个；
* **invokespecial**：用来调用构造函数，但也可以用于调用同一个类中的 private 方法，以及可见的超类方法；
* **invokevirtual**：如果是具体类型的目标对象，用于调用公共、受保护和 package 级的私有方法；
* **invokeinterface**：通过接口引用来调用方法；
* **invokedynamic**：JDK7 新增加的指令，是实现“动态类型语言”（Dynamically Typed Language）支持而进行的升级改造，同时也是 JDK8 以后支持 Lambda 表达式的实现基础。