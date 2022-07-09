import React from 'react'
import HomePageContent from '../../components/HomePageContent/HomePageContent'
import Navbar from '../../components/Navbar/Navbar'
import "./HomePage.css"

function HomePage() {
  return (
    <div>
        <Navbar showSignInButton={false} showInputField={true} /> 
        <HomePageContent />
    </div>
  )
}

export default HomePage