import "./NewEmployee.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function NewEmployee() {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="newEmployee">
      <Header />
      <Card title="Personal information">
        <div className="contentRow">
          <TextField label="First name" variant="outlined" />
          <TextField label="Last name" variant="outlined" />
          <DatePicker label="Birthday" />
        </div>
      </Card>
      <Card title="Address">
        <div className="contentRow">
          <TextField label="Street" variant="outlined" />
          <TextField label="City" variant="outlined" />
        </div>
        <div className="contentRow">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="stateSelect">State</InputLabel>
            <Select
              labelId="stateSelect"
              value={state}
              onChange={handleChange}
              label="State"
            >
              <MenuItem value={"Alabama"}>Alabama</MenuItem>
              <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
              <MenuItem value={"Alaska"}>Alaska</MenuItem>
            </Select>
          </FormControl>
          <TextField sx={{ width: "100%" }} label="Zip code" variant="outlined" />
        </div>
      </Card>
    </div>
  );
}
