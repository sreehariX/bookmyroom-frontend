import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BillingPage.css";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hostel, price } = location.state || {};

  const isPremiumHostel = hostel === "H15" || hostel === "H16";
  const totalFloors = isPremiumHostel ? 10 : 2;
  const roomsPerFloor = isPremiumHostel ? 18 : 30;
  const pricePerPerson = isPremiumHostel ? 1000 : 500;

  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedWing, setSelectedWing] = useState(isPremiumHostel ? "A" : "");
  const [selectedRooms, setSelectedRooms] = useState([]);

  useEffect(() => {
    if (!hostel) {
      navigate("/hostel-selection");
    }
  }, [hostel, navigate]);

  const toggleRoomSelection = (roomId) => {
    if (selectedRooms.includes(roomId)) {
      setSelectedRooms(selectedRooms.filter((id) => id !== roomId));
    } else {
      setSelectedRooms([...selectedRooms, roomId]);
    }
  };

  const handleBack = () => {
    navigate("/hostel-selection");
  };

  const handlePayment = () => {
    const bookingDetails = {
      name: "John Doe", // Replace with actual user data
      date: new Date().toLocaleDateString(),
      timing: "Check-in: 2 PM | Check-out: 12 PM",
      hostel,
      roomNo: selectedRooms.join(", "),
    };
    navigate("/booking-summary", { state: { bookingDetails } });
  };

  return (
    <div className="billing-container">
      <div className="billing-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h2>{hostel}:</h2>
      </div>

      <div className="billing-content">
        {isPremiumHostel && (
          <div className="dropdown">
            <label>Wing</label>
            <select value={selectedWing} onChange={(e) => setSelectedWing(e.target.value)}>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
        )}

        <div className="dropdown">
          <label>Floor</label>
          <select value={selectedFloor} onChange={(e) => setSelectedFloor(Number(e.target.value))}>
            {[...Array(totalFloors)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>

        <div className="hostel-info">
          <p className="price">{price}</p>
          <p>{isPremiumHostel ? ">1.2kms from LHC" : `>${hostel} canteen`}</p>
          <p>{isPremiumHostel ? ">H15 canteen" : ""}</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>

        <div className="room-grid">
          {[...Array(roomsPerFloor)].map((_, index) => {
            const roomId = `F${selectedFloor}-R${index + 1}`;
            return (
              <div
                key={roomId}
                className={`room ${selectedRooms.includes(roomId) ? "selected" : index % 5 === 0 ? "booked" : "available"}`}
                onClick={() => {
                  if (!(index % 5 === 0)) toggleRoomSelection(roomId);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>

        <div className="legend">
          <div><span className="legend-box available"></span> Available</div>
          <div><span className="legend-box selected"></span> Selected</div>
          <div><span className="legend-box booked"></span> Booked</div>
        </div>

        {selectedRooms.length > 0 && (
          <button className="pay-button" onClick={handlePayment}>
            Click to Pay ₹{selectedRooms.length * pricePerPerson}
          </button>
        )}
      </div>
    </div>
  );
};

export default BillingPage;
