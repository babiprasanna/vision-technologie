import CountUp from 'react-countup';
import "./index.css"

function CompleteHook() {
  
    return (
        <div className='container mt-5 mb-5 w-100 zoomInUp'>
          <div className='row align45'>
            <div className='col-12 col-sm-6 col-lg-3 align'>
                <p className='count'><CountUp start={0} end={225} duration={5} /><h5 className='plus'>+</h5></p>
                <h1 className='clients-heading'>Happy Clients</h1>
            </div>
            <div className='col-12 col-sm-6 col-lg-3 align'>
            <p className='count'><CountUp start={0} end={12} duration={5} /><h5 className='plus'>+</h5></p>
                <h1 className='clients-heading'>Upcoming Projects</h1>
            </div>
            <div className='col-12 col-sm-6 col-lg-3 align'>
            <p className='count'><CountUp start={0} end={810} duration={5} /><h5 className='plus'>+</h5></p>
                <h1 className='clients-heading'>Project Completed</h1>
            </div>
            <div className='col-12 col-sm-6 col-lg-3 align'>
            <p className='count'><CountUp start={0} end={4.2} duration={5} /><h5 className='plus'>+</h5></p>
                <h1 className='clients-heading'>Clients Rating</h1>
            </div>
          </div>
           
        </div>
    );
};

export default CompleteHook;
