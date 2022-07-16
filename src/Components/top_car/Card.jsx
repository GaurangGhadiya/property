import React from 'react'

const Card = () => {
  return (
    <div className='Card'>
         <img className='' src={process.env.PUBLIC_URL + '/Images/car.png'} />
         <h5>Electric SUV high Single speed car</h5>
         <span>5 km from downtown - 20 km from airport</span>
    </div>
  )
}

export default Card