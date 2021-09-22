"use strict";
 
let numberOfFilms;

function start () {

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Как много фильмов вы уже посмотрели ?", '' );
}


}

start();

let personalMovieDB = {
  count : numberOfFilms,
  movies: {
  },
  actors: {
  },

 genres: [],

 privat : false
};


function remembermyFilms () {
  for (let i = 0; i <2; i++ ) {

    const a = prompt("Один из последних просмотренных фильмов ?", "");
    const b = prompt("Оцените этот фильм", "");

 if (a != null && b != null && a != '' && b != '' && a.length < 50) {

personalMovieDB.movies[a] = b;

 }
else {
 i--;
}
}
}

remembermyFilms();

function detectPersonalLevel () {
   
if (personalMovieDB.count < 10 ) {
  alert("Просмотренно довольно мало фильмов");
}

else if (personalMovieDB.count >= 10 && numberOfFilms <= 30) 
{
  alert("Вы классический зритель");
}

else if (personalMovieDB.count > 30 ) {
  alert("Ви кономан");
}

else {
 alert ("Произошла ошибка");
 console.log();
}

}

detectPersonalLevel();

  // function showMyDB (hidden) {
  //   if (!hidden) {
  //     console.log(personalMovieDB.privat);
  //   }
  // }
  // showMyDB();



function writeYourGenres () {
 for (let i = 1; i <= 3; i++ ) {
      const genre = prompt(`Ваш любмиый жанр под номером ${i}` );
      personalMovieDB.genres [i - 1 ] = genre;
 }
 }
 writeYourGenres ();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB.privat);
  }
}

