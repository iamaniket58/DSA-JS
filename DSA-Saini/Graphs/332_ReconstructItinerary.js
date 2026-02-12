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
//For loop which is not good- Solution will not work
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

//Revision
var findItinerary = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (nodes in graph) {
        graph[nodes].sort();
    }

    let path = [];
    let dfs = (curr) => {
        while ((graph[curr] || []).length > 0) {
            let a = graph[curr].shift();
            dfs(a)
        }
        path.push(curr);
    }
    dfs("JFK");
    return path.reverse();
};
//Instaedad of Reverse do unshift
var findItinerary = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (nodes in graph) {
        graph[nodes].sort();
    }

    let path = [];
    let dfs = (curr) => {
        while ((graph[curr] || []).length > 0) {
            let a = graph[curr].shift();
            dfs(a)
        }
        path.unshift(curr);
    }
    dfs("JFK");
    return path;
};

// findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])
findItinerary1([["JFK","BAT"],["JFK","CAT"],["CAT","JFK"]])

//Non-Working code for Edge Case but good for understanding
var findItinerary = function (tickets) {
    let graph = {};
    for (let i = 0; i < tickets.length; i++) {
        if (!graph[tickets[i][0]]) graph[tickets[i][0]] = [];
        graph[tickets[i][0]].push(tickets[i][1]);
    }

    for (let key in graph) {
        graph[key].sort();
    }

    let result = ["JFK"];
    let traverse = (curr) => {
        while ((graph[curr] || []).length>0) {
            let peek = graph[curr].shift();
            result.push(peek);
            traverse(peek);
        }
    }
    traverse('JFK')
    return result;
};
// Explore the working of all 3 ways to understand working of loops while removing the elements
let array = [2, 4, 6, 8];
//1
for (let x of array) {
    array.shift()
    console.log(x)
}
//2
for (let x of array) {
    let a=array.shift()
    console.log(a)
}
//3
while(array.length){
    let a=array.shift()
    console.log(a)
}
