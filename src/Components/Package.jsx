import React, { useState } from 'react'
import { asset } from '../assets/asset'
import { Link, useNavigate } from 'react-router-dom'
import './package.css'

const Package = () => {
  const [showMenu, setShowMenu] = useState(false);
  const Navigate = useNavigate();
  const places = [
    {
      title: "switzeland",
      para: "6N/7D",
      cost: "Checkout this",
      link: "/Swiss",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.switzerland,
    },
    {
      title: "France ",
      para: "8N/9D",
      cost: " Checkout this ",
      link: "/france",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.france
    },
    {
      title: "United State ",
      para: "7N/8D",
      cost: "Checkout this ",
      link: '/US',
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.us1
    },
    {
      title: "China ",
      para: "8N/9D",
      link: '/china',
      cost: "Checkout this",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.china
    },
    {
      title: "Italy ",
      para: "6N/7D",
      link: '/italy',
      cost: " Checkout this ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.italy
    },
    {
      title: "Turkey ",
      para: "6N/7D",
      link: '/turkey',
      cost: "Checkout this",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.turkey
    },
    {
      title: "Thailand ",
      para: "5N/6D",
      link: "/thailand",
      cost: "Checkout this",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.thailand
    },
    {
      title: "london",
      para: "6N/7D",
      link: "/london",
      cost: "Checkout this",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.london
    },
    {
      title: "maldives",
      para: "6N/7D",
      link: "/maldives",
      cost: "Checkout this ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.maldives
    },
    {
      title: "delhi",
      para: "6N/7D",
      link: "/tajmahal",
      cost: " Checkout this ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.taj
    },
    {
      title: "Jammu & Kashmir",
      para: "6N/7D",
      link: "/jammu",
      cost: "Checkout this ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.jammu
    },
    {
      title: "Kerala",
      para: "6N/7D",
      link: "/kerala",
      cost: "Checkout this ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum doloremque unde accusamus perferendis!",
      image: asset.kerala
    },
  ]
  const offers = [
    {
      title: "switzerland",
      para: "6Night/7Day",
      offer: "4dys only",
      img: asset.swiss,
      off: '40%'
    },
    {
      title: "Bali",
      para: "4Night/5Day",
      offer: "4dys only",
      img: asset.thailand1,
      off: "50%"
    },
    {
      title: "Goa",
      para: "4N/5D",
      offer: "2dys only",
      img: asset.goa,
      off: '20%'
    },
    {
      title: "kerala",
      para: "6N/7D",
      offer: "4dys only",
      img: asset.ker,
      off: '30%'
    },
    {
      title: "maldives ",
      para: "5N/6D",
      offer: "4dys only",
      img: asset.maldives,
      off: '36%'
    },
  ]
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
            <img src={asset.bk} width={25} className='back-up'  onClick={() => Navigate('/home')} />
      
      <h1 className='pck-hd'>Packages</h1>
      <div className='card-pck'>
        {places.map((place, index) => (
          <div key={index} className='card-hold'>
            <img src={place.image} alt="img" />
            <h1>{place.title}</h1>
            {/* <Link to='/Package/Swiss'><button>switzerland</button></Link>   */}
            <button onClick={() => Navigate(place.link)}>{place.cost}</button>
            {/* <span>{place.desc}</span> */}

          </div>
        ))}
      </div>
      <h1 className='pck-hd'>Current seasons</h1>
      <div className='offer-main'>

        {offers.map((offer, index) => (
          <div key={index} className='offer-head'>
            <h3>{offer.title}</h3>
            <img src={offer.img} alt="" />
            <p>{offer.para}</p>
            <span>{offer.offer}</span>
            <em className='offer-em'>{offer.off}</em>
          </div>
        ))}
      </div>
      {/* <About/> */}
    </>
  )
}

export default Package