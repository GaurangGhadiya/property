import { Container, Link, Typography } from '@mui/material';
import React from 'react'
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import './Dealer_Profile.scss'

const breadcrumb = [
    <Link underline="hover" key="1" href="/">
        Home
    </Link>,
    <Typography key="2" color="text.primary">
        Profile
    </Typography>,
];
const Dealer_Profile = () => {
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
                        <img className='dealer_img' src={process.env.PUBLIC_URL + '/Images/car.png'}/>
                        <h4>Bessie Cooper</h4>
                        </div>
                    </div>
                    <div className="col-md-4 dealer_border px-4">
                        <table className='dealer_table'>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/1.svg'}/> Email:</td>
                                <td>info@bessiecooper.com</td>
                            </tr>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/2.svg'}/> Phone:</td>
                                <td>(+91) 98765 43210 </td>
                            </tr>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/3.svg'}/> Joined In:</td>
                                <td>Jan 15, 2022</td>
                            </tr>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/4.svg'}/> Address:</td>
                                <td>Zone/Block Basement 1 Unit B2</td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-4 px-4">
                    <table className='dealer_table'>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/6.svg'}/> Fax:</td>
                                <td>123 456 12345678</td>
                            </tr>
                            <tr>
                                <td><img src={process.env.PUBLIC_URL + '/Images/dealer-profile/7.svg'}/> Owner at:</td>
                                <td>Company LTD </td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-2 text-end">
                    <button className='action_btn '><img
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
                                <td> Company Name:</td>
                                <td>ABC Trading LTD</td>
                            </tr>
                            <tr>
                                <td>Year Established:</td>
                                <td>2000 </td>
                            </tr>
                            <tr>
                                <td> Website:</td>
                                <td>https://companyname.com</td>
                            </tr>
                            <tr>
                                <td>No. of Employees:</td>
                                <td>5-10 People</td>
                            </tr>
                        </table></div>
                    <div className="col-md-6 ">
                    <table className='dealer_table '>
                            <tr>
                                <td>Registered&nbsp;Address:</td>
                                <td>Zone/Block Basement 1 Unit B2</td>
                            </tr>
                            <tr>
                                <td>Operational&nbsp;Address:</td>
                                <td>Zone/Block Level 1 Unit A3 </td>
                            </tr>
                            <tr>
                                <td>About Us:</td>
                                <td>Nibh consectetuer congue scelerisque curae gravidadiaei inceptos venenatis non mus</td>
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
                                <td>Annual Purchasing Volumn: </td>
                                <td>$500,001 - $5M</td>
                            </tr>
                            <tr>
                                <td>Average Sourcing Frequency:</td>
                                <td>Weekly</td>
                            </tr>
                        </table></div>
                    <div className="col-md-6 ">
                    <table className='dealer_table '>
                            <tr>
                                <td>Supplier Qualifications:</td>
                                <td>Has a factory</td>
                            </tr>
                            <tr>
                                <td>Preferred Industries:</td>
                                <td>General Industrial Equipment</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </Container>
    </div>
  )
}

export default Dealer_Profile