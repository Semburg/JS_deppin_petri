'use strict'

const now = new Date();

// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// // weekday!!   start from sun
// console.log(now.getDay())

// ETC

const now2 = new Date();

// console.log(now2.getUTCHours())
// console.log(now2.getHours())

// console.log(now2.getTimezoneOffset())

console.log(now2.getTime())


// DIFFERENT DATA in CONSOLEs vscode and browser !!!   vs code console shows just etc time
const now3 = new Date();
// console.log(now3.setHours(18))
// console.log(now3)



let start = new Date()

for (let index = 0; index < 100000; index++) {
    let some = index**3
    
}

let end = new Date()

console.log(`Loop worked ${(end-start)/1000} seconds`)
