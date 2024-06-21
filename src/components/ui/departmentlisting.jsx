import { useLocation, useNavigate } from "react-router-dom"


function DepartmentListing()
{
    const navigate = useNavigate();
    let location = useLocation();
    let departments =[]
    const course = location.state&&location.state.course
    departments = location.state&&location.state.departments;

    function handleclick(item){
        console.log(location.state.departments);

        navigate('/clerklogin/clerkhome/studentachievement/courselist/listing/ranktables', {
            state: {
                department: item,
                course: course
            }
        });

    }
    return (
        <>
        <div>
            
        {departments.map((item)=>(
            <button key={item} onClick={() => handleclick(item)}>
                {item}
            </button>
        ))}
        </div>
        </>
    )
}

export default DepartmentListing;