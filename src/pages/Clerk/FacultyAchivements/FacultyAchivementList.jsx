import React from 'react'; import { useNavigate } from 'react-router-dom';
const FacultyAchievementLists = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/clerklogin/clerkhome/facultyachievement/${option}`)
    }
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <header className="bg-black text-white p-4 flex justify-between items-center">
                <img src="https://placehold.co/100x50" alt="DKTE Logo" className="h-12" />
                <nav className="flex space-x-4">
                    <span>Amber</span>
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Login</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
            </header>
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">Student</h1>
                <div className="space-y-4 w-full max-w-md">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("paperjournalpub")}>
                       Paper /Journal Publication
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("bookspublish")}>
                       Books Publication
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("paperpresentation")}>
                        Paper Presentation/Conference
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("patentgrant")}>
                        Patent Grant
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("workshop")}>
                       Workshop/STTP/FDP
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("otherspecial")}>
                       OTHER Special
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("trainingprogram")}>
                       Training Program
                    </button>
                </div>
                <img src="https://placehold.co/400x300" alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};
export default FacultyAchievementLists;