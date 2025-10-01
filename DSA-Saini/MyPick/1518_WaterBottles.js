/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
//My Solution
var numWaterBottles = function (numBottles, numExchange) {
    let total = numBottles;
    let emptyBottle = numBottles
    while (emptyBottle / numExchange >=1) {
        let bottleBought = Math.floor(emptyBottle / numExchange);
        total += bottleBought
        emptyBottle = emptyBottle % numExchange + bottleBought;
    }
    return total;
};

//Trick
var numWaterBottles = function (numBottles, numExchange) {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1))
};