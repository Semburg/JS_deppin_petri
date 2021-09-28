const btn = document.querySelector('.btn')
let timer, i = 0;

function myAnimation() {
    const elem = document.querySelector('.box')
    let pos = 0

    const id = setInterval(frame, 10)

    function frame() {
        if (pos === 300) {
            clearInterval(id)
        } else {
            pos++;
            elem.style.top = pos + 'px';    
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



// btn.addEventListener('click', () => {
//     // const timer = setTimeout(logger, 1500);
//     timer = setInterval(logger, 500);
// })

// clearInterval(timer)

// setTimeout(logger, 2000)

// function logger() {
//     if (i===3) {
//         clearInterval(timer)
//         console.log('Interval cleared')
//     }
//     console.log('text')
//     i++
// }

// recursive setTimeout better then setInterval sometimes

// let id = setTimeout(function log() {
//     console.log('Hell from recF')
//     id = setTimeout(log, 500)
// }, 500)


