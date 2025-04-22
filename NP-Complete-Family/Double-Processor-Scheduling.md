# $$\text{Double Processor Scheduling}$$

<br>

## Description

A positive integer $c$ and a set of positive integers, such that there exists a partition of the set into two subsets where the greater of their sums equals $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of positive integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
  - Interpret $y$ as the following:
    - Two disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is also in $A$.
  - Find the sum of each set in $y$.
  - Check that the greater of the sums is exactly $c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Partition](Partition.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $$c = \lfloor \frac{1}{2} \sum_{i=1}^{n^{\prime}} a_i^{\prime} \rfloor$$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each integer in $A^{\prime}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
