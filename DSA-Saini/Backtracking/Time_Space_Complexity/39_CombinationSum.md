Let's analyze the complexity of your **Combination Sum** solution carefully.

```javascript
var combinationSum = function (candidates, target) {
    let result = [];

    let backtrack = (path, start, sum) => {
        if (sum > target) return;

        if (sum == target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(path, i, sum + candidates[i]);
            path.pop();
        }
    };

    backtrack([], 0, 0);
    return result;
};
```

---

# Step 1: What determines the recursion depth?

Unlike subsets or permutations, here **an element can be chosen unlimited times**.

The maximum recursion depth occurs when we keep choosing the **smallest candidate**.

Suppose

```
smallest candidate = m
target = T
```

Then maximum depth is

[
\frac{T}{m}
]

Example

```
candidates = [2,3,6,7]
target = 20

Maximum depth = 20/2 = 10
```

So

```
Depth = O(T / m)
```

where

* T = target
* m = smallest candidate

---

# Step 2: Branching factor

Every recursive call has a loop

```javascript
for (let i = start; i < candidates.length; i++)
```

In the worst case,

```
start = 0
```

so every level can choose among

```
n candidates
```

where

```
n = candidates.length
```

So branching factor is

```
n
```

---

# Step 3: Total number of recursive calls

Imagine a recursion tree.

Example

```
depth = 4
branching = 3
```

Tree looks like

```
             root
        /      |      \
      a        b       c
    / | \
   ...
```

Number of nodes

```
1
+n
+n²
+n³
...
+n^d
```

where

```
d = T/m
```

Geometric series

[
1+n+n^2+\cdots+n^d
]

Dominated by last term

[
O(n^d)
]

Substitute

[
d=T/m
]

Therefore

[
O(n^{T/m})
]

---

# Step 4: Cost of each successful solution

Whenever

```javascript
sum == target
```

you do

```javascript
result.push([...path]);
```

Copying

```
[...path]
```

takes

```
O(path length)
```

Maximum path length is

```
T/m
```

Therefore each solution costs

[
O(T/m)
]

---

# Final Time Complexity

Putting both together

[
\boxed{O\left(n^{T/m}\times \frac{T}{m}\right)}
]

where

* n = number of candidates
* T = target
* m = minimum candidate

Many books simplify this as

[
\boxed{O(n^{T/m})}
]

because copying the path is relatively small compared to the exponential search.

---

# Why is it exponential?

Suppose

```
candidates = [2,3]
target = 8
```

Tree

```
                 []
             /        \
           2            3
         /   \        /   \
       2      3      2     3
      ...
```

Every level keeps branching.

As target grows,

```
Depth ↑
```

More branches

```
n × n × n × ...
```

Hence exponential.

---

# Space Complexity

There are **three** parts.

---

## 1. Recursion stack

Maximum recursion depth

```
T/m
```

Therefore

[
O(T/m)
]

---

## 2. Current path

The array

```javascript
path
```

also stores at most

```
T/m
```

elements.

So

```
O(T/m)
```

---

## 3. Output array

Suppose there are

```
k
```

valid combinations.

Each combination may contain

```
T/m
```

numbers.

Hence output occupies

[
O(k\times T/m)
]

This is **required output space**, so many interviewers don't include it when discussing auxiliary space.

---

# Auxiliary Space Complexity

Ignoring the returned answer

[
\boxed{O(T/m)}
]

---

# Total Space Complexity (including output)

[
\boxed{O(k\times T/m)}
]

where

```
k = number of valid combinations
```

---

# Example

```
candidates = [2,3,5]
target = 8
```

Smallest candidate

```
m = 2
```

Maximum depth

```
8/2 = 4
```

Branching factor

```
3
```

Worst-case nodes

```
1
+3
+9
+27
+81

≈ O(3⁴)
```

Actual tree is much smaller because branches stop when

```
sum > target
```

but Big-O considers the worst case.

---

# Interview Summary

| Quantity                | Complexity                                                |
| ----------------------- | --------------------------------------------------------- |
| Maximum recursion depth | **O(T / m)**                                              |
| Branching factor        | **n**                                                     |
| Recursive states        | **O(n^(T/m))**                                            |
| Copying one solution    | **O(T / m)**                                              |
| **Time Complexity**     | **O(n^(T/m) × T/m)** (often simplified to **O(n^(T/m))**) |
| Recursion stack         | **O(T / m)**                                              |
| Path array              | **O(T / m)**                                              |
| Auxiliary Space         | **O(T / m)**                                              |
| Space including output  | **O(k × T/m)**                                            |

This `O(n^(T/m))` complexity is the standard worst-case analysis for **LeetCode 39: Combination Sum**, where the recursion depth is bounded by `target / smallestCandidate` and each level can branch to up to `n` candidate choices.
