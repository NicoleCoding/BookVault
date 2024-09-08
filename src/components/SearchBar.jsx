import { useState, useEffect } from "react";
import Button from "./Button";

export default function SearchBar(props) {
    return (
        <div id="searchbar">
            <input
                type="text"
                placeholder="Search books"
                onChange={props.changeContent}
            />

            <Button className="primary-button" text="Search" onClick={() => props.search(props.query)} />

        </div>

    );
}