import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import AppDownload from '../../components/AppDownload/AppDownload'

const footer = () => {
  return (
    <div className="footer" id="footer">
      <AppDownload />
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />  
              <img src={assets.linkedin_icon} alt="" />

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>+94 342561567</li>
            <li>TastyEats@gmail.com</li>
          </ul>
        </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default footer;
