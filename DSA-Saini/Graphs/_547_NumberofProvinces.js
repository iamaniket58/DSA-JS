/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let dfs = (start) => {
        for (let i = 0; i< isConnected[0].length; i++) {
            if (isConnected[start][i] == 1 && !visited.has(i)) {
                visited.add(i);
                dfs(i)
            }
        }
    }
    let visited = new Set();
    let count=0;
    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            count++;
            visited.add(i);
            dfs(i);
        }
    }
    return count;
};
//Revision
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let visited = new Set();
    let dfs = (curr) => {
        visited.add(curr);
        for (let i = 0; i < isConnected[0].length; i++) {
            if (curr != i && !visited.has(i) && isConnected[curr][i] == 1) { //Can avaoid this (curr != i) the same index will be visited alreay when this is encountered
                dfs(i)
            }
        }
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            count++;
            dfs(i);
        }
    }
    return count;
};

//Chat GPT
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let visited = new Array(n).fill(false);
    let provinces = 0;

    function dfs(city) {
        visited[city] = true;

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            dfs(city);
            provinces++;
        }
    }

    return provinces;
};