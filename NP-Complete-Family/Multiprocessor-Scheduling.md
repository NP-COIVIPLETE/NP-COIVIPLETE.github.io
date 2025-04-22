# $$\text{Multiprocessor Scheduling}$$

<br>

## Description

A positive integer $m$, a positive integer $c$, and a set of positive integers, such that there exists a partition of the set into $m$ subsets where the maximum of their sums equals $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $m$.
    - A positive integer $c$.
    - A set of positive integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
  - Interpret $y$ as the following:
    - Disjoint sets of positive integers.
  - Check that there are exactly $m$ sets and a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is also in $A$.
  - Find the sum of each set in $y$.
  - Check that the maximum of the sums is exactly $c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Double Processor Scheduling](Double-Processor-Scheduling.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $m = 2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each integer in $A^{\prime}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
