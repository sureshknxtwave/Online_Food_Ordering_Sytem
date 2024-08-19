import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Oval} from 'react-loader-spinner';


import './Profile.css';

const ProfileOffcanvas = ({ show, onHide }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve userId from local storage
    const storedUserId = localStorage.getItem('id');

    // Check if userId exists
    if (!storedUserId) {
      console.error('User ID not found in local storage');
      // Handle the case when userId is not available
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3005/user/${storedUserId}`);
        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error(error);
        // Handle fetch error if needed
      }
    };

    fetchUser();
  }, []);

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Profile</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          {user ? (
            <div className="profile-info">
              <h2>{`${user.firstname} ${user.lastname}'s Profile`}</h2>
              <p>Email: {user.email}</p>
              <p>Mobile: {user.mobile}</p>
              <Oval className="spinner" height={30} width={50} />
                
              
              
            </div>
          ) : (
            <Oval  height={30} width={50} />
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ProfileOffcanvas;
