import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { FacultyAchivements, LoginNavLink } from '../../components/variables/variables';
import { Groupdiscussionbro1 } from '../../assets';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authenticate, setUserInfo } from '../../redux/auth.js';
import axios from 'axios';
import { BASE_URL } from '../../api/index.js';
import Loader from '../../components/ui/Loader.jsx';

const ClerkSignupPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        department: '',
    });
    const [showPassword, setShowPassword] = useState(false); // For toggling password visibility

    const departments = [
        "CSE", "CSE-AIML", "AIDS", "ENTC", "ELEC", "MECH", "CIVIL",
        "TT", "MMTT", "FT", "TC", "Diploma", "MBA"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Email validation using regex
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Phone number validation: must be 10 digits
    const validatePhoneNumber = (phoneNumber) => {
        const re = /^[0-9]{10}$/;
        return re.test(phoneNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("dfskjaj",formValues)


        // Validate form fields
        if (!validateEmail(formValues.email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (!validatePhoneNumber(formValues.phoneNumber)) {
            toast.error("Please enter a valid 10-digit phone number.");
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (formValues.password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            alert("Password must be at least 6 characters long.");
            return;
        }
        console.log("there ")
        setLoading(true);
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/signup/clerk`, formValues);
            if (response.data) {
                const { id: clerkId, token } = response.data;
                localStorage.setItem("clerkId", clerkId);
                localStorage.setItem("clerkAuthToken", token);
                setIsSubmitting(false);
                toast.success("Signup successful!");
                dispatch(authenticate(true));
                navigate('/login/clerk/deptlist');
            }
        } catch (error) {
            setIsSubmitting(false);
            alert("Error Submitting Form, Please try again in a minute.");
            setLoading(false);
            console.error("Error submitting form:", error);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <>
            {loading ? (
                <Loader links={LoginNavLink} />
            ) : (
                <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col mt-14">
                    <Navbar links={LoginNavLink} />
                    <div className="flex justify-center items-center flex-grow mt-10">
                        <div className="bg-zinc-800 dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Clerk Sign Up</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-100">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-100">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-100">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formValues.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleShowPassword}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-100">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-100">Department</label>
                                    <select
                                        name="department"
                                        value={formValues.department}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                    >
                                        <option value="" disabled>Select your department</option>
                                        {departments.map((dept, index) => (
                                            <option key={index} value={dept}>{dept}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Signing you up...' : 'Sign Up'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={Groupdiscussionbro1} alt="Group discussion illustration" className="w-full mt-8" />
                </div>
            )}
        </>
    );
};

export default ClerkSignupPage;
