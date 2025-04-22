# $$\text{Three Dimensional Matching}$$

<br>

## Description

A positive integer $c$, three disjoint sets of people of size $c$, and a set of all desirable threesomes where each person is from a different set, such that there exists a subset of desirable threesomes of size $c$ where everyone is in exactly one threesome.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - Three sets of people $P_1 = \lbrace p_{1,1}, p_{1,2}, ..., p_{1,c} \rbrace$, $P_2 = \lbrace p_{2,1}, p_{2,2}, ..., p_{2,c} \rbrace$, and $P_3 = \lbrace p_{3,1}, p_{3,2}, ..., p_{3,c} \rbrace$.
    - A set of desirable threesomes $M = \lbrace m_1, m_2, ..., m_n \rbrace$ where each threesome $m_i = (p_{1,j_1}, p_{2,j_2}, p_{3,j_3})$ for some $j_1, j_2, j_3$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Initialize a set $Q$. For each integer $i$ in $y$, check that $i$ is between $1$ and $n$ inclusive and add all people in $m_i$ to $Q$.
  - Check that there are exactly $3c$ people in $Q$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = 2m^{\prime}n^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $n^{\prime}$ and for each $j$ from $1$ to $m^{\prime}$, add the persons $p_{i,j,0}$, $p_{i,j,1}$ to $P_1$ in $T_{L^{\prime}L}(x^{\prime})$, a person $a_{i,j}$ to $P_2$ in $T_{L^{\prime}L}(x^{\prime})$, a person $b_{i,j}$ to $P_3$ in $T_{L^{\prime}L}(x^{\prime})$, and a threesome $(p_{i,j,0}, a_{i,j}, b_{i,j})$ to $M$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $n^{\prime}$:
    - Add a threesome $(p_{i,m^{\prime},1}, a_{i,1}, b_{i,m^{\prime}})$ to $M$ in $T_{L^{\prime}L}(x^{\prime})$.
    - For each $j$ from $1$ to $m^{\prime}-1$, add a threesome $(p_{i,j,1}, a_{i,j+1}, b_{i,j})$ to $M$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$ containing literals corresponding to the people $p_{i_1}, p_{i_2}, p_{i_3}$, add a person $s_{2,j}$ to $P_2$ in $T_{L^{\prime}L}(x^{\prime})$, a person $s_{3,j}$ to $P_3$ in $T_{L^{\prime}L}(x^{\prime})$, and the threesomes $(p_{i_1}, s_{2,j}, s_{3,j}), (p_{i_2}, s_{2,j}, s_{3,j}), (p_{i_3}, s_{2,j}, s_{3,j})$ to $M$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $k$ from $1$ to $m^{\prime}(n^{\prime}-1)$:
    - Add a person $g_{2,k}$ to $P_2$ in $T_{L^{\prime}L}(x^{\prime})$ and a person $g_{3,k}$ to $P_3$ in $T_{L^{\prime}L}(x^{\prime})$.
    - For each $i$ from $1$ to $n^{\prime}$ and for each $j$ from $1$ to $m^{\prime}$, add the threesomes $(p_{i,j,0}, g_{2,k}, g_{3,k}), (p_{i,j,1}, g_{2,k}, g_{3,k})$ to $M$ in $T_{L^{\prime}L}(x^{\prime})$.
