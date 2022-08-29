import { Button, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiGetNoAuth } from '../Api/Api'
import Banner from '../Components/Banner/Banner'
import Download_App from '../Components/Download_App/Download_App'
import Feachers from '../Components/feachers/Feachers'
import Our_Service from '../Components/Our_Service/Our_Service'
import Section from '../Components/section/Section'
import Card from '../Components/top_car/Card'
import Top_Car from '../Components/top_car/Top_Car'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  useEffect(() => {
    ApiGetNoAuth("user/home_page")
      .then((res) => {
        console.log(res, "res");
        setData(res?.data?.data)
      })
      .catch(async (err) => {
        console.log(err);
      });
  }, [])
  // const data = {
  //   title:"subcategory"
  // }
  const data1 = {
    title: "latest"
  }
  const data2 = {
    title: "Exploring Top Model Used Cars"
  }
  const data3 = {
    title: "Exploring Top Model Options"
  }
  const data4 = {
    title: "Exploring Automobile Parts"
  }
  const data5 = {
    title: "Exploring Top Model Options"
  }
  console.log("data", data);
  return (
    <>
      <Banner />
      <Feachers />
      <div className="recent_Added">
        <div>
          <Container>
            <div className="car_title">
              <div className="">
                <h1>Recent Added</h1>
                <div className="border_bottom"></div>
              </div>
              <Button onClick={() => navigate("/user-product-list")}>View All</Button>
            </div>
            <Grid container spacing={2} className="cards">
              {data?.recentData?.map((e, i) => {
                return (
                  <>
                    {i < 4 && <Grid item sx={12} sm={6} md={3}>
                      <div className='Card'>
                        <img className='' src={e?.image[0]} />
                        <h5>{e?.title}</h5>
                        <span>5 km from downtown - 20 km from airport</span>
                      </div>
                    </Grid>}
                  </>
                )
              })}
            </Grid>
          </Container>
        </div>
      </div>
      {data?.subCategoryProducts?.map((e) => {
        return <Top_Car data={e} />
      })}
      {/* <Top_Car data={data2} />
      <Top_Car data={data3} />
      <Top_Car data={data4} /> */}
      <Section />
      {/* <Top_Car data={data5} /> */}
      <Our_Service />
      <Download_App />
    </>
  )
}

export default Home