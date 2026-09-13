# ⚠️ Using Objects as Keys — Plain `{}` vs `Map`

## The Core Rule
**Never use a plain object `{}` to track "have I seen this exact object before."**
Use `Map` or `Set` instead.

---

## Why `{}` Breaks

When you do `obj[someObject] = value`, JS **cannot** use `someObject` directly as
a key. Object keys in a plain `{}` must be strings (or symbols), so JS silently
calls `.toString()` on `someObject` first.

```javascript
const a = { val: 1 };
const b = { val: 2 };

a.toString(); // "[object Object]"
b.toString(); // "[object Object]"   <-- SAME STRING!

let visited = {};
visited[a] = "clone of a";
visited[b] = "clone of b";   // overwrites the SAME key!

console.log(visited); 
// { "[object Object]": "clone of b" }   <-- only one entry!
```

Every plain object stringifies to the same default string, so **all your
"different" object keys silently collapse into one key**. No error is thrown —
it just quietly corrupts your logic. This is a hard bug to spot by reading code.

---

## The Fix: Use `Map`

`Map` compares keys by **reference identity**, not by string coercion.
Two different objects are always two different keys, even if their contents
look identical.

```javascript
const a = { val: 1 };
const b = { val: 2 };

let visited = new Map();
visited.set(a, "clone of a");
visited.set(b, "clone of b");

console.log(visited.get(a)); // "clone of a"  ✅
console.log(visited.get(b)); // "clone of b"  ✅
```

---

## Map API Cheat Sheet

| Plain Object (wrong for object keys) | Map (correct) |
|---|---|
| `obj[key] = val`         | `map.set(key, val)` |
| `obj[key]`                | `map.get(key)` |
| `if (obj[key])`           | `if (map.has(key))` |
| `delete obj[key]`         | `map.delete(key)` |
| `Object.keys(obj)`        | `[...map.keys()]` |

---

## When This Bites You in Graph/Tree Problems

Any time your "visited" tracking needs to key off an **object reference**
(a graph `Node`, a tree `TreeNode`, a DOM element, etc.) — not a primitive
val/id — you need `Map` or `Set`:

```javascript
// ❌ WRONG — silently broken for object keys
let visited = {};
visited[node] = clone;
if (!visited[neighbor]) { ... }

// ✅ CORRECT
let visited = new Map();
visited.set(node, clone);
if (!visited.has(neighbor)) { ... }
```

**Exception:** if you're keying by a primitive (like `node.val`, assuming vals
are unique), a plain object works fine:
```javascript
let visited = {};
visited[node.val] = clone;   // fine — node.val is a number/string, not an object
```

---

## Real Example: Clone Graph Bug (LeetCode 133)

```javascript
// ❌ Buggy version
let visited = {};
visited[node] = cloned;
...
if (!visited[n]) { ... }        // always "sees" the same one key
                                 // → other nodes never get cloned
                                 // → clone can end up pointing to itself

// ✅ Fixed version
let visited = new Map();
visited.set(node, cloned);
...
if (!visited.has(n)) { ... }    // correctly distinguishes each node object
```

**Rule of thumb:** if your key is an *object*, always reach for `Map` (or `Set`
if you just need existence, not an associated value).