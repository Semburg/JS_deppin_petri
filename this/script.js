'use strict';



//  1.   Usual function: this = window, if 'use strict' - undefined
//  2.   Context for methods of objects - object, but only first level
//  3.  'this' in constructors and classes is a new object/class
//  4.   handy assigment of 'this':  call, apply, bind.


//  FUNCTION CONTEXT CALL

// function showThis(a, b) { 
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(7, 5); //  comment the 'use strict' to see difference


// Object THIS
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this)
//     }
// }

// obj.sum();


// Function Constructor

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello', this.name);
//     }
// }

// let olaf = new User('Olaf', 1555)
// olaf.hello();


// own created THIS   methods call and apply

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };

// const user = {
//     name: "John"
// };

// SEE THE DIFFERENCE - its not big
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// bind is creating a new function !!!

// function count(num) {
//     console.log('"THIS" after binding: ' + this);
//     return this*num;
// };

// const double = count.bind(2);  // double created new function!!
// console.log(double(3));
// console.log(double(12));


// EXAMPLE from index.html button:


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    // if the function is NOT arrow f. - this will be just an EVENT.target  for arrow function
    console.log(this) 
});

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // taking context from parent (function) - context first level is an obj2
        };

        say();
    }
};

obj2.sayNumber();

const double = a => a*2;
console.log(double(4));





