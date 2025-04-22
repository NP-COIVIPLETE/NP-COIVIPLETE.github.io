# $$\text{Triangle Free Subset}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a subset of the vertices of size $c$ which does not have a cycle with three vertices.

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
  - For each group of three integers $i$, $j$, $k$ with $i \neq j \neq k$ in $y$, check that the edges $\lbrace v_i, v_j \rbrace$, $\lbrace v_j, v_k \rbrace$, $\lbrace v_k, v_i \rbrace$ are not all in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Independent Set](Independent-Set.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = m^{\prime}+c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime} = \lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a vertex $u_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace u_i, v_j \rbrace, \lbrace u_i, v_k \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
