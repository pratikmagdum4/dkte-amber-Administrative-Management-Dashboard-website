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
const StdAppreciationPrize = () => {


    const FetchUrl = `${BASE_URL}/api/studentachievements/appreciationprize/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/appreciationprize/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/appreciationprize`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/appreciationprize`;


    return (
        <div>
            <Navbar links={StudentAchivements} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title=" STUDENTS APPRECIATOIN PRIZE"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default StdAppreciationPrize;
