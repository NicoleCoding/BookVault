import { Link } from "react-router-dom"
import Button from "../components/Button"

export default function StartPage() {
    return (
        <div>
            <section id="hero">
                <p id="hero-text">Discover your next favorite book and manage your reading collection effortlessly. </p>
                <Link to="/search">
                <Button text="Find your next read" className="primary-button"/>
                </Link>
            </section>
        </div>
    )
}