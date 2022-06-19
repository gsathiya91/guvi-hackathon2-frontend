import React, { useState } from "react";
import "./register.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, confirmPassword } = user
        if (name && email && password && (password === confirmPassword)) {
            axios.post("https://guvi-hackathon2backend.herokuapp.com/register", user)
                // 
                navigate('/login')
        } else {
            alert("Invalid credentials!")
        }
    }
    const navigate = useNavigate();
    return (
        <>
        <br />&nbsp;<button onClick={() => navigate(-1)}> Back</button>&nbsp;
        <div className="app">
           
            <div className="register">
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Enter your Name"
                    onChange={handleChange} />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Enter your Email"
                    onChange={handleChange} />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Password"
                    onChange={handleChange} />
                <input
                    type="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    placeholder="Confirm Password "
                    onChange={handleChange} />
                <div className="buttons" onClick={register}>Register</div>
                <div>or</div>
                <div className="buttons" onClick={()=> navigate("/login")}>Login</div>
            </div>
        </div>
        </>
    )
}

export default Register;