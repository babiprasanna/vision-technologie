import React, { useState } from 'react';
import {  useEffect } from 'react';
import brand from "../../assets/7697.jpg"
import wed from "../../assets/2.jpg"
import graphic from "../../assets/Graphic-Design-Services.jpg"
import printing from "../../assets/66ea23241e87806c007fc8f6e98ff7bd.jpg"
import digital from "../../assets/illustrative-diagram-of-digital-marketing-on-white-background-KDR5A6.jpg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CompleteHook from '../our Clients';
import Services from '../our servics';
import OurWorks from '../ourWorks';
import Text from '../marguee';
import Reviews from '../reviws';
import About from '../abovtUs';
import "./index.css"
import Logos from '../logos';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
     brand,
     printing,
     digital,
     wed,
     graphic

  ];

  const slideText = [
    { title: 'Branding', description: 'Unleash the Power of Your Brand with Vogue Vision Our branding services are tailored to amplify your brands identity...' },
    { title: 'Printing', description: 'Experience top-quality printing at unbeatable wholesale prices. From business cards and brochures to flyers and banners...' },
    { title: 'Digital Inovations', description: 'Elevate your event planning with our digital invitation service. Say goodbye to paper invites and hello to stunning...' },
    { title: 'Website Designing', description: 'Elevate your online presence with our top-notch website designing service! Our team of skilled designers will craft visually appealing...' },
    { title: 'Graphic Designing', description: 'Designs that resound & resonates from captivating logos to stunning brand collaterala and magazines. we turn ideas into visual masterpieces...' }
  ];

  const [slides, setSlides] = useState([
    "Slide 1",
    "Slide 2",
    "Slide 3"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);


  
  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = ['This is the first sentence.', 'This is the second sentence.', 'This is the third sentence.'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => {
        const newText = prevText + phrases[index][prevText.length];
        if (newText === phrases[index]) {
          clearInterval(interval);
          setTimeout(() => {
            setText('');
            setIndex(prevIndex => (prevIndex + 1) % phrases.length);
          }, 1500); 
        }
        return newText;
      });
    }, 100); 
    return () => clearInterval(interval);
  }, [index, phrases]);


  const [isAnimate, setIsAnimate] = useState(false);
  const [buttonX, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);

  const handleMouseEnter = (event) => {
    setIsAnimate(true);
    setButtonX(event.nativeEvent.offsetX);
    setButtonY(event.nativeEvent.offsetY);
  };

  const handleMouseLeave = () => {
    setIsAnimate(false);
    setButtonX(0);
    setButtonY(0);
  };

  return (
    <>
    <div>
    <div className='home-container'>
    <div className="slider-container">
    <div className="slide">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='image'/>
    </div>
    <div className="controls">
      <div className='slide-content'>
       <span className='slider-heading bax animate__animated animate__fadeInLeft'>{slideText[currentIndex].title}</span>
       <span className='bax2 animate__animated animate__fadeInRight'>{slideText[currentIndex].description}</span>
       </div>
    </div>
  </div>
  </div>
  </div>
    <CompleteHook />
    <Text />
    <About />
    <OurWorks />
    <Services />
    <Logos />
    <Reviews />
  </>
  );
};


export default Home;
