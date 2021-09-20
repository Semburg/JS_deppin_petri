const numbers = [10, 10, 10, 10];



function myFunc(a, b) {
    return a * b;
}

console.log(numbers.reduce(myFunc));



let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}
