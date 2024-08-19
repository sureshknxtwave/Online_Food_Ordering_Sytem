// Cart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart({ cart, setCart, userName,userMobile }) {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  
  
  const handlePrice = () => {
    let ans = 0;
    cart.forEach(item => {
      ans += amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
    handlePrice();
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
    handlePrice();
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      handlePrice();
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const itemNames = cart.map((item) => item.name);
      
  
      // Check if userId is available
      if (!userName) {
        console.error('User ID is missing');
        return;
      }
      if (!userMobile) {
        console.error('User Mobile is missing');
        return;
      }
  
      const response = await axios.post('http://localhost:3005/orders/', {
        userName,
        userMobile,
        itemName: itemNames.join(', '), // Convert array to string
        amount,
        price,
      });
  
      console.log('Order placed successfully:', response.data);
  
      // Show success message
      alert('Order Placed Successfully');
  
      // Clear the cart after placing the order
      setCart([]);
      setAmount(1);
      setPrice(0);
    } catch (error) {
      console.error('Error placing order:', error);
  
      // Show error message
      alert('Cart is Empty, Please Add Items');
    }
  };
  
  
  

  useEffect(() => {
    handlePrice();
    
  }, ); 



  return (
    <div className="Cart-section">
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item._id}>
            <img className="cart_img" src={item.imgUrl} alt="" />
            <h1 className="cart_name">{item.name}</h1>
            <div>
              <span className="item-price">{item.price}/-</span>
            </div>
            <div>
              <button className="cart-btn1" onClick={handleIncrement}>+</button>
              <button className="cart-btn3">{amount}</button>
              <button className="cart-btn2" onClick={handleDecrement}>-</button>
            </div>
            <div>
              <button className="cart-remove_btn" onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="Total-price-card">
          <div className="total">
            <h4>Total Price of your Cart </h4>
            <hr />
            <div>
              <h6>To Pay</h6>
              <h6 className="total-price"> Rs - {price}/-</h6>
            </div>
            <br/>
            <button className="place-order-btn" onClick={handlePlaceOrder} >
            Place Order
            </button>
          </div>


          
        </div>
        
      </article>
    </div>
  );
}

export default Cart;
