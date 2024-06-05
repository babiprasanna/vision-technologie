import { MdAddAPhoto } from "react-icons/md";
import { FaBullhorn } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { BsFillRocketFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import "./index.css"


const initialData = [
    { id: 1, heading: 'Branding', description: "Unleash the Power of Your Brand with Avyukth Web Techs! Our branding services are tailored to amplify your brands identity..." ,image:<GiLightBulb className='camera'/>},
    { id: 2, heading: 'Digital Marketing', description: "Elevate your event planning with our digital invitation service. Say goodbye to paper invites and hello to stunning..." ,image:<BsFillRocketFill className='camera'/>},
    { id: 3, heading: 'Printing', description: "Experience top-quality printing at unbeatable wholesale prices. From business cards and brochures to flyers and banners..." ,image:<FaBullhorn className='camera'/> },
    { id: 4, heading: 'Professional Photography', description: "Authentic pictures make an instant connection with the audience and builds trust at the same time. Our Professional..." ,image:<MdAddAPhoto className='camera'/>},
    { id: 5, heading: 'Website development', description: "Elevate your online presence with our top-notch website designing service! Our team ofskilled designers will craft visually..." ,image:<CgWebsite className='camera'/>},
  ];


// {homeData:[
//   { title: 'Branding', description: 'Unleash the Power of Your Brand with Vogue Vision Our branding services are tailored to amplify your brands identity...' },
//   { title: 'Printing', description: 'Experience top-quality printing at unbeatable wholesale prices. From business cards and brochures to flyers and banners...' },
//   { title: 'Digital Inovations', description: 'Elevate your event planning with our digital invitation service. Say goodbye to paper invites and hello to stunning...' },
//   { title: 'Website Designing', description: 'Elevate your online presence with our top-notch website designing service! Our team of skilled designers will craft visually appealing...' },
//   { title: 'Graphic Designing', description: 'Designs that resound & resonates from captivating logos to stunning brand collaterala and magazines. we turn ideas into visual masterpieces...' }
// ],
// homeImages:[
//   brand,
//   printing,
//   digital,
//   wed,
//   graphic

// ],
// services:[
//   { id: 1, heading: 'Branding', description: "Unleash the Power of Your Brand with Avyukth Web Techs! Our branding services are tailored to amplify your brands identity..." ,image:<GiLightBulb className='camera'/>},
//   { id: 2, heading: 'Digital Marketing', description: "Elevate your event planning with our digital invitation service. Say goodbye to paper invites and hello to stunning..." ,image:<BsFillRocketFill className='camera'/>},
//   { id: 3, heading: 'Printing', description: "Experience top-quality printing at unbeatable wholesale prices. From business cards and brochures to flyers and banners..." ,image:<FaBullhorn className='camera'/> },
//   { id: 4, heading: 'Professional Photography', description: "Authentic pictures make an instant connection with the audience and builds trust at the same time. Our Professional..." ,image:<MdAddAPhoto className='camera'/>},
//   { id: 5, heading: 'Website development', description: "Elevate your online presence with our top-notch website designing service! Our team ofskilled designers will craft visually..." ,image:<CgWebsite className='camera'/>},
// ]

// }

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Services = () => {
  const [indexNumber, setIndexNumber] = useState(0);
  const [services,  setServices] = useState()
    
  const handleMouseOver = (item) => {
      setIndexNumber(item);
  };

  const handleMouseOut = (item) => {
      setIndexNumber(0);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/webRouter')
    .then(result => {
        setServices(result.data)
        console.log(result.data)
    }).catch(err => console.log(err))
}, [])

  return (
    <div className="our-container d-flex flex-column justify-content-center"  >
      <h1 style={{textAlign:"center",fontWeight: "900", color:"rgb(250,166,26)"}}>Our Digital Solution</h1>
      <p style={{textAlign:"center", color:"white", fontWeight: 200,}}>Get the most reduction in your team’s operating costs for the whole product which creates amazing UI/UX experiences.</p>
      <div className="slider-container d-flex  justify-content-center" >
        <Slider {...settings} style={{width:"94%",padding:"12px"}}>
          {initialData.map((each,index) => (
            <div key={each.id} className="mt-5">
            <div id="mini-container" className={`pulsate ${(index === indexNumber-1) ? 'hovered' : ''}`}
            onMouseOver={() => handleMouseOver(each.id)} onMouseOut={()=>handleMouseOut(each.id)} >
              <p className={(index === indexNumber-1)? "cam2":"cam"}>{each.image}</p>
              <h4>{each.heading}</h4>
              <h6>{each.description}</h6>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
