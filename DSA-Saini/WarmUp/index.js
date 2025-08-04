const array=[22,44,21,1,3000,4,21,44,90];
const arr=[-9,-19,-3]
function searchElement(array,search){
    for(let i=0;i<array.length;i++){
        if(search==array[i]){
            return i
        }
    }
    return -1
}
//console.log(searchElement(array,21))

let largest=(array)=>{
    let element=array[1]
    for(let i=1;i<array.length;i++){
        if (element<array[i]){
            element=array[i]
        }
    }
    return element
}
//console.log(largest(arr))

let smallest=(array)=>{
    let element=array[1]
    for(let i=1;i<array.length;i++){
        if (element>array[i]){
            element=array[i]
        }
    }
    return element
}
console.log(smallest(array))
