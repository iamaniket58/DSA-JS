/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k=k
    this.minHeap=new MinPriorityQueue();
    for(let i=0;i<nums.length;i++){
        this.add(nums[i])
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val);
    if(this.minHeap.size()>this.k){
        this.minHeap.dequeue();
    }
    return this.minHeap.front();

};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


//Not Optimized
var KthLargest1 = function(k, nums) {
    this.k=k
    this.min=new MinPriorityQueue();
    for(let i=0;i<nums.length;i++){
        this.min.enqueue(nums[i])
        if(this.min.size()>k){
            this.min.dequeue()
        }
    }
    
};

KthLargest1.prototype.add = function(val) {
    this.min.enqueue(val);
    if(this.min.size()>this.k){
        this.min.dequeue();
    }
    return this.min.front();

};