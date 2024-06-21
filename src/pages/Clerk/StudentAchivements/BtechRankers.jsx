import React from 'react';
import ScoreRankers from '../../../components/ui/ScoreRankers'
import NavBar from '../../navbar/Navbar';
import '../../../index.css'
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
        <div>
            <h1>Branch A</h1>
            <ScoreRankers title={branchAStudents} />
            <h1>Branch B23</h1>
            <ScoreRankers title={branchBStudents} />
             <h1>Branch B</h1>
            <ScoreRankers title={branchBStudents} />
            <h1>Branch B</h1> 
             <ScoreRankers title={branchBStudents} /> 
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
