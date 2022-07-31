import { Container, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import Dealer_Edit_Profile from './Dealer_Edit_Profile';
import './Dealer_Profile.scss'
import { ApiGet, ApiPost, ApiPut } from '../../Api/Api';
import moment from 'moment';

const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="2" color="text.primary">
        Profile
    </Typography>,
];
const Dealer_Profile = () => {
    const [data, setData] = useState({})
    const [image, setImage] = useState([])
    const [companyInfo, setCompanyInfo] = useState({})
    const [sourcingInfo, setSourcingInfo] = useState({})
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const handleChange = (e) => {
        const{name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const handleChange2 = (e) => {
        const{name,value} = e.target
        setCompanyInfo({
            ...companyInfo,
            [name]:value
        })
    }
    const handleChange3 = (e) => {
        const{name,value} = e.target
        setSourcingInfo({
            ...sourcingInfo,
            [name]:value
        })
    }
    useEffect(() => {
        ApiGet("dealer/get_profile")
        .then((res) => {
            console.log(res);
            setImage([res?.data?.data?.image])
            setData(res?.data?.data)
            setCompanyInfo(res?.data?.data?.companyInfo ? res?.data?.data?.companyInfo : {})
            setSourcingInfo(res?.data?.data?.sourcingInfo ? res?.data?.data?.sourcingInfo : {})
        })
        .catch(async (err) => {
            console.log(err);
        });
    }, [open])
    
    return (
        <div className='dealer_profile'>
            <div className='header_breadcrumb'>
                <Container>
                    <Breadcrumb breadcrumb={breadcrumb} />
                </Container>
            </div>
            <Container>
                <h1>Profile</h1>
                <div className="profile_box">
                    <div className="row">
                        <div className="col-md-2 ">
                            <div className="text-center">
                                <img className='dealer_img' src={image[0]} />
                                <h4>{data?.name}</h4>
                            </div>
                        </div>
                        <div className="col-md-4 dealer_border px-4">
                            <table className='dealer_table'>
                                <tr>
                                    <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/1.svg'} /> Email:</td>
                                    <td>{data?.email}</td>
                                </tr>
                                <tr>
                                    <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/2.svg'} /> Phone:</td>
                                    <td>(+{data?.countryCode}) {data?.phoneNumber ? data?.phoneNumber : "Null"}</td>
                                </tr>
                                <tr>
                                    <td className='d-flex'><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/3.svg'} />&nbsp;Joined&nbsp;In:</td>
                                    <td>{moment(data?.createdAt).format("MMM DD YYYY")}</td>
                                </tr>
                                <tr>
                                    <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/4.svg'} /> Address:</td>
                                    <td>{data?.address}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-4 px-4">
                            <table className='dealer_table'>
                                <tr>
                                    <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/6.svg'} /> Fax:</td>
                                    <td>{data?.FAX}</td>
                                </tr>
                                <tr>
                                    <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/7.svg'} /> Owner at:</td>
                                    <td>{data?.ownerAt}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-md-2 text-end">
                            <button className='action_btn' onClick={handleOpen}><img
                                className="me-2"
                                src={process.env.PUBLIC_URL + "/Images/edit.png"}
                            />Edit</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row px-4">
                        <h3>Company Information</h3>
                        <div className="col-md-6">
                            <table className='dealer_table'>
                                <tr>
                                    <td> Company&nbsp;Name:</td>
                                    <td> {companyInfo?.name?.default === null ? "" : companyInfo?.name}</td>
                                </tr>
                                <tr>
                                    <td>Year&nbsp;Established:</td>
                                    <td>{companyInfo?.yearEstablished?.default === null ? "" : companyInfo?.yearEstablished} </td>
                                </tr>
                                <tr>
                                    <td> Website:</td>
                                    <td>{companyInfo?.website?.default === null ? "" : companyInfo?.website}</td>
                                </tr>
                                <tr>
                                    <td>No.&nbsp;of&nbsp;Employees:</td>
                                    <td> {companyInfo?.employees?.default === null ? "" : companyInfo?.employees + "People"} </td>
                                </tr>
                            </table></div>
                        <div className="col-md-6 ">
                            <table className='dealer_table '>
                                <tr>
                                    <td>Registered&nbsp;Address:</td>
                                    <td>{companyInfo?.registeredAddress?.default === null ? "" : companyInfo?.registeredAddress}</td>
                                </tr>
                                <tr>
                                    <td>Operational&nbsp;Address:</td>
                                    <td>{companyInfo?.operationalAddress?.default === null ? "" : companyInfo?.operationalAddress} </td>
                                </tr>
                                <tr>
                                    <td>About Us:</td>
                                    <td>{companyInfo?.aboutUs?.default === null ? "" : companyInfo?.aboutUs}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="row px-4">
                        <h3>Sourcing Information</h3>
                        <div className="col-md-6">
                            <table className='dealer_table'>
                                <tr>
                                    <td>Annual&nbsp;Purchasing&nbsp;Volumn: </td>
                                    <td>${sourcingInfo?.annualPurchasingVolumn?.default === null ? 0 :sourcingInfo?.annualPurchasingVolumn }</td>
                                </tr>
                                <tr>
                                    <td>Average&nbsp;Sourcing&nbsp;Frequency:</td>
                                    <td>{sourcingInfo?.averageSourcingFrequency?.default === null ? "" : sourcingInfo?.averageSourcingFrequency}</td>
                                </tr>
                            </table></div>
                        <div className="col-md-6 ">
                            <table className='dealer_table '>
                                <tr>
                                    <td>Supplier&nbsp;Qualifications:</td>
                                    <td>{sourcingInfo?.supplierQualification?.default === null ? "" :sourcingInfo?.supplierQualification}</td>
                                </tr>
                                <tr>
                                    <td>Preferred&nbsp;Industries:</td>
                                    <td>{sourcingInfo?.preferredIndustries?.default === null ? "" :sourcingInfo?.preferredIndustries}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
            <Dealer_Edit_Profile open={open} handleClose={handleClose} data={data} handleChange={handleChange} handleChange2={handleChange2} handleChange3={handleChange3} sourcingInfo={sourcingInfo} companyInfo={companyInfo} setImage={setImage} image={image}/>
        </div>
    )
}

export default Dealer_Profile