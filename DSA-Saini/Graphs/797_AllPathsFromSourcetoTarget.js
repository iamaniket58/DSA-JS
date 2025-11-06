/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = [];
    let recursion = (curr, path) => {
        if(curr==graph.length-1){
            result.push([...path]);
            return;
        }
        for(let i=0;i<graph[curr].length;i++){
            path.push(graph[curr][i])
            recursion(graph[curr][i],path);
            path.pop();
        }
    }
    recursion(0, [0]);
    return result;
};