import React, { useState } from 'react'
import "./Model.scss"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Model = ({ open, setOpen, handleOpen, handleClose }) => {
    const [value, setValue] = React.useState(0);
    const [join, setJoin] = useState("User")
    const [toggle, setToggle] = useState(0)
    const [value2, setValue2] = React.useState(
        new Date('2014-08-18T21:11:54'),
    );

    const handleChange2 = (newValue) => {
        setValue2(newValue);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const joinus = (e) => {
        console.log("eee", e.target.value);
        setJoin(e.target.value)
    }
    const DelarOpen = () => {
        setToggle(1)
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <img className='me-2 w-100 h-100 img' src={process.env.PUBLIC_URL + '/Images/login.png'} />
                        </Grid>
                        {toggle === 0 && <Grid item xs={12} sm={7}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Login" {...a11yProps(0)} />
                                    <Tab label="Register" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className="input_filed">
                                    <label htmlFor="email">Email or Mobile</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="input_filed mt-2">
                                    <label htmlFor="password">Password</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="remeber">
                                    <h6>Forgot password?</h6>
                                </div>
                                <Button className='common_btn' onClick={handleClose}>Login</Button>
                                <div className="social">
                                    <Button className='common_btn'>Google</Button>
                                    <Button className='common_btn'>Facebook</Button>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className="input_filed">
                                    <label htmlFor="email">Your Name</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="input_filed mt-2">
                                    <label htmlFor="email">Email Address</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="input_filed mt-2">
                                    <label htmlFor="email">Password</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="input_filed mt-2">
                                    <label htmlFor="email">Confirm Password</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div>
                                <div className="input_filed mt-2">
                                    <label htmlFor="email">Phone Number</label>
                                    <div className="phone">
                                        <select name="" id="">
                                            <option value="+91">+91</option>
                                        </select>
                                        <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                    </div>
                                </div>
                                <FormControl className='mt-2'>
                                    <FormLabel id="demo-radio-buttons-group-label">Join As</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="User"
                                        name="join"
                                        value={join}
                                        onChange={joinus}

                                    >
                                        <FormControlLabel value="User" control={<Radio />} label="User" />
                                        <FormControlLabel value="Dealer" control={<Radio />} label="Dealer" />
                                    </RadioGroup>
                                </FormControl>
                                <div className="agree">
                                    <FormControlLabel control={<Checkbox />} label="I agree to be contacted by trader.com and others for similar properties or related services via  WhatsApp, phone, sms, e-mail etc." />
                                </div>
                                <Button className='common_btn' onClick={join === "User" ? handleClose : DelarOpen}>Register</Button>
                                <h5 className='terms'>By clicking you will be agreeing to <span>Terms & Conditions</span></h5>
                            </TabPanel>
                        </Grid>}
                        {toggle === 1 && <Grid className='p-4' item xs={7} sm={7}>
                            <h1 className='delar_title'>Fill Out The Dealership Form</h1>
                            <Grid container spacing={2}>
                                <Grid item xs={6}><div className="input_filed">
                                    <label htmlFor="email">Dealership Name</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={6}><div className="input_filed">
                                    <label htmlFor="email">Dealer Code</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={12}>
                                    <div className="input_filed mt-2">
                                        <label htmlFor="email">Phone No</label>
                                        <div className="phone delarphone">
                                            <select name="" id="">
                                                <option value="+91">+91</option>
                                            </select>
                                            <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}><div className="input_filed">
                                    <label htmlFor="email">Showroom Location</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={6}><div className="input_filed">
                                    <label htmlFor="email">Area Name</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={12}><div className="input_filed mt-2">
                                    <label htmlFor="email">Phone No(Service)</label>
                                    <div className="phone delarphone">
                                        <select name="" id="">
                                            <option value="+91">+91</option>
                                        </select>
                                        <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                    </div>
                                </div></Grid>
                                <Grid item xs={12}><div className="input_filed">
                                    <label htmlFor="email">Select Brand</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={6}><div className="input_filed datepicker">
                                    <label htmlFor="email">Date Of Issuance</label>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        inputFormat="MM/dd/yyyy"
                                        value={value2}
                                        onChange={handleChange2}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    </LocalizationProvider>
                                </div></Grid>
                                <Grid item xs={6}><div className="input_filed">
                                    <label htmlFor="email">GSTIN</label>
                                    <TextField hiddenLabel id="outlined-basic" variant="outlined" />
                                </div></Grid>
                                <Grid item xs={12}>
                                    <Button className='common_btn' onClick={handleClose}>Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>}
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default Model