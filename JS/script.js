"use strict";


let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
console.log(numberOfFilms);



let personalMovieDB ={
  count : numberOfFilms,
  movies: {
  },
  actors: {
  },

 genres: [],
 privat : false
};

const a = prompt("Один из последних просмоетрнных фильмов ?");
const b = prompt("Оцените этот фильм", "");
const c = prompt("Один из последних просмоетрнных фильмов ?");
const d = prompt("Оцените этот фильм", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);