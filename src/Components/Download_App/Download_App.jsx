import { Button,Container } from '@mui/material'
import React from 'react'
import "./Download_App.scss"

const Download_App = () => {
  return (
    <Container>
    <div className='Download_App'>
        <div className="app_content">
        <h1>Download Our Mobile App</h1>
        <h6>Available for free on these platforms</h6>
        <div className="store_img mt-5">
        <img className='' src={process.env.PUBLIC_URL + '/Images/playstore 1.png'} />
        <img className='ms-2' src={process.env.PUBLIC_URL + '/Images/applestore 1.png'} />
        </div>
        </div>
        <div className="mobile_img">
        <img className='' src={process.env.PUBLIC_URL + '/Images/mobiles.png'} />
        </div>
    </div>
</Container>
  )
}

export default Download_App