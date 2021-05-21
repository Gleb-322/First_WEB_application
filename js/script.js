"use strict";

let numberOfFilms;
function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (isNaN(numberOfFilms) || numberOfFilms < 0 || numberOfFilms == '' || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function detectPersonalLevel () {
    if (personalMovieDb.count < 10 && personalMovieDb.count >= 0) {
        console.log('Просмотрено довольно мало фильмов');
    } else if ( 10 <= personalMovieDb.count && personalMovieDb.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();


function rememberMyFilms () {
        let a = '',
        b = +'';
    for (let i = 0; i < 2; i++) {
        let t = 0,
            d = 0;
        while (t < 1) {
            a = prompt('Один из последних просмотренных фильмов?', '');
            if (a.length == 0 || a.length > 50) {
                console.log('Еще раз введите ТОЛЬКО название фильма');  
            } else {
                t++;
            }
        }

        while (d < 1) {
            b = +prompt('На сколько оцените его?', ''); 
            if (b <= 0 || b > 10) {
                console.log('Введите ОЦЕНКУ фильма');
            } else {
                d++;
            } 
        }
        
        personalMovieDb.movies[a] = b;
    }
}

rememberMyFilms();

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        personalMovieDb.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDb);
    }
}

showMyDb(personalMovieDb.privat);



