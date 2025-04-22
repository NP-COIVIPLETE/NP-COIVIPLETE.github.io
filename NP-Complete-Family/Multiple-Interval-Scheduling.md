# $$\text{Multiple Interval Scheduling}$$

<br>

## Description

A positive integer $c$ and a list of jobs with intervals of subtasks, such that there exists a way for a single machine to execute $c$ jobs.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A list of lists $J_1, J_2, ..., J_n$ where each $J_i$ is a list of two dimensional non-negative integer tuples $(s_{i,1}, f_{i,1}), (s_{i,2}, f_{i,2}), ..., (s_{i,l_i}, f_{i,l_i})$.
  - Interpret $y$ as the following:
    - A sorted list of distinct non-negative integers.
  - For each pair of adjacent integers $a$ and $b$ in $y$, check that $a = s_{i,j} \leq f_{i,j} < b$ for some $i$ and $j$.
  - Check that exactly $c$ jobs have all of their tasks executed.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Independent Set](Independent-Set.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add a list $J_i$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $e_i^{\prime} = \lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a tuple $(i, i)$ to both $J_j$ and $J_k$ in $T_{L^{\prime}L}(x^{\prime})$.
