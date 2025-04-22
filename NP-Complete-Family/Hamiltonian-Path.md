# $$\text{Hamiltonian Path}$$

<br>

## Description

An undirected graph, such that there exists a simple path that includes every vertex.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that there are exactly $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each pair of adjacent integers $j$ and $k$ in $y$, check that the edge $\lbrace v_j, v_k \rbrace$ is in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Cycle](Hamiltonian-Cycle.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add the vertices $s, t, v_{n^{\prime}+1}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace s, v_1 \rbrace, \lbrace v_{n^{\prime}+1}, t \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_1^{\prime}, v_i^{\prime} \rbrace$ in $E^{\prime}$, add an edge $\lbrace v_{n^{\prime}+1}, v_i \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
