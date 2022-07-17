import { Container } from '@mui/material'
import React, { useState } from 'react'
import "./Car_Details.scss"
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


function a11yProps(index) {
  return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Car_Details = () => {
  const [item, setItem] = useState(0)
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
  return (
    <div className="product_details">
      <Container>
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
            <div className="rating">
              <AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} /><AiFillStar size={20} />
              <h6>4.0</h6>
              <span>7 Reviews</span>
            </div>
            <div className="price">
              <h1>$12,000.00</h1>
              <div className="count">
                <AiOutlineMinus onClick={() => setItem(item - 1)} />
                <div className="item">
                  {item}
                </div>
                <AiOutlinePlus onClick={() => setItem(item + 1)} />
              </div>
              <div className="like">
                <AiOutlineHeart />
              </div>
              <div className="cart">
                <AiOutlineShoppingCart />
              </div>
            </div>
            <div className="benifit">
              <table>
                <tr>
                  <td>Benefits:</td>
                  <td>Quick refunds on orders under US $1,000</td>
                </tr>
                <tr>
                  <td>Samples:</td>
                  <td>$12,000.00/Set | 1 Set (Min. Order) </td>
                </tr>
                <tr>
                  <td>Customization:</td>
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
          <div className="bil">
            <table>
              <tr>
                <td>Price:</td>
                <td>US $20100.00</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Shipping Charge:</td>
                <td>US $1,200.00</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>US $29,300.00</td>
              </tr>
            </table>
            <div className="date">
              <img className='me-3' src={process.env.PUBLIC_URL + '/Images/Group 518.png'} />
              <span>Estimated delivery 7/15-8/18</span>
              <h5>For product pricing, customization, or other inquiries:</h5>
              <button><img className='' src={process.env.PUBLIC_URL + '/Images/sup.png'} /></button>
              <button className='buy_now'>Buy Now</button>
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
        <div className="faqs">
          <h1>FAQs</h1>
          <div className="border_bottom"></div>
        <Accrodions />
        </div>
      <Also_Like />
      </Container>
      <Footer />
    </div>
  )
}

export default Car_Details