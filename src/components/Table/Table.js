import "./Table.css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Table({ content, color, dateFormat, objectKey }) {
    const [formattedContent, setFormattedContent] = useState([...content]);
    const [ascending, setAscending] = useState({});
    const [categories, setCategories] = useState([]);
    const [colorTheme, setColorTheme] = useState({
        "--bright": "rgba(139, 134, 128, 1)",
        "--light": "rgba(139, 134, 128, 0.2)",
        "--text": "white"
    });

    const sortContent = (category) => {
        let newContent = [...formattedContent].sort((a, b) => {
            if(ascending[category]) {
                return a[category].toLowerCase().localeCompare(b[category].toLowerCase());
            } else {
                return b[category].toLowerCase().localeCompare(a[category].toLowerCase());
            }
        });
        const newAscending = {...ascending};
        newAscending[category] = !newAscending[category];
        setAscending(newAscending);
        setFormattedContent(newContent);
    };

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
            if(dayjs(row[category.category]).isValid() && row[category.category] === dayjs(row[category.category]).toISOString()) {
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
            const ascendingBools = {};

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
                ascendingBools[category] = true;
            });

            setCategories(formattedCategories);
            setAscending(ascendingBools);
        };

        const removeObjects = (content) => {
            let tempContent = [];

            content.forEach(object => {
                const newObject = {};
                for(const property in object) {
                    if(objectKey.hasOwnProperty(property)) {
                        const replacementProperty = objectKey[property];
                        newObject[property] = object[property][replacementProperty];
                    } else {
                        newObject[property] = object[property];
                    }
                }
                tempContent.push(newObject);
            });

            setFormattedContent(tempContent);
        };

        defineCategories(content);
        removeObjects(content);
    }, [content, objectKey]);

    useEffect(() => {
        const hexRegex = /^#[0-9a-zA-Z]{3}(?:[0-9a-zA-Z]{3})?$/;
        if(hexRegex.test(color)) {
            customColorTheme(color);
        }
    }, [color]);

    useEffect(() => {
        console.log(formattedContent);
    }, [formattedContent]);

    return (
        <table className="table" style={colorTheme}>
            <thead>
                <tr className="table-header">
                    { categories.map(category =>
                        <th key={category.category} className="table-header-cell">
                            {category.formattedCategory}
                            <button className="table-header-sort" onClick={() => sortContent(category.category)}>
                                <i className="table-header-sort-icon fa-solid fa-sort-up"></i>
                                <i className="table-header-sort-icon fa-solid fa-sort-down"></i>
                            </button>
                        </th>)
                    }
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