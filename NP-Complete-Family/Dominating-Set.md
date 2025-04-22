# $$\text{Dominating Set}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a subset of the vertices of size $c$ where every vertex is either in this set or adjacent to a vertex in this set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each vertex $v_j$ in $V$, check that either $j$ is in $y$ or there exists an edge $\lbrace v_j, v_k \rbrace$ in $E$ such that $k$ is in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_j^{\prime}$ in $V^{\prime}$, if there exists an edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$ for some $v_k^{\prime}$, then add a vertex $v_j$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime} = \lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a vertex $u_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace v_j, v_k \rbrace, \lbrace u_i, v_j \rbrace, \lbrace u_i, v_k \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
