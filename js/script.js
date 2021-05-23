"use strict";


let personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (isNaN(personalMovieDb.count) || personalMovieDb.count < 0 || personalMovieDb.count == '' || personalMovieDb.count == null) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDb.count < 10 && personalMovieDb.count >= 0) {
            console.log('Просмотрено довольно мало фильмов');
        } else if ( 10 <= personalMovieDb.count && personalMovieDb.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDb.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    rememberMyFilms: function() {
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
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == "" || genre == null) {
                i--;
            } else {
                personalMovieDb.genres[i-1] = genre;
            }
        }
        personalMovieDb.genres.forEach (function (item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
        // Альтернативный вариант
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDb.privat) {
            personalMovieDb.privat = false;
        } else {
            personalMovieDb.privat = true;
        }
    },
    showMyDb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    }
};




