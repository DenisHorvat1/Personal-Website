import { useState } from "react";
import Axios from "axios";
import "../styles/Database.css";

function Database() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>(0); // Updated to accept string temporarily
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState<number | string>(0); // Updated to accept string temporarily

  const addEmployee = () => {
    Axios.post("http://localhost:5173/create", {
      name: name,
      age: parseInt(age as string), // Parse age to number
      country: country,
      position: position,
      wage: parseInt(wage as string), // Parse wage to number
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="information">
      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age:</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label>Country:</label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />
      <label>Position:</label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <label>Wage:</label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
      />
      <button onClick={addEmployee}>Add Employee</button> {/* Added text inside button */}
    </div>
  );
}

export default Database;
