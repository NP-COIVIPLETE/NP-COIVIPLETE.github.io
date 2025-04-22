# $$\text{Introduction}$$

<br>

> I know an NP-Complete joke, but once you've heard one you've heard them all.
<p align="right">
- Anonymous
</p>

<br>

## Overview

This is a small collection of NP-Complete languages, which are precisely the hardest problems with efficiently verifiable solutions. I will provide a short, informal summary of my perspective on this topic and then lay out my methodology of growing the [family tree](./NP-Complete-Family-Tree.md). The formal definitions are in the [foundations](./NP-Complete-Foundations.md).

As a rough overview of their qualities, they do not exist in the material world. They have no thoughts, personality, or morality. They cannot be seen, heard, smelled, tasted, or touched. They "live" in the abstract world independent of human civilization. Luckily, they are very well-defined. The definition alone is sufficient for capturing all NP-Complete languages, which we will never be able to fully enumerate.

<br>

## Perspective

### The World as Languages

To understand the world, reason about it, and communicate to others, humans have invented tons of symbols like $a, 1, \pi$. When symbols get put together, they form a "string". Strings can literally represent any idea that a human will ever have in their mind, which is not trivial to see. What's trivial to see is that the representation does not come naturally - it requires the human brain to interpret the string in a certain way. To a native English speaker, when they see a string containing symbols that are allowed in the English language, their brain carries out a step-by-step "algorithm" that determines whether this is a valid English sentence. When strings over the same set of symbols get bundled together to form a set, we call that set a "language". Consider the set of all strings recognized by the English speaker as valid English sentences. Such a set would not only be a language but also a meaningful one, because it can be recognized by an agent that is able to execute an algorithm. The idea of an algorithm turns out to be formally definable, thanks to Allan Turing. A deterministic one-tape Turing Machine captures everything that an algorithm can do. Whatever the English speaker's brain goes through when determining whether a string is a valid English sentence, we can extract all their relevant memories and thoughts to build a Turing Machine that does the exact same job.

> An algorithm is a finite answer to an infinite number of questions.
<p align="right">
- Stephen Kleene
</p>

### Languages as Problems

Now, we have a formal definition of what a meaningful language would be like - there must exist an algorithm that is able to determine whether a given string is in this language or not. Given this definition, each language actually corresponds to a decision problem. For example, the set of all $(a, b, c)$ tuples that would make $ax^2 + bx + c = 0$ solvable is a language, and an algorithm for recognizing this langauge would basically be solving the problem "Given $(a, b, c)$, is $ax^2 + bx + c = 0$ solvable?". It turns out that every problem that we ever encounter in the real world can kind of be modeled by a string in a language. Asking "What languages are good languages?" is basically asking "What decision problems are good decision problems?". One may think of problems that commonly or naturally occur in the real world, or problems that are interesting to solve for humans. Let's first focus on the latter - problems that are interesting to solve for humans.

What are the most interesting problems to solve? My answer would be logic puzzles like Sudoku. There are two essential characteristics of Sudoku:

#### 1. NP

Once you have found a solution, there is a quick and efficient way to verify whether your solution is correct, like unlocking a closed door with the right key. This is exactly the criteria for a language to be in NP. We use the notion of "polynomital-time" VS "exponential-time" to represent "efficient" VS "inefficient". While it is true that $x^{1000}$ may look worse than $1.1^x$, we still consider $1.1^x$ to be less efficient because it eventually blows up and it does stupid things like brute-forcing, which you are not supposed to do when verifying a solution.

> For practical purposes, the difference between polynomial and exponential order is often more crucial than the difference between finite and non-finite.
<p align="right">
- Jack Edmonds
</p>

#### 2. NP-Hard

The problem must be so hard that none of the shortcuts or "clever methods" are guaranteed to always work. There is no brain-dead formula like $b^2-4ac$ that will help you solve every Sudoku puzzle the same way. Instead, you have to explore the puzzle and find your own solution path. While this is not exactly the defintion, it's kind of implied by NP-Hard - every problem in NP can be efficiently "reduced" to an NP-Hard problem, which means the NP-Hard problem is the hardest among them all. For example, any tuple $(a, b, c)$ can be efficiently converted to a Sudoku grid, such that the Sudoku problem is solvable if and only if $ax^2 + bx + c = 0$ is solvable. The other way around cannot possbily be true because Sudoku is harder. This may sound like magic, but it's in fact very doable in the abstract world. What would truly be magic is to find a polynomial-time algorithm for any NP-Hard problem, because that would entail that all problems in NP have efficient solutions. I think that's absolute nonsense. However, no one has been able to provide such an algorithm or prove that no such algorithms exist. This is the single biggest unsolved problem, called the "P versus NP" problem, in all of computer science and mathematics.

