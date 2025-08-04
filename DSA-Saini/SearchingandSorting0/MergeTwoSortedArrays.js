let a2 = [1, 3, 4, 8, 9], a1 = [2, 4, 6, 7, 8, 9, 11]
let array = []
//This is the first method i could think
function Merge2SortedArray(a1, a2) {
    let x = 0, y = 0
    for (let i = 0; i < a1.length + a2.length; i++) {
        if (x >= a1.length || y >= a2.length) {
            if (x == a1.length) {
                array[i] = a2[y];
                y += 1
            }
            else if (y == a2.length) {
                array[i] = a1[x];
                x += 1;
            }
        }
        else {
            if (a1[x] <= a2[y]) {
                array[i] = a1[x];
                x += 1;
            }
            else {
                array[i] = a2[y];
                y += 1
            }
        }

    }
    return array
}
//console.log(Merge2SortedArray(a1, a2))


//More optimized version of 1st
function Merge2SortedArray1(a1, a2) {
    let array=[]
    let x = 0, y = 0
    for (let i = 0; i < a1.length + a2.length; i++) {

        if ((y >= a2.length) || (x < a1.length && a1[x] <= a2[y])) {
            array[i] = a1[x];
            x += 1;
        }
        else {
            array[i] = a2[y];
            y += 1
        }


    }
    return array
}
//console.log(Merge2SortedArray1(a1, a2))

//While loop solution by chat GPt 
function Merge2SortedArray2(a1, a2) {
    let x = 0, y = 0
    let array = [];
    while (x < a1.length && y < a2.length) {
        if (a1[x] < a2[y]) {
            array.push(a1[x]) //array.push(a1[x++])
            x+=1
        }
        else {
            array.push(a2[y])
            y+=1
        }
    }

    while (x < a1.length) {
        array.push(a1[x])
        x++
    }
    while (y < a2.lenhth) {
        array.push(a2[y])
        y+=1
    }
    return array
}
// console.log(Merge2SortedArray2(a1, a2))


//This is Completely Sir's Method
function Merge2SortedArray2(a1, a2) {
    let x = 0, y = 0
    let array = [];
    while (x < a1.length && y < a2.length) {
        if (a1[x] < a2[y]) {
            array.push(a1[x]) //array.push(a1[x++])
            x+=1
        }
        else {
            array.push(a2[y])
            y+=1
        }
    }

    return [...array,...a1.slice(x),...a2.slice(y)]

    
}
console.log(Merge2SortedArray2(a1, a2))

