# $$\text{Graph Three Colorability}$$

<br>

## Description

An undirected graph, such that there exists a partition of the vertices into three sets where no edge has both of its endpoints in the same set.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - Three disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each edge $\lbrace v_j, v_k \rbrace$ in $E$, check that not both of $j$ and $k$ are in the same set in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add the vertices $t, f, b$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace t, f \rbrace, \lbrace f, b \rbrace, \lbrace b, t \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$, add the vertices $v_{i,0}, v_{i,1}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace b, v_{i,0} \rbrace, \lbrace b, v_{i,1} \rbrace, \lbrace v_{i,0}, v_{i,1} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$ containing literals corresponding to the vertices $v_a, v_b, v_c$, add the vertices $$w_{j,1}, w_{j,2}, w_{j,3}, w_{j,4}, w_{j,5}, w_{j,6}$$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $$\lbrace v_a, w_{j,1} \rbrace, \lbrace v_b, w_{j,2} \rbrace, \lbrace v_c, w_{j,3} \rbrace,$$ $$\lbrace t, w_{j,1} \rbrace, \lbrace t, w_{j,2} \rbrace, \lbrace t, w_{j,3} \rbrace,$$ $$\lbrace w_{j,1}, w_{j,4} \rbrace, \lbrace w_{j,2}, w_{j,5} \rbrace, \lbrace w_{j,3}, w_{j,6} \rbrace,$$ $$\lbrace t, w_{j,4} \rbrace, \lbrace w_{j,4}, w_{j,5} \rbrace, \lbrace w_{j,5}, w_{j,6} \rbrace, \lbrace w_{j,6}, f \rbrace$$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
