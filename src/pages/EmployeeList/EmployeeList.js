import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import "./EmployeeList.css";
import { useSelector } from "react-redux";

export default function EmployeeList() {
    const employees = useSelector((state) => state.employees);

    return (
        <div className="employeeList">
            <Header />
            <div className="employeeList-table">
                <Table content={employees} color="#577399" dateFormat="MM/DD/YYYY" objectKey={{ state: "abbreviation" }} />
            </div>
        </div>
    );
}