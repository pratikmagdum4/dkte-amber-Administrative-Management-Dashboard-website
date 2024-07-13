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

];
const stdabroad = true;
const FacultyPaperPresentation = () => {

    const FetchUrl = `${BASE_URL}/api/facultyachievement/paperpresentaion/getData`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievement/paperpresentaion/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievement/paperpresentaion`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievement/paperpresentaion`;
    
    return (
        <div>
            <Navbar FacultyAchivements/>
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
