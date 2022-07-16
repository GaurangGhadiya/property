import { Button, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import "./Banner.scss"
import { MdOutlineMyLocation } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';

const Banner = () => {
  return (
    <>
    <div className='home_banner'>
      <Container>
        <div className="content">
          <h6>View price changes across cities, location & more</h6>
          <h1>Search for products & find verified sellers near you</h1>
          <div className="input_filed mt-2">
            <div className="phone">
              <select name="" id="">
                <option value="Category">Category</option>
              </select>
              <TextField hiddenLabel id="outlined-basic" placeholder='Serach product' variant="outlined" />
              <div className="loc_icon">
              <MdOutlineMyLocation />
              </div>
             <div className="ser_btn">
             <Button><BiSearch /> Search</Button>
             </div>
            </div>
          </div>

          <span>0% Brokerage, 100% Transparency</span>
        </div>
      </Container>
    </div>
    <div className="white_space"></div>
    </>
  )
}

export default Banner