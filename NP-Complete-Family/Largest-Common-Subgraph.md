# $$\text{Largest Common Subgraph}$$

<br>

## Description

A positive integer $c$, an undirected graph $G$, and an undirected graph $H$, such that there exists a subgraph in $G$ and a subgraph in $H$ that both contain at least $c$ edges and are isomorphic to each other.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A positive integer $c$.
    - Two sets of vertices $V_1 = \lbrace v_{1,1}, v_{1,2}, ..., v_{1,n_1} \rbrace$ and $V_2 = \lbrace v_{2,1}, v_{2,2}, ..., v_{2,n_2} \rbrace$.
    - Two sets of edges $E_1 = \lbrace e_{1,1}, e_{1,2}, ..., e_{1,m_1} \rbrace$ and $E_2 = \lbrace e_{2,1}, e_{2,2}, ..., e_{2,m_2} \rbrace$ where each $e_{1,i_1} = \lbrace v_{1,j_1}, v_{1,k_1} \rbrace$ for some $j_1$ and $k_1$ with $j_1 \neq k_1$ and each $e_{2,i_2} = \lbrace v_{2,j_2}, v_{2,k_2} \rbrace$ for some $j_2$ and $k_2$ with $j_2 \neq k_2$.
  - Interpret $y$ as the following:
    - Four sets of positive integers $N_1$, $N_2$, $A_1$, $A_2$.
    - A one-to-one function $f: N_1 \to N_2$.
  - Check that $\vert{N_1}\vert = \vert{N_2}\vert$ and $\vert{A_1}\vert = \vert{A_2}\vert \geq c$.
  - Check that each integer in $N_1$ is between $1$ and $n_1$ inclusive, each integer in $N_2$ is between $1$ and $n_2$ inclusive, each integer in $A_1$ is between $1$ and $m_1$ inclusive, and each integer in $A_2$ is between $1$ and $m_2$ inclusive.
  - For each integer $i_1$ in $A_1$ and its corresponding edge $e_{1,i_1} = \lbrace v_{1,j_1}, v_{1,k_1} \rbrace$ in $E_1$, check that the edge $e_{2,i_2} = \lbrace v_{2,f(j_1)}, v_{2,f(k_1)} \rbrace$ is in $E_2$ and $i_2$ is in $A_2$.
  - For each integer $i_2$ in $A_2$ and its corresponding edge $e_{2,i_2} = \lbrace v_{2,j_2}, v_{2,k_2} \rbrace$ in $E_2$, check that the edge $e_{1,i_1} = \lbrace v_{1,f^{-1}(j_2)}, v_{1,f^{-1}(k_2)} \rbrace$ is in $E_1$ and $i_1$ is in $A_1$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Subgraph Isomorphism](Subgraph-Isomorphism.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Let $c = m_2^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V_1^{\prime}$ to $V_1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E_1^{\prime}$ to $E_1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each vertex in $V_2^{\prime}$ to $V_2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E_2^{\prime}$ to $E_2$ in $T_{L^{\prime}L}(x^{\prime})$.
