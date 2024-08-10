import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },

];
const stdabroad = true;
const FacultyPaperPresentation = () => {

    const FetchUrl = `${BASE_URL}/api/facultyachievements/paperpresentation/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/paperpresentation/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/paperpresentation`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/paperpresentation`;

    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN PAPER PRESENTATION IN NATIONAL/INTERNATIONAL CONFERENCES"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyPaperPresentation;
