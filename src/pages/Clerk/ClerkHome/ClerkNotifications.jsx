import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';

const ClerkNotification = () => {
    const [notifications, setNotifications] = useState([]);
    const dept = useSelector(selectCurrentDept);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/adminnotification/${dept}/getdata`);
                console.log("Notifications fetched:", response);
                if (Array.isArray(response.data)) {
                    setNotifications(response.data);
                } else {
                    console.error('Expected array but got:', response.data);
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [dept]);

    return (
        <>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fade-in">
                    📢 Notifications
                </h1>
                <div className="space-y-6">
                    {notifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center animate-pulse">
                            <div className="text-center text-gray-600">
                                <p className="text-xl font-semibold">No notifications yet</p>
                                <p className="text-gray-500">We'll keep you posted!</p>
                            </div>
                            <img
                                src="https://via.placeholder.com/150" // Replace with a custom no-data illustration
                                alt="No notifications"
                                className="w-32 h-32 mt-4"
                            />
                        </div>
                    ) : (
                        notifications.slice().reverse().map((notification) => (
                            <div
                                key={notification.id}
                                className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                            >
                                <div className="flex justify-between items-start">
                                    <p className="text-lg font-semibold text-gray-800">
                                        {notification.note}
                                    </p>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 text-sm font-medium rounded">
                                        New
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    {notification.deadline
                                        ? (() => {
                                            try {
                                                return `Deadline: ${format(new Date(notification.deadline), 'yyyy-MM-dd')}`;
                                            } catch {
                                                return 'Invalid deadline format';
                                            }
                                        })()
                                        : 'No deadline provided'}
                                </p>


                                <p className="text-sm text-gray-500 mt-2">
                                    {notification.time
                                     }
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ClerkNotification;
