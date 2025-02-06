import './BookingSummary.css'
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function BookingSummary() {

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
                <div className="summary">Summary : </div>
                <div className="details">
                    <div class="bookingdetails">
                        <p className="para">Name : </p> 
                        <p className="para">Date : </p>
                        <p className="para">Timing : </p>
                        <p className="para">Hostel : </p>
                        <p className="para">Room no :</p>
                    </div>
                </div>
                <div className="THANK YOU !!">Your room has been confirmed! Thank u</div>
            </div>

        </div>

        <div classname="design">
            <div className="band2"></div>
            <div className="band1"></div>
        </div>

    </div>
    );
}

export default BookingSummary