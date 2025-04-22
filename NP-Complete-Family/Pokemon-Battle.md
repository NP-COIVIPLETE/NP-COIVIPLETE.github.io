# $$\text{Pokemon Battle}$$

<br>

## Description

A generalized, deterministic Pokemon battle setup and a string $n$, such that there exists a strategy for the player to beat the boss in at most $\vert{n}\vert$ turns.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A weighted directed graph representing types and their relationships.
    - A set of Pokemon objects containing all their data.
    - An ordered list of Pokemon that your boss has.
    - A set of Pokemon that you have.
    - For each Pokemon that your boss has, a move order that it will follow periodically.
    - A string $n$.
  - Interpret $y$ as the following:
    - An ordered list of actions that you will take.
  - Check that by following the rules and the actions, you will defeat the boss in at most $\vert{n}\vert$ turns.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Hamiltonian Path](Hamiltonian-Path.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - Convert the graph in $x^{\prime}$ to a type graph in $T_{L^{\prime}L}(x^{\prime})$ where each edge $\lbrace v_j^{\prime}, v_k^{\prime} \rbrace$ means that type $v_j$ attacks will be super effective against type $v_k$ Pokemon and vice versa.
  - Create a Pokemon - Muse:
    - Type: Normal
    - HP: $n^{\prime}-1$
    - Ability: The Pokemon's defense is unbreakable, taking only $1$ point of damage from super effective attacks. It is completely immune to all other forms of damage and status conditions.
    - Moves:
      - Unparalleled Excellence:
        - Type: Normal
        - Category: Special
        - Power: $150$
        - PP: $n^{\prime}$
        - Priority: $-7$
        - Description: The user achieves unparalleled excellence by replicating the opponent's elemental essence, becoming the same type as the target. This move always strikes last.
  - For each type $v_i$ in the type graph, create a Pokemon - $i$ Eet:
    - Type: $v_i$
    - HP: $1$
    - Moves:
      - $i$ Eet Tackle:
        - Type: $v_i$
        - Category: Physical
        - Power: $40$
        - PP: $35$
        - Description: The user charges at the target with the force of its $v_i$-typed energy, delivering a powerful blow.
  - Your boss will have Muse and you will have the Eets.
  - Let $n = \*^{n^{\prime}}$ in $T_{L^{\prime}L}(x^{\prime})$.
