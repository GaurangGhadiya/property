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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Dealer
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  console.log("header", isAuth);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const logout = () => {
  //   console.log("44654");
  //   localStorage.clear();
  //   window.location.reload(false);
    
  // }
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
            <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/shopping.png'} />
              Shopping
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/sell.png'} />
              Sell
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/help.png'} />
              Help
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/message.png'} />
              {/* Message */}
            </ListItemButton>
            <ListItemButton sx={{ textAlign: 'center' }}>
              {/* <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/like.png'} /> */}
              
              <img className='me-2' src={process.env.PUBLIC_URL + '/Images/Icons/cart.png'} />
            </ListItemButton>
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
                <Button key={1} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/shopping.png"}
                  />
                  Shopping
                </Button>
                <Button key={2} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/sell.png"}
                  />
                  Sell
                </Button>
                <Button key={3} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/help.png"}
                  />
                  Help
                </Button>
                <Button key={4} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/message.png"}
                  />
                  Message
                </Button>
                <Button key={5} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/like.png"}
                  />
                </Button>
                <Button key={5} sx={{ color: "black" }}>
                  <img
                    className="me-2"
                    src={process.env.PUBLIC_URL + "/Images/Icons/cart.png"}
                  />
                </Button>
                {loginData?.name ? (
                  <>
                    <p className="text-black p-0 m-0 mt-2">
                      {loginData?.name}{" "}
                    </p>
                    <p onClick={logout} className="text-black ms-3 mt-2 ">
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