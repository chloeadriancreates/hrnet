import "./Table.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
// import customParseFormat from "dayjs/plugin/customParseFormat";

export default function Table({ content, color, dateFormat }) {
    const [formattedContent, setFormattedContent] = useState(content);
    const [categories, setCategories] = useState([]);
    const [colorTheme, setColorTheme] = useState({
        "--bright": "rgba(139, 134, 128, 1)",
        "--light": "rgba(139, 134, 128, 0.2)",
        "--text": "white"
    });

    const customColorTheme = (hex) => {
        let newHex = hex;
        let text;

        if(newHex.length === 4) {
            for (const letter of newHex) {
                if(letter !== "#") {
                    newHex = newHex.replace(letter, `${letter}${letter}`);
                }
            }
        }
        const r = parseInt(newHex.slice(1, 3), 16);
        const g = parseInt(newHex.slice(3, 5), 16);
        const b = parseInt(newHex.slice(5, 7), 16);
        const bright = `rgba(${r}, ${g}, ${b}, 1)`;
        const light = `rgba(${r}, ${g}, ${b}, 0.2)`;

        const relativeLuminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        if(relativeLuminance > 0.5) {
            text = "black";
        } else {
            text = "white";
        }

        setColorTheme({
            "--bright": bright,
            "--light": light,
            "--text": text
        });
    };

    const renderProperty = (row, category) => {
        if(row.hasOwnProperty(category.category)) {
            if(dayjs(row[category.category]).isValid()) {
                console.log(row[category.category]);
                console.log(dayjs(row[category.category]).toISOString());
                console.log(row[category.category] === dayjs(row[category.category]).toISOString());
            }
            if(typeof row[category.category] === "object") {
                return row[category.category].abbreviation;
            } else if(dayjs(row[category.category]).isValid() && row[category.category] === dayjs(row[category.category]).toISOString()) {
                if(dateFormat) {
                    return dayjs(row[category.category]).format(dateFormat);
                } else {
                    return dayjs(row[category.category]).format("DD/MM/YYYY");
                }
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

        defineCategories(content);
    }, [content]);

    useEffect(() => {
        const hexRegex = /^#[0-9a-zA-Z]{3}(?:[0-9a-zA-Z]{3})?$/;
        if(hexRegex.test(color)) {
            customColorTheme(color);
        }
    }, [color]);

    return (
        <table className="table" style={colorTheme}>
            <thead>
                <tr className="table-header">
                    { categories.map(category => <th key={category.category} className="table-header-cell">{category.formattedCategory}</th>) }
                </tr>
            </thead>
            <tbody>
                { formattedContent.map(row => (
                    <tr key={formattedContent.indexOf(row)} className="table-row">
                        { categories.map(category =>
                            <td key={category.category} className="table-row-cell">{ renderProperty(row, category) }</td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}