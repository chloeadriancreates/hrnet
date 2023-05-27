import "./Table.css";
import { useEffect, useState } from "react";

export default function Table({ content }) {
    const [formattedContent, setFormattedContent] = useState(content);
    const [categories, setCategories] = useState([]);

    const renderProperty = (row, category) => {
        if(row.hasOwnProperty(category.category)) {
            if(typeof row[category.category] === "object") {
                return row[category.category].abbreviation;
            }
            return row[category.category];
        }
    };

    useEffect(() => {
        const defineCategories = (content) => {
            const tempCategories = [];
            const formattedCategories = [];

            content.forEach(object => {
                for (let property in object) {
                    if(!tempCategories.includes(property)) {
                        tempCategories.push(property);
                    }
                }
            });

            tempCategories.forEach(category => {
                let formattedCategory = category;
                for (const letter of category) {
                    if (letter === letter.toUpperCase()) {
                        formattedCategory = category.replace(letter, ` ${letter.toLowerCase()}`);
                    }
                }
                formattedCategory = formattedCategory.replace(formattedCategory[0], formattedCategory[0].toUpperCase());
                formattedCategories.push({ "category": category, "formattedCategory": formattedCategory });
            });

            setCategories(formattedCategories);
        };

        defineCategories(formattedContent);
    }, [formattedContent]);

    return (
        <table>
            <thead>
                <tr>
                    { categories.map(category => <th key={category.category}>{category.formattedCategory}</th>) }
                </tr>
            </thead>
            <tbody>
                { formattedContent.map(row => (
                    <tr key={formattedContent.indexOf(row)}>
                        { categories.map(category =>
                            <td key={category.category}>{ renderProperty(row, category) }</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}