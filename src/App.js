import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Home from './Pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from 'react-hot-toast';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';


function App() {
  const [isAuth, setIsAuth] = useState({})

  useEffect(() => {
 auth.onAuthStateChanged(user =>{
  if(user){
    localStorage.setItem("userData", JSON.stringify(user))
    setIsAuth(user)
  }
  console.log(user);
 })
  }, [])

    const logout = () => {
      auth.signOut();
      window.location.reload()
    };
  
  return (
    <>
      <Header isAuth={isAuth} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
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
