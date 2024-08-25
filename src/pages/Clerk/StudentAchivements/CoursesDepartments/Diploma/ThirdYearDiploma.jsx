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
const departments = ["tt", "tm", "fc"];

const FirstYearBtechTextileTables = () => {
    const tableRef = useRef(null);
    const year = "Third";


    return (
        <div className='mt-14'>
            <Navbar links={ClerkNavLink} />
            {departments.map(dept => (
                <AchievementsTable
                    key={`${year}-${dept}`}
                    NotDisplayToast={true}
                    stdabroad={stdabroad}
                    initialRows={initialRows}
                    columnHeaders={columnHeaders}
                    title={` ${year.toUpperCase()} Year ${dept.toUpperCase()} DEPARTMENT`}
                    numberOfColumns={4}
                    SubmitUrl={`${BASE_URL}/api/studentscgpa/diploma/submit/${year.toLowerCase()}/${dept}`}
                    FetchUrl={`${BASE_URL}/api/studentscgpa/diploma/get/${year.toLowerCase()}/${dept}`}
                    DeleteUrl={`${BASE_URL}/api/studentscgpa/diploma/${year.toLowerCase()}/${dept}`}
                    UpdateUrl={`${BASE_URL}/api/studentscgpa/diploma/${year.toLowerCase()}/${dept}`}
                    ref={tableRef}
                />
            ))}
        </div>
    );
};

export default FirstYearBtechTextileTables;
