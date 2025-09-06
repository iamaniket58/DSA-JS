
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
//Bruite-Force-Time Limit Exceeded
var minEatingSpeed = function (piles, h) {
    let speedperhr = 1;
    while (true) {
        let timeTaken = 0;
        for (let i = 0; i < piles.length; i++) {
            timeTaken = timeTaken + Math.ceil(piles[i] / speedperhr)
        }
        if (timeTaken <= h) {
            return speedperhr
        }
        else {
            speedperhr++;
        }
    }
};

//Using Binary Search

var minEatingSpeed = function (piles, h) {
    const canEatAll = (speed) => {
        let timeTaken = 0;
        for (let i = 0; i < piles.length; i++) {
            timeTaken = timeTaken + Math.ceil(piles[i] / speed)
        }
        return timeTaken <= h
    }

    let l = 1;
    let r = Math.max(...piles);
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (canEatAll(mid)) {
            r = mid
        }
        else {
            l = mid + 1
        }
    }
    return l
};

//Same Solution- Binary Search- Chat GPT
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    const canEatAll = (speed) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / speed);
        }
        return hours <= h;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            result = mid;     // possible answer
            right = mid - 1;  // try smaller speed
        } else {
            left = mid + 1;   // need faster speed
        }
    }

    return result;
};