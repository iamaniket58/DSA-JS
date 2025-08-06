/**
 * @param {number[]} stones
 * @return {number}
 */

//Bruite Force approach-Sort an array, pop last 2 elements and do
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let y = stones.pop();
        let x = stones.pop();
        if (y > x) {
            stones.push(y - x)
        }
    }
    return stones[0]

};

//using priority Queue
var lastStoneWeight = function (stones) {
    let maxHeap = new MaxPriorityQueue();
    for (let i = 0; i < stones.length; i++) {
        maxHeap.enqueue(stones[i]);
    }
    while (maxHeap.size() > 1) {
        let y = maxHeap.dequeue();
        let x = maxHeap.dequeue();
        if (y > x) {
            maxHeap.enqueue(y - x)
        }
    }
    return maxHeap.front() ?? 0;

};

//instaed of looping, use from Array- Just for LeetCode and also ue push and pop instaed of enqueue and dequeue
var lastStoneWeight = function (stones) {
    let maxHeap = new MaxPriorityQueue.fromArray(stones)
    while (maxHeap.size() > 1) {
        let y = maxHeap.pop();
        let x = maxHeap.pop();
        if (y > x) {
            maxHeap.push(y - x)
        }
    }
    return maxHeap.front() ?? 0;

};