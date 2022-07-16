import { Container, Link, Typography } from '@mui/material';
import React from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import Car_Details from '../Components/Product-detail/Car_Details';

const Product_Detail = () => {
  const breadcrumb = [
    <Link underline="hover" key="1" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
    >
      Automobiles
    </Link>,
    <Typography key="3" color="text.primary">
      Electric Car
    </Typography>,
  ];
  return (
    <>
      <div className='header_breadcrumb'>
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Container>
      </div>
      <Car_Details />
    </>
  )
}

export default Product_Detail