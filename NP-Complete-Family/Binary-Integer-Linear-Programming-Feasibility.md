# $$\text{Binary Integer Linear Programming Feasibility}$$

<br>

## Description

A vector $b \in \mathbb{R}^m$ and a matrix $A \in \mathbb{R}^{m \times n}$, such that there exists a vector $v \in \lbrace 0, 1 \rbrace^n$ satisfying $Av \leq b$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A vector $b \in \mathbb{R}^m$.
    - A matrix $A \in \mathbb{R}^{m \times n}$.
  - Interpret $y$ as the following:
    - A vector $v$.
  - Check that $v \in \lbrace 0, 1 \rbrace^n$.
  - Check that $Av \leq b$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - For each clause $C_i^{\prime}$ in $x^{\prime}$, initialize $b_i$ to $-1$ and the row vector $A_i$ to the zero vector in $T_{L^{\prime}L}(x^{\prime})$. Then for each literal in $C_i^{\prime}$:
    - If it's $v_j^{\prime}$ for some $j$, then let $A_{i,j} = -1$.
    - If it's $\neg v_j^{\prime}$ for some $j$, then let $A_{i,j} = 1$ and increase $b_i$ by $1$.
