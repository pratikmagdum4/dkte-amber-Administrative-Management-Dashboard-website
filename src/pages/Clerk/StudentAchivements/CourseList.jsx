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
import Navbar from "../../navbar/Navbar";
import { ClerkLink } from "../../../components/variables/variables";
import ListingComponent from "../../../components/ui/listingPage";
const CourseList = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/clerk/home/${option}`)
    }
    const buttonNames = [
        { id: 1, label: 'Btech', option: 'achievement1' },
        { id: 2, label: 'Diploma', option: 'achievement2' },
        { id: 3, label: 'MBA', option: 'achievement3' },
    ];
    return (
        <>
            <ListingComponent buttonNames={buttonNames} />
        </>
    );
}

export default CourseList;