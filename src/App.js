import React from "react";
import "./App.css"; // Import your CSS file here (optional)
import LoginPage from "./components/Loginpage";
import UserListingPage from "./components/UserListingPage"; // Import other components

// Use Routes instead of Switch
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />{" "}
          {/* Use element prop with functional components */}
          <Route path="/user-listing" element={<UserListingPage />} />{" "}
          {/* Use element prop with functional components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
