import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaHome } from 'react-icons/fa';
import { GiArchiveResearch } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";

export default function Nav() {

    const [isOpen, setOpen] = useState(false);


    return (
        <nav>
            <div id="hamburger-container">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li> <FaHome /><Link className="nav-link link" to="/">Start</Link></li>
                <li><GiArchiveResearch /><Link className="nav-link link" to="/search">Search Books</Link></li>
                <li><GiBookshelf /><Link className="nav-link link" to="/collection">Book Collection</Link></li>
            </ul>
        </nav>

    );
    
}