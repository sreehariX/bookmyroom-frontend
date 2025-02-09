import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "./api/axios";
import "./BillingPage.css";

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hostel, price } = location.state || {};
  const event = localStorage.getItem("selectedEvent");
  
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [residents, setResidents] = useState([]);
  const [newResident, setNewResident] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get(`/rooms/?hostel=${hostel}`);
        setRooms(response.data.filter(room => room.hostel_name_display === hostel.replace('H', '')));
        setLoading(false);
      } catch (err) {
        setError("Failed to load rooms");
        setLoading(false);
      }
    };

    fetchRooms();
  }, [hostel]);

  const handleBack = () => {
    navigate("/hostel-selection");
  };

  const getRoomStatus = (room) => {
    const eventKey = event === "Mood Indigo" ? "moodIndigo" : "techFest";
    const availableCapacity = room[`available_capacity_${eventKey}`];
    const totalCapacity = room.capacity;
    
    if (availableCapacity === totalCapacity) return "empty";
    if (availableCapacity === 0) return "full";
    return "partial";
  };

  const getAvailableCapacity = (room) => {
    const eventKey = event === "Mood Indigo" ? "moodIndigo" : "techFest";
    return room[`available_capacity_${eventKey}`];
  };

  const handleRoomClick = (room) => {
    const eventKey = event === "Mood Indigo" ? "moodIndigo" : "techFest";
    if (room[`available_capacity_${eventKey}`] === 0) return;
    setSelectedRoom(room);
    setResidents([]);
  };

  const handleAddResident = (e) => {
    e.preventDefault();
    if (!newResident.trim()) return;
    
    const eventKey = event === "Mood Indigo" ? "moodIndigo" : "techFest";
    if (residents.length < selectedRoom[`available_capacity_${eventKey}`]) {
      setResidents([...residents, newResident]);
      setNewResident("");
    }
  };

  const handleConfirmBooking = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      
      // Send booking requests 
      for (const residentName of residents) {
        await api.post('/bookings/', {
          event: event,
          resident_name: residentName,
          hostel_name: hostel.replace('H', ''),
          room_number: selectedRoom.room_number
        }, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
      }

      // preparee booking details
      const bookingDetails = {
        hostel: hostel,
        room_number: selectedRoom.room_number,
        residents: residents,
        total_residents: residents.length,
        price: price,
        date: new Date().toLocaleDateString(),
        timing: "Check-in: 2 PM | Check-out: 12 PM",
        event: event,
        total_capacity: selectedRoom.capacity
      };

      navigate("/booking-summary", { state: { bookingDetails } });
    } catch (error) {
      setError("Failed to confirm booking. Please try again.");
      console.error("Booking error:", error);
    }
  };

  if (loading) return <div className="loading">Loading rooms...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="billing-container">
      <div className="billing-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h2>{hostel} Rooms - {event}</h2>
      </div>

      <div className="billing-content">
        <div className="hostel-info">
          <p className="price">{price}</p>
          <div className="room-status-legend">
            <span className="status empty">Empty</span>
            <span className="status partial">Partially Filled</span>
            <span className="status full">Full</span>
          </div>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`room ${getRoomStatus(room)}`}
              onClick={() => handleRoomClick(room)}
            >
              <span className="room-number">{room.room_number}</span>
              <span className="occupancy">
                {room.capacity - getAvailableCapacity(room)}/{room.capacity}
              </span>
            </div>
          ))}
        </div>

        {selectedRoom && (
          <div className="booking-form">
            <h3>Room {selectedRoom.room_number}</h3>
            <p>Available Spots: {getAvailableCapacity(selectedRoom)}</p>
            
            <form onSubmit={handleAddResident}>
              <input
                type="text"
                value={newResident}
                onChange={(e) => setNewResident(e.target.value)}
                placeholder="Enter resident name"
              />
              <button type="submit">Add Resident</button>
            </form>

            <div className="residents-list">
              {residents.map((resident, index) => (
                <div key={index} className="resident-item">{resident}</div>
              ))}
            </div>

            {residents.length > 0 && (
              <button className="confirm-button" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BillingPage;