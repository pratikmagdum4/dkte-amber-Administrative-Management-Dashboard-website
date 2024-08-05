import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { ClerkNavLink, StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
];

const stdabroad = true;



const StdHigherEducation = () => {
 

    const FetchUrl = `${BASE_URL}/api/studentachievements/higherstudies/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/higherstudies/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/higherstudies`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/higherstudies`;
    return (
        <div>
            <Navbar links={ClerkNavLink} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="SELECTED STUDENTS FOR HIGHER EDUCATION ABROAD"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default StdHigherEducation;
