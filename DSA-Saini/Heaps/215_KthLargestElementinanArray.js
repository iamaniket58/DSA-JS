/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Using Priority Queue - T(nlogk), S(k)
var findKthLargest = function(nums, k) {
   let min=new MinPriorityQueue();
   for(let i=0;i<nums.length;i++){
        min.enqueue(nums[i]);
        if(min.size()>k){
            min.dequeue()
        }
   }
   return min.front();
};

//General- without Sorting
var findKthLargest = function(nums, k) {
    nums=nums.sort((a,b)=>b-a);
    return nums[k-1]
};


//Generic Heap TC-O(n log n)+ O(k log n)=✅ O(n log n); SC-O(n)
var findKthLargest = function(nums, k) {
    let pq=new MaxPriorityQueue();
    for(let num of nums){
        pq.enqueue(num);
    }
    for(let i=0;i<k-1;i++){
        pq.dequeue();
    }
    return pq.front();
};