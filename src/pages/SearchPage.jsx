import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultOverview from '../components/ResultOverview';
import DetailsView from '../components/DetailsView';

export default function SearchPage() {
    // States for the search result, the query and the book which is selected by the user.
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);

    // Matches the query state with the value entered in the input.
    function changeContent(event) {
        setQuery(event.target.value);
    }
    
    // API is fetched when user searches, with query as argument and fetches the corresponding query.
    function search(query) {
        fetch(`https://openlibrary.org/search.json?title=${query}`)
            .then((response) => response.json())
            .then((data) => setResult(data.docs));
    }

    function displaySelectedBook(index) {
        setSelectedBook(result[index]);
    }

    return (
        <>
            <h2>Find Your Next Favorite Book</h2>
            <p>Use the search bar to find books by title, author, or subject. Whether you are looking for a specific book or exploring new reads, this is where your next adventure begins. Once you find a book you like, you can add it to your personal collection for future reading</p>
            <SearchBar search={search} changeContent={changeContent} query={query}/>
            <ResultOverview data={result} displaySelectedBook={displaySelectedBook}/>
            <DetailsView selectedBook={selectedBook}/>
        </>
        
    );
    
}