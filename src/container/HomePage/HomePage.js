import React from "react";
import HomePageContent from "../../components/HomePageContent/HomePageContent";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

function HomePage({ setProductId, isUserLoggedIn, setIsUserLoggedIn }) {
  return (
    <div>
      <Navbar
        showSignInButton={false}
        showInputField={true}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <HomePageContent setProductId={setProductId} />
    </div>
  );
}

export default HomePage;
