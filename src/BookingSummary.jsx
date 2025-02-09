import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingSummary.css";

function BookingSummary() {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingDetails = location.state?.bookingDetails || {};

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="page">
            <div className="body">
                <div className="backbuttondiv">
                    <button id="backbutton" onClick={handleBack}>Back</button>
                </div>

                <div className="content">
                    <div className="summary">Booking Summary</div>
                    <div className="details">
                        <div className="bookingdetails">
                            <div className="booking-section">
                                <h3>Event Details</h3>
                                <p className="para">Event: {bookingDetails.event}</p>
                                <p className="para">Date: {bookingDetails.date}</p>
                                <p className="para">Timing: {bookingDetails.timing}</p>
                            </div>

                            <div className="booking-section">
                                <h3>Room Details</h3>
                                <p className="para">Hostel: {bookingDetails.hostel}</p>
                                <p className="para">Room Number: {bookingDetails.room_number}</p>
                                <p className="para">Price: {bookingDetails.price}</p>
                            </div>

                            <div className="booking-section">
                                <h3>Resident Details</h3>
                                <p className="para">Total Residents: {bookingDetails.total_residents}</p>
                                <div className="residents-list">
                                    {bookingDetails.residents?.map((resident, index) => (
                                        <div key={index} className="resident-item">
                                            <span className="resident-number">{index + 1}.</span>
                                            {resident}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="confirmation-message">
                        Your booking has been confirmed! Thank you!
                    </div>
                </div>
            </div>

            <div className="design">
                <div className="band2"></div>
                <div className="band1"></div>
            </div>
        </div>
    );
}

export default BookingSummary;
