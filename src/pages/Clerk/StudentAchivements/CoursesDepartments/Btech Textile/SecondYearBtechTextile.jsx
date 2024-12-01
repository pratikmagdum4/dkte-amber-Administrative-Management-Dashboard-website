import React, { useRef } from 'react';
import AchievementsTable from '../../../../../components/ui/TableComponent';
import Navbar from '../../../../navbar/Navbar';
import { ClerkNavLink } from '../../../../../components/variables/variables';
import { BASE_URL } from '../../../../../api';

const initialRows = [
    { rank: '', stdname: '', cgpa: '', dept: '' },
];

const columnHeaders = [
    { key: 'rank', label: 'Rank' },
    { key: 'stdname', label: 'Student Name' },
    { key: 'cgpa', label: 'CGPA' },
];

const stdabroad = true;
const departments = ["tt", "tc", "mmtt", "tp", "ft"];

const SecondYearBtechTextileTables = () => {
    const tableRef = useRef(null);
    const year = "Second";


    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} IsClerk={true} />
            {departments.map(dept => (
                <AchievementsTable
                    key={`${year}-${dept}`}
                    NotDisplayToast={true}
                    stdabroad={stdabroad}
                    initialRows={initialRows}
                    columnHeaders={columnHeaders}
                    title={` ${year.toUpperCase()} Year ${dept.toUpperCase()} DEPARTMENT`}
                    numberOfColumns={4}
                    SubmitUrl={`${BASE_URL}/api/studentscgpa/textile/submit/${year.toLowerCase()}/${dept}`}
                    FetchUrl={`${BASE_URL}/api/studentscgpa/textile/get/${year.toLowerCase()}/${dept}`}
                    DeleteUrl={`${BASE_URL}/api/studentscgpa/textile/${year.toLowerCase()}/${dept}`}
                    UpdateUrl={`${BASE_URL}/api/studentscgpa/textile/${year.toLowerCase()}/${dept}`}
                    ref={tableRef}
                />
            ))}
        </div>
    );
};

export default SecondYearBtechTextileTables;
