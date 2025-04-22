# $$\text{Set Cover}$$

<br>

## Description

A positive integer $c$, a set of integers, and a set of subsets of that set, such that there exists $c$ of those subsets whose union is the set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
    - A set of subsets $S_1, S_2, ..., S_m \subseteq A$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Initialize a set $B$. For each integer $j$ in $y$, check that $j$ is between $1$ and $m$ inclusive and add all integers in $S_j$ to $B$.
  - Check that $A = B$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime}$ in $E^{\prime}$, add an integer $i$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_j^{\prime}$ in $V^{\prime}$, add a set $S_j$ to $T_{L^{\prime}L}(x^{\prime})$, and for each edge $e_k^{\prime}$ incident on $v_j^{\prime}$, add an integer $k$ to $S_j$.
