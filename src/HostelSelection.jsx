import React from "react";
import { useNavigate } from "react-router-dom";
import "./HostelSelection.css";
import h16 from "./assets/h16.jpeg";
import h2 from "./assets/h2.jpeg";
import h6 from "./assets/h6.jpeg";
import h3 from "./assets/h3.jpeg";
import h1 from "./assets/h1.jpeg";
import h5 from "./assets/h5.jpeg";
import h15 from "./assets/h15.jpeg";
import h11 from "./assets/h11.jpeg";

const HostelSelection = ({ setSelectedHostel }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleHostelClick = (hostel, price, wings, floors) => {
    setSelectedHostel(hostel); // Save selected hostel globally
    navigate("/billing", {
      state: { hostel, price, wings, floors },
    }); // Navigate to BillingPage with data
  };

  return (
    <div className="hostel-container">
      <div className="hostel-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h2>Hostel:</h2>
      </div>

      <div className="hostel-section">
        <div className="boys-section">
          <span className="section-title">Boys</span>
          <div className="hostel-grid">
            <div className="hostel-card" onClick={() => handleHostelClick("H16", "₹1000 per day", ["A", "B"], 10)}>
              <img src={h16} alt="H-16" />
              <p>H-16</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H2", "₹500 per day", [], 2)}>
              <img src={h2} alt="H-2" />
              <p>H-2</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H6", "₹500 per day", [], 2)}>
              <img src={h6} alt="H-6" />
              <p>H-6</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H3", "₹500 per day", [], 2)}>
              <img src={h3} alt="H-3" />
              <p>H-3</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H1", "₹500 per day", [], 2)}>
              <img src={h1} alt="H-1" />
              <p>H-1</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H5", "₹500 per day", [], 2)}>
              <img src={h5} alt="H-5" />
              <p>H-5</p>
            </div>
          </div>
        </div>

        <div className="girls-section">
          <span className="section-title">Girls:</span>
          <div className="hostel-grid girls">
            <div className="hostel-card" onClick={() => handleHostelClick("H15", "₹1000 per day", ["C"], 10)}>
              <img src={h15} alt="H-15" />
              <p>H-15</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H11", "₹500 per day", [], 2)}>
              <img src={h11} alt="H-11" />
              <p>H-11</p>
            </div>
          </div>
        </div>
      </div>

      <div className="note">
        NOTE: Occupancy of four people in each room.
      </div>
    </div>
  );
};

export default HostelSelection;
