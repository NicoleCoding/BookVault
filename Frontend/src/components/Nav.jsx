import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Nav() {

    const [isOpen, setOpen] = useState(false);


    return (
        <nav>
            <div id="hamburger-container">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li><Link className="link" to="/">Start</Link></li>
                <li><Link className="link" to="/search">Search</Link></li>
                <li><Link className="link" to="/collection">Book Collection</Link></li>
            </ul>
        </nav>

    );
    
}