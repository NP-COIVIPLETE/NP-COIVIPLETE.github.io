# $$\text{Exact Cover}$$

<br>

## Description

A set of integers and a set of subsets of that set, such that there exists some of those subsets that are disjoint and whose union is the set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_m \subseteq A$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Initialize a set $B$ and an integer $c$ to $0$. For each integer $j$ in $y$, check that $j$ is between $1$ and $m$ inclusive, add all integers in $S_j$ to $B$, and increase $c$ by $\vert{S_j}\vert$.
  - Check that $A = B$ and $\vert{A}\vert = c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Cover By Triples](Exact-Cover-By-Triples.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each integer in $A^{\prime}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each subset in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
