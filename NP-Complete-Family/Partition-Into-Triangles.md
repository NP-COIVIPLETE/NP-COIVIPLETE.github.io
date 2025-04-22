# $$\text{Partition Into Triangles}$$

<br>

## Description

A positive integer $c$ and an undirected graph with $3c$ vertices, such that there exists a partition of the vertices into $c$ equal-sized sets where each set has a simple cycle that includes every vertex in that set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive interger $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_{3c} \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_n \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - Disjoint sets of positive integers.
  - Check that there are exactly $c$ sets and each set has exactly $3$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $3c$ inclusive.
  - For each set in $y$ and for each pair of distinct integers $j$ and $k$ in that set, check that the edge $\lbrace v_j, v_k \rbrace$ is in $E$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Cover By Triples](Exact-Cover-By-Triples.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}+3n^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each integer $a_i^{\prime}$ in $A^{\prime}$, add a vertex $v_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each subset $S_i^{\prime} = \lbrace a_{j_1}^{\prime}, a_{j_2}^{\prime}, a_{j_3}^{\prime} \rbrace$ in $x^{\prime}$, add the vertices $$w_{i,1}, w_{i,2}, w_{i,3}, w_{i,4}, w_{i,5}, w_{i,6}, w_{i,7}, w_{i,8}, w_{i,9}$$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $$\lbrace v_{j_1}, w_{i,1} \rbrace, \lbrace v_{j_1}, w_{i,2} \rbrace, \lbrace w_{i,1}, w_{i,2} \rbrace, \lbrace w_{i,1}, w_{i,3} \rbrace, \lbrace w_{i,2}, w_{i,3} \rbrace,$$ $$\lbrace v_{j_2}, w_{i,4} \rbrace, \lbrace v_{j_2}, w_{i,5} \rbrace, \lbrace w_{i,4}, w_{i,5} \rbrace, \lbrace w_{i,4}, w_{i,6} \rbrace, \lbrace w_{i,5}, w_{i,6} \rbrace,$$ $$\lbrace v_{j_3}, w_{i,7} \rbrace, \lbrace v_{j_3}, w_{i,8} \rbrace, \lbrace w_{i,7}, w_{i,8} \rbrace, \lbrace w_{i,7}, w_{i,9} \rbrace, \lbrace w_{i,8}, w_{i,9} \rbrace,$$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
