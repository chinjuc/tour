
import React, { useState } from 'react';
import './About.css';
import { asset } from '../assets/asset';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const About = () => {
    const [showMenu, setShowMenu] = useState(false);
    const Navigate = useNavigate()
  return (
    <>
    <nav>
        <div className='nav-top'>
          <div className='nav-left'>
            <h1 className='text-gray-900'>Heaven Fantasy</h1>
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
            <img src={asset.icon} onClick={() => Navigate('/login')} style={{ width: '40px', borderRadius: '50%', marginRight: '20px', cursor: 'pointer' }} alt="" />
          </div>
        </div>
      </nav>
    <div className="about-wrapper">
      <section className="about-hero">
        <div className="overlay">
          <h1 className="fade-in">ABOUT US</h1>
          <p className="fade-in delay-1">Turning Your Travel Dreams into Reality</p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-card">
          <h2>🌍 Who We Are</h2>
          <p>
            We’re a passionate travel startup curating unforgettable trips for families, friends, couples, and solo adventurers. Our mission is to make travel seamless and personal, no matter your destination or budget.
          </p>
        </div>

        <div className="about-card">
          <h2>✨ What We Offer</h2>
          <ul>
            <li>Custom packages across 20+ countries</li>
            <li>Instant booking & itinerary planning</li>
            <li>Local guides, unique stays, and cultural immersion</li>
          </ul>
        </div>

        <div className="about-card highlight-card">
          <h2>💡 Why Choose Us?</h2>
          <p>
            We blend technology, creativity, and care to deliver an experience you won’t forget. Trusted by 10,000+ travelers with 98% positive reviews.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 Heaven Fantasy | ✈️</p>
      </footer>
    </div>
    </>
  );
};

export default About;