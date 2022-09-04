import React from 'react'

const Card = ({data}) => {
  return (
    <div className='Card'>
         <img className='' src={data?.image[0]} />
         <h5>{data?.title}</h5>
         {/* <span>5 km from downtown - 20 km from airport</span> */}
    </div>
  )
}

export default Card