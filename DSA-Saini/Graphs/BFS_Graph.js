
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    let result = [start];
    while (queue.length) {
        let node = queue.shift();
        for (let n of graph[node]) {
            if (!visited.has(n)) {
                visited.add(n);
                result.push(n);
                queue.push(n);
            }

        }
    }
    return result;

}
//My Method
function bfs1(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];
    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        result.push(node);
        for (let n of graph[node]) {
            if (!visited.has(n)) queue.push(n);
        }
    }
    return result;

}
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A'],
    D: ['B'],
    E: ['B']
};

const graph1 = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3, 4],
    3: [2],
    4:[2]

}

// console.log(bfs1(graph, 'A'));
console.log(bfs1(graph1, 0));
