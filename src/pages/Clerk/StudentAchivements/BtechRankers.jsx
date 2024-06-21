import React from 'react';
import StudentFormTable from '../../../components/ui/ScoreRankers'
import NavBar from '../../navbar/Navbar';
// import '../../../index.css'
import '../../../App.css'
const Btech = () => {
    const branchAStudents = [
       "CSE"
    ];

    const branchBStudents = [
        "ENTC"
    ];

    return (
        <>
       <NavBar/>
        <div className=''>
            <h1>Branch A</h1>
                <StudentFormTable title={branchAStudents} />
            <h1>Branch B23</h1>
                <StudentFormTable title={branchBStudents} />
             <h1>Branch B</h1>
                <StudentFormTable title={branchBStudents} />
            <h1>Branch B</h1> 
                <StudentFormTable title={branchBStudents} /> 
            {/* <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} /> */}
        </div>
        </>
    );
};

export default Btech;
