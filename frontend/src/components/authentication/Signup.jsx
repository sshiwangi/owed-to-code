import React, {useState} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Signup() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('routes/auth', userData); // Updated URL
      console.log('User registered:', response.data);
      // Handle success, e.g., redirect to a new page
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, e.g., display error message to the user
    }
  };
  return (
    <div className="signup-container">
      <h1>Create an account</h1>
      <h2>let's get started</h2>
      <form onSubmit={handleSignup}>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      <button type="submit">Create account</button>
      </form>
      <button>Sign up with Google</button>
      <p>Already have an account? <Link to="/signin">Signin</Link></p>
    </div>
  )
}

export default Signup