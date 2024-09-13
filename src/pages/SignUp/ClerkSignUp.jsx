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
    const [userExists, setUserExists] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        department: '',

    });

    const departments = [
        "CSE", "CSE-AIML", "AIDS", "ENTC", "ELEC", "MECH", "CIVIL",
        "TT", "MMTT", "FT", "TC", "Diploma", "MBA"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        ("the loading is ", loading)
        e.preventDefault();
        try {
            //  Axios POST    
            const response = await axios.post(`${BASE_URL}/api/signup/clerk`, formValues);
            ("THe msg is ", response.msg);
            if (response.msg == "User does not exist") {
                ("thoadign")
                toast.error(response.msg);
            }
            const { id: clerkId, name, role, token } = response.data;
            // const { id: adminId, name, role } = data;
            const adminAuthToken = token;
            localStorage.setItem("clerkId", clerkId);
            localStorage.setItem("clerkAuthToken", adminAuthToken);
            ("clerkId is fro mlocal", localStorage.getItem("clerkId"));
            ("clerkAuthToken is from local", localStorage.getItem("clerkAuthToken"));

            if (response.data) {
                toast.success("Login successful!");
                ("data is", response.data.data)
                dispatch(authenticate(true));
                // dispatch(setUserInfo({ user: response.data.data, token, Uid: response.data.data.id, Name: response.data.data.name, Role: response.data.data.role }));
                alert("Signup successful")
                navigate('/login/clerk/deptlist');
                ("stored i guess ")


            } else {
                setUserExists(false);
            }


        } catch (error) {

            alert("Error Submitting Form ,Please try again in a minute")

            setLoading(false);
            // if (error.response.data.msg === "User does not exist") {
            //     setUserExists(false)
            //     toast.error(error.response.data.msg);
            // }


            console.error("Error submitting form:", error);
            // toast.error("Wrong credentials. Please try again.");
            //  error
        }
    };

    return (
        <>
            {(loading) ? (
                <Loader links={LoginNavLink} />
            ) : (


                <div className="min-h-screen bg-white dark:bg-zinc-900 flex flex-col mt-14">
                        <Navbar links={LoginNavLink} />
                    <div className="flex justify-center items-center flex-grow mt-10">
                        <div className="bg-zinc-800 dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                            <h2 className="text-2xl font-bold text-center text-gray-100  mb-6">Clerk Sign Up</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block  text-gray-100">Name</label>
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
                                    <label className="block text-gray-100 dark:text-gray-300">Email</label>
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
                                    <label className="block text-gray-100 dark:text-gray-300">Password</label>
                                    <input
                                        type="text"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-100 dark:text-gray-300">Phone Number</label>
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
                                    <label className="block text-gray-100 dark:text-gray-300">Department</label>
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
                                {/* <div>
                            <label className="block text-gray-100 dark:text-gray-300">ID Card</label>
                            <input
                                type="text"
                                name="idCard"
                                value={formValues.idCard}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg dark:bg-zinc-700 dark:text-gray-300 focus:outline-none focus:border-yellow-500"
                            />
                        </div> */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    >
                                        Sign Up
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
