import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { interviewComposition, NotVisibleEye, visibleEye } from '../../assets';
import { useNavigate } from 'react-router';

function LoginForm2() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [userExists, setUserExists] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const title = "Login";
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const fields = [
        { name: "email", label: "email", type: "email" },
        { name: "password", label: "password", type: "password" },
    ]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const onSubmit = async (e) => {
        // setLoading(true);
        e.preventDefault();
        // console.log("The form is ",formValues)
        try {
            // const response = await studentLogin(formValues)
            const response = await fetch('https://your-api-endpoint.com/submit', {
                method: 'POST',
                body: formValues,
            });
            // const { data, token } = response.data;
            // const { id: studentId, name, role } = data;
            // localStorage.setItem("studentId", studentId);
            // localStorage.setItem("stdAuthToken", token);

            // if (response.data) {
            //     dispatch(authenticate(true));
            //     dispatch(setUserInfo({ user: data, token, Uid: studentId, Name: name, Role: role }));
            navigate('/clerklogin/clerkhome');
          
        } catch (error) {
            if (error.response.data.msg) {
                // setUserExists(false)
                // setLoading(false)
                // toast.error(error.response.data.msg)
            }
            console.error("Error submitting form:", error);
        }
    };
    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();

        console.log("Forgot Password email submitted:", forgotPasswordEmail);
        setShowForgotPassword(false);
        toast.success('Password reset instructions sent to your email');
    };
    
    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000} />
            {fields ==="undefined" ? (
                <div>Empty fields</div>
            ) : (
                <div className="flex justify-center items-center h-screen animate-slideFromBottom flex-col ">
                    <div className="bg-zinc-800 p-8 rounded-lg w-96 ">
                        <h2 className="text-white text-2xl mb-6 border-b border-zinc-600 pb-2 flex justify-center" id="title">{title}</h2>

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
                            {!userExists && (
                                <div className="text-red-500 text-center pb-3">
                                    User does not exist
                                </div>
                            )}
                            <div className="flex justify-center">
                                <button type="submit" className="w-30 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="ml-2 text-sm text-yellow-500 hover:text-yellow-600 focus:outline-none"
                                    onClick={() => setShowForgotPassword(true)}
                                >
                                    Forgot Password?
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
            )}
            <img src={interviewComposition} alt="Interview Composition" />
        </div>
    );
}

export default LoginForm2;
