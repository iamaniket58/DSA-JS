/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//Using priority Queue
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1)
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }

    //Cleaner way of storing frequency
    // for(let num of nums){
    //     map.set(num,(map.get(num) || 0)+1)
    // }

    let minPQ = new MinPriorityQueue(x => x.freq); //priority according to Frequency
    for (let [key, freq] of map) {
        minPQ.push({ value: +key, freq: freq })
        if (minPQ.size() > k) {
            minPQ.pop() // minPQ.dequeue()
        }
    }
    let ans = []
    while (minPQ.size() > 0) {
        ans.push(minPQ.pop().value)
    }
    //or- This is also correct
    //return minPQ.toArray().map(x=>Number(x.val))
    return ans;

};
//Using priority Queue-Using Object
var topKFrequent = function (nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        }
        else {
            obj[nums[i]]++;
        }
    }

    let minPQ = new MinPriorityQueue(x => x.freq); //priority according to Frequency
    for (let key in obj) {
        minPQ.push({ value: +key, freq: obj[key] })
        if (minPQ.size() > k) {
            minPQ.pop() // minPQ.dequeue()
        }
    }
    let ans = []
    while (minPQ.size() > 0) {
        ans.push(minPQ.pop().value)
    }
    //or- This is also correct
    //return minPQ.toArray().map(x=>Number(x.val))
    return ans;

};
// This is my complete solution — it uses a Map to count the frequency of elements, then organizes them into a 2D array (bucket sort), and finally traverses the array from the end to extract the top k frequent elements.
var topKFrequent1 = function (nums, k) {
    // Step 1: Count frequency of each number
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }

    // Step 2: Bucket sort - freq is index, store numbers at their frequency
    let arr = []
    for (let [key, count] of Object.entries(obj)) {
        if (!arr[count]) arr[count] = [];
        arr[count].push(+key)
    }

    // Step 3: Collect top k frequent elements from highest freq
    let ans = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i]) {
            while (arr[i].length > 0) {
                let el = arr[i].pop();
                ans.push(el);
                if (ans.length == k) break
            }
        }

        if (ans.length == k) break;
    }
    return ans
};

//This is using MaxPriority Queue- Not recommended
var topKFrequent = function (nums, k) {
    let obj = {};
    for (let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    let mq = new MaxPriorityQueue(x => x.freq);
    for (let key in obj) {
        mq.enqueue({ value: key, freq: obj[key] })
    }

    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(+mq.dequeue().value);
    }
    return ans;

};
console.log(topKFrequent1([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2))