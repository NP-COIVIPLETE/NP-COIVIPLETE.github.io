# $$\text{Existentially Quantified Boolean Formula With Bounded Machine Simulation}$$

<br>

## Description

A boolean formula over two lists of boolean variables of the same length, a deterministic one-tape Turing Machine, and a string $m$, such that there exists an assignment of the first list of variables that would make the formula true when assigning computed values to the second list of variables by simulating the Turing Machine on previously assigned variables within $\vert{m}\vert$ steps.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $V = [v_1, v_2, ..., v_n]$.
    - A list of boolean variables $W = [w_1, w_2, ..., w_n]$.
    - A deterministic one-tape Turing Machine $M = (Q, \Sigma, \Gamma, \delta, q_1, q_a, q_r)$ where $Q$ is the finite set of states, $\Sigma$ is the finite set of input symbols allowed, $\Gamma \supsetneq \Sigma$ is the finite set of tape symbols allowed, $\delta: (Q \setminus \lbrace q_a, q_r \rbrace) \times \Gamma \to Q \times \Gamma \times \lbrace -1, 1 \rbrace$ is the transition fuction, $q_1 \in Q$ is the starting state, $q_a \in Q$ is the accepting state, and $q_r \in Q$ is the rejecting state.
    - A string $m$.
    - A boolean formula using operations of not ($\neg$), and ($\land$) , or ($\lor$) over the given variables.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $m$ values in $y$.
  - Assign each value in $y$ to each variable in $V$.
  - For each $i$ from $1$ to $n$, simulate $M$ on $v_1w_1v_2w_2...v_{i-1}w_{i-1}v_{i}$ for at most $\vert{m}\vert$ steps and assign true to $w_i$ in $W$ only if $M$ accepts.
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
  - Let $M$ be a Turing Machine that rejects every input in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $m = \*$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Define $\phi^{\prime}$ to be the boolean formula in $x^{\prime}$.
  - Add a boolean formula $\phi^{\prime} \lor (w_1 \land w_2 \land ... \land w_{n^{\prime}})$ to $T_{L^{\prime}L}(x^{\prime})$.
