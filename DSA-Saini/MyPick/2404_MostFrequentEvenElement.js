/**
 * @param {number[]} nums
 * @return {number}
 */
//Craete Count of Object, Find Max Count, Make Max Count array and return the shortest
var mostFrequentEven = function (nums) {
    let obj = {};
    let max=-Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1
            if(obj[nums[i]]>max){
                max=obj[nums[i]]
            }
        }
    }
    let ans=[]
    for(x in obj){
        if(obj[x]==max){
            ans.push(+x)
        }
    }
    let a=ans.sort((a,b)=>a-b)
    return a[0]!=undefined?a[0]:-1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let obj = {};
    let max=-Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            obj[nums[i]] = (obj[nums[i]] || 0) + 1
            if(obj[nums[i]]>max){
                max=obj[nums[i]]
            }
        }
    }
    let ans=[]
    for(x in obj){
        if(obj[x]==max){
            ans.push(+x)
        }
    }
    if (ans.length==0)return -1
    let min=Infinity
    for(let x of ans){
        if(x<min){
            min=x
        }
    }
    return min
    //return a[0]!=undefined?a[0]:-1
};