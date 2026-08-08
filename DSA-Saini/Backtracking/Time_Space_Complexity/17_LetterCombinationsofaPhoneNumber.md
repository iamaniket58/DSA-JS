This is **LeetCode 17 — Letter Combinations of a Phone Number**. Your solution is a classic **backtracking / Cartesian product** problem.

Let's analyze it carefully.

---

## 1. What does the recursion tree look like?

Each digit maps to either **3 or 4 letters**:

```text
2 → abc       → 3 choices
3 → def       → 3 choices
4 → ghi       → 3 choices
5 → jkl       → 3 choices
6 → mno       → 3 choices
7 → pqrs      → 4 choices
8 → tuv       → 3 choices
9 → wxyz      → 4 choices
```

Suppose:

```javascript
digits = "23"
```

The tree is:

```text
                    ""
             /       |       \
            a        b        c
          / | \    / | \    / | \
         d  e  f  d  e  f  d  e  f

          9 combinations
```

So:

[
3 \times 3 = 9
]

For:

```javascript
digits = "234"
```

we get:

[
3 \times 3 \times 3 = 27
]

For the worst case:

```javascript
digits = "7777"
```

we get:

[
4^4 = 256
]

---

# 2. Time Complexity

Let:

```text
d = digits.length
```

and let each digit have `cᵢ` possible letters.

The number of generated combinations is:

[
c_1 \times c_2 \times \cdots \times c_d
]

Since every digit has at most 4 letters:

[
\boxed{O(4^d)}
]

But there's an important detail in your code.

When you find a combination:

```javascript
result.push(path.join(""));
```

`path.join("")` takes **O(d)** because it creates a string containing `d` characters.

Therefore, generating/storing all results costs:

[
O(d \times 4^d)
]

### So the more accurate time complexity is:

[
\boxed{O(d \times 4^d)}
]

---

# 3. Why not just O(4ᵈ)?

You might see people saying:

```text
O(4^d)
```

That's the complexity of the **number of combinations / recursion leaves**.

But your algorithm actually does:

```javascript
result.push(path.join(""));
```

For every combination.

If there are `4^d` combinations and each string has length `d`:

[
4^d \times d
]

Therefore:

[
\boxed{O(d4^d)}
]

is the more precise complexity for **your implementation including output construction**.

---

# 4. What about the recursion tree's internal nodes?

At each level:

```text
1
4
4²
4³
...
4ᵈ
```

Total nodes:

[
1 + 4 + 4^2 + \cdots + 4^d
]

This is:

[
O(4^d)
]

But at the leaf we additionally construct a string of length `d`.

So overall:

[
\boxed{O(d4^d)}
]

---

# 5. Space Complexity

There are three things to consider.

### A. `path`

Your current path contains at most `d` characters:

```javascript
path.push(arr[index][i]);
```

Therefore:

[
O(d)
]

---

### B. Recursion stack

Maximum recursion depth is:

```text
d
```

Therefore:

[
O(d)
]

---

### C. `result`

This is the important part.

You can generate up to:

[
4^d
]

combinations.

Each combination contains `d` characters.

Therefore output requires:

[
O(d4^d)
]

---

# Auxiliary Space

If we **exclude the output array**:

```text
path      → O(d)
stack     → O(d)
```

Therefore:

[
\boxed{O(d)}
]

---

# Total Space Including Output

[
\boxed{O(d4^d)}
]

---

# 6. What about `arr`?

You first convert:

```javascript
digits = "234"
```

into:

```javascript
arr = ["abc", "def", "ghi"]
```

There are `d` strings, each of maximum length 4.

Therefore:

[
O(4d) = O(d)
]

So `arr` doesn't change the overall complexity.

---

# Final Answer

Let

[
d = digits.length
]

