/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let m=accounts.length;
    let n=accounts[0].length;
    let maxWealth=0;
    for(let row=0;row<m;row++){
        let wealth=0
        for(let col=0;col<n;col++){
            wealth+=accounts[row][col]
        }
        if(wealth>maxWealth)maxWealth=wealth;
    }
    return maxWealth;
};