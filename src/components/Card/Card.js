import "./Card.css";

/**
 * Displays a card around a category in the employee creation form.
 * @component
 * @param {Array} children - The content of the card – passed automatically by React when using <Card> around other elements.
 * @param {String} title - The title of the card.
*/
export default function Card({ children, title }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
}