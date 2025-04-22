# $$\text{Limited Time Acceptance}$$

<br>

## Description

A non-deterministic one-tape Turing Machine, a string $s$, and a string $n$, such that there exists a branch of computation of the Turing Machine that accepts $s$ within $\vert{n}\vert$ steps.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A non-deterministic one-tape Turing Machine $M = (Q, \Sigma, \Gamma, \delta, q_1, q_a, q_r)$ where $Q$ is the finite set of states, $\Sigma$ is the finite set of input symbols allowed, $\Gamma \supsetneq \Sigma \cup \lbrace \* \rbrace$ is the finite set of tape symbols allowed, $\delta: (Q \setminus \lbrace q_a, q_r \rbrace) \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \lbrace -1, 1 \rbrace)$ is the transition fuction, $q_1 \in Q$ is the starting state, $q_a \in Q$ is the accepting state, and $q_r \in Q$ is the rejecting state.
    - A string $s$.
    - A string $n$.
  - Interpret $y$ as the following:
    - A string $t$.
  - Check that $\vert{t}\vert = (\vert{n}\vert+1)^2$.
  - Let $t = C_0C_1...C_{\vert{n}\vert}$ where $\vert{C_i}\vert = \vert{n}\vert+1$ for each $i$ from $0$ to $\vert{n}\vert$. Check that $C_0 = q_1s\*^{\vert{n}\vert-\vert{s}\vert}$ and $C_{\vert{n}\vert}$ contains $q_a$.
  - For each $i$ from $1$ to $\vert{n}\vert$, check that either $C_i = C_{i-1}$ or $C_i$ is a legal transition from $C_{i-1}$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Super Mario Bros](Super-Mario-Bros.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Since $L^{\prime}$ is in NP, there exists a non-deterministic one-tape Turing Machine $M_{L^{\prime}}$ and $n_0, c, k \in \mathbb{Z}^+$, such that $$\forall s^{\prime} \in \Sigma^*, \qquad s^{\prime} \in L^{\prime} \iff \text{at least one branch of } M_{L^{\prime}} \text{ accepts } s^{\prime}$$ $$\forall s^{\prime} \in \Sigma^*, \qquad \vert{s^{\prime}}\vert \geq n_0 \Rightarrow \text{all branches of } M_{L^{\prime}} \text{ halt within } c\vert{s^{\prime}}\vert^k \text{ steps on input } s^{\prime}$$ Let $M = M_{L^{\prime}}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $s$ be $x^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $n = \*^{c\vert{s}\vert^k}$ in $T_{L^{\prime}L}(x^{\prime})$.
