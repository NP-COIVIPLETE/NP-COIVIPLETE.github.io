# $$\text{Exact Cover By Triples}$$

<br>

## Description

A positive integer $c$, a set of integers of size $3c$, and a set of three-element subsets of that set, such that there exists $c$ of those subsets whose union is the set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of integers $A = \lbrace a_1, a_2, ..., a_{3c} \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_n \subseteq A$ where $\vert{S_i}\vert = 3$ for each $i$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Initialize a set $B$. For each integer $i$ in $y$, check that $i$ is between $1$ and $n$ inclusive and add all integers in $S_i$ to $B$.
  - Check that $A = B$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Three Dimensional Matching](Three-Dimensional-Matching.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $A = \lbrace 1, 2, ..., 3c \rbrace$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each threesome $m_i^{\prime} = (p_{1,j_1}^{\prime}, p_{2,j_2}^{\prime}, p_{3,j_3}^{\prime})$ in $M^{\prime}$, add a subset $S_i = \lbrace j_1, c+j_2, 2c+j_3 \rbrace$ to $T_{L^{\prime}L}(x^{\prime})$.
