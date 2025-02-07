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
                    <div className="summary">Summary:</div>
                    <div className="details">
                        <div className="bookingdetails">
                            <p className="para">Name: {bookingDetails.name}</p>
                            <p className="para">Date: {bookingDetails.date}</p>
                            <p className="para">Timing: {bookingDetails.timing}</p>
                            <p className="para">Hostel: {bookingDetails.hostel}</p>
                            <p className="para">Room No: {bookingDetails.roomNo}</p>
                        </div>
                    </div>
                    <div className="confirmation-message">Your room has been confirmed! Thank you!</div>
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
