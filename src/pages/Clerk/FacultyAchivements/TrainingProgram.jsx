import React from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';

import { BASE_URL } from '../../../api';
const initialRows = [
    { name: '', training: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'training', label: 'Details of Training' },

];
const stdabroad = true;
const FacultyTrainingProgram = () => {

    const FetchUrl = `${BASE_URL}/api/facultyachievement/trainingprogrammes/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievement/trainingprogrammes/submit`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievement/trainingprogrammes`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievement/trainingprogrammes`;
    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <AchievementsTable
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TRAINING PROGRAMMES FOR FACULTY IN VACATION "
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
            />
        </div>
    );
};

export default FacultyTrainingProgram;
