import React, { useState } from 'react'
import SignupPage from '../../components/SignupPage/SignupPage'
import './LandingPage.css'
import Login from '../../components/LoginPage/LoginPage'

const LandingPage = () => {

    const [currState, setCurrState] = useState('signup')

    return (
        <div className='landing-page'>
            <div className="hero-img">
                <img src="75f394c0a1c7dc5b68a42239311e510f54d8cd59.jpg" alt="img" />
            </div>

            <div className="signup-container">

                {currState === 'login' && <Login setCurrState={setCurrState} />}
                {currState === 'signup' && <SignupPage setCurrState={setCurrState}  />}
            </div>
        </div>
    )
}

export default LandingPage