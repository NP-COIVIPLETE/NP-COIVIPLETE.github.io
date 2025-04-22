# $$\text{Subset Sum}$$

<br>

## Description

A positive integer $c$ and a set of positive integers, such that there exists a subset whose sum equals $c$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of positive integers $A = \lbrace a_1, a_2, ..., a_n \rbrace$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that each integer in $y$ is also in $A$.
  - Check that the sum of the integers in $y$ is exactly $c$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $$c = \sum_{i=1}^{n^{\prime}} 10^{m^{\prime}+i-1} + \sum_{j=1}^{m^{\prime}} 4 \cdot 10^{j-1}$$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$, add the integers $$10^{m^{\prime}+i-1} + \sum_{j=1}^{m^{\prime}} [v_i^{\prime} \in C_j^{\prime}] 10^{j-1}, \qquad 10^{m^{\prime}+i-1} + \sum_{j=1}^{m^{\prime}} [\neg v_i^{\prime} \in C_j^{\prime}] 10^{j-1}$$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$, add the integers $10^{j-1}$ and $2 \cdot 10^{j-1}$ to $A$ in $T_{L^{\prime}L}(x^{\prime})$.
