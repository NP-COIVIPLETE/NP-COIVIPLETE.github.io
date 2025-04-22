# $$\text{Exact Three Conjunctive Normal Form Satisfiability}$$

<br>

## Description

A boolean formula in conjunctive normal form where each clause has exactly three literals over a list of boolean variables, such that there exists an assignment of the variables that would make the formula true.

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
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Conjunctive Normal Form Satisfiability](Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each variable in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each clause $C_j^{\prime}$ in $x^{\prime}$, add variables and clauses to $T_{L^{\prime}L}(x^{\prime})$ in the following way:
    - If $C_j^{\prime} = (L_{j,1}^{\prime})$, then add the variables $u_{j,1}, u_{j,2}$ and the clauses $$(L_{j,1}^{\prime} \lor \neg u_{j,1} \lor \neg u_{j,2}), (L_{j,1}^{\prime} \lor \neg u_{j,1} \lor u_{j,2}), (L_{j,1}^{\prime} \lor u_{j,1} \lor \neg u_{j,2}), (L_{j,1}^{\prime} \lor u_{j,1} \lor u_{j,2})$$ to $T_{L^{\prime}L}(x^{\prime})$.
    - If $C_j^{\prime} = (L_{j,1}^{\prime} \lor L_{j,2}^{\prime})$, then add a variable $u_{j,1}$ and the clauses $$(L_{j,1}^{\prime} \lor L_{j,2}^{\prime} \lor u_{j,1}), (L_{j,1}^{\prime} \lor L_{j,2}^{\prime} \lor \neg u_{j,1})$$ to $T_{L^{\prime}L}(x^{\prime})$.
    - If $C_j^{\prime} = (L_{j,1}^{\prime} \lor L_{j,2}^{\prime} \lor L_{j,3}^{\prime})$, then simply add $C_j^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
    - If $C_j^{\prime} = (L_{j,1}^{\prime} \lor L_{j,2}^{\prime} \lor ... \lor L_{j,l_j^{\prime}}^{\prime})$ with $l_j^{\prime} \geq 4$, then add the variables $u_{j,1}, u_{j,2}, ..., u_{j,l_j^{\prime}-3}$ and the clauses $$(L_{j,1}^{\prime} \lor L_{j,2}^{\prime} \lor u_{j,1}), (L_{j,3}^{\prime} \lor \neg u_{j,1} \lor u_{j,2}), (L_{j,4}^{\prime} \lor \neg u_{j,2} \lor u_{j,3}), ..., (L_{j,l_j^{\prime}-2}^{\prime} \lor \neg u_{j,l_j^{\prime}-4} \lor u_{j,l_j^{\prime}-3}), (L_{j,l_j^{\prime}-1}^{\prime} \lor L_{j,l_j^{\prime}}^{\prime} \lor \neg u_{j,l_j^{\prime}-3})$$ to $T_{L^{\prime}L}(x^{\prime})$.
