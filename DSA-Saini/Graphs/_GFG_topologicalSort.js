/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */

class Solution {
    topoSort(V, edges) {
        // code here
        let graph=[];
        for(let [from,to] of edges){
            if(!graph[from])graph[from]=[];
            graph[from].push(to);
        }
        
        let indegree=new Array(V).fill(0);
        for(let i=0;i<V;i++){
            for( let n of graph[i] || []){
                indegree[n]++;
            }
        }
        
        let q=[];
        for(let i=0;i<V;i++){
            if(indegree[i]==0)q.push(i);
        }
        
        let topo=[];
        while(q.length){
            let curr=q.shift();
            for(let n of graph[curr] || []){
                indegree[n]--;
                if(indegree[n]==0)q.push(n);
            }
            topo.push(curr)
        }
       if (topo.length !== V) return [];  // cycle case
        return topo;
        
    }
}