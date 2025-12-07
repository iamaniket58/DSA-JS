var findItinerary = function (tickets) {
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (nodes in graph) {
        graph[nodes].sort();
    }
    
    let path=[];
    let dfs=(curr)=>{
        path.push(curr);
        while((graph[curr] || []).length>0){
            let a=graph[curr].shift();
            dfs(a)
        }
    }
    dfs("JFK");
    return path;
};
let tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets))