# $$\text{Directed Hamiltonian Cycle}$$

<br>

## Description

A directed graph, such that there exists a simple cycle that includes every vertex.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = (v_j, v_k)$ for some $j$ and $k$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that there are exactly $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each pair of adjacent integers $j$ and $k$ in $y$ with $j$ coming before $k$, check that the edge $(v_j, v_k)$ is in $E$.
  - Let the first integer in $y$ be $k$ and the last integer in $y$ be $j$. Check that the edge $(v_j, v_k)$ is in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Cycle](Hamiltonian-Cycle.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add the edges $(v_j, v_k), (v_k, v_j)$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
