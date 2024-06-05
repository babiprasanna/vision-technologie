import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from "./components/navbar"
import Services from "./components/our servics"
import Reviews from "./components/reviws"
import Footer from "./components/footer"
import Home from "./components/home"
import CompleteHook from "./components/our Clients"
import ChatBot from 'react-simple-chatbot';
import About from "./components/abovtUs";
import OurWorks from "./components/ourWorks"

import './App.css'

function App() {
  return (
  <div className='app'>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/ourWorks" element={<OurWorks />} />
        <Route path="/comple" element={<CompleteHook />} />
      </Routes>
      <Footer />
    </Router>
    <div className="color" >
    <ChatBot
        headerTitle="Speech Recognition"
        recognitionEnable={true}
        floating = {true}

  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
    ]}
   />
  </div>
</div>
  )
}

export default App





// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Arial, sans-serif',
//   headerBgColor: '#00b3b3',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#00b3b3',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };
// theme={theme}
// botAvatar={'https://example.com/your-bot-avatar.png'}