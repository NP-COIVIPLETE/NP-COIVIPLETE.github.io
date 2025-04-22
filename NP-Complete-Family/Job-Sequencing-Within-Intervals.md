# $$\text{Job Sequencing Within Intervals}$$

<br>

## Description

A list of jobs with non-negative integer release times, execution times, and deadlines, such that there exists a way to arrange the jobs on a single machine that would execute each job within its release time and deadline.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of three dimensional non-negative integer tuples $(r_1, t_1, d_1), (r_2, t_2, d_2), ..., (r_n, t_n, d_n)$.
  - Interpret $y$ as the following:
    - A list of distinct non-negative integers.
  - Check that there are exactly $n$ integers in $y$.
  - For each integer $s_i$ in $y$:
    - Check that $r_i \leq s_i$ and $s_i+t_i \leq d_i$.
    - For each integer $s_j$ in $y$, if $i \neq j$, then check that either $s_j+t_j \leq s_i$ or $s_i+t_i \leq s_j$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Partition](Partition.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Define $$s = \sum_{i=1}^{n^{\prime}} a_i^{\prime}$$
  - For each integer $a_i^{\prime}$ in $A^{\prime}$, add a tuple $(0, a_i^{\prime}, s+1)$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add a tuple $(\lceil \frac{s}{2} \rceil, 1, \lceil \frac{s+1}{2} \rceil)$ to $T_{L^{\prime}L}(x^{\prime})$.
