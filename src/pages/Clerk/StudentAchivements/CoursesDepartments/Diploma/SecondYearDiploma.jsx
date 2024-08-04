import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [

    { rank: 1, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 1, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 1, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'FC' },

];

const SecondYearDiplomaTables = () => {

    const FetchUrl = `${BASE_URL}/api/diploma/get/second`
    const SubmitUrl = `${BASE_URL}/api/diploma/submit/second`
    const year = "Second"


    return (
        <div>
            <StudentCgpaFormTable
                title="Second Year Diploma"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
            />
        </div>
    );

};

export default SecondYearDiplomaTables;