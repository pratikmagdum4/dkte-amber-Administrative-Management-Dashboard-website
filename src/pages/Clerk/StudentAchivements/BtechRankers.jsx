import React from 'react';
import StudentFormTable from '../../../components/ui/ScoreRankers'
import NavBar from '../../navbar/Navbar';

import '../../../App.css'
const Btech = ({dept}) => {

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
    
    return (
        <>
       <NavBar/>
        <div className=''>

                {dept==="Btech"&&Years.map((item)=>(
                    <StudentFormTable key={item} title={item} dept={dept} />
        ))}
                {dept === "Diploma" && Years1.map((item) => (
                    <StudentFormTable key={item} title={item} dept={dept} />
                ))}
        </div>
        </>
    );
};

export default Btech;
