import { Container, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ApiGet } from '../Api/Api';
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
  const [data, setData] = useState({})
  const { id } = useParams()
    console.log("id",id);
    useEffect(() => {
      ApiGet(`dealer/product/${id}`)
          .then((res) => {
              console.log(res);
              setData(res?.data?.data)
          })
          .catch(async (err) => {
              console.log(err);
          });
  }, [])
  return (
    <>
      <div className='header_breadcrumb'>
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} />
        </Container>
      </div>
      <Dealer_Car_Details data={data}/>
    </>
  )
}

export default View_Product