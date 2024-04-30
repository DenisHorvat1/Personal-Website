import { useState } from "react";
import Axios from "axios";
import "../styles/Database.css";

function Database() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0); // Removed type assertion
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0); // Removed type assertion

  const addEmployee = () => {
    Axios.post("http://localhost:5173/create", {
      name: name,
      age: parseInt(age), // Parse age to number
      country: country,
      position: position,
      wage: parseInt(wage), // Parse wage to number
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="information">
      <label>Gender:</label>
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
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
      <label for="activity">Activity Level:</label>
      <select id="activity" name="activity">
        <option value="sedentary">Sedentary (little or no exercise)</option>
        <option value="lightly_active">Lightly active (light exercise/sports 1-3 days a week)</option>
        <option value="moderately_active">Moderately active (moderate exercise/sports 3-5 days a week)</option>
        <option value="very_active">Very active (hard exercise/sports 6-7 days a week)</option>
        <option value="extra_active">Extra active (very hard exercise/sports & physical job)</option>
      </select>

      <button onClick={addEmployee}>Add Employee</button> {/* Added text inside button */}
    </div>
  );
}

export default Database;
