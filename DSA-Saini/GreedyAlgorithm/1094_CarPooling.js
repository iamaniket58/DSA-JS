/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
//Sir's Solution
var carPooling = function (trips, capacity) {
    let location = new Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        let [passangers, from, to] = trips[i]
        location[from] = location[from] + passangers;
        location[to] = location[to] - passangers;
    }

    let usedComp=0;
    for(let i=0;i<1001;i++){
        usedComp+=location[i];
        if(usedComp>capacity)return false;
    }
    return true;
};

//Revision
var carPooling = function (trips, capacity) {
    let onboard = new Array(1000).fill(0);
    for (let i = 0; i < trips.length; i++) {
        for (let j = trips[i][1]; j < trips[i][2]; j++) {
            onboard[j] += trips[i][0];
            if(onboard[j]>capacity)return false;
        }
    }
    return true;
};

//Re-think of this solution, when you revise
var carPooling = function (trips, capacity) {
    let location = new Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        let from = trips[i][1];
        let to = trips[i][2];
        for (let j = from; j < to; j++) {
            location[j] = location[j] + trips[i][0];
            if(location[j]>capacity)return false;
        }
        // location[to] = location[to] - trips[i][0];
    }
    return true;
};
//Just Variable change from -Re-think
var carPooling = function (trips, capacity) {
    let location = new Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        let[passanger,from,to]=trips[i]
        for (let j = from; j < to; j++) {
            location[j] = location[j] + passanger;
            if(location[j]>capacity)return false;
        }
        // location[to] = location[to] - passanger;
    }
    return true;
};
console.log(carPooling([[1,1,4],[9,4,9],[9,1,9],[2,3,5],[4,1,5],[10,4,5]],33))