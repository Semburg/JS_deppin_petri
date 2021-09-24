// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoader', ()=>{
    const box = document.querySelector('.box')
    box.addEventListener('touchstart', (e)=>{
        e.preventDefault();

    })
})

// touches
// targetTouches
// changedTouches