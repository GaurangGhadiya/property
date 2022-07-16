import { Button, Container } from '@mui/material'
import React from 'react'
import "./Section.scss"

const Section = () => {
  return (
    <Container>
        <div className='Section'>
            <h1>Popular Suppliers</h1>
            <h6>Discover Popular Products</h6>
            <Button>View All</Button>
        </div>
    </Container>
  )
}

export default Section