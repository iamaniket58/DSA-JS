Let's analyze the complexity of the backtracking solution step by step.

```javascript
var combine = function (n, k) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(1, []);
    return result;
};
```

---

# Time Complexity

There are two main costs:

1. **Generating all valid combinations**
2. **Copying each combination into the result**

---

## Step 1: How many combinations are generated?

We need to choose exactly `k` numbers from `n` numbers.

The number of such combinations is:

[
\binom{n}{k}=\frac{n!}{k!(n-k)!}
]

For example,

```text
n = 4
k = 2
```

The combinations are

```text
[1,2]
[1,3]
[1,4]
[2,3]
[2,4]
[3,4]
```

There are

[
\binom{4}{2}=6
]

combinations.

---

## Step 2: Cost of storing one combination

Whenever we find a valid combination, we execute

```javascript
result.push([...path]);
```

The spread operator copies all `k` elements.

Example:

```text
path = [1,3]
```

Copy takes

```text
O(2)
```

If

```text
k = 5
```

then copying takes

```text
O(5)
```

In general,

```text
Copy = O(k)
```

---

## Total Time

We generate

[
\binom{n}{k}
]

combinations.

Each one requires copying `k` elements.

Therefore,

[
\boxed{O\left(\binom{n}{k}\times k\right)}
]

---

## Why isn't it `O(2ⁿ)`?

Unlike the **Subsets** problem, this algorithm **does not output every subset**.

For example,

```text
n = 20
k = 2
```

Subsets:

```text
2^20 ≈ 1,048,576
```

Combinations:

```text
C(20,2)=190
```

The algorithm only produces **190** results, not over a million.

That's why the tighter complexity depends on

[
\binom{n}{k}
]

instead of

[
2^n.
]

---

# Space Complexity

There are two parts.

## 1. Auxiliary Space

### Recursion Stack

Each recursive call selects one number.

The recursion stops after selecting `k` numbers.

Maximum depth:

```text
k
```

Stack space:

```text
O(k)
```

---

### Path Array

The `path` array also stores at most

```text
k
```

elements.

Memory:

```text
O(k)
```

Therefore, the **auxiliary space** is

[
\boxed{O(k)}
]

---

## 2. Output Space

There are

[
\binom{n}{k}
]

combinations.

Each combination has `k` numbers.

So the returned result occupies

[
\boxed{O\left(\binom{n}{k}\times k\right)}
]

space.

---

# Final Complexity

| Complexity                   | Value                                    |
| ---------------------------- | ---------------------------------------- |
| Number of combinations       | (\binom{n}{k})                           |
| Time to copy one combination | (O(k))                                   |
| **Time Complexity**          | **(O\left(\binom{n}{k}\times k\right))** |
| Recursion stack              | **(O(k))**                               |
| Path array                   | **(O(k))**                               |
| **Auxiliary Space**          | **(O(k))**                               |
| **Output Space**             | **(O\left(\binom{n}{k}\times k\right))** |

### Interview explanation

A concise interview answer is:

> The algorithm generates exactly `C(n, k)` valid combinations. Each valid combination is copied into the result array, which takes `O(k)` time. Therefore, the total time complexity is **`O(C(n, k) × k)`**. The recursion depth and temporary `path` array each require at most `k` elements, so the auxiliary space complexity is **`O(k)`**, excluding the output. Including the output, the space complexity is **`O(C(n, k) × k)`**.
