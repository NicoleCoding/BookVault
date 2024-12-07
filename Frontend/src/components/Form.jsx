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
            <h3>Add Book to Vault</h3>
            <label>
                Title
            </label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <label>
                Author
            </label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <label>
                Genre
            </label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
            <label>
                Published year
            </label>
            <input type="number" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} placeholder="Published year" required />
            <label>
                Pages
            </label>
            <input type="number" min="1" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Pages" required />
            <label>
                <input type="checkbox" checked={readStatus} onChange={(e) => setReadStatus(e.target.checked)} />
                <span>Read status</span>
            </label>
            <Button className="primary-button" text="Add book" />

        
        </form>
    )

}