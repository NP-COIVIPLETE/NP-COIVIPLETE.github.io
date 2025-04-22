# $$\text{Path With Pairwise Constraints}$$

<br>

## Description

A directed graph, a list of pairs of similar vertices, and two selected vertices, such that there exists a simple path that starts and ends at the selected vertices and avoids visiting two similar vertices.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = (v_j, v_k)$ for some $j$ and $k$.
    - A set of two dimensional positive integer tuples $P = \lbrace p_1, p_2, ..., p_l \rbrace$ where each $p_i = (v_j, v_k)$ for some $j$ and $k$.
    - Two integers $a$, $b$ satisfying $1 \leq a < b \leq n$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Check that the first integer in $y$ is $a$ and the last integer in $y$ is $b$.
  - For each pair of adjacent integers $j$ and $k$ in $y$, check that the edge $(v_j, v_k)$ is in $E$.
  - For each pair of integers $j$ and $k$ in $y$, check that the tuples $(v_j, v_k)$ and $(v_k, v_j)$ are not in $P$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add the vertices $v_1, v_{5m^{\prime}+2}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$, add the vertices $v_{5j}, v_{5j-1}, v_{5j-2}, v_{5j-3}, v_{5j+1}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $$(v_{5j-4}, v_{5j}),$$ $$(v_{5j}, v_{5j-1}), (v_{5j-1}, v_{5j+1}),$$ $$(v_{5j}, v_{5j-2}), (v_{5j-2}, v_{5j+1}),$$ $$(v_{5j}, v_{5j-3}), (v_{5j-3}, v_{5j+1})$$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add an edge $(v_{5m^{\prime}+1}, v_{5m^{\prime}+2})$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of literals $L_{j_1,k_1}^{\prime}$ and $L_{j_2,k_2}^{\prime}$ in $x^{\prime}$, if $L_{j_1,k_1}^{\prime}$ is the negation of $L_{j_2,k_2}^{\prime}$, then add a tuple $(v_{5j_1-k_1}, v_{5j_2-k_2})$ to $P$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $a = 1$ and $b = 5m^{\prime}+2$ in $T_{L^{\prime}L}(x^{\prime})$.
