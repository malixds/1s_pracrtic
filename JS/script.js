"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB ={
  count : numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("Оцените этот фильм", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("Оцените этот фильм?", "");personalMovieDB.movies[a] = b;

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

