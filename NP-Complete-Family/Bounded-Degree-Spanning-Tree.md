# $$\text{Bounded Degree Spanning Tree}$$

<br>

## Description

A positive integer $d$ and an undirected graph, such that there exists a spanning tree where no vertex has a degree greater than $d$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $d$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A set of edges $E = \lbrace e_1, e_2, ..., e_m \rbrace$ where each $e_i = \lbrace v_j, v_k \rbrace$ for some $j$ and $k$ with $j \neq k$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $n-1$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $m$ inclusive.
  - Initialize a list $W$. For each integer $i$ in $y$, add the vertices in $e_i$ to $W$.
  - For each vertex in $V$, check that it exists in $W$ and appears at most $d$ times.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Path](Hamiltonian-Path.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $d = 2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E$ in $T_{L^{\prime}L}(x^{\prime})$.
