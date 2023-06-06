import "./Header.css";
import { Link } from "react-router-dom";

/**
 * Displays the site header.
 * @component
*/
export default function Header() {
    return (
        <header className="header">
            <h2 className="header-title">HRNet</h2>
            <nav className="nav">
                <Link to="/employees" className="nav-item">Current employees</Link>
                <Link to="/" className="nav-item">Add an employee</Link>
            </nav>
        </header>
    );
}