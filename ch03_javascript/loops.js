//Looping
const items = [1, 2, 3, 4, 5, 6];

//bad code
function getAllEvens(items){
    const result = [];
    for(let i=0; i<items.length; i++){
        if(items[i] % 2 === 0){
            result.push(items[i]);
        }
    }
    return result;
}

function multipleyByFour(items){
    const result = [];
    for(let i=0; i<items.length; i++){
        result.push(items[i] * 4);
    }
    return result;
}

function sumArray(items){
    let sum = 0;
    for(let i=0; i<items.length; i++){
        sum += items[i];
    }
    return sum;
}

//bad code
const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

//good code
function getAllEvens(items){
    return items.filter(num => num % 2 === 0);
}

function multiplyByFour(items){
    return items.map((num) => num * 4);
}

function sumArray(items){
    items.reduce((a, b) => a + b, 0);
}

//good code
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
console.log(result);