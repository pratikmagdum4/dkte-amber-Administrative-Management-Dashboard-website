import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ClerkHomePage ()
{
    const navigate = useNavigate();
    const [selectedOption,setSelectedOption]= useState();
    const options =[
        "Student Achievement",
        "Faculty Achievement",
        "Club Report",
        "Main Events",
        "Training Placement",
    ]
    const handleClick=(item)=>{
        setSelectedOption(item);
        navigate(`/clerklogin/clerkhome/${item}`)
    }

    return (
        <>
        <div>
        {/* {options.map((item)=>(
            <button key={item}onClick={handleClick(item)}  >{item}</button>
        ))} */}
                <button onClick={() => handleClick("studentachievement")}>Student Achievement</button>
                <button onClick={() => handleClick("facultyachievement")}>Student Achievement</button>

        </div>
        </>
    )
}

export default ClerkHomePage;