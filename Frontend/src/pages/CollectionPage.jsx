import { useState } from "react";
import BooksDisplay from "../components/BooksDisplay";
import Form from "../components/Form";
import Button from "../components/Button";

export default function CollectionPage() {
    const [library, setLibrary] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addBook = (title, author, pages, read) => {
        const newBook = { title, author, pages, read };
        setLibrary([...library, newBook]);
    };

    const toggleReadStatus = (index) => {
        const updatedLibrary = library.map((book, currentIndex) => 
            currentIndex === index ? {...book, read: !book.read } : book
        );
        setLibrary(updatedLibrary);
    }

    const removeBook = (index) => {
        setLibrary(library.filter((_, i) => i !== index));
    };

    return (
        <>
            <section>
                <h2 className="page-heading">Your Book Collection</h2>
                <p className="page-intro">This is where your favorite books live! Browse through your collection, track what you have already read, and keep tabs on books you want to read next. You can also remove books that you no longer want in your collection.
                </p>
            <Button className="secondary-button" onClick={() => setShowForm(!showForm)} text={showForm ? 'Hide form' : 'Add new book'} />
            </section>
            <section id="collection-container">
                <div className={`form-slide-in ${showForm ? 'form-active' : ''}`}>
                    {showForm && <Form onAddBook={addBook} />}
                </div>
                <BooksDisplay
                    books={library}
                    onToggleReadStatus={toggleReadStatus}
                    onRemove={removeBook}
                />
            </section>
        </>
    );
    
}