import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/varialbles/variables';
import { BASE_URL } from '../../../api';
const initialRows = [
    { srno: '', info: '' },
];

const columnHeaders = [
    { key: 'srno', label: 'Sr.No.' },
    { key: 'info', label: 'Description' },
    // { key: 'prize', label: 'Prize' },
    // { key: 'date', label: 'Date' }, // Example additional column
];
const stdabroad = true;
const FacultyPaperJournalPublications = () => {
    
    const FetchUrl = `${BASE_URL}/api/facultyachievementspaperpublication/getData`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievementspaperpublication/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievementspaperpublication`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievementspaperpublication`;

    return (
        <div>
            <Navbar links={FacultyAchivements}/>
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
