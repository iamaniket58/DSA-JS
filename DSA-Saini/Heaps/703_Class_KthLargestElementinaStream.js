/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i]);
        }

    }
    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();

    }
}


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */