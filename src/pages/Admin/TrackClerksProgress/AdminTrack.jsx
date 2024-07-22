import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminHomeLink, HomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';

const ProgressTracking = () => {
    const [progressData, setProgressData] = useState({
        // imageSubmission: 0,
        facultyAchievementPatentGrantCount: 0,
        facultyAchievementBookPublicationCount:0
        // Add other tables similarly
    });

    useEffect(() => {
        const fetchProgressData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/progress`);
                setProgressData(response.data);
            } catch (error) {
                console.error('Error fetching progress data:', error);
            }
        };

        fetchProgressData();
    }, []);

    return (
        <>
            <Navbar links={AdminHomeLink} />
            <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-6">Progress Tracking</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-md shadow-sm">
                        <h3 className="text-xl font-bold"> FacultyAchievementBookPublicationCount</h3>
                        <p>Total Records: {progressData.facultyAchievementBookPublicationCount}</p>
                    </div>
                    <div className="p-4 border rounded-md shadow-sm">
                        <h3 className="text-xl font-bold">Faculty Achievements</h3>
                        <p>Total Records: {progressData.facultyAchievementPatentGrantCount}</p>
                    </div>
                    {/* Add other tables similarly */}
                </div>
            </div>
        </>
    );
};

export default ProgressTracking;
