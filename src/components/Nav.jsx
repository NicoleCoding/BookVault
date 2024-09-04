import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link className="link" to="/">Start</Link>
            <Link className="link" to="/search">Search</Link>
            <Link className="link" to="/collection">Book Collection</Link>
        </nav>

    );
    
}