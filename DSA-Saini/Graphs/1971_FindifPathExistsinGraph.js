/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
//BFS Solution using Queue
var validPath = function (n, edges, source, destination) {
    let map = {};
    for (let [x, y] of edges) {
        if (!map[x]) map[x] = [];
        if (!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    let q = [source];
    let visited = new Set([source]);
    while (q.length) {
        let curr = q.shift();
        if (curr == destination) return true;
        for (let n of map[curr]) {
            if (!visited.has(n)) {
                q.push(n);
                visited.add(n);
            }

        }
    }
    return false;
};

//DFS using Stack
var validPath = function (n, edges, source, destination) {
    let map = {};
    for (let [x, y] of edges) {
        if (!map[x]) map[x] = [];
        if (!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    let stack = [source];
    let visited = new Set([source]);
    while (stack.length) {
        let curr = stack.pop();
        if (curr == destination) return true;
        for (let n of map[curr]) {
            if (!visited.has(n)) {
                stack.push(n);
                visited.add(n);
            }

        }
    }
    return false;
};

//DFS-Recursively- Top Down
var validPath = function (n, edges, source, destination) {
    let map = {};
    for (let [x, y] of edges) {
        if (!map[x]) map[x] = [];
        if (!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    console.log(map)
    let visited = new Set([source]);
    let result = false;
    let dfs = (curr) => {
        if (curr == destination) {
            result = true;
            return;
        }
        for (let n of map[curr]) {
            if (!visited.has(n)) {
                visited.add(n);
                dfs(n)
            }

        }
    }
    dfs(source)
    return result;
};

//DFS-Recursively- Bottom Up
var validPath = function (n, edges, source, destination) {
    let map = {};
    for (let [x, y] of edges) {
        if (!map[x]) map[x] = [];
        if (!map[y]) map[y] = [];
        map[x].push(y);
        map[y].push(x);
    }
    let visited = new Set([source]);
    let dfs = (curr) => {
        if (curr == destination)return true;
        for (let n of map[curr]) {
            if (!visited.has(n)) {
                visited.add(n);
                if(dfs(n))return true
            }

        }
        return false
    }
    return dfs(source)
};