"use strict"

console.log('test')

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log('test method');
    }
}

options.makeTest()

//  MEMORIZE 
//  DESTRUCTORIZATION :

const {border, bg} =  options.colors
console.log(bg);


// console.log(options.colors.bg, options.height);

// delete options.name
// console.log(options);

let counter = 0

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        counter++
        for (let i in options[key]) {
            console.log(`Property ${i}, has value of - ${options[key][i]} `);
            // counter++
        }
    } else {
        console.log(`Property ${key}, has value of - ${options[key]} `);
        counter++
    }
}

console.log(counter);

// TO MEMORIZE!!!
console.log(Object.keys(options).length);





// next - 2.021  + create script2
