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
];

const FirstYearBtechTextileTables = () => {

    const FetchUrl = `${BASE_URL}/api/btechtextcgpa/get/first`
    const SubmitUrl = `${BASE_URL}/api/btechtexcgpa/submit/first`

    return (
        <div>
            <StudentCgpaFormTable
                title="First Year BTech Textile"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
            />
        </div>
    );
};

export default FirstYearBtechTextileTables;