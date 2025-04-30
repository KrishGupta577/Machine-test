import { AppleIcon, ArrowRight } from 'lucide-react'
import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="sidebar">
                <p>Women's Fashion </p>
                <p>Mens's Fashion</p>
                <p>Electronics</p>
                <p>Medicine</p>
                <p>Sports & Outdoor</p>
                <p>Baby's toys</p>
                <p>Groceries & Pets</p>
                <p>Health & Beauty</p>
            </div>
            <div className="hero-offers">
                <div className="hero-container">
                    <div className="iphone">
                        <img src="1126a357e5011a6f245df4c38eae015c7c9ccbe7.png" alt="" />
                        <p>iPhone 14 Series</p>
                    </div>
                    <div className="voucher">
                        <p>Up to 10%</p>
                        <p>Off Voucher</p>
                    </div>

                    <a href="">Shop Now <ArrowRight /> </a>
                </div>
                <div className="iphone-img">
                    <img src="dc40ba897215f42e5883a64157f0aa3a4d1a866a.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Hero