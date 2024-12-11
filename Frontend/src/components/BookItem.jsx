import Button from "./Button";

export default function BookItem({ book, onToggleReadStatus, onRemove }) {
    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.publishedYear}</p>
            <p>{book.pages} pages</p>
            <p>{book.readStatus === 'read' ? "Read" : "Not Read"}</p> 
            <Button className="primary-button" onClick={() => onToggleReadStatus(book._id)} text="Toggle Read Status" />
            <Button className="secondary-button" onClick={() => onRemove(book._id)} text="Remove Book" />
        </div>
    );
}