import { Box, Checkbox, Container, FormControlLabel, Grid, Link, Tab, Tabs, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import "../Components/Add_product/Add_product.scss"
import { RiDeleteBin6Line } from 'react-icons/ri';
import Add_Description from '../Components/Add_product/Add_Description';
import Add_Comapny_Profile from '../Components/Add_product/Add_Comapny_Profile';
import Faq from '../Components/Add_product/Faq';
import { ApiGet, ApiPost, ApiPut } from '../Api/Api';
import RichTextEditor from "react-rte";
import { SuccessToast } from '../Components/Toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
    const navigate = useNavigate()
    const [editData, setEditData] = useState({})
    const location = useLocation();
    console.log("number", location);

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
        question: "",
        ans: ""
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
    const [subCategory, setSubCategory] = useState([])
    const [SubCategoryID, setSubCategoryID] = useState("")
    const [body_type, setBody_type] = useState([])
    const [body_typeID, setBody_typeID] = useState("")
    const [value, setValue] = React.useState(0)
    const [richValue, setrichValue] = useState(RichTextEditor.createEmptyValue());
    const [pipData, setpipData] = useState({description: "<p><br></p>"});
    const [richValue2, setrichValue2] = useState(RichTextEditor.createEmptyValue());
    const [pipData2, setpipData2] = useState({description: "<p><br></p>"});
    const [errors, setError] = useState({});
    const onChange = (value) => {
        setrichValue(value);
        value.toString("html");
        setpipData({ ...pipData, description: value.toString("html") });
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
    console.log("richValue", richValue);
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
    console.log("pipData2", pipData2.description);
    console.log("pipData", pipData.description);
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
    const validateForm = () => {
        console.log("valid");
        let errors = {};
        let formIsValid = true;
        if (!data?.title) {
            formIsValid = false;
            errors["title"] = "Please enter product title";
        }
        if (!data?.benefits) {
            formIsValid = false;
            errors["benefits"] = "Please enter benefits";
        }
        if (!data?.price) {
            formIsValid = false;
            errors["price"] = "Please enter price";
        }
        if (!categoryID) {
            formIsValid = false;
            errors["categoryID"] = "Please select category";
        }
        if (subCategory.length !== 0 && !SubCategoryID) {
            formIsValid = false;
            console.log("0");
            errors["SubCategoryID"] = "Please select sub-category";
        }
        if (!body_typeID) {
            formIsValid = false;
            errors["body_typeID"] = "Please select body type";
        }
        if (pipData?.description === "<p><br></p>") {
            formIsValid = false;
            errors["pipData"] = "Please enter description";
        }
        if (pipData2?.description === "<p><br></p>") {
            formIsValid = false;
            errors["pipData2"] = "Please enter company details";
        }
        if (image.length === 0) {
            formIsValid = false;
            errors["image"] = "Please add image";
        }
        if (!data?.maxQuantity) {
            formIsValid = false;
            errors["maxQuantity"] = "Please enter max quantity";
        }
        if (!data?.customization) {
            formIsValid = false;
            errors["customization"] = "Please enter customization";
        }
        if (!data?.shippingCharge) {
            formIsValid = false;
            errors["shippingCharge"] = "Please enter shipping charge";
        }
        if (!data?.shipping) {
            formIsValid = false;
            errors["shipping"] = "Please enter shipping";
        }
        if (!data?.supplyAbility) {
            formIsValid = false;
            errors["supplyAbility"] = "Please enter supply ability";
        }
        if (!data?.packaging) {
            formIsValid = false;
            errors["packaging"] = "Please enter packaging details";
        }
        if (!data?.port) {
            formIsValid = false;
            errors["port"] = "Please enter port";
        }
        if (!data?.leadTime) {
            formIsValid = false;
            errors["leadTime"] = "Please enter lead time";
        }
        setError(errors);

        return formIsValid;
    };
    const submitData = async () => {
        
        window.scroll(0,0)
        if (validateForm()) {
            let image = await imagearrayapi();
            const body = {
                categoryId: categoryID,
                subCategoryId: SubCategoryID,
                bodyTypeId: body_typeID,
                title: data?.title,
                benefits: data?.benefits,
                price: data?.price,
                maxQuantity: data?.maxQuantity,
                customization: data?.customization,
                shippingCharge: data?.shippingCharge,
                shipping: data?.shipping,
                supplyAbility: data?.supplyAbility,
                packaging: data?.packaging,
                port: data?.port,
                leadTime: data?.leadTime,
                shareOption: share,
                protection,
                image: image,
                description: pipData?.description,
                companyProfile: pipData2?.description
            }
            console.log("body", body);
            await ApiPost("dealer/product/add", body)
                .then((res) => {
                    SuccessToast(res?.data?.message);
                    navigate("/dealer-product-list")
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
                        question: "",
                        ans: ""
                    })
                    setCategoryID("")
                    setSubCategoryID("")
                    setBody_typeID("")
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
                    setrichValue(RichTextEditor.createEmptyValue())
                    setpipData2({})
                    setrichValue2(RichTextEditor.createEmptyValue())
                })
                .catch(async (err) => {
                    console.log(err);
                });
        }
    }
    const submitUpdateData = async () => {
        window.scroll(0,0)
        if(validateForm()){
            let image = await imagearrayapi();
        const body = {
            id: location?.state?.id,
            categoryId: categoryID,
            subCategoryId: SubCategoryID,
            bodyTypeId: body_typeID,
            title: data?.title,
            benefits: data?.benefits,
            price: data?.price,
            maxQuantity: data?.maxQuantity,
            customization: data?.customization,
            shippingCharge: data?.shippingCharge,
            shipping: data?.shipping,
            supplyAbility: data?.supplyAbility,
            packaging: data?.packaging,
            port: data?.port,
            leadTime: data?.leadTime,
            shareOption: share,
            protection,
            image: image,
            description: pipData?.description,
            companyProfile: pipData2?.description
        }
        console.log("body", body);
        await ApiPut("dealer/product/update", body)
            .then((res) => {
                SuccessToast(res?.data?.message);
                navigate("/dealer-product-list")
            })
            .catch(async (err) => {
                console.log(err);
            });
        }
    }
    useEffect(() => {
        ApiGet(`dealer/product/${location?.state?.id}`)
            .then((res) => {
                console.log(res);
                setData(res?.data?.data)
                setShare(res?.data?.data?.shareOption)
                setProtection(res?.data?.data?.protection)
                setpipData(res?.data?.data?.description)
                setpipData2(res?.data?.data?.companyProfile)
                if (res?.data?.data?.description) {
                    setrichValue(
                        RichTextEditor?.createValueFromString(
                            res?.data?.data?.description?.toString()?.replace(/<[^>]+>/g, ""),
                            "markdown"
                        )
                    );
                }
                if (res?.data?.data?.companyProfile) {
                    setrichValue2(
                        RichTextEditor?.createValueFromString(
                            res?.data?.data?.companyProfile?.toString()?.replace(/<[^>]+>/g, ""),
                            "markdown"
                        )
                    );
                }
                setBody_typeID(res?.data?.data?.bodyTypeId)
                setSubCategoryID(res?.data?.data?.subCategoryId)
                setCategoryID(res?.data?.data?.categoryId)
                setImage(res?.data?.data?.image)
            })
            .catch(async (err) => {
                console.log(err);
            });
    }, [])
    useEffect(() => {
        ApiGet("dealer/category")
            .then((res) => {
                console.log(res);
                setCategory(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
        ApiGet("dealer/bodyType")
            .then((res) => {
                console.log(res);
                setBody_type(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
    }, [])
    useEffect(() => {
        ApiGet(`dealer/subCategory/category/${categoryID}`)
            .then((res) => {
                console.log(res);
                setSubCategory(res?.data?.data)
            })
            .catch(async (err) => {
                console.log(err);
            });
    }, [categoryID])
    return (
        <div className='Add_Product'>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <Container>
                <h1>{location?.state?.id ? "Update" : "Add"} Product</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="Img_Upload">
                            <label className="Upload_box" for="inputTag">
                                <img src={process.env.PUBLIC_URL + '/Images/Vector (6).png'} alt="" />
                                <p>Drag & drop upto 20 images</p>
                                <p className='bottom'> Max file size: 1mb</p>
                                <input type="file" id='inputTag' className='display_none' accept="image/*" onChange={onImageChange} />
                            </label>
                            <span className="errorInput">
                                {image?.length > 0 ? "" : errors["image"]}
                            </span>
                        </div>
                    </Grid>
                    {image.map(e => <Grid className='uploade_img' item xs={12} sm={6} md={3}>
                        <img className='product_img' src={e?.fileURL ? e?.fileURL : e} alt="" />
                        <div className="close_icon cursor_pointer" onClick={() => deleteImage(e)}><RiDeleteBin6Line /></div>
                    </Grid>)}
                    <Grid item sx={12} sm={12} md={12}><div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }} >
                            <span class="sr-only"></span>
                        </div>
                    </div>

                    </Grid>
                    <Grid container item spacing={3} sx={12} sm={12} md={12}>
                        <Grid item sx={12} sm={12} md={6} >
                            <div className="input_filed">
                                <label htmlFor="Title">Category</label>
                                <select value={categoryID} onChange={(y) => setCategoryID(y?.target.value)} id="">
                                    <option value="">Select</option>
                                    {category.map(e => <option value={e?._id}>{e?.name}</option>)}
                                </select>
                                <span className="errorInput">
                                {categoryID?.length > 0 ? "" : errors["categoryID"]}
                            </span>
                            </div>
                        </Grid>
                        {subCategory.length !== 0 && <Grid item sx={12} sm={12} md={6} >
                            <div className="input_filed">
                                <label htmlFor="Title">Sub Category</label>
                                <select value={SubCategoryID} onChange={(y) => setSubCategoryID(y?.target.value)} id="">
                                    <option value="">Select</option>
                                    {subCategory.map(e => <option value={e?._id}>{e?.name}</option>)}
                                </select>
                                <span className="errorInput">
                                {SubCategoryID?.length > 0 ? "" : errors["SubCategoryID"]}
                            </span>
                            </div>
                        </Grid>}
                        <Grid item sx={12} sm={12} md={6} >
                            <div className="input_filed">
                                <label htmlFor="Title">Body Type</label>
                                <select value={body_typeID} onChange={(y) => setBody_typeID(y?.target.value)} id="">
                                    <option value="">Select</option>
                                    {body_type.map(e => <option value={e?._id}>{e?.bodyType}</option>)}
                                </select>
                                <span className="errorInput">
                                {body_typeID?.length > 0 ? "" : errors["body_typeID"]}
                            </span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item spacing={3} sx={12} sm={12} md={6}>

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
                                <span className="errorInput">
                                {data?.title?.length > 0 ? "" : errors["title"]}
                            </span>
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
                                <span className="errorInput">
                                {data?.benefits?.length > 0 ? "" : errors["benefits"]}
                            </span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <div className="input_filed">
                            <label htmlFor="Protection">Protection</label>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="tradeAssurance" value={protection?.tradeAssurance} onChange={changeCheccbox} checked={protection?.tradeAssurance} />
                                    }
                                    label="Trade Assurance"
                                />
                            </div>
                            <div className="agree product_agree">
                                <FormControlLabel
                                    control={
                                        <Checkbox name="refundPolicy" value={protection?.refundPolicy} onChange={changeCheccbox} checked={protection?.refundPolicy} />
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
                                <span className="errorInput">
                                {data?.price?.length > 0 ? "" : errors["price"]}
                            </span>
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
                                <span className="errorInput">
                                {data?.maxQuantity?.length > 0 ? "" : errors["maxQuantity"]}
                            </span>
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
                                <span className="errorInput">
                                {data?.shippingCharge?.length > 0 ? "" : errors["shippingCharge"]}
                            </span>
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
                                <span className="errorInput">
                                {data?.shipping?.length > 0 ? "" : errors["shipping"]}
                            </span>
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
                            <span className="errorInput">
                                {data?.customization?.length > 0 ? "" : errors["customization"]}
                            </span>
                        </div>
                    </Grid>
                    {/* <Grid item sx={12} sm={12} md={12}>
                        <div className="input_filed">
                            <label htmlFor="Protection">Share</label>
                            <div className="share">
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="facebook" value={share?.facebook} onChange={changeShareCheccbox} checked={share?.facebook}/>
                                        }
                                        label="Facebook"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="linkedin" value={share?.linkedin} onChange={changeShareCheccbox} checked={share?.linkedin} />
                                        }
                                        label="Linkedin"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="twitter" value={share?.twitter} onChange={changeShareCheccbox} checked={share?.twitter}/>
                                        }
                                        label="Twitter"
                                    />
                                </div>
                                <div className="agree product_agree">
                                    <FormControlLabel
                                        control={
                                            <Checkbox name="pinterest" value={share?.pinterest} onChange={changeShareCheccbox} checked={share?.pinterest} />
                                        }
                                        label="Pinterest"
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid> */}
                    <Grid item sx={12} sm={12} md={12}>
                        <div className="description">
                            <Add_Description pipData={pipData} data={data} errors={errors} handleChange={handleChange} richValue={richValue} onChange3={onChange} />
                            <Add_Comapny_Profile pipData2={pipData2} richValue2={richValue2} errors={errors} onChange2={onChange2} />
                        </div>
                    </Grid>

                </Grid>
            </Container>
            <Faq data={data} handleChange={handleChange} />
            <div className="bottom_btn">
                <button className='outline_btn'>Cancle</button>
                {!location?.state?.id && <button className='none_outline_btn' onClick={submitData}>Add Product</button>}
                {location?.state?.id && <button className='none_outline_btn' onClick={submitUpdateData}>Update Product</button>}
            </div>
        </div>
    )
}

export default Add_Product