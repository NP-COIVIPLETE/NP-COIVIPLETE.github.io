# $$\text{Minimum Test Collection}$$

<br>

## Description

A positive integer $c$, a set of objects, and a set of subsets of that set, such that there exists $c$ of those subsets one of which contains exactly one object for each pair of distinct objects in the set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of objects $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_m \subseteq A$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $m$ inclusive.
  - For each pair of distinct objects $a_i$ and $a_j$ in $A$, check that there exists an integer $k$ in $y$, such that $\vert{\lbrace a_i, a_j \rbrace \cap S_k}\vert = 1$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Three Dimensional Matching](Three-Dimensional-Matching.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}+2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each person in $P_1^{\prime}$, $P_2^{\prime}$, and $P_3^{\prime}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add the objects $p_{1,0}, p_{2,0}, p_{3,0}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each threesome $m_i^{\prime}$ in $M^{\prime}$, add a set $S_i$ to $T_{L^{\prime}L}(x^{\prime})$ containing the same people.
  - Add the sets $S_{n^{\prime}+1} = P_1^{\prime} \cup \lbrace p_{1,0} \rbrace, S_{n^{\prime}+2} = P_2^{\prime} \cup \lbrace p_{2,0} \rbrace$ to $T_{L^{\prime}L}(x^{\prime})$.
