#### 🌳 Backtracking Time & Space Complexity Notes
# 78. Subsets
<details>
Let's analyze the **backtracking solution** carefully.

```javascript
var subsets = function(nums) {
    let result = [];

    function backtrack(start, path) {
        result.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
};
```

---

# Time Complexity

There are two things happening:

1. We visit every subset.
2. We copy every subset into `result`.

Let's analyze them separately.

---

## Step 1: How many recursive calls are made?

For an array of size `n`, every possible subset is generated.

Number of subsets:

[
2^n
]

Example

```
n = 3

[]
[1]
[2]
[3]
[1,2]
[1,3]
[2,3]
[1,2,3]
```

There are

```
2³ = 8
```

subsets.

So the recursion tree has **2ⁿ nodes (subsets)**.

---

## Step 2: Cost of each recursive call

Inside every recursive call we do

```javascript
result.push([...path]);
```

The spread operator copies the array.

If

```
path = []
```

Cost is

```
O(0)
```

If

```
path = [1]
```

Cost is

```
O(1)
```

If

```
path = [1,2,3]
```

Cost is

```
O(3)
```

Worst case

```
path has n elements
```

Copy takes

```
O(n)
```

---

## Total Copy Cost

There are

```
2^n
```

subsets.

Each subset copy costs at most

```
O(n)
```

Therefore

[
O(n \times 2^n)
]

---

## Why not just O(2ⁿ)?

Many people think:

> There are only 2ⁿ subsets, so complexity is O(2ⁿ).

But that's incomplete.

Imagine

```
nums = [1,2,3,4]
```

Copying

```
[]
```

takes almost no time.

Copying

```
[1,2,3,4]
```

takes four operations.

The algorithm spends time copying every element of every subset.

---

## Another way to prove it

Let's count how many elements are copied in total.

For

```
n = 3
```

Subsets

```
[]        -> 0 elements
[1]       -> 1
[2]       -> 1
[3]       -> 1
[1,2]     -> 2
[1,3]     -> 2
[2,3]     -> 2
[1,2,3]   -> 3
```

Total copied

```
0+1+1+1+2+2+2+3 = 12
```

Notice

```
3 × 2² = 12
```

For general `n`, the total number of copied elements across all subsets is:

[
n \times 2^{n-1}
]

which simplifies to

[
O(n \times 2^n)
]

This is a more precise explanation of the time complexity.

---

# Space Complexity

There are **two kinds of space**.

## 1. Recursive call stack

Maximum recursion depth occurs when we include every element.

```
backtrack(0)
    backtrack(1)
        backtrack(2)
            backtrack(3)
```

Depth

```
n
```

Stack space

```
O(n)
```

---

## 2. `path` array

At any point

```
path
```

contains at most

```
n
```

elements.

Extra memory

```
O(n)
```

---

## 3. Output array (`result`)

This is usually counted separately because the problem asks us to return all subsets.

There are

```
2^n
```

subsets.

Each subset can contain up to

```
n
```

elements.

So the output occupies

[
O(n \times 2^n)
]

space.

---

# Final Complexity

| Analysis                           | Complexity    |
| ---------------------------------- | ------------- |
| Recursive calls                    | (2^n)         |
| Copying subsets                    | (O(n)) each   |
| **Total Time**                     | **O(n × 2ⁿ)** |
| Recursion stack                    | **O(n)**      |
| `path` array                       | **O(n)**      |
| Auxiliary space (excluding output) | **O(n)**      |
| Output storage                     | **O(n × 2ⁿ)** |

### Interview Answer

If an interviewer asks for the complexity, a good answer is:

* **Time Complexity:** **O(n × 2ⁿ)**, because there are `2ⁿ` subsets and copying each subset into the result takes up to `O(n)` time.
* **Auxiliary Space Complexity:** **O(n)**, due to the recursion stack and the temporary `path` array.
* **Space Complexity Including Output:** **O(n × 2ⁿ)**, because storing all subsets requires that much space.

</details>
