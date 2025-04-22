# $$\text{Weighted Maximum Cut}$$

<br>

## Description

A positive integer $c$ and an undirected graph with non-negative integer edge weights, such that there exists a partition of the vertices into two sets where the sum of the weights of the edges that have their endpoints in different sets is at least $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
    - A function $w: E \to \mathbb{N}$.
  - Interpret $y$ as the following:
    - Two disjoint sets of positive integers.
  - Check that there are a total number of $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Initialize an integer $b = 0$. For each edge $e_i = \lbrace v_j, v_k \rbrace$ in $E$, if $j$ and $k$ are in different sets in $y$, then increase $b$ by $w(e_i)$.
  - Check that $b \geq c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Maximum Cut](Maximum-Cut.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i$ in $E$, let $w(e_i) = 1$ in $T_{L^{\prime}L}(x^{\prime})$.
