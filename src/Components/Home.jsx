import React, { useState } from 'react';
import './Home.css'
import Package from './Package';
import { Link, useNavigate } from 'react-router-dom';
import { asset } from '../assets/asset';
const Home = () => {
  const Navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <nav>
      <div className='nav-img'>
        <div className='nav-top'>
          <div className='nav-left'>
            <h1>Heaven Fantasy</h1>
          </div>

          <div className='nav-toggle' onClick={() => setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-right ${showMenu ? 'active' : ''}`}>
            <Link to='/home'>Home</Link>
           <Link to='/package'>Packages </Link>
           <Link to='/about'>About </Link>
            <Link to='/contact'>Contact </Link>
            <img src={asset.icon} onClick={()=>Navigate('/login')} style={{width:'40px', borderRadius:'50%', marginRight:'20px', cursor:'pointer'}} alt="" />
          </div>
        </div>

        <div className='title-head'>
          <h2>50% offer</h2>
          <h1>get started </h1>
          <span>Your journey</span>
          <button onClick={()=>Navigate('/specialpackages')}>See More</button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Home;
