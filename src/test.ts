// test.js

function subtractArray(numbers: number[]): number {
    return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
}

function multiplyArray(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
}

function divideArray(numbers: number[]): number {
    return numbers.slice(1).reduce((acc, num) => acc / num, numbers[0]);
}

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Examples for functions
const sumExample = sumArray([1, 2, 3, 4]); // Expected: 10
console.log("Sum of array:", sumExample);

const subtractExample = subtractArray([10, 3, 2]); // Expected: 5
console.log("Subtraction of array:", subtractExample);

const multiplyExample = multiplyArray([2, 3, 4]); // Expected: 24
console.log("Multiplication of array:", multiplyExample);

const divideExample = divideArray([100, 2, 5]); // Expected: 10
console.log("Division of array:", divideExample);
