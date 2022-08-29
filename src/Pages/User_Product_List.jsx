import { Button, Checkbox, Container, FormControlLabel, Grid, Link, Pagination, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdOutlineMyLocation } from 'react-icons/md';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import "../Components/User_Product_List/User_Product_List.scss"
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import Product_Card from '../Components/User_Product_List/Product_Card';

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
    useEffect(() => {
        window.scrollTo(0,0)
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
                        <select name="" id="">
                            <option value="Category">Category</option>
                        </select>
                        <TextField hiddenLabel id="outlined-basic" placeholder='Serach product' variant="outlined" />
                        <div className="loc_icon">
                            <MdOutlineMyLocation />
                        </div>
                        <div className="ser_btn">
                            <Button><BiSearch /> Search</Button>
                        </div>
                    </div>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Product Types
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="agree product_agree">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox name="otherContacted" />
                                                }
                                                label="Ready to ship"
                                            />
                                        </div>
                                        <div className="agree product_agree">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox name="otherContacted" />
                                                }
                                                label="Paid sample"
                                            />
                                        </div>
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
                                        <Slider range defaultValue={[20, 50]} />
                                        <div className="range_dropdown">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                            Fuel
                                        </button>
                                    </h2>
                                    <div id="collapseeight" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Fuel
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                                <div class="accordion-item">
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
                                </div>
                            </div>
                    </Grid>
                    <Grid item container spacing={4} xs={12} sm={9} className="mt-0">
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
                        <Grid item xs={12} sm={6} md={4}><Product_Card /></Grid>
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