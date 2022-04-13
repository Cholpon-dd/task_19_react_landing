import React from 'react'
import './heroSection.scss'
import mainPhoto from '../../images/mainPhoto.jpg'

const HeroSection = () => {
  return (
    <section>
    <div className="container">
      <div className='img-container'>
        <img className='main-photo' src={mainPhoto} alt="" />
        <h1 className='main__title'>Coworking Space for Professionals</h1>
        <h4 className='sub__title'>Fully Furnished, Superfast Internet, Meeting Rooms, Lockers</h4>
      </div>
     
    </div>
  </section>
  )
}

export default HeroSection