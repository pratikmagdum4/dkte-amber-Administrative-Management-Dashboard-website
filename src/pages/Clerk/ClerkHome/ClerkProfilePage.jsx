import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../../navbar/Navbar';
import { ProfileImage, CameraIcon } from '@/assets/index.js';
import {  ClerkNavLink } from '../../../components/variables/variables';
import { selectCurrentName, selectCurrentToken, selectCurrentUid } from '../../../redux/auth';
import { fileInputClasses } from '@/components/styles/sharedStyles';
import { BASE_URL } from '@/api';

const ProfileDetailsForm = () => {
    const clerkId = useSelector(selectCurrentUid);
    const token = useSelector(selectCurrentToken);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });

    // Fetch admin data on component mount
    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/data/clerk/${clerkId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    setFormData({
                        name: response.data.name || '',
                        phone: response.data.phoneNumber || '',
                        email: response.data.email || '',
                        password: '' // Keep password field empty
                    });
                } else {
                    console.error('Failed to fetch admin data');
                }
            } catch (error) {
                console.error('Error fetching admin data:', error);
            }
        };

        fetchAdminData();
    }, [clerkId, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/api/data/clerk/${clerkId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Profile details updated successfully!');
            } else {
                alert('Failed to update profile details. Please try again.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating profile details. Please try again later.');
        }
    };


    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-6">Update Profile Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {['name', 'phone', 'email', 'password'].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="col-span-2 mb-2 text-zinc-500">
                                Enter {field.charAt(0).toUpperCase() + field.slice(1)}:
                            </label>
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                className="border p-2 rounded w-full"
                                value={formData[field]}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold mt-2 py-2 px-4 rounded">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

const UpdateIDCard = () => {
    const [idCardFile, setIdCardFile] = useState(null);
    const clerkId = useSelector(selectCurrentUid);
    const token = useSelector(selectCurrentToken);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setIdCardFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('idCard', idCardFile);

            const response = await fetch(`${BASE_URL}/api/clerk/${clerkId}/upload`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            if (response.ok) {
                alert('ID Card uploaded successfully');
            } else {
                alert('Failed to upload ID Card');
            }
        } catch (error) {
            console.error('Error uploading ID Card: ', error);
            alert('An error occurred while uploading the ID Card.');
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Update ID Card</h3>
            <form onSubmit={handleSubmit} className="flex items-center">
                <input type="file" onChange={handleFileChange} className={fileInputClasses} />
                <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                    Upload ID Card
                </button>
            </form>
        </div>
    );
};

const ProfilePicture = () => {
    const [selectedPicture, setSelectedPicture] = useState(null);
    const handlePictureChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.data.result) {
                    setSelectedPicture(response.data.result);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }

            const reader = new FileReader();
            reader.onload = () => {
                setSelectedPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Profile Picture</h3>
            <div className="relative">
                <img src={selectedPicture || ProfileImage} alt="Profile Picture" className="rounded-full mx-auto" />
                <label htmlFor="profilePicture" className="absolute bottom-0 right-0 bg-zinc-700 text-white p-2 rounded-full cursor-pointer">
                    <img src={CameraIcon} alt="Camera Icon" className="w-6 h-6" />
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                        onChange={handlePictureChange}
                    />
                </label>
            </div>
        </div>
    );
};

const ClerkProfile = () => {
    const profileLink = 2;
    const drop = true;
    const UserName = useSelector(selectCurrentName);

    return (
        <>
            <Navbar links={ClerkNavLink} />
            <div className="max-w-4xl mx-auto p-5">
                <div className="flex items-center bg-yellow-400 p-4 rounded-lg mb-6 mt-16">
                    <img src={ProfileImage} alt="User Profile" className="rounded-full w-10 h-10" />
                    <span className="ml-3 font-semibold text-lg">{UserName}</span>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <ProfilePicture />
                    <UpdateIDCard />
                </div> */}
                <ProfileDetailsForm />
            </div>
        </>
    );
};

export default ClerkProfile;
