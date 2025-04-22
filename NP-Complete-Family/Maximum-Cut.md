# $$\text{Maximum Cut}$$

<br>

## Description

A positive integer $c$ and an undirected graph, such that there exists a partition of the vertices into two sets where at least $c$ edges have their endpoints in different sets.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - Two disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Initialize an integer $b = 0$. For each edge $\lbrace v_j, v_k \rbrace$ in $E$, if $j$ and $k$ are in different sets in $y$, then increase $b$ by $1$.
  - Check that $b \geq c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Two Conjunctive Normal Form Maximum Satisfiability With Unique Clauses](Exact-Two-Conjunctive-Normal-Form-Maximum-Satisfiability-With-Unique-Clauses.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = (3m^{\prime})^2 + 9m^{\prime}n^{\prime} + 2c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $3m^{\prime}$, add the vertices $t_i, f_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $3m^{\prime}$ and for each $j$ from $1$ to $3m^{\prime}$, add an edge $\lbrace t_i, f_j \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$, add the vertices $v_{0,i}, v_{1,i}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $n^{\prime}$ and for each $j$ from $1$ to $3m^{\prime}$:
    - Add the vertices $t_{i,j}, f_{i,j}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Add the edges $\lbrace t_{i,j}, f_{i,j} \rbrace, \lbrace v_{0,i}, t_{i,j} \rbrace, \lbrace v_{1,i}, f_{i,j} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_i$ in $x^{\prime}$ containing literals corresponding to the vertices $v_{b_1,j}, v_{b_2,k}$:
    - If $v_{b_1,j} \neq v_{b_2,k}$, then add an edge $\lbrace v_{b_1,j}, v_{b_2,k} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Add the edges $\lbrace v_{b_1,j}, f_{2i-1} \rbrace, \lbrace v_{b_2,k}, f_{2i} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
