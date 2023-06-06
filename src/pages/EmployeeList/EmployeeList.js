import Header from "../../components/Header/Header";
import { Table } from "@chloeadriancreates/custom-react-table";
import "./EmployeeList.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/**
 * Display the employee list page.
 * @component
*/
export default function EmployeeList() {
    const employees = useSelector((state) => state.employees);

    useEffect(() => {
        document.title = "HRNet – Current employees";
    }, []);

    return (
        <div className="employeeList">
            <Header />
            <div className="employeeList-table">
                <h1 className="employeeList-title">Current employees</h1>
                <Table content={employees} color="#577399" dateFormat="MM/DD/YYYY" objectKey={{ state: "abbreviation" }} />
            </div>
        </div>
    );
}