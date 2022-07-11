import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import Home from './Pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
