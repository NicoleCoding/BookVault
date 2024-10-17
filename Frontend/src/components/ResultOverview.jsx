import { useEffect, useState } from "react";

export default function ResultOverview(props) {
  return (
    <>
      {props.data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Initial publication year</th>
            </tr>
          </thead>
          <tbody>
            {props.data.slice(0, 10).map((queryItem, index) => (
              <tr key={index} onClick={() => props.displaySelectedBook(index)}>
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
      )}
    </>
  );
}