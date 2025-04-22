# $$\text{General Language Poem Completion}$$

<br>

## Description

A vocabulary with the number of syllables, type of rhyme, maximum number of appearances, and allowed continuations of each word, positive integers $l$ and $c$, rhyme requirements, and initial words of the poem, such that there exists a complete extension of the poem satisfying the ryhme requirements, containing $l$ lines in total, with each line having $c$ syllables.

<br>

## Definition

- $V_L$:
  - Given $x \in \Sigma^{\*}$ and $y \in \Sigma^{\*}$.
  - Interpret $x$ as the following:
    - A set of words in the vocabulary $V = \lbrace w_1, w_2, ..., w_n \rbrace$.
    - A list of positive integers $s_1, s_2, ..., s_n$ representing the number of syllables of each word in the vocabulary.
    - A list of integers $t_1, t_2, ..., t_n$ representing the type of rhyme of each word in the vocabulary.
    - A list of positive integers $a_1, a_2, ..., a_n$ representing the maximum number of appearances of each word in the vocabulary.
    - A set of two dimensional tuples $G = \lbrace g_1, g_2, ..., g_n \rbrace$ representing allowed bigrams, where each $g_i = (w_j, w_k)$ for some $j$ and $k$.
    - A positive integer $l$.
    - A positive integer $c$.
    - A list of integers $R = [r_1, r_2, ..., r_l]$ representing rhyme requirements.
    - A set of three dimensional tuples $\lbrace (w_{i_1}, p_1, q_1), (w_{i_2}, p_2, q_2), ..., (w_{i_m}, p_m, q_m) \rbrace$ representing initial words and their positions.
  - Interpret $y$ as the following:
    - A nested list of words.
  - Check that there are exactly $l$ lists in $y$.
  - For each list of words in $y$:
    - Check that each bigram appears in $G$.
    - Check that the total number of syllables add up to exactly $c$.
    - Check that the initial words are respected.
  - Check that each word $w_i$ in $y$ appears at most $a_i$ times.
  - For each pair of lists $y_{i_1}$ and $y_{i_2}$ in $y$ containing final words $w_j$ and $w_k$ respectively, check that $t_j = t_k$ if and only if $r_{i_1} = r_{i_2}$.
- $L$: $$L = \lbrace x \in \Sigma^* \mid \exists y \in \Sigma^*, \space V_L(x, y) = 1 \rbrace$$

<br>

## Reduction

- $L^{\prime}$: [Partition](Partition.md).
- $T_{L^{\prime}L}$:
  - Given $x^{\prime} \in \Sigma^{\*}$.
  - Interpret $x^{\prime}$ the same way $V_{L^{\prime}}$ does.
  - For each integer $a_i^{\prime}$ in $A^{\prime}$:
    - Add a word $w_i$ to $V$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Let $s_i = a_i^{\prime}$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Let $t_i = 1$ in $T_{L^{\prime}L}(x^{\prime})$.
    - Let $a_i = 1$ in $T_{L^{\prime}L}(x^{\prime})$.
  - For each pair of integers $a_j^{\prime}$ and $a_k^{\prime}$ in $A^{\prime}$, add a tuple $(w_j, w_k)$ to $G$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $l = 2$ and $$c = \lceil \frac{1}{2} \sum_{i=1}^{n^{\prime}} a_i^{\prime} \rceil$$ in $T_{L^{\prime}L}(x^{\prime})$.
  - Let $R = [0, 0]$ in $T_{L^{\prime}L}(x^{\prime})$.
