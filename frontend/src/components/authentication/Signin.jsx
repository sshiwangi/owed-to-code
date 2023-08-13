import React, {useState} from 'react'
import './signin.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Signin() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('routes/auth', userData); // Updated URL
      console.log('User signed in:', response.data);
      // Handle success, e.g., redirect to a new page
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="signin-contianer">
    
      <h1>Welcome back!</h1>
       <p>Please enter your details</p>

      <button class="button-sign-in">Signin with Google</button>
      <p>or</p>
      <form onSubmit={handleSignin}>
        <label htmlFor="email">Email</label>
        <input class="input-signin" type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input class="input-signin" type="password" name="password" id="password" />
      <p>Forgot password</p>
      <button class="button-sign-in" type="submit">Sign in</button>
      </form>
      <p>Don't have an account <Link to="/signup">Sign up</Link></p>
    </div>
  )
}
export default Signin