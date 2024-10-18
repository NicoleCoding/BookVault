import { useState } from "react";
import Button from "./Button";

export default function Form({onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [ publishedYear, setPublishedYear] = useState('');
    const [pages, setPages] = useState('');
    const [readStatus, setReadStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(title, author, genre, publishedYear, pages, readStatus);
        setTitle('');
        setAuthor('');
        setGenre('');
        setPublishedYear('');
        setPages('');
        setReadStatus(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book form</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
            <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} placeholder="Published year" required />
            <input type="number" min="1" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Pages" required />
            <label>
                <input type="checkbox" checked={readStatus} onChange={(e) => setReadStatus(e.target.checked)} />
                <span>Read status</span>
            </label>
            <Button className="primary-button" text="Add book" />

        
        </form>
    )

}