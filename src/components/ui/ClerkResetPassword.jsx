import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../api';
import Navbar from '../../pages/navbar/Navbar';
import { HomeLink } from '../variables/variables';

function ClerkResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams();


    const role  = 0;

    const handleResetPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/clerk/reset-password/${token}`, { password: newPassword });
            alert("Password has been reset'")
            toast.success('Password has been reset');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to reset password');
            console.error('Error resetting password:', error);
        }
    };

    return (
        <>
            <Navbar links={HomeLink} />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <ToastContainer position="top-center" autoClose={2000} />
                <form onSubmit={handleResetPasswordSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                    <div className="mb-4 relative">
                        <label htmlFor="newPassword" className="block text-gray-700 font-bold mb-2">New Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 mt-8 right-0 px-3 py-2 text-gray-700"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Reset Password</button>
                </form>
            </div>
        </>
    );
}

export default ClerkResetPassword;
