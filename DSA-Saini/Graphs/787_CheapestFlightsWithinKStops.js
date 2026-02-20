/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// We only continue exploring this path if we found a cheaper cost to reach `neighbor`.
// Since BFS processes nodes level by level (increasing number of stops),
// we explore all paths with fewer stops before moving to deeper ones.
// Therefore, if we already reached `neighbor` with a lower cost,
// any later path with a higher cost is not worth exploring.

var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = Array.from({ length: n }, () => []);
    for (let [from, to, price] of flights) {
        graph[from].push([to, price])
    }
    let minPrice = Array.from({ length: n }).fill(Infinity);
    minPrice[src] = 0;
    let q = [[src, 0, 0]];

    while (q.length) {
        let [node, price, stop] = q.shift();
        if (stop > k ) continue;
        for (let [neighbor, edgeWeight] of graph[node]) {
            let newWeight = price + edgeWeight;
            if (newWeight < minPrice[neighbor]) { //There will be no chance where smaller element will be there in array and greater element comes later. bcz in BFS level by level is traversed level by level
                q.push([neighbor, newWeight, stop + 1]);
                minPrice[neighbor] = newWeight;
            }

        }

    }
    return minPrice[dst] == Infinity ? -1 : minPrice[dst];

};
//TLE- Nodes getting called again- No point for tracking the visited Node
// ❌ It explores too many useless paths  ❌ No cost pruning  ❌ Can still TLE
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = Array.from({ length: n }, () => []);
    for (let [from, to, price] of flights) {
        graph[from].push([to, price])
    }
    let q = [[src, 0, 0]];
    let minimum = Infinity;
    while (q.length) {
        let [node, price, stop] = q.shift();
        if (node == dst && stop <= k + 1 && price<minimum) {
            minimum = price;
        }
        for (let [neighbor, edgeWeight] of graph[node]) {
            if (stop <= k + 1) {
                q.push([neighbor, price + edgeWeight, stop + 1]);
            }

        }

    }
    return minimum == Infinity ? -1 : minimum;
};
//Non- Working Code using DFS
var findCheapestPrice = function (n, flights, src, dst, k) {
    let graph = Array.from({ length: n }, () => []);
    console.log(graph)
    for (let [from, to, price] of flights) {
        graph[from].push([to, price])
    }
    console.log(graph);
    let minimum = -1;
    let visited = new Set();
    let dfs = (curr, price, stop) => {
        if (stop > k + 1) return;
        if (curr == dst && stop <= k && price < minimum) {
            minimum = price;
            return;
        }
        else if (curr == dst && stop > k) return;
        for (let [node, weight] of graph[curr]) {
            dfs(node, price + weight, stop + 1);
        }
    }
    dfs(src, 0, 0);
    return minimum;
};