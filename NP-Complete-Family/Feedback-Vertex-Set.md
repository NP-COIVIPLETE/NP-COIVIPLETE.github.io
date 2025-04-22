# $$\text{Feedback Vertex Set}$$

<br>

## Description

A positive integer $c$ and a directed graph, such that there exists a subset of the vertices of size $c$, removing which would result in an acyclic graph.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = (v_j, v_k)$ for some $j$ and $k$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each edge $e_i = (v_j, v_k)$ in $E$, if at least one of $j$ and $k$ is in $y$, then remove $e_i$ from $E$.
  - For each integer $i$ in $y$, remove $v_i$ from $V$.
  - Perform a topological sort on the graph and check that it has no cycles.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add the edges $(v_j, v_k), (v_k, v_j)$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
