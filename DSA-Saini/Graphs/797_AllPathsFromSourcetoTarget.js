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