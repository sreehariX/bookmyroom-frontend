import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PersonalInformation.css";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [numPeople, setNumPeople] = useState(2);
  const [peopleData, setPeopleData] = useState([
    { name: "", gender: "" },
    { name: "", gender: "" },
  ]);
  const [alertMessage, setAlertMessage] = useState(''); // State to track alert message

  const handleIncrease = () => {
    if (numPeople < 4) {
      setNumPeople(numPeople + 1);
      setPeopleData([...peopleData, { name: "", gender: "" }]);
    }
  };

  const handleDecrease = () => {
    if (numPeople > 1) {
      setNumPeople(numPeople - 1);
      setPeopleData(peopleData.slice(0, -1));
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedPeople = [...peopleData];
    updatedPeople[index][field] = value;
    setPeopleData(updatedPeople);
  };

  const handleSubmit = () => {
    let isValid = true;
    // Check if all name and gender fields are filled out
    for (let i = 0; i < peopleData.length; i++) {
      if (!peopleData[i].name || !peopleData[i].gender) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      setAlertMessage('');
      navigate("/hostel-selection");
    } else {
      setAlertMessage('Please fill in all the details');
    }
  };

  return (
    <div className="personal-info-container">
      <div className="header">
        <p>No. of people:</p>
      </div>

      <div className="counter">
        <p>{numPeople}</p>
        <button className="circle-btn" onClick={handleDecrease}>−</button>
        <button className="circle-btn" onClick={handleIncrease}>+</button>
      </div>

      {peopleData.map((person, index) => (
        <div key={index} className="person-section">
          <label className="name-label">{index + 1}.Name</label>
          <input
            type="text"
            className="name-input"
            placeholder=" "
            value={person.name}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
          />

          <label className="gender-label">{index + 1}.Gender</label>
          <div className="gender-options">
            <label className="radio-container">
              <input
                type="radio"
                name={`gender-${index}`}
                value="Male"
                checked={person.gender === "Male"}
                onChange={(e) => handleInputChange(index, "gender", e.target.value)}
              />
              <span className="radio-circle"></span>
              Male
            </label>

            <label className="radio-container">
              <input
                type="radio"
                name={`gender-${index}`}
                value="Female"
                checked={person.gender === "Female"}
                onChange={(e) => handleInputChange(index, "gender", e.target.value)}
              />
              <span className="radio-circle"></span>
              Female
            </label>

            <label className="radio-container">
              <input
                type="radio"
                name={`gender-${index}`}
                value="Other"
                checked={person.gender === "Other"}
                onChange={(e) => handleInputChange(index, "gender", e.target.value)}
              />
              <span className="radio-circle"></span>
              Other
            </label>
          </div>
        </div>
      ))}

      {alertMessage && <div className="alert-message">{alertMessage}</div>}

      <button className="submit-btn" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default PersonalInformation;
