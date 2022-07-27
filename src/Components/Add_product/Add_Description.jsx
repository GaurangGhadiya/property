import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import RichTextEditor from "react-rte";

const Add_Description = ({handleChange,data,richValue,richValue1,richValue2,onChange3,onChange1,onChange2}) => {
    return (
        <div className='text_editor'>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 1</label>
                <RichTextEditor name="description1" value={richValue} onChange={onChange3} />
            </div>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 2</label>
                <RichTextEditor name="description" value={richValue1} onChange={onChange1} />
            </div>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 3</label>
                <RichTextEditor name="description" value={richValue2} onChange={onChange2} />
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
                            </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div className="input_filed">
                                <label htmlFor="Port">Port</label>
                                <TextField
                                    type="text"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="port"
                                    value={data?.port}
                                    onChange={handleChange}
                                />
                            </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <div className="input_filed">
                                <label htmlFor="Lead Time">Lead Time</label>
                                <TextField
                                    type="text"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="leadTime"
                                    value={data?.leadTime}
                                    onChange={handleChange}
                                />
                            </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Add_Description