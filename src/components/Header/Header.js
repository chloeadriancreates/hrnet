import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header-title">HRNet</h1>
            <nav className="nav">
                <Link to="/employees" className="nav-item">Current employees</Link>
                <Link to="/" className="nav-item">Add an employee</Link>
            </nav>
        </header>
    );
}