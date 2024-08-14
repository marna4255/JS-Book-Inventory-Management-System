class Book {
  // Constructor to initialize the book properties
  constructor(title, author, ISBN, availableCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availableCopies = availableCopies;
  }

  // Getter method to check the availability of the book
  get availability() {
    if (this.availableCopies === 0) {
      return "out of stock.";
    } else if (this.availableCopies < 10) {
      return "low stock.";
    } else {
      return "in stock.";
    }
  }

  // Method to sell a book
  sellBook(copiesSold = 1) {
    if (this.availableCopies >= copiesSold) {
      this.availableCopies -= copiesSold;
      if (this.availableCopies === 0) {
        console.log("The book is now out of stock.");
      }
    } else {
      console.log("Not enough copies to sell.");
    }
  }

  // Method to restock books
  restock(copiesRestocked = 5) {
    this.availableCopies += copiesRestocked;
  }
}

// Create an instance of the Book class
const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780743273565",
  5
);

console.log(book1.availability); // Should log "low stock."
book1.sellBook(); // Sell one copy, 5 -> 4
console.log(book1.availability); // Should log "low stock."
book1.restock(); // Restock by 5, 4 -> 9
console.log(book1.availability); // Should still log "low stock."
book1.restock(1); // Restock by 1, 9 -> 10
console.log(book1.availability); // Should log "in stock."
