import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css";
import logo from "./assets/logo.avif";
import moodIndigoImage from "./assets/mood-indigo.jpeg";
import techfestImage from "./assets/techfest.jpeg";


const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleEventClick = (event) => {
    if (event === "Mood Indigo") {
      navigate("/personal-info?event=mood-indigo"); // Navigate with event query
    } else if (event === "Techfest") {
      navigate("/personal-info?event=techfest");
    }
  };

  return (
    <div className="homepage">
      <div className="logo-container">
        <img src={logo} alt="EventNest Logo" className="logo" />
      </div>
      <div className="event-options">
        <button
          className="event-button mood-indigo"
          onClick={() => handleEventClick("Mood Indigo")}
        >
          <img src={moodIndigoImage} alt="Mood Indigo" className="event-image" />
          Mood Indigo
        </button>
        <button
          className="event-button techfest"
          onClick={() => handleEventClick("Techfest")}
        >
          <img src={techfestImage} alt="Techfest" className="event-image" />
          Techfest
        </button>
      </div>
    </div>
  );
};

export default HomePage;
