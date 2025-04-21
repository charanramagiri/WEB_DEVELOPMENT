// // Book Object Constructor
// function Book(title, author, ISBN) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.isBorrowed = false;
  
//     this.borrow = function() {
//       this.isBorrowed = true;
//     };
  
//     this.returnBook = function() {
//       this.isBorrowed = false;
//     };
//   }
  
//   // Library Object Constructor
//   function Library() {
//     this.books = [];
  
//     // Add a new book to the library
//     this.addBook = function(book) {
//       this.books.push(book);
//     };
  
//     // Find a book by ISBN
//     this.findBookByISBN = function(isbn) {
//       return this.books.find(book => book.ISBN === isbn);
//     };
  
//     // List all books that are not borrowed
//     this.listAvailableBooks = function() {
//       return this.books.filter(book => !book.isBorrowed);
//     };
  
//     // List all books that are currently borrowed
//     this.listBorrowedBooks = function() {
//       return this.books.filter(book => book.isBorrowed);
//     };
//   }
  
//   // Test the Library System
//   function main() {
//     // Create some books
//     const book1 = new Book("Harry Potter", "J.K. Rowling", "12345");
//     const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "67890");
//     const book3 = new Book("JavaScript Essentials", "Mark", "11223");
  
//     // Create a library
//     const myLibrary = new Library();
  
//     // Add books to the library
//     myLibrary.addBook(book1);
//     myLibrary.addBook(book2);
//     myLibrary.addBook(book3);
  
//     // Borrow one book
//     book2.borrow();
  
//     // Display all available books
//     console.log("✅ Available Books:");
//     myLibrary.listAvailableBooks().forEach(book =>
//       console.log(`${book.title} by ${book.author}`)
//     );
  
//     // Display all borrowed books
//     console.log("📚 Borrowed Books:");
//     myLibrary.listBorrowedBooks().forEach(book =>
//       console.log(`${book.title} by ${book.author}`)
//     );
  
//     // Find a book by ISBN
//     const searchISBN = "67890";
//     const foundBook = myLibrary.findBookByISBN(searchISBN);
//     console.log(`🔍 Book found by ISBN ${searchISBN}: ${foundBook.title}`);
  
//     // Return the borrowed book
//     book2.returnBook();
  
//     // Display available books again
//     console.log("🔁 Available Books After Return:");
//     myLibrary.listAvailableBooks().forEach(book =>
//       console.log(`${book.title} by ${book.author}`)
//     );
//   }
  
//   // Run the main function
//   main();
function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;
  
    this.borrow = function() {
      this.isBorrowed = true;
    };
  
    this.returnBook = function() {
      this.isBorrowed = false;
    };
  }
  function Library() {
    this.books = [];
  
    this.addBook = function(book) {
      this.books.push(book);
    };
  
    this.findBookByISBN = function(isbn) {
      return this.books.find(book => book.ISBN === isbn);
    };
  
    this.listAvailableBooks = function() {
      return this.books.filter(book => !book.isBorrowed);
    };
  
    this.listBorrowedBooks = function() {
      return this.books.filter(book => book.isBorrowed);
    };
  }
// Create books
const book1 = new Book("Harry Potter", "J.K. Rowling", "12345");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "67890");
const book3 = new Book("JavaScript Essentials", "Mark", "11223");

// Create library
const myLibrary = new Library();

// Add books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Borrow a book
book2.borrow();

// List available books
console.log("Available Books:");
console.log(myLibrary.listAvailableBooks());

// List borrowed books
console.log("Borrowed Books:");
console.log(myLibrary.listBorrowedBooks());

// Find book by ISBN
console.log("Search result:", myLibrary.findBookByISBN("67890"));

// Return a book
book2.returnBook();
    