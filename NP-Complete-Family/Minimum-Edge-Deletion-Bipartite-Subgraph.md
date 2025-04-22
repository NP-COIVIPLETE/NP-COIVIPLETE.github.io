# $$\text{Minimum Edge Deletion Bipartite Subgraph}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a subset of the edges of size at most $c$, removing which would result in a bipartite graph.

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
  - Check that there are at most $c$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $m$ inclusive.
  - For each integer $i$ in $y$, remove $e_i$ from $E$.
  - Perform depth first search on the graph and check that it is bipartite.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Maximum Cut](Maximum-Cut.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = n^{\prime} - c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
