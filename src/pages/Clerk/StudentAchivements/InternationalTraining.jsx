import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const StdInternationalTraining = () => {
const FetchUrl = `${BASE_URL}/api/studentachievements/internationaltraining/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/internationaltraining/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/internationaltraining`;

    return (
        <div>
            <Navbar links={StudentAchivements} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS INTERNATIONAL TRAINING ATTENDED/ CERTIFICATION BY STUDENTS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default StdInternationalTraining;
