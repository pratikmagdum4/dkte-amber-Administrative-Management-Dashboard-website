import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [
    
    { rank: 1, stdname: '', cgpa: '', dept: 'SyMba' },
    { rank: 2, stdname: '', cgpa: '', dept: 'SyMba' },
    { rank: 3, stdname: '', cgpa: '', dept: 'SyMba' },
    { rank: 4, stdname: '', cgpa: '', dept: 'SyMba' },
    { rank: 5, stdname: '', cgpa: '', dept: 'SyMba' },

];

const MBASecondYearCgpaTables = () => {

    const FetchUrl = `${BASE_URL}/api/mba/get/second`
    const SubmitUrl = `${BASE_URL}/api/mba/submit/second`
    const isMba= true;
    const year = "Second"
    return (
        <div>
            <StudentCgpaFormTable
                title="Second Year MBA "
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
                isMba={isMba}
            />
        </div>
    );
};

export default MBASecondYearCgpaTables;