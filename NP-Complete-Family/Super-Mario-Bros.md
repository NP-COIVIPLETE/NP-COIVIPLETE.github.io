# $$\text{Super Mario Bros}$$

<br>

## Description

A deterministic level in the frameworks of the original Super Mario Bros (1985), such that there exists a route that clears the level.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A list of two dimensional integer tuples $R_1, R_2, ..., R_n$ where each room $R_i = (l_i, w_i)$ has $l_i$ pixels in length and $w_i$ pixels in width.
    - For each class of non-player game components with known size in pixels, a list of multi-dimensional integer tuples where each tuple stores valid information (initial location, item type, movement style, length...) about an instance of that component.
    - A two dimensional integer tuple representing a valid initial location of the player with known size in pixels in $R_1$.
    - A set of two dimensional integer tuples which together represents a valid goal area in $R_n$.
  - Interpret $y$ as the following:
    - A list of multi-dimensional binary tuples where each tuple represents the exact keys pressed by the player at that particular frame.
  - For each frame in $y$, go through every list of game components in $x$ to update their status.
  - Check that the player has reached the goal area in the final frame.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Exact Three Conjunctive Normal Form Satisfiability](Exact-Three-Conjunctive-Normal-Form-Satisfiability.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Add a room $R_{n^{\prime}+1}$ to $T_{L^{\prime}L}(x^{\prime})$. For each clause $C_j^{\prime}$ in $x^{\prime}$, add a horizontal section $S_j$ to $R_{n^{\prime}+1}$ with the following game components:
    - A series of brick blocks floating above the floor in the shape of a square with one gap in the middle of the top side, forming a small cage.
    - A question block that fills the gap of the top side of the square cage, containing a mushroom.
    - A pipe in the square cage, always taking the player back to the exact pipe from which they come.
    - A brick block below the square cage on the floor, blocking and stopping the mushroom if it falls from the top of the square cage.
    - Two layers of consecutive fire bars to the right of the stopping brick block, leaving a path in the middle, rotating in a way that is impossible for the player to dodge.
  - For each variable $v_i^{\prime}$ in $x^{\prime}$, add the rooms $R_i, R_{i,1}, R_{i,2}$ to $T_{L^{\prime}L}(x^{\prime})$.
    - Add two pipes to the end of $R_i$ and a non-enterable pipe to the start of each of $R_{i,1}$ and $R_{i,2}$. Let the two pipes in $R_i$ connect to the non-enterable pipes in $R_{i,1}$ and $R_{i,2}$ respectively.
    - For each clause $C_j^{\prime}$ in $x^{\prime}$:
      - If it contains $v_i^{\prime}$, then add a pipe to $R_{i,1}$, connecting to the pipe in $S_j$.
      - If it contains $\neg v_i^{\prime}$, then add a pipe to $R_{i,2}$, connecting to the pipe in $S_j$.
  - For each $i$ from $1$ to $n^{\prime}$, add a pipe to the end of each of $R_{i,1}$ and $R_{i,2}$ and a non-enterable pipe to the start of $R_{i+1}$. Let both pipes in $R_{i,1}$ and $R_{i,2}$ connect to the non-enterable pipe in $R_{i+1}$.
  - Let the initial location of the player be at the start of $R_1$.
  - Let the goal area be at the end of $R_{n^{\prime}+1}$.
