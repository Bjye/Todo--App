import React, { useState } from "react";
import "./Style.css";

export default function Login(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="App">
        <div className="auth-form-container  login-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="r-label" htmlFor="email">email</label>
                <input className="r-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className="r-label" htmlFor="password">password</label>
                <input className="r-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="button-sign" type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}