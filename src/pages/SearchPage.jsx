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
            <SearchBar search={search} changeContent={changeContent} query={query}/>
            <ResultOverview data={result} displaySelectedBook={displaySelectedBook}/>
            <DetailsView selectedBook={selectedBook}/>
        </>
        
    );
    
}