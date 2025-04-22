# $$\text{Cooperative Two Player Uno}$$

<br>

## Description

A generalized, cooperative, perfect information Uno card game between two players with no action cards or draw pile, such that there exists a discarding sequence that would make the first player win.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - Two sets of cards $C_1 = \lbrace c_{1,1}, c_{1,2}, ..., c_{1,n_1} \rbrace$ and $C_2 = \lbrace c_{2,1}, c_{2,2}, ..., c_{2,n_2} \rbrace$ where each $c_{i,j}$ is a two dimensional positive integer tuple indicating color and number.
  - Interpret $y$ as the following:
    - Two lists of distinct positive integers.
  - Check that there are exactly $n_1$ integers in the first list in $y$.
  - Check that each integer in the first list in $y$ is between $1$ and $n_1$ inclusive and each integer in the second list in $y$ is between $1$ and $n_2$ inclusive.
  - Discard the first integer of the first list in $y$ together with the corresponding card of the first player.
  - Set the current player to be the second player.
  - While the current player still has cards remaining, discard the first integer of that player's list in $y$ together with the corresponding card of that player, and check if this card's color or number matches the previously discarded card.
    - If so, then check if the current player still has cards remaining.
      - If so, then set the current player to be the other player.
      - If not, then check that the current player is the first player.
    - If not, then check that no card of the current player matches the previously discarded card, check that the current player is not the player who discarded the previous card, put this card back, and set the current player to be the other player.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Path](Hamiltonian-Path.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - For each vertex $v_i^{\prime}$ in $V^{\prime}$, add a card $(i, i)$ to $C_1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ in $E^{\prime}$, add a card $(j, k)$ to $C_2$ in $T_{L^{\prime}L}(x^{\prime})$.
