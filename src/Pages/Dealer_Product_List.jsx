import { Box, Button, Container, Link, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import "../Components/Product_List/Product_List.scss"
import { Pagination } from '@mui/material';
import { ApiDelete, ApiPost } from '../Api/Api';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import { ErrorToast, SuccessToast } from '../Components/Toast';
const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="3" color="text.primary">
        Product list
    </Typography>,
];
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 170,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};
const Dealer_Product_List = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [totalpage, settotalpage] = useState(0);
    const [currentpage, setcurrentpage] = useState(1);
    const [searching, setsearching] = useState("");
    const [deleteID, setdeleteID] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true)
        setdeleteID(e?._id)
    };
    const handleClose = () => setOpen(false);
    const fetchData = (a, c) => {
        const body = {
            page: a,
            limit: 10,
            search: c
        }
        ApiPost("dealer/product/filter_product", body)
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
        fetchData(1, e.target.value);
    };
    const handleChange = (e, i) => {
        console.log(i);
        fetchData(i, searching);
    };
    useEffect(() => {
        fetchData(1, searching);
    }, [])
    const deteleProduct = () => {
        ApiDelete(`/dealer/product/${deleteID}`)
            .then((res) => {
                console.log(res);
                handleClose()
                SuccessToast(res?.data?.message);
                fetchData(currentpage, searching);
            })
            .catch(async (err) => {
                console.log(err);
                ErrorToast(err?.response?.data?.message);
                handleClose()
            });
    }
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
                                <Th>Mileage</Th>
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
                                                    src={e?.image?.length !== 0 ? e?.image[0] : `${process.env.PUBLIC_URL + "/Images/car.png"}`}
                                                    height="80"
                                                    width={80}
                                                />
                                                <span>{e?.title}</span>
                                            </div>
                                        </Td>
                                        <Td>{moment(e?.createdAt).format("DD/MM/YYYY")}</Td>
                                        <Td>{e?.price ? e?.price : 0}</Td>
                                        <Td>{e?.bodyType?.bodyType ? e?.bodyType?.bodyType : "-"}</Td>
                                        <Td>{e?.mileage ? e?.mileage : "0"}</Td>
                                        <Td>
                                            <div className="action">
                                                <button className='action_btn' onClick={() => navigate("/add-product", {
                                                    state: { id: e?._id }
                                                })}><img
                                                        className="me-2"
                                                        src={process.env.PUBLIC_URL + "/Images/edit.png"}
                                                    />Edit</button>
                                                <button className='action_btn' onClick={() => navigate(`/view-product/${e?._id}`, {
                                                    state: { id: e?._id }
                                                })}><img
                                                        className="me-2"
                                                        src={process.env.PUBLIC_URL + "/Images/eye.png"}
                                                    />View</button>
                                                <button className='action_btn' onClick={() => handleOpen(e)}><img
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="Product_delete_modal">
                    <div className="delete_text">
                        Are You Sure Delete This Product?
                    </div>
                    <div className="buttons">
                        <Button onClick={handleClose}>Cancle</Button>
                        <Button onClick={deteleProduct}>Delete</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Dealer_Product_List