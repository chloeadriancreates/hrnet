import "./Card.css";

export default function Card({ children, title }) {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="card-content">{children}</div>
        </div>
    );
}