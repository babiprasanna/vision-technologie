import React from 'react';
import Marquee from 'react-fast-marquee';
import './index.css'; // Import CSS file for styling

function Text() {
    return (
        <div className="marquee-container">
           {/* <div className="marquee"> */}
                <Marquee style={{overflow:"hidden",color:"rgb(250,166,26)", height:"140px"}}>
                <span className='para'>Best Quality</span>
                <span className='para'>Creative Design</span>
                <span className='para'>Branding</span>
                <span className='para'>webdesign</span>
                <span className='para'>3D</span>
                <span className='para'>graphics</span>
                <span className='para'>Digital marketing</span>
                <span className='para'>Concepts based animations</span>
                </Marquee>
           {/* </div> */}
         </div>
    );
}

export default Text;
