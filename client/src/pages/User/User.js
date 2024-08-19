import React, { useState,useEffect } from 'react';
import MainHome from '../MainPage/HomePage';
import UserNav from '../UserNavBar/UserNav';
import Cart from '../Cart/Cart';


function User() {
  const [show, setShow] = useState(true);
  
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState(null);
  const [userMobile, setUserMobile] = useState(null);

  useEffect(() => {
    // Retrieve userId from localStorage on component mount
    const storedUserName = localStorage.getItem('username')
    const storedUserMobile = localStorage.getItem('userMobile')
    if (storedUserName) {
      setUserName(storedUserName);
      
    }
    if (storedUserMobile) {
      setUserMobile(storedUserMobile);
    }
  }, []);

  const handleClick = (item) => {
    setCart((prevCart) => {
      const isPresent = prevCart.some((product) => item._id === product._id);

      if (isPresent) {
        alert('Item Already Added');
        return prevCart;
      }

      const updatedCart = [...prevCart, item];
      return updatedCart;
    });
  };

  return (
    <div>
    
      <UserNav size={cart.length} setShow={setShow} />
      
      {show ? (
        <MainHome handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} userName={userName} userMobile={userMobile} />
      )}

      

    </div>
    
  
  );
}

export default User;
