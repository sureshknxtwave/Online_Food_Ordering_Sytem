// AdminFoodRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminFoodRegistration = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleAddFood = async () => {
    try {
      // Send a request to the backend to add the food item
      await axios.post('http://localhost:3005/api/admin/add-food', { name, description, price, imgUrl });
      console.log('Food item added successfully');
        alert("Food Item Added Succesfully")
        setName('');
        setDescription('');
        setPrice('');
        setImgUrl('');
      

      // You can add additional logic here, such as clearing the form or updating the UI
    } catch (error) {
      console.error('Error adding food item:', error);
    }
  };

  return (
    
    <div className="signup-page  pt-3 " >
      <div className="container">
        <div className="row">
            <div className="col-12  d-flex flex-row justify-content-center  mt-3  ">
              
              <div className="signup-container shadow-lg ">
                  <h1 className="sign-up-heading fade-in">Welcome</h1>
                  <p className="sign-up-dis fade-in text-center ">Update Your Food Items </p>
                  <form   className="mt-4">
                    <div className="mb-1">
                      <label className="sign-up-label fade-in" >Food Name:</label>
                      <div>
                        <input className="sign-up-input fade-in"  required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Food Name" />
                      </div>
                    </div>
                    <div className="mb-1">
                      <label className="sign-up-label fade-in" >Description:</label>
                      <div>
                        <textarea required className="sign-up-input fade-in" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Your Food Description" />
                      </div>
                    </div>
                    <div className="mb-1 mt-2">
                      <label className="sign-up-label fade-in" >Price:</label>
                      <div>
                        <input required className="sign-up-input fade-in" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Your Food Price" />
                      </div>
                    </div>
                    <div className="mb-1 mt-2">
                      <label className="sign-up-label fade-in" >Image URL:</label>
                      <div>
                        <input  required className="sign-up-input fade-in" type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} placeholder="Enter Your Image Url" />
                      </div>
                    </div>
                    
                    
                    <div className="mt-5">
                      <button className="signup-btn fade-in" type="button" onClick={handleAddFood}>ADD FOOD</button>
                      
                    </div>
                  </form>
              </div>
             
              </div>
            
        </div>
      </div>
    </div>

  );
};

export default AdminFoodRegistration;