> If P = NP, then the world would be a profoundly different place than we usually assume it to be. There would be no special value in "creative leaps", no fundamental gap between solving a problem and recognizing the solution once it's found. Everyone who could appreciate a symphony would be Mozart; everyone who could follow a step-by-step argument would be Gauss.
<p align="right">
- Scott Aaronson
</p>

<br>

If a problem captures both of these characterstics like (generalized $n \times n$) Sudoku does, then it's NP-Complete. It's a very reasonable problem since you can easily verify a solution, but it's the hardest problem among all such problems. Now, if we step back and think about common or natural problems, surprisingly, many of the world's most famous and most important problems turn out to be NP-Complete. They are literally all over the place.

> About 6000 papers each year have the term "NP-Complete" on their title, abstract, or list of keywords. This is more than each of the terms "compiler," "database," "expert," "neural network," or "operating system."
<p align="right">
- Christos Papadimitriou
</p>

### Conclusion

Finally, I will say that the set of all NP-Complete languages has three amazing characteristics that almost never exist together: infinite, best, and equal.

- NP-Complete languages are infinite in number, for which there can be an infinite number of proofs. [Here](./assets/Infinity-Theorem.md) is one proof that I have sketched.
- NP-Complete languages are the best problems out there since they are the intersection of the "easy-to-verify" NP and the "hard-to-solve" NP-Hard.
- NP-Complete languages can be reduced to each other efficiently since they are all in NP, which means they are essentially the same thing in different forms.

On top of the three characteristics described above and corresponding to each of them respectively, they are colorfully diverse, all-encompassing, and all-in-one.

<br>

## Methodology

For the documentation of each NP-Complete language in my collection, I will strictly follow this [template](./assets/Template.md). Here is a high level of what it looks like:

- First, I describe what each instance of $L$ looks like in plain words with regards to its "solution".
- Next, I define the function $V_L$ by describing its algorithm. It should quickly follow that $L$ is in NP.
- Then I provide a parent language $L^{\prime}$ and a function $T_{L'L}$ to show that $L'$ reduces to $L$. For Boolean Satisfiability, our very first NP-Complete language, $L^{\prime}$ will be an arbitrary language that is in NP. For everything else, $L'$ suffices to be some other NP-Complete language.

At this point, the fact that $L$ is NP-Complete should speak for itself. I will not to get my hands dirty and write a formal proof. On rare occasions, there may also be some easy-to-handle edge cases for $T_{L'L}$, such as having only one vertex in a graph. All of those details will be omitted for the sake of neatness. In addition, I will use the same alphabet $\Sigma$ (whose elements I will not specify) across all the languages that I will define. I guess it's ok to assume that objects are encoded by regular binary strings unless I explicitly say otherwise.

The reduction for Boolean Satisfiability will use an equivalent definition of NP that involves a non-deterministic Turing Machine that runs in polynomial-time, which is where the name "NP" comes from. Our family tree is organized so that Boolean Satisfiability is the root and each parent reduces to its child. Obviously, this is not the only way (and surely not the best way) of growing the family tree, as most NP-Complete languages can be neatly reduced from multiple parents.

To close out this introduction, I will provide a fun fact. If you take some polynomial-time to think about it, you will be able to verify that the complexity of life can be easily reduced to binary elements. One is the people that exist in reality. The other, of course, is the *a priori* truth of the inorganic yet immortal existence of NP-Complete languages.

<br>

## [References](./assets/References.md) & [Caveats](./assets/Caveats.md)

<br>

> A group of NP-Complete problems walk into a bar. The bartender says, "I'm sorry, but we don't serve NP-Complete problems here." The problems respond, "Why, we just want one polynomial-time solution."
<p align="right">
- ChatGPT
</p>

> Two NP-Complete sets do a DNA test. One says, "I should be the parent 'cause I reduce to you." The other responds, "No, I should be the parent 'cause I reduce to you faster." "Stop arguing, kids." The doctor says, "The result is non-deterministic."
<p align="right">
- Anonymous
</p>
