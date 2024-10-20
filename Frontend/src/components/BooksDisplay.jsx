import BookItem from "./BookItem"

export default function BooksDisplay({ books, onToggleReadStatus, onRemove }) {
  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books available.</p>; // Add fallback when books array is empty or invalid
  }
    return (
        <div id="books-display">
          {books.map((book) => (
            <BookItem
            key={book._id}
            book={book}
            onToggleReadStatus={() => onToggleReadStatus(book._id)}
            onRemove={() => onRemove(book._id)}
            />
          ))}
        </div>
    );
}   