function BFS(graph, start) {
    let q = [start];
    let visited = new Set();
    let ans = [];
    while (q.length) {
        let curr = q.shift();
        visited.add(curr);
        ans.push(curr);
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                q.push(n)
            }
        }
    }
    return ans;
}

function BFS1(graph, start) {
    let q = [start];
    let visited = new Set();
    let ans = [];
    visited.add(start);
    while(q.length){
        let curr=q.shift();
        ans.push(curr);
        for(let n of graph[curr]){
            if(!visited.has(n)){
                q.push(n);
                visited.add(n)
            }
        }
    }
    return ans;
}
let graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 4],
    3: [1],
    4: [2]
}
let graph1 = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
};
console.log(BFS(graph1,0));
console.log(BFS1(graph1,0));