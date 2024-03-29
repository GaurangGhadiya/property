import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import "./Header.scss"
import Model from '../Model/Model';
import { auth } from '../../userFirebase';
import DealerModal from '../Model/DealerModal';
import { getUserData } from '../../Api/Api';


const drawerWidth = 240;

const Header = (props) => {
  const { window, isAuth, logout } = props;
  const navigate = useNavigate()
  const [loginData, setLoginData] = React.useState(getUserData())
  //user
  console.log('====================================');
  console.log("loginData",loginData);
  console.log('====================================');
  const [open, setOpen] = React.useState(false);
  // ==============user modal open===================//
  const handleOpen = () => setOpen(true);
  // ==============user modal close===================//
  const handleClose = () => setOpen(false);
  // Dealer
  const [open2, setOpen2] = React.useState(false);
  // / ==============deler modal open===================//
  const handleOpen2 = () => setOpen2(true);
  // / ==============deler modal close===================//
  const handleClose2 = () => setOpen2(false);

  console.log("header", isAuth);
  const [mobileOpen, setMobileOpen] = React.useState(false);
// / ============== MObile view Drawer Open===================//
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // / ============== MObile view Drawer===================//
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          <img className='mt-0' width={150} src={process.env.PUBLIC_URL + '/Images/Logo/trader.png'} />
        </Typography>
      </Link>
      <Divider />
      <List>
          <ListItem key={1} disablePadding>
            {loginData?.userType === "User" && <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/shopping.png'} />
              Shopping
            </ListItemButton>}
            {loginData?.userType === "User" && <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/sell.png'} />
              Sell
            </ListItemButton>}
           {loginData.userType &&  <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/help.png'} />
              Contact Us
            </ListItemButton>}
            {loginData?.userType === "User" && <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/message.png'} />
              Message
            </ListItemButton>}
            {loginData?.userType === "User" && <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/cart.png'} />
            </ListItemButton>}
            {loginData?.userType === "Dealer" && <>
            <ListItemButton sx={{ textAlign: 'center' }}>
            Blog
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate("/add-product", {
                                                    state: { accessories:[]}
                                                })}>
            Add Product
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate("/dealer-product-list")}>
              Product
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate("/dealer-profile")}>
              Profile
            </ListItemButton>
            </>}
            <ListItemButton className='login_btn py-2' sx={{ textAlign: 'center' }} onClick={handleOpen}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/login.png'} />
              User Login 
            </ListItemButton>
            <ListItemButton className='login_btn py-2' sx={{ textAlign: 'center' }} onClick={handleOpen}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/login.png'} />
             Dealer Login 
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar_main">
      <Box sx={{ display: "flex", marginBottom: "55px" }}>
        <AppBar component="nav">
          <Container>
            <Toolbar>
              <Link to="/">
                <Typography
                  variant="h6"
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <img
                    className="mt-0"
                    width={150}
                    src={process.env.PUBLIC_URL + "/Images/Logo/trader.png"}
                  />
                </Typography>
              </Link>
              <IconButton
                // color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
              >
                <Link to="/">
                  <img
                    className="mt-0"
                    width={150}
                    src={process.env.PUBLIC_URL + "/Images/Logo/trader.png"}
                  />
                </Link>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {loginData?.userType === "User" && <Button key={1} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/shopping.png"}
                  />
                  Shopping
                </Button>}
                {loginData?.userType === "User" && <Button key={2} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/sell.png"}
                  />
                  Sell
                </Button>}
                {loginData.userType && <Button key={3} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/help.png"}
                  />
                  Contact Us
                </Button>}
                {loginData?.userType === "User" && <Button key={4} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/message.png"}
                  />
                  Message
                </Button>}
                {loginData?.userType === "User" && <Button key={5} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/like.png"}
                  />
                </Button>}
                {loginData?.userType === "Dealer" && <>
                <Button key={9} sx={{ color: "black" }}>
                 Blog
                </Button>
                <Button key={8} sx={{ color: "black" }}  onClick={() => navigate("/add-product", {
                                                    state: { accessories:[]}
                                                })}>
                 Add Product
                </Button>
                <Button key={6} sx={{ color: "black" }}  onClick={() => navigate("/dealer-product-list")}>
                  Product
                </Button>
                <Button key={7} sx={{ color: "black" }}  onClick={() => navigate("/dealer-profile")}>
                  Profile
                </Button></>
                }
                {loginData?.userType === "User" && <Button key={8} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/cart.png"}
                  />
                </Button>}
                {loginData?.name ? (
                  <>
                    <p className="text-black p-0 m-0 mt-2">
                      {loginData?.name}{" "}
                    </p>
                    <p onClick={logout} className="cursor_pointer text-black ms-3 mt-2 ">
                      Logout
                    </p>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleOpen}
                      className="login_btn"
                      key={6}
                      sx={{ color: "black" }}
                    >
                      <img
                        className="me-2"
                        src={process.env.PUBLIC_URL + "/Images/Icons/login.png"}
                      />
                      User Login 
                    </Button>
                    <Button
                      onClick={handleOpen2}
                      className="login_btn ms-2"
                      key={6}
                      sx={{ color: "black" }}
                    >
                      <img
                        className="me-2"
                        src={process.env.PUBLIC_URL + "/Images/Icons/login.png"}
                      />
                      Dealer Login 
                    </Button>
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="nav">
          <Drawer
            container={container}
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Model
        handleClose={handleClose}
        handleOpen={handleOpen}
        setOpen={setOpen}
        open={open}
      />
      <DealerModal
        handleClose={handleClose2}
        handleOpen={handleOpen2}
        setOpen={setOpen2}
        open={open2}
      />
    </div>
  );
}

export default Header