import { Container, Grid, Link, Typography } from '@mui/material';
import React, { useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import "../Components/Cart/Cart.scss"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="2" color="text.primary">
        Cart
    </Typography>,
];
const Cart = () => {
    const [item, setItem] = useState(0)
    return (
        <>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <div className="cart_contant">
                <Container>
                    <div className="header">
                        <h1>Cart</h1>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9}>
                            <div className="cart_item_table">
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Th>
                                            <Th>Date</Th>
                                            <Th>Price</Th>
                                            <Th>Body</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <div className="d-flex">
                                                    <img className='cart_img' src={process.env.PUBLIC_URL + '/Images/car_image.png'} />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum illum nam laborum excepturi, min</p>
                                                </div>
                                            </Td>
                                            <Td className="price">
                                                <div className="count">
                                                    <AiOutlineMinus onClick={() => setItem(item - 1)} />
                                                    <div className="item">
                                                        {item}
                                                    </div>
                                                    <AiOutlinePlus onClick={() => setItem(item + 1)} />
                                                </div>
                                            </Td>
                                            <Td>3</Td>
                                            <Td>4</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>price</Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Cart