import React from 'react'; import { useNavigate } from 'react-router-dom';
const TrainingPlacementListing = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/clerklogin/clerkhome/trainingplacement/${option}`)
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
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("textilereport")}>
                       TEXTILE PLACEMENT REPORT 
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("engineeringreport")}>
                        ENGINEERING PLACEMENT REPORT
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("internationalcompanies")}>
                        TEXTILE PLACEMENT INTERNATIONAL COMPANIES
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("nationalcompanies")}>
                        TEXTILE PLACEMENT NATIONAL COMPANIES
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("engineeringcompanies")}>
                        ENGINEERING PLACEMENT  COMPANIES
                    </button>

                </div>
                <img src="https://placehold.co/400x300" alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};
export default TrainingPlacementListing;
