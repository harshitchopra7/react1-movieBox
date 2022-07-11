import React from 'react'
import HomePageContent from '../../components/HomePageContent/HomePageContent'
import Navbar from '../../components/Navbar/Navbar'
import "./HomePage.css"

function HomePage({ setProductId }) {
  return (
    <div>
        <Navbar showSignInButton={false} showInputField={true} /> 
        <HomePageContent setProductId={setProductId} />
    </div>
  )
}

export default HomePage