import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';

import { BASE_URL } from '../../../api';
import { generateWordDocument } from '../../../utils/generate';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
const initialRows = [
    { name: '', training: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'training', label: 'Details of Training' },

];
const stdabroad = true;
const FacultyTrainingProgram = () => {
    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/facultyachievements/trainingprogrammes/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/trainingprogrammes/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/trainingprogrammes`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/trainingprogrammes`;

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "TRAINING PROGRAMMES FOR FACULTY IN VACATION",
                rows,
                columnHeaders,
                'Faculty_Training_Program_Vacation'
            );
        }
    };
    return (
        <div>
            <Navbar links={FacultyAchivements} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                NotDisplayToast={true}
                stdabroad={stdabroad}
                initialRows={initialRows}
                columnHeaders={columnHeaders}
                title="TRAINING PROGRAMMES FOR FACULTY IN VACATION "
                numberOfColumns={2}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />
        </div>
    );
};

export default FacultyTrainingProgram;
