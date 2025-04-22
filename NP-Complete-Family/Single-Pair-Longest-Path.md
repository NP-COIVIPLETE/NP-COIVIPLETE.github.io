# $$\text{Single Pair Longest Path}$$

<br>

## Description

A positive integer $c$, an undirected graph with non-negative integer edge weights, and two selected vertices, such that there exists a simple path that starts and ends at the selected vertices and has a total cost that is at least $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
    - A function $w: E \to \mathbb{N}$.
    - Two integers $a$, $b$ satisfying $1 \leq a < b \leq n$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Check that the first integer in $y$ is $a$ and the last integer in $y$ is $b$.
  - Initialize an integer $d = 0$. For each pair of adjacent integers $j$ and $k$ in $y$, check that the edge $e_i = \lbrace v_j, v_k \rbrace$ is in $E$ and increase $d$ by $w(e_i)$.
  - Check that $d \geq c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Longest Path](Longest-Path.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}+2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add the vertices $v_{n^{\prime}+1}, v_{n^{\prime}+2}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add a vertex $v_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$ and the edges $\lbrace v_i, v_{n^{\prime}+1} \rbrace, \lbrace v_i, v_{n^{\prime}+2} \rbrace$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i$ in $E$, let $w(e_i) = 1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $a = n^{\prime}+1$ and $b = n^{\prime}+2$ in $T_{L^{\prime}L}(x^{\prime})$.
