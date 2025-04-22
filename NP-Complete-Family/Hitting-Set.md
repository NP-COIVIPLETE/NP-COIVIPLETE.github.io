# $$\text{Hitting Set}$$

<br>

## Description

A positive integer $c$, a set of integers, and a set of subsets of that set, such that there exists a subset of that set of size $c$ that contains at least one element from each of the other subsets.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_m \subseteq A$.
  - Interpret $y$ as the following:
    - A set of integers.
  - Check that there are exactly $c$ integers in $y$.
  - Check that each integer in $y$ is also in $A$.
  - For each $i$ from $1$ to $m$, check that at least one element of $S_i$ is in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $A = \lbrace 1, 2, ..., n^{\prime} \rbrace$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime} = \lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a subset $S_i = \lbrace j, k \rbrace$ to $T_{L^{\prime}L}(x^{\prime})$.
