import React, { useEffect, useState } from 'react'
import { ApiGetNoAuth } from '../Api/Api'
import Banner from '../Components/Banner/Banner'
import Download_App from '../Components/Download_App/Download_App'
import Feachers from '../Components/feachers/Feachers'
import Our_Service from '../Components/Our_Service/Our_Service'
import Section from '../Components/section/Section'
import Top_Car from '../Components/top_car/Top_Car'

const Home = () => {
  const [data, setData] = useState()
  useEffect(() => {
    ApiGetNoAuth("user/home_page")
            .then((res) => {
                console.log(res,"res");
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
    title:"latest"
  }
  const data2 = {
    title:"Exploring Top Model Used Cars"
  }
  const data3 = {
    title:"Exploring Top Model Options"
  }
  const data4 = {
    title:"Exploring Automobile Parts"
  }
  const data5 = {
    title:"Exploring Top Model Options"
  }
  return (
    <>
    <Banner />
    <Feachers />
    <Top_Car data={data?.recentData}/>
    <Top_Car data={data2}/>
    <Top_Car data={data3}/>
    <Top_Car data={data4}/>
    <Section />
    <Top_Car data={data5}/>
    <Our_Service />
    <Download_App />
    </>
  )
}

export default Home