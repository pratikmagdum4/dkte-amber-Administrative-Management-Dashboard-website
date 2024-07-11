import { useNavigate } from "react-router-dom";
import Navbar from '../../navbar/Navbar';
import { StudentAchivements } from '../../../components/varialbles/variables';
function CourseList() {
    const BtechDepartments = [
        "CSE",
        "ENTC",
        "TEXTILE",
        "AI"
    ];

    const DiplomaDepartments = [
        "TC",
        "FASHION",
        "TT",
    ];

    const Mbadept = [
        "First Year",
        "Second Year",
    ];

    const navigate = useNavigate();

    function handleClick(option) {
        let depts = [];
        if (option === "btech") {
            depts = BtechDepartments;
        } else if (option === "diploma") {
            depts = DiplomaDepartments;
        } else if (option === "mba") {
            depts = Mbadept;
        }

        const route = option === "mba"
            ? '/clerklogin/clerkhome/studentachievement/courselist/listing/ranktables'
            : '/clerklogin/clerkhome/studentachievement/courselist/listing';

        navigate(route, {
            state: {
                departments: depts,
                course: option
            }
        });
    }

    return (
        <div>
            <Navbar links={StudentAchivements}/>
            <button onClick={() => handleClick("btech")}>
                Btech
            </button>
            <button onClick={() => handleClick("diploma")}>
                Diploma
            </button>
            <button onClick={() => handleClick("mba")}>
                MBA
            </button>
        </div>
    );
}

export default CourseList;
