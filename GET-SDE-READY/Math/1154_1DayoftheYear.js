//Sirs Solution
var dayOfYear = function(date) {
    let [year,month,day]=date.split('-').map(Number);
    
    // Days before each month in a normal year
    let prefix = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    let noOfDays=prefix[month-1]+day

    let isLeap=(year%4==0 && year%100!=0)||(year%400==0)
    if(isLeap && month>2)noOfDays++;

    return noOfDays;

};