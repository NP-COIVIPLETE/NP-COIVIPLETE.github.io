# $$\text{Graph Four Colorability}$$

<br>

## Description

An undirected graph, such that there exists a partition of the vertices into four sets where no edge has both of its endpoints in the same set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - Four disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each edge $\lbrace v_j, v_k \rbrace$ in $E$, check that not both of $j$ and $k$ are in the same set in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Graph Three Colorability](Graph-Three-Colorability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add a vertex $u$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i$, add an edge $\lbrace u, v_i \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
