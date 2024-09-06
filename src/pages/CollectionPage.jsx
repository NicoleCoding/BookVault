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
        <div>
            <Button className="secondary-button" onClick={() => setShowForm(!showForm)} text={showForm ? 'Hide form' : 'Add new book'} />
            {showForm && <Form onAddBook={addBook} />}
            <BooksDisplay
                books={library}
                onToggleReadStatus={toggleReadStatus}
                onRemove={removeBook}


            />
        </div>
    );
    
}