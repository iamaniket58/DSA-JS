function floydWarshall(V, edges) {
    let dist = [];
    //Constructing a Matrix
    for (let i = 0; i < V; i++) {
        let arr = [];
        for (let j = 0; j < V; j++) {
            if (i == j) {
                arr.push(0);
            }
            else {
                arr.push(Infinity)
            }
        }
        dist.push(arr);
    }

    //Coding logic implementation
    for (let [i, j, w] of edges) {
        dist[i][j] = w;
    }


    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (i == j || i == k || j == k) continue;
                dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
            }
        }
    }
    console.log(dist)
}

//Another way of creating matrix
function floydWarshall1(V, edges) {
    //Another way creating Matrix
    let dist = Array.from({ length: V }, (_, i) =>
        Array.from({ length: V }, (_, j) => (i == j) ? 0 : Infinity)
    );

    //Coding logic implementation
    for (let [i, j, w] of edges) {
        dist[i][j] = w;
    }

    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (i == j || i == k || j == k) continue;
                dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
            }
        }
    }
    console.log(dist)
}
const edges = [
    [0, 1, 2],
    [1, 0, 7],
    [1, 2, 3],
    [2, 1, 8],
    [2, 3, 2],
    [3, 0, 1],
    [3, 1, 5],
];

console.log(floydWarshall(4, edges))