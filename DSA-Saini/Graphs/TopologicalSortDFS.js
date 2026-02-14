function topologicalSort(n, graph) {
  // your solution here
  let ans = [];
  let visited = new Set();
  let dfs = (curr) => {
    visited.add(curr);
    for (let n of graph[curr]) {
      if (!visited.has(n)) {
        dfs(n);
      }
    }
    ans.push(curr);
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i)
    }
  }
  return ans.reverse();
}

//Test case-1
let adj = [
  [],
  [],
  [3],
  [1],
  [0, 1],
  [0, 2]
];
//TestCase-2
let adj1 = [
  [5, 6],
  [7],
  [1],
  [1],
  [0],
  [2, 4],
  [4, 3],
  []
];
console.log(topologicalSort(8, adj1))