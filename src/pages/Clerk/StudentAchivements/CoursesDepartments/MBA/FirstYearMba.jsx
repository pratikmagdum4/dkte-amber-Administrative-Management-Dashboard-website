

import React, { useRef } from 'react';
import AchievementsTable from '../../../../../components/ui/TableComponent';
import Navbar from '../../../../navbar/Navbar';
import { ClerkNavLink } from '../../../../../components/variables/variables';
import { BASE_URL } from '../../../../../api';

const initialRows = [
    { rank: '', stdname: '', cgpa: '' },
];

const columnHeaders = [
    { key: 'rank', label: 'Rank' },
    { key: 'stdname', label: 'Student Name' },
    { key: 'cgpa', label: 'CGPA' },
];

const stdabroad = true;

const MBAFirstYearCgpaTables = () => {
    const tableRef = useRef(null);
    const year = "First";

    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            <AchievementsTable
                key={year}
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title={`MBA ${year.toUpperCase()} Year CGPA Data`}
                numberOfColumns={3}
                SubmitUrl={`${BASE_URL}/api/studentscgpa/mba/submit/${year.toLowerCase()}`}
                FetchUrl={`${BASE_URL}/api/studentscgpa/mba/get/${year.toLowerCase()}`}
                DeleteUrl={`${BASE_URL}/api/studentscgpa/mba/delete/${year.toLowerCase()}`}
                UpdateUrl={`${BASE_URL}/api/studentscgpa/mba/update/${year.toLowerCase()}`}
                ref={tableRef}
            />
        </div>
    );
};

export default MBAFirstYearCgpaTables;
