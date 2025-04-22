# $$\text{Minimum Vertex Deletion Bipartite Subgraph}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a subset of the vertices of size at most $c$, removing which would result in a bipartite graph.

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
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each edge $e_i = (v_j, v_k)$ in $E$, if at least one of $j$ and $k$ is in $y$, then remove $e_i$ from $E$.
  - For each integer $i$ in $y$, remove $v_i$ from $V$.
  - Perform depth first search on the graph and check that it is bipartite.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Clique](Clique.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = n^{\prime} - c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add the vertices $v_i, v_{n^{\prime}+i}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of distinct vertices $v_j$ and $v_k$ in $V$, if $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ is not an edge in $E^{\prime}$ and not both $j$ and $k$ are greater than $n^{\prime}$, then add an edge $\lbrace v_j, v_k \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
