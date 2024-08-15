# JS-Book-Inventory-Management-System

Book Inventory Management System: A JavaScript application to manage bookstore inventory. Features a Book class with methods to check availability, sell, and restock books. Tracks details like title, author, ISBN, and available copies.

Overview
The Book Inventory Management System is a JavaScript application designed to manage the inventory of a bookstore. It includes a Book class that allows for tracking book details such as title, author, ISBN, and the number of available copies. The application can check the availability of books, sell copies, and restock inventory.

Features
Book Class: A class that represents a book with properties like title, author, ISBN, and available copies.
Check Availability: A method to check if a book is in stock, out of stock, or in low stock.
Sell Books: A method to reduce the number of available copies when a book is sold.
Restock Books: A method to increase the number of available copies when new stock arrives.

Usage
Book Class
The 'Book' class is the core of this application. Here’s how it works:

Constructor
The constructor initializes the book's properties:

'title' - The title of the book.
'author' - The author of the book.
'ISBN' - The ISBN number of the book.
'availableCopies' - The number of copies currently available.

Copy code
const book1 = new Book(
"The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 5);

Availability
Check the availability of the book using the 'availability' getter method:

Copy code
console.log(book1.availability); // Output: "low stock."

Sell a Book
Sell a specified number of copies using the 'sellBook' method:

Copy code
book1.sellBook(); // Sells one copy by default
console.log(book1.availability); // Output: "low stock."

Restock a Book
Restock a specified number of copies using the 'restock' method:

Copy code
book1.restock(); // Restocks 5 copies by default
console.log(book1.availability); // Output: "low stock."

book1.restock(1); // Restocks 1 copy
console.log(book1.availability); // Output: "in stock."

Example
Here is an example usage of the Book class:

Copy code
const book1 = new Book
("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 5);

console.log(book1.availability); // "low stock."
book1.sellBook(); // Sells one copy
console.log(book1.availability); // "low stock."
book1.restock(); // Restocks 5 copies
console.log(book1.availability); // "low stock."
book1.restock(1); // Restocks 1 copy
console.log(book1.availability); // "in stock."

Installation
Clone the repository and include the 'script.js' file in your HTML project to use the 'Book' class.

Copy code
git clone https://github.com/marna4255/JS-Book-Inventory-Management-System.git
