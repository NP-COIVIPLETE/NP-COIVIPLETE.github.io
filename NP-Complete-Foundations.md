# $$\text{Foundations}$$

<br>

## Languages

A string $x$ is a concatenation of finitely many symbols. Define $\vert{x}\vert$ to be the number of symbols in $x$.

An alphabet $\Sigma$ is a non-empty set of finitely many symbols. Define $\Sigma^{\*}$ to be the set of all strings using those symbols.

A langauge $L$ is a set of strings such that $L \subseteq \Sigma^{\*}$ for some alphabet $\Sigma$.

<br>

## Turing Machines

A deterministic one-tape Turing Machine is a tuple $(Q, \Sigma, \Gamma, \delta, q_1, q_a, q_r)$ where $Q$ is the finite set of states, $\Sigma$ is the finite set of input symbols allowed, $\Gamma \supsetneq \Sigma$ is the finite set of tape symbols allowed, $\delta: (Q \setminus \lbrace q_a, q_r \rbrace) \times \Gamma \to Q \times \Gamma \times \lbrace -1, 1 \rbrace$ is the transition fuction, $q_1 \in Q$ is the starting state, $q_a \in Q$ is the accepting state, and $q_r \in Q$ is the rejecting state.

<br>

## Polynomial-Time Computable Functions

Given a function $f: A \to B$, $f$ is a polynomial-time computable function if there exists a deterministic one-tape Turing Machine $M$ and $c, k \in \mathbb{Z}^+$, such that $$\forall x \in A, \qquad M \text{ halts within } c\vert{x}\vert^{k} \text{ steps on input } x \text{ with } f(x) \text{ on the tape}$$

<br>

## NP

Given a language $L \subseteq \Sigma^{\*}$, $L$ is in NP if there exists a polynomial-time computable function $V_L: \overline{\Sigma}^{\*} \to \lbrace 0, 1 \rbrace$ where $\overline{\Sigma} \supsetneq \Sigma$ with some symbol $, \in \overline{\Sigma} \setminus \Sigma$ and $c, k \in \mathbb{Z}^+$, such that  $$\forall x \in \Sigma^*, \qquad x \in L \iff \exists y \in \overline{\Sigma}^*, \space \vert{y}\vert \leq c\vert{x}\vert^{k} \space\land\space V_L(x, y) = 1$$

<br>

## NP-Hard

Given a language $L \subseteq \Sigma^{\*}$, $L$ is NP-Hard if for every language $L^{\prime} \subseteq (\Sigma^{\prime})^{\*}$ in NP, there exists a polynomial-time computable function $T_{L^{\prime}L}: (\Sigma^{\prime})^{\*} \to \Sigma^{\*}$, such that $$\forall x^{\prime} \in (\Sigma^{\prime})^*, \qquad x^{\prime} \in L^{\prime} \iff T_{L^{\prime}L}(x^{\prime}) \in L$$

<br>

## NP-Complete

Given a language $L$, $L$ is NP-Complete if $L$ is in NP and $L$ is NP-Hard.
