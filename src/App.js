import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Home from './Pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from 'react-hot-toast';
import { auth } from './userFirebase';
import { dealerauth } from "./dealerFirebase";
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Product_Detail from './Pages/Product_Detail';
import Product_List from './Pages/Product_List';

import {gapi} from "gapi-script"


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
      window.location.reload();
    };
  
  return (
    <>
      <Header isAuth={isAuth} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<Product_Detail />} />
        <Route path="/product-list" element={<Product_List />} />
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
