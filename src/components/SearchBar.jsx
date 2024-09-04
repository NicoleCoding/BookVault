import { useState, useEffect } from "react";

export default function SearchBar(props) {
    return (
        <div id="searchbar">
            <input
                type="text"
                placeholder="Search books"
                onChange={props.changeContent}
            />
            <button id="searchbutton" onClick={() => props.search(props.query)}>Search</button>
        </div>

    );
}