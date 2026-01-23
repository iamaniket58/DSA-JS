/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let minHeap = new MinPriorityQueue(x => x.val);
    let n = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        minHeap.push({ val: matrix[i][0], row: i, col: 0 })
    }
    count = 0
    while (count < k - 1) {
        let poped = minHeap.pop();
        if (poped.col + 1 < n) {
            minHeap.push({ val: matrix[poped.row][poped.col + 1], row: poped.row, col: poped.col + 1 })
        }
        count++

    }
    return minHeap.pop().val;
};
//More Cleaner way
var kthSmallest = function (matrix, k) {
    let minHeap = new MinPriorityQueue(x => x.val);
    let n = matrix[0].length;
    for (let i = 0; i < matrix.length; i++) {
        minHeap.push({ val: matrix[i][0], row: i, col: 0 })
    }
    for (let count = 0; count < k - 1; count++) {
        let { val, row, col } = minHeap.pop();
        if (col + 1 < n) {
            minHeap.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
        }
    }
    return minHeap.pop().val;
};


//Min(n,k)- reduce time complexity
var kthSmallest = function (matrix, k) {
    let minHeap = new MinPriorityQueue(x => x.val);
    let n = matrix[0].length;
    for (let i = 0; i < Math.min(n,k); i++) {
        minHeap.push({ val: matrix[i][0], row: i, col: 0 })
    }
    for (let count = 0; count < k - 1; count++) {
        let { val, row, col } = minHeap.pop();
        if (col + 1 < n) {
            minHeap.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
        }
    }
    return minHeap.pop().val;
};

//Bruite-Force
var kthSmallest = function (matrix, k) {
    let pq=new MaxPriorityQueue();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            pq.enqueue(matrix[i][j]);
            if(pq.size()>k)pq.dequeue();
        }
    }
    return pq.front();
};