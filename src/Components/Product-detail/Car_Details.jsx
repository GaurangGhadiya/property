import { Container } from '@mui/material'
import React from 'react'
import "./Car_Details.scss"

const Car_Details = () => {
  return (
    <div className="product_details">
    <Container>
      <div className="details">
        <div className="iamges">
          <div className="big_Image">
            <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
          </div>
          <div className="small_image">
            <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
            <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
            <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
            <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
          </div>
        </div>
        <div className="car_details">
            <h1>US Supplier Electric Car SOL E20X</h1>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default Car_Details