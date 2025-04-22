# $$\text{Boolean Formula Inequivalence}$$

<br>

## Description

Two boolean formulas over the same list of boolean variables, such that there exists an assignment of the variables that would make one formula true and the other formula false.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - Two boolean formulas using operations of not ($\neg$), and ($\land$) , or ($\lor$) over the given variables.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that one formula in $x$ evaluates to true and the other formula in $x$ evaluates to false.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Boolean Satisfiability](Boolean-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each variable in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add the boolean formula in $x^{\prime}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add a boolean formula $\neg(v_1 \lor \neg v_1 \lor v_2 \lor \neg v_2 \lor ... \lor v_n^{\prime} \lor \neg v_n^{\prime})$ to $T_{L^{\prime}L}(x^{\prime})$.
