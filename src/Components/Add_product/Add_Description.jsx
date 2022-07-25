import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import RichTextEditor from "react-rte";

const Add_Description = () => {
    const [richValue, setrichValue] = useState(RichTextEditor.createEmptyValue());
    const onChange = (value) => {
        setrichValue(value);
    };
    return (
        <div className='text_editor'>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 1</label>
                <RichTextEditor value={richValue} onChange={onChange} />
            </div>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 2</label>
                <RichTextEditor value={richValue} onChange={onChange} />
            </div>
            <div className="input_filed">
                <label className='text_editor_lable'>Column 3</label>
                <RichTextEditor value={richValue} onChange={onChange} />
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
                                    name="Supply Ability"
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
                                    name="Packaging Details"
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
                                    name="Port"
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
                                    name="Lead Time"
                                />
                            </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Add_Description