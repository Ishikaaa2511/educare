import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';
// import Discussionforum from '../pages/discussionforum';
import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';
import Users from '../admin/Users';
import { PrivateRoute } from './PrivateRoute';
import ChatRoom from '../pages/ChatRoom';
import { AuthProvider } from '../context/AuthContext';
import Videocon from '../pages/Videocon';
import RoomPage from '../components/Videocon/RoomPage';
import Coursevideo from '../components/coursevideo/coursevideo';
import CourseStructure from '../components/coursevideo/CourseStructure.js';

const Routers = () => {
  
  return <AuthProvider>
    <Routes>
    <Route path='/' element={< Navigate to="home" />} />
    <Route path='home' element={< Home/>} />
    <Route path='shop' element={< Shop/>} />
    <Route path='shop/:id' element={< ProductDetails/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/Mycourses' element={<Coursevideo/>} />
    <Route path='/Mycourses/:coursename' element={<CourseStructure/>}/>

    <Route path='/*' element={<ProtectedRoute/>}>

    <Route path='checkout' element={<Checkout/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='dashboard/all-products' element={<AllProducts/>}/>
    <Route path='dashboard/add-products' element={<AddProducts/>}/>
    <Route path='dashboard/users' element={<Users/>}/>

    </Route>

    <Route path='login' element={<Login/>} />
    <Route path='signup' element={< Signup/>} />
    <Route path='/videochat' element={< Videocon/>} />
    <Route path="/room/:roomId" element={<RoomPage/>} />

    <Route path='/chat' element={<PrivateRoute><ChatRoom/></PrivateRoute>} />
  </Routes>
  
  </AuthProvider> 
  
}; 

export default Routers;
