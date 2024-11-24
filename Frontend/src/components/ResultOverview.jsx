import { useEffect, useState } from "react";
import Button from "./Button";

export default function ResultOverview(props) {
  const itemsPerPage = 20;
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


  return (
    <>
      {props.data.length > 0 && (
        <>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Initial publication year</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((queryItem, index) => (
              <tr key={startIndex + index} onClick={() => props.displaySelectedBook(startIndex + index)}>
                <td>{queryItem.title}</td>
                <td>
                  {queryItem.author_name && queryItem.author_name.length > 0
                    ? queryItem.author_name[0]
                    : "Unknown author"}
                </td>
                <td>{queryItem.first_publish_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Button text="Previous Page" onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}>
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button text="Next Page" onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}>
          </Button>

        </div>
        </>
      )}
    </>
  );
}