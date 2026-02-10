/**
 * @param {number[]} nums
 * @return {number}
 */
//Revision- Optimized Solution
var removeDuplicates = function (nums) {
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (!(nums[i] == nums[k])) {
           nums[k+1]=nums[i];
           k++;
        }
    }
    return k+1;
};
//My Solution
function RemoveDuplicates(array) {
    let lengthArray = array.length;
    let prevElement = -Infinity
    for (let i = 0; i < lengthArray; i++) {
        let bo = false;
        let currentValue = array[i];
        if(currentValue=='_'){
            return i
        }
        if (prevElement == currentValue) {
            array.splice(i, 1);
            array.push('_')
            bo = true

        }
        prevElement = currentValue;
        if (bo) i -= 1
    }

    return array
}
//console.log(RemoveDuplicates([1,1,2]))
//X is unique elements pointer
function RemoveDuplicates1(array){
    let x=0;
    for(let i=1;i<array.length;i++){
        if(array[i]!=array[x]){
            //temp=array[x+1]
            array[x+1]=array[i];
           // array[i]=temp
            x+=1
        }
    }
    return array//x+1
}
//console.log(RemoveDuplicates1([0,0,1,1,1,2,2,3,3,4]))

function RemoveDuplicates2(array){
    let x=0;
    for(let i=1;i<array.length;i++){
        if(array[i]>array[x]){
            x=x+1
            array[x]=array[i];
        }
    }
    return x+1
}

function RemoveDuplicates2(array){
    let array=nums
    let x=0;
    for(let i=1;i<array.length;i++){
    if(array[i]!=array[x]){
        temp=array[x+1]
        array[x+1]=array[i];
        array[i]=temp
        x+=1
    }
    }
    return x+1
}
console.log(RemoveDuplicates2([0,0,1,1,1,2,2,3,3,4]))