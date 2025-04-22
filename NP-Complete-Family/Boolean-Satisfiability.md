# $$\text{Boolean Satisfiability}$$

<br>

## Description

A boolean formula over a list of boolean variables, such that there exists an assignment of the variables that would make the formula true.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of boolean variables $v_1, v_2, ..., v_n$.
    - A boolean formula using operations of not ($\neg$), and ($\land$) , or ($\lor$) over the given variables.
  - Interpret $y$ as the following:
    - A list of boolean values.
  - Check that there are exactly $n$ values in $y$.
  - Assign each value in $y$ to each variable in $x$.
  - Check that the formula in $x$ evaluates to true.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: An arbitrary set that is in NP.
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Since $L^{\prime}$ is in NP, there exists a non-deterministic one-tape Turing Machine $M = (Q, \Sigma, \Gamma, \delta, q_1, q_a, q_r)$ where $Q = \lbrace q_1, q_2, ..., q_{\vert{Q}\vert} \rbrace$ is the finite set of states, $\Sigma$ is the finite set of input symbols allowed, $\Gamma = \lbrace \gamma_1, \gamma_2, ..., \gamma_{\vert{\Gamma}\vert} \rbrace \supsetneq \Sigma$ is the finite set of tape symbols allowed, $\delta: (Q \setminus \lbrace q_a, q_r \rbrace) \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \lbrace -1, 1 \rbrace)$ is the transition fuction, $q_1 \in Q$ is the starting state, $q_a \in Q$ is the accepting state, and $q_r \in Q$ is the rejecting state, and $n_0, c, k \in \mathbb{Z}^+$, such that $$\forall s^{\prime} \in \Sigma^*, \qquad s^{\prime} \in L^{\prime} \iff \text{at least one branch of } M \text{ accepts } s^{\prime}$$ $$\forall s^{\prime} \in \Sigma^*, \qquad \vert{s^{\prime}}\vert \geq n_0 \Rightarrow \text{all branches of } M \text{ halt within } c\vert{s^{\prime}}\vert^k \text{ steps on input } s^{\prime}$$
  - Define $t = c\vert{x^{\prime}}\vert^k$ and let $x^{\prime} = \gamma_{k_1}\gamma_{k_2}...\gamma_{k_{n^{\prime}}}$ for some $k_1, k_2, ..., k_{n^{\prime}}$.
  - For each $i$ from $1$ to $t$ and for each $\iota$ from $1$ to $\vert{Q}\vert$, add a variable $u_{i,\iota}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $t$, for each $j$ from $1$ to $t$, and for each $\xi$ from $1$ to $\vert{\Gamma}\vert$, add a variable $v_{i,j,\xi}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $t$ and for each $j$ from $1$ to $t$, add a variable $w_{i,j}$ to $T_{L^{\prime}L}(x^{\prime})$.
  - Add the following boolean formula to $T_{L^{\prime}L}(x^{\prime})$: $$u_{1,1} \land w_{1,1} \land u_{t,a} \qquad \land$$ $$\bigwedge_{1 \leq j \leq n^{\prime}} v_{1,j,k_j} \qquad \land$$ $$\bigwedge_{1 \leq i \leq t} [ \bigvee_{1 \leq \iota \leq \vert{Q}\vert} u_{i,\iota} \; \land \; \bigwedge_{1 \leq \iota_1 < \iota_2 \leq \vert{Q}\vert} (\neg u_{i,\iota_1} \lor \neg u_{i,\iota_2}) ] \qquad \land$$ $$\bigwedge_{1 \leq i, j \leq t} [ \bigvee_{1 \leq \xi \leq \vert{\Gamma}\vert} v_{i,j,\xi} \; \land \; \bigwedge_{1 \leq \xi_1 < \xi_2 \leq \vert{\Gamma}\vert} (\neg v_{i,j,\xi_1} \lor \neg v_{i,j,\xi_2}) ] \qquad \land$$ $$\bigwedge_{1 \leq i \leq t} [ \bigvee_{1 \leq j \leq t} w_{i,j} \; \land \; \bigwedge_{1 \leq j_1 < j_2 \leq t} (\neg w_{i,j_1} \lor \neg w_{i,j_2}) ] \qquad \land$$ $$\bigwedge_{1 \leq i \leq t-1, \; 1 \leq j_1 \leq t} [ \neg w_{i,j_1} \; \lor \; \bigwedge_{1 \leq j_2 \leq t, \; j_2 \neq j_1, \; 1 \leq \xi \leq \vert{\Gamma}\vert} (\neg v_{i,j_2,\xi} \lor v_{i+1,j_2,\xi}) ] \qquad \land$$ $$\bigwedge_{1 \leq i \leq t-1, \; 1 \leq j \leq t, \; 1 \leq \iota_1 \leq \vert{Q}\vert, \; 1 \leq \xi_1 \leq \vert{\Gamma}\vert} [ \neg u_{i,\iota_1} \lor \neg v_{i,j,\xi_1} \lor \neg w_{i,j} \; \lor \; \bigvee_{(q_{\iota_2}, \gamma_{\xi_2}, b) \; \in \; \delta(q_{\iota_1}, \gamma_{\xi_1}) \lor \lbrace (q_{\iota_1}, \gamma_{\xi_1}, 0) \rbrace} (u_{i+1,\iota_2} \land v_{i+1,j,\xi_2} \land w_{i+1,j+b}) ]$$
