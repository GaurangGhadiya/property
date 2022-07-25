import { Container, Link, Typography } from '@mui/material';
import React from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import Dealer_Car_Details from '../Components/Delaer_Product/Dealer_Car_Details';

const View_Product = () => {
  const breadcrumb = [
    <Link underline="hover" key="1" href="/">
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
    >
      Product List
    </Link>,
    <Typography key="3" color="text.primary">
       View Product
    </Typography>,
  ];
  return (
    <>
      <div className='header_breadcrumb'>
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Container>
      </div>
      <Dealer_Car_Details />
    </>
  )
}

export default View_Product