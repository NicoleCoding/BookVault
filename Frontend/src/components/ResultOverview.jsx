import { useState } from "react";
import Button from "./Button";

export default function ResultOverview(props) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = props.data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if(newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleAddBook = async (book) => {
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: book.title,
          author: book.author_name?.join(", ") || "Unknown",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      alert("Book added successfully!");
      props.fetchBooks(); // Update BooksDisplay
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };


  return (
    <>
      {props.data.length > 0 && (
        <div>
          <div className="book-results">
            {currentData.map((queryItem, index) => (
            <div 
              key={startIndex + index} 
              className="book-result" 
              onClick={() => props.displaySelectedBook(startIndex + index)}
            >
              <h3 className="book-title">{queryItem.title}</h3>
              <p className="book-author">
                <strong>Author:</strong> {queryItem.author_name && queryItem.author_name.length > 0 
                  ? queryItem.author_name[0] 
                  : "Unknown author"}
              </p>
              <p className="book-year">
                <strong>Publication Year:</strong> {queryItem.first_publish_year || "N/A"}
              </p>
              <Button 
                text="Add book to collection"
                onClick={() => handleAddBook(queryItem)}
                className="primary-button"
              />
            </div>
            ))}
        </div>
        <div className="pagination">
          <Button 
            text="Previous" 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1} 
            className="primary-button" 
          />
          <span>Page {currentPage} of {totalPages}</span>
          <Button 
            text="Next" 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className="primary-button" 
          />
        </div>
      </div>
      )}
    </>
  );
}