| Component                        |    Complexity |
| -------------------------------- | ------------: |
| Number of combinations           |     **O(4ᵈ)** |
| Building each string             |      **O(d)** |
| **Time**                         | **O(d × 4ᵈ)** |
| `path`                           |      **O(d)** |
| Recursion stack                  |      **O(d)** |
| `arr`                            |      **O(d)** |
| Output                           | **O(d × 4ᵈ)** |
| **Auxiliary Space**              |      **O(d)** |
| **Total Space including output** | **O(d × 4ᵈ)** |

### 🎯 Interview version

If an interviewer asks:

> **What's the TC and SC?**

You can say:

> "There are at most (4^d) combinations because each digit has at most 4 letters. Since we construct a string of length (d) for every combination, the time complexity is **O(d × 4^d)**. The recursion depth and current path both require **O(d)** auxiliary space. Including the output, total space is **O(d × 4^d)**."

One subtle point: **`4^d` is the search-space size, while `d × 4^d` is the output-sensitive complexity.** For this problem, the latter is the more precise answer.
----------------------------------
Yes — **your observation is correct**, but there is an important distinction:

> **27 is the number of complete combinations (the leaf nodes).**
>
> **27 + 9 + 3 + 1 = 40 is the total number of nodes visited in the recursion tree** for `"234"`.

This distinction is exactly what matters when we're discussing time complexity.

Let's visualize it carefully.

---

# 1. Input

```javascript
digits = "234"
```

Mapping:

```text
2 → a b c
3 → d e f
4 → g h i
```

Your recursion does this:

```javascript
for (let i = 0; i < arr[index].length; i++) {
    path.push(arr[index][i]);
    backtrack(path, index + 1);
    path.pop();
}
```

So at every level, you choose **one character**.

---

# 2. Recursion tree

At the beginning:

```text
path = []
```

There is **1 node**.

Then we process digit `2`:

```text
             ""
          /   |   \
         a    b    c
```

There are **3 nodes** at this level.

Then digit `3`:

```text
                    ""
               /     |     \
              a      b      c
            / | \  / | \  / | \
           ad ae af bd be bf cd ce cf
```

There are:

```text
3 × 3 = 9
```

nodes at this level.

Then digit `4`:

```text
ad → adg adh adi
ae → aeg aeh aei
af → afg afh afi

bd → bdg bdh bdi
be → beg beh bei
bf → bfg bfh bfi

cd → cdg cdh cdi
ce → ceg ceh cei
cf → cfg cfh cfi
```

There are:

```text
3 × 3 × 3 = 27
```

nodes at this level.

---

# 3. So total nodes = 1 + 3 + 9 + 27

Exactly what you said:

[
1 + 3 + 9 + 27 = 40
]

So the complete recursion tree contains **40 nodes**.

genui{"probability_combinatorics":{"type_id":"COMBINATION_FORMULA","locale_override":"en-US"}}

---

# 4. But why did I say there are 27 combinations?

Because **"combination" in this problem means a complete answer**.

For example:

```text
adg
adh
adi
aeg
aeh
aei
...
cfg
```

Every answer must contain **3 characters**, because there are 3 digits.

So these are the actual results:

```javascript
[
  "adg",
  "adh",
  "adi",
  "aeg",
  "aeh",
  "aei",
  ...
]
```

There are:

[
3 \times 3 \times 3 = 27
]

of them.

The `1`, `3`, and `9` are **partial paths**, not complete combinations.

---

# 5. Think of it as levels

This is probably the easiest way to understand it:

| Recursion level | What `path` looks like | Number of nodes |
| --------------- | ---------------------- | --------------: |
| Level 0         | `""`                   |               1 |
| Level 1         | `"a"`, `"b"`, `"c"`    |               3 |
| Level 2         | `"ad"`, `"ae"`, ...    |               9 |
| Level 3         | `"adg"`, `"adh"`, ...  |              27 |

Therefore:

```text
Level 0 → 1
Level 1 → 3
Level 2 → 9
Level 3 → 27
```

