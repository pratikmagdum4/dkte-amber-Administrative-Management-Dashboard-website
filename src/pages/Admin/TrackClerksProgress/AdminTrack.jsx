import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { AdminHomeLink } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import ClerkProgress from '../../../components/ui/ClerkProgressComponent';
import Loading from '../../../components/ui/Loader';
const departments = ['CSE', 'CSE-AIML', 'ENTC', 'MECH', 'ELEC', 'TC', 'TT', 'MMTT', 'Diploma', 'MBA'];

const departmentModelMapping = {
    'CSE': ['sponsors', 'engineeringCompanies',],
    'CSE-AIML': ['sponsors', 'engineeringCompanies'],
    'ENTC': ['sponsors', 'engineeringCompanies'],
    'MECH': ['sponsors', 'engineeringCompanies'],
    'ELEC': ['sponsors', 'engineeringCompanies'],
    'TC': ['textileCompanies', 'textilePlacement', 'textileCompaniesNationalCount', 'textilePlacementIndustrialTrainingCount', 'textilePlacementInternationalPlacementCount','textilePlacementPackageOfferedCount'],
    'TT': ['textileCompanies', 'textilePlacement', "textileCompaniesNationalCount", 'textilePlacementIndustrialTrainingCount','textilePlacementInternationalPlacementCount'],
    'MMTT': ['textileCompanies', 'textilePlacement', "textileCompaniesNationalCount", 'textilePlacementIndustrialTrainingCount','textilePlacementInternationalPlacementCount'],
    'Diploma': ['sponsors', 'textileCompanies'],
    'MBA': ['sponsors', 'textileCompanies'],
};

const ProgressTracking = () => {
    const [progressData, setProgressData] = useState({});
    const [activeDepartment, setActiveDepartment] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const fetchAllProgressData = async () => {
            setLoading(true)
            const data = {};
            for (let department of departments) {
                try {
                    const response = await axios.get(`${BASE_URL}/api/clerk/progress/${department}`);
                    setLoading(false)
                    data[department] = response.data;
                    setLoading(false)
                } catch (error) {
                    console.error(`Error fetching progress data for ${department}:`, error);
                    alert(`Error fetching progress data for ${department}`)
                   
                }
            }
            setProgressData(data);
        };

        fetchAllProgressData();
    }, []);

    const toggleDepartment = (department) => {
        setActiveDepartment(activeDepartment === department ? null : department);
    };

    return (
        <>
           
            <>
                {loading ? (<Loading links={AdminHomeLink}/>):( 

                <> <Navbar links={AdminHomeLink} />
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
                                    {departmentModelMapping[dept].includes('sponsors') && (
                                        <>
                                            <ClerkProgress
                                                title="Sponsors"
                                                totalRecords={50} // Update with actual total
                                                filledRecords={progressData[dept]?.sponsors || 0}
                                            />
                                            <ClerkProgress
                                                title="Engineering Companies"
                                                totalRecords={30} // Update with actual total
                                                filledRecords={progressData[dept]?.engineeringCompanies || 0}
                                            />
                                        </>
                                    )}
                                    {departmentModelMapping[dept].includes('textileCompanies') && (
                                        <>
                                            <ClerkProgress
                                                title="Textile Companies (National)"
                                                totalRecords={40} // Update with actual total
                                                filledRecords={progressData[dept]?.textileCompaniesNational || 0}
                                            />
                                            <ClerkProgress
                                                title="Textile Placement Department"
                                                totalRecords={25} // Update with actual total
                                                filledRecords={progressData[dept]?.textilePlacementDepartment || 0}
                                            />
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
        </>
    );
};

export default ProgressTracking;
