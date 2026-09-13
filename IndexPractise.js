/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    //Sort it
    for (let key in graph) {
        graph[key].sort();
    }
    console.log(graph);
    let q = ["JFK"];
    let ans = [];
    while (q.length) {
        let curr = q.shift();
        console.log(curr);

        ans.push(curr);
        if ((graph[curr] ?? []).length > 0) {
            q.push(graph[curr].shift());
        }
        else break
    }
    return ans;
};
let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
console.log(findItinerary(tickets));