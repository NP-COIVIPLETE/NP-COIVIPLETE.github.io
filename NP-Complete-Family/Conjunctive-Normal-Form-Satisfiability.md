# $$\text{Conjunctive Normal Form Satisfiability}$$

<br>

## Description

A boolean formula in conjunctive normal form over a list of boolean variables, such that there exists an assignment of the variables that would make the formula true.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula $C_1 \land C_2 \land ... \land C_m$ where each clause $C_j = (L_{j,1} \lor L_{j,2} \lor ... \lor L_{j,l_j})$ and each literal $L_{j,k} \in \lbrace v_i, \neg v_i \rbrace$ for some $i$.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Boolean Satisfiability](Boolean-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Check if the entire formula in $x^{\prime}$ is just one variable with no logic operation.
    - If so, then trivially output the same $x^{\prime}$.
    - If not, then add a variable $v_{n+1}$ representing the entire formula in $x^{\prime}$ and a clause $C_1 = (v_{n+1})$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Find a top-level logic operation of the given formula represented by the variable $v_i$.
  - For each sub-formula involved in this operation, check if it is just one variable with no logic operation.
    - If so, then simply add the variable to $T_{L^{\prime}L}(x^{\prime})$.
    - If not, then add a variable $v_j$ to $T_{L^{\prime}L}(x^{\prime})$ representing that formula, and repeat from the previous step for $v_j$.
  - Now, this formula $v_i$ either has the form $\neg v_j$, $v_j \land v_k$, or $v_j \lor v_k$ for some variables $v_j$ and $v_k$.
    - If $\neg v_j$, then add the clauses $(v_i \lor v_j), (\neg v_i \lor \neg v_j)$ to $T_{L^{\prime}L}(x^{\prime})$.
    - If $v_j \land v_k$, then add the clauses $(v_i \lor \neg v_j \lor \neg v_k), (\neg v_i \lor v_j), (\neg v_i \lor v_k)$ to $T_{L^{\prime}L}(x^{\prime})$.
    - If $v_j \lor v_k$, then add the clauses $(\neg v_i \lor v_j \lor v_k), (v_i \lor \neg v_j), (v_i \lor \neg v_k)$ to $T_{L^{\prime}L}(x^{\prime})$.
