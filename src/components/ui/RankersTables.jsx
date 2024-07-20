import React from 'react';
import StudentFormTable from './ScoreRankers'
import NavBar from '../../pages/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import '../../App.css'
//import { HomeLink } from '../variables/variables';
const RankersTables = () => {

    const location = useLocation();
    const course = location.state && location.state.course;
    console.log("The course is ", course)
    let dept = location.state && location.state.dept;

    // let Years = [];
    const Years = [
        "First",
        "Second",
        "Third",
        "Final",
    ];
    const Years1 = [
        "First",
        "Second",
        "Third",
    ];
    const Years3 = [
        "First",
        "Second",

    ];

    return (
        <>

            <div className=''>

                {course == "btech" && Years.map((item) => (
                    <StudentFormTable key={item} title={item} dept={dept} />
                ))}
                {course == "diploma" && Years1.map((item) => (
                    <StudentFormTable key={item} title={item} dept={dept} />
                ))}
                {course == "mba" && Years3.map((item) => (
                    <StudentFormTable key={item} title={item} dept={dept} />
                ))}
            </div>
        </>
    );
};

export default RankersTables;
