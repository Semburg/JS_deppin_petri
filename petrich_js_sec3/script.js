// further 3.038

const btns = document.querySelectorAll('button'),
             wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList);
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('red', 'whear'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

btns[0].addEventListener('click', ()=>{
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red')
    // } else {
    //     btns[1].classList.remove('red')
    // }
    // btns[1].classList.toggle('red')
    console.log('emtty function');
})


// wrapper.addEventListener('click', (e)=>{
//     if (e.target && !e.target.classList.contains('blue')) {
//         console.log('hello');
//         e.target.classList.add('blue')
//     } else if (e.target && e.target.classList.contains('blue')){
//         e.target.classList.remove('blue')
//     }
// })

wrapper.addEventListener('click', (e)=>{
    if (e.target && e.target.matches('button.red')) {
        console.log('hello from red');
    } 
})

// this will not work with new elements:
btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        console.log('Hello2');
    })
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.appendChild(btn)



