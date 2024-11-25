import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../navbar/Navbar";
import { AdminDisplayLink } from "../../../components/variables/variables";
import { BASE_URL } from "../../../api";

const AdminNotification = () => {
    const [description, setDescription] = useState("");
    const [department, setDepartment] = useState("");
    const [deadline, setDeadline] = useState(null); // For deadline selection
    const [isLoading, setIsLoading] = useState(false);

    const handleSendNotification = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // API call to send the notification
            await axios.post(`${BASE_URL}/api/admin/clerk/send-notification`, {
                description,
                department,
            });

            const dept = department;
            const note = description;
            const now = new Date();
            const date = now.toLocaleDateString("en-IN");
            const time = now.toLocaleTimeString("en-IN", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });

            await axios.post(`${BASE_URL}/api/adminnotification/submit`, {
                dept,
                note,
                date,
                time,
                deadline: deadline ? deadline.toISOString() : null, // Include deadline if selected
            });

            toast.success("Notification sent successfully!");
            setDescription("");
            setDepartment("");
            setDeadline(null);
        } catch (error) {
            console.error("Error sending notification:", error);
            toast.error("Failed to send notification.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
            <Navbar links={AdminDisplayLink} />
            <ToastContainer />

            <div className="flex flex-col items-center py-20">
                <form
                    onSubmit={handleSendNotification}
                    className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 animate-fade-in-up"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        Send Notification
                    </h2>

                    {/* Description Input */}
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2">
                            Description:
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Enter the notification description..."
                            required
                        ></textarea>
                    </div>

                    {/* Department Dropdown */}
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2">
                            Select Department Clerk:
                        </label>
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Select Department
                            </option>
                            <option value="CSE">CSE</option>
                            <option value="AIDS">AIDS</option>
                            <option value="ELEC">ELEC</option>
                            <option value="ENTC">ENTC</option>
                            <option value="CSE-AIML">CSE-AIML</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                            <option value="TT">TT</option>
                            <option value="MMTT">MMTT</option>
                            <option value="FT">FT</option>
                            <option value="TC">TC</option>
                            <option value="Diploma">Diploma</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </div>

                    {/* Deadline Picker */}
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2">
                            Select Deadline (optional):
                        </label>
                        <DatePicker
                            selected={deadline}
                            onChange={(date) => setDeadline(date)}
                            dateFormat="yyyy-MM-dd"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholderText="Choose a deadline..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full py-3 rounded-lg font-medium text-white transition-transform duration-300 ${isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 transform hover:scale-105"
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send Notification"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminNotification;
