export default function BookItem({ book, onToggleReadStatus, onRemove }) {
    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.pages} pages</p>
            <p>{book.read ? "Read" : "Not Read"}</p>
            <button onClick={onToggleReadStatus}>Select Read Status</button>
            <button onClick={onRemove}>Remove Book</button>
        </div>
    );
}