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

// let i = 0
// while (i < 2) {

//   i ++;
//     const a = prompt("Один из последних просмотренных фильмов ?", "");
//      const b = prompt("Оцените этот фильм", "");

//   if (a != null && b != null && a != '' && b != '' && a.length < 50){
//   personalMovieDB[a] = b;
// }

// else {
//   i--;
// }

// }






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

console.log(personalMovieDB);