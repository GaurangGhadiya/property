import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import RichTextEditor from "react-rte";

const Add_Description = ({ pipData, handleChange, data, richValue, onChange3, errors }) => {
    return (
        <div className='text_editor'>
            <div className="title">
                <h4>Add Description</h4>
            </div>
            <div className="input_filed">
                <RichTextEditor name="description1" value={richValue} onChange={onChange3} />
                <span className="errorInput">
                    {pipData?.description !== "<p><br></p>" ? "" : errors["pipData"]}
                </span>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}><h6 className='mt-4'>Supply Ability</h6></Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Grid xs={12} sm={6} md={4}>

                        <div className="input_filed">
                            <label htmlFor="Supply Ability">Supply Ability</label>
                            <TextField
                                type="text"
                                hiddenLabel
                                id="outlined-basic"
                                variant="outlined"
                                name="supplyAbility"
                                value={data?.supplyAbility}
                                onChange={handleChange}
                            />
                            {/* <span className="errorInput">
                                {data?.supplyAbility?.length > 0 ? "" : errors["supplyAbility"]}
                            </span> */}
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}><h6>Packaging & Delivery</h6></Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="input_filed">
                        <label htmlFor="Packaging Details">Packaging Details</label>
                        <TextField
                            type="text"
                            hiddenLabel
                            id="outlined-basic"
                            variant="outlined"
                            name="packaging"
                            value={data?.packaging}
                            onChange={handleChange}
                        />
                        {/* <span className="errorInput">
                                {data?.packaging?.length > 0 ? "" : errors["packaging"]}
                            </span> */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="input_filed">
                        <label htmlFor="Port">Delivery Address</label>
                        <TextField
                            type="text"
                            hiddenLabel
                            id="outlined-basic"
                            variant="outlined"
                            name="port"
                            value={data?.port}
                            onChange={handleChange}
                        />
                        {/* <span className="errorInput">
                                {data?.port?.length > 0 ? "" : errors["port"]}
                            </span> */}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="input_filed">
                        <label htmlFor="LeadTime">Lead Time</label>
                        <select name="leadTime"
                            value={data?.leadTime}
                            onChange={handleChange} id="">
                            <option value="today">Today</option>
                            <option value="1-10 days">1-10 Days</option>
                            <option value="10-20 days">10-20 Days</option>
                            <option value="20-30 days">20-30 Days</option>
                            <option value="1-2 month">1-2 month</option>
                            <option value="2-3 month">2-3 month</option>
                            <option value="3-4 month">3-4 month</option>
                            <option value="4-5 month">4-5 month</option>
                            <option value="5-6 month">5-6 month</option>
                        </select>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Add_Description