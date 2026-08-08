Let's analyze the complexity of the **correct backtracking solution** for **46. Permutations**.

```javascript
var permute = function(nums) {
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);

    function backtrack() {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack();

            path.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
};
```

---

# Time Complexity

The total time comes from two parts:

1. Generating all permutations.
2. Copying each permutation into the result.

---

## Step 1: How many permutations are there?

Suppose

```text
nums = [1,2,3]
```

For the first position, we have

```text
3 choices
```

For the second position,

```text
2 choices
```

For the last position,

```text
1 choice
```

Total permutations:

[
3 \times 2 \times 1 = 3!
]

For general `n` numbers:

[
\boxed{n!}
]

So the algorithm visits **all `n!` permutations**.

---

## Step 2: Cost of storing one permutation

Whenever a permutation is complete, we execute

```javascript
result.push([...path]);
```

`path` contains exactly `n` elements.

The spread operator copies all of them.

Therefore,

```text
One copy = O(n)
```

---

## Total Time

Number of permutations:

[
n!
]

Cost of copying each one:

[
O(n)
]

Therefore,

[
\boxed{O(n \times n!)}
]

---

## Why not just `O(n!)`?

Many people stop after counting the number of permutations.

But every permutation must be copied into `result`.

Example:

```text
[1,2,3,4]
```

Copying requires

```text
4 operations
```

Since there are `n!` permutations, the total copying work is

```text
n × n!
```

---

# Space Complexity

There are two types of space.

---

## 1. Auxiliary Space

### Recursion Stack

The recursion depth reaches

```text
n
```

because one number is selected at each level.

Stack space:

[
O(n)
]

---

### Path Array

`path` stores the current permutation.

Maximum size:

```text
n
```

Memory:

[
O(n)
]

---

### Used Array

```javascript
used = new Array(nums.length)
```

contains `n` boolean values.

Memory:

[
O(n)
]

---

So the total **auxiliary space** is still

[
\boxed{O(n)}
]

because all three structures (`path`, `used`, and the recursion stack) are linear in `n`.

---

## 2. Output Space

There are

[
n!
]

permutations.

Each permutation has

[
n
]

elements.

Therefore, the result array occupies

[
\boxed{O(n \times n!)}
]

space.

---

# Final Complexity

| Complexity             | Value                |
| ---------------------- | -------------------- |
| Number of permutations | (n!)                 |
| Copy one permutation   | (O(n))               |
| **Time Complexity**    | **(O(n \times n!))** |
| Recursion stack        | **(O(n))**           |
| `path` array           | **(O(n))**           |
| `used` array           | **(O(n))**           |
| **Auxiliary Space**    | **(O(n))**           |
| **Output Space**       | **(O(n \times n!))** |

---

## Interview explanation

A concise interview answer is:

> The algorithm generates all `n!` permutations. Each completed permutation is copied into the result array, which takes `O(n)` time. Therefore, the total time complexity is **`O(n × n!)`**. The recursion stack, `path` array, and `used` array each require at most `O(n)` space, so the **auxiliary space** is **`O(n)`**. Including the output, the total space complexity is **`O(n × n!)`**.
