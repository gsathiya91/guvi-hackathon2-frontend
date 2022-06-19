import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import{useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("https://guvi-hackathon2backend.herokuapp.com/login", user)
            .then(res => alert(res.data.message))
            navigate('/products')
    }
    return (
        <div className="app">
            <div className="login">
                <h1>Login</h1>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your Email" />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter your Password" />
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={()=> navigate("/register")}>Register</div>
            </div>
        </div>
    )
}

export default Login;