import { useEffect, useState } from "react";

export default function DetailsView(props) {
    if (!props.selectedBook) {
        return <div></div>;
      } else {
        return (
          <div id="details">
            <h2>Book details</h2>
            <p>
              <strong>Title:</strong> {props.selectedBook.title}
            </p>
            <p>
              <strong>Author(s):</strong> {props.selectedBook.author_name?.join(', ')}
            </p>
            <p>
              <strong>Publisher:</strong> {props.selectedBook.publisher?.join(', ')}
            </p>
            <p>
              <strong>Language(s):</strong> {props.selectedBook.language?.join(', ')}
            </p>
            <p>
              <strong>Subject(s):</strong> {props.selectedBook.subject?.join(', ')}
            </p>
          </div>
        );
      }

}