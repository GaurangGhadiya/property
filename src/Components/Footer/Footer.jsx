import { Container, Grid } from '@mui/material'
import React from 'react'
import "./Footer.scss"
import { AiFillLinkedin,AiOutlineInstagram,AiOutlineTwitter,AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className="white_space_footer"></div>
            <div className='Footer'>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item sx={12} sm={6} md={3}>
                            <img className='' src={process.env.PUBLIC_URL + '/Images/Logo/trader.png'} />
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h6>
                            <div className="store_img mt-5">
                                <img className='' src={process.env.PUBLIC_URL + '/Images/playstore 1.png'} />
                                <img className='ms-2' src={process.env.PUBLIC_URL + '/Images/applestore 1.png'} />
                            </div>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <h3>company</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Legal information</li>
                                <li>Contact Us</li>
                                <li>Blogs</li>
                            </ul>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <h3>help center</h3>
                            <ul>
                                <li>Find a Property</li>
                                <li>How To Host?</li>
                                <li>Why Us?</li>
                                <li>FAQS</li>
                                <li>Rental Guides</li>
                                <li>Our Covid Support</li>
                                <li>Link - 1</li>
                                <li>Link - 2</li>
                                <li>Link - 3</li>
                            </ul>
                        </Grid>
                        <Grid item sx={12} sm={6} md={3}>
                            <h3>contact info</h3>
                            <ul>
                                <li>Phone: 1234567890</li>
                                <li>Email: comapany@gmail.com</li>
                                <li>Location : 100 Smart Street</li>
                                <li><AiFillFacebook className='footer_icon' size={30} /><AiOutlineTwitter className='footer_icon' size={30} /><AiOutlineInstagram className='footer_icon' size={30} /><AiFillLinkedin className='footer_icon' size={30} /></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
                <hr />
                <div className="footer_end">
                    Copyright 2022 trader.com | All rights reserved
                </div>
            </div>
        </>
    )
}

export default Footer