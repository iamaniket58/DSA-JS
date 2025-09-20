/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let obj = {};
    for (let i = 0; i < tasks.length; i++) {
        obj[tasks[i]] = (obj[tasks[i]] || 0) + 1
    }
    let maxFreq = Math.max(...Object.values(obj));
    let maxFreqTasks = Object.values(obj).filter(x => x == maxFreq).length;

    let ans = ((n + 1) * (maxFreq - 1)) + maxFreqTasks;
    return Math.max(ans, tasks.length);

};

//Sir's Method
var leastInterval = function (tasks, n) {
    //Sir's method
    let freq=new Array(26).fill(0);
    let maxFreq=0
    for(let i=0;i<tasks.length;i++){
        let curr=tasks[i].charCodeAt(0)-65;
        freq[curr]++;
        if(freq[curr]>maxFreq)maxFreq=freq[curr] //Maximum Frequency
    }
    let maxFreqCharCount=0;
    for(let i=0;i<26;i++){
        if(freq[i]==maxFreq){
            maxFreqCharCount++;
        }
    }
    return Math.max(tasks.length,((n+1)*(maxFreq-1))+maxFreqCharCount);

};