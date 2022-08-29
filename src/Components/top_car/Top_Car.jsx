import { Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import "./Top_Car.scss"

const Top_Car = ({data}) => {
    const navigate = useNavigate()
    return (
        <div>
            {data?.product?.length !== 0 && <Container>
                <div className="car_title mt-5 pt-4">
                    <div className="">
                    <h1>{data?.name}</h1>
                    <div className="border_bottom"></div>
                    </div>
                    <Button onClick={() => navigate("/user-product-list")}>View All</Button>
                </div>
                <Grid container spacing={2} className="cards">
                    {data?.product?.map(e => <Grid item sx={12} sm={6} md={3}><Card data={e}/></Grid>)}
                </Grid>
            </Container>}
        </div>
    )
}

export default Top_Car