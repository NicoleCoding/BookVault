import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Search</Link>
            <Link to="/collection">Book Collection</Link>
        </nav>

    );
    
}