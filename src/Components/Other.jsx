import React, { useState } from 'react'
import { asset } from '../assets/asset'
import './offer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Other = () => {
  const [showMenu, setShowMenu] = useState(false);
  const Navigate = useNavigate();
  const offerdata =[
     {
    name: 'honeymoon',
    title: 'Honeymoon Packages',
    img: asset.honeymoon,
    link: '/offer/honeymoon',
  },
  {
    name: 'single',
    title: 'Solo Packages',
    img: asset.single,
    link: '/offer/single'
  },
  {
    name: 'family',
    title: 'Family Packages',
    img: asset.family,
    link: '/offer/family'
  },
  {
    name: 'friends',
    title: 'Friends Packages',
    img: asset.friends,
    link: '/offer/friends'
  },
  {
    name: 'historical',
    title: 'Cultural Packages',
    img: asset.historical,
    link: '/offer/historical'
  },
  {
    name: 'adventure',
    title: 'Adventure Packages',
    img: asset.adv,
    link: '/offer/adventure'
  }
]

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
            <img src={asset.icon} onClick={() => Navigate('/login')} style={{ width: '40px', borderRadius: '50%', marginRight: '20px', cursor: 'pointer' }} alt="" />
          </div>
        </div>
      </nav>
       <div>
              <img src={asset.bk} width={25}className='back-up'  onClick={() => Navigate('/home')} />
      <div className='spcl'>
        <span>Special Packages</span>
        <img src={asset.icons} alt="" /> 
      </div>

      <div className='of-main'>
        {offerdata.map((offer, index) => (
          <div key={index} className='of-sub' onClick={() => Navigate(offer.link)}>
            <img src={offer.img} alt={offer.title} />
            <h2>{offer.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Other