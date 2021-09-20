/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt('How many films did you saw?', '')
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you saw?', '')
        }
        // personalMovieDB.count = numberOfFilms
    
        // return numberOfFilms12
        
    },

    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Last film you saw:', '')
            const b = prompt('Rate it:', '')
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--
            }
        }
    },

    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10 ) {
            console.log('These was not a lot films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic film Wathcer');
        } else if (personalMovieDB.count >= 30) {
            console.log('Your are a kinofan');
        } else {
            console.log('error is occured');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('%cAccess Denied', "color:red;");
        }
    }, 

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {

            const bestGenre = prompt(`Your favorite genre number ${i}:`)

            if (bestGenre != '' && bestGenre != null) {
                personalMovieDB.genres[i-1] = bestGenre
            } else {
                console.log('not valid input, try again')
                i--
            }
        }

        personalMovieDB.genres.forEach((element, idx) => {
            console.log(`The best genre number ${idx+1} is ${element} `)
        });
        

    },

    showAllGenres: () => {
        personalMovieDB.genres.forEach((element, idx) => {
            console.log(`The best genre number ${idx+1} is ${element} `)
        });
    },

    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
}

personalMovieDB.start()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.writeYourGenres()
// personalMovieDB.showAllGenres()

personalMovieDB.toggleVisibleMyDB()
personalMovieDB.toggleVisibleMyDB()

personalMovieDB.showMyDB(personalMovieDB.privat)

// function start() {
//     numberOfFilms = +prompt('How many films did you saw?', '')

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films did you saw?', '')
//     }

//     return numberOfFilms
    
// }

// console.log( personalMovieDB.count );



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Last film you saw:', '')
//         const b = prompt('Rate it:', '')

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10 ) {
//         console.log('These was not a lot films');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Classic film Wathcer');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Your are a kinofan');
//     } else {
//         console.log('error is occured');
//     }
// }

// detectPersonalLevel()

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('%cAccess Denied', "color:red;");
//     }
// }



// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}:`)
//     }
// }

// writeYourGenres()
// showMyDB(personalMovieDB.privat)