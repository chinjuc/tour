import React, { useState } from 'react';
import './Contact.css';
import { asset } from '../assets/asset';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [showMenu, setShowMenu] = useState(false);
    const Navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you shortly.");
    setForm({ name: '', email: '', message: '' });
  };

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
    <h1 className='cnt-us'>Contact us</h1>
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with Us</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> support@heavenfantasy.com</p>
          <p><FaMapMarkerAlt /> 123 Paradise Street, Switzerland</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.59134783278!2d77.5355706949598!3d8.0864018710708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed3d2a087861%3A0x1e790e896aeffaa0!2sKanniyakumari%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1752766198792!5m2!1sen!2sin"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div></>
  );
};

export default Contact;
