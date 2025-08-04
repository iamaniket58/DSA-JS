let array=[2,4,6,7,0,1]
function linierSearch(array,target){
    for(let i=0;i<array.length;i++){
        if (array[i]==target)return i
    }
    return -1
}
console.log(linierSearch(array,41))