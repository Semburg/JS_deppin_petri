'use strict';

// NEXT: 

$('h3').css('color', 'red')

const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart')



// console.dir(box)

box.style.backgroundColor = 'red'
box.style.width = '100px'
btns[0].style.backgroundColor = 'pink'
