import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { StudentAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { name: '', event: '', prize: '', date: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Name of the Student' },
    { key: 'event', label: 'Event' },
    { key: 'prize', label: 'Prize' },
    // { key: 'date', label: 'Date' }, // Example additional column
];

const StudentPaperProject = () => {


    const FetchUrl = `${BASE_URL}/api/studentachievements/paperproject/getdata`;
    const SubmitUrl = `${BASE_URL}/api/studentachievements/paperproject/submit`;
    const DeleteUrl = `${BASE_URL}/api/studentachievements/paperproject`;
    const UpdateUrl = `${BASE_URL}/api/studentachievements/paperproject`;
    return (
        <div>
            <Navbar links={StudentAchivements} />
            <AchievementsTable
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="STUDENTS ACHIEVEMENTS IN PAPER/PROJECT PRESENTATION CONTESTS"
                numberOfColumns={3}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default StudentPaperProject;
