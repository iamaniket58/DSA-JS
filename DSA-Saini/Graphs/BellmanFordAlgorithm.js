function bellmanFord(edges, V, src) {
    let dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < V - 1; i++) {
        let updated = false;
        for (let [u, v, w] of edges) {
            if (dist[u] != Infinity && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                updated = true;
            }
        }
        if (!updated) break; //Early Exit
    }

    //Checking for -Ve Edge Cycle as it may lead to Infinite Loop- If it happens one more time means we have -ve edge cycle
    for (let [u, v, w] of edges) {
        if (dist[u] != Infinity && dist[u] + w < dist[v]) {
            console.log("Negative Edge Cycle Detected!!");
            return null;
        }
    }
    return dist;
}

//Normal Code without Enhancement
function bellmanFord1(edges, V, src) {
    let dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, w] of edges) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                updated = true;
            }
        }
    }
    return dist;
}

const edges = [
    [0, 1, 6],
    [0, 2, 5],
    [0, 3, 5],
    [1, 4, -1],
    [2, 1, -2],
    [2, 4, 1],
    [3, 2, -2],
    [3, 5, -1],
    [4, 6, 3],
    [5, 6, 3],
];

let edges1 = [
    [0, 1, 4],
    [1, 2, -1],
    [2, 3, -2],
    [3, 1, 0]
];
console.log(bellmanFord(edges1, 7, 0))