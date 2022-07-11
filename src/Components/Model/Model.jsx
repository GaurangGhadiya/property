import React from 'react'
import "./Model.scss"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


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
                        <Grid item xs={5} sm={5}>
                            <img className='me-2 w-100 h-100' src={process.env.PUBLIC_URL + '/Images/login.png'} />
                        </Grid>
                        <Grid item xs={7} sm={7}>
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
                                <Button className='common_btn'>Login</Button>
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
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="User" control={<Radio />} label="User" />
                                        <FormControlLabel value="Dealer" control={<Radio />} label="Dealer" />
                                    </RadioGroup>
                                </FormControl>
                                <div className="agree">
                                <FormControlLabel control={<Checkbox />} label="I agree to be contacted by trader.com and others for similar properties or related services via  WhatsApp, phone, sms, e-mail etc." />
                                </div>
                                <Button className='common_btn'>Register</Button>
                                <h5 className='terms'>By clicking you will be agreeing to <span>Terms & Conditions</span></h5>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default Model