# $$\text{Minimum Monotone Conjunctive Normal Form Satisfiability}$$

<br>

## Description

A positive integer $c$ and a boolean formula in conjunctive normal form with no negated literals over a list of boolean variables, such that there exists an assignment of the variables that would make the formula true with at most $c$ variables set to true.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula $C_1 \land C_2 \land ... \land C_m$ where each clause $C_j = (L_{j,1} \lor L_{j,2} \lor ... \lor L_{j,l_j})$ and each literal $L_{j,k} = v_i$ for some $i$.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Check that at most $c$ values are true in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Vertex Cover](Vertex-Cover.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = c^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add a variable $v_i$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a clause $(v_j, v_k)$ to $T_{L^{\prime}L}(x^{\prime})$.
