"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay')

// bed idea
// btn.onclick = function () {
//     alert('Click 2')
// }

//good idea

// btn.addEventListener('click', ()=>alert('proper click'))
// // some of eventLoop: 
// btn.addEventListener('click', ()=>alert('proper click 2'))

// const deleteBtn = (e) => {
//     e.target.style.color = 'wheat'
//     e.target.style.backgroundColor = 'red'
// }

// btn.addEventListener('click', deleteBtn)



// btn.addEventListener('mouseover', (e)=>{
    // console.log(e.target.innerText) 
    // e.targekt.remove(); 

    // console.log('hover')
// }) 


// removeEventlistener

let i=0

const deleteBtn = (e) => {
    console.log(e.currentTarget)
    console.log(e.type)



    // i++
    // console.log(i)
    // if (i==2) {
    //     console.log(`step - stop: ${i}. End.`)
    //     btn.removeEventListener('click', deleteBtn)
    // }
}

btn.addEventListener('click', deleteBtn, {capture: true})
overlay.addEventListener('click', deleteBtn)


const link = document.querySelector('a')

link.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.target.href)
})

const btns = document.querySelectorAll('button')

console.log(btns)

// const btns2 = document.getElementsByTagName('button')

// console.log(btns2)

btns.forEach(element => {
    element.addEventListener('click',  (element) => {
        console.log('one of the buttons')
    })
});
