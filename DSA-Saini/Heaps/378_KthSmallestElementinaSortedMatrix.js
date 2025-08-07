/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let minHeap=new MinPriorityQueue(x=>x.val);
    let n=matrix[0].length;
    for(let i=0;i<matrix.length;i++){
        minHeap.push({val:matrix[i][0],row:i,col:0})
    }
    count=0
    while(count<k-1){
        let poped=minHeap.pop();
        if(poped.col+1<n){
            minHeap.push({val:matrix[poped.row][poped.col+1],row:poped.row,col:poped.col+1})
        }
        count++
        
    }
    return minHeap.pop().val;
};