# $$\text{Partition Into Hamiltonian Subgraphs}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a partition of the vertices into $c$ sets where each set has a simple cycle that includes every vertex in that set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive interger $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - Disjoint lists of distinct positive integers.
  - Check that there are exactly $c$ lists and a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each list in $y$:
    - For each pair of adjacent integers $j$ and $k$ in that list, check that the edge $\lbrace v_j, v_k \rbrace$ is in $E$.
    - Let the first integer in that list be $k$ and the last integer in that list be $j$. Check that the edge $\lbrace v_j, v_k \rbrace$ is in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Cycle](Hamiltonian-Cycle.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = 1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
