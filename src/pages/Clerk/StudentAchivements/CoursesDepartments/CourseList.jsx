// import { useNavigate } from "react-router-dom";
// import Navbar from '../../navbar/Navbar';
// import { StudentAchivements } from '../../../components/variables/variables';
// function CourseList() {
//     const BtechDepartments = [
//         "CSE",
//         "ENTC",
//         "TEXTILE",
//         "AI"
//     ];

//     const DiplomaDepartments = [
//         "TC",
//         "FASHION",
//         "TT",
//     ];

//     const Mbadept = [
//         "First Year",
//         "Second Year",
//     ];

//     const navigate = useNavigate();

//     function handleClick(option) {
//         let depts = [];
//         if (option === "btech") {
//             depts = BtechDepartments;
//         } else if (option === "diploma") {
//             depts = DiplomaDepartments;
//         } else if (option === "mba") {
//             depts = Mbadept;
//         }

//         const route = option === "mba"
//             ? '/clerk/home/studentachievement/courselist/listing/ranktables'
//             : '/clerk/home/studentachievement/courselist/listing';

//         navigate(route, {
//             state: {
//                 departments: depts,
//                 course: option
//             }
//         });
//     }

//     return (
//         <div>
//             <Navbar links={StudentAchivements} />
//             <button onClick={() => handleClick("btech")}>
//                 Btech
//             </button>
//             <button onClick={() => handleClick("diploma")}>
//                 Diploma
//             </button>
//             <button onClick={() => handleClick("mba")}>
//                 MBA
//             </button>
//         </div>
//     );
// }

// export default CourseList;
import { useNavigate } from "react-router-dom";
import NavBar from "../../../navbar/Navbar";
import { ClerkNavLink } from "../../../../components/variables/variables";
// import ListingComponent from "../../../components/ui/listingPage";

import { useState } from "react";
import CourseListingComponent from "../../../../components/ui/coursesListYear";
import { Groupdiscussionbro1 } from "../../../../assets";
const CourseList = () => {
    const navigate = useNavigate();
    const [visibleYears, setVisibleYears] = useState(null);

    const buttonNames = [
        { id: 1, label: 'BTech Engineering', option: '/btech', years: 4 },
        { id: 2, label: 'BTech Textile', option: '/textile', years: 4 },
        { id: 3, label: 'Diploma', option: '/diploma', years: 3 },
        { id: 4, label: 'MBA', option: '/mba', years: 2 },
    ];

    const handleToggleYears = (id) => {
        setVisibleYears((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <CourseListingComponent
                buttonNames={buttonNames}
                visibleYears={visibleYears}
                handleToggleYears={handleToggleYears}

            />
           
        </>
    );
}

export default CourseList;

