# $$\text{Exact Three Conjunctive Normal Form Half Satisfiability}$$

<br>

## Description

A boolean formula in conjunctive normal form where each clause has exactly three literals over a list of boolean variables, such that there exists an assignment of the variables that would make half the clauses true and half the clauses false.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula $C_1 \land C_2 \land ... \land C_m$ where each clause $C_j = (L_{j,1} \lor L_{j,2} \lor L_{j,3})$ and each literal $L_{j,k} \in \lbrace v_i, \neg v_i \rbrace$ for some $i$.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that half the clauses in $x$ evaluate to true and half the clauses in $x$ evaluate to false.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each variable in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add each clause in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add the variables $u_1, u_2, u_3$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add the same clause $(u_1, \neg u_1, u_1)$ $m^{\prime}$ times to $T_{L^{\prime}L}(x^{\prime})$.
  - Add the same clause $(u_1, u_2, u_3)$ $2m^{\prime}$ times to $T_{L^{\prime}L}(x^{\prime})$.
