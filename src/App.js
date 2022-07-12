import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [productId, setProductId] = useState(0);

  console.log("isUserLoggedIn", isUserLoggedIn);
  // const isUserLoggedIn = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isUserLoggedIn ? (
                <HomePage
                  setProductId={setProductId}
                  isUserLoggedIn={isUserLoggedIn}
                  setIsUserLoggedIn={setIsUserLoggedIn}
                />
              ) : (
                <LandingPage />
              )
            }
          />
          <Route
            path="/sign-in"
            element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn} />}
          />
          {/* <Route path="/electronics/:id" element={<SingleProductPage productId={productId} />}  /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
