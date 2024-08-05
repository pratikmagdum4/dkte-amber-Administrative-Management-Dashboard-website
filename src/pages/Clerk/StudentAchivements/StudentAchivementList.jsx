import React from 'react'; import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { Groupdiscussionbro1 } from '../../../assets';
const StudentAchievementlists = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/login/clerk/home/studentachievement/${option}`)
    }
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={ClerkNavLink} />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">Student</h1>
                <div className="space-y-4 w-full max-w-md">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("courselist")}>
                        Studnet Rank CGPA
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("paperproject")}>
                        Studnet Achievement in Paper/Project
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("exams")}>
                        Special Achievement in GATE/TOEFL/NIFT/GRE
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("higherstudies")}>
                        Selected for Higher Education
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("appreciationprize")}>
                        Appreciation Prize
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("internationaltraining")}>
                        International Training
                    </button>
                </div>
                <img src={Groupdiscussionbro1} alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};
export default StudentAchievementlists;
