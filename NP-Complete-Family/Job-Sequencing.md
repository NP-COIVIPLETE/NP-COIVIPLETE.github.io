# $$\text{Job Sequencing}$$

<br>

## Description

A positive integer $c$ and a list of jobs with positive integer execution times, deadlines, and penalties, such that there exists a permutation of the jobs on a single machine that would make the total penalty equal $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A list of three dimensional positive integer tuples $(t_1, d_1, p_1), (t_2, d_2, p_2), ..., (t_n, d_n, p_n)$.
  - Interpret $y$ as the following:
    - A list of distinct positive integers.
  - Check that there are exactly $n$ integers in $y$.
  - Check that each integer in $y$ is between $1$ and $n$ inclusive.
  - Initialize two integers $t = p = 0$. For each integer $i$ in $y$:
    - Increase $t$ by $t_i$.
    - If $t > d_i$, then increase $p$ by $p_i$.
  - Check that $p = c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Subset Sum](Subset-Sum.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $$c = \sum_{i=1}^{n^{\prime}} a_i^{\prime} - c^{\prime}$$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each integer $a_i^{\prime}$ in $A^{\prime}$, add a tuple $(a_i^{\prime}, c^{\prime}, a_i^{\prime})$ to $T_{L^{\prime}L}(x^{\prime})$.
