import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [
    { rank: 1, stdname: '', cgpa: '', dept: 'FyMba' },
    { rank: 2, stdname: '', cgpa: '', dept: 'FyMba' },
    { rank: 3, stdname: '', cgpa: '', dept: 'FyMba' },
    { rank: 4, stdname: '', cgpa: '', dept: 'FyMba' },
    { rank: 5, stdname: '', cgpa: '', dept: 'FyMba' },
];

const MBAFirstYearCgpaTables = () => {

    const FetchUrl = `${BASE_URL}/api/mba/get/first`
    const SubmitUrl = `${BASE_URL}/api/mba/submit/first`
    const year = "First"
    return (
        <div>
            <StudentCgpaFormTable
                title="Second Year MBA "
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
            />
        </div>
    );
};

export default MBAFirstYearCgpaTables;