/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let ans=""
   while(columnNumber>0){
    columnNumber--
    let remainder=columnNumber%26;
    ans=String.fromCharCode(65+remainder)+ans;
    columnNumber=Math.floor(columnNumber/26)
   }
   return ans
};