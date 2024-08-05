import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminHomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { toast } from 'react-toastify';

const ProgressTracking = () => {
    const TOTAL_RECORDS_Diploma = 45; // Total records for Diploma Clerk
    const TOTAL_RECORDS_MBA = 10; // Total records for Diploma Clerk
    const [progressData, setProgressData] = useState({
        DiplomaClerk: 0,
        MBAClerk:0,
        facultyAchievementPatentGrantCount: 0,
        facultyAchievementBookPublicationCount: 0
    });

    useEffect(() => {
        const fetchProgressData = async () => {
            toast.info("The Data if not visible will be available in a minute");
            try {
                const response = await axios.get(`${BASE_URL}/api/progress`);
                setProgressData(response.data);
            } catch (error) {
                console.error('Error fetching progress data:', error);
            }
        };

        fetchProgressData();
    }, []);

    const getProgressPercentage = (value, total) => {
        return (value / total) * 100;
    };

    const diplomaClerkProgress = getProgressPercentage(progressData.DiplomaClerk, TOTAL_RECORDS_Diploma);
    const mbaClerkProgress = getProgressPercentage(progressData.MBAClerk, TOTAL_RECORDS_MBA);

    return (
        <>
            <Navbar links={AdminHomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Progress Tracking</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-md shadow-sm">
                        <h3 className="text-xl font-bold">Diploma Clerk</h3>
                        <p>Total Records Filled: {progressData.DiplomaClerk}</p>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-blue-500 h-full"
                                style={{ width: `${diplomaClerkProgress}%` }}
                            ></div>
                        </div>
                        <p>{diplomaClerkProgress.toFixed(2)}% completed</p>
                    </div>
                    <div className="p-4 border rounded-md shadow-sm">
                        <h3 className="text-xl font-bold">MBA Clerk</h3>
                        <p>Total Records Filled: {progressData.MBAClerk}</p>
                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div
                                className="bg-blue-500 h-full"
                                style={{ width: `${mbaClerkProgress}%` }}
                            ></div>
                        </div>
                        <p>{mbaClerkProgress.toFixed(2)}% completed</p>
                    </div>
                    <div className="p-4 border rounded-md shadow-sm">
                        <h3 className="text-xl font-bold">Faculty Achievements</h3>
                        <p>Patent Grant Count: {progressData.facultyAchievementPatentGrantCount}</p>
                        <p>Book Publication Count: {progressData.facultyAchievementBookPublicationCount}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressTracking;
