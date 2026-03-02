function secondLargest(array) {
    if (array.length < 2) return "Array should have at least two numbers";
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = array[i];
        }
        else if (array[i] > secondLargest && array[i] != firstLargest) {
            secondLargest = array[i];
        }
    }
    return secondLargest;
}
//console.log(secondLargest([5, 12, 8, 130, 44, 22, 43, 45, 45, 45, 47]))
// console.log(secondLargest([5, 12, 8, 130, 44, 22, 43, 45, 45, 45, 47]))
function secondLargest1(array) {
    if (array.length <= 1) return "Array Length should atleast be 2";
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of array) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else {
            if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
    }
    return secondLargest == -Infinity ? "No Second Largest" : secondLargest;
}
console.log(secondLargest1([5, 12, 8, 130, 44, 22, 43, 45, 45, 45, 47]))
console.log(secondLargest1([5, 5, 5]))
console.log(secondLargest1([2, 11, 11, 14, 2])) // Check this Test case for understanding

