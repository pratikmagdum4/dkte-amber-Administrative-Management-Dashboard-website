import React from 'react'; import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, TrainingPlacement } from '../../../components/variables/variables';
import { Consultativesalesamico1, Facetofaceamico1 } from '../../../assets';



const TrainingPlacementListing = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`${option}`)
    }
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">Training And Placement Activities</h1>
                <div className="space-y-4 w-full max-w-md">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("textile/report")}>
                        TEXTILE PLACEMENT REPORT
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("engineering/report")}>
                        ENGINEERING PLACEMENT REPORT
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("textile/internationalcompanies")}>
                        TEXTILE PLACEMENT INTERNATIONAL COMPANIES
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("textile/nationalcompanies")}>
                        TEXTILE PLACEMENT NATIONAL COMPANIES
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("engineering/companies")}>
                        ENGINEERING PLACEMENT  COMPANIES
                    </button>

                </div>
                <img src={Consultativesalesamico1} alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};
export default TrainingPlacementListing;
