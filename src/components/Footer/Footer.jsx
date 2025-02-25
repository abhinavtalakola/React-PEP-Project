import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p>Discover the flavors you love with HungryHunt! From comfort food to exotic cuisine, our platform brings the best dishes right to your doorstep. Browse, order, and enjoy — let your next delicious meal find you!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Hungry Hunt</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>7989227589</li>
                    <li>abhinavreddy0002@gmail.com</li>
                </ul>
            </div>
            

        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 © HungryHunt.com - All Right Reserved.
        </p>
      
    </div>
  )
}

export default Footer
