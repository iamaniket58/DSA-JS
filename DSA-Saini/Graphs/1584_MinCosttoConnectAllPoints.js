/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;
    let pq = new MinPriorityQueue(x => x[1]);
    let visited = new Set();
    let edgeCount = 0;
    let minCost = 0;
    pq.enqueue([0, 0]);
    while (edgeCount < n) {
        let [curr, currWeight] = pq.dequeue();
        if (visited.has(curr)) continue;
        visited.add(curr);
        edgeCount++;
        minCost += currWeight;

        for (let nextNode = 0; nextNode < n; nextNode++) {
            if (!visited.has(nextNode)) {
                let newDist = Math.abs(points[curr][0] - points[nextNode][0]) +
                    Math.abs(points[curr][1] - points[nextNode][1]);
                pq.enqueue([nextNode, newDist])
            }
        }
    }
    return minCost;
};

//Dry Run
// Perfect 👌 I understand what you want.

// You want the **heap-based Prim’s version** (like shown in the screenshot) dry-run step by step using the same example:

// ```
// points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// ```

// From the screenshot, the code logic is basically this:

// ```js
// let n = points.length;
// let pq = new MinPriorityQueue(x => x[0]); // [distance, node]

// let minCost = 0;
// let visited = new Array(n).fill(false);

// pq.push([0, 0]);   // distance 0 to start node
// let edgesUsed = 0;

// while (edgesUsed < n) {
//     let [nodeDist, node] = pq.pop();

//     if (visited[node]) continue;

//     visited[node] = true;
//     minCost += nodeDist;
//     edgesUsed++;

//     for (let nextNode = 0; nextNode < n; nextNode++) {
//         if (!visited[nextNode]) {
//             let nextDist =
//                 Math.abs(points[node][0] - points[nextNode][0]) +
//                 Math.abs(points[node][1] - points[nextNode][1]);

//             pq.push([nextDist, nextNode]);
//         }
//     }
// }
// ```

// Notice:

// * We are NOT maintaining `minDist[]`
// * We allow duplicates in heap
// * We skip visited nodes when popped

// This is pure heap-based Prim.

// ---

// # 🔥 DRY RUN STEP BY STEP

// Points:

// ```
// 0 → (0,0)
// 1 → (2,2)
// 2 → (3,10)
// 3 → (5,2)
// 4 → (7,0)
// ```

// ---

// # 🔹 Initial State

// ```
// pq = [(0,0)]
// visited = [F,F,F,F,F]
// minCost = 0
// edgesUsed = 0
// ```

// ---

// # 🔹 Iteration 1

// Pop:

// ```
// (0,0)
// ```

// Node = 0
// Distance = 0

// Mark visited:

// ```
// visited = [T,F,F,F,F]
// minCost = 0
// edgesUsed = 1
// ```

// Push distances from node 0:

// | To | Distance |
// | -- | -------- |
// | 1  | 4        |
// | 2  | 13       |
// | 3  | 7        |
// | 4  | 7        |

// Heap:

// ```
// [(4,1),(13,2),(7,3),(7,4)]
// ```

// ---

// # 🔹 Iteration 2

// Pop smallest:

// ```
// (4,1)
// ```

// Mark visited:

// ```
// visited = [T,T,F,F,F]
// minCost = 4
// edgesUsed = 2
// ```

// Push distances from node 1:

// | To | Distance |
// | -- | -------- |
// | 2  | 9        |
// | 3  | 3        |
// | 4  | 7        |

// Heap now contains (old + new):

// ```
// (3,3)
// (7,3)
// (7,4)
// (13,2)
// (9,2)
// (7,4)
// ```

// (Heap auto-sorted internally)

// ---

// # 🔹 Iteration 3

// Pop smallest:

// ```
// (3,3)
// ```

// Mark visited:

// ```
// visited = [T,T,F,T,F]
// minCost = 7
// edgesUsed = 3
// ```

// Push distances from node 3:

// | To | Distance |
// | -- | -------- |
// | 2  | 10       |
// | 4  | 4        |

// Heap now:

// ```
// (4,4)
// (7,3)
// (7,4)
// (13,2)
// (9,2)
// (7,4)
// (10,2)
// ```

// ---

// # 🔹 Iteration 4

// Pop smallest:

// ```
// (4,4)
// ```

// Mark visited:

// ```
// visited = [T,T,F,T,T]
// minCost = 11
// edgesUsed = 4
// ```

// Push from node 4:

// | To | Distance |
// | -- | -------- |
// | 2  | 14       |

// Heap:

// ```
// (7,3)
// (7,4)
// (9,2)
// (13,2)
// (7,4)
// (10,2)
// (14,2)
// ```

// ---

// # 🔹 Iteration 5

// Pop:

// ```
// (7,3)
// ```

// But node 3 already visited → skip

// Next pop:

// ```
// (7,4)
// ```

// Node 4 visited → skip

// Next pop:

// ```
// (9,2)
// ```

// Node 2 unvisited → take it

// Mark visited:

// ```
// visited = [T,T,T,T,T]
// minCost = 20
// edgesUsed = 5
// ```

// STOP (edgesUsed == n)

// ---

// # ✅ FINAL ANSWER

// ```
// minCost = 20
// ```

// Same as previous approach.

// ---

// # 🧠 What’s Happening Internally?

// Unlike the earlier version:

// * We don’t maintain `minDist[]`
// * Heap may contain multiple entries for same node
// * We ignore outdated ones using:

// ```
// if (visited[node]) continue;
// ```

// This is lazy deletion technique.

// ---

// # 🎯 Why This Still Works

// Because:

// Prim’s rule:

// > Always pick smallest edge connecting visited ↔ unvisited.

// Even if heap has duplicates,
// first time we pop an unvisited node,
// that edge is guaranteed minimum connection.

// ---

// # 🚀 Difference From Previous Version

// Earlier version:

// * Maintained minDist[]
// * O(n²)

// This version:

// * Uses heap
// * Time: O(n² log n)
// * Slightly slower for this problem

// ---

// # 🔥 Final Intuition

// Heap stores:

// ```
// “All possible edges from MST to outside”
// ```

// Each step:

// * Pick smallest valid one
// * Expand MST

// ---

// If you want next, I can:

// * Draw MST visually
// * Show why greedy works (cut property)
// * Compare heap vs no-heap version mathematically
// * Convert this to Kruskal and dry run

// You’re now understanding MST deeply 💪
