import { useState } from "react";
import BooksDisplay from "../components/BooksDisplay";
import Form from "../components/Form";
import Button from "../components/Button";
import { useEffect } from "react";

export default function CollectionPage() {
    const [library, setLibrary] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Fetch books from the backend when the component mounts
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("/api/books");
                setLibrary(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    // Add a new book to the backend
    const addBook = async (title, author, genre, publishedYear, pages, read) => {
        const newBook = { title, author, genre, publishedYear, pages, read };
        try {
            const response = await axios.post("/api/books", newBook);
            setLibrary([...library, response.data]);
        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    // Toggle read status in the backend
    const toggleReadStatus = async (id) => {
        const book = library.find((b) => b._id === id);
        if (!book) return;

        try {
            const response = await axios.put(`/api/books/${id}`, { read: !book.read });
            const updatedLibrary = library.map((b) =>
                b._id === id ? response.data : b
            );
            setLibrary(updatedLibrary);
        } catch (error) {
            console.error("Error updating read status:", error);
        }
    };

    // Remove a book from the backend
    const removeBook = async (id) => {
        try {
            await axios.delete(`/api/books/${id}`);
            setLibrary(library.filter((b) => b._id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
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