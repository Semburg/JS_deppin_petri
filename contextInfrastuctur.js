// let count = 0
// function f1() {
//     console.log(count);
//     console.log(this);
//     this.textContent = count
//     count++
// }

// f1()

const validate = {
    password: "himahasd",
    email: "parset@gg.com",
    isValid: false,
    sayHi() {
        console.log(this);
        return (this.password.length > 6) ? true : false
    },
}

console.log(validate.sayHi());

const obj = {password: 'hello'}
const validatePassword = validate.sayHi.bind(obj)

console.log(validatePassword());