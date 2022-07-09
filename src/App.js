import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  console.log("isUserLoggedIn", isUserLoggedIn)
  // const isUserLoggedIn = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isUserLoggedIn ? <HomePage /> : <LandingPage />}
          />
          <Route path="/sign-in" element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
