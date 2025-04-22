# $$\text{Traveling Salesman}$$

<br>

## Description

A non-negative integer $c$ and a complete undirected graph with non-negative integer edge weights, such that there exists a simple cycle that includes every vertex and has a total cost that is at most $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A non-negative integer $c$.
    - A set of vertices $V = \lbrace v_1, v_2, ..., v_n \rbrace$.
    - A function $w: (V, V) \to \mathbb{N}$ where $w(v_i, v_j) = w(v_j, v_i)$ for every $i, j$ with $i \neq j$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that there are exactly $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Initialize an integer $b = 0$. For each pair of adjacent integers $j$ and $k$ in $y$, increase $b$ by $w(v_j, v_k)$.
  - Let the first integer in $y$ be $k$ and the last integer in $y$ be $j$. Increase $b$ by $w(v_j, v_k)$.
  - Check that $b \leq c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Cycle](Hamiltonian-Cycle.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = 0$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Initialize $w$ to the zero function in $T_{L^{\prime}L}(x^{\prime})$. For each pair of distinct vertices $v_i$ and $v_j$ in $V$, if $\lbrace v_i^{\prime}, v_j^{\prime} \rbrace$ is not an edge in $E^{\prime}$, then let $w(i, j) = w(j, i) = 1$.
