import { Button, Container, Link, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "../Components/Product_List/Product_List.scss"
import { Pagination } from '@mui/material';
import {ApiPost } from '../Api/Api';
import moment from 'moment';
import {useNavigate} from 'react-router-dom'
const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="3" color="text.primary">
        Product list
    </Typography>,
];
const Dealer_Product_List = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [totalpage, settotalpage] = useState(0);
    const [currentpage, setcurrentpage] = useState(1);
  const [searching, setsearching] = useState("");

    const fetchData = (a,c) => {
        const body = {
            page:a,
            limit:10,
            search:c
        }
        ApiPost("dealer/product/filter_product",body)
        .then((res) => {
            console.log(res);
            setData(res?.data?.data?.product_data)
            settotalpage(res?.data?.data?.state?.page_limit);
        setcurrentpage(res?.data?.data?.state?.page);
        })
        .catch(async (err) => {
            console.log(err);
        });
    }
    const handlesearch = (e) => {
        console.log(e.target.value);
        setsearching(e.target.value);
        fetchData(1,e.target.value);
      };
    const handleChange = (e, i) => {
        console.log(i);
        fetchData(i, searching);
      };
      useEffect(() => {
        fetchData(1, searching);
    }, [])
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
                            value={searching}
                            onChange={(e) => handlesearch(e)}
                        />
                    </div>
                    <Button className="common_btn w-100" onClick={() => navigate("/add-product")}>
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
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((e) => {
                                return (
                                    <Tr>
                                <Td className="W_150">
                                    <div className="d-flex   align-items-center">
                                        <img
                                            className="me-2"
                                            src={process.env.PUBLIC_URL + "/Images/table.png"}
                                        />
                                        <span>{e?.title}</span>
                                    </div>
                                </Td>
                                <Td>{moment(e?.createdAt).format("DD/MM/YYYY")}</Td>
                                <Td>{e?.price ? e?.price : 0}</Td>
                                <Td>{e?.bodyType?.bodyType ? e?.bodyType?.bodyType : "-"}</Td>
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
                                )
                            })}
                        </Tbody>
                    </Table>
                </div>
            </Container>
            <Container>
            <div className="product_pagination ">
            <h6>Page {currentpage} to {totalpage}</h6>
            <Pagination
                    count={totalpage}
                    page={currentpage}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    className="pagination_"
                  />
            </div>
            </Container>
        </div>
    )
}

export default Dealer_Product_List