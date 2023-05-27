import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import "./EmployeeList.css";
import { useSelector } from "react-redux";

export default function EmployeeList() {
    const employees = useSelector((state) => state.employees);

    return (
        <div>
            <Header />
            <Table content={employees} />
        </div>
    );
}