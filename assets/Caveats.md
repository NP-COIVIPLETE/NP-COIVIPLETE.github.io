# $$\text{Caveats}$$

<br>

- The definition of NP allows languages with all sorts of alphabets and all types of encodings. Changing the model of computation would not change the fact that a problem is or is not in NP, but changing the encoding might have an impact on this. We have an NP-Complete problem called [Limited Time Acceptance](../NP-Complete-Family/Limited-Time-Acceptance.md), and notice that it uses unary encoding ("a string $n$") to indicate the number of steps the Turing Machine is allowed to take. If we used the binary encoding instead (say, "a positive integer $n$"), then that problem would no longer be in NP.

- If any unary language (whose alphabet contains exactly one symbol) was NP-Complete, then P would be equal to NP. Thus, at least two symbols should be required for any NP-Complete language. Also, for any language whose alphabet has more than two symbols, notice that it can be easily reduced to a bunch of basically identical languages over $\lbrace 0, 1\rbrace$ where each original symbol is replaced with a binary number representing that symbol.

- Assuming P $\neq$ NP, then provably (by Ladner’s Theorem, 1975) there exists (quite artificial and unnatural) NP problems that are not in P and also not NP-Complete, so NP-Hard is in fact slightly stronger than just requiring exponential-time algorithms to solve. The factoring problem is also believed to be one such problem.

- It is believed that even quantum computing is not able to solve NP-Complete problems in polynomial-time, but it is able to solve the factoring problem in polynomial-time.

- For each NP problem, there is also a corresponding search problem that requires the algorithm to output the certificate $y$ instead of just saying whether such a $y$ exists. If the decision problem is in P, then its corresponding search problem would also be solvable in polynomial-time.

- The set of "certificates" for an NP problem can usually be all strings (over whatever alphabet). That is, for each possible string that the verifier interprets as $y$, there should be an input $x$ that is in the language that is in NP. For example, for every assignment of boolean variables, there is a formula that evaluates to true when using that assignment.
