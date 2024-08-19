import React from 'react'

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import ScrolToTop from './pages/BackToTopButton/BackToTopButton';
import Home from './pages/HomePage/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {FeedBack} from './pages/Feedback/FeedBack'


import AdminLogin from './pages/Admin/AdminLogin'
import AdminHome from './pages/Admin/AdminHome';


import User from './pages/User/User';

import UserHome from './pages/MainPage/HomePage'



import UserOrder from './pages/UserOdersData/UserOrder'


import Profile from './pages/UserProfile/Profile'


// Layout component for routes that need a common layout
const DefaultLayout = ({ children }) => (
  <div>
   
    
    {children}
    
  </div>
);



function App() {

  

  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <NavBar />
              <Home />
              <Footer />
               <ScrolToTop />
            </DefaultLayout>
          }
        />
        <Route
          path="/register"
          element={
            <DefaultLayout>
              <Signup />
            </DefaultLayout>
          }
        />
         <Route
          path="/login"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />

        {
        isUserSignedIn && <Route
          path="/home"
          element={
            <DefaultLayout>
              <User/>
            </DefaultLayout>
          }
        />
      }

        

        <Route
          path="/admin"
          element={
            <DefaultLayout>
              <AdminLogin />
            </DefaultLayout>
          }
        />
         <Route
          path="/admin/home"
          element={
            <DefaultLayout>
              <AdminHome/>
            </DefaultLayout>
          }
        />

        {
          isUserSignedIn && <Route
          path="/home"
          element={
            <DefaultLayout>
              <UserHome/>
            </DefaultLayout>
          }
        />
        }

        {
        isUserSignedIn &&  <Route
          path="/user/orders"
          element={
            <DefaultLayout>
              
              <UserOrder />
            </DefaultLayout>
          }

        />
        }

{
        isUserSignedIn &&  <Route
          path="/user/help"
          element={
            <DefaultLayout>
              
              <FeedBack  />
            </DefaultLayout>
          }

        />
        }
        

      </Routes>
    </BrowserRouter>

  );
}

export default App;
