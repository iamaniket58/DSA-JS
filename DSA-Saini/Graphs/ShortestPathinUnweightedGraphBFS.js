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
const graph=[
    [1,2],
    [3],
    [4],
    [5],
    [3],
    [],
];
// console.log(ShortestDistance(graph,0))

//Find Path of the shortest distance
function ShortestDistancePath(graph, src, destination) {
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
const graph1=[
    [1,2],
    [3],
    [4],
    [5],
    [3],
    [],
];
console.log(ShortestDistancePath(graph1,0,5))