import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { interviewComposition, NotVisibleEye, visibleEye } from '../../assets';
import { useNavigate, useLocation } from 'react-router';
import { BASE_URL } from '../../api';
import { authenticate, selectCurrentRole, setUserInfo } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/ui/Loader'; 
import { ClerkLoginList } from '../../components/variables/variables';

function LoginForm2() {
    const dispatch = useDispatch();
    const location = useLocation();
    const department = location.state?.department || 'Default Department';

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
    const [userExists, setUserExists] = useState(true);
    const [loading, setLoading] = useState(false);
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const selector = useSelector(selectCurrentRole)
    useEffect(() => {
        // Check if the user is already logged in
        const token = localStorage.getItem('clerkAuthToken');
        // if (token) {
        //     navigate('/login/clerk/deptlist/deptlogin/home');
        // }
        if (selector ==="clerk") {
            navigate('/login/clerk/deptlist/deptlogin/home');
        }
    }, [navigate]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const title = "Login";
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const fields = [
        { name: "email", label: "Email", type: "email" },
        { name: "password", label: "Password", type: "password" },
    ]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("formdata is ", formValues);
        setInvalid(false)
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/login/clerk/${department}`, formValues);
console.log("the response is ",response);
console.log("the role is ",response.data.role);
console.log("the department is ",response.data.result.department);
            // const { data, token } = response.data;
            // const { name, role, department } = data;
            // console.log("the data is ",data);
// console.log(" im in ")
            // // localStorage.setItem("clerkId", clerkId);
            // localStorage.setItem("clerkAuthToken", token);
           
            if (response.data) {
                const role = response.data.role;
                const token = response.data.token;
                const dept = response.data.result.department;
                const uid = response.data.result._id;
                const name = response.data.result.name;
                dispatch(setUserInfo({ Role: role, token: token,Dept:dept,Uid:uid,Name:name }))
                // dispatch(setUserInfo({ user: data, token, Name: name, Role: role }));
                // dispatch(authenticate(true));
                navigate('home');
            }
        } catch (error) {
            // console.log("the msg is ", error.response.data.message)
            if (error.response.data.message ==="Clerk doesn't exist")
            {
                
                setUserExists(false);
                alert("Clerk doesn't exist")
                toast.error(error.response.data.message)
            }
            if (error.response.data.message === "Invalid credentials") {
                console.log("hi invalid ")
                setInvalid(true)
                setInvalidCredentials(true);
                alert("Invalid credentials")
                toast.error(error.response.data.message)
            }
            // console.error("Error submitting form:", error);
            setLoading(false);
        }
    }

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/api/clerk/forgot-password`, { email: forgotPasswordEmail });
            setShowForgotPassword(false);
            toast.success('Password reset instructions sent to your email');
            setForgotPasswordEmail('');

        } catch (error) {
            toast.error('Failed to send password reset email');
        }
    };


    return (
        <>
            {loading &&invalid ? (
                <Loading links={ClerkLoginList} />
            ) : (
        <div>
                        <Navbar links={ClerkLoginList} />
            <ToastContainer position="top-center" autoClose={2000} />
            {fields === "undefined" ? (
                <div>Empty fields</div>
            ) : (
                <div className="flex justify-center items-center h-screen animate-slideFromBottom flex-col ">
                    <div className="bg-zinc-800 p-8 rounded-lg w-96 ">
                        <h2 className="text-white text-2xl mb-6 border-b border-zinc-600 pb-2 flex justify-center" id="title">Clerk Login</h2>

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
                            {/* {!userExists && (
                                <div className="text-red-500 text-center pb-3">
                                    User does not exist
                                </div>
                            )}
                                            {invalidCredentials && (
                                                <div className="text-red-500 text-center pb-3">
                                                    Invalid Credentials
                                                </div>
                                            )} */}
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
        )}
        </>
    );
}

export default LoginForm2;
