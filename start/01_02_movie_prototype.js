// Write your code here

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
   this.title = title
   this.director = director
   this.genre = genre
   this.releaseYear = releaseYear
   this.rating = rating
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
  }
}

const film = new Movie('The Raid', 'Faqih', 'action', 'top', '2018')
console.log(film.getOverview());