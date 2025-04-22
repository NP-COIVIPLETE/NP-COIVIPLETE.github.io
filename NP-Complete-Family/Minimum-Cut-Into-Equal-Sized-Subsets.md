# $$\text{Minimum Cut Into Equal Sized Subsets}$$

<br>

## Description

A positive integer $c$, an undirected graph, and two selected vertices, such that there exists a partition of the vertices into two equal sized sets that each contain one of the selected vertices and at most $c$ edges have their endpoints in different sets.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
    - Two integers $a$, $b$ satisfying $1 \leq a < b \leq n$.
  - Interpret $y$ as the following:
    - Two disjoint equal sized sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Check that $a$ and $b$ are in different sets in $y$.
  - Initialize an integer $d = 0$. For each edge $\lbrace v_j, v_k \rbrace$ in $E$, if $j$ and $k$ are in different sets in $y$, then increase $d$ by $1$.
  - Check that $d \leq c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Maximum Cut](Maximum-Cut.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = (n^{\prime})^2 - c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add the vertices $v_i, v_{n^{\prime}+i}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of distinct vertices $v_j$ and $v_k$ in $V$, if $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ is not an edge in $E^{\prime}$, then add an edge $\lbrace v_j, v_k \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $a = n^{\prime}+1$ and $b = 2n^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
