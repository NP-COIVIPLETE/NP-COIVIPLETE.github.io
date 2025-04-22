# $$\text{Subgraph Isomorphism}$$

<br>

## Description

An undirected graph $G$ and an undirected graph $H$, such that there exists a subgraph in $G$ that is isomorphic to $H$.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - Two sets of vertices $V_1 = \lbrace v_{1,1}, v_{1,2}, ..., v_{1,n_1} \rbrace$ and $V_2 = \lbrace v_{2,1}, v_{2,2}, ..., v_{2,n_2} \rbrace$.
    - Two sets of edges $E_1 = \lbrace e_{1,1}, e_{1,2}, ..., e_{1,m_1} \rbrace$ and $E_2 = \lbrace e_{2,1}, e_{2,2}, ..., e_{2,m_2} \rbrace$ where each $e_{1,i_1} = \lbrace v_{1,j_1}, v_{1,k_1} \rbrace$ for some $j_1$ and $k_1$ with $j_1 \neq k_1$ and each $e_{2,i_2} = \lbrace v_{2,j_2}, v_{2,k_2} \rbrace$ for some $j_2$ and $k_2$ with $j_2 \neq k_2$.
  - Interpret $y$ as the following:
    - Three sets of positive integers $U$, $V$, $E$.
    - A one-to-one function $f: U \to V$.
  - Check that $U = \lbrace 1, 2, ..., n_2 \rbrace$.
  - Check that there are exactly $n_2$ integers in $V$ and exactly $m_2$ integers in $E$.
  - Check that each integer in $V$ is between $1$ and $n_1$ inclusive and each integer in $E$ is between $1$ and $m_1$ inclusive.
  - For each edge $e_{2,i_2} = \lbrace v_{2,j_2}, v_{2,k_2} \rbrace$ in $E_2$, check that the edge $e_{1,i_1} = \lbrace v_{1,f(j_2)}, v_{1,f(k_2)} \rbrace$ is in $E_1$ and $i_1$ is in $E$.
  - For each edge $e_{1,i_1} = \lbrace v_{1,j_1}, v_{1,k_1} \rbrace$ in $E_1$, check that if $i_1$ is in $E$, then $j_1$ and $k_1$ are in $V$ and the edge $\lbrace v_{2,f^{-1}(j_1)}, v_{2,f^{-1}(k_1)} \rbrace$ is in $E_2$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Clique](Clique.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add each vertex in $V^{\prime}$ to $V_1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Add each edge in $E^{\prime}$ to $E_1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each $i$ from $1$ to $c^{\prime}$, add a vertex $v_{2,i}$ to $V_2$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of vertices $v_{2,j}$ and $v_{2,k}$ in $V_2$ with $j \neq k$, add an edge $\lbrace v_{2,j}, v_{2,k} \rbrace$ to $E_2$ in $T_{L^{\prime}L}(x^{\prime})$.
