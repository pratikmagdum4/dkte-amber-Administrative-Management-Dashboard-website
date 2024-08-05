// src/pages/Clerk/ClerkHome/ClerkNotifications.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const ClerkNotification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, note: 'Submit project report', deadline: '2024-08-10' },
        { id: 2, note: 'Attend meeting with advisor', deadline: '2024-08-12' },
        { id: 3, note: 'Complete online course', deadline: '2024-08-15' }
    ]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/adminnotification/getdata`);
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
    }, []);

    return (
        <>
            <Navbar links={ClerkNavLink} />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Notifications</h1>
                <div className="space-y-4">
                    {notifications.length === 0 ? (
                        <h1>No notifications</h1>
                    ) : (
                        notifications.map((notification) => (
                            <div key={notification.id} className="bg-white p-4 rounded shadow">
                                <p className="text-lg font-semibold">{notification.note}</p>
                                <p className="text-sm text-gray-500">Deadline: {notification.deadline}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ClerkNotification;
