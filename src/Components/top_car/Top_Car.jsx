import { Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import "./Top_Car.scss"

const Top_Car = ({data}) => {
    const navigate = useNavigate()
    
    
    return (
        <div>
            <Container>
                <div className="car_title">
                    <div className="">
                    <h1>{data?.title ? data?.title : "Recent Added"}</h1>
                    <div className="border_bottom"></div>
                    </div>
                    <Button onClick={() => navigate("/user-product-list")}>View All</Button>
                </div>
                <Grid container spacing={2} className="cards">
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                    <Grid item sx={12} sm={6} md={3}><Card /></Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Top_Car