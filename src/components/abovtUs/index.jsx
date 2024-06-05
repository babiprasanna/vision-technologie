import idea from "../../assets/inspiration-creative-ideas-brainstorming-concept.jpg"
import "./index.css"

function About(){
    return(<div className="container align mt-5">
       <div className="row">
        <div className="col-12 col-md-6 align img animate__animated animate__slideInLeft">
            <img src={idea}  alt="img2"  className="image"/>
        </div>
        <div className="col-12 col-md-6 flex-column align context">
        <h2 className="about">About Us</h2>
            <p >Our journey was ignited by the vision of delivering unparalleled satisfaction to businesses seeking to enrich their branding through our exceptional products and services. We are a harmonious team where seasoned expertise converges with the vibrant creativity of young minds, working together to bring your brand’s vision to life. We are a team of passionate Digital Marketers having vast experience in Digital Marketing Strategies, Creative Designs and Content to deliver ultimate results.</p>
            <p >At Vogue Vision, we don't just amplify your digital presence; we orchestrate the optimization of your digital and offline campaigns to enhance profitability. Our approach is rooted in keeping your marketing efforts aligned with your goals, adaptable to market changes, and geared towards delivering maximum Return on Investment (ROI).</p>
            <p >In our youthfulness, we bring fresh perspectives and creativity to the forefront, ensuring that every solution we offer is not only effective but also resonates with the spirit of innovation. With us, your brand doesn't just flourish; it grows, adjusts, and triumphs in the ever-changing market landscape.</p>
        </div>
       </div>
    </div>)
}

export default About;
