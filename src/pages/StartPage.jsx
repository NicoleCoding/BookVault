import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function StartPage() {
    return (
        <div>
            <section id="hero">
                <h2>Welcome to Your Personal Library!</h2>
                <p id="hero-text">Organize and track your reading journey with ease. Whether you are exploring new titles or managing your personal collection, we are here to help you discover, collect, and enjoy books.
                                  Get started by searching for your next read or checking your collection! </p>
                <Link to="/search">
                <Button text="Find your next read" className="primary-button"/>
                </Link>
            </section>
        </div>
    )
}