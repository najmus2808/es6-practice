const dobleIt = num => num * 2;
const result = dobleIt(5);
console.log(result);

const add = (num1,num2)=> num1+ num2;
const result1 = add(5,7);
console.log(result1);

const give5 = () => 5;
const result2 = give5();
console.log(result2);

const doMath = (x,y) =>{
    const sum = x+y;
    const sub = x-y;
    const result = sum * sub;
    return result;
}

const result3 = doMath(7,5);
console.log(result3);