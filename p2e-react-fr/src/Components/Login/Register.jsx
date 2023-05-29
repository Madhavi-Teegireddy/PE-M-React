import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import "../../styles/login.css"
import "../../styles/navbar.css"
import Navbar from '../Navbar';

const obj = {
  email: "",
  username: "",
  password: "",
  confirmpassword: "",
};

const Register = () => {
  const [form, setForm] = useState(obj);

  const navigate = useNavigate();


  function handleInput(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
function handleBtn(e) {
  e.preventDefault();
  console.log(form);
  const { email, username, password, confirmpassword } = form;
  if (email === "" || username === "" || password === "" || confirmpassword === "") {
    alert("Please fill out all fields");
  } else if (password !== confirmpassword) {
    alert("Passwords do not match");
  } else {
    AddDataUser(form);
  }
}

// https://mockapi-i4c2.onrender.com

  function AddDataUser(data) {
  fetch("https://mockapi-i4c2.onrender.com/users", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    alert("user signup sucessfully ");
    navigate ("/")
  });
  
}    
  return (
    <>
    <Navbar/>
    <div className='container'>
      <form className="form" 
      onSubmit={(e) => handleBtn(e)}
      >
      <h2 style={{fontSize:"30px",marginTop:"-20px",color:"rgb(114, 114, 219)",textAlign:"left"}} >Signup </h2>
        <label>Email*</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => handleInput(e)}
        />

        <label>Username*</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleInput(e)}
        />

        <label>Password*</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={(e) => handleInput(e)}
        />

        <label>Confirm Password*</label>
        <input
          type="text"
          placeholder="confirm password"
          name="confirmpassword"
          onChange={(e) => handleInput(e)}
        />
        <input type="submit" />
      </form>        
    </div>
    </>
  )
}

export default Register