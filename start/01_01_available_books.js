// Write your code here

console.log("Test");

function Book(title, author, isbn, numCopies) {
  this.title = title,
  this.author = author,
  this.isbn = isbn,
  this.numCopies = numCopies
}

Book.prototype.getAvailability = function() {
  if (this.numCopies === 0) {
    return "not available"
  } else if (this.numCopies < 10) {
    return "low stock"
  } else {
    return "in stock"
  }
};

const myBook = new Book("Buku", "Faqih", "test", 1);
console.log(myBook.getAvailability());
