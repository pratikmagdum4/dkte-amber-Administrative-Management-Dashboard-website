import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { interviewComposition, NotVisibleEye, visibleEye } from '../../assets';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../api';
import Loading from '../../components/ui/Loader';
import { authenticate, selectCurrentRole, setUserInfo } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { HomeLink, LoginNavLink } from '../../components/variables/variables';

function AdminLoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const selector = useSelector(selectCurrentRole);

    useEffect(() => {
        const token = localStorage.getItem('adminAuthToken');
        if (selector === "admin") {
            navigate('/login/admin/home');
        }
    }, [navigate, selector]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const fields = [
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
    ];
    const handleForgotPassClick = () =>{
        setShowForgotPassword(true);
        setForgotPasswordEmail('');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/api/login/admin`, formValues);
            const { data, token, result } = response.data;
            console.log("the resoines is ",response)
            const name = response.data.result.name;
            const role = response.data.role;
            localStorage.setItem("adminAuthToken", token);
            const id = response.data.result.id;
            dispatch(authenticate(true));
            dispatch(setUserInfo({ user: data, token, Uid: id, Name: name, Role: role }));
            navigate('/login/admin/home');
            // navigate('home');
        } catch (error) {
            if (error.response) {
                const message = error.response.data.message;
                if (message === "Admin doesn't exist" || message === "Invalid credentials") {
                    toast.error(message);
                }
            }
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/admin/forgot-password`, { email: forgotPasswordEmail });
            setShowForgotPassword(false);
            toast.success('Password reset instructions sent to your email');
            setForgotPasswordEmail('');
           
        } catch (error) {
            toast.error('Failed to send password reset email');
        }
    };

    return (
        <>
            {loading ? (
                <Loading links={LoginNavLink} />
            ) : (
                <div>
                    <Navbar links={LoginNavLink} />
                    <ToastContainer position="top-center" autoClose={2000} />
                    <div className="flex justify-center items-center h-screen animate-slideFromBottom flex-col">
                        <div className="bg-zinc-800 p-8 rounded-lg w-96">
                            <h2 className="text-white text-2xl mb-6 border-b border-zinc-600 pb-2 flex justify-center" id="title">Admin Login</h2>
                            <form onSubmit={onSubmit} className="">
                                {fields.map(field => (
                                    <div key={field.name} className="mb-4 text-center">
                                        <label htmlFor={field.name} className="block text-white mb-2">{field.label}:</label>
                                        <div className="relative">
                                            <input
                                                type={field.name === 'password' && !showPassword ? 'password' : 'text'}
                                                id={field.name}
                                                name={field.name}
                                                value={formValues[field.name]}
                                                onChange={handleChange}
                                                className="input-field font-bold p-1 focus:border-yellow-500 focus:ring-yellow-500 text-black"
                                                required
                                            />
                                            {field.name === 'password' && (
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-white"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? (
                                                        <img src={visibleEye} alt="Hide Password" className="h-6 w-6" />
                                                    ) : (
                                                        <img src={NotVisibleEye} alt="Show Password" className="h-6 w-6" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center">
                                    <button type="submit" className="w-30 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Login
                                    </button>
                                </div>
                                <div className='flex justify-center pt-6'>
                                    <button
                                        type="button"
                                        className="ml-2 text-lg text-yellow-500 hover:text-yellow-600 focus:outline-none"
                                        onClick={() => navigate('/signup')}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className='flex justify-center pt-6'>
                                    <button
                                        type="button"
                                        className="ml-2 text-lg text-yellow-500 hover:text-yellow-600 focus:outline-none"
                                            onClick={() => handleForgotPassClick()}
                                    >
                                        Forgot Password
                                    </button>
                                </div>
                               
                            </form>
                            {showForgotPassword && (
                                <form onSubmit={handleForgotPasswordSubmit}>
                                    <div className="mt-4 text-center">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={forgotPasswordEmail}
                                            onChange={(e) => setForgotPasswordEmail(e.target.value)}
                                            className="input-field font-bold p-1 focus:border-yellow-500 focus:ring-yellow-500 text-black"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <button
                                            type="submit"
                                            className="w-30 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                    <img src={interviewComposition} alt="Interview Composition" />
                </div>
            )}
        </>
    );
}

export default AdminLoginForm;
