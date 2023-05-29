import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css"
import Navbar from '../Navbar';
import {Link} from "react-router-dom"

const obj = {
  email: "",
  password: "",

};

const Login = () => {
  const [form, setForm] = useState(obj);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  function handleInput(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleBtn(e) {
    e.preventDefault();
    const { email, password } = form;
    let check = users.find((e) => e.email === email && e.password === password);
    if (check) {
      alert(" users login  Successfull");
      navigate("/welcome")
    } else {
      alert("wrong credientials");
    }
  }

  function verify() {
    fetch("https://mockapi-i4c2.onrender.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }
  useEffect(() => {
    verify();
  }, []);   
   
  return (
    <>
    <Navbar/>
    <div className='container'>
      <form className="form" 
      onSubmit={(e) => handleBtn(e)}
      >
      <h2 style={{fontSize:"30px",marginTop:"-20px",color:"rgb(114, 114, 219)",textAlign:"left"}} >Login </h2>
        <label>Email*</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={(e) => handleInput(e)}
        />


        <label>Password*</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={(e) => handleInput(e)}
        />

        <input type="submit" style={{marginTop:"30px"}}/>
        <p style={{marginTop:"30px"}}>Don't have an account <Link to="/reg" style={{color:"blue", fontWeight:"bold"}}>Register</Link></p>
      </form>        
    </div>
    </>
  )
}

export default Login