import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import PersonalInformation from "./PersonalInformation";
import HostelSelection from "./HostelSelection";
import BillingPage from "./BillingPage";
import BookingSummary from "./BookingSummary";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/hostel-selection" element={<HostelSelection />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
