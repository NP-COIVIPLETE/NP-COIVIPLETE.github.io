# $$\text{Bounded Occurrence Three Conjunctive Normal Form Satisfiability}$$

<br>

## Description

A boolean formula in conjunctive normal form where each variable appears at most three times over a list of boolean variables, such that there exists an assignment of the variables that would make the formula true.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula $C_1 \land C_2 \land ... \land C_m$ where each clause $C_j = (L_{j,1} \lor L_{j,2} \lor ... \lor L_{j,l_j})$ and each literal $L_{j,k} \in \lbrace v_i, \neg v_i \rbrace$ for some $i$.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that each variable in $x$ appears at most three times in the formula in $x$.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Conjunctive Normal Form Satisfiability](Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each clause in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$ appearing $k$ times:
    - Add the variables $v_{i,1}, v_{i,2}, ..., v_{i,k}$ to $T_{L^{\prime}L}(x^{\prime})$.
    - Replace each appearance of $v_i^{\prime}$ with its corresponding new variable in $T_{L^{\prime}L}(x^{\prime})$.
    - Add the clauses $(\neg v_{i,1} \lor v_{i,2}), (\neg v_{i,2} \lor v_{i,3}), ..., (\neg v_{i,k-1} \lor v_{i,k}), (\neg v_{i,k} \lor v_{i,1})$ to $T_{L^{\prime}L}(x^{\prime})$.
