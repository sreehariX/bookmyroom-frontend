import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HostelSelection.css";
import api from "./api/axios";

const HostelSelection = () => {  
  const navigate = useNavigate();
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await api.get("/hostels/");
        setHostels(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load hostels");
        setLoading(false);
      }
    };

    fetchHostels();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleHostelClick = (hostel) => {
    navigate("/billing", { 
      state: { 
        hostel: `H${hostel.name}`, 
        price: `₹${hostel.price_per_booking} per day`
      } 
    });
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading hostels...</p>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <p>{error}</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  const maleHostels = hostels.filter(hostel => hostel.hostel_type === "Male");
  const femaleHostels = hostels.filter(hostel => hostel.hostel_type === "Female");

  return (
    <div className="hostel-container">
      <div className="hostel-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h2>Hostel Selection</h2>
      </div>

      <div className="hostel-section">
        <div className="boys-section">
          <span className="section-title">Boys</span>
          <div className="hostel-grid">
            {maleHostels.map(hostel => (
              <div 
                key={hostel.id} 
                className="hostel-card" 
                onClick={() => handleHostelClick(hostel)}
              >
                <div className="hostel-info">
                  <h3>H-{hostel.name}</h3>
                  <p className="location">{hostel.location}</p>
                  <p className="price">₹{hostel.price_per_booking} per day</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="girls-section">
          <span className="section-title">Girls</span>
          <div className="hostel-grid">
            {femaleHostels.map(hostel => (
              <div 
                key={hostel.id} 
                className="hostel-card" 
                onClick={() => handleHostelClick(hostel)}
              >
                <div className="hostel-info">
                  <h3>H-{hostel.name}</h3>
                  <p className="location">{hostel.location}</p>
                  <p className="price">₹{hostel.price_per_booking} per day</p>
                </div>
              </div>
            ))}
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