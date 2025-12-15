class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    //This method will help us to find the root of the x
    find(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX == rootY) return false; //Cycle Found

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        }
        else if (this.rank[rootY] > this.rank[rootX]) {
            this.parent[rootX] = rootY;
        }
        else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++
        }
        return true;
    }
}

function Krushkal(n, edges) {
    let mstCost=0;
    //Sort the edges
    edges.sort((a, b) => a[2] - b[2]);

    let uf=new UnionFind(n);
    for(let [u,v,w] of edges){
        if(uf.union(u,v)){
            mstCost+=w;
        }
        else{
            //Cycle Detected
        }
    }
    return mstCost
}
const edges = [
  [0, 1, 4],
  [0, 2, 4],
  [1, 2, 2],
  [2, 3, 3],
  [2, 5, 2],
  [2, 4, 4],
  [3, 4, 3],
  [5, 4, 3],
];

console.log(Krushkal(6,edges));