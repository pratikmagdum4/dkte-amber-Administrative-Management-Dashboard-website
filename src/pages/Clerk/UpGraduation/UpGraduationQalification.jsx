import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { UpGraduation } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', name: '', designation: '', course: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'designation', label: 'Designation' },
    { key: 'course', label: 'Name of the Course' },

];

const UpGraduationQalificationList = () => {

    const FetchUrl = `${BASE_URL}/api/upgraduation/getdata`;
    const SubmitUrl = `${BASE_URL}/api/upgraduation/submit`;
    const DeleteUrl = `${BASE_URL}/api/upgraduation`;
    const UpdateUrl = `${BASE_URL}/api/upgraduation`;
  
    return (
        <div>
            <Navbar links={UpGraduation} />
            <h1>PH.D. Awarded :-</h1>
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="CONGRATULATION ON UPGRADATION OF QUALIFICATION 2023-24"
                numberOfColumns={4}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default UpGraduationQalificationList;
