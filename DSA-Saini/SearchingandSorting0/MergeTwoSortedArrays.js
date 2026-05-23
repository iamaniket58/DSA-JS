let a2 = [1, 3, 4, 8, 9], a1 = [2, 4, 6, 7, 8, 9, 11]
let array = []
function merge2SortedArrays(arr1, arr2) {
    let nums = [];
    let i = 0, j = 0;

    for (let x = 0; x < arr1.length + arr2.length; x++) {
        if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
            nums[x] = arr1[i];
            i++;
        } else {
            nums[x] = arr2[j];
            j++;
        }
    }

    return nums;
}

function merge2SortedArrays(arr1,arr2){
    let nums=[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            nums.push(arr1[i]);
            i++;
        }
        else{
            nums.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length)nums.push(arr1[i++]);
    while(j<arr2.length)nums.push(arr2[j++]);
    return nums;
}


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

