import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';

import { BASE_URL } from '../../../api';
const initialRows = [
    { name: '', workshopname: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'workshopname', label: 'Name of Workshop/STTP/FDP' },

];
const stdabroad = true;
const FacultyWorkShop = () => {

    const FetchUrl = `${BASE_URL}/api/facultyachievements/workshop/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/workshop/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/workshop`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/workshop`;
    return (
        <div>
            <Navbar FacultyAchivements />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="FACULTY ACHIEVEMENTS IN WORKSHOP/STTP/FDP "
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyWorkShop;
