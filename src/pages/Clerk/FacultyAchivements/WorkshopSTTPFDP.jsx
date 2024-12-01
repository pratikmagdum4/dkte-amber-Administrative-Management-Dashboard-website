import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';

import { BASE_URL } from '../../../api';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { generateWordDocument } from '../../../utils/generate';
const initialRows = [
    { name: '', workshopname: '' },
];

const columnHeaders = [
    { key: 'name', label: 'Faculty Name' },
    { key: 'workshopname', label: 'Name of Workshop/STTP/FDP' },

];
const stdabroad = true;
const FacultyWorkShop = () => {

    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept);


    const FetchUrl = `${BASE_URL}/api/facultyachievements/workshop/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/workshop/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/workshop`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/workshop`;
    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "FACULTY ACHIEVEMENTS IN PATENT GRANT",
                rows,
                columnHeaders,
                'Faculty_Patent_Grant'
            );
        }
    };

    return (
        <div className='mt-14'>
            <Navbar links={FacultyAchivements} IsClerk={true} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
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
                ref={tableRef}
            />
        </div>
    );
};

export default FacultyWorkShop;
