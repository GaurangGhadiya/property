import { Box, Checkbox, Container, FormControlLabel, Grid, Link, Tab, Tabs, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import "../Components/Add_product/Add_product.scss"
import { IoClose } from 'react-icons/io5';
import Add_Description from '../Components/Add_product/Add_Description';
import Add_Comapny_Profile from '../Components/Add_product/Add_Comapny_Profile';
import Faq from '../Components/Add_product/Faq';
import { ApiGet, ApiPost } from '../Api/Api';
import RichTextEditor from "react-rte";
import { SuccessToast } from '../Components/Toast';

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
    const [data, setData] = useState({
        title: "",
        benefits: "",
        price: "",
        maxQuantity: "",
        customization: "",
        shippingCharge: "",
        shipping: "",
        supplyAbility: "",
        packaging: "",
        port: "",
        leadTime: "",
        question:"",
        ans:""
    })
    const [protection, setProtection] = useState({
        tradeAssurance: false,
        refundPolicy: false
    })
    const [share, setShare] = useState({
        facebook: false,
        linkedin: false,
        twitter: false,
        pinterest: false
    })
    const [image, setImage] = useState([])
    const [category, setCategory] = useState([])
    const [categoryID, setCategoryID] = useState("")
    const [value, setValue] = React.useState(0)
    const [richValue, setrichValue] = useState(RichTextEditor.createEmptyValue());
    const [richValue1, setrichValue1] = useState(RichTextEditor.createEmptyValue());
    const [richValue2, setrichValue2] = useState(RichTextEditor.createEmptyValue());
    const [pipData, setpipData] = useState({});
    const [pipData1, setpipData1] = useState({});
    const [pipData2, setpipData2] = useState({});
    const onChange = (value) => {
        setrichValue(value);
        value.toString("html");
        setpipData({ ...pipData, description: value.toString("html") });
      };
    const onChange1 = (value) => {
        setrichValue1(value);
        value.toString("html");
        setpipData1({ ...pipData1, description: value.toString("html") });
      };
    const onChange2 = (value) => {
        setrichValue2(value);
        value.toString("html");
        setpipData2({ ...pipData2, description: value.toString("html") });
      };
    const changeCheccbox = (e) => {
        const { name, checked } = e.target
        setProtection({
            ...protection,
            [name]: checked
        })
    }
    const changeShareCheccbox = (e) => {
        const { name, checked } = e.target
        setShare({
            ...share,
            [name]: checked
        })
    }
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    console.log("image", image);
    const onImageChange = (e) => {
        console.log(e.target.files);
        let file = e.target.files[0];

        let fileURL = URL.createObjectURL(file);
        file.fileURL = fileURL;
        setImage((post) => [...post, file]);
    };
    const deleteImage = (e) => {
        setImage(image.filter(y => y != e))
    }
    console.log("protection",protection );
    console.log("category", category);
    const imagearrayapi = async () => {
        let image1 = [];
        for (let i = 0; i < image.length; i++) {
            if (image[i].fileURL) {
                const formData = new FormData();
                formData.append("image", image[i]);
                await ApiPost("upload/product", formData)
                    .then((res) => {
                        image1.push(res.data.data.image);
                    })
                    .catch(async (err) => {
                        console.log('====================================');
                        console.log(err);
                        console.log('====================================');
                    });
            } else {
                image1.push(image[i]);
            }
        }
        return image1;
    };
    const submitData = async () => {
        let image = await imagearrayapi();
        const body = {
            categoryId:categoryID,
            title:data?.title,
            benefits:data?.benefits,
            price:data?.price,
            maxQuantity:data?.maxQuantity,
            customization:data?.customization,
            shippingCharge:data?.shippingCharge,
            shipping:data?.shipping,
            supplyAbility:data?.supplyAbility,
            packaging:data?.packaging,
            port:data?.port,
            leadTime:data?.leadTime,
            shareOption:share,
            protection,
            image:image,
            description:{
                column1:pipData?.description,
                column2:pipData1?.description,
                column3:pipData2?.description
            },
        }
        console.log("body",body);
        await ApiPost("dealer/product/add", body)
        .then((res) => {
            SuccessToast(res?.data?.message);
            setData({
                title: "",
                benefits: "",
                price: "",
                maxQuantity: "",
                customization: "",
                shippingCharge: "",
                shipping: "",
                supplyAbility: "",
                packaging: "",
                port: "",
                leadTime: "",
                question:"",
                ans:""
            })
            setCategoryID("")
            setImage([])
            setShare({
                facebook: false,
                linkedin: false,
                twitter: false,
                pinterest: false
            })
            setProtection({
                tradeAssurance: false,
                refundPolicy: false
            })
            setpipData({})
            setpipData1({})
            setpipData2({})
            setrichValue(RichTextEditor.createEmptyValue())
            setrichValue1(RichTextEditor.createEmptyValue())
            setrichValue2(RichTextEditor.createEmptyValue())
        })
        .catch(async (err) => {
            console.log(err);
        });
    }
    useEffect(() => {
        ApiGet("dealer/category")
        .then((res) => {
            console.log(res);
            setCategory(res?.data?.data)
        })
        .catch(async (err) => {
            console.log(err);
        });
    }, [])
    
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
                        <img className='product_img' src={e?.fileURL} alt="" />
                        <div className="close_icon cursor_pointer" onClick={() => deleteImage(e)}><img src={process.env.PUBLIC_URL + '/Images/product_delete.png'} alt="" /></div>
                    </Grid>)}
                    <Grid item sx={12} sm={12} md={12}><div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }} >
                            <span class="sr-only"></span>
                        </div>
                    </div>

                    </Grid>
                    <Grid item sx={12} sm={12} md={12} >
                    <div className="input_filed">
                                <label htmlFor="Title">Category</label>
                                <select name='categoryId' value={categoryID} onChange={(y) => setCategoryID(y?.target.value)} id="">
                                <option value="">Select</option>
                                                    {category.map(e => <option value={e?._id}>{e?.name}</option>)}
                                                </select>
                            </div>
                        </Grid>
                    <Grid  item spacing={3} sx={12} sm={12} md={6}>

                        <Grid item sx={12} sm={12} md={12} >
                        <div className="input_filed">
                                <label htmlFor="Title">Product Title</label>
                                <TextField
                                    type="Product Title"
                                    hiddenLabel
                                    id="Title"
                                    variant="outlined"
                                    name="title"
                                    value={data?.title}
                                    onChange={handleChange}
                                />
                            </div>
                        </Grid>
                        <Grid item sx={12} sm={12} md={12} >
                            <div className="input_filed mt-2">
                                <label htmlFor="Benefits">Benefits</label>
                                <TextField
                                    type="Benefits"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="benefits"
                                    value={data?.benefits}
                                    onChange={handleChange}
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
                                        <Checkbox name="tradeAssurance" value={protection?.tradeAssurance} onChange={changeCheccbox}/>
                                    }
                                    label="Trade Assurance"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="refundPolicy" value={protection?.refundPolicy} onChange={changeCheccbox} />
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
                                    type="number"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="price"
                                    value={data?.price}
                                    onChange={handleChange}
                                />
                            </div>
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <div className="input_filed">
                                <label htmlFor="Max Quantity">Max Quantity</label>
                                <TextField
                                    type="number"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="maxQuantity"
                                    value={data?.maxQuantity}
                                    onChange={handleChange}
                                />
                            </div>
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <div className="input_filed">
                                <label htmlFor="Shipping Charge (%)">Shipping Charge (%)</label>
                                <TextField
                                    type="number"
                                    hiddenLabel
                                    id="outlined-basic"
                                    variant="outlined"
                                    name="shippingCharge"
                                    value={data?.shippingCharge}
                                    onChange={handleChange}
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
                                    name="shipping"
                                    value={data?.shipping}
                                    onChange={handleChange}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                            <label htmlFor="Customization">Customization</label>
                            <TextareaAutosize
                                type="text"
                                hiddenLabel
                                id="outlined-basic"
                                variant="outlined"
                                name="customization"
                                maxRows={6}
                                minRows={4}
                                value={data?.customization}
                                onChange={handleChange}
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
                                            <Checkbox name="facebook" value={share?.facebook} onChange={changeShareCheccbox} />
                                        }
                                        label="Facebook"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="linkedin" value={share?.linkedin} onChange={changeShareCheccbox} />
                                        }
                                        label="Linkedin"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="twitter" value={share?.twitter} onChange={changeShareCheccbox} />
                                        }
                                        label="Twitter"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="pinterest" value={share?.pinterest} onChange={changeShareCheccbox} />
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
                                    onChange={handleTabChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab label="Product Description" {...a11yProps(0)} />
                                    <Tab label="Company Profile" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            {value === 0 && <Add_Description data={data} handleChange={handleChange} richValue={richValue} richValue1={richValue1}richValue2={richValue2} onChange3={onChange} onChange1={onChange1 } onChange2={onChange2}/>}
                            {value === 1 && <Add_Comapny_Profile />}
                        </div>
                    </Grid>

                </Grid>
            </Container>
            <Faq data={data} handleChange={handleChange}/>
            <div className="bottom_btn">
                <button className='outline_btn'>Cancle</button>
                <button className='none_outline_btn' onClick={submitData}>Add Product</button>
            </div>
        </div>
    )
}

export default Add_Product