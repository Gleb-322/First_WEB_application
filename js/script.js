"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prinvat: false 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его?', ''),
    a1 = prompt('Один из последних просмотренных фильмов?', ''),
    b1 = +prompt('На сколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[a1] = b1;

console.log(personalMovieDb);






