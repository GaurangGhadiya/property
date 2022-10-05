

import { Button, Checkbox, Container, FormControlLabel, Grid, Link, Pagination, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdOutlineMyLocation } from 'react-icons/md';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import "../Components/User_Product_List/User_Product_List.scss"
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import Product_Card from '../Components/User_Product_List/Product_Card';
import { ApiGet, ApiPostNoAuth } from '../Api/Api';
import { useLocation } from 'react-router-dom';

const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="2" color="text.primary">
        Automobiles
    </Typography>,
];
const Export_country = ["United States", "Canada", "Italy", "Netherlands", "Belgium", "Germany", "Georgia", "Kenya"]
const Supplier_country = ["United States", "Canada", "Italy", "Netherlands", "Belgium", "Germany", "Georgia", "Kenya"]
const Product_Certification = ["E/E-MARK", "CE", "CCC", "ROHS", "CSA"]
const User_Product_List = () => {
    const location = useLocation()
    const [data, setData] = useState()
    const [defalutValue, setDefalutValue] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [bodyType, setBodyType] = useState([])
    const [SubCategoryID, setSubCategoryID] = useState("")
    const [bodyTypeID, setBodyTypeID] = useState("")
    const [seating, setSeating] = useState("")
    const [fuel, setFuel] = useState("")
    const [search, setSearch] = useState(location?.state?.search ? location?.state?.search : "")
    const priceChange = (e) => {
        getData(e)
    }
    const getData = (p) => {
        const body = {
            search: search,
            page: 1,
            limit: 10,
            subCategoryId: SubCategoryID ? SubCategoryID : location?.state?.id ? location?.state?.id : "",
            bodyTypeId: bodyTypeID,
            seating: seating,
            fuel: fuel,
            minPrice: p ? p[0] : "",
            maxPrice: p ? p[1] : ""
        }
        ApiPostNoAuth("user/subCategory_wise_product", body)
            .then((res) => {
                console.log(res, "res");
                setData(res?.data?.data?.product_data)
                setDefalutValue(res?.data?.data?.maxMinPriceOfProduct)
            })
            .catch(async (err) => {
                console.log(err);
            });
    }

    const selectBodyType = (e) => {
        if (bodyTypeID?.includes(e)) {
            setBodyTypeID(bodyTypeID?.filter(y => y != e))
        } else {
            setBodyTypeID([...bodyTypeID, e])
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
    }, [bodyTypeID, seating, fuel])
    useEffect(async () => {
        await ApiGet(`/user/get_subCategory`)
            .then((res) => {
                console.log(res);
                setSubCategory(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
        await ApiGet(`/user/get_bodyType`)
            .then((res) => {
                console.log(res);
                setBodyType(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
    }, [])
    return (
        <div className='user_car_list'>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <Container>
                <div className="mt-2">
                    <div className="phone">
                        <select value={SubCategoryID} onChange={(y)
 => setSubCategoryID(y?.target.value)} id="">
                         
                            {subCategory.map(e => <option value={e?._id}>{e?.name}</option>)}
                        </select>
                        <TextField hiddenLabel id="outlined-basic" placeholder='Serach product' variant="outlined" value={search} onChange={(e) => setSearch(e?.target?.value)} />
                        <div className="loc_icon">
                            <MdOutlineMyLocation />
                        </div>
                        <div className="ser_btn">
                            <Button onClick={getData}><BiSearch /> Search</Button>
                        </div>
                    </div>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Body Types
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {bodyType?.map((e) => {
                                            return (
                                                <div className="agree product_agree" onClick={() => selectBodyType(e?._id)}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox name="otherContacted" />
                                                        }
                                                        label={e?.bodyType}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Price
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <Slider
                                            range
                                            min={defalutValue?.minPrice}
                                            max={defalutValue?.maxPrice}
                                            onChange={priceChange}
                                        />
                                        {/* <div className="range_dropdown">
                                            <select name="" id="" placeholder='Min Budget'>
                                                <option value="200">Min Budget</option>
                                                <option value="200">200</option>
                                                <option value="300">300</option>
                                                <option value="400">400</option>
                                            </select>
                                                <select name="" id="" placeholder='Max Budget'>
                                                    <option value="">Max Budget</option>
                                                    <option value="">500</option>
                                                    <option value="">600</option>
                                                    <option value="">700</option>
                                                </select>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                        Seating
                                    </button>
                                </h2>
                                <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <TextField hiddenLabel id="outlined-basic" placeholder='Search seating' variant="outlined" value={seating} onChange={(e) => setSeating(e?.target?.value)} />
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThr">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseei" aria-expanded="false" aria-controls="collapseei">
                                        Fuel
                                    </button>
                                </h2>
                                <div id="collapseei" class="accordion-collapse collapse" aria-labelledby="headingThr" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <TextField hiddenLabel id="outlined-basic" placeholder='Search fuel' variant="outlined" value={fuel} 
onChange={(e) => setFuel(e?.target?.value)} />
                                    </div>
                                </div>
                            </div>
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Past Export Country
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {Export_country.map((e) => {
                                                return (
                                                    <div className="agree product_agree">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox name="otherContacted" />
                                                            }
                                                            label={e}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            Supplier Country
                                        </button>
                                    </h2>
                                    <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {Supplier_country.map((e) => {
                                                return (
                                                    <div className="agree product_agree">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox name="otherContacted" />
                                                            }
                                                            label={e}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                            Product Certification
                                        </button>
                                    </h2>
                                    <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {Product_Certification.map((e) => {
                                                return (
                                                    <div className="agree product_agree">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox name="otherContacted" />
                                                            }
                                                            label={e}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                            Gear Box
                                        </button>
                                    </h2>
                                    <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Gear Box
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                            Battery Type
                                        </button>
                                    </h2>
                                    <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Battery Type
                                        </div>
                                    </div>
                                </div> */}

                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                            Steering
                                        </button>
                                    </h2>
                                    <div id="collapsenine" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Steering
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                                            Drive
                                        </button>
                                    </h2>
                                    <div id="collapseten" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Drive
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                                            Made In
                                        </button>
                                    </h2>
                                    <div id="collapseeleven" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Made In
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Cabin" aria-expanded="false" aria-controls="Cabin">
                                            Cabin Structure
                                        </button>
                                    </h2>
                                    <div id="Cabin" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Cabin Structure
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Roof" aria-expanded="false" aria-controls="Roof">
                                            Roof Rack
                                        </button>
                                    </h2>
                                    <div id="Roof" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Roof Rack
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            Supplier Country
                                        </button>
                                    </h2>
                                    <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            {Supplier_country.map((e) => {
                                                return (
                                                    <div className="agree product_agree">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox name="otherContacted" />
                                                            }
                                                            label={e}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </Grid>
                    <Grid item container spacing={4} xs={12} sm={9} className="mt-0">
                        {data?.map(e => <Grid item xs={12} sm={6} md={4}><Product_Card data={e} /></Grid>)}
                        {data?.length === 0 && <p className='mt-5 w-100 text-center'>No data found</p>}
                        <Grid item xs={12} sm={12} md={12}>
                            <div className="product_pagination w-100 mt-0 ">
                                <h6>Page 1 to 20</h6>
                                <Pagination count={4} variant="outlined" shape="rounded" />
                            </div>
                            <div className="question">
                                <h6>Did you find what you were looking for?</h6>
                                <div className="box">Yes</div>
                                <div className="box">No</div>
                            </div>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default User_Product_List