import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OrdersData.css';
import {Link} from 'react-router-dom'

function OrdersData() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the Express API
    axios.get('http://localhost:3005/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    return { date, time };
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="Orders-List shadow mt-5">
        <h1 className="OL-hea">Past Orders</h1>
        <ul className="order-list">
          {orders.map(order => (
            <li key={order._id} className="order-card">
              <div className="details">
                <div className="item-name"><strong>{order.itemName}</strong></div>
                <div className="item-quantity">{order.amount} items</div>
                <div className="price">Price: ₹{order.price}</div>
                <div className="time">Date Ordered: {formatDateTime(order.orderDateTime).date} - {formatDateTime(order.orderDateTime).time}</div>
              </div>
              <div className="d-flex flex-column">
                <button className="button1">REORDER</button>
              <Link to='/user/help'> 
                <button className="button2">HELP</button>
              </Link>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrdersData;
