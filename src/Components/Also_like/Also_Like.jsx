import { Container, Grid } from '@mui/material'
import React from 'react'
import Card from '../top_car/Card'
import "./Also_like.scss"

const Also_Like = () => {
  return (
             <div className='Also_Like'>
                <div className="car_title">
                    <div className="">
                    <h1>You may also like</h1>
                    <div className="border_bottom"></div>
                    </div>
                </div>
                <Grid container spacing={2} className="cards">
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                </Grid></div>
  )
}

export default Also_Like