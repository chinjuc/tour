import React, { useState } from 'react'
import './check.css'
import { asset } from '../assets/asset';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Cheking = () => {
    const [showMenu, setShowMenu] = useState(false);
  // const {id} = useParams();
  const Navigate = useNavigate()
  const [form, setForm] = useState({
    name:"",
    email:"",
    phone: "",
    dob: "",
    nationality: "",
    tour: "",
    startDate: "",
    endDate: "",
     travelers: 1,
    room: "",
    special: "",
    extras: "",
     billing: "",
   
  });

   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const handlesubmit = async(e)=>{
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3002/bookings`, form);
      console.log('Form Submitted:', response.data);
      alert("Booking submitted successfully!");
      
      setForm({
        name: "",
        email: "",
        phone: "",
        dob: "",
        nationality: "",
        tour: "",
        startDate: "",
        endDate: "",
        travelers: 1,
        room: "",
        special: "",
        extras: "",
        billing: "",
      });
      return(
        Navigate('/list')
      )
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <div>
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
            <Link to='/list'>view list </Link>
            <img src={asset.icon} onClick={() => Navigate('/login')} style={{ width: '40px', borderRadius: '50%', marginRight: '20px', cursor: 'pointer' }} alt="" />
          </div>
        </div>
      </nav>
      <form className="checkout-form" onSubmit={handlesubmit}>
      <h2 className='text-2xl '>Tour Checkout Form</h2>

      <label>Full Name</label>
      <input name="name" value={form.name} onChange={handleChange} required />

      <label>Email Address</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} required />

      <label>Phone Number</label>
      <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />

      <label>Date of Birth</label>
      <input name="dob" type="date" value={form.dob} onChange={handleChange} />

      <label>Nationality</label>
      <input name="nationality" value={form.nationality} onChange={handleChange} />

      <label>Select Tour Package</label>
      <select name="tour" value={form.tour} onChange={handleChange} required>
        <option value="">-- Select --</option>
        <option>Zermatt & Matterhorn</option>
        <option>Lucerne City Tour</option>
        <option>Interlaken Adventure</option>
        <option>Jungfraujoch Experience</option>
        <option>London </option>
        <option>Italy Experience</option>
        <option>Bali experience</option>
        <option>Manali </option>
        <option>Kerala </option>
      </select>

      <label>Start Date</label>
      <input name="startDate" type="date" value={form.startDate} onChange={handleChange} required />

      <label>End Date</label>
      <input name="endDate" type="date" value={form.endDate} onChange={handleChange} />

      <label>Number of Travelers</label>
      <input name="travelers" type="number" min="1" value={form.travelers} onChange={handleChange} />

      <label>Room Type</label>
      <select name="room" value={form.room} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option>Single</option>
        <option>Double</option>
        <option>Family</option>
      </select>

      <label>Special Requests</label>
      <textarea name="special" value={form.special} onChange={handleChange} />

      <label>Add-ons</label>
      <select name="extras" value={form.extras} onChange={handleChange}>
        <option>None</option>
        <option>Meal Plan Included</option>
        <option>Airport Pickup</option>
        <option>Full City Tour</option>
      </select>

      
      <label>Billing Address</label>
      <textarea name="billing" value={form.billing} onChange={handleChange} required />

      

      <button type="submit">Confirm </button>
    </form>
    </div>
  )
}

export default Cheking