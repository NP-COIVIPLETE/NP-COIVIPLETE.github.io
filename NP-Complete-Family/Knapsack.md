# $$\text{Knapsack}$$

<br>

## Description

A positive integer $v$, a positive integer $w$, and a set of items with positive integer values and weights, such that there exists a subset where the sum of its values is at least $v$ and the sum of its weights is at most $w$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $v$.
    - A positive integer $w$.
    - A set of two dimensional positive integer tuples $A = \lbrace (v_1, w_1), (v_2, w_2), ..., (v_n, w_n) \rbrace$.
  - Interpret $y$ as the following:
    - A set of two dimensional positive integer tuples.
  - Check that each tuple in $y$ is also in $A$.
  - Check that the sum of the values in $y$ is at least $v$.
  - Check that the sum of the weights in $y$ is at most $w$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Partition](Partition.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $$v = \lceil \frac{1}{2} \sum_{i=1}^{n^{\prime}} a_i^{\prime} \rceil$$ and $$w = \lfloor \frac{1}{2} \sum_{i=1}^{n^{\prime}} a_i^{\prime} \rfloor$$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each integer $a_i^{\prime}$ in $A^{\prime}$, add a tuple $(a_i^{\prime}, a_i^{\prime})$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
