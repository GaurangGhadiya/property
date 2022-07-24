import React, { useState } from "react";
import "./Model.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../userFirebase";
import { dealerauth } from "../../dealerFirebase";
import { ErrorToast, SuccessToast } from "../Toast";
import { ApiPostNoAuth } from "../../Api/Api";
import GoogleLogin from "react-google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";





const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const DealerModal = ({ open, setOpen, handleOpen, handleClose }) => {
  const [value, setValue] = React.useState(0);
  const [join, setJoin] = useState("User");
  const [joinLogin, setJoinLogin] = useState("User");
  const [toggle, setToggle] = useState(0);
  const [value2, setValue2] = React.useState(new Date("2014-08-18T21:11:54"));
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    number: "",
    otherContacted : false,
  });
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    if (name == "otherContacted") {
      setSignUp({ ...signUp, [name]: e.target.checked });
    } else {
      setSignUp({ ...signUp, [name]: value });
    } 
  };
  const handleSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const userRegister = () => {
    console.log("signUp", signUp);
    if (signUp.password !== signUp?.confirmPassword) {
      ErrorToast("Password are not matched!");
    } else if (signUp?.number?.length != 10) {
      ErrorToast("Phone number should be 10 digits");
    } else if (signUp?.pincode?.length != 6) {
      ErrorToast("Pincode should be 6 digits");
    } else if (
      signUp.email &&
      signUp.password &&
      signUp?.name &&
      signUp?.number &&
      signUp.password === signUp?.confirmPassword &&
      signUp?.city &&
      signUp?.state &&
      signUp?.pincode
    ) {
      createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
        .then(async (res) => {
          console.log(res);
          const user = res?.user;
          await updateProfile(user, { displayName: signUp?.name });
          handleClose();
          SuccessToast("Sign Up sucessFull!");
        })
        .catch((e) => {
          console.log(e);
          ErrorToast("something want wrong");
        });
    } else {
      ErrorToast("All Fields are Requried!");
    }
  };
  const userSignIn = () => {
    // console.log("signUp", signUp);
    if (signIn.email && signIn.password) {
        const body = {
          emailOrMobile: signIn.email,
          password: signIn.password,
        };
        ApiPostNoAuth("/dealer/login" , body).then((res) => {
          setSignIn({});
          SuccessToast(res?.data?.message);
          localStorage.setItem("userData", JSON.stringify(res?.data?.data));
          handleClose();  
        window.location.pathname = "/";
          }).catch(e => {
                        ErrorToast(e?.data?.message);

          });
    //   signInWithEmailAndPassword(
    //     joinLogin === "User" ? auth : dealerauth,
    //     signIn.email,
    //     signIn.password
    //   )
    //     .then(async (res) => {
    //       console.log(res);
    //       // const user = res?.user
    //       //    await updateProfile(user, {displayName :signUp?.name})
    //       handleClose();
    //       SuccessToast("Sign In sucessFull!");
    //     })
        // .catch((e) => {
        //   //  console.log("www",e);
        //   ErrorToast(
        //     e.message === "Firebase: Error (auth/user-not-found)."
        //       ? "You are not registerd. Please register yourself! "
        //       : e.message === "Firebase: Error (auth/wrong-password)."
        //       ? "Email and Password are not matched!"
        //       : "Something want wrong!"
        //   );
        // });
    } else {
      ErrorToast("All Fields are Requried!");
    }
  };
  const handleChange2 = (newValue) => {
    setValue2(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const joinus = (e) => {
    console.log("eee", e.target.value);
    setJoin(e.target.value);
  };
  const joinus2 = (e) => {
    console.log("eee", e.target.value);
    setJoinLogin(e.target.value);
  };
  const DelarOpen = () => {
    console.log("signUp", signUp, value2);
    if (signUp.password !== signUp?.confirmPassword) {
      ErrorToast("Password are not matched!");
    } else if (signUp?.number?.length != 10) {
      ErrorToast("Phone number should be 10 digits");
    } else if (signUp?.pincode?.length != 6) {
      ErrorToast("Pincode should be 6 digits");
    } else if (
      signUp.email &&
      signUp.password &&
      signUp?.name &&
      signUp?.number &&
      signUp?.city &&
      signUp?.state &&
      signUp?.pincode &&
      signUp?.dealershipName &&
      signUp?.dealerCode &&
      signUp?.showroomLocation &&
      signUp?.areaName &&
      signUp?.servicePhoneNumber &&
      signUp?.GST &&
      signUp?.brand &&
      value2
    ) {
      const body = {
        name: signUp?.name,
        email: signUp?.email,
        phoneNumber: signUp?.number,
        password: signUp?.password,
        countryCode: 91,
        city: signUp?.city,
        state: signUp?.state,
        pinCode: signUp?.pincode,
        otherContacted: signUp?.otherContacted ?? false,
        dealershipName: signUp?.dealershipName,
        dealerCode: signUp?.dealerCode,
        showroomLocation: signUp?.showroomLocation,
        areaName: signUp?.areaName,
        servicePhoneNumber: signUp?.servicePhoneNumber,
        GST: signUp?.GST,
        brand: signUp?.brand,
        dateOfIssuance: value2,
      };
      ApiPostNoAuth("dealer/signup", body)
        .then((res) => {
          setSignUp({ otherContacted: false });
          SuccessToast(res?.data?.message);
          localStorage.setItem("userData", JSON.stringify(res?.data?.data));
          setToggle(0);
          handleClose();
          window.location.pathname = "/";
        })
        .catch((e) => {
          ErrorToast(e?.data?.message);
        });
      //   createUserWithEmailAndPassword(dealerauth, signUp.email, signUp.password)
      //     .then(async (res) => {
      //       console.log("delear sign up", res);
      //       const user = res?.user;
      //       await updateProfile(user, { displayName: signUp?.name });

      //       //   handleClose();
      //       SuccessToast("Dealer Sign Up sucessFull!");
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //       ErrorToast("Something want wrong");
      //     });
    } else {
      ErrorToast("All Fields are Requried!");
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    const body = {
      accessToken: response?.tokenObj?.access_token,
      idToken: response?.tokenObj?.id_token,
      deviceToken: "123",
    };
    ApiPostNoAuth("dealer/google_login", body).then(res => {
      console.log("es",res);
       SuccessToast(res?.data?.message);
       localStorage.setItem("userData", JSON.stringify(res?.data?.data));
       handleClose();
       window.location.pathname = "/";
    }).catch(e => {
      console.log(e);
      ErrorToast(e?.data?.message);

    });
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(joinLogin === "User" ? auth : dealerauth, provider)
      .then((res) => {
        console.log("google login", res);
        handleClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const responseFacebook = async(response) => {
    console.log(response);
    const body = {
      accessToken: response?.accessToken,
      deviceToken: "123",
    };
   await ApiPostNoAuth("dealer/facebook_login", body).then(res => {
        console.log("res",res);
        SuccessToast(res?.data?.message);
        localStorage.setItem("userData", JSON.stringify(res?.data?.data));
        handleClose();
        window.location.pathname = "/";
    }).catch(e => {
                        ErrorToast(e?.data?.message);
    });
  };
  const fbLogin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(dealerauth, provider)
      .then((res) => {
        console.log("fb login", res);
        handleClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="modal">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <img
                className="me-2 w-100 h-100 img"
                src={process.env.PUBLIC_URL + "/Images/login.png"}
              />
            </Grid>
            {toggle === 0 && (
              <Grid item xs={12} sm={7}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="input_filed">
                    <label htmlFor="email">Email</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      variant="outlined"
                      name="email"
                      onChange={handleSignIn}
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="password">Password</label>
                    <TextField
                      type="password"
                      hiddenLabel
                      id="outlined-basic"
                      variant="outlined"
                      name="password"
                      onChange={handleSignIn}
                    />
                  </div>
                  <div className="remeber">
                    <h6>Forgot password?</h6>
                  </div>

                  <Button className="common_btn" onClick={userSignIn}>
                    Login as a Dealer
                  </Button>
                  <div className="social mt-4">
                    {/* <Button className="" onClick={googleLogin}>
                      <img
                        className="me-2"
                        src={process.env.PUBLIC_URL + "/Images/search 1.png"}
                      />
                      Continue with Google
                    </Button> */}
                    {/* <GoogleOAuthProvider clientId="10109790765-hafmqegekgk0i04sevd2div2pmt1rfi9.apps.googleusercontent.com">
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                    //   useOneTap
                      />
                    </GoogleOAuthProvider> */}
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_LOGIN}
                      buttonText="Login"
                      render={(renderProps) => (
                        <Button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          {/* <img
                          className="me-2"
                          src={process.env.PUBLIC_URL + "/Images/search 1.png"}
                        /> */}
                          <FcGoogle size={20} className="me-2" />
                          Continue with Google
                        </Button>
                      )}
                      className="my-facebook-button-class"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                    <FacebookLogin
                      appId="663969168653765"
                      autoLoad={false}
                      fields="name,email,picture"
                      onClick={(e) => console.log(e)}
                      callback={responseFacebook}
                      cssClass="my-facebook-button-class m-0 fs-14"
                      icon={
                        <FaFacebook color="blue" size={20} className="me-2" />
                      }
                      textButton="Continue with Facebook"
                    />

                    {/* <Button className="" onClick={fbLogin}>
                      <img
                        className="me-2"
                        src={
                          process.env.PUBLIC_URL + "/Images/facebook (1) 1.png"
                        }
                      />
                      Continue with Facebook
                    </Button> */}
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="input_filed">
                    <label htmlFor="email">Your Name</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      name="name"
                      onChange={handleSignUp}
                      variant="outlined"
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">Email Address</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      name="email"
                      variant="outlined"
                      onChange={handleSignUp}
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">Password</label>
                    <TextField
                      type="password"
                      hiddenLabel
                      id="outlined-basic"
                      name="password"
                      variant="outlined"
                      onChange={handleSignUp}
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">Confirm Password</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      name="confirmPassword"
                      variant="outlined"
                      onChange={handleSignUp}
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">Phone Number</label>
                    <div className="phone">
                      <select id="">
                        <option value="+91">+91</option>
                      </select>
                      <TextField
                        hiddenLabel
                        name="number"
                        id="outlined-basic"
                        variant="outlined"
                        onChange={handleSignUp}
                      />
                    </div>
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">City</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      name="city"
                      onChange={handleSignUp}
                      variant="outlined"
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">State</label>
                    <TextField
                      hiddenLabel
                      id="outlined-basic"
                      name="state"
                      onChange={handleSignUp}
                      variant="outlined"
                    />
                  </div>
                  <div className="input_filed mt-2">
                    <label htmlFor="email">Pin Code</label>
                    <TextField
                      hiddenLabel
                      type="number"
                      id="outlined-basic"
                      name="pincode"
                      onChange={handleSignUp}
                      variant="outlined"
                    />
                  </div>

                  <div className="agree">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleSignUp}
                          name="otherContacted"
                        />
                      }
                      label="I agree to be contacted by trader.com and others for similar properties or related services via  WhatsApp, phone, sms, e-mail etc."
                    />
                  </div>
                  <Button className="common_btn" onClick={() => setToggle(1)}>
                    Register as a Dealer
                  </Button>
                  <h5 className="terms">
                    By clicking you will be agreeing to{" "}
                    <span>Terms & Conditions</span>
                  </h5>
                </TabPanel>
              </Grid>
            )}
            {toggle === 1 && (
              <Grid className="delar_box" item xs={7} sm={7}>
                <h1 className="delar_title">Fill Out The Dealership Form</h1>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div className="input_filed">
                      <label htmlFor="email">Dealership Name</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="dealershipName"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="input_filed">
                      <label htmlFor="email">Dealer Code</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="dealerCode"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input_filed mt-2">
                      <label htmlFor="email">Phone No</label>
                      <div className="phone delarphone">
                        <select name="" id="">
                          <option value="+91">+91</option>
                        </select>
                        <TextField
                          hiddenLabel
                          id="outlined-basic"
                          variant="outlined"
                          name="number"
                          onChange={handleSignUp}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="input_filed">
                      <label htmlFor="email">Showroom Location</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="showroomLocation"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="input_filed">
                      <label htmlFor="email">Area Name</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="areaName"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input_filed mt-2">
                      <label htmlFor="email">Phone No(Service)</label>
                      <div className="phone delarphone">
                        <select name="" id="">
                          <option value="+91">+91</option>
                        </select>
                        <TextField
                          type="number"
                          hiddenLabel
                          id="outlined-basic"
                          variant="outlined"
                          name="servicePhoneNumber"
                          onChange={handleSignUp}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="input_filed">
                      <label htmlFor="email"> Brand</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="brand"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="input_filed datepicker">
                      <label htmlFor="email">Date Of Issuance</label>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          inputFormat="MM/dd/yyyy"
                          value={value2}
                          onChange={handleChange2}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="input_filed">
                      <label htmlFor="email">GSTIN</label>
                      <TextField
                        hiddenLabel
                        id="outlined-basic"
                        variant="outlined"
                        name="GST"
                        onChange={handleSignUp}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="common_btn" onClick={DelarOpen}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default DealerModal;
