# $$\text{Infinity}$$

<br>

## Statement

$$\vert{\lbrace L \mid L \text{ is NP-Complete} \rbrace}\vert = \infty$$

<br>

## Proof

Let $K \in \mathbb{Z}^+$ with $K \geq 2$.

Define the following:
- $V_{L_K}$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$ with unknown values.
    - $K$ boolean formulas using operations of not ($\neg$), and ($\land$) , or ($\lor$) over the given variables.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that each formula in $x$ evaluates to true.
- $L_K$: $$L_K = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_{L_K}(x, y) = 1 \rbrace$$
- $L^{\prime}$: [Boolean Satisfiability](../NP-Complete-Family/Boolean-Satisfiability.md).
- $T_{L^{\prime}L_K}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each variable in $x^{\prime}$ to $T_{L^{\prime}L_K}(x^{\prime})$.
  - For $K$ times, repeatedly add the same formula in $x^{\prime}$ to $T_{L^{\prime}L_K}(x^{\prime})$.

Check that $L_K$ is NP-Complete.
