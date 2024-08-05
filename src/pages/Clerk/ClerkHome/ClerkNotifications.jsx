import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { format } from 'date-fns';

const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return format(date, 'yyyy-MM-dd '); // Customize the format as needed
};

const ClerkNotification = () => {
    const [notifications, setNotifications] = useState([
      
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
                        notifications.slice().reverse().map((notification) => (
                            <div key={notification.id} className="bg-white p-4 rounded shadow">
                                <p className="text-lg font-semibold">{notification.note}</p>
                                <p className="text-sm text-gray-500">Deadline: {formatDateTime(notification.deadline)}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ClerkNotification;
