# $$\text{Steiner Tree}$$

<br>

## Description

A positive integer $c$, an undirected graph with non-negative integer edge weights, and a subset of the vertices, such that there exists a subtree of the graph that contains those vertices and has a total edge weight that is at most $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
    - A function $w: E \to \mathbb{N}$.
    - A subset $U \subseteq V$.
  - Interpret $y$ as the following:
    - Two sets of positive integers $N$, $A$.
  - Check that each integer in $N$ is between $1$ and $n$ inclusive.
  - Check that each integer in $A$ is between $1$ and $m$ inclusive.
  - For each vertex $v_i$ in $U$, check that $i$ is in $N$.
  - Initialize an integer $k = 0$. For each integer $i$ in $A$, increase $k$ by $w(e_i)$.
  - Check that $k \leq c$.
  - Use depth-first search to traverse through the graph with vertices specified by $N$ and edges specified by $A$ and check that it is connected and has no cycles.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Cover](Exact-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = n^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add a vertex $v_0$ to $V$ and $U$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each subset $S_i^{\prime}$ in $x^{\prime}$:
    - Add a vertex $v_{1,i}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Add an edge $e_i = \lbrace v_0, v_{1,i} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Let $w(e_i) = \vert{S_i}\vert$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each integer $a_j^{\prime}$ in $A^{\prime}$:
    - Add a vertex $v_{2,j}$ to $V$ and $U$ in $T_{L^{\prime}L}(x^{\prime})$.
    - For each subset $S_i^{\prime}$ in $x^{\prime}$, if $a_j^{\prime} \in S_i^{\prime}$, then add an edge $e_{i,j} = \lbrace v_{1,i}, v_{2,j} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$ and let $w(e_{i,j}) = 0$ in $T_{L^{\prime}L}(x^{\prime})$.
