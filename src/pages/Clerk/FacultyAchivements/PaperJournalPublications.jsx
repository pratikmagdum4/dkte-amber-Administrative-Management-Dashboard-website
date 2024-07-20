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
const FacultyPaperJournalPublications = () => {

    const FetchUrl = `${BASE_URL}/api/facultyachievements/paperpublication/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/paperpublication/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/paperpublication`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/paperpublication`;

    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN PAPER PUBLICATION IN INTERNATIONAL AND NATIONAL JOURNALS"
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyPaperJournalPublications;
