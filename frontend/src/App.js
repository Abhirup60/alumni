import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-layout";
import Footer from "./components/Footer";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminUpdateUser from "./pages/AdminUpdateUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/service' element={<Service />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<Error />} />
          {/* nested route */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdateUser />} />  
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
