/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
    let graph = Array.from({ length: n }, () => []);
    for (let [from, to, weight] of roads) {
        graph[from].push([to, weight]);
        graph[to].push([from, weight]);
    }
    // console.log(graph);
    let dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    let pq = new MinPriorityQueue(x => x.w);
    pq.enqueue({ n: 0, w: 0 });
    let pathCount = new Array(n).fill(0);
    pathCount[0] = 1;
    while (pq.size()) {
        let { n: curr, w: weight } = pq.dequeue();
        if (dist[curr] < weight) continue;
        for (let [node, nodeWeight] of graph[curr]) {
            let newWeight = weight + nodeWeight;
            if (newWeight < dist[node]) {
                dist[node] = newWeight;
                pq.enqueue({ n: node, w: newWeight });
                pathCount[node] = pathCount[curr];
            }
            else if (newWeight == dist[node]) {
                // pathCount[node] = (pathCount[node] + pathCount[curr])%((10**9)+7); Both is Correct
                pathCount[node] = (pathCount[node] + pathCount[curr])%((1e9)+7);
            }
        }
    }
    return pathCount[n - 1];
};

//Sirs Method-Here I am pushing array [[]] instead of object[{}]  to PQ.
var countPaths = function (n, roads) {
    let mod = 1e9+7;
    let graph = Array.from({ length: n }, () => []);
    for (let [u, v, w] of roads) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    let pq = new MinPriorityQueue(x => x[1]);
    let dist = new Array(n).fill(Infinity);
    let pathCount = new Array(n).fill(0);
    dist[0] = 0;
    pathCount[0] = 1;
    pq.enqueue([0,1])
    while (!pq.isEmpty()) {
        let [curr, currWeight] =  pq.dequeue();
        for (let [neighbor, neighborWeight] of graph[curr]) {
            let newWeight = currWeight + neighborWeight;
            if (newWeight < dist[neighbor]) {
                dist[neighbor] = newWeight;
                pq.push([neighbor, newWeight]);
                pathCount[neighbor] = pathCount[curr];
            }
            else if (newWeight == dist[neighbor]) {
                pathCount[neighbor] = (pathCount[neighbor] + pathCount[curr]) % mod
            }
        }
    }
    return pathCount[n-1];
};

//DRY RUN
// Perfect 🔥 this is a **very good graph** to understand 1976 deeply.

// Let’s first rewrite the graph clearly from your image.

// ---

// # 🧠 Graph (Undirected, Weighted)

// Edges:

// ```
// 0 — 1 (2)
// 0 — 4 (5)
// 0 — 6 (7)

// 1 — 3 (3)
// 1 — 2 (3)

// 2 — 5 (1)

// 3 — 5 (1)
// 3 — 6 (3)

// 4 — 6 (2)

// 5 — 6 (1)
// ```

// Destination = node **6**

// We want:

// > Number of shortest paths from 0 → 6

// ---

// # 🛠 Step 0 — Initialization

// ```
// dist =      [0, ∞, ∞, ∞, ∞, ∞, ∞]
// ways =      [1, 0, 0, 0, 0, 0, 0]
// pq = [(0,0)]
// ```

// ---

// # 🔹 Step 1 — Process node 0

// From 0:

// | Neighbor | Cost | Action |
// | -------- | ---- | ------ |
// | 1        | 2    | update |
// | 4        | 5    | update |
// | 6        | 7    | update |

// ```
// dist = [0,2,∞,∞,5,∞,7]
// ways = [1,1,0,0,1,0,1]
// pq = [(1,2),(4,5),(6,7)]
// ```

// ---

// # 🔹 Step 2 — Process node 1 (cost 2)

// From 1:

// | Neighbor | New Cost |
// | -------- | -------- |
// | 3        | 5        |
// | 2        | 5        |

// Both are smaller than infinity.

// ```
// dist = [0,2,5,5,5,∞,7]
// ways = [1,1,1,1,1,0,1]
// pq = [(4,5),(6,7),(3,5),(2,5)]
// ```

// ---

// # 🔹 Step 3 — Process node 4 (cost 5)

// From 4:

// | Neighbor | New Cost |
// | -------- | -------- |
// | 6        | 7        |

// Check:

// ```
// newCost = 5 + 2 = 7
// dist[6] = 7
// ```

// Equal!

// So:

// ```
// ways[6] += ways[4]
// ways[6] = 1 + 1 = 2
// ```

// Now:

// ```
// dist = [0,2,5,5,5,∞,7]
// ways = [1,1,1,1,1,0,2]
// ```

// So currently:
// There are **2 shortest paths to 6**

// ---

// # 🔹 Step 4 — Process node 3 (cost 5)

// From 3:

// | Neighbor | New Cost |
// | -------- | -------- |
// | 5        | 6        |
// | 6        | 8        |

// First 5:

// ```
// dist[5] = 6
// ways[5] = ways[3] = 1
// ```

// Second 6:

// ```
// 8 > 7 → ignore
// ```

// Now:

// ```
// dist = [0,2,5,5,5,6,7]
// ways = [1,1,1,1,1,1,2]
// ```

// ---

// # 🔹 Step 5 — Process node 2 (cost 5)

// From 2:

// | Neighbor | New Cost |
// | -------- | -------- |
// | 5        | 6        |

// Check:

// ```
// newCost = 6
// dist[5] = 6
// ```

// Equal!

// So:

// ```
// ways[5] += ways[2]
// ways[5] = 1 + 1 = 2
// ```

// Now:

// ```
// dist = [0,2,5,5,5,6,7]
// ways = [1,1,1,1,1,2,2]
// ```

// Now there are **2 shortest paths to node 5**

// ---

// # 🔹 Step 6 — Process node 5 (cost 6)

// From 5:

// | Neighbor | New Cost |
// | -------- | -------- |
// | 6        | 7        |

// Check:

// ```
// newCost = 6 + 1 = 7
// dist[6] = 7
// ```

// Equal!

// So:

// ```
// ways[6] += ways[5]
// ways[6] = 2 + 2 = 4
// ```

// Now:

// ```
// dist = [0,2,5,5,5,6,7]
// ways = [1,1,1,1,1,2,4]
// ```

// ---

// # 🔥 FINAL RESULT

// ```
// dist[6] = 7
// ways[6] = 4
// ```

// ---

// # 🎯 What Are Those 4 Paths?

// Let’s list them:

// 1. 0 → 6
// 2. 0 → 4 → 6
// 3. 0 → 1 → 3 → 5 → 6
// 4. 0 → 1 → 2 → 5 → 6

// All cost = 7

// ---

// # 🧠 Why This Works

// Notice what happened:

// * Node 6 got ways from:

//   * Node 0
//   * Node 4
//   * Node 5

// * Node 5 itself had 2 ways

// * So it contributed 2 more ways to 6

// This is exactly:

// ```
// ways[v] += ways[u]
// ```

// Whenever shortest path matches.

// ---

// # 🚀 Deep Insight

// What Dijkstra actually does here:

// 1. Finds shortest distance tree
// 2. That tree forms a DAG
// 3. We are counting paths in that DAG

// It becomes dynamic programming over shortest-path DAG.

// ---

// If you want next:

// * 🔥 I can draw the shortest-path DAG explicitly
// * 🔥 Show why this cannot double count
// * 🔥 Show a tricky case where many layers merge
// * 🔥 Or give an even harder graph

// You’re understanding at a very strong level now 💪
