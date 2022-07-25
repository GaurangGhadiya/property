import { Button, Container, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "../Components/Product_List/Product_List.scss"
import { Pagination } from '@mui/material';
const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="3" color="text.primary">
        Product list
    </Typography>,
];
const Dealer_Product_List = () => {
    return (
        <div className='Product_List'>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <Container>
                <h1>Product List</h1>
                <div className="d-flex">
                    <div className="input_filed w-100">
                        <TextField
                            placeholder='Search by title, body type, etc'
                            hiddenLabel
                            id="outlined-basic"
                            variant="outlined"
                            name="email"
                        />
                    </div>
                    <Button className="common_btn w-100" >
                        Add Product
                    </Button>
                </div>
                <div className="product_table">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Title</Th>
                                <Th>Purchage Order</Th>
                                <Th>Price</Th>
                                <Th>Body Type</Th>
                                <Th>Mileage</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex ">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>Raysince supplier mini vehicle 2021 Hot sales smart</span>
                                    </div>
                                </Td>
                                <Td>$12,000.00</Td>
                                <Td>$12,000.00</Td>
                                <Td>Coupe</Td>
                                <Td>13600</Td>
                                <Td>
                                    <div className="action">
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                        />Edit</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                        />View</button>
                                        <button className='action_btn'><img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/delete.png"}
                                        />Delete</button>
                                    </div>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </div>
            </Container>
            <Container>
            <div className="product_pagination ">
            <h6>Page 1 to 20</h6>
            <Pagination count={4} variant="outlined" shape="rounded" />
            </div>
            </Container>
        </div>
    )
}

export default Dealer_Product_List