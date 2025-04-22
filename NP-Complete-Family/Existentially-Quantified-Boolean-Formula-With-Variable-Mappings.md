# $$\text{Existentially Quantified Boolean Formula With Variable Mappings}$$

<br>

## Description

A boolean formula over two lists of boolean variables of the same length and a list of unary boolean mappings, such that there exists an assignment of the first list of variables that would make the formula true when assigning computed values to the second list of variables using the mappings on the values of the first list of variables.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $V = [v_1, v_2, ..., v_n]$.
    - A list of boolean variables $W = [w_1, w_2, ..., w_n]$.
    - A list of unary boolean mappings $f_1, f_2, ..., f_n$ where each $f_i: \lbrace 0, 1 \rbrace \to \lbrace 0, 1 \rbrace$.
    - A boolean formula using operations of not ($\neg$), and ($\land$) , or ($\lor$) over the given variables.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $V$.
  - For each $i$ from $1$ to $n$, assign $f_i(v_i)$ to $w_i$ in $W$.
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Boolean Satisfiability](Boolean-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each variable in $x^{\prime}$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add the variables $w_1, w_2, ..., w_{n^{\prime}}$ to $W$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add the mappings $f_1, f_2, ..., f_{n^{\prime}}$ to $T_{L^{\prime}L}(x^{\prime})$ where each $f_i$ is a zero function.
  - Define $\phi^{\prime}$ to be the boolean formula in $x^{\prime}$.
  - Add a boolean formula $\phi^{\prime} \lor (w_1 \land w_2 \land ... \land w_{n^{\prime}})$ to $T_{L^{\prime}L}(x^{\prime})$.
