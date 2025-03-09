import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link> {/* Add link to the new page */}
                </li>
            </ul>
        </nav>
    );
}
