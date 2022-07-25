import { Container } from '@mui/material'
import React, { useState } from 'react'
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


function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Dealer_Car_Details = () => {
  const [item, setItem] = useState(0)
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
  return (
    <div className="product_details dealer_product_details">
      <Container>
      <h2> <MdKeyboardArrowLeft /> View Product</h2>
        <div className="details">
          <div className="iamges">
            <div className="big_Image">
              <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
            </div>
            <div className="small_image">
              <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
              <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
              <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
              <img className='' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
            </div>
          </div>
          <div className="car_details">
            <h1>US Supplier Electric Car SOL E20X</h1>
            <div className="price">
              <h1>$12,000.00</h1>
            </div>
            <div className="benifit">
              <table>
                <tr>
                  <td className='mt-3'>Benefits:</td>
                  <td>Quick refunds on orders under US $1,000</td>
                </tr>
                <tr>
                  <td>Samples:</td>
                  <td>$12,000.00/Set | 1 Set (Min. Order) </td>
                </tr>
                <tr>
                  <td className='d-flex'>Customization:</td>
                  <td>
                    <h6 >Customized logo<span>(Min. Order: 1 Sets)</span></h6>
                    <h6 >Customized packaging<span>(Min. Order: 1 Sets)</span></h6>
                    <h6 >Graphic customization<span>(Min. Order: 1 Sets)</span></h6>
                  </td>
                </tr>
                <tr>
                  <td>Shipping:</td>
                  <td>Support Sea freight</td>
                </tr>
                <tr>
                  <td>Protection:</td>
                  <td>
                    <h6><img className='me-2' src={process.env.PUBLIC_URL + '/Images/shield 1 (Traced).png'} />Trade Assurance</h6>
                    <h6><img className='me-2' src={process.env.PUBLIC_URL + '/Images/Group 499.png'} />Refund Policy</h6>
                  </td>
                </tr>
                <tr>
                  <td>Share:</td>
                  <td className='share_icon'>
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <FaLinkedinIn />
                    <FaPinterestP />
                  </td>
                </tr>
              </table>

            </div>
          </div>
          
        </div>
        <div className="description">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Product Description" {...a11yProps(0)} />
                      <Tab label="Company Profile" {...a11yProps(1)} />
                      <Tab label="Reviews" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  {value === 0 && <Description />}
                  {value === 1 && <Comapny_Profile />}
                  {value === 2 && <Reviews />}
        </div>
        <hr />
        <div className="faqs">
          <h1>FAQs</h1>
          <div className="border_bottom"></div>
        <Accrodions />
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Dealer_Car_Details