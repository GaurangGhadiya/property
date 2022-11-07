import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='Card'>
         <img className='' src={data?.image[0]} onClick={() => navigate(`/view-product/${data?._id}`, {
                                                    state: { id: data?._id,image:data?.image }
                                                })}/>
         <h5>{data?.title}</h5>
         {/* <span>5 km from downtown - 20 km from airport</span> */}
    </div>
  )
}

export default Card