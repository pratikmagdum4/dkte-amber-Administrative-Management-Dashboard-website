import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminHomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ClerkProgress from '../../../components/ui/ClerkProgressComponent';
import Loading from '../../../components/ui/Loader';

const departments = ['CSE', 'CSE-AIML','AIDS', 'ENTC', 'MECH', 'ELEC', 'TC', 'TT', 'MMTT', 'Diploma', 'MBA'];

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

    // useEffect(() => {
        const fetchAllProgressData = async () => {
            setLoading(true);
            const data = {};
            
                try {
                    const data = {};
                    for (const dep of departments) {
                        const response = await axios.get(`${BASE_URL}/api/clerk/progress/${dep}`);
                        console.log(`Response for ${dep}:`, response.data);
                        data[dep] = response.data || {}; // Default to empty object
                    }
                    setProgressData(data);
                    // Store the fetched data in localStorage or sessionStorage
                    localStorage.setItem("progressData", JSON.stringify(data));
                    setLoading(false); // Stop loading once data is fetched
                } catch (error) {
                    console.error("Error fetching progress data:", error.message);
                    setLoading(false); // Stop loading in case of error
                }
            
            setProgressData(data);
            setLoading(false);
        };

    //     if (!getData) {
    //         fetchAllProgressData();
    //         setGetData(true);
    //     }
    // }, [getData]);
    useEffect(() => {
        const storedData = localStorage.getItem("progressData");

        if (storedData) {
            setProgressData(JSON.parse(storedData)); // Use the stored data if it exists
            setLoading(false); // Stop loading if data is found
        } else {
            fetchAllProgressData(); // Fetch data if not available in storage
        }
    }, []);
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
                                                            {/* Faculty Achievements Progress */}
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
                                                            {/* Student Achievements Progress */}
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

                                                    {activeCategory === 'Student CGPA Ranks' && (
                                                        <>
                                                            {/* Student CGPA Ranks Progress */}
                                                            <ClerkProgress
                                                                title="CGPA Ranks"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.cgpaRanks || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Engineering Companies' && (
                                                        <>
                                                            {/* Engineering Companies Progress */}
                                                            <ClerkProgress
                                                                title="Engineering Companies"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.engineeringCompanies || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Industrial Training"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.industrialTraining || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Textile Companies' && (
                                                        <>
                                                            {/* Textile Companies Progress */}
                                                            <ClerkProgress
                                                                title="National Textile Companies"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.textileCompaniesNational || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="International Textile Companies"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.textileCompaniesInternational || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Events' && (
                                                        <>
                                                            {/* Events Progress */}
                                                            <ClerkProgress
                                                                title="Alumni Meet"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.alumniMeet || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Tech Symposium"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.techSymposium || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Career Fair"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.careerFair || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Club Reports' && (
                                                        <>
                                                            {/* Club Reports Progress */}
                                                            <ClerkProgress
                                                                title="Club Reports ACSES"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.clubReportsAcses || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Club Reports COMSA"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.clubReportsComsa || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Club Reports EESA"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.clubReportsEesa || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Staff Members' && (
                                                        <>
                                                            {/* Staff Members Progress */}
                                                            <ClerkProgress
                                                                title="Staff Members Count"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.staffMembersCount || 0}
                                                            />
                                                            <ClerkProgress
                                                                title="Staff Members Categories"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.staffMembersCategories || 0}
                                                            />
                                                        </>
                                                    )}

                                                    {activeCategory === 'Other' && (
                                                        <>
                                                            {/* Other Progress */}
                                                            <ClerkProgress
                                                                title="Miscellaneous Category"
                                                                totalRecords={30}
                                                                filledRecords={progressData[dept]?.other || 0}
                                                            />
                                                        </>
                                                    )}
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
