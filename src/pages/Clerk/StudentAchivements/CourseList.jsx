import { useNavigate } from "react-router-dom";


function CourseList()
{

    const BtechDepartments =[
        "CSE",
        "ENTC",
        "TEXTILTE",
        "AI"
    ]
    const DiplomaDepartments = [
        "CSE",
        "ENTC",
        "TEXTILTE",
        "AI"
    ]
    const navigate = useNavigate();
    function handleClick(option)
    {
        console.log("hi i m inside ")
        let depts = [];
        if(option=="btech"){
            depts = BtechDepartments;
        }
        else if(option=="diploma")
            {
            depts = DiplomaDepartments;
            }
        navigate('/clerklogin/clerkhome/studentachievement/courselist/listing',{
            state:{
                departments: depts,
                course:option
            }
        })
    }
    return (
        <>
        <div>
            <button onClick={()=>handleClick("btech")}>
                Btech
            </button>
                <button onClick={() => handleClick("diploma")} >
                Diploma
            </button>
                <button onClick={() => handleClick("mba") }>
                MBA
            </button>
        </div>
        </>
    )
}

export default CourseList;