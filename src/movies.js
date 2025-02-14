// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let sumDirectors = arr.map(function(movie){
    return movie.director
  })
  return sumDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if(arr.length === 0) {
    return 0
  }
  let moviesFromSteven = arr.filter(function(movie){
    //console.log(movie.genre.indexOf('Drama'))

    return (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') >= 0)
  })
  return moviesFromSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(!arr.length) {
    return 0
  }
  let scoreSum = arr.reduce(function(prev, curr){
    if(curr.score === '' || curr.score === undefined) {
      curr.score = 0
    }
    return prev + curr.score
  }, 0)
  //return scoreSum /  arr.length
  const avgScore = scoreSum /  arr.length
  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter(function(obj){
    if(obj.genre.includes('Drama')){
      return true
    }
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = JSON.parse(JSON.stringify(movies)).sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const titles = movies.map(function (movie) {
    return movie.title
  })
  const sorted = titles.sort(function (a, b) {
    return a.localeCompare(b);
  })
  const res = sorted.slice(0, 20);
  return res;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
