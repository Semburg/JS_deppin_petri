
        // NEXT: EXcerses - 
// console.log(document.body)
// console.log(document.documentElement)
console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.lastChild)
// console.log(document.body.firstElementChild)


// console.log(document.querySelector('#current').parentNode)
// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector('#current').parentElement)


        // data-  attrs.


// console.log(document.querySelector('[data-current="3"]').nextSibling.nextSibling)
// console.log(document.querySelector('[data-current="3"]').nextElementSibling)

for (const node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node)
}