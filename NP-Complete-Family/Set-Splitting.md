# $$\text{Set Splitting}$$

<br>

## Description

A set of integers and a set of subsets of that set, such that there exists a partition of the set into two subsets that do not contain all elements from any of the other subsets.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_m \subseteq A$.
  - Interpret $y$ as the following:
    - Two disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is also in $A$.
  - For each $i$ from $1$ to $m$, check that there are two elements in $S_i$ that are from different sets in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add an integer $0$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$, add the integers $i, -i$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$ and a subset $S_i = \lbrace i, -i \rbrace$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$ containing literals corresponding to the integers $a, b, c$, add a subset $S_{n^{\prime}+j} = \lbrace a, b, c, 0 \rbrace$ to $T_{L^{\prime}L}(x^{\prime})$.
