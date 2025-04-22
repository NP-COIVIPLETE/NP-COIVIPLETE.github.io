# $$\text{Integer Linear Programming Feasibility}$$

<br>

## Description

A vector $b \in \mathbb{R}^m$ and a matrix $A \in \mathbb{R}^{m \times n}$, such that there exists a vector $v \in \mathbb{Z}^n$ satisfying $Av \leq b$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A vector $b \in \mathbb{R}^m$.
    - A matrix $A \in \mathbb{R}^{m \times n}$.
  - Interpret $y$ as the following:
    - A vector $v$.
  - Check that $v \in \mathbb{Z}^n$.
  - Check that $Av \leq b$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Binary Integer Linear Programming Feasibility](Binary-Integer-Linear-Programming-Feasibility.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $b = b^{\prime}$ and $A = A^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $n^{\prime}$, initialize two row vectors $A_{m^{\prime}+2i-1}$ and $A_{m^{\prime}+2i}$ to the zero vector in $T_{L^{\prime}L}(x^{\prime})$.
    - Let $b_{m^{\prime}+2i-1} = 0$ and $A_{m^{\prime}+2i-1,i} = -1$.
    - Let $b_{m^{\prime}+2i} = 1$ and $A_{m^{\prime}+2i,i} = 1$.
