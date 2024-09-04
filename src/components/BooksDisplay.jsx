import BookItem from "./BookItem"

export default function BooksDisplay({ books, onToggleReadStatus, onRemove }) {
    return (
        <div id="books-display">
          {books.map((book, index) => (
            <BookItem
            key={index}
            book={book}
            onToggleReadStatus={() => onToggleReadStatus(index)}
            onRemove={() => onRemove(index)}
            />
          ))}
        </div>
    );
}   