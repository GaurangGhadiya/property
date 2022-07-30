import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Home from './Pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Toaster } from 'react-hot-toast';
import { auth } from './userFirebase';
import { dealerauth } from "./dealerFirebase";
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Product_Detail from './Pages/Product_Detail';
import {gapi} from "gapi-script"
import Add_Product from './Pages/Add_Product';
import View_Product from './Pages/View_Product';
import Dealer_Product_List from './Pages/Dealer_Product_List';
import User_Product_List from './Pages/User_Product_List';
import Footer from './Components/Footer/Footer';
import Dealer_Profile from './Pages/Dealer_Profile';


function App() {
  const [isAuth, setIsAuth] = useState({})

  const start = () =>{
    gapi.client.init({
      clientId: process.env.REACT_APP_GOOGLE_LOGIN,
      scope: "",
    });
  }

  useEffect(() => {
gapi.load('client:auth2',start)
 auth.onAuthStateChanged(user =>{
  if(user){
    localStorage.setItem("userData", JSON.stringify(user))
    setIsAuth(user)
  }
  console.log(user);
 })

 dealerauth.onAuthStateChanged((user) => {
   if (user) {
     localStorage.setItem("userData", JSON.stringify(user));
     setIsAuth(user);
   }
   console.log(user);
 });
  }, [])

    const logout = () => {
      // auth.signOut();
      // dealerauth.signOut();
      localStorage.clear();
      window.location.pathname = "/";
    };
  
  return (
    <>
      <Header isAuth={isAuth} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route element={<ProtectedRoutes />}>
        <Route path="/product-detail" element={<Product_Detail />} />
        <Route path="/dealer-product-list" element={<Dealer_Product_List />} />
        <Route path="/user-product-list" element={<User_Product_List />} />
        <Route path="/add-product" element={<Add_Product />} />
        <Route path="/view-product/:id" element={<View_Product />} />
        <Route path="/dealer-profile" element={<Dealer_Profile />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
        <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
