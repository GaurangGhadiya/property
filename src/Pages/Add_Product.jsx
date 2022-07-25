import { Box, Checkbox, Container, FormControlLabel, Grid, Link, Tab, Tabs, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import "../Components/Add_product/Add_product.scss"
import { IoClose } from 'react-icons/io5';
import Add_Description from '../Components/Add_product/Add_Description';
import Add_Comapny_Profile from '../Components/Add_product/Add_Comapny_Profile';
import Faq from '../Components/Add_product/Faq';

const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Link underline="hover" key="1" href="/">
        Product list
    </Link>,
    <Typography key="3" color="text.primary">
        Add Product
    </Typography>,
];
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const Add_Product = () => {
    const [image, setImage] = useState([])
    const [sendImage, setSendImage] = useState([])
    const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
    const onImageChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage([...image, img])
        setSendImage([...sendImage, e.target.files[0]])
    };
    const deleteImage = (e) => {
        setImage(image.filter(y => y != e))
        setSendImage(sendImage.filter(y => y != e?.data))
    }
    console.log("image", image);
    return (
        <div className='Add_Product'>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <Container>
                <h1>Add Product</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="Img_Upload">
                            <label className="Upload_box" for="inputTag">
                                <img src={process.env.PUBLIC_URL + '/Images/Vector (6).png'} alt="" />
                                <p>Drag & drop upto 20 images</p>
                                <p className='bottom'> Max file size: 1mb</p>
                                <input type="file" id='inputTag' className='display_none' accept="image/*" onChange={onImageChange} />
                            </label>
                        </div>
                    </Grid>
                    {image.map(e => <Grid className='uploade_img' item xs={12} sm={6} md={3}>
                        <img className='product_img' src={e?.preview} alt="" />
                        <div className="close_icon cursor_pointer" onClick={() => deleteImage(e)}><img src={process.env.PUBLIC_URL + '/Images/product_delete.png'} alt="" /></div>
                    </Grid>)}
                    <Grid item sx={12} sm={12} md={12}><div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }} >
                            <span class="sr-only"></span>
                        </div>
                    </div>

                    </Grid>
                    <Grid container item spacing={3} sx={12} sm={12} md={6}>
                        <Grid item sx={12} sm={12} md={12} className="benefit_input">
                            <div className="input_filed">
                                <label htmlFor="Product Title">Product Title</label>
                                <TextField
                                    type="Product Title"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Product Title"
                                />
                            </div>
                        </Grid><Grid item sx={12} sm={12} md={12} className="benefit_input">
                            <div className="input_filed">
                                <label htmlFor="Benefits">Benefits</label>
                                <TextField
                                    type="Benefits"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Benefits"
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                            <label htmlFor="Protection">Protection</label>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Trade Assurance"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Refund Policy"
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid container item spacing={3} sx={12} sm={12} md={6}>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                                <label htmlFor="Price">Price</label>
                                <TextField
                                    type="Price"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Price"
                                />
                            </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                                <label htmlFor="Max Quantity">Max Quantity</label>
                                <TextField
                                    type="Max Quantity"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Max Quantity"
                                />
                            </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                                <label htmlFor="Shipping Charge (%)">Shipping Charge (%)</label>
                                <TextField
                                    type="Shipping Charge (%)"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Shipping Charge (%)"
                                />
                            </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                                <label htmlFor="Shipping">Shipping</label>
                                <TextField
                                    type="Shipping"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Shipping"
                                />
                            </div>
                    </Grid>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                    <div className="input_filed">
                                <label htmlFor="Product Title">Product Title</label>
                                
                                <TextareaAutosize 
                                    type="text"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="Product Title"
                                    maxRows={6}
                                    minRows={4}
                                />
                            </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={12}>
                    <div className="input_filed">
                            <label htmlFor="Protection">Share</label>
                            <div className="share">
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Facebook"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Linkedin"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Twitter"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="otherContacted" />
                                    }
                                    label="Pinterest"
                                />
                            </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sx={12} sm={12} md={12}>
                    <div className="description">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Product Description" {...a11yProps(0)} />
                      <Tab label="Company Profile" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  {value === 0 && <Add_Description />}
                {value === 1 && <Add_Comapny_Profile />}
        </div>
                    </Grid>

                </Grid>
            </Container>
                <Faq />
                <div className="bottom_btn">
                <button className='outline_btn'>Cancle</button>
                <button className='none_outline_btn'>Add Product</button>
                </div>
        </div>
    )
}

export default Add_Product