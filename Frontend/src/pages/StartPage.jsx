import { Link } from "react-router-dom"
import Button from "../components/Button"
import { FaBook } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";

export default function StartPage() {
    return (
        <>
            <section id="hero">
                <h2 id="hero-heading" className="page-heading">Explore, Collect, and Track Your Reading Journey <GiSpellBook id="hero-icon" size={100}/></h2>
                <p id="hero-text" className="page-intro">Organize and track your reading journey with ease. Whether you are exploring new titles or managing your personal collection, this app is here to help you discover, collect, and enjoy books.
                                  Get started by searching for your next read or checking your collection! </p>
                <Link to="/search">
                <Button text="Find your next read" className="primary-button" icon={<FaBook />}/>
                </Link>
            </section>
        </>
    )
}