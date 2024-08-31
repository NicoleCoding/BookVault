import { useState, useEffect } from "react";

export default function SearchBar(props) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search books"
                onChange={props.changeContent}
            />
            <button onClick={() => props.search(props.query)}>Search</button>
        </div>

    );
}