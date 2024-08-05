import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [
    { rank: 1, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CSE' },
    { rank: 1, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CSE AI' },
    { rank: 1, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'ENTC' },
    { rank: 1, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'ELEC' },
    { rank: 1, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 2, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 3, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 4, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 5, stdname: '', cgpa: '', dept: 'MECH' },
    { rank: 1, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 2, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 3, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 4, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 5, stdname: '', cgpa: '', dept: 'AIDS' },
    { rank: 1, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 2, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 3, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 4, stdname: '', cgpa: '', dept: 'CE' },
    { rank: 5, stdname: '', cgpa: '', dept: 'CE' },
];

const FirstYearBtechEngineeringTables = () => {

    const FetchUrl =  `${BASE_URL}/api/btechcgpa/get/first`
    const SubmitUrl =  `${BASE_URL}/api/btechcgpa/submit/first`
    const year = "First"
    
    return (
        <div>
            <StudentCgpaFormTable
                title="First Year BTech"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
            />
        </div>
    );
};

export default FirstYearBtechEngineeringTables;