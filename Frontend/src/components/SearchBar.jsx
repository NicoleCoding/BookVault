import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";


export default function SearchBar(props) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.search(props.query);

        }
    };

    return (
        <div id="searchbar">
                <input
                    type="text"
                    placeholder="Search books"
                    onChange={props.changeContent}
                    onKeyDown={handleKeyDown}
                    id="search"
                />
            <Button className="primary-button" text="Search" icon={<AiOutlineSearch />} onClick={() => props.search(props.query)}  />

        </div>

    );
}