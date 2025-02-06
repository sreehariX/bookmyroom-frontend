import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PersonalInformation from "./PersonalInformation";
import HostelSelection from "./HostelSelection";
import BillingPage from "./BillingPage";


function App() {
  const [selectedHostel, setSelectedHostel] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-info" element={<PersonalInformation />} />
        <Route path="/hostel-selection" element={<HostelSelection setSelectedHostel={setSelectedHostel} />} />
        <Route path="/billing/" element={<BillingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
