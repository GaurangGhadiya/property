import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../Product-detail/Car_Details.scss"
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Description from '../Description/Description';
import Comapny_Profile from '../Comapny-Profile/Comapny-Profile';
import Reviews from '../Reviews/Reviews';
import Accrodions from '../Accrodions/Accrodions';
import Also_Like from '../Also_like/Also_Like';
import Footer from '../Footer/Footer';
import "./Dealer_Car_Details.scss"
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'


function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Dealer_Car_Details = ({data,image}) => {
  const navigate = useNavigate()
  const [item, setItem] = useState(image ? image[0] : [`${process.env.PUBLIC_URL + "/Images/car.png"}`])
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};

  return (
    <div className="product_details dealer_product_details">
      <Container>
      <h2 onClick={() => navigate("/dealer-product-list")}> <MdKeyboardArrowLeft /> View Product</h2>
        <div className="details d-flex">
          <div className="iamges">
            <div className="big_Image">
              <img className='' src={item} />
            </div>
            <div className="small_image">
              {data?.image && data?.image.map((e) => {
                return (
                  <img className='' src={e} onClick={() => setItem(e)}/>
                )
              })}
            </div>
          </div>
          <div className="car_details">
            <h1>{data?.title}</h1>
            <div className="price">
              <h1>${data?.price}</h1>
            </div>
            <div className="benifit">
              <table>
                <tr>
                  <td className='mt-3'>Benefits:</td>
                  <td>{data?.benefits}</td>
                </tr>
                <tr>
                  <td>Samples:</td>
                  <td>$12,000.00/Set | 1 Set (Min. Order) </td>
                </tr>
                <tr>
                  <td className='d-flex'>Customization:</td>
                  <td>
                    <h6 >{data?.customization}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>{data?.shipping}</td>
                </tr>
                <tr>
                  <td>Protection:</td>
                  <td>
                    {data?.protection?.tradeAssurance && <h6><img className='me-2' src={process.env.PUBLIC_URL + '/Images/shield 1 (Traced).png'} />Trade Assurance</h6>}
                    {data?.protection?.refundPolicy &&  <h6><img className='me-2' src={process.env.PUBLIC_URL + '/Images/Group 499.png'} />Refund Policy</h6>}
                  </td>
                </tr>
                {/* <tr>
                  <td>Share:</td>
                  <td className='share_icon'>
                  {data?.shareOption?.facebook &&<FaFacebookF />}
                  {data?.shareOption?.twitter &&<AiOutlineTwitter />}
                  {data?.shareOption?.linkedin &&<FaLinkedinIn />}
                  {data?.shareOption?.pinterest &&<FaPinterestP />}
                  </td>
                </tr> */}
              </table>

            </div>
          </div>
          
        </div>
        <div className="description">
                  <div className="faqs">
          <h1>Product Description</h1>
          <div className="border_bottom_Product"></div>
        <Description data={data}/>
        </div>
                  <div className="faqs">
          <h1>Company Profile</h1>
          <div className="border_bottom_Product1"></div>
        <Comapny_Profile data={data}/>
        </div>
                  <div className="faqs">
          <h1>Reviews</h1>
          <div className="border_bottom_Product2"></div>
        <Reviews data={data}/>
        </div>
        </div>
        <hr />
        <div className="faqs">
          <h1>FAQs</h1>
          <div className="border_bottom"></div>
        <Accrodions />
        </div>
      </Container>
    </div>
  )
}

export default Dealer_Car_Details