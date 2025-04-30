import React from 'react'
import SignupPage from '../../components/SignupPage/SignupPage'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className="hero-img">
                <img src="75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="img" />
            </div>

            <div className="signup-container">
                <SignupPage />
            </div>
        </div>
    )
}

export default LandingPage