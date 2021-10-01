'use strict';

// const num = new Number(3)   ---   
// const num = new Function(3)
// console.log(num)


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function () {
    console.log(`User ${this.name} is away`)
}

const otto = new User('Otto', 1)
console.log(otto)
const alex = new User('Alex', 15)
console.log(alex)

alex.hello()
otto.exit()


