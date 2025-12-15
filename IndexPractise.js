function ShortestDistance(graph, src) {
    let dist = new Array(graph.length).fill(Infinity);
    dist[src] = 0;
    let bfs = (node, distance) => {
        for (let neighbor of graph[node]) {

            if (dist[neighbor] == Infinity) {

                dist[neighbor] = distance + 1;
                bfs(neighbor, distance + 1);
            }
        }
    }
    bfs(src, 0);
    return dist;
}
const graph = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    [],
];
console.log(ShortestDistance(graph, 0))