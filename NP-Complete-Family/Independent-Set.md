# $$\text{Independent Set}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a subset of the vertices of size $c$ where no edge has both of its endpoints in this set.

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
  - For each edge $\lbrace v_j, v_k \rbrace$ in $E$, check that not both of $j$ and $k$ are in $y$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = m^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$, add the vertices $v_{j,1}, v_{j,2}, v_{j,3}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace v_{j,1}, v_{j,2} \rbrace, \lbrace v_{j,2}, v_{j,3} \rbrace, \lbrace v_{j,3}, v_{j,1} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of vertices $v_{j_1,k_1}$ and $v_{j_2,k_2}$, if $L_{j_1,k_1}^{\prime}$ is the negation of $L_{j_2,k_2}^{\prime}$ in $x^{\prime}$, then add an edge $\lbrace v_{j_1,k_1}, v_{j_2,k_2} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
