const array1 = [10,20,34,56,36];
const array2 = [2,5,7,54,9];
const array3 = [9,4,6,2,1];

const finalArray = array1. concat(array2).concat([1223]).concat(array3);
console.log(finalArray);

const finalArray2 = [...array1, ...array2, 125, ...array3];
console.log(finalArray2);

const newArray = [1,2,3,4,5,6,7,8,9];

const max = Math.max(...newArray);
console.log(max);