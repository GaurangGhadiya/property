import { Container, Grid } from '@mui/material'
import React from 'react'
import "./Feachers.scss"

const Feachers = () => {
  return (
    <div className='feachers'>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img' src={process.env.PUBLIC_URL + '/Images/image 6 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img' src={process.env.PUBLIC_URL + '/Images/image 7 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img' src={process.env.PUBLIC_URL + '/Images/image 8 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img_short' src={process.env.PUBLIC_URL + '/Images/image 9 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img_long' src={process.env.PUBLIC_URL + '/Images/image 10 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={2}>
               <div className="img2">
                 <img className='me-2 img' src={process.env.PUBLIC_URL + '/Images/image 11 (Traced).png'} />
               </div>
                <h6>Hospital & Diagnostics</h6>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Feachers