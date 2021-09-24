'use strict';

const p = document.querySelectorAll('p')
console.log(p)


// LOADING SCRIPTS on DEMAND
function loadScript(src) {
    const script = document.createElement('script')

    script.src = src
    script.async = false
    document.body.append(script)
}


loadScript('test3.js')

// END PART 2 -  next - 3.037