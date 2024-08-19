import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUsers] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('http://localhost:3005/register')
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be more than 8 characters and include at least one uppercase letter, one digit, and one special character.');
      return;
    }

    axios
      .post('http://localhost:3005/register', { firstname, lastname, email, mobile, password })
      .then(() => {
        alert('Registration Succesful');

        setFirstname('');
        setLastname('');
        setEmail('');
        setMobile('');
        setPassword('');
        fetchUsers();
        navigate('/login');
      })
      .catch((error) => {
        console.log('Unable to register user:', error);
      });
  };

  return (
    <div className="signup-page pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12  d-flex flex-row justify-content-center  mt-3  ">
            <div className="signup-container shadow-lg ">
              <h1 className="sign-up-heading fade-in">Welcome</h1>
              <p className="sign-up-dis fade-in">Sign up with your valuable details </p>
              <form onSubmit={handleRegister} className="mt-4">
                <div className="mb-1">
                  <label className="sign-up-label fade-in">First Name</label>
                  <div>
                    <input required className="sign-up-input fade-in" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='Enter Your First Name'/>
                  </div>
                </div>
                <div className="mb-1">
                  <label className="sign-up-label fade-in">Last Name</label>
                  <div>
                    <input required className="sign-up-input fade-in" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Enter Your First Name'/>
                  </div>
                </div>
                <div className="mb-1 mt-2">
                  <label className="sign-up-label fade-in">Email</label>
                  <div>
                    <input required className="sign-up-input fade-in" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email'/>
                  </div>
                </div>
                <div className="mb-1 mt-2">
                  <label className="sign-up-label fade-in">Mobile No</label>
                  <div>
                    <input required className="sign-up-input fade-in" type="tel" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Enter Your Mobile Number'/>
                  </div>
                </div>
                <div className="mb-1 mt-2">
                  <label className="sign-up-label fade-in">Password</label>
                  <div>
                    <input required className="sign-up-input fade-in" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password'/>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="signup-btn fade-in" type="submit" value="Signup">SIGNUP</button>
                  <p className="sign-up-dis mt-2 fade-in">Already have an account? <Link style={{"textDecoration":"none"}} to="/login"><span className="sigin-link" >Sign In</span></Link></p>
                </div>
              </form>
            </div>
            <div className=" d-md-block d-none ">
              <img className="signup-img fade-in" src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?size=626&ext=jpg&ga=GA1.1.555609006.1664952542&semt=sph" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
