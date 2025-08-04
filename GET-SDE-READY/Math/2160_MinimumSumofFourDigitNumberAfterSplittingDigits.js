/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arr = num.toString().split('').map(Number).sort((a,b)=>a-b);
    console.log(arr)
    // let x=+(arr[0].toString()+arr[2].toString())
    // let y=+(arr[1].toString()+arr[3].toString())
    let x=arr[0]*10+arr[2]
    let y=arr[1]*10+arr[3]
    return x+y

};