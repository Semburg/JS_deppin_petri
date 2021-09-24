/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

// start()

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
}

function start() {
    numberOfFilms = +prompt('How many films did you saw?', '')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you saw?', '')
    }

    return numberOfFilms
    
}

// console.log( personalMovieDB.count );



function rememberMyFilms() {
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
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('These was not a lot films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic film Wathcer');
    } else if (personalMovieDB.count >= 30) {
        console.log('Your are a kinofan');
    } else {
        console.log('error is occured');
    }
}

// detectPersonalLevel()

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('%cAccess Denied', "color:red;");
    }
}



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Your favorite genre number ${i}:`)
    }
}

writeYourGenres()
showMyDB(personalMovieDB.privat)
