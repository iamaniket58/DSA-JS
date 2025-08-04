/**
 * @param {string} date
 * @return {number}
 */
/**
 * @param {string} date
 * @return {number}
 */
//Optimized Version-gpt

var dayOfYear = function (date) {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let [year, month, day] = date.split('-').map(Number);

    // Correct leap year check
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    let dayNumber = 0;
    for (let i = 0; i < month - 1; i++) {
        dayNumber += daysInMonth[i];
    }

    return dayNumber + day;
};

var dayOfYear = function (date) {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dateArray = date.split('-')
    let year = Number(dateArray[0]);
    let month = Number(dateArray[1]);
    let day = Number(dateArray[2]);

    // let isLeapYear=false
    // if(year!=1900 && (year ==2000||year%4==0))isLeapYear=true
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);



    let dayNumber=0
    for(let i=0;i<month-1;i++){ //For March(3), loop will run 2 time
        if(daysInMonth[i]==28 && isLeapYear)dayNumber++
        dayNumber+=daysInMonth[i]
    }
    return dayNumber+day
};


var dayOfYear = function (date) {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dateArray = date.split('-')
    let year = Number(dateArray[0]);
    let month = Number(dateArray[1]);
    let day = Number(dateArray[2]);

    let isLeapYear=false
    if(year!=1900 && (year ==2000||year%4==0))isLeapYear=true


    let dayNumber=0
    for(let i=0;i<month-1;i++){ //For March(3), loop will run 2 time
        if(daysInMonth[i]==28 && isLeapYear)dayNumber++
        dayNumber+=daysInMonth[i]
    }
    // if(year ==2000||year%4==0)dayNumber++
    return dayNumber+day
};