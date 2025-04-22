# $$\text{Minimum Tardiness Sequencing}$$

<br>

## Description

A positive integer $c$ and a list of single-step jobs with deadlines and execution dependencies, such that there exists a permutation of the jobs on a single machine that would make the total number of tardy jobs equal $c$ while obeying the dependencies.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A list of positive integer deadlines $d_1, d_2, ..., d_n$.
    - A list of two dimensional positive integer tuples $(t_{1,1}, t_{1,2}), (t_{2,1}, t_{2,2}), ..., (t_{m,1}, t_{m,2})$ where each $t_{j,k} \in \lbrace 1, 2, ..., n \rbrace$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that there are exactly $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - For each tuple $(t_{j,1}, t_{j,2})$ in $x$, check that $t_{j,1}$ comes before $t_{j,2}$ in $y$.
  - Initialize two integers $t = p = 0$. For each integer $i$ in $y$:
    - Increase $t$ by $1$.
    - If $t > d_i$, then increase $p$ by $1$.
  - Check that $p = c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Clique](Clique.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = m^{\prime} - \frac{c^{\prime}(c^{\prime}-1)}{2}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_j^{\prime}$ in $V^{\prime}$, add a deadline $d_j = n^{\prime}+m^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime} = \lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a deadline $d_{n^{\prime}+i} = \frac{c^{\prime}(c^{\prime}+1)}{2}$ and the tuples $(j, i), (k, i)$ to $T_{L^{\prime}L}(x^{\prime})$.
