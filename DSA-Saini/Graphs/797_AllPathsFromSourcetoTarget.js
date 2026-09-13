/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = [];
    let recursion = (curr, path) => {
        if (curr == graph.length - 1) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < graph[curr].length; i++) {
            path.push(graph[curr][i])
            recursion(graph[curr][i], path);
            path.pop();
        }
    }
    recursion(0, [0]);
    return result;
};

//Another way of writing for loop
var allPathsSourceTarget = function (graph) {
    let result = [];
    let bt = (curr, path) => {
        if (curr == graph.length - 1) {
            result.push([...path]);
            return;
        }
        for (let n of graph[curr]) {
            path.push(n);
            bt(n, path);
            path.pop();
        }
    }
    bt(0, [0]);
    return result;
};

//Iterative
var allPathsSourceTarget = function (graph) {
    let result = [];
    let stack = [[0, [0]]];
    while (stack.length) {
        let [curr, path] = stack.pop();
        // console.log(curr,path)
        if (curr == graph.length - 1) {
            result.push(path);
            continue;
        }
        for (let n of graph[curr]) {
            stack.push([n, [...path, n]])
        }
    }
    return result;
};

//Revision
var allPathsSourceTarget = function (graph) {
    let result = [];
    let target = graph.length - 1;
    let dfs = (curr, path) => {
        if (curr == target) {
            result.push([...path]);
            return;
        }
        for (let n of graph[curr]) {
            path.push(n);
            dfs(n,path);
            path.pop();
        }
    }
    dfs(0, [0]);
    return result;
};