Total:

[
1+3+9+27=40
]

---

# 6. Now let's connect this to Time Complexity

This is where the confusion usually happens.

You might say:

> "If the recursion visits 40 nodes, shouldn't the complexity be O(40)?"

For this **specific input**, yes.

You could literally say:

```text
For digits = "234":
Number of recursion nodes = 40
```

But Big-O doesn't care about one specific input.

We want to know what happens when `digits.length` grows.

---

# 7. Suppose digits = `"2345"`

Each digit has 3 choices.

The tree becomes:

```text
Level 0 → 1
Level 1 → 3
Level 2 → 9
Level 3 → 27
Level 4 → 81
```

Total:

[
1+3+9+27+81
]

[
=121
]

---

# 8. Suppose digits = `"23456"`

Now:

```text
Level 0 → 1
Level 1 → 3
Level 2 → 9
Level 3 → 27
Level 4 → 81
Level 5 → 243
```

Total:

[
1+3+9+27+81+243
]

[
=364
]

Notice what's happening.

The last level is growing much faster than the previous levels.

---

# 9. General formula

Suppose every digit has exactly 3 choices and there are `d` digits.

The recursion tree has:

[
1 + 3 + 3^2 + 3^3 + \cdots + 3^d
]

nodes.

This is a **geometric series**.

The sum is:

[
\frac{3^{d+1}-1}{3-1}
]

which is:

[
\frac{3^{d+1}-1}{2}
]

In Big-O notation:

[
\boxed{O(3^d)}
]

because the largest term dominates.

---

# 10. What if some digits have 4 choices?

For example:

```text
digits = "279"
```

Mappings:

```text
2 → 3 choices
7 → 4 choices
9 → 4 choices
```

The leaf count is:

[
3 \times 4 \times 4 = 48
]

But the levels are:

```text
Level 0 → 1
Level 1 → 3
Level 2 → 12
Level 3 → 48
```

Total:

[
1+3+12+48=64
]

Again, **48 complete combinations**, but **64 total recursion nodes**.

---

# 11. Why do we still say O(4ᵈ)?

Because each digit has **at most 4 choices**.

Therefore the worst-case tree is:

```text
Level 0 → 1
Level 1 → 4
Level 2 → 16
Level 3 → 64
Level 4 → 256
...
```

Total:

[
1+4+4^2+\cdots+4^d
]

This simplifies to:

[
O(4^d)
]

So:

> **Number of leaf combinations:** `O(4^d)`
>
> **Total recursion nodes:** `O(4^d)`

They have the **same Big-O complexity**, even though their exact counts are different.

---

# 12. This is the key idea

For your example:

```text
digits = "234"
```

You have:

```text
                 Total nodes
                      ↓
             1 + 3 + 9 + 27
             ───────────────
              40 nodes
```

But:

```text
                 Complete answers
                       ↓
                      27
```

So:

### Exact number of recursion nodes

[
\boxed{1+3+9+27=40}
]

### Exact number of complete combinations

[
\boxed{3\times3\times3=27}
]

### Big-O number of recursion nodes

[
\boxed{O(4^d)}
]

### Big-O number of complete combinations

[
\boxed{O(4^d)}
]

They look different mathematically, but have the **same asymptotic complexity**.

---

## One more important point about your code

At the leaf you execute:

```javascript
result.push(path.join(""));
```

For `"234"`, each leaf has 3 characters:

```text
"adg"
```

Creating that string costs `O(3)` for this example.

For `d` digits, each result has `d` characters.

Therefore, although there are `O(4^d)` leaves, creating all the output strings costs:

[
\boxed{O(d4^d)}
]

That's why the **more precise time complexity of your implementation is `O(d × 4^d)`**.

So your intuition about **`1 + 3 + 9 + 27` is absolutely right** — you were counting the **entire recursion tree**, whereas I was counting only the **complete combinations (leaves)**.
