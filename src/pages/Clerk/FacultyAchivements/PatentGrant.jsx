import React, { useRef } from 'react';
import AchievementsTable from '../../../components/ui/TableComponent';
import axios from 'axios';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
import { BASE_URL } from '../../../api';
import { useSelector } from 'react-redux';
import { selectCurrentDept } from '../../../redux/auth';
import { generateWordDocument } from '../../../utils/generate';
const initialRows1 = [
    { name: '', title: '', patentno: '', grantdate: '' },
];


const columnHeaders1 = [
    { key: 'name', label: 'Name of the Faculty' },
    { key: 'title', label: 'Title ' },
    { key: 'patentno', label: 'Patent Number' },
    { key: 'grantdate', label: 'Date of Granted' },
];

const FacultyPatentGrant = () => {

    const tableRef = useRef(null);
    const dept = useSelector(selectCurrentDept)
    const FetchUrl = `${BASE_URL}/api/facultyachievements/patentgrant/getdata`;
    const SubmitUrl = `${BASE_URL}/api/facultyachievements/patentgrant/submit/${dept}`;
    const DeleteUrl = `${BASE_URL}/api/facultyachievements/patentgrant`;
    const UpdateUrl = `${BASE_URL}/api/facultyachievements/patentgrant`;

    const handleGenerateWord = () => {
        const table = tableRef.current;
        if (table) {
            const rows = table.rows;
            generateWordDocument(
                "FACULTY ACHIEVEMENTS IN PATENT GRANT",
                rows,
                columnHeaders1,
                'Faculty_Patent_Grant'
            );
        }
    };
    return (
        <div className='mt-14'>
            <Navbar links={FacultyAchivements} />
            <button onClick={handleGenerateWord} className="mt-4 bg-purple-500 text-white px-4 py-2 rounded">
                Generate Word Document
            </button>
            <AchievementsTable
                initialRows={initialRows1}
                columnHeaders={columnHeaders1}
                title="FACULTY ACHIEVEMENTS IN PATENT GRANT"
                numberOfColumns={4}
                SubmitUrl={SubmitUrl}
                FetchUrl={FetchUrl}
                DeleteUrl={DeleteUrl}
                UpdateUrl={UpdateUrl}
                ref={tableRef}
            />

        </div>
    );
};

export default FacultyPatentGrant;
