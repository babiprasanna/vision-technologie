import pic from "../../assets/images/WhatsApp Image 2023-11-27 at 3.31.39 PM (1).jpeg"
import { FaStar } from "react-icons/fa6";
import Marquee from 'react-fast-marquee';
import "./index.css"

function Reviews() {
    return(
    <div className="reviw-container">
        <h1 className="com-heading mr-3">What Our Clients Say</h1>
        <hr className="line"/>
        <p className="cli-para">Our clients rave about Vogue Vision, delivering outstanding results and exceeding expectations.</p>
      <Marquee>
      <div className="center342">
    <p className="coment-paragraph ">For My grocery bussiness i wanted best website development
      services. And Jayas Media team provided such services at  
        highly affordable prices. Tnanks a lot guys.</p>
      <div className='image-container'>  
        <hr className='marquee-line' />
        <div className='photo'>
      <img src={pic} alt="pic" className='photo2' />
      </div>
       </div>
      <div className='center34' id ="center34" style={{display:"flex"}}>
        <div >
        <h2 className='coment-heading'>Apoorva David</h2>
         <p className='coment-heading '>Devi fishries woner</p>
        </div>
        <div className='p'>
        <p className='d-flex mr-3 mt-3' ><FaStar className='star'/> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /></p>
        </div>
        </div>
      </div>
      <div className="center342">
    <p className="coment-paragraph ">For My grocery bussiness i wanted best website development
      services. And Jayas Media team provided such services at  
        highly affordable prices. Tnanks a lot guys.</p>
      <div className='image-container'>  
        <hr className='marquee-line' />
        <div className='photo'>
      <img src={pic} alt="pic" className='photo2' />
      </div>
       </div>
      <div className='center34' id ="center34" style={{display:"flex"}}>
        <div >
        <h2 className='coment-heading'>Apoorva David</h2>
         <p className='coment-heading '>Devi fishries woner</p>
        </div>
        <div className='p'>
        <p className='d-flex mr-3 mt-3' ><FaStar className='star'/> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /></p>
        </div>
        </div>
      </div>
      <div className="center342">
    <p className="coment-paragraph ">For My grocery bussiness i wanted best website development
      services. And Jayas Media team provided such services at  
        highly affordable prices. Tnanks a lot guys.</p>
      <div className='image-container'>  
        <hr className='marquee-line' />
        <div className='photo'>
      <img src={pic} alt="pic" className='photo2' />
      </div>
       </div>
      <div className='center34' id ="center34" style={{display:"flex"}}>
        <div >
        <h2 className='coment-heading'>Apoorva David</h2>
         <p className='coment-heading '>Devi fishries woner</p>
        </div>
        <div className='p'>
        <p className='d-flex mr-3 mt-3' ><FaStar className='star'/> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /></p>
        </div>
        </div>
      </div>
        </Marquee>
  </div>)
}

export default Reviews;