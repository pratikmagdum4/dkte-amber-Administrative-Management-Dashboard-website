import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiBell } from "react-icons/fi";
import { BASE_URL } from "../../../api";
import Navbar from "../../navbar/Navbar";
import { AdminDisplayLink } from "../../../components/variables/variables";

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch notifications from the server
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/adminnotification/getdata`);
                console.log("The noti data is",response)
                setNotifications(response.data); // Adjust based on the API response structure
                setLoading(false);
            } catch (error) {
                console.error("Error fetching notifications:", error);
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <>
       <Navbar links={AdminDisplayLink}/>
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6 py-20">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 animate-pulse">
                    <FiBell className="inline-block text-yellow-500 mr-2" />
                    Admin Notifications
                </h1>

                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div>
                ) : notifications.length === 0 ? (
                    <p className="text-center text-gray-500">No notifications available.</p>
                ) : (
                    <div className="space-y-4">
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="p-4 bg-gradient-to-r from-indigo-300 to-purple-300 shadow-md rounded-lg transform transition duration-300 hover:scale-105"
                            >
                                <h2 className="text-xl font-semibold text-gray-700">
                                    {notification.dept}
                                </h2>
                                <p className="text-gray-600 mt-1">{notification.note}</p>
                                <div className="text-sm text-gray-500 mt-2">
                                    <span className="font-medium">Date:</span> {notification.date}
                                    {" • "}
                                    <span className="font-medium">Time:</span> {notification.time}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="text-center mt-6">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => window.location.reload()}
                    >
                        Refresh Notifications
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default NotificationPage;

