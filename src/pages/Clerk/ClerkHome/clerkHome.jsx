import React from 'react'; import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { ClerkLink } from '../../../components/varialbles/variables';



const ClerkHome = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/clerk/home/${option}`)
    }
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={ClerkLink} />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">Select Category </h1>

                <div className="space-y-4 w-full max-w-md">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("studentachievement")}>
                        Student Achievements
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("facultyachievement")}>
                        Faculty Achievements
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("clubreports")}>
                        Club Reports
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("mainevents")}>
                        Main Events
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("trainingplacement")}>
                        Reports on Training & Placement Activities
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("sponsorlist")}>
                        Sponsors List
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("staffmembers")}>
                        Staff Members
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("upgraduation")}>
                        Upgraduation
                    </button>

                </div>
                {/* <img src="https://placehold.co/400x300" alt="Group of students" className="mt-8" /> */}
            </main>
        </div>
    );  
};
export default ClerkHome;
