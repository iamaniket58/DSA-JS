/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
//Brute Force- Just like Backtracking- Traversing all the possible paths
//While in optimized one we are traversing only 1 path
// We build a graph and explore all possible paths starting from "JFK",
// trying destinations in lexicographical order and stopping when a path uses all tickets exactly once.

var findItinerary = function (tickets) {
    let graph = {};
    for (let i = 0; i < tickets.length; i++) {
        if (!graph[tickets[i][0]]) graph[tickets[i][0]] = [];
        graph[tickets[i][0]].push(tickets[i][1]);
    }
    for (let key in graph) {
        graph[key].sort();
    }

    let result = null;
    let traverse = (curr, path) => {
        if(path.length==tickets.length+1){
            result=[...path];
            return true;
        }
        for (let i = 0; i < (graph[curr] || []).length; i++) {
            if (graph[curr][i] == "#") continue;
            let temp = graph[curr][i];
            graph[curr][i] = "#";
            path.push(temp);
            if(traverse(temp,path))return true;
            path.pop();
            graph[curr][i] = temp;

        }
    }
    traverse("JFK", ["JFK"]);
    return result;
};

//Exploring Single Path Only
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

//Revision
var findItinerary = function (tickets) {
    let graph = {};
    for (let i = 0; i < tickets.length; i++) {
        if (!graph[tickets[i][0]]) graph[tickets[i][0]] = [];
        graph[tickets[i][0]].push(tickets[i][1]);
    }


    for (let key in graph) {
        graph[key].sort();
    }

    let result = [];
    let traverse = (curr) => {
        while ((graph[curr] || []).length > 0) {
            let peek = graph[curr].shift();
            traverse(peek);
        }
        result.push(curr);
    }
    traverse('JFK')
    return result.reverse();

};

//Use unshift to build the answer
var findItinerary = function (tickets) {
    let graph = {};
    for (let i = 0; i < tickets.length; i++) {
        if (!graph[tickets[i][0]]) graph[tickets[i][0]] = [];
        graph[tickets[i][0]].push(tickets[i][1]);
    }


    for (let key in graph) {
        graph[key].sort();
    }

    let result = [];
    let traverse = (curr) => {
        while ((graph[curr] || []).length > 0) {
            let peek = graph[curr].shift();
            traverse(peek);
        }
        result.unshift(curr);
    }
    traverse('JFK')
    return result;

};