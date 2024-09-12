import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminHomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ClerkProgress from '../../../components/ui/ClerkProgressComponent';
import Loading from '../../../components/ui/Loader';

const departments = ['CSE', 'CSE-AIML', 'ENTC', 'MECH', 'ELEC', 'TC', 'TT', 'MMTT', 'Diploma', 'MBA'];

const categories = [
    'Faculty Achievements', 'Student Achievements', 'Student CGPA Ranks', 'Engineering Companies',
    'Textile Companies', 'Events', 'Club Reports', 'Staff Members', 'Other'
];

const ProgressTracking = () => {
    const [progressData, setProgressData] = useState({});
    const [activeDepartment, setActiveDepartment] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [getData, setGetData] = useState(false);

    useEffect(() => {
        const fetchAllProgressData = async () => {
            setLoading(true);
            const data = {};
            for (let department of departments) {
                try {
                    const response = await axios.get(`${BASE_URL}/api/clerk/progress/${department}`);
                    data[department] = response.data;
                } catch (error) {
                    console.error(`Error fetching progress data for ${department}:`, error);
                    alert(`Error fetching progress data for ${department}`);
                }
            }
            setProgressData(data);
            setLoading(false);
        };

        if (!getData) {
            fetchAllProgressData();
            setGetData(true);
        }
    }, [getData]);

    const toggleDepartment = (department) => {
        setActiveDepartment(activeDepartment === department ? null : department);
        setActiveCategory(null);
    };

    const selectCategory = (category) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    return (
        <>
            {loading ? (
                <Loading links={AdminHomeLink} />
            ) : (
                <>
                    <Navbar links={AdminHomeLink} />
                    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
                        <h2 className="text-2xl font-bold mb-6">Clerk Progress Tracking</h2>
                        <div className="space-y-4">
                            {departments.map((dept) => (
                                <div key={dept}>
                                    <h3
                                        className="text-xl font-bold cursor-pointer"
                                        onClick={() => toggleDepartment(dept)}
                                    >
                                        {dept} Clerk Progress
                                    </h3>

                                    {activeDepartment === dept && (
                                        <>
                                            <div className="mt-4">
                                                <h4 className="text-lg font-semibold mb-2">Select Category:</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                    {categories.map((category) => (
                                                        <button
                                                            key={category}
                                                            className={`px-4 py-2 rounded-md ${activeCategory === category
                                                                    ? 'bg-blue-500 text-white'
                                                                    : 'bg-gray-200'
                                                                }`}
                                                            onClick={() => selectCategory(category)}
                                                        >
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {activeCategory && (
                                                <>
                                                    <h4 className="mt-4 text-lg font-semibold">
                                                        {activeCategory} Progress
                                                    </h4>

                                                    {/* Display data based on selected category */}
                                                    {activeCategory === 'Faculty Achievements' && (
                                                        <>
                                                            <ClerkProgress
                                                                title="Faculty Achievement Book Publication"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementBookPublication || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Faculty Achievement Other Special"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementOtherSpecial || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Faculty Achievement Paper Presentation"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementPaperPresentation || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Faculty Achievement Patent Grant"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementPatentGrant || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Faculty Achievement Training Programmes"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementTrainingProgrammes || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Faculty Achievement Workshop"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.facultyAchievementWorkshop || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Student Achievements' && (
                                                        <>
                                                            <ClerkProgress
                                                                title="Student Achievement Appreciation Prize"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementAppreciationPrize || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Higher Studies"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementHigherStudies || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement International Training"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementInternationalTraining || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Paper Project"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementPaperProject || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Special Achievements Gate"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementSpecialAchievementsGate || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Special Achievements GRE"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementSpecialAchievementsGre || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Special Achievements NIFT"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementSpecialAchievementsNift || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Student Achievement Special Achievements TOEFL"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.studentAchievementSpecialAchievementsToefl || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {/* Add similar blocks for other categories */}
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProgressTracking;
