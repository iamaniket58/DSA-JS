/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let currGain = 0;
    let totalGain = 0;
    let ans = 0;
    for (let i = 0; i < gas.length; i++) {
        let gain = gas[i] - cost[i];
        currGain = currGain + gain;
        totalGain = totalGain + gain;
        if (currGain < 0) {
            ans = i + 1;
            currGain = 0
        }
    }
    return totalGain < 0 ? -1 : ans;
};

//Bruite-Force Approach O(n^2)
var canCompleteCircuit = function (gas, cost) {
    for (let i = 0; i < gas.length; i++) {
        let fuelinTank = 0;
        let j = i;
        while (true) {
            fuelinTank = fuelinTank + gas[j];
            fuelinTank = fuelinTank - cost[j];
            if (fuelinTank < 0) break;
            j++;
            if (j == i && fuelinTank >= 0) return i;
            if (j == gas.length) j = 0;
        }
    }
    return -1;
};