import React from 'react'
import './card.css'
import Dine from './Dine-Out.png'


const card = () => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={Dine} />
            <h1>Order Online</h1>
            <span>
                Stay home and order to your doorstep
            </span>

        </div>
        <div className='cardImg'> 
        {/* <img src={Night} alt='Night_img' /> */}
        <h1>NightLife and clubs</h1>
        <span>Explore the city's top nightlife outlets</span>
        </div>
        <div className='cardImg'> 
        {/* <img src={Online} alt='Online_img' /> */}
        <h1>Dining</h1>
        <span>Views the city's favourite venues</span>
        </div>
    </div>
  )
}

export default card