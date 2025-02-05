import React from "react";
import { useNavigate } from "react-router-dom";
import "./HostelSelection.css";
import h16 from "../assets/h16.png";
import h2 from "../assets/h2.png";
import h6 from "../assets/h6.png";
import h3 from "../assets/h3.png";
import h1 from "../assets/h1.png";
import h5 from "../assets/h5.png";
import h15 from "../assets/h15.png";
import h11 from "../assets/h11.png";

const HostelSelection = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleHostelClick = (hostel) => {
    navigate(`/hostel/${hostel}`);
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
            <div className="hostel-card" onClick={() => handleHostelClick("H16")}>
              <img src={h16} alt="H-16" />
              <p>H-16</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H2")}>
              <img src={h2} alt="H-2" />
              <p>H-2</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H6")}>
              <img src={h6} alt="H-6" />
              <p>H-6</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H3")}>
              <img src={h3} alt="H-3" />
              <p>H-3</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H1")}>
              <img src={h1} alt="H-1" />
              <p>H-1</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H5")}>
              <img src={h5} alt="H-5" />
              <p>H-5</p>
            </div>
          </div>
        </div>

        <div className="girls-section">
          <span className="section-title">Girls:</span>
          <div className="hostel-grid girls">
            <div className="hostel-card" onClick={() => handleHostelClick("H15")}>
              <img src={h15} alt="H-15" />
              <p>H-15</p>
            </div>
            <div className="hostel-card" onClick={() => handleHostelClick("H11")}>
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
