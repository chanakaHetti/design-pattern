/**
 * ---------------------------------------------------------------------
 * Here bellow Book class has two responsibilities
 * 1. Holding the book's details
 * 2. Saving the book to the database
 *
 * This violates the SRP becuase the class is doing more than one job.
 * And It has two reason to change.
 * ---------------------------------------------------------------------
 */

class Book {
  constructor(public title: string, public author: string) {}

  saveToDatabase() {
    console.log(`Saving book: ${this.title} by ${this.author}`);
  }
}

const myBook = new Book('First book', 'Jon Doe');
myBook.saveToDatabase();

/**
 * -----------------------------------------------------
 * Solution for the above violation of the SRP as bellow
 * -----------------------------------------------------
 */
class Book {
  constructor(public title: string, public: author: string) {}
}

class BookRepository {
  saveToDatabase(book: Book) {
    console.log(`Saving book: ${this.title} by ${this.author}`);
  }
}

const myBook = new Book('First book', 'Jon Doe');
const bookRepository = new BookRepository();
bookRepository.saveToDatabase(myBook)