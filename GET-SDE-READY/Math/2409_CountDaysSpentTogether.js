/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
// Without using Inbuilt
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {

    alicearrival = daysofYear(arriveAlice);
    aliceleave = daysofYear(leaveAlice);
    bobarrival = daysofYear(arriveBob);
    bobleave = daysofYear(leaveBob);

    let start = Math.max(alicearrival, bobarrival)
    let end = Math.min(aliceleave, bobleave)

    return Math.max(end - start + 1, 0)
};
var daysofYear = function (date) {
    let prefix = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];  
    // let [month, day] = date.split('-').map(Number);
    let month = (date.charCodeAt(0) - 48) * 10 + (date.charCodeAt(1) - 48);
    let day = (date.charCodeAt(3) - 48) * 10 + (date.charCodeAt(4) - 48);
    return prefix[month - 1] + day


}

//Started Solution
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {

    // Convert all Alice's and Bob's arrival & leave dates into day-of-year numbers
    alicearrival = daysofYear(arriveAlice);
    aliceleave = daysofYear(leaveAlice);
    bobarrival = daysofYear(arriveBob);
    bobleave = daysofYear(leaveBob);

    let start = Math.max(alicearrival, bobarrival) // The start of the overlap is the later of the two arrival dates
    let end = Math.min(aliceleave, bobleave)  // The end of the overlap is the earlier of the two leave dates

    return Math.max(end - start + 1, 0)  // If there is overlap, return the number of overlapping days, If no overlap, the difference will be negative, so clamp to 0
};

var daysofYear = function (date) {
    let prefix = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];  // Prefix sum array storing total days passed before each month in a non-leap year

    let [month, day] = date.split('-').map(Number);
    return prefix[month - 1] + day


}