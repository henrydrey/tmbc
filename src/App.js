import logo from './logo.svg';
import './App.css';
import NavBar from './components/bits/navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Bio from './components/pages/who-we-are/Bio';
import History from './components/pages/who-we-are/History';
import Pastor from './components/pages/who-we-are/Pastor';
import Ministries from './components/pages/ministries/Ministries';
import AWANA from './components/pages/ministries/AWANA';
import SundaySchool from './components/pages/ministries/SundaySchool';
import LadiesFellowship from './components/pages/ministries/LadiesFellowship';
import YouthFellowship from './components/pages/ministries/YouthFellowship';
import Choir from './components/pages/ministries/Choir';
import Services from './components/pages/services/Services';
import Footer from './components/bits/footer/Footer';

function App() {
  return (
    <div className=" text-center">
      {/* <header className="App-header">
        <img src={logo} className=" pointer-events-none h-screen motion-safe:animate-pulse flex space-x-4" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1 className="text-3xl font-bold underline"
      style={{backgroundImage: {bgimage}}}
      >
        Hello world!
      </h1> */}
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/ministries' element={<Ministries />} />
        <Route path='/history' element={<History />} />
        <Route path='/pastor' element={<Pastor />} />
        <Route path='/AWANA' element={<AWANA />} />
        <Route path='/sunday-school' element={<SundaySchool />} />
        <Route path='/ladies-fellowship' element={<LadiesFellowship />} />
        <Route path='/youth-fellowship' element={<YouthFellowship />} />
        <Route path='/choir' element={<Choir />} />
        <Route path='/services' element={<Services />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
