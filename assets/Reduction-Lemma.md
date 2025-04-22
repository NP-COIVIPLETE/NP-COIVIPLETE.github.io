# $$\text{Reduction Lemma}$$

<br>

## Statement

Let $L \subseteq \Sigma^{\*}$ be in NP.

Assume there exists an NP-Complete set $L^{\prime} \subseteq \Sigma^{\*}$ and a polynomial-time computable function $T_{L^{\prime}L}: \Sigma^{\*} \to \Sigma^{\*}$, such that $$\forall x^{\prime} \in \Sigma^*, \qquad x^{\prime} \in L^{\prime} \iff T_{L^{\prime}L}(x^{\prime}) \in L$$

Then $L$ is NP-Complete.

<br>

## Proof

Let $L^{\prime\prime} \subseteq \Sigma^{\*}$ be in NP.

Since $L^{\prime}$ is NP-Complete, there exists a polynomial-time computable function $T_{L^{\prime\prime}L^{\prime}}: \Sigma^{\*} \to \Sigma^{\*}$, such that $$\forall x^{\prime\prime} \in \Sigma^*, \qquad \qquad x^{\prime\prime} \in L^{\prime\prime} \iff T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime}) \in L^{\prime}$$

Let $T_{L^{\prime\prime}L}: \Sigma^{\*} \to \Sigma^{\*}$ be a function defined by the equation $T_{L^{\prime\prime}L}(x^{\prime\prime}) = T_{L^{\prime}L}(T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime}))$.

Since both $T_{L^{\prime}L}$ and $T_{L^{\prime\prime}L^{\prime}}$ are polynomial-time computable functions:

- By definition, there exists $n_0, c_1, k_1, n_1, c_2, k_2 \in \mathbb{Z}^+$, such that $$\forall x^{\prime} \in \Sigma^*, \qquad \vert{x^{\prime}}\vert \geq n_0 \Rightarrow N(T_{L^{\prime}L}, x^{\prime}) \leq c_1\vert{x^{\prime}}\vert^{k_1}$$ $$\forall x^{\prime\prime} \in \Sigma^*, \qquad \vert{x^{\prime\prime}}\vert \geq n_1 \Rightarrow N(T_{L^{\prime\prime}L^{\prime}}, x^{\prime\prime}) \leq c_2\vert{x^{\prime\prime}}\vert^{k_2}$$

- Since it's impossible to produce exponential-sized outputs in polynomial-time, there exists $n_2, c_3, k_3 \in \mathbb{Z}^+$, such that $$\forall x^{\prime\prime} \in \Sigma^*, \qquad \vert{x^{\prime\prime}}\vert \geq n_2 \Rightarrow \vert{T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})}\vert \leq c_3\vert{x^{\prime\prime}}\vert^{k_3}$$

- For every $n \in \mathbb{Z}^+$, since $T_{L^{\prime}L}$ always halts and there are only finitely many different inputs of size $n$, there exists $x_n^{\prime} \in \Sigma^{\*}$ with $\vert{x_n^{\prime}}\vert = n$, such that for every $x^{\prime} \in \Sigma^{\*}$ with $\vert{x^{\prime}}\vert = n$, we have $N(T_{L^{\prime}L}, x^{\prime}) \leq N(T_{L^{\prime}L}, x_n^{\prime})$.

Take $$n_3 = \max(n_1, \space n_2) \qquad c_4 = 2\max\Big( c_2, \space c_1c_3^{k_1}, \space \max_{n < n_0}\big( N(T_{L^{\prime}L}, x_n^{\prime}) \big) \Big) \qquad k_4 = \max(k_2, \space k_3k_1)$$

Let $x^{\prime\prime} \in \Sigma^{\*}$.

Assume $\vert{x^{\prime\prime}}\vert \geq n_3$.

Then $\vert{x^{\prime\prime}}\vert \geq n_1$ and $\vert{x^{\prime\prime}}\vert \geq n_2$.

- If $\vert{T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})}\vert \geq n_0$, then

$$
\begin{align}
N(T_{L^{\prime\prime}L}, x^{\prime\prime}) &= N(T_{L^{\prime\prime}L^{\prime}}, x^{\prime\prime}) + N(T_{L^{\prime}L}, T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})) \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + c_1\vert{T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})}\vert^{k_1} \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + c_1(c_3\vert{x^{\prime\prime}}\vert^{k_3})^{k_1} \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + c_1c_3^{k_1}\vert{x^{\prime\prime}}\vert^{k_3k_1} \\
\\
&\leq \frac{1}{2}c_4\vert{x^{\prime\prime}}\vert^{k_4} + \frac{1}{2}c_4\vert{x^{\prime\prime}}\vert^{k_4} \\
\\
&\leq c_4\vert{x^{\prime\prime}}\vert^{k_4}
\end{align}
$$

- If $\vert{T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})}\vert < n_0$, then

$$
\begin{align}
N(T_{L^{\prime\prime}L}, x^{\prime\prime}) &= N(T_{L^{\prime\prime}L^{\prime}}, x^{\prime\prime}) + N(T_{L^{\prime}L}, T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})) \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + N(T_{L^{\prime}L}, x_{\vert{T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})}\vert}^{\prime}) \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + \max_{n < n_0}\big( N(T_{L^{\prime}L}, x_n^{\prime}) \big) \\
\\
&\leq c_2\vert{x^{\prime\prime}}\vert^{k_2} + \frac{1}{2}c_4 \\
\\
&\leq \frac{1}{2}c_4\vert{x^{\prime\prime}}\vert^{k_4} + \frac{1}{2}c_4\vert{x^{\prime\prime}}\vert^{k_4} \\
\\
&\leq c_4\vert{x^{\prime\prime}}\vert^{k_4}
\end{align}
$$

Thus, $T_{L^{\prime\prime}L}$ is a polynomial-time computable function.

Furthermore, we have $$x^{\prime\prime} \in L^{\prime\prime} \iff  T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime}) \in L^{\prime} \iff T_{L^{\prime}L}(T_{L^{\prime\prime}L^{\prime}}(x^{\prime\prime})) \in L \iff T_{L^{\prime\prime}L}(x^{\prime\prime}) \in L$$

Therefore, $L$ is NP-Complete.
