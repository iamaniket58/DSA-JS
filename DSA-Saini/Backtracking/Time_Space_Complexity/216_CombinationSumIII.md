This problem (**LeetCode 216 - Combination Sum III**) is quite different from **Combination Sum (39)**.

The key difference is:

* **39:** You can reuse numbers → recursion depth depends on `target`.
* **216:** Every number from **1 to 9** can be used **at most once** → recursion depth is bounded by **9**.

Let's analyze it step by step.

```javascript
var combinationSum3 = function (k, n) {
    let result = [];

    let backtrack = (path, start, sum) => {
        if (path.length == k && sum == n) {
            result.push([...path]);
            return;
        }

        if (sum > n || path.length > k) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(path, i + 1, sum + i);
            path.pop();
        }
    };

    backtrack([], 1, 0);
    return result;
};
```

---

# Step 1: Recursion depth

Since every number is used only once,

```text
1 2 3 4 5 6 7 8 9
```

Maximum recursive depth is

```text
9
```

But practically we stop once

```text
path.length == k
```

So recursion depth is

[
O(k)
]

because we never choose more than `k` numbers.

---

# Step 2: Branching factor

At each level we have fewer choices.

At level 0

```text
9 choices
```

At level 1

```text
8 choices
```

At level 2

```text
7 choices
```

...

This is **not** a fixed branching factor like Combination Sum.

Instead, we're generating **combinations**.

---

# Step 3: How many recursive states?

We're choosing exactly `k` numbers from `1...9`.

The total number of combinations is

[
\binom{9}{k}
]

For each combination we visit one leaf.

So the search explores

[
O\left(\binom{9}{k}\right)
]

states (up to a constant-factor overhead for internal nodes).

---

# Step 4: Cost per solution

Whenever we find

```javascript
path.length == k && sum == n
```

we do

```javascript
result.push([...path]);
```

Copying the path takes

[
O(k)
]

---

# Final Time Complexity

Therefore

[
\boxed{O\left(\binom{9}{k}\times k\right)}
]

---

Since

```text
9 is a constant
```

many interviewers also write

```text
O(C(9,k))
```

or even simply

```text
O(1)
```

because the search space is bounded by a constant (there are only 9 numbers). However, `O(C(9,k) × k)` is the more informative analysis.

---

# Why isn't it exponential?

Unlike Combination Sum,

```text
2
2
2
2
2
...
```

is impossible.

Each number is used only once.

The recursion tree has a fixed maximum size.

Even if

```text
n = 100000
```

the algorithm still only considers subsets of `{1,...,9}`.

---

# Space Complexity

## 1. Recursion stack

Maximum depth

[
O(k)
]

---

## 2. Current path

The path stores at most

```text
k
```

elements.

So

[
O(k)
]

---

## 3. Output

Suppose there are

```text
m
```

valid combinations.

Each stores

```text
k
```

numbers.

Output space

[
O(mk)
]

---

# Auxiliary Space

Ignoring the returned result,

[
\boxed{O(k)}
]

---

# Total Space (including output)

[
\boxed{O(mk)}
]

where

* `m` = number of valid combinations found.

---

# Example

Suppose

```text
k = 3
n = 9
```

Possible combinations are

```text
[1,2,6]
[1,3,5]
[2,3,4]
```

The recursion explores combinations of 3 numbers chosen from 9.

Maximum possible leaves:

[
\binom{9}{3}=84
]

Each successful answer copies 3 elements.

---

# Interview Summary

| Quantity                    | Complexity         |
| --------------------------- | ------------------ |
| Maximum recursion depth     | **O(k)**           |
| Maximum path size           | **O(k)**           |
| Total combinations explored | **O(C(9, k))**     |
| Copying each solution       | **O(k)**           |
| **Time Complexity**         | **O(C(9, k) × k)** |
| Auxiliary Space             | **O(k)**           |
| Space including output      | **O(m × k)**       |

### Comparison with Combination Sum (39)

| Problem                   | Reuse Allowed? | Time Complexity      |
| ------------------------- | -------------- | -------------------- |
| Combination Sum (39)      | ✅ Yes          | **O(n^(T/m) × T/m)** |
| Combination Sum III (216) | ❌ No           | **O(C(9, k) × k)**   |

The dramatic improvement comes from the fact that the search space is limited to the **9 unique digits (1–9)**, so the recursion explores combinations rather than an unbounded exponential tree based on the target value.
