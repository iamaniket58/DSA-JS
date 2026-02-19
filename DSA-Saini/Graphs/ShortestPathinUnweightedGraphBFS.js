function ShortestDistance(graph, src) {
    let n = graph.length;
    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;

    let q = [src];
    while (q.length) {
        let curr = q.shift();
        for (let neighbor of graph[curr]) {
            if (distance[neighbor] == Infinity) {
                distance[neighbor] = distance[curr] + 1;
                q.push(neighbor);
            }
        }

    }
    return distance;
}
const graph = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    [],
];
// console.log(ShortestDistance(graph,0))

//Find Path of the shortest distance between source to Destination
function ShortestDistancePath(graph, src, destination) {
    let n = graph.length;
    let distance = new Array(n).fill(Infinity);
    let parent = new Array(n).fill(-1);
    distance[src] = 0
    let q = [src];
    while (q.length) {
        let curr = q.shift();
        if (curr == destination) break;
        for (let neighbor of graph[curr]) {
            if (distance[neighbor] == Infinity) {
                distance[neighbor] = distance[curr] + 1;
                parent[neighbor] = curr;
                q.push(neighbor);
            }
        }
    }
    // If destination unreachable
    if (distance[destination] === Infinity) return [];

    let path = [];
    let current = destination;
    while (current != -1) {
        path.push(current);
        current = parent[current];
    }
    return path.reverse();
}
const graph1 = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    [],
];
console.log(ShortestDistancePath(graph1, 0, 5))

//Using recursion-
// Can we use DFS for shortest path in unweighted graph?
// Correct answer:
//     Theoretically yes with pruning, but it is inefficient and may cause stack overflow. BFS is the optimal and standard approach.

// ✅Correct logically
// ✅Safe for cyclic graphs
// ❌ Optimal time complexity
//This is Correct but- Stack Overflow (Very Deep Recursion) in case of 0 → 1 → 2 → 3 → ... → 100000
// ❌ This   recursive DFS solution is NOT guaranteed to work correctly or efficiently for general unweighted graphs.
function ShortestDistance(graph, src) {
    let n = graph.length;
    let distance = new Array(n).fill(Infinity);
    let traverse = (curr, dist) => {

        if (distance[curr] < dist) return;
        distance[curr] = Math.min(distance[curr], dist);

        for (let ne of graph[curr]) {
            traverse(ne, dist + 1)
        }

    }
    traverse(src, 0);
    return distance;
}
