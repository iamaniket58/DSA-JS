/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Using Priority Queue
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
