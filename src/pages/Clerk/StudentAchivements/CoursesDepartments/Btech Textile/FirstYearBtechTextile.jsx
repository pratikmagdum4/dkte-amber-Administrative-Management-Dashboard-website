import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [
    { rank: 1, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 1, stdname: '', cgpa: '', dept: 'MMTT' },
    { rank: 2, stdname: '', cgpa: '', dept: 'MMTT' },
    { rank: 3, stdname: '', cgpa: '', dept: 'MMTT' },
    { rank: 4, stdname: '', cgpa: '', dept: 'MMTT' },
    { rank: 5, stdname: '', cgpa: '', dept: 'MMTT' },
    { rank: 1, stdname: '', cgpa: '', dept: 'FT' },
    { rank: 2, stdname: '', cgpa: '', dept: 'FT' },
    { rank: 3, stdname: '', cgpa: '', dept: 'FT' },
    { rank: 4, stdname: '', cgpa: '', dept: 'FT' },
    { rank: 5, stdname: '', cgpa: '', dept: 'FT' },
    { rank: 1, stdname: '', cgpa: '', dept: 'TC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TC' },
];

const FirstYearBtechTextileTables = () => {

    const FetchUrl = `${BASE_URL}/api/btechtextcgpa/get/first`
    const SubmitUrl = `${BASE_URL}/api/btechtextcgpa/submit/first`
    const year = "First"
    return (
        <div>
            <StudentCgpaFormTable
                title="First Year BTech Textile Technology"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year = {year}
            />
        </div>
    );
};

export default FirstYearBtechTextileTables;