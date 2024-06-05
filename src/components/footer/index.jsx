import Logo from "../../assets/vogue vision logo.jpg"
import React, { useState } from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import "./index.css"

const Footer = () => {
    const [isHoveredNavBtn7, setIsHoveredBtn7] = useState(false);
    const [isHoveredNavBtn8, setIsHoveredBtn8] = useState(false);
    const [isHoveredNavBtn9, setIsHoveredBtn9] = useState(false);
    const phoneNumber = '919652244994';
    const emailAddress = 'https://mail.google.com/mail/u/0/#inbox';

  const message = 'Hello%20there!'; 

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;


    const subject = 'Subject';
    const body = 'Body of the email';
  
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const pageOrProfileName = 'vision technologies';

    const facebookLink = `https://www.facebook.com/${pageOrProfileName}`;

  const handleMouseOver7 = () => {
    setIsHoveredBtn7(true);
  };

  const handleMouseOut7 = () => {
    setIsHoveredBtn7(false);
  };

  const handleMouseOver8 = () => {
    setIsHoveredBtn8(true);
  };

  const handleMouseOut8 = () => {
    setIsHoveredBtn8(false);
  };

  const handleMouseOver9 = () => {
    setIsHoveredBtn9(true);
  };

  const handleMouseOut9 = () => {
    setIsHoveredBtn9(false);
  };

    return(<div className="footer-container">
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-4 contain">
                  <img src={Logo} alt="Vogue Vision" className="logo-image"/>
                  <p className="footer-paragraph">By merging the power of data, art, and technology, we craft meaningful experiences that foster connections and drive business growth.</p>
                  <div className="items-row">
                  <a href={facebookLink} target="_blank" rel="noopener noreferrer"><BsFacebook className="faceBook-logo" style={{
            color: isHoveredNavBtn7 ? 'white' : 'rgb(250,166,26)',
          }} onMouseOver={handleMouseOver7}
          onMouseOut={handleMouseOut7} /></a>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="under"><FaSquareWhatsapp className="faceBook-logo" style={{
            color: isHoveredNavBtn8 ? 'white' : 'rgb(250,166,26)',
          }} onMouseOver={handleMouseOver8}
          onMouseOut={handleMouseOut8} /></a>
                      <FaLinkedin className="faceBook-logo" style={{
            color: isHoveredNavBtn9 ? 'white' : 'rgb(250,166,26)',
          }} onMouseOver={handleMouseOver9}
          onMouseOut={handleMouseOut9} />
                  </div>
            </div>
            <div className="col-12 col-lg-3 contain2">
                  <h1 className="footer-heading">QUICK LINKS</h1>
                  <div className="hr-line">
                      <hr/>
                  </div>
                  <p className="footer-paragraph">Home</p>
                  <p className="footer-paragraph">About us</p>
                  <p className="footer-paragraph">Our Services</p>
                  <p className="footer-paragraph">Digital Marketing</p>
                  <p className="footer-paragraph">Search Engine Optimization</p>
                  <p className="footer-paragraph">Website Development</p>
                  <p className="footer-paragraph">Our Portfolo</p>
                  <p className="footer-paragraph">Contact Us</p>
            </div>
            <div className="contain2 col-12 col-lg-4">
                  <h1 className="footer-heading">CONTACT INFO</h1>
                  <div className="hr-line">
                      <hr/>
                  </div>
                  <div className="address-logo">
                     <FaPhoneAlt className="phone-logo" />
                    <div>
                        <p className="footer-logo-text">+91 xxxxx xxxxx</p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="under"><p className="footer-logo-text">+91 xxxxx xxxxx</p></a>
                    </div>
                  </div>
                  <div className="mail-container">
                    <SiGmail className="mail-logo"/>
                    <div>
                    <p className="footer-logo-text">visiontechnologies@gmail.com</p>
                    <a href={mailtoLink} target="_blank" rel="noopener noreferrer" className="under"><p className="footer-logo-text">visiontechnologies.in</p></a>
                   </div>
                  </div>
                  <div className="address-logo">
                    <MdLocationOn className="location"/>
                    <div>
                        <p className="footer-logo-text">Kirlampudi 2nd Floor</p>
                        <p className="footer-logo-text">Beside ramalayam temple kirlampudi</p>
                        <p className="footer-logo-text">Andhra Pradesh - 533 431</p>
                        <iframe
                          title="My Google Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.077316315121!2d82.23431097470191!3d16.97074681467501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3829924f7b0bf3%3A0xb8b1763b231880cf!2sVogue%20Vision!5e0!3m2!1sen!2sin!4v1701075472450!5m2!1sen!2sin12"
                          width="100%"
                          height="300"
                            style={{ border: 0 }}
                             allowFullScreen
                            loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                                   ></iframe>
                    </div>
                  </div>
            </div>
        </div>
    </div>
    </div>
    <div className="hr-line2 mt-3">
       <hr/>
    </div>
    <p className="footer-paragraph">Copyright <FaRegCopyright />2024 <span className="name"> Vision Technologies </span>advertising agency. All rights reserved.</p>
</div>)
}

export default Footer;