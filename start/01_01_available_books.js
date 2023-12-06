// Write your code here

console.log("Test");

// with function
// function Book(title, author, isbn, numCopies) {
//   this.title = title,
//   this.author = author,
//   this.isbn = isbn,
//   this.numCopies = numCopies
// }

// Book.prototype.getAvailability = function() {
//   if (this.numCopies === 0) {
//     return "out of stock"
//   } else if (this.numCopies < 10) {
//     return "low stock"
//   } else {
//     return "in stock"
//   }
// };

// Book.prototype.sell = function(numCopiesSold = 1) {
//   this.numCopies -= numCopiesSold
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//   this.numCopies += numCopiesStocked;
// }

// with class
class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title,
    this.author = author,
    this.isbn = isbn,
    this.numCopies = numCopies
  }
  get availibility() {
    return this.getAvailability();
  } 
  getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock"
    } else if (this.numCopies < 10) {
      return "low stock"
    } else {
      return "in stock"
    }
  }
  sell(numCopiesSold = 5) {
    return this.numCopies -= numCopiesSold
  }

  restock(numCopiesStocked = 5) {
    return this.numCopies += numCopiesStocked
  }
}

const myBook = new Book("Buku", "Faqih", "test", 5);
console.log(myBook.getAvailability());
console.log(myBook.numCopies);

myBook.restock(10)
console.log(myBook.numCopies);
console.log(myBook.getAvailability());

myBook.sell(15)
console.log(myBook.numCopies);
console.log(myBook.getAvailability());