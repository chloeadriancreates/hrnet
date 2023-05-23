import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./NewEmployee.css";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function NewEmployee() {
  return (
    <div className="newEmployee">
      <Header />
      <Card title="Personal information">
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
        <DatePicker label="Birthday" />
      </Card>
    </div>
  );
}
