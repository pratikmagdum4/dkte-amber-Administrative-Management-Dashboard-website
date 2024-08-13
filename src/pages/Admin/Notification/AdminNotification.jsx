// import React from 'react';
// import AchievementsTable from '../../../components/ui/TableComponent';
// import Navbar from '../../navbar/Navbar';
// import { AdminNavLink, AdminNotificationLink, FacultyAchivements } from '../../../components/variables/variables';
// import { BASE_URL } from '../../../api';

// const AdminNotification = () => {
//     const initialRows = [{ note: '', deadline: ''}];

//     const columnHeaders = [
//         { key: 'note', label: 'Description' },
//         { key: 'deadline', label: 'DeadLine Date' },
//     ];

//     const FetchUrl = `${BASE_URL}/api/adminnotification/getdata`;
//     const SubmitUrl = `${BASE_URL}/api/adminnotification/submit`;
//     const DeleteUrl = `${BASE_URL}/api/adminnotification/`;
//     const UpdateUrl = `${BASE_URL}/api/adminnotification/`;

//     return (
//         <div>
//             <Navbar links={AdminNotificationLink} />
//             <AchievementsTable
//                 initialRows={initialRows}
//                 columnHeaders={columnHeaders}
//                 title="Notifications"
//                 numberOfColumns={2}
//                 SubmitUrl={SubmitUrl}
//                 FetchUrl={FetchUrl}
//                 DeleteUrl={DeleteUrl}
//                 UpdateUrl={UpdateUrl}
//             />
//         </div>
//     );
// };

// export default AdminNotification;

import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../navbar/Navbar';
import { AdminDisplayLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const AdminNotification = () => {
    const [description, setDescription] = useState('');
    const [department, setDepartment] = useState('');
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

            toast.success('Notification sent successfully!');
            setDescription(''); // Clear the description field
            setDepartment(''); // Clear the department selection
        } catch (error) {
            console.error('Error sending notification:', error);
            toast.error('Failed to send notification.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Navbar links={AdminDisplayLink}  />
            <ToastContainer />
            <form onSubmit={handleSendNotification} className="p-4">
                <h2 className="text-center font-bold text-xl mb-4">Send Notification</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Select Department Clerk:</label>
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="" disabled>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="AIDS">AIDS</option>
                        <option value="ELEC">ELEC</option>
                        <option value="ENTC">ENTC</option>
                        <option value="CSE-AIML">CSE-AIML</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="TT">TT</option>
                        <option value="MMTT">MMTT</option>
                        <option value="FT">FT</option>
                        <option value="TC">TC</option>
                        <option value="Diploma">Diploma</option>
                        <option value="MBA">MBA</option>
                        {/* Add more departments as needed */}
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send Notification'}
                </button>
            </form>
        </div>
    );
};

export default AdminNotification;
