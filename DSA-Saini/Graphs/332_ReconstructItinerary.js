/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    //We cannot follow Greedy -> Backtracking.
    //Sort the Adj List to maintain the lexical order.
    //Keep removing edhges from adj List(graph) to mark as visited.
    
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for (let nodes in graph) {
        graph[nodes].sort();
    }
    //console.log(graph);
    let path = [];
    let dfs = (curr) => {
        
        let destination = graph[curr] || []; //It is not a new Variable, its just referring to graph[curr]
        while (destination.length) {
            let n=graph[curr].shift();
            dfs(n)
        }
        path.push(curr);
    }
    dfs("JFK");
    return path.reverse();
};




//Instead of for using while- For is not good- Check NoteBook
// This Solution is also Good but all the testcases won't pass
var findItinerary1 = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for (let nodes in graph) {
        graph[nodes].sort();
    }
    console.log(graph);
    let path = [];
    let dfs = (curr) => {
        path.push(curr);
        let destination = graph[curr] || []
        while (destination.length) {
            let k=graph[curr].shift();
            dfs(k)
        }
    }
    dfs("JFK");
    return path;
};
//For loop which is not good
var findItinerary = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for (let nodes in graph) {
        graph[nodes].sort();
    }
    console.log(graph);
    let path = [];
    let dfs = (curr) => {
        path.push(curr);
        let destination = graph[curr] || []
        for (let x of destination) {
            let k=graph[curr].shift();
            dfs(k)
        }
    }
    dfs("JFK");
    return path;
};

// findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])
findItinerary1([["JFK","BAT"],["JFK","CAT"],["CAT","JFK"]])