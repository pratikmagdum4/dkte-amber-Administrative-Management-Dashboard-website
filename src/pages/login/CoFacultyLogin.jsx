import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { interviewComposition, NotVisibleEye, visibleEye } from '../../assets';
import Loading from '../../components/ui/Loader';
import { authenticate, selectCurrentRole, setUserInfo } from '../../redux/auth';
import { LoginNavLink } from '../../components/variables/variables';
import { BASE_URL } from '../../api';

function FacultyLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const currentRole = useSelector(selectCurrentRole);

    useEffect(() => {
        if (currentRole === 'faculty') {
            navigate('/login/co-faculty/verify-article');
        }
    }, [navigate, currentRole]);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleForgotPassClick = () => {
        setShowForgotPassword(true);
        setForgotPasswordEmail('');
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setInvalid(false);
        try {
            const response = await axios.post(`${BASE_URL}/api/login/faculty`, formValues);
            const { data, token, result } = response.data;
            (response)
            dispatch(authenticate(true));
            (result._id)
            dispatch(setUserInfo({ user: data, token, Uid: result._id, Name: result.name, Role: response.data.role }));
            localStorage.setItem('facultyAuthToken', token);
            navigate('/login/co-faculty/verify-article');
        } catch (error) {
            setLoading(false);
            if (error.response && (error.response.data.message === "Faculty doesn't exist" || error.response.data.message === "Invalid credentials")) {
                setInvalid(true);
                toast.error(error.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/faculty/forgot-password`, { email: forgotPasswordEmail });
            setShowForgotPassword(false);
            toast.success('Password reset instructions sent to your email');
            setForgotPasswordEmail('');
        } catch {
            toast.error('Failed to send password reset email');
        }
    };

    const renderPasswordToggle = () => (
        <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-white"
            onClick={togglePasswordVisibility}
        >
            <img src={showPassword ? visibleEye : NotVisibleEye} alt="Toggle Password Visibility" className="h-6 w-6" />
        </button>
    );

    return (
        <>
            {loading && invalid ? (
                <Loading links={LoginNavLink} />
            ) : (
                <div>
                    <Navbar links={LoginNavLink} />
                    <ToastContainer position="top-center" autoClose={2000} />
                    <div className="flex justify-center items-center h-screen animate-slideFromBottom flex-col">
                        <div className="bg-zinc-800 p-8 rounded-lg w-96">
                            <h2 className="text-white text-2xl mb-6 border-b border-zinc-600 pb-2 text-center">
                                Faculty Login
                            </h2>
                            <form onSubmit={handleLoginSubmit}>
                                {['email', 'password'].map((field) => (
                                    <div key={field} className="mb-4 text-center">
                                        <label htmlFor={field} className="block text-white mb-2">
                                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={field === 'password' && !showPassword ? 'password' : 'text'}
                                                id={field}
                                                name={field}
                                                value={formValues[field]}
                                                onChange={handleInputChange}
                                                className="input-field font-bold p-1 focus:border-yellow-500 focus:ring-yellow-500 text-black"
                                                required
                                            />
                                            {field === 'password' && renderPasswordToggle()}
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center">
                                    <button type="submit" className="w-30 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Login
                                    </button>
                                </div>
                                <div className="flex justify-center pt-6">
                                    <button
                                        type="button"
                                        className="ml-2 text-lg text-yellow-500 hover:text-yellow-600 focus:outline-none"
                                        onClick={() => navigate('/signup')}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className="flex justify-center pt-6">
                                    <button
                                        type="button"
                                        className="ml-2 text-lg text-yellow-500 hover:text-yellow-600 focus:outline-none"
                                        onClick={handleForgotPassClick}
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

export default FacultyLogin;
