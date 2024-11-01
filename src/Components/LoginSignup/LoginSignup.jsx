import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user_icon.png'
import pass_icon from '../Assets/pass_icon.png'
import email_icon from '../Assets/email_icon.png'

const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underLine"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email ID' />
                </div> <div className="input">
                    <img src={pass_icon} alt="" />
                    <input type="password" placeholder='********'  />
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default LoginSignup