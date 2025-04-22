# $$\text{Exact Two Conjunctive Normal Form Maximum Satisfiability With Unique Clauses}$$

<br>

## Description

A positive integer $c$ and a boolean formula in conjunctive normal form with unique clauses where each clause has exactly two literals over a list of boolean variables, such that there exists an assignment of the variables that would make least $c$ clauses true.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula $C_1 \land C_2 \land ... \land C_m$ where each clause $C_j = (L_{j,1} \lor L_{j,2})$, each literal $L_{j,k} \in \lbrace v_i, \neg v_i \rbrace$ for some $i$.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that no two clauses are the same in $x$.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Evaluate each clause in $x$ and check that at least $c$ of them are true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Two Conjunctive Normal Form Maximum Satisfiability](Exact-Two-Conjunctive-Normal-Form-Maximum-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}+m^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each variable in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime} = (L_{j,1}^{\prime} \lor L_{j,2}^{\prime})$ in $x^{\prime}$, add a variable $c_j$ and the clauses $(L_{j,1}^{\prime} \lor c_j), (L_{j,2}^{\prime} \lor \neg c_j)$ to $T_{L^{\prime}L}(x^{\prime})$.
