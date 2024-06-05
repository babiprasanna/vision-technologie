import active from "../../assets/ACTIVE CARE logo.jpg"
import devi from "../../assets/devi logo.jpg"
import ferry from "../../assets/ferry logo.jpg"
import mw from "../../assets/MW logo.jpg"
import rk from "../../assets/RK loans logo.jpg"
import royal from "../../assets/royal touch logo.jpg"
import sam from "../../assets/smarudhi logo.jpg"
import tax from "../../assets/tax consultancy logo.jpg"
import vlt from "../../assets/vlt logo.jpg"
import Marquee from 'react-fast-marquee';
import "./index.css"

const logos = [active, devi, ferry, mw, rk, royal, sam, tax, vlt];

function Logos(){
    return(<div className="container mb-3 mt-3">
        <div className="row">
            <div className="col-12 align">
          <h1>Our Clients</h1>
          <Marquee>
      <ul className="wrap">
       
        {logos.map((name, index) => (
         <li key={index} className="company-container">
         {(name === rk) ? <img src = {name} alt={name} className="logos2" /> : <img src={name} alt={name} className="logos" />}
       </li>
        ))}
       
      </ul>
      </Marquee>
    </div>
        </div>
    </div>)
}

export default Logos;