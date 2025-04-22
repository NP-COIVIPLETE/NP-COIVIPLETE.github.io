# $$\text{Set Packing}$$

<br>

## Description

A positive integer $c$ and a set of sets of integers, such that there exists $c$ of those sets that are disjoint.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A set of sets $S_1, S_2, ..., S_n \subseteq \mathbb{Z}$.
  - Interpret $y$ as the following:
    - A set of positive integers.
  - Check that there are exactly $c$ integers in $y$.
  - Initialize a set $A$ and an integer $b$ to $0$. For each integer $i$ in $y$, check that $i$ is between $1$ and $n$ inclusive, add all integers in $S_i$ to $A$, and increase $b$ by $\vert{S_i}\vert$.
  - Check that $\vert{A}\vert = b$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Cover By Triples](Exact-Cover-By-Triples.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each subset in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
