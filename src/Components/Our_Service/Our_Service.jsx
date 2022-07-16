import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import "./Our_Service.scss"

const Our_Service = () => {
  return (
    <div className='Our_Service'>
        <Container>
                <div className="car_title">
                    <div className="">
                    <h1>Our Trade Services for you</h1>
                    <div className="border_bottom"></div>
                    </div>
                </div>
                <Grid container spacing={2} className="cards">
                    <Grid item sx={12} sm={6} md={3}>
                        <div className='Card'>
         <img className='' src={process.env.PUBLIC_URL + '/Images/Rectangle 82 (1).png'} />
        <div className="icon_border">
             <img className='Icon_img' src={process.env.PUBLIC_URL + '/Images/image 16 (Traced).png'} />
        </div>
         <h5>Order Protection</h5>
         <span>Trade assurance is a free order protection service offered</span>
    </div>
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <div className='Card'>
         <img className='' src={process.env.PUBLIC_URL + '/Images/Rectangle 83.png'} />
        <div className="icon_border">
             <img className='Icon_img' src={process.env.PUBLIC_URL + '/Images/image 17 (Traced).png'} />
        </div>
         <h5>Order Protection</h5>
         <span>Trade assurance is a free order protection service offered</span>
    </div>
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <div className='Card'>
         <img className='' src={process.env.PUBLIC_URL + '/Images/Rectangle 84.png'} />
        <div className="icon_border">
             <img className='Icon_img' src={process.env.PUBLIC_URL + '/Images/image 18 (Traced).png'} />
        </div>
         <h5>Order Protection</h5>
         <span>Trade assurance is a free order protection service offered</span>
    </div>
                    </Grid>
                    <Grid item sx={12} sm={6} md={3}>
                        <div className='Card'>
         <img className='' src={process.env.PUBLIC_URL + '/Images/Rectangle 85.png'} />
        <div className="icon_border">
             <img className='Icon_img' src={process.env.PUBLIC_URL + '/Images/image 19 (Traced).png'} />
        </div>
         <h5>Order Protection</h5>
         <span>Trade assurance is a free order protection service offered</span>
    </div>
                    </Grid>
                </Grid>
            </Container>
    </div>
  )
}

export default Our_Service