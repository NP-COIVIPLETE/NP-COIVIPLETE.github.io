# $$\text{Two Dimensional Rectangle Cover}$$

<br>

## Description

Positive integers $l$ and $w$ and a list of rectangular tiles of integer dimensions, such that there exists a way to arrange these tiles with flexible orientations to make them perfectly fit in a rectangle of length $l$ and width $w$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $l$.
    - A positive integer $w$.
    - A list of positive integer tuples $(l_1, w_1), (l_2, w_2), ..., (l_n, w_n)$.
  - Interpret $y$ as the following:
    - A list of distinct two dimensional integer tuples.
    - A list of boolean values.
  - Check that there are exactly $n$ tuples and $n$ boolean values in $y$.
  - Initialize a set $C = \lbrace (0, 0), (l, 0), (0, w), (l, w) \rbrace$, storing coordinate tuples of the corners of the current region to be filled.
  - For exactly $n$ times:
    - Check that $C$ is not empty and pop from $C$ a coordinate tuple $(p_i, q_i)$ of a bottom-left corner of the current region.
    - Search for $(p_i, q_i)$ in $y$ and check that it exists.
    - Determine the coordinate tuples of the three potential new corners of the current region based on the dimensions and orientation of the $i$-th tile after placing it at $(p_i, q_i)$.
      - If the $i$-th boolean value in $y$ is $0$, then consider $(p_i+l_i, q_i), (p_i, q_i+w_i), (p_i+l_i, q_i+w_i)$.
      - If the $i$-th boolean value in $y$ is $1$, then consider $(p_i+w_i, q_i), (p_i, q_i+l_i), (p_i+w_i, q_i+l_i)$.
    - For each potential new corner, check that it does not overflow the current region and update $C$.
      - If the exact same corner already exists in $C$, then remove it from $C$.
      - If it's a new corner, then add it to $C$.
  - Check that $C$ is empty.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Partition](Partition.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Define $$s = \sum_{i=1}^{n^{\prime}} a_i^{\prime}$$
  - Let $l = 2s$ and $w = \lfloor \frac{1}{2}s \rfloor$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each integer $a_i^{\prime}$ in $A^{\prime}$, add a tuple $(s, a_i^{\prime})$ to $T_{L^{\prime}L}(x^{\prime})$.
