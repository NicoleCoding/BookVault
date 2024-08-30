import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Search</Link>
            <Link to="/CollectionPage">Book Collection</Link>
        </nav>

    );
    
}