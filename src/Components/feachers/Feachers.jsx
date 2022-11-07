import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ApiGetNoAuth } from '../../Api/Api';
import { useNavigate } from 'react-router-dom'
import "./Feachers.scss"

const Feachers = () => {
  const [data, setData] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    ApiGetNoAuth("user/get_subCategory")
            .then((res) => {
                console.log(res,"res");
                setData(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
  }, [])
  
  return (
    <div className='feachers'>
        <Container>
            <Grid container spacing={2}>
                {data?.map((e) => {
                  return (
                    <Grid item xs={6} sm={6} md={4} lg={2} >
               <div className="img2" onClick={() => navigate("/user-product-list",{state:{id:e?._id}})}>
                 <img className='me-2 img' src={e?.image} />
               </div>
                <h6>{e?.name}</h6>
                </Grid>
                  )
                })}
            </Grid>
        </Container>
    </div>
  )
}

export default Feachers