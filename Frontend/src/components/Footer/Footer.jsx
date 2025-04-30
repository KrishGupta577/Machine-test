import React from 'react'
import { Linkedin, Instagram, Twitter, Facebook, Copyright } from "lucide-react"
import './Footer.css'

const Footer = () => {
    return (
        <div className='' id='contact'>
            <div className='footer'>
                <div className="exclusive">
                    <h3 className='exclusive-heading'>Exclusive</h3>
                    <p className='subscribe'>Subscribe</p>
                    <p className='offer'>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="support">
                    <h3>Support</h3>
                    <p className='address'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='email'>exclusive@gmail.com</p>
                    <p className='number'>+88015-88888-9999</p>
                </div>
                <div className="account">
                    <h3>Account</h3>
                    <p className="my-account">My Account</p>
                    <p className='register'>Login/Register</p>
                    <p className="cart">Cart</p>
                    <p className="wishlist">Wishlist</p>
                    <p className="shop">Shop</p>
                </div>
                <div className="quick-link">
                    <h3>Quick Links</h3>
                    <p className="privacy">Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>FQA</p>
                    <p>Contact</p>
                </div>
                <div className="download-app">
                    <h3>Download App</h3>
                    <p>Save $3 with App New User only</p>
                    <div className="app-images">
                        <img className='qr-scanner' src="/991387c05dd6d44594e01b675513068803e2426d (2).jpg" alt="" />
                        <div className="playstore-images">
                            <img className='playstore' src="/a61d4c7110b18ab55a1e1a07ebf54a46ebb07284.png" alt="" />
                            <img className='appstore' src="/38932d5accb54c528f9bcf326ca48ea29bd6d890.png" alt="" />
                        </div>
                    </div>
                    <div className="social-links">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <Linkedin />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <Copyright />
                <p>copyright Rimel 2022. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer