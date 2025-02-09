import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css";
import logo from "./assets/logo.avif";
import moodIndigoImage from "./assets/mood-indigo.jpeg";
import techfestImage from "./assets/techfest.jpeg";


const HomePage = () => {
  const navigate = useNavigate(); 

  const handleEventClick = (event) => {
    localStorage.setItem("selectedEvent", event);
    navigate("/hostel-selection");
  };

  return (
    <div className="homepage">
      <div className="logo-container">
        <img src={logo} alt="EventNest Logo" className="logo" />
        <h1 className="welcome-text">Welcome to EventNest</h1>
      </div>
      
      <div className="events-container">
        <h2 className="events-title">Select Your Event</h2>
        <div className="event-options">
          <div className="event-card" onClick={() => handleEventClick("Mood Indigo")}>
            <img src={moodIndigoImage} alt="Mood Indigo" className="event-image" />
            <div className="event-info">
              <h3>Mood Indigo</h3>
              <p>Asia's Largest College Cultural Festival</p>
              <span className="event-date">Dec 20-23, 2023</span>
            </div>
          </div>

          <div className="event-card" onClick={() => handleEventClick("Techfest")}>
            <img src={techfestImage} alt="Techfest" className="event-image" />
            <div className="event-info">
              <h3>Techfest</h3>
              <p>Asia's Largest Science and Technology Festival</p>
              <span className="event-date">Jan 5-7, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
