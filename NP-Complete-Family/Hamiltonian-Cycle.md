# $$\text{Hamiltonian Cycle}$$

<br>

## Description

An undirected graph, such that there exists a simple cycle that includes every vertex.

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
  - Let the first integer in $y$ be $k$ and the last integer in $y$ be $j$. Check that the edge $\lbrace v_j, v_k \rbrace$ is in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - For each $l$ from $1$ to $c^{\prime}$, add a vertex $v_l$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add the vertices $$v_{j,k,1}, v_{j,k,2}, v_{j,k,3}, v_{j,k,4}, v_{j,k,5}, v_{j,k,6},$$ $$v_{k,j,1}, v_{k,j,2}, v_{k,j,3}, v_{k,j,4}, v_{k,j,5}, v_{k,j,6}$$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $$\lbrace v_{j,k,1}, v_{j,k,2} \rbrace, \lbrace v_{j,k,2}, v_{j,k,3} \rbrace, \lbrace v_{j,k,3}, v_{j,k,4} \rbrace, \lbrace v_{j,k,4}, v_{j,k,5} \rbrace, \lbrace v_{j,k,5}, v_{j,k,6} \rbrace,$$ $$\lbrace v_{k,j,1}, v_{k,j,2} \rbrace, \lbrace v_{k,j,2}, v_{k,j,3} \rbrace, \lbrace v_{k,j,3}, v_{k,j,4} \rbrace, \lbrace v_{k,j,4}, v_{k,j,5} \rbrace, \lbrace v_{k,j,5}, v_{k,j,6} \rbrace,$$ $$\lbrace v_{j,k,1}, v_{k,j,3} \rbrace, \lbrace v_{j,k,3}, v_{k,j,1} \rbrace, \lbrace v_{j,k,4}, v_{k,j,6} \rbrace, \lbrace v_{j,k,6}, v_{k,j,4} \rbrace$$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, put all of its neighbouring vertices in a list $V_i^{\prime}$.
    - For each pair of (array-position-wise) adjacent vertices $v_j^{\prime}$ and $v_k^{\prime}$ in $V_i^{\prime}$ with $v_j^{\prime}$ coming before $v_k^{\prime}$, add an edge $\lbrace v_{i,j,6}, v_{i,k,1} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Let the first vertex in $V_i^{\prime}$ be $v_j^{\prime}$ and the last vertex in $V_i^{\prime}$ be $v_k^{\prime}$. For each $l$ from $1$ to $c^{\prime}$, add the edges $\lbrace v_l, v_{i,j,1} \rbrace, \lbrace v_l, v_{i,k,6} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
