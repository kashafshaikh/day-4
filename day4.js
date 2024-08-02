// *30 Day DSA Challenge from Hello Coders Team*
// Day:4 Task
// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
// *Function Signature:*
// typescript
// function findDuplicates(numbers: number[]): number[] {
//     // Your code here
// }
// *Example:*
// typescript
// // Input
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
// // Output
// const duplicates = findDuplicates(numbers); 
// console.log(duplicates); // [2, 5]
// *Hints:*
// 1. Create an empty array to store the result.
// 2. Use a nested loop to compare each element with every other element.
// 3. If a duplicate is found, add it to the result array if it is not already included.
function findDuplicates(arr) {
    var seen = [];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (seen.includes(num) && !res.includes(num)) {
            res.push(num);
        }
        else {
            seen.push(num);
        }
    }
    return res;
}
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 5]));
function printTopStudents(Students) {
    Students.forEach(function (std) {
        if (std.marks > 80) {
            console.log("Name: ".concat(std.name, " ,Age: ").concat(std.age, " ,Marks: ").concat(std.marks));
        }
    });
}
var abc = [
    { name: "Aisha", age: 13, marks: 86 },
    { name: "Sara", age: 12, marks: 75 },
    { name: "John", age: 14, marks: 90 },
    { name: "Michael", age: 13, marks: 60 }
];
printTopStudents(abc);
