import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingOptions = () => {
  const [hasBooking, setHasBooking] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingStatus = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch("/api/get-booking/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.booking) setHasBooking(true);
        }
      } catch (error) {
        console.error("Error fetching booking status:", error);
      }
    };

    fetchBookingStatus();
  }, []);

  return (
    <div className="booking-options-container">
      <h2>Welcome!</h2>
      <button onClick={() => navigate(hasBooking ? "/see-bookings" : "/hostel-selection")}>
        {hasBooking ? "See My Bookings" : "Book My Room"}
      </button>
    </div>
  );
};

export default BookingOptions;
