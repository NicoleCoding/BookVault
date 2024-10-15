import { useState } from "react";
import Button from "./Button";

export default function Form({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [readStatus, setReadStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(title, author, pages, readStatus);
        setTitle('');
        setAuthor('');
        setPages('');
        setReadStatus(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book form</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <input type="number" min="1" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Pages" required />
            <label>
                <input type="checkbox" checked={readStatus} onChange={(e) => setReadStatus(e.target.checked)} />
                <span>Read the book?</span>
            </label>
            <Button className="primary-button" text="Add book" />

        
        </form>
    )

}