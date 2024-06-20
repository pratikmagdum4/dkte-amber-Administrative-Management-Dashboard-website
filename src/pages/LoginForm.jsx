import React from 'react';
import './login.css';
import 'boxicons/css/boxicons.min.css';

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <i className='bx bxs-email'></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#">Forget password